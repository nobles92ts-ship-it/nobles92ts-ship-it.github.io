/**
 * 「나온 것」 피드 — 소스·주제 필터 + 정렬 + 한국어 요약 지연 로드.
 *
 * ⚠ 이 파일이 `src/` 가 아니라 `public/` 에 있는 이유: Astro 는 작은 <script> 를
 *   **페이지 HTML 에 인라인으로 박는다**(실측 — 번들 파일이 안 생기고 dist/_astro 에 js 가 0개였다).
 *   46장짜리 덱 페이지에서 그건 3.3KB 이고, 그만큼 카드 몫(껍데기를 뺀 나머지 ÷ 46장)이 줄어
 *   `check-weight` 가 **두 군데서** 운다. public/ 에 두면 그대로 복사되고 브라우저가 한 번 받아 캐시한다.
 *
 * ⚠ 여기 있는 것은 **전부 덤이다.** 이 파일이 없거나 JS 가 꺼져 있으면 칩·정렬이 안 먹고
 *   요약이 안 뜰 뿐, 카드는 전부 그대로 보인다. 이 페이지의 내용이 스크립트에 기대면 안 된다 —
 *   크롤러가 보는 것과 방문자가 보는 것이 갈린다.
 *
 * ⚠ **화면에 나가는 문장을 여기 적지 않는다.** 이 사이트의 UI 문자열 정본은 `content.ts` 한 곳이고,
 *   여기 적으면 이 파일이 두 언어를 알아야 한다. 필요한 형식은 페이지가 `data-fmt` 로 넘긴다.
 */
(() => {
  const deck = document.querySelector('.deck');
  if (!deck) return;
  const bar = document.querySelector('.srcf');
  const cards = [...deck.querySelectorAll('.card')];
  const none = document.getElementById('sfnone');

  // ── 필터·정렬. 고른 것은 **주소에 남는다**(?source_types=reddit,rss&topics=agents&sort=new) —
  //    새로고침해도, 링크를 넘겨도 같은 화면이 뜬다. aitrends 의 `source_types` 이름을 그대로 쓴다.
  if (bar && cards.length) {
    /** 두 축은 같은 코드로 돈다 — 다른 것은 **주소 이름과 읽는 속성**뿐이다.
     *  ⚠ `src` 는 카드마다 하나, `tp` 는 최대 셋이다. 그래서 판정이 「같은가」와 「들었나」로 갈린다.
     *    한 줄로 합치려다 공백 하나 차이로 `agents` 가 `agents-lite` 에 걸리는 버그를 낼 자리다. */
    const AXES = [
      { key: 'source_types', attr: 'sf', has: (c, v) => c.dataset.src === v },
      { key: 'topics', attr: 'tf', has: (c, v) => (c.dataset.tp ?? '').split(' ').includes(v) },
    ];
    const SORTS = {
      // 최신순 — 카드의 `data-at`(원문이 나온 때, 초 단위). 「가져온 때」가 아니다
      new: (a, b) => (+b.dataset.at || 0) - (+a.dataset.at || 0),
      // 많이 오른 순 — 처음 본 뒤로 지표가 얼마나 컸나(`growth`). 절대 크기가 아니라 **증분**이다
      rising: (a, b) => (+b.dataset.g || 0) - (+a.dataset.g || 0),
    };

    const reset = bar.querySelector('.rs');
    const sortSel = document.getElementById('sfsort');
    const nEl = document.getElementById('sfn');
    // ⚠ 「모은 순서」로 되돌리려면 처음 순서를 들고 있어야 한다. DOM 을 정렬하면 그 순서는 사라진다
    const order = cards.slice();
    let laid = ''; // 지금 화면에 깔려 있는 순서. 바뀔 때만 DOM 을 만진다

    for (const ax of AXES) {
      ax.chips = [...bar.querySelectorAll(`[data-${ax.attr}]`)];
      ax.known = new Set(ax.chips.map((c) => c.dataset[ax.attr]));
    }

    const readUrl = () => {
      const q = new URLSearchParams(location.search);
      // ⚠ 주소에 있는 이름이 이 페이지에 하나도 없으면 **거른 것이 없는 것으로 친다** —
      //   남의 링크를 타고 왔을 때 빈 화면이 아니라 전부가 보이는 쪽이 맞다
      const sel = AXES.map((ax) =>
        new Set((q.get(ax.key) ?? '').split(',').map((x) => x.trim()).filter((x) => ax.known.has(x))),
      );
      const s = q.get('sort');
      return { sel, sort: SORTS[s] ? s : '' };
    };

    const apply = ({ sel, sort }, push) => {
      let shown = 0;
      for (const c of cards) {
        // 축 사이는 AND, 축 안에서는 OR. 아무것도 안 고른 축은 통과다
        const hit = AXES.every((ax, i) => !sel[i].size || [...sel[i]].some((v) => ax.has(c, v)));
        c.hidden = !hit;
        if (hit) shown++;
      }
      for (const [i, ax] of AXES.entries())
        for (const c of ax.chips) c.setAttribute('aria-pressed', String(sel[i].has(c.dataset[ax.attr])));

      // 정렬은 **보이는 것만이 아니라 전부**를 다시 늘어놓는다. 필터를 풀었을 때 순서가 튀지 않게.
      // ⚠ 순서가 바뀔 때만 손댄다. 칩을 누를 때마다 36개를 다시 붙이면 그림이 다시 그려지고,
      //   펼쳐 둔 「우리가 본 것」이 스크롤 위치와 함께 튄다.
      if (laid !== sort) {
        laid = sort;
        deck.append(...(sort ? order.slice().sort(SORTS[sort]) : order));
      }
      if (sortSel) sortSel.value = sort;

      const on = sel.some((s) => s.size > 0);
      if (reset) reset.hidden = !on && !sort;
      if (none) none.hidden = shown > 0;
      if (nEl) {
        // 안 거른 상태의 「36장 중 36장」은 소음이라 안 낸다
        nEl.hidden = !on;
        if (on) nEl.textContent = (nEl.dataset.fmt ?? '{n}/{a}')
          .replace('{n}', shown).replace('{a}', cards.length);
      }

      if (push) {
        const u = new URL(location.href);
        for (const [i, ax] of AXES.entries()) {
          if (sel[i].size) u.searchParams.set(ax.key, [...sel[i]].join(','));
          else u.searchParams.delete(ax.key);
        }
        if (sort) u.searchParams.set('sort', sort);
        else u.searchParams.delete('sort');
        // replaceState — 칩 하나 누를 때마다 뒤로가기 한 칸을 만들지 않는다
        history.replaceState(null, '', u);
      }
    };

    for (const [i, ax] of AXES.entries())
      for (const c of ax.chips)
        c.addEventListener('click', () => {
          const st = readUrl();
          const id = c.dataset[ax.attr];
          st.sel[i].has(id) ? st.sel[i].delete(id) : st.sel[i].add(id);
          apply(st, true);
        });
    if (sortSel)
      sortSel.addEventListener('change', () => apply({ ...readUrl(), sort: sortSel.value }, true));
    // 초기화는 **정렬까지** 되돌린다. 칩만 풀고 순서가 남으면 「초기화했는데 그대로네」가 된다
    if (reset)
      reset.addEventListener('click', () => apply({ sel: AXES.map(() => new Set()), sort: '' }, true));

    apply(readUrl(), false); // 주소를 들고 들어온 경우
  }

  // ── 한국어 요약. **첫 펼치기 때 한 번만** 받는다(검색 색인과 같은 방식).
  //    카드 46장분이 12.6KB 라 HTML 에 넣으면 덱 페이지 예산 60KB 를 넘긴다.
  //
  //    ⚠ 열쇠는 **카드에 이미 있는 것**이다 — 제목 링크의 href. 카드마다 `data-ko="…"` 를
  //      심었더니 46장에 1.1KB 였고, 그건 화면에 없는 것을 새로 심은 값이었다.
  //    ⚠ 요약이 없는 카드는 조회가 그냥 빗나간다. 「있는지」를 미리 표시할 필요가 없다.
  let load = null;
  const fill = (d) => {
    if (d.dataset.koDone) return;
    d.dataset.koDone = '1';
    const url = d.closest('.cb')?.querySelector('.ct')?.href;
    if (!url) return;
    load ??= fetch('/ai-issue/summaries.ko.json').then((r) => r.json()).catch(() => null);
    load.then((j) => {
      const got = j?.items?.[url];
      // 못 받았으면 **아무것도 안 만든다.** 「요약 없음」을 쓰면 요약이 있는데 실패한 것과
      // 애초에 없는 것이 같은 화면이 된다
      if (!got?.s) return;
      const p = document.createElement('p');
      p.className = 'kos';
      p.textContent = got.s;
      d.querySelector('summary')?.after(p);
    });
  };
  // details 는 열릴 때 toggle 을 낸다. 버블링이 안 되므로 캡처로 받는다
  document.addEventListener('toggle', (e) => {
    const d = e.target;
    if (d instanceof HTMLDetailsElement && d.open) fill(d);
  }, true);
})();
