function g() {
}
function k(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function K(t) {
  return t();
}
function P() {
  return /* @__PURE__ */ Object.create(null);
}
function b(t) {
  t.forEach(K);
}
function M(t) {
  return typeof t == "function";
}
function R(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function J(t) {
  return Object.keys(t).length === 0;
}
function C(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function N(t, e) {
  t.appendChild(e);
}
function L(t, e, n) {
  t.insertBefore(e, n || null);
}
function V(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function v(t) {
  return document.createElement(t);
}
function a(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Q(t) {
  return Array.from(t.childNodes);
}
function _(t, e, n, o) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, o ? "important" : "");
}
let E;
function m(t) {
  E = t;
}
const h = [], q = [], p = [], z = [], T = Promise.resolve();
let j = !1;
function U() {
  j || (j = !0, T.then(X));
}
function S(t) {
  p.push(t);
}
const x = /* @__PURE__ */ new Set();
let y = 0;
function X() {
  const t = E;
  do {
    for (; y < h.length; ) {
      const e = h[y];
      y++, m(e), W(e.$$);
    }
    for (m(null), h.length = 0, y = 0; q.length; )
      q.pop()();
    for (let e = 0; e < p.length; e += 1) {
      const n = p[e];
      x.has(n) || (x.add(n), n());
    }
    p.length = 0;
  } while (h.length);
  for (; z.length; )
    z.pop()();
  j = !1, x.clear(), m(t);
}
function W(t) {
  if (t.fragment !== null) {
    t.update(), b(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(S);
  }
}
const w = /* @__PURE__ */ new Set();
let Z;
function Y(t, e) {
  t && t.i && (w.delete(t), t.i(e));
}
function $(t, e, n, o) {
  if (t && t.o) {
    if (w.has(t))
      return;
    w.add(t), Z.c.push(() => {
      w.delete(t), o && (n && t.d(1), o());
    }), t.o(e);
  } else
    o && o();
}
function tt(t, e) {
  const n = {}, o = {}, s = { $$scope: 1 };
  let i = t.length;
  for (; i--; ) {
    const r = t[i], f = e[i];
    if (f) {
      for (const u in r)
        u in f || (o[u] = 1);
      for (const u in f)
        s[u] || (n[u] = f[u], s[u] = 1);
      t[i] = f;
    } else
      for (const u in r)
        s[u] = 1;
  }
  for (const r in o)
    r in n || (n[r] = void 0);
  return n;
}
function et(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function nt(t) {
  t && t.c();
}
function D(t, e, n, o) {
  const { fragment: s, after_update: i } = t.$$;
  s && s.m(e, n), o || S(() => {
    const r = t.$$.on_mount.map(K).filter(M);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : b(r), t.$$.on_mount = [];
  }), i.forEach(S);
}
function G(t, e) {
  const n = t.$$;
  n.fragment !== null && (b(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ot(t, e) {
  t.$$.dirty[0] === -1 && (h.push(t), U(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function H(t, e, n, o, s, i, r, f = [-1]) {
  const u = E;
  m(t);
  const l = t.$$ = {
    fragment: null,
    ctx: [],
    props: i,
    update: g,
    not_equal: s,
    bound: P(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    callbacks: P(),
    dirty: f,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  r && r(l.root);
  let c = !1;
  if (l.ctx = n ? n(t, e.props || {}, (d, A, ...B) => {
    const O = B.length ? B[0] : A;
    return l.ctx && s(l.ctx[d], l.ctx[d] = O) && (!l.skip_bound && l.bound[d] && l.bound[d](O), c && ot(t, d)), A;
  }) : [], l.update(), c = !0, b(l.before_update), l.fragment = o ? o(l.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = Q(e.target);
      l.fragment && l.fragment.l(d), d.forEach(V);
    } else
      l.fragment && l.fragment.c();
    e.intro && Y(t.$$.fragment), D(t, e.target, e.anchor, e.customElement), X();
  }
  m(u);
}
class I {
  $destroy() {
    G(this, 1), this.$destroy = g;
  }
  $on(e, n) {
    if (!M(n))
      return g;
    const o = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return o.push(n), () => {
      const s = o.indexOf(n);
      s !== -1 && o.splice(s, 1);
    };
  }
  $set(e) {
    this.$$set && !J(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function it(t) {
  let e, n, o, s;
  return {
    c() {
      e = v("div"), n = v("div"), o = v("iframe"), a(o, "loading", "lazy"), a(o, "title", t[1]), a(o, "frameborder", "0"), a(o, "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"), o.allowFullscreen = !0, a(o, "scrolling", "no"), a(o, "srcdoc", s = `
      ` + F + `
        <a href='https://www.youtube.com/embed/` + t[0] + `?autoplay=1'>
          <img
            style='
              display: block;
              position: absolute;
              width: 100%;
              top: 0;
              bottom: 0;
              margin: auto;'
            src='` + t[5] + `'
            alt='` + t[1] + `'>
          <svg
            style='
              position: absolute;
              width: 100%;
              top: 0;
              bottom: 0;
              margin: auto;
              filter: drop-shadow(0px 0px 1px hsl(0, 0%, 0%));
              transition: all 250ms ease-in-out;'
            xmlns='http://www.w3.org/2000/svg'
            width='32%'
            height='32%'
            viewBox='0 0 24 24'
            fill='none'
            stroke='` + t[2] + `'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <circle cx='12' cy='12' r='10'></circle>
            <polygon points='10 8 16 12 10 16 10 8'></polygon>
          </svg>
        </a>
      `), a(o, "class", "svelte-1p91mi1"), _(n, "border-radius", t[3]), _(n, "box-shadow", t[4]), a(n, "class", "svelte-1p91mi1"), a(e, "class", "sveltetube svelte-1p91mi1");
    },
    m(i, r) {
      L(i, e, r), N(e, n), N(n, o);
    },
    p(i, [r]) {
      r & 2 && a(o, "title", i[1]), r & 7 && s !== (s = `
      ` + F + `
        <a href='https://www.youtube.com/embed/` + i[0] + `?autoplay=1'>
          <img
            style='
              display: block;
              position: absolute;
              width: 100%;
              top: 0;
              bottom: 0;
              margin: auto;'
            src='` + i[5] + `'
            alt='` + i[1] + `'>
          <svg
            style='
              position: absolute;
              width: 100%;
              top: 0;
              bottom: 0;
              margin: auto;
              filter: drop-shadow(0px 0px 1px hsl(0, 0%, 0%));
              transition: all 250ms ease-in-out;'
            xmlns='http://www.w3.org/2000/svg'
            width='32%'
            height='32%'
            viewBox='0 0 24 24'
            fill='none'
            stroke='` + i[2] + `'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <circle cx='12' cy='12' r='10'></circle>
            <polygon points='10 8 16 12 10 16 10 8'></polygon>
          </svg>
        </a>
      `) && a(o, "srcdoc", s), r & 8 && _(n, "border-radius", i[3]), r & 16 && _(n, "box-shadow", i[4]);
    },
    i: g,
    o: g,
    d(i) {
      i && V(e);
    }
  };
}
const F = "<style>body { margin: 0 }</style>";
function rt(t, e, n) {
  let { id: o = "XSK1Bt9O0Pw" } = e, { title: s = "Youtube Video" } = e, { color: i = "white" } = e, { poster: r = "" } = e, { radius: f = "0px" } = e, { shadow: u = "none" } = e;
  const l = r || `https://img.youtube.com/vi/${o}/hqdefault.jpg`;
  return t.$$set = (c) => {
    "id" in c && n(0, o = c.id), "title" in c && n(1, s = c.title), "color" in c && n(2, i = c.color), "poster" in c && n(6, r = c.poster), "radius" in c && n(3, f = c.radius), "shadow" in c && n(4, u = c.shadow);
  }, [o, s, i, f, u, l, r];
}
class st extends I {
  constructor(e) {
    super(), H(this, e, rt, it, R, {
      id: 0,
      title: 1,
      color: 2,
      poster: 6,
      radius: 3,
      shadow: 4
    });
  }
}
function lt(t) {
  let e, n;
  const o = [t[0]];
  let s = {};
  for (let i = 0; i < o.length; i += 1)
    s = k(s, o[i]);
  return e = new st({ props: s }), {
    c() {
      nt(e.$$.fragment);
    },
    m(i, r) {
      D(e, i, r), n = !0;
    },
    p(i, [r]) {
      const f = r & 1 ? tt(o, [et(i[0])]) : {};
      e.$set(f);
    },
    i(i) {
      n || (Y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      $(e.$$.fragment, i), n = !1;
    },
    d(i) {
      G(e, i);
    }
  };
}
function ut(t, e, n) {
  return t.$$set = (o) => {
    n(0, e = k(k({}, e), C(o)));
  }, e = C(e), [e];
}
class ct extends I {
  constructor(e) {
    super(), H(this, e, ut, lt, R, {});
  }
}
export {
  ct as default
};
