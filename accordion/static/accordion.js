function h() {
}
function C(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function Q(e) {
  return e();
}
function M() {
  return /* @__PURE__ */ Object.create(null);
}
function g(e) {
  e.forEach(Q);
}
function U(e) {
  return typeof e == "function";
}
function q(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Z(e) {
  return Object.keys(e).length === 0;
}
function z(e) {
  const t = {};
  for (const n in e)
    n[0] !== "$" && (t[n] = e[n]);
  return t;
}
function A(e, t) {
  e.appendChild(t);
}
function V(e, t, n) {
  e.insertBefore(t, n || null);
}
function S(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function ee(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function E(e) {
  return document.createElement(e);
}
function W(e) {
  return document.createTextNode(e);
}
function te() {
  return W(" ");
}
function ne() {
  return W("");
}
function F(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function O(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function oe(e) {
  return Array.from(e.childNodes);
}
let T;
function y(e) {
  T = e;
}
function G(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((r) => r.call(this, t));
}
const p = [], w = [], b = [], H = [], re = Promise.resolve();
let N = !1;
function se() {
  N || (N = !0, re.then(X));
}
function R(e) {
  b.push(e);
}
const j = /* @__PURE__ */ new Set();
let k = 0;
function X() {
  const e = T;
  do {
    for (; k < p.length; ) {
      const t = p[k];
      k++, y(t), ie(t.$$);
    }
    for (y(null), p.length = 0, k = 0; w.length; )
      w.pop()();
    for (let t = 0; t < b.length; t += 1) {
      const n = b[t];
      j.has(n) || (j.add(n), n());
    }
    b.length = 0;
  } while (p.length);
  for (; H.length; )
    H.pop()();
  N = !1, j.clear(), y(e);
}
function ie(e) {
  if (e.fragment !== null) {
    e.update(), g(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(R);
  }
}
const v = /* @__PURE__ */ new Set();
let m;
function ce() {
  m = {
    r: 0,
    c: [],
    p: m
  };
}
function le() {
  m.r || g(m.c), m = m.p;
}
function _(e, t) {
  e && e.i && (v.delete(e), e.i(t));
}
function x(e, t, n, r) {
  if (e && e.o) {
    if (v.has(e))
      return;
    v.add(e), m.c.push(() => {
      v.delete(e), r && (n && e.d(1), r());
    }), e.o(t);
  } else
    r && r();
}
function ue(e, t) {
  const n = {}, r = {}, o = { $$scope: 1 };
  let c = e.length;
  for (; c--; ) {
    const i = e[c], l = t[c];
    if (l) {
      for (const s in i)
        s in l || (r[s] = 1);
      for (const s in l)
        o[s] || (n[s] = l[s], o[s] = 1);
      e[c] = l;
    } else
      for (const s in i)
        o[s] = 1;
  }
  for (const i in r)
    i in n || (n[i] = void 0);
  return n;
}
function fe(e) {
  return typeof e == "object" && e !== null ? e : {};
}
function Y(e) {
  e && e.c();
}
function D(e, t, n, r) {
  const { fragment: o, after_update: c } = e.$$;
  o && o.m(t, n), r || R(() => {
    const i = e.$$.on_mount.map(Q).filter(U);
    e.$$.on_destroy ? e.$$.on_destroy.push(...i) : g(i), e.$$.on_mount = [];
  }), c.forEach(R);
}
function I(e, t) {
  const n = e.$$;
  n.fragment !== null && (g(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ae(e, t) {
  e.$$.dirty[0] === -1 && (p.push(e), se(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function B(e, t, n, r, o, c, i, l = [-1]) {
  const s = T;
  y(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    props: c,
    update: h,
    not_equal: o,
    bound: M(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (s ? s.$$.context : [])),
    callbacks: M(),
    dirty: l,
    skip_bound: !1,
    root: t.target || s.$$.root
  };
  i && i(u.root);
  let d = !1;
  if (u.ctx = n ? n(e, t.props || {}, (f, $, ...a) => {
    const P = a.length ? a[0] : $;
    return u.ctx && o(u.ctx[f], u.ctx[f] = P) && (!u.skip_bound && u.bound[f] && u.bound[f](P), d && ae(e, f)), $;
  }) : [], u.update(), d = !0, g(u.before_update), u.fragment = r ? r(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = oe(t.target);
      u.fragment && u.fragment.l(f), f.forEach(S);
    } else
      u.fragment && u.fragment.c();
    t.intro && _(e.$$.fragment), D(e, t.target, t.anchor, t.customElement), X();
  }
  y(s);
}
class L {
  $destroy() {
    I(this, 1), this.$destroy = h;
  }
  $on(t, n) {
    if (!U(n))
      return h;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return r.push(n), () => {
      const o = r.indexOf(n);
      o !== -1 && r.splice(o, 1);
    };
  }
  $set(t) {
    this.$$set && !Z(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function de(e) {
  let t, n, r, o, c, i;
  return {
    c() {
      t = E("details"), n = E("summary"), n.textContent = `${e[2]}`, r = te(), o = E("div"), o.textContent = `${e[3]}`, O(n, "class", "svelte-1edl0fl"), O(o, "class", "svelte-1edl0fl"), t.open = e[1], O(t, "class", "svelte-1edl0fl");
    },
    m(l, s) {
      V(l, t, s), A(t, n), A(t, r), A(t, o), e[9](t), c || (i = [
        F(t, "click", e[7]),
        F(t, "keydown", e[8])
      ], c = !0);
    },
    p: h,
    i: h,
    o: h,
    d(l) {
      l && S(t), e[9](null), c = !1, g(i);
    }
  };
}
function me(e, t, n) {
  let { item: r } = t, o;
  const { isOpen: c, summary: i, content: l } = r, s = () => o.setAttribute("open", "open"), u = () => o.removeAttribute("open");
  function d(a) {
    G.call(this, e, a);
  }
  function f(a) {
    G.call(this, e, a);
  }
  function $(a) {
    w[a ? "unshift" : "push"](() => {
      o = a, n(0, o);
    });
  }
  return e.$$set = (a) => {
    "item" in a && n(4, r = a.item);
  }, [
    o,
    c,
    i,
    l,
    r,
    s,
    u,
    d,
    f,
    $
  ];
}
class he extends L {
  constructor(t) {
    super(), B(this, t, me, de, q, { item: 4, open: 5, close: 6 });
  }
  get open() {
    return this.$$.ctx[5];
  }
  get close() {
    return this.$$.ctx[6];
  }
}
function J(e, t, n) {
  const r = e.slice();
  return r[6] = t[n], r[7] = t, r[8] = n, r;
}
function K(e) {
  let t, n = e[8], r;
  const o = () => e[3](t, n), c = () => e[3](null, n);
  function i() {
    return e[4](e[8]);
  }
  let l = { item: e[6] };
  return t = new he({ props: l }), o(), t.$on("click", i), {
    c() {
      Y(t.$$.fragment);
    },
    m(s, u) {
      D(t, s, u), r = !0;
    },
    p(s, u) {
      e = s, n !== e[8] && (c(), n = e[8], o());
      const d = {};
      t.$set(d);
    },
    i(s) {
      r || (_(t.$$.fragment, s), r = !0);
    },
    o(s) {
      x(t.$$.fragment, s), r = !1;
    },
    d(s) {
      c(), I(t, s);
    }
  };
}
function _e(e) {
  let t, n, r = e[1], o = [];
  for (let i = 0; i < r.length; i += 1)
    o[i] = K(J(e, r, i));
  const c = (i) => x(o[i], 1, 1, () => {
    o[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      t = ne();
    },
    m(i, l) {
      for (let s = 0; s < o.length; s += 1)
        o[s].m(i, l);
      V(i, t, l), n = !0;
    },
    p(i, [l]) {
      if (l & 7) {
        r = i[1];
        let s;
        for (s = 0; s < r.length; s += 1) {
          const u = J(i, r, s);
          o[s] ? (o[s].p(u, l), _(o[s], 1)) : (o[s] = K(u), o[s].c(), _(o[s], 1), o[s].m(t.parentNode, t));
        }
        for (ce(), s = r.length; s < o.length; s += 1)
          c(s);
        le();
      }
    },
    i(i) {
      if (!n) {
        for (let l = 0; l < r.length; l += 1)
          _(o[l]);
        n = !0;
      }
    },
    o(i) {
      o = o.filter(Boolean);
      for (let l = 0; l < o.length; l += 1)
        x(o[l]);
      n = !1;
    },
    d(i) {
      ee(o, i), i && S(t);
    }
  };
}
function ge(e, t, n) {
  const r = [
    {
      summary: "System Requirements",
      content: `Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well as some
		form of output device is recommended.`,
      isOpen: !1
    },
    {
      summary: "Installation Instructions",
      content: `Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well as some
		form of output device is recommended.`,
      isOpen: !0
    },
    {
      summary: "API Reference",
      content: `Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well as some
		form of output device is recommended.`,
      isOpen: !1
    }
  ], o = [], c = (u) => (d, f) => u !== f && d.close(), i = (u) => o.forEach(c(u));
  function l(u, d) {
    w[u ? "unshift" : "push"](() => {
      o[d] = u, n(0, o);
    });
  }
  return [o, r, i, l, (u) => i(u)];
}
class pe extends L {
  constructor(t) {
    super(), B(this, t, ge, _e, q, {});
  }
}
function ye(e) {
  let t, n;
  const r = [e[0]];
  let o = {};
  for (let c = 0; c < r.length; c += 1)
    o = C(o, r[c]);
  return t = new pe({ props: o }), {
    c() {
      Y(t.$$.fragment);
    },
    m(c, i) {
      D(t, c, i), n = !0;
    },
    p(c, [i]) {
      const l = i & 1 ? ue(r, [fe(c[0])]) : {};
      t.$set(l);
    },
    i(c) {
      n || (_(t.$$.fragment, c), n = !0);
    },
    o(c) {
      x(t.$$.fragment, c), n = !1;
    },
    d(c) {
      I(t, c);
    }
  };
}
function $e(e, t, n) {
  return e.$$set = (r) => {
    n(0, t = C(C({}, t), z(r)));
  }, t = z(t), [t];
}
class ke extends L {
  constructor(t) {
    super(), B(this, t, $e, ye, q, {});
  }
}
export {
  ke as default
};
