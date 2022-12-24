function _() {
}
function k(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function P(t) {
  return t();
}
function S() {
  return /* @__PURE__ */ Object.create(null);
}
function m(t) {
  t.forEach(P);
}
function z(t) {
  return typeof t == "function";
}
function B(t, e) {
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
function K(t, e, n) {
  t.insertBefore(e, n || null);
}
function D(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Q(t) {
  return document.createElement(t);
}
function A(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function N(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function R(t) {
  return Array.from(t.childNodes);
}
function T(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const c = document.createEvent("CustomEvent");
  return c.initCustomEvent(t, n, r, e), c;
}
let h;
function d(t) {
  h = t;
}
function U() {
  if (!h)
    throw new Error("Function called outside component initialization");
  return h;
}
function V() {
  const t = U();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const c = t.$$.callbacks[e];
    if (c) {
      const o = T(e, n, { cancelable: r });
      return c.slice().forEach((i) => {
        i.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const l = [], O = [], p = [], L = [], W = Promise.resolve();
let w = !1;
function X() {
  w || (w = !0, W.then(F));
}
function x(t) {
  p.push(t);
}
const y = /* @__PURE__ */ new Set();
let g = 0;
function F() {
  const t = h;
  do {
    for (; g < l.length; ) {
      const e = l[g];
      g++, d(e), Y(e.$$);
    }
    for (d(null), l.length = 0, g = 0; O.length; )
      O.pop()();
    for (let e = 0; e < p.length; e += 1) {
      const n = p[e];
      y.has(n) || (y.add(n), n());
    }
    p.length = 0;
  } while (l.length);
  for (; L.length; )
    L.pop()();
  w = !1, y.clear(), d(t);
}
function Y(t) {
  if (t.fragment !== null) {
    t.update(), m(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(x);
  }
}
const $ = /* @__PURE__ */ new Set();
let Z;
function M(t, e) {
  t && t.i && ($.delete(t), t.i(e));
}
function tt(t, e, n, r) {
  if (t && t.o) {
    if ($.has(t))
      return;
    $.add(t), Z.c.push(() => {
      $.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function et(t, e) {
  const n = {}, r = {}, c = { $$scope: 1 };
  let o = t.length;
  for (; o--; ) {
    const i = t[o], f = e[o];
    if (f) {
      for (const u in i)
        u in f || (r[u] = 1);
      for (const u in f)
        c[u] || (n[u] = f[u], c[u] = 1);
      t[o] = f;
    } else
      for (const u in i)
        c[u] = 1;
  }
  for (const i in r)
    i in n || (n[i] = void 0);
  return n;
}
function nt(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function rt(t) {
  t && t.c();
}
function q(t, e, n, r) {
  const { fragment: c, after_update: o } = t.$$;
  c && c.m(e, n), r || x(() => {
    const i = t.$$.on_mount.map(P).filter(z);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : m(i), t.$$.on_mount = [];
  }), o.forEach(x);
}
function G(t, e) {
  const n = t.$$;
  n.fragment !== null && (m(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ct(t, e) {
  t.$$.dirty[0] === -1 && (l.push(t), X(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function H(t, e, n, r, c, o, i, f = [-1]) {
  const u = h;
  d(t);
  const s = t.$$ = {
    fragment: null,
    ctx: [],
    props: o,
    update: _,
    not_equal: c,
    bound: S(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    callbacks: S(),
    dirty: f,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  i && i(s.root);
  let v = !1;
  if (s.ctx = n ? n(t, e.props || {}, (a, b, ...E) => {
    const j = E.length ? E[0] : b;
    return s.ctx && c(s.ctx[a], s.ctx[a] = j) && (!s.skip_bound && s.bound[a] && s.bound[a](j), v && ct(t, a)), b;
  }) : [], s.update(), v = !0, m(s.before_update), s.fragment = r ? r(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = R(e.target);
      s.fragment && s.fragment.l(a), a.forEach(D);
    } else
      s.fragment && s.fragment.c();
    e.intro && M(t.$$.fragment), q(t, e.target, e.anchor, e.customElement), F();
  }
  d(u);
}
class I {
  $destroy() {
    G(this, 1), this.$destroy = _;
  }
  $on(e, n) {
    if (!z(n))
      return _;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const c = r.indexOf(n);
      c !== -1 && r.splice(c, 1);
    };
  }
  $set(e) {
    this.$$set && !J(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function ot(t) {
  let e, n, r;
  return {
    c() {
      e = Q("input"), N(e, "type", "checkbox"), N(e, "class", "svelte-1vle8k8");
    },
    m(c, o) {
      K(c, e, o), e.checked = t[0], n || (r = [
        A(e, "change", t[1]),
        A(e, "keypress", t[2])
      ], n = !0);
    },
    p(c, [o]) {
      o & 1 && (e.checked = c[0]);
    },
    i: _,
    o: _,
    d(c) {
      c && D(e), n = !1, m(r);
    }
  };
}
function it(t, e, n) {
  const r = V();
  let c = !1;
  function o() {
    c = this.checked, n(0, c);
  }
  const i = (f) => f.key === "Enter" && n(0, c = !c);
  return t.$$.update = () => {
    t.$$.dirty & 1 && r(c ? "checked" : "unchecked");
  }, [c, o, i];
}
class st extends I {
  constructor(e) {
    super(), H(this, e, it, ot, B, {});
  }
}
function ut(t) {
  let e, n;
  const r = [t[0]];
  let c = {};
  for (let o = 0; o < r.length; o += 1)
    c = k(c, r[o]);
  return e = new st({ props: c }), {
    c() {
      rt(e.$$.fragment);
    },
    m(o, i) {
      q(e, o, i), n = !0;
    },
    p(o, [i]) {
      const f = i & 1 ? et(r, [nt(o[0])]) : {};
      e.$set(f);
    },
    i(o) {
      n || (M(e.$$.fragment, o), n = !0);
    },
    o(o) {
      tt(e.$$.fragment, o), n = !1;
    },
    d(o) {
      G(e, o);
    }
  };
}
function ft(t, e, n) {
  return t.$$set = (r) => {
    n(0, e = k(k({}, e), C(r)));
  }, e = C(e), [e];
}
class at extends I {
  constructor(e) {
    super(), H(this, e, ft, ut, B, {});
  }
}
export {
  at as default
};
