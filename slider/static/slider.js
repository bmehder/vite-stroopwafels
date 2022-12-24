function y() {
}
function st(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function _t(t) {
  return t();
}
function ft() {
  return /* @__PURE__ */ Object.create(null);
}
function E(t) {
  t.forEach(_t);
}
function et(t) {
  return typeof t == "function";
}
function V(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let J;
function at(t, e) {
  return J || (J = document.createElement("a")), J.href = e, t === J.href;
}
function At(t) {
  return Object.keys(t).length === 0;
}
function dt(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function $t(t) {
  return t && et(t.destroy) ? t.destroy : y;
}
function m(t, e) {
  t.appendChild(e);
}
function B(t, e, n) {
  t.insertBefore(e, n || null);
}
function x(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function St(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function k(t) {
  return document.createElement(t);
}
function Y(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function pt(t) {
  return document.createTextNode(t);
}
function C() {
  return pt(" ");
}
function Lt() {
  return pt("");
}
function j(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function g(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Pt(t) {
  return Array.from(t.childNodes);
}
function P(t, e, n, l) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, l ? "important" : "");
}
let ut;
function N(t) {
  ut = t;
}
function M(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((l) => l.call(this, e));
}
const z = [], Z = [], D = [], rt = [], jt = Promise.resolve();
let it = !1;
function xt() {
  it || (it = !0, jt.then(mt));
}
function tt(t) {
  D.push(t);
}
function Tt(t) {
  rt.push(t);
}
const ot = /* @__PURE__ */ new Set();
let K = 0;
function mt() {
  const t = ut;
  do {
    for (; K < z.length; ) {
      const e = z[K];
      K++, N(e), Et(e.$$);
    }
    for (N(null), z.length = 0, K = 0; Z.length; )
      Z.pop()();
    for (let e = 0; e < D.length; e += 1) {
      const n = D[e];
      ot.has(n) || (ot.add(n), n());
    }
    D.length = 0;
  } while (z.length);
  for (; rt.length; )
    rt.pop()();
  it = !1, ot.clear(), N(t);
}
function Et(t) {
  if (t.fragment !== null) {
    t.update(), E(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(tt);
  }
}
const G = /* @__PURE__ */ new Set();
let Bt;
function I(t, e) {
  t && t.i && (G.delete(t), t.i(e));
}
function Q(t, e, n, l) {
  if (t && t.o) {
    if (G.has(t))
      return;
    G.add(t), Bt.c.push(() => {
      G.delete(t), l && (n && t.d(1), l());
    }), t.o(e);
  } else
    l && l();
}
const Ht = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function Mt(t, e) {
  const n = {}, l = {}, s = { $$scope: 1 };
  let o = t.length;
  for (; o--; ) {
    const r = t[o], a = e[o];
    if (a) {
      for (const i in r)
        i in a || (l[i] = 1);
      for (const i in a)
        s[i] || (n[i] = a[i], s[i] = 1);
      t[o] = a;
    } else
      for (const i in r)
        s[i] = 1;
  }
  for (const r in l)
    r in n || (n[r] = void 0);
  return n;
}
function Ot(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function qt(t, e, n, l) {
  const s = t.$$.props[e];
  s !== void 0 && (t.$$.bound[s] = n, l === void 0 && n(t.$$.ctx[s]));
}
function U(t) {
  t && t.c();
}
function R(t, e, n, l) {
  const { fragment: s, after_update: o } = t.$$;
  s && s.m(e, n), l || tt(() => {
    const r = t.$$.on_mount.map(_t).filter(et);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : E(r), t.$$.on_mount = [];
  }), o.forEach(tt);
}
function F(t, e) {
  const n = t.$$;
  n.fragment !== null && (E(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function zt(t, e) {
  t.$$.dirty[0] === -1 && (z.push(t), xt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function W(t, e, n, l, s, o, r, a = [-1]) {
  const i = ut;
  N(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    props: o,
    update: y,
    not_equal: s,
    bound: ft(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (i ? i.$$.context : [])),
    callbacks: ft(),
    dirty: a,
    skip_bound: !1,
    root: e.target || i.$$.root
  };
  r && r(c.root);
  let f = !1;
  if (c.ctx = n ? n(t, e.props || {}, (h, w, ...v) => {
    const T = v.length ? v[0] : w;
    return c.ctx && s(c.ctx[h], c.ctx[h] = T) && (!c.skip_bound && c.bound[h] && c.bound[h](T), f && zt(t, h)), w;
  }) : [], c.update(), f = !0, E(c.before_update), c.fragment = l ? l(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const h = Pt(e.target);
      c.fragment && c.fragment.l(h), h.forEach(x);
    } else
      c.fragment && c.fragment.c();
    e.intro && I(t.$$.fragment), R(t, e.target, e.anchor, e.customElement), mt();
  }
  N(i);
}
class X {
  $destroy() {
    F(this, 1), this.$destroy = y;
  }
  $on(e, n) {
    if (!et(n))
      return y;
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(n), () => {
      const s = l.indexOf(n);
      s !== -1 && l.splice(s, 1);
    };
  }
  $set(e) {
    this.$$set && !At(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function Ct(t) {
  let e, n, l;
  return {
    c() {
      e = k("button"), e.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 svelte-8c4gff"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path></svg>', g(e, "class", "svelte-8c4gff");
    },
    m(s, o) {
      B(s, e, o), n || (l = j(e, "click", t[0]), n = !0);
    },
    p: y,
    i: y,
    o: y,
    d(s) {
      s && x(e), n = !1, l();
    }
  };
}
function Nt(t) {
  function e(n) {
    M.call(this, t, n);
  }
  return [e];
}
class It extends X {
  constructor(e) {
    super(), W(this, e, Nt, Ct, V, {});
  }
}
function Rt(t) {
  let e, n, l, s;
  return {
    c() {
      e = Y("svg"), n = Y("path"), g(n, "fill-rule", "evenodd"), g(n, "d", "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"), g(n, "clip-rule", "evenodd"), g(e, "xmlns", "http://www.w3.org/2000/svg"), g(e, "viewBox", "0 0 24 24"), g(e, "fill", "currentColor"), g(e, "class", "w-6 h-6 svelte-wpusif");
    },
    m(o, r) {
      B(o, e, r), m(e, n), l || (s = [
        j(e, "click", t[3]),
        j(e, "keydown", t[4])
      ], l = !0);
    },
    d(o) {
      o && x(e), l = !1, E(s);
    }
  };
}
function Ft(t) {
  let e, n, l, s;
  return {
    c() {
      e = Y("svg"), n = Y("path"), g(n, "fill-rule", "evenodd"), g(n, "d", "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM9 8.25a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H9zm5.25 0a.75.75 0 00-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75h-.75z"), g(n, "clip-rule", "evenodd"), g(e, "xmlns", "http://www.w3.org/2000/svg"), g(e, "viewBox", "0 0 24 24"), g(e, "fill", "currentColor"), g(e, "class", "w-6 h-6 svelte-wpusif");
    },
    m(o, r) {
      B(o, e, r), m(e, n), l || (s = [
        j(e, "click", t[1]),
        j(e, "keydown", t[2])
      ], l = !0);
    },
    d(o) {
      o && x(e), l = !1, E(s);
    }
  };
}
function Vt(t) {
  let e;
  function n(o, r) {
    return o[0] ? Ft : Rt;
  }
  let l = n(t), s = l(t);
  return {
    c() {
      s.c(), e = Lt();
    },
    m(o, r) {
      s.m(o, r), B(o, e, r);
    },
    p(o, [r]) {
      l !== (l = n(o)) && (s.d(1), s = l(o), s && (s.c(), s.m(e.parentNode, e)));
    },
    i: y,
    o: y,
    d(o) {
      s.d(o), o && x(e);
    }
  };
}
function Wt(t, e, n) {
  let { isAutoplay: l } = e;
  function s(i) {
    M.call(this, t, i);
  }
  function o(i) {
    M.call(this, t, i);
  }
  function r(i) {
    M.call(this, t, i);
  }
  function a(i) {
    M.call(this, t, i);
  }
  return t.$$set = (i) => {
    "isAutoplay" in i && n(0, l = i.isAutoplay);
  }, [l, s, o, r, a];
}
class Xt extends X {
  constructor(e) {
    super(), W(this, e, Wt, Vt, V, { isAutoplay: 0 });
  }
}
function Jt(t) {
  let e, n, l;
  return {
    c() {
      e = k("button"), e.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 svelte-ag6ksm"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>', g(e, "class", "svelte-ag6ksm");
    },
    m(s, o) {
      B(s, e, o), n || (l = j(e, "click", t[0]), n = !0);
    },
    p: y,
    i: y,
    o: y,
    d(s) {
      s && x(e), n = !1, l();
    }
  };
}
function Kt(t) {
  function e(n) {
    M.call(this, t, n);
  }
  return [e];
}
class Dt extends X {
  constructor(e) {
    super(), W(this, e, Kt, Jt, V, {});
  }
}
const { window: ct } = Ht;
function gt(t, e, n) {
  const l = t.slice();
  return l[20] = e[n].src, l[21] = e[n].text, l[22] = e[n].options.top, l[23] = e[n].options.left, l;
}
function ht(t) {
  let e, n, l, s, o, r, a = t[21] + "", i;
  return {
    c() {
      e = k("article"), n = k("img"), s = C(), o = k("h2"), r = k("span"), i = C(), at(n.src, l = t[20]) || g(n, "src", l), g(n, "alt", ""), g(n, "class", "svelte-1pstpqd"), g(r, "class", "svelte-1pstpqd"), P(r, "color", t[2]), P(o, "top", t[22]), P(o, "left", t[23]), g(o, "class", "svelte-1pstpqd"), g(e, "class", "svelte-1pstpqd");
    },
    m(c, f) {
      B(c, e, f), m(e, n), m(e, s), m(e, o), m(o, r), r.innerHTML = a, m(e, i);
    },
    p(c, f) {
      f & 2 && !at(n.src, l = c[20]) && g(n, "src", l), f & 2 && a !== (a = c[21] + "") && (r.innerHTML = a), f & 4 && P(r, "color", c[2]), f & 2 && P(o, "top", c[22]), f & 2 && P(o, "left", c[23]);
    },
    d(c) {
      c && x(e);
    }
  };
}
function Gt(t) {
  let e, n, l, s, o, r, a, i, c, f, h, w, v, T;
  tt(t[10]);
  function nt(u) {
    t[11](u);
  }
  let b = {};
  t[0] !== void 0 && (b.isAutoplay = t[0]), n = new Xt({ props: b }), Z.push(() => qt(n, "isAutoplay", nt, t[0])), n.$on("click", t[5]);
  let A = t[1], _ = [];
  for (let u = 0; u < A.length; u += 1)
    _[u] = ht(gt(t, A, u));
  return i = new It({}), i.$on("click", t[13]), f = new Dt({}), f.$on("click", t[14]), {
    c() {
      e = k("aside"), l = k("div"), U(n.$$.fragment), o = C(), r = k("div");
      for (let u = 0; u < _.length; u += 1)
        _[u].c();
      a = C(), U(i.$$.fragment), c = C(), U(f.$$.fragment), P(l, "display", "contents"), P(l, "--width", "2.5rem"), g(r, "class", "svelte-1pstpqd"), g(e, "class", "svelte-1pstpqd");
    },
    m(u, $) {
      B(u, e, $), m(e, l), R(n, l, null), m(e, o), m(e, r);
      for (let S = 0; S < _.length; S += 1)
        _[S].m(r, null);
      t[12](r), m(e, a), R(i, e, null), m(e, c), R(f, e, null), w = !0, v || (T = [
        j(ct, "keydown", t[8]),
        j(ct, "resize", t[10]),
        $t(h = t[6].call(null, e, t[0]))
      ], v = !0);
    },
    p(u, [$]) {
      const S = {};
      if (!s && $ & 1 && (s = !0, S.isAutoplay = u[0], Tt(() => s = !1)), n.$set(S), $ & 6) {
        A = u[1];
        let p;
        for (p = 0; p < A.length; p += 1) {
          const d = gt(u, A, p);
          _[p] ? _[p].p(d, $) : (_[p] = ht(d), _[p].c(), _[p].m(r, null));
        }
        for (; p < _.length; p += 1)
          _[p].d(1);
        _.length = A.length;
      }
      h && et(h.update) && $ & 1 && h.update.call(null, u[0]);
    },
    i(u) {
      w || (I(n.$$.fragment, u), I(i.$$.fragment, u), I(f.$$.fragment, u), w = !0);
    },
    o(u) {
      Q(n.$$.fragment, u), Q(i.$$.fragment, u), Q(f.$$.fragment, u), w = !1;
    },
    d(u) {
      u && x(e), F(n), St(_, u), t[12](null), F(i), F(f), v = !1, E(T);
    }
  };
}
function Qt(t, e, n) {
  let { slides: l = [
    {
      src: "slides/slider1.jpg",
      text: "Hello <br /> Slider 1",
      options: { top: "50%", left: "50%" }
    },
    {
      src: "slides/slider2.jpg",
      text: "Hello <br /> Slider 2",
      options: { top: "50%", left: "50%" }
    },
    {
      src: "slides/slider3.jpg",
      text: "Hello <br /> Slider 3",
      options: { top: "50%", left: "50%" }
    },
    {
      src: "slides/slider4.jpg",
      text: "Hello <br /> Slider 4",
      options: { top: "50%", left: "50%" }
    }
  ] } = e, { duration: s = 6e3 } = e, { color: o = "white" } = e, { isAutoplay: r = !0 } = e, a, i, c, f = 0;
  const h = () => {
    clearInterval(c), n(0, r = !1);
  }, w = () => {
    n(0, r = !r), r ? v("isAutoPlaySetting", !0) : v("isAutoPlaySetting", !1);
  }, v = (d, H) => {
    localStorage.setItem(d, JSON.stringify(H));
  }, T = (d) => localStorage.getItem(d) ? (localStorage.getItem(d) ?? "") === "true" : null, nt = (d, H) => {
    const L = () => {
      c = window.setInterval(b, s);
    }, O = T("isAutoPlaySetting");
    return O != null && (H = O), H ? L() : h(), {
      update(lt) {
        lt ? L() : h();
      },
      destroy() {
        h();
      }
    };
  }, b = (d) => {
    const L = i * l.length, O = () => {
      a.scrollTo({ left: 0, behavior: "smooth" }), f = 0;
    }, lt = () => {
      a.scrollTo({ left: L, behavior: "smooth" }), f = L;
    }, q = d === "Back", yt = { left: -i, behavior: "smooth" }, wt = q ? yt : { left: i, behavior: "smooth" }, vt = () => f === 0, bt = () => f === L - i, kt = () => f === L + i;
    (() => {
      if (vt() && q) {
        lt(), f = L + i;
        return;
      }
      if (bt() && !q) {
        O(), f = 0;
        return;
      }
      if (kt() && !q) {
        O(), f = 0;
        return;
      }
      f = a.scrollLeft + (q ? -i : i), console.log(f), a.scrollBy(wt);
    })();
  }, A = (d) => {
    d.key === "ArrowLeft" && b("Back"), d.key === "ArrowRight" && b("Forward");
  };
  function _() {
    n(4, i = ct.innerWidth);
  }
  function u(d) {
    r = d, n(0, r);
  }
  function $(d) {
    Z[d ? "unshift" : "push"](() => {
      a = d, n(3, a);
    });
  }
  const S = () => b("Back"), p = () => b("Forward");
  return t.$$set = (d) => {
    "slides" in d && n(1, l = d.slides), "duration" in d && n(9, s = d.duration), "color" in d && n(2, o = d.color), "isAutoplay" in d && n(0, r = d.isAutoplay);
  }, [
    r,
    l,
    o,
    a,
    i,
    w,
    nt,
    b,
    A,
    s,
    _,
    u,
    $,
    S,
    p
  ];
}
class Ut extends X {
  constructor(e) {
    super(), W(this, e, Qt, Gt, V, {
      slides: 1,
      duration: 9,
      color: 2,
      isAutoplay: 0
    });
  }
}
function Yt(t) {
  let e, n;
  const l = [t[0]];
  let s = {};
  for (let o = 0; o < l.length; o += 1)
    s = st(s, l[o]);
  return e = new Ut({ props: s }), {
    c() {
      U(e.$$.fragment);
    },
    m(o, r) {
      R(e, o, r), n = !0;
    },
    p(o, [r]) {
      const a = r & 1 ? Mt(l, [Ot(o[0])]) : {};
      e.$set(a);
    },
    i(o) {
      n || (I(e.$$.fragment, o), n = !0);
    },
    o(o) {
      Q(e.$$.fragment, o), n = !1;
    },
    d(o) {
      F(e, o);
    }
  };
}
function Zt(t, e, n) {
  return t.$$set = (l) => {
    n(0, e = st(st({}, e), dt(l)));
  }, e = dt(e), [e];
}
class ne extends X {
  constructor(e) {
    super(), W(this, e, Zt, Yt, V, {});
  }
}
export {
  ne as default
};
