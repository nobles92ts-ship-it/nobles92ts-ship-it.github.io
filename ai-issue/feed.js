/**
 * 「나온 것」 피드 — 소스 필터 + 한국어 요약 지연 로드.
 *
 * ⚠ 이 파일이 `src/` 가 아니라 `public/` 에 있는 이유: Astro 는 작은 <script> 를
 *   **페이지 HTML 에 인라인으로 박는다**(실측 — 번들 파일이 안 생기고 dist/_astro 에 js 가 0개였다).
 *   46장짜리 덱 페이지에서 그건 3.3KB 이고, 그만큼 카드 몫(껍데기를 뺀 나머지 ÷ 46장)이 줄어
 *   `check-weight` 가 **두 군데서** 운다. public/ 에 두면 그대로 복사되고 브라우저가 한 번 받아 캐시한다.
 *
 * ⚠ 둘 다 **덤이다.** 이 파일이 없거나 JS 가 꺼져 있으면 칩이 안 먹고 요약이 안 뜰 뿐,
 *   카드는 전부 그대로 보인다. 이 페이지의 내용이 스크립트에 기대면 안 된다 —
 *   크롤러가 보는 것과 방문자가 보는 것이 갈린다.
 */
// ── 소스 필터. 고른 것은 **주소에 남는다**(?source_types=reddit,podcast) —
  //    새로고침해도, 링크를 넘겨도 같은 화면이 뜬다. aitrends 의 같은 파라미터 이름을 그대로 쓴다.
  const bar = document.querySelector('.srcf');
  const cards = [...document.querySelectorAll('.deck .card')];
  const none = document.getElementById('sfnone');
  if (bar && cards.length) {
    const chips = [...bar.querySelectorAll('[data-sf]')];
    const reset = bar.querySelector('.rs');
    const KEY = 'source_types';

    const read = () => {
      const raw = new URLSearchParams(location.search).get(KEY);
      const want = new Set((raw ?? '').split(',').map((x) => x.trim()).filter(Boolean));
      // 주소에 있는 이름이 이 페이지에 하나도 없으면 **거른 것이 없는 것으로 친다** —
      // 남의 링크를 타고 왔을 때 빈 화면이 아니라 전부가 보이는 쪽이 맞다
      const known = new Set(chips.map((c) => c.dataset.sf));
      return new Set([...want].filter((x) => known.has(x)));
    };

    const apply = (sel, push) => {
      const on = sel.size > 0;
      let shown = 0;
      for (const c of cards) {
        const hit = !on || sel.has(c.dataset.src);
        c.hidden = !hit;
        if (hit) shown++;
      }
      for (const c of chips) c.setAttribute('aria-pressed', String(sel.has(c.dataset.sf)));
      if (reset) reset.hidden = !on;
      if (none) none.hidden = shown > 0;
      if (push) {
        const u = new URL(location.href);
        if (on) u.searchParams.set(KEY, [...sel].join(','));
        else u.searchParams.delete(KEY);
        // replaceState — 칩 하나 누를 때마다 뒤로가기 한 칸을 만들지 않는다
        history.replaceState(null, '', u);
      }
    };

    for (const c of chips)
      c.addEventListener('click', () => {
        const sel = read();
        sel.has(c.dataset.sf) ? sel.delete(c.dataset.sf) : sel.add(c.dataset.sf);
        apply(sel, true);
      });
    if (reset) reset.addEventListener('click', () => apply(new Set(), true));
    apply(read(), false);   // 주소를 들고 들어온 경우
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
