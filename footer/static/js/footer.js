function p() {
}
function $(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function P(t) {
  return t();
}
function N() {
  return /* @__PURE__ */ Object.create(null);
}
function x(t) {
  t.forEach(P);
}
function T(t) {
  return typeof t == "function";
}
function Y(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Q(t) {
  return Object.keys(t).length === 0;
}
function R(t, e, n, r) {
  if (t) {
    const o = z(t, e, n, r);
    return t[0](o);
  }
}
function z(t, e, n, r) {
  return t[1] && r ? $(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function U(t, e, n, r) {
  if (t[2] && r) {
    const o = t[2](r(n));
    if (e.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const f = [], u = Math.max(e.dirty.length, o.length);
      for (let s = 0; s < u; s += 1)
        f[s] = e.dirty[s] | o[s];
      return f;
    }
    return e.dirty | o;
  }
  return e.dirty;
}
function V(t, e, n, r, o, f) {
  if (o) {
    const u = z(e, n, r, f);
    t.p(u, o);
  }
}
function W(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let r = 0; r < n; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function S(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function X(t, e) {
  t.appendChild(e);
}
function g(t, e, n) {
  t.insertBefore(e, n || null);
}
function d(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function O(t) {
  return document.createElement(t);
}
function b(t) {
  return document.createTextNode(t);
}
function M(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Z(t) {
  return Array.from(t.childNodes);
}
let j;
function _(t) {
  j = t;
}
const a = [], B = [], m = [], D = [], tt = Promise.resolve();
let k = !1;
function et() {
  k || (k = !0, tt.then(G));
}
function v(t) {
  m.push(t);
}
const w = /* @__PURE__ */ new Set();
let h = 0;
function G() {
  const t = j;
  do {
    for (; h < a.length; ) {
      const e = a[h];
      h++, _(e), nt(e.$$);
    }
    for (_(null), a.length = 0, h = 0; B.length; )
      B.pop()();
    for (let e = 0; e < m.length; e += 1) {
      const n = m[e];
      w.has(n) || (w.add(n), n());
    }
    m.length = 0;
  } while (a.length);
  for (; D.length; )
    D.pop()();
  k = !1, w.clear(), _(t);
}
function nt(t) {
  if (t.fragment !== null) {
    t.update(), x(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(v);
  }
}
const y = /* @__PURE__ */ new Set();
let rt;
function E(t, e) {
  t && t.i && (y.delete(t), t.i(e));
}
function H(t, e, n, r) {
  if (t && t.o) {
    if (y.has(t))
      return;
    y.add(t), rt.c.push(() => {
      y.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function ot(t, e) {
  const n = {}, r = {}, o = { $$scope: 1 };
  let f = t.length;
  for (; f--; ) {
    const u = t[f], s = e[f];
    if (s) {
      for (const c in u)
        c in s || (r[c] = 1);
      for (const c in s)
        o[c] || (n[c] = s[c], o[c] = 1);
      t[f] = s;
    } else
      for (const c in u)
        o[c] = 1;
  }
  for (const u in r)
    u in n || (n[u] = void 0);
  return n;
}
function ft(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function ut(t) {
  t && t.c();
}
function I(t, e, n, r) {
  const { fragment: o, after_update: f } = t.$$;
  o && o.m(e, n), r || v(() => {
    const u = t.$$.on_mount.map(P).filter(T);
    t.$$.on_destroy ? t.$$.on_destroy.push(...u) : x(u), t.$$.on_mount = [];
  }), f.forEach(v);
}
function J(t, e) {
  const n = t.$$;
  n.fragment !== null && (x(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function st(t, e) {
  t.$$.dirty[0] === -1 && (a.push(t), et(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function K(t, e, n, r, o, f, u, s = [-1]) {
  const c = j;
  _(t);
  const i = t.$$ = {
    fragment: null,
    ctx: [],
    props: f,
    update: p,
    not_equal: o,
    bound: N(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    callbacks: N(),
    dirty: s,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  u && u(i.root);
  let A = !1;
  if (i.ctx = n ? n(t, e.props || {}, (l, q, ...C) => {
    const F = C.length ? C[0] : q;
    return i.ctx && o(i.ctx[l], i.ctx[l] = F) && (!i.skip_bound && i.bound[l] && i.bound[l](F), A && st(t, l)), q;
  }) : [], i.update(), A = !0, x(i.before_update), i.fragment = r ? r(i.ctx) : !1, e.target) {
    if (e.hydrate) {
      const l = Z(e.target);
      i.fragment && i.fragment.l(l), l.forEach(d);
    } else
      i.fragment && i.fragment.c();
    e.intro && E(t.$$.fragment), I(t, e.target, e.anchor, e.customElement), G();
  }
  _(c);
}
class L {
  $destroy() {
    J(this, 1), this.$destroy = p;
  }
  $on(e, n) {
    if (!T(n))
      return p;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const o = r.indexOf(n);
      o !== -1 && r.splice(o, 1);
    };
  }
  $set(e) {
    this.$$set && !Q(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function ct(t) {
  let e, n, r;
  return {
    c() {
      e = b("© Copyright "), n = b(t[0]), r = b(" Stroopwafels. All rights reserved.");
    },
    m(o, f) {
      g(o, e, f), g(o, n, f), g(o, r, f);
    },
    p,
    d(o) {
      o && d(e), o && d(n), o && d(r);
    }
  };
}
function it(t) {
  let e, n, r;
  const o = t[2].default, f = R(o, t, t[1], null), u = f || ct(t);
  return {
    c() {
      e = O("footer"), n = O("div"), u && u.c(), M(n, "class", "svelte-12q42cq"), M(e, "class", "svelte-12q42cq");
    },
    m(s, c) {
      g(s, e, c), X(e, n), u && u.m(n, null), r = !0;
    },
    p(s, [c]) {
      f && f.p && (!r || c & 2) && V(
        f,
        o,
        s,
        s[1],
        r ? U(o, s[1], c, null) : W(s[1]),
        null
      );
    },
    i(s) {
      r || (E(u, s), r = !0);
    },
    o(s) {
      H(u, s), r = !1;
    },
    d(s) {
      s && d(e), u && u.d(s);
    }
  };
}
function lt(t, e, n) {
  let { $$slots: r = {}, $$scope: o } = e;
  const f = new Date().getFullYear();
  return t.$$set = (u) => {
    "$$scope" in u && n(1, o = u.$$scope);
  }, [f, o, r];
}
class at extends L {
  constructor(e) {
    super(), K(this, e, lt, it, Y, {});
  }
}
function dt(t) {
  let e, n;
  const r = [t[0]];
  let o = {};
  for (let f = 0; f < r.length; f += 1)
    o = $(o, r[f]);
  return e = new at({ props: o }), {
    c() {
      ut(e.$$.fragment);
    },
    m(f, u) {
      I(e, f, u), n = !0;
    },
    p(f, [u]) {
      const s = u & 1 ? ot(r, [ft(f[0])]) : {};
      e.$set(s);
    },
    i(f) {
      n || (E(e.$$.fragment, f), n = !0);
    },
    o(f) {
      H(e.$$.fragment, f), n = !1;
    },
    d(f) {
      J(e, f);
    }
  };
}
function _t(t, e, n) {
  return t.$$set = (r) => {
    n(0, e = $($({}, e), S(r)));
  }, e = S(e), [e];
}
class ht extends L {
  constructor(e) {
    super(), K(this, e, _t, dt, Y, {});
  }
}
export {
  ht as default
};
