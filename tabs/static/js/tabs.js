function g() {
}
function w(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function R(e) {
  return e();
}
function C() {
  return /* @__PURE__ */ Object.create(null);
}
function p(e) {
  e.forEach(R);
}
function V(e) {
  return typeof e == "function";
}
function z(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Y(e) {
  return Object.keys(e).length === 0;
}
function I(e) {
  const t = {};
  for (const n in e)
    n[0] !== "$" && (t[n] = e[n]);
  return t;
}
function d(e, t) {
  e.appendChild(t);
}
function D(e, t, n) {
  e.insertBefore(t, n || null);
}
function T(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Z(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function $(e) {
  return document.createElement(e);
}
function j(e) {
  return document.createTextNode(e);
}
function F() {
  return j(" ");
}
function O(e, t, n, i) {
  return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
}
function y(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function ee(e) {
  return Array.from(e.childNodes);
}
function G(e, t) {
  t = "" + t, e.wholeText !== t && (e.data = t);
}
function S(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
let A;
function m(e) {
  A = e;
}
function te(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((i) => i.call(this, t));
}
const _ = [], B = [], v = [], M = [], ne = Promise.resolve();
let x = !1;
function ie() {
  x || (x = !0, ne.then(H));
}
function E(e) {
  v.push(e);
}
const q = /* @__PURE__ */ new Set();
let b = 0;
function H() {
  const e = A;
  do {
    for (; b < _.length; ) {
      const t = _[b];
      b++, m(t), ue(t.$$);
    }
    for (m(null), _.length = 0, b = 0; B.length; )
      B.pop()();
    for (let t = 0; t < v.length; t += 1) {
      const n = v[t];
      q.has(n) || (q.add(n), n());
    }
    v.length = 0;
  } while (_.length);
  for (; M.length; )
    M.pop()();
  x = !1, q.clear(), m(e);
}
function ue(e) {
  if (e.fragment !== null) {
    e.update(), p(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(E);
  }
}
const k = /* @__PURE__ */ new Set();
let re;
function J(e, t) {
  e && e.i && (k.delete(e), e.i(t));
}
function se(e, t, n, i) {
  if (e && e.o) {
    if (k.has(e))
      return;
    k.add(e), re.c.push(() => {
      k.delete(e), i && (n && e.d(1), i());
    }), e.o(t);
  } else
    i && i();
}
function oe(e, t) {
  const n = {}, i = {}, o = { $$scope: 1 };
  let s = e.length;
  for (; s--; ) {
    const c = e[s], a = t[s];
    if (a) {
      for (const r in c)
        r in a || (i[r] = 1);
      for (const r in a)
        o[r] || (n[r] = a[r], o[r] = 1);
      e[s] = a;
    } else
      for (const r in c)
        o[r] = 1;
  }
  for (const c in i)
    c in n || (n[c] = void 0);
  return n;
}
function ae(e) {
  return typeof e == "object" && e !== null ? e : {};
}
function le(e) {
  e && e.c();
}
function K(e, t, n, i) {
  const { fragment: o, after_update: s } = e.$$;
  o && o.m(t, n), i || E(() => {
    const c = e.$$.on_mount.map(R).filter(V);
    e.$$.on_destroy ? e.$$.on_destroy.push(...c) : p(c), e.$$.on_mount = [];
  }), s.forEach(E);
}
function U(e, t) {
  const n = e.$$;
  n.fragment !== null && (p(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ce(e, t) {
  e.$$.dirty[0] === -1 && (_.push(e), ie(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function W(e, t, n, i, o, s, c, a = [-1]) {
  const r = A;
  m(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    props: s,
    update: g,
    not_equal: o,
    bound: C(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (r ? r.$$.context : [])),
    callbacks: C(),
    dirty: a,
    skip_bound: !1,
    root: t.target || r.$$.root
  };
  c && c(u.root);
  let f = !1;
  if (u.ctx = n ? n(e, t.props || {}, (l, h, ...L) => {
    const N = L.length ? L[0] : h;
    return u.ctx && o(u.ctx[l], u.ctx[l] = N) && (!u.skip_bound && u.bound[l] && u.bound[l](N), f && ce(e, l)), h;
  }) : [], u.update(), f = !0, p(u.before_update), u.fragment = i ? i(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const l = ee(t.target);
      u.fragment && u.fragment.l(l), l.forEach(T);
    } else
      u.fragment && u.fragment.c();
    t.intro && J(e.$$.fragment), K(e, t.target, t.anchor, t.customElement), H();
  }
  m(r);
}
class X {
  $destroy() {
    U(this, 1), this.$destroy = g;
  }
  $on(t, n) {
    if (!V(n))
      return g;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return i.push(n), () => {
      const o = i.indexOf(n);
      o !== -1 && i.splice(o, 1);
    };
  }
  $set(t) {
    this.$$set && !Y(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function P(e, t, n) {
  const i = e.slice();
  return i[4] = t[n], i[6] = n, i;
}
function Q(e) {
  let t, n = e[4].heading + "", i, o, s, c;
  function a() {
    return e[3](e[6]);
  }
  return {
    c() {
      t = $("li"), i = j(n), o = F(), y(t, "class", "svelte-1dr4u5l"), S(t, "active", e[6] === e[1]);
    },
    m(r, u) {
      D(r, t, u), d(t, i), d(t, o), s || (c = [
        O(t, "click", a),
        O(t, "keypress", e[2])
      ], s = !0);
    },
    p(r, u) {
      e = r, u & 1 && n !== (n = e[4].heading + "") && G(i, n), u & 2 && S(t, "active", e[6] === e[1]);
    },
    d(r) {
      r && T(t), s = !1, p(c);
    }
  };
}
function fe(e) {
  let t, n, i, o, s = e[0][e[1]].content + "", c, a = e[0], r = [];
  for (let u = 0; u < a.length; u += 1)
    r[u] = Q(P(e, a, u));
  return {
    c() {
      t = $("aside"), n = $("ul");
      for (let u = 0; u < r.length; u += 1)
        r[u].c();
      i = F(), o = $("div"), c = j(s), y(n, "class", "svelte-1dr4u5l"), y(o, "class", "svelte-1dr4u5l"), y(t, "class", "svelte-1dr4u5l");
    },
    m(u, f) {
      D(u, t, f), d(t, n);
      for (let l = 0; l < r.length; l += 1)
        r[l].m(n, null);
      d(t, i), d(t, o), d(o, c);
    },
    p(u, [f]) {
      if (f & 3) {
        a = u[0];
        let l;
        for (l = 0; l < a.length; l += 1) {
          const h = P(u, a, l);
          r[l] ? r[l].p(h, f) : (r[l] = Q(h), r[l].c(), r[l].m(n, null));
        }
        for (; l < r.length; l += 1)
          r[l].d(1);
        r.length = a.length;
      }
      f & 3 && s !== (s = u[0][u[1]].content + "") && G(c, s);
    },
    i: g,
    o: g,
    d(u) {
      u && T(t), Z(r, u);
    }
  };
}
function de(e, t, n) {
  let { tabs: i = [
    {
      heading: "Tab 1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat."
    },
    {
      heading: "Tab 2",
      content: "Blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto."
    },
    {
      heading: "Tab 3",
      content: "Eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente off."
    }
  ] } = t, o = 0;
  function s(a) {
    te.call(this, e, a);
  }
  const c = (a) => n(1, o = a);
  return e.$$set = (a) => {
    "tabs" in a && n(0, i = a.tabs);
  }, [i, o, s, c];
}
class he extends X {
  constructor(t) {
    super(), W(this, t, de, fe, z, { tabs: 0 });
  }
}
function _e(e) {
  let t, n;
  const i = [e[0]];
  let o = {};
  for (let s = 0; s < i.length; s += 1)
    o = w(o, i[s]);
  return t = new he({ props: o }), {
    c() {
      le(t.$$.fragment);
    },
    m(s, c) {
      K(t, s, c), n = !0;
    },
    p(s, [c]) {
      const a = c & 1 ? oe(i, [ae(s[0])]) : {};
      t.$set(a);
    },
    i(s) {
      n || (J(t.$$.fragment, s), n = !0);
    },
    o(s) {
      se(t.$$.fragment, s), n = !1;
    },
    d(s) {
      U(t, s);
    }
  };
}
function me(e, t, n) {
  return e.$$set = (i) => {
    n(0, t = w(w({}, t), I(i)));
  }, t = I(t), [t];
}
class ge extends X {
  constructor(t) {
    super(), W(this, t, me, _e, z, {});
  }
}
export {
  ge as default
};
