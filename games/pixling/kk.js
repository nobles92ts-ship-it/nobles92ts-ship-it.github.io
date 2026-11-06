// 깨알 소개 화면(`.kk`) 전용 — DESIGN.md §6.5. 깨알 ko·en 페이지만 부른다.
// 없어도 내용은 다 보인다. 숨기기 · 시험 칸 · 시계 · 주소 복사만 안 움직인다.
(function () {
  var root = document.querySelector('.kk');
  if (!root) return;
  var toggles = root.querySelectorAll('.js-hide');

  function toggleHide() {
    var on = root.classList.toggle('hide');
    toggles.forEach(function (b) {
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      var l = b.querySelector('.k-lbl');
      if (l) l.textContent = on ? root.dataset.show : root.dataset.hide;
    });
  }
  toggles.forEach(function (b) { b.addEventListener('click', toggleHide); });

  // 시험 칸: 횟수만 더한다. 어떤 키인지는 ₩ 숨기기를 가를 때만 보고 어디에도 남기지 않는다.
  var keys = 0, clicks = 0;
  var nk = document.getElementById('k-nk'), nm = document.getElementById('k-nm'), nx = document.getElementById('k-nx');
  function show() { nk.textContent = keys; nm.textContent = clicks; nx.textContent = keys + clicks * 2; }

  document.addEventListener('keydown', function (e) {
    // ⚠ 검색창에 칠 때는 세지도 숨기지도 않는다 — 글자를 치는 중이다.
    if (e.target.closest && e.target.closest('input,textarea')) return;
    if (!e.repeat) { keys++; show(); }
    if (e.repeat || e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) return;
    if (e.key === '₩' || e.key === '\\' || e.code === 'Backslash' || e.code === 'IntlYen') toggleHide();
  });
  document.addEventListener('pointerdown', function () { clicks++; show(); });

  // 주소 복사. ⚠ 스레드·인스타 안의 브라우저는 navigator.clipboard 가 없거나 거절한다 → execCommand 로 한 번 더.
  var copy = document.getElementById('k-copy');
  var url = location.origin + location.pathname;
  function copyUrl(ok, fail) {
    function old() {
      var t = document.createElement('textarea');
      t.value = url; t.setAttribute('readonly', ''); t.style.position = 'fixed'; t.style.opacity = '0';
      document.body.appendChild(t); t.select();
      var done = false;
      try { done = document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(t);
      done ? ok() : fail();
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(ok, old);
    else old();
  }
  function copied() { copy.textContent = copy.dataset.done; }
  function failed() { copy.textContent = url; copy.scrollIntoView({ block: 'center' }); }
  copy.addEventListener('click', function () { copyUrl(copied, failed); });

  // 휴대폰에서는 받기 버튼이 zip 대신 PC 주소를 복사한다 — 폰에 zip 을 받아 봐야 못 연다.
  // ⚠ 2026-11-05 스토어 구성으로 바꿀 때 이걸 빠뜨려 폰에서 zip 이 받아졌다(11-06 형근님 지적).
  //   예전 받기 상자는 폰에서 받기 버튼을 숨겼다. 지금은 버튼을 두고 누름의 뜻을 바꾼다.
  var phone = window.matchMedia('(max-width:767px), (hover:none) and (pointer:coarse)');
  root.querySelectorAll('a[href$=".zip"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (!phone.matches) return;
      e.preventDefault();
      copyUrl(function () {
        copied();
        if (a.dataset.label == null) a.dataset.label = a.innerHTML;
        a.textContent = root.dataset.copied;
        setTimeout(function () { a.innerHTML = a.dataset.label; }, 2500);
      }, failed);
    });
  });

  var clock = document.getElementById('k-clock');
  function tick() {
    clock.textContent = new Date().toLocaleTimeString(document.documentElement.lang, { hour: 'numeric', minute: '2-digit' });
  }
  tick();
  setInterval(tick, 20000);
})();
