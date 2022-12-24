function y() {
}
function Z(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function de(t) {
  return t();
}
function ne() {
  return /* @__PURE__ */ Object.create(null);
}
function $(t) {
  t.forEach(de);
}
function x(t) {
  return typeof t == "function";
}
function H(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function ke(t) {
  return Object.keys(t).length === 0;
}
function be(t, ...e) {
  if (t == null)
    return y;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function U(t, e, n) {
  t.$$.on_destroy.push(be(e, n));
}
function re(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function C(t, e, n) {
  return t.set(n), e;
}
function _e(t) {
  return t && x(t.destroy) ? t.destroy : y;
}
function k(t, e) {
  t.appendChild(e);
}
function v(t, e, n) {
  t.insertBefore(e, n || null);
}
function b(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function he(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function g(t) {
  return document.createElement(t);
}
function W(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function me(t) {
  return document.createTextNode(t);
}
function A() {
  return me(" ");
}
function we() {
  return me("");
}
function w(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function ye(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function f(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function ve(t) {
  return Array.from(t.childNodes);
}
function se(t, e, n, r) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
function E(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
let ee;
function j(t) {
  ee = t;
}
function L(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((r) => r.call(this, e));
}
const S = [], le = [], J = [], oe = [], $e = Promise.resolve();
let G = !1;
function Oe() {
  G || (G = !0, $e.then(ge));
}
function X(t) {
  J.push(t);
}
const Q = /* @__PURE__ */ new Set();
let I = 0;
function ge() {
  const t = ee;
  do {
    for (; I < S.length; ) {
      const e = S[I];
      I++, j(e), Me(e.$$);
    }
    for (j(null), S.length = 0, I = 0; le.length; )
      le.pop()();
    for (let e = 0; e < J.length; e += 1) {
      const n = J[e];
      Q.has(n) || (Q.add(n), n());
    }
    J.length = 0;
  } while (S.length);
  for (; oe.length; )
    oe.pop()();
  G = !1, Q.clear(), j(t);
}
function Me(t) {
  if (t.fragment !== null) {
    t.update(), $(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(X);
  }
}
const q = /* @__PURE__ */ new Set();
let Te;
function D(t, e) {
  t && t.i && (q.delete(t), t.i(e));
}
function F(t, e, n, r) {
  if (t && t.o) {
    if (q.has(t))
      return;
    q.add(t), Te.c.push(() => {
      q.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function Ne(t, e) {
  const n = {}, r = {}, s = { $$scope: 1 };
  let l = t.length;
  for (; l--; ) {
    const o = t[l], c = e[l];
    if (c) {
      for (const i in o)
        i in c || (r[i] = 1);
      for (const i in c)
        s[i] || (n[i] = c[i], s[i] = 1);
      t[l] = c;
    } else
      for (const i in o)
        s[i] = 1;
  }
  for (const o in r)
    o in n || (n[o] = void 0);
  return n;
}
function Ee(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function K(t) {
  t && t.c();
}
function V(t, e, n, r) {
  const { fragment: s, after_update: l } = t.$$;
  s && s.m(e, n), r || X(() => {
    const o = t.$$.on_mount.map(de).filter(x);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : $(o), t.$$.on_mount = [];
  }), l.forEach(X);
}
function z(t, e) {
  const n = t.$$;
  n.fragment !== null && ($(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function He(t, e) {
  t.$$.dirty[0] === -1 && (S.push(t), Oe(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function B(t, e, n, r, s, l, o, c = [-1]) {
  const i = ee;
  j(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    props: l,
    update: y,
    not_equal: s,
    bound: ne(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (i ? i.$$.context : [])),
    callbacks: ne(),
    dirty: c,
    skip_bound: !1,
    root: e.target || i.$$.root
  };
  o && o(u.root);
  let a = !1;
  if (u.ctx = n ? n(t, e.props || {}, (d, O, ...h) => {
    const m = h.length ? h[0] : O;
    return u.ctx && s(u.ctx[d], u.ctx[d] = m) && (!u.skip_bound && u.bound[d] && u.bound[d](m), a && He(t, d)), O;
  }) : [], u.update(), a = !0, $(u.before_update), u.fragment = r ? r(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = ve(e.target);
      u.fragment && u.fragment.l(d), d.forEach(b);
    } else
      u.fragment && u.fragment.c();
    e.intro && D(t.$$.fragment), V(t, e.target, e.anchor, e.customElement), ge();
  }
  j(i);
}
class P {
  $destroy() {
    z(this, 1), this.$destroy = y;
  }
  $on(e, n) {
    if (!x(n))
      return y;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const s = r.indexOf(n);
      s !== -1 && r.splice(s, 1);
    };
  }
  $set(e) {
    this.$$set && !ke(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
let R;
const Ce = (t) => {
  R || (R = new IntersectionObserver((e) => {
    e.forEach((n) => {
      const r = n.isIntersecting ? "enterViewport" : "exitViewport";
      n.target.dispatchEvent(new CustomEvent(r));
    });
  }, t));
}, Le = (t, e) => (Ce(e), R.observe(t), {
  destroy() {
    R.unobserve(t);
  }
}), T = [];
function pe(t, e = y) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function s(c) {
    if (H(t, c) && (t = c, n)) {
      const i = !T.length;
      for (const u of r)
        u[1](), T.push(u, t);
      if (i) {
        for (let u = 0; u < T.length; u += 2)
          T[u][0](T[u + 1]);
        T.length = 0;
      }
    }
  }
  function l(c) {
    s(c(t));
  }
  function o(c, i = y) {
    const u = [c, i];
    return r.add(u), r.size === 1 && (n = e(s) || y), c(t), () => {
      r.delete(u), r.size === 0 && (n(), n = null);
    };
  }
  return { set: s, update: l, subscribe: o };
}
const Y = pe(!0), N = pe(!1);
function Se(t) {
  let e, n;
  return {
    c() {
      e = W("svg"), n = W("path"), f(n, "stroke-linecap", "round"), f(n, "stroke-linejoin", "round"), f(n, "d", "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"), f(e, "xmlns", "http://www.w3.org/2000/svg"), f(e, "fill", "none"), f(e, "viewBox", "0 0 24 24"), f(e, "stroke-width", "1.5"), f(e, "stroke", "currentColor"), f(e, "class", "w-6 h-6 svelte-c9blf9");
    },
    m(r, s) {
      v(r, e, s), k(e, n);
    },
    d(r) {
      r && b(e);
    }
  };
}
function je(t) {
  let e, n;
  return {
    c() {
      e = W("svg"), n = W("path"), f(n, "stroke-linecap", "round"), f(n, "stroke-linejoin", "round"), f(n, "d", "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"), f(e, "xmlns", "http://www.w3.org/2000/svg"), f(e, "fill", "none"), f(e, "viewBox", "0 0 24 24"), f(e, "stroke-width", "1.5"), f(e, "stroke", "currentColor"), f(e, "class", "w-6 h-6 svelte-c9blf9");
    },
    m(r, s) {
      v(r, e, s), k(e, n);
    },
    d(r) {
      r && b(e);
    }
  };
}
function Ae(t) {
  let e, n, r;
  function s(c, i) {
    return c[0] ? je : Se;
  }
  let l = s(t), o = l(t);
  return {
    c() {
      e = g("a"), o.c(), f(e, "href", "#"), f(e, "class", "svelte-c9blf9");
    },
    m(c, i) {
      v(c, e, i), o.m(e, null), n || (r = [
        _e(t[2].call(null, e)),
        w(e, "click", ye(t[1])),
        w(e, "keypress", t[3])
      ], n = !0);
    },
    p(c, [i]) {
      l !== (l = s(c)) && (o.d(1), o = l(c), o && (o.c(), o.m(e, null)));
    },
    i: y,
    o: y,
    d(c) {
      c && b(e), o.d(), n = !1, $(r);
    }
  };
}
function De(t, e, n) {
  let r = !1;
  const s = () => {
    document.body.classList.toggle("dark"), n(0, r = !r);
  }, l = () => localStorage.getItem("stroopwafels-theme"), o = () => !!l() && JSON.parse(l() ?? ""), c = () => localStorage.setItem("stroopwafels-theme", JSON.stringify(r)), i = () => {
    s(), c();
  };
  return [r, i, (d) => {
    n(0, r = o()), r && document.body.classList.add("dark"), !r && document.body.classList.remove("dark");
  }, (d) => d.key === "Enter" && i];
}
class Ve extends P {
  constructor(e) {
    super(), B(this, e, De, Ae, H, {});
  }
}
function ie(t, e, n) {
  const r = t.slice();
  return r[5] = e[n], r;
}
function ce(t, e, n) {
  const r = t.slice();
  return r[8] = e[n], r;
}
function ue(t) {
  let e, n = t[5].children, r = [];
  for (let s = 0; s < n.length; s += 1)
    r[s] = fe(ce(t, n, s));
  return {
    c() {
      e = g("ul");
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      f(e, "class", "svelte-2kwp0s");
    },
    m(s, l) {
      v(s, e, l);
      for (let o = 0; o < r.length; o += 1)
        r[o].m(e, null);
    },
    p(s, l) {
      if (l & 9) {
        n = s[5].children;
        let o;
        for (o = 0; o < n.length; o += 1) {
          const c = ce(s, n, o);
          r[o] ? r[o].p(c, l) : (r[o] = fe(c), r[o].c(), r[o].m(e, null));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = n.length;
      }
    },
    d(s) {
      s && b(e), he(r, s);
    }
  };
}
function fe(t) {
  let e, n, r = t[8].name + "", s, l, o, c;
  return {
    c() {
      e = g("li"), n = g("a"), f(n, "href", s = t[8].url), f(n, "target", l = t[5].target), f(n, "class", "svelte-2kwp0s"), f(e, "class", "svelte-2kwp0s");
    },
    m(i, u) {
      v(i, e, u), k(e, n), n.innerHTML = r, o || (c = w(n, "click", t[3]), o = !0);
    },
    p(i, u) {
      u & 1 && r !== (r = i[8].name + "") && (n.innerHTML = r), u & 1 && s !== (s = i[8].url) && f(n, "href", s), u & 1 && l !== (l = i[5].target) && f(n, "target", l);
    },
    d(i) {
      i && b(e), o = !1, c();
    }
  };
}
function ae(t) {
  let e, n, r = t[5].name + "", s, l, o, c, i, u = t[5].children && ue(t);
  return {
    c() {
      e = g("li"), n = g("a"), o = A(), u && u.c(), f(n, "href", s = t[5].url), f(n, "target", l = t[5].target), f(n, "class", "svelte-2kwp0s"), f(e, "class", "svelte-2kwp0s");
    },
    m(a, d) {
      v(a, e, d), k(e, n), n.innerHTML = r, k(e, o), u && u.m(e, null), c || (i = w(n, "click", t[3]), c = !0);
    },
    p(a, d) {
      d & 1 && r !== (r = a[5].name + "") && (n.innerHTML = r), d & 1 && s !== (s = a[5].url) && f(n, "href", s), d & 1 && l !== (l = a[5].target) && f(n, "target", l), a[5].children ? u ? u.p(a, d) : (u = ue(a), u.c(), u.m(e, null)) : u && (u.d(1), u = null);
    },
    d(a) {
      a && b(e), u && u.d(), c = !1, i();
    }
  };
}
function ze(t) {
  let e, n, r, s, l, o, c, i, u, a, d, O, h = t[0], m = [];
  for (let _ = 0; _ < h.length; _ += 1)
    m[_] = ae(ie(t, h, _));
  return i = new Ve({}), {
    c() {
      e = g("nav"), n = g("h1"), r = g("a"), s = A(), l = g("ul");
      for (let _ = 0; _ < m.length; _ += 1)
        m[_].c();
      o = A(), c = g("li"), u = g("div"), K(i.$$.fragment), f(r, "href", "/"), f(r, "class", "svelte-2kwp0s"), f(n, "class", "svelte-2kwp0s"), se(u, "display", "contents"), se(u, "--width", "1.5rem"), f(c, "class", "svelte-2kwp0s"), f(l, "class", "svelte-2kwp0s"), f(e, "class", "svelte-2kwp0s"), E(e, "isOpen", t[2]);
    },
    m(_, M) {
      v(_, e, M), k(e, n), k(n, r), r.innerHTML = t[1], k(e, s), k(e, l);
      for (let p = 0; p < m.length; p += 1)
        m[p].m(l, null);
      k(l, o), k(l, c), k(c, u), V(i, u, null), a = !0, d || (O = [
        w(r, "click", t[3]),
        w(c, "click", t[3]),
        w(c, "keypress", t[4])
      ], d = !0);
    },
    p(_, [M]) {
      if ((!a || M & 2) && (r.innerHTML = _[1]), M & 9) {
        h = _[0];
        let p;
        for (p = 0; p < h.length; p += 1) {
          const te = ie(_, h, p);
          m[p] ? m[p].p(te, M) : (m[p] = ae(te), m[p].c(), m[p].m(l, o));
        }
        for (; p < m.length; p += 1)
          m[p].d(1);
        m.length = h.length;
      }
      (!a || M & 4) && E(e, "isOpen", _[2]);
    },
    i(_) {
      a || (D(i.$$.fragment, _), a = !0);
    },
    o(_) {
      F(i.$$.fragment, _), a = !1;
    },
    d(_) {
      _ && b(e), he(m, _), z(i), d = !1, $(O);
    }
  };
}
function Be(t, e, n) {
  let r;
  U(t, N, (i) => n(2, r = i));
  let { items: s } = e, { logo: l = "Logo" } = e;
  const o = async () => {
    C(N, r = !1, r);
  };
  function c(i) {
    L.call(this, t, i);
  }
  return t.$$set = (i) => {
    "items" in i && n(0, s = i.items), "logo" in i && n(1, l = i.logo);
  }, [s, l, r, o, c];
}
class Pe extends P {
  constructor(e) {
    super(), B(this, e, Be, ze, H, { items: 0, logo: 1 });
  }
}
function Ie(t) {
  let e, n, r;
  return {
    c() {
      e = g("i"), f(e, "class", "fa fa-2x fa-bars svelte-1ufffgu");
    },
    m(s, l) {
      v(s, e, l), n || (r = [
        w(e, "click", t[3]),
        w(e, "keypress", t[4])
      ], n = !0);
    },
    p: y,
    d(s) {
      s && b(e), n = !1, $(r);
    }
  };
}
function Je(t) {
  let e, n, r;
  return {
    c() {
      e = g("i"), f(e, "class", "fa-solid fa-2x fa-x svelte-1ufffgu"), E(e, "isOpen", t[0]);
    },
    m(s, l) {
      v(s, e, l), n || (r = [
        w(e, "click", t[1]),
        w(e, "keypress", t[2])
      ], n = !0);
    },
    p(s, l) {
      l & 1 && E(e, "isOpen", s[0]);
    },
    d(s) {
      s && b(e), n = !1, $(r);
    }
  };
}
function qe(t) {
  let e, n, r;
  function s(c, i) {
    return c[0] ? Je : Ie;
  }
  let l = s(t), o = l(t);
  return {
    c() {
      e = g("link"), n = A(), o.c(), r = we(), f(e, "rel", "stylesheet"), f(e, "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"), f(e, "integrity", "sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="), f(e, "crossorigin", "anonymous"), f(e, "referrerpolicy", "no-referrer");
    },
    m(c, i) {
      k(document.head, e), v(c, n, i), o.m(c, i), v(c, r, i);
    },
    p(c, [i]) {
      l === (l = s(c)) && o ? o.p(c, i) : (o.d(1), o = l(c), o && (o.c(), o.m(r.parentNode, r)));
    },
    i: y,
    o: y,
    d(c) {
      b(e), c && b(n), o.d(c), c && b(r);
    }
  };
}
function Ue(t, e, n) {
  let r;
  U(t, N, (i) => n(0, r = i));
  function s(i) {
    L.call(this, t, i);
  }
  function l(i) {
    L.call(this, t, i);
  }
  function o(i) {
    L.call(this, t, i);
  }
  function c(i) {
    L.call(this, t, i);
  }
  return [r, s, l, o, c];
}
class We extends P {
  constructor(e) {
    super(), B(this, e, Ue, qe, H, {});
  }
}
function Xe(t) {
  let e, n, r, s, l, o, c, i;
  return X(t[7]), r = new Pe({
    props: {
      items: t[0],
      logo: t[1]
    }
  }), r.$on("click", t[5]), l = new We({}), l.$on("click", t[6]), {
    c() {
      e = g("header"), n = g("div"), K(r.$$.fragment), s = A(), K(l.$$.fragment), f(n, "class", "svelte-1wpa3m2"), f(e, "class", "svelte-1wpa3m2"), E(e, "isOpen", t[3]);
    },
    m(u, a) {
      v(u, e, a), k(e, n), V(r, n, null), k(n, s), V(l, n, null), o = !0, c || (i = [
        w(window, "resize", t[7]),
        _e(Le.call(null, e, { rootMargin: "100%" })),
        w(e, "enterViewport", t[8]),
        w(e, "exitViewport", t[9])
      ], c = !0);
    },
    p(u, [a]) {
      const d = {};
      a & 1 && (d.items = u[0]), a & 2 && (d.logo = u[1]), r.$set(d), (!o || a & 8) && E(e, "isOpen", u[3]);
    },
    i(u) {
      o || (D(r.$$.fragment, u), D(l.$$.fragment, u), o = !0);
    },
    o(u) {
      F(r.$$.fragment, u), F(l.$$.fragment, u), o = !1;
    },
    d(u) {
      u && b(e), z(r), z(l), c = !1, $(i);
    }
  };
}
const Fe = 768;
function Ke(t, e, n) {
  let r, s;
  U(t, N, (h) => n(3, r = h)), U(t, Y, (h) => n(4, s = h));
  let { items: l = [
    { name: "Home", url: "/" },
    {
      name: "About",
      url: "/about",
      children: [{ name: "Team", url: "/team" }, { name: "Careers", url: "/careers" }]
    },
    {
      name: "NPM",
      url: "https://www.npmjs.com/package/stroopwafels",
      target: "_blank"
    },
    { name: "Sidebar", url: "/sidebar" }
  ] } = e, { logo: o = "Logo" } = e, c;
  const i = () => C(N, r = !1, r), u = () => C(N, r = !r, r);
  function a() {
    n(2, c = window.innerWidth);
  }
  const d = () => C(Y, s = !1, s), O = () => C(Y, s = !0, s);
  return t.$$set = (h) => {
    "items" in h && n(0, l = h.items), "logo" in h && n(1, o = h.logo);
  }, t.$$.update = () => {
    t.$$.dirty & 4 && c > Fe && i();
  }, [
    l,
    o,
    c,
    r,
    s,
    i,
    u,
    a,
    d,
    O
  ];
}
class Re extends P {
  constructor(e) {
    super(), B(this, e, Ke, Xe, H, { items: 0, logo: 1 });
  }
}
function Qe(t) {
  let e, n;
  const r = [t[0]];
  let s = {};
  for (let l = 0; l < r.length; l += 1)
    s = Z(s, r[l]);
  return e = new Re({ props: s }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, o) {
      V(e, l, o), n = !0;
    },
    p(l, [o]) {
      const c = o & 1 ? Ne(r, [Ee(l[0])]) : {};
      e.$set(c);
    },
    i(l) {
      n || (D(e.$$.fragment, l), n = !0);
    },
    o(l) {
      F(e.$$.fragment, l), n = !1;
    },
    d(l) {
      z(e, l);
    }
  };
}
function Ye(t, e, n) {
  return t.$$set = (r) => {
    n(0, e = Z(Z({}, e), re(r)));
  }, e = re(e), [e];
}
class Ze extends P {
  constructor(e) {
    super(), B(this, e, Ye, Qe, H, {});
  }
}
export {
  Ze as default
};
