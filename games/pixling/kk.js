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

  var copy = document.getElementById('k-copy');
  copy.addEventListener('click', function () {
    var u = location.origin + location.pathname;
    function fail() { copy.textContent = u; }
    if (!navigator.clipboard) return fail();
    navigator.clipboard.writeText(u).then(function () { copy.textContent = copy.dataset.done; }, fail);
  });

  var clock = document.getElementById('k-clock');
  function tick() {
    clock.textContent = new Date().toLocaleTimeString(document.documentElement.lang, { hour: 'numeric', minute: '2-digit' });
  }
  tick();
  setInterval(tick, 20000);
})();
