function M() {
}
function B(t, n) {
  for (const e in n)
    t[e] = n[e];
  return t;
}
function Te(t) {
  return t();
}
function ke() {
  return /* @__PURE__ */ Object.create(null);
}
function K(t) {
  t.forEach(Te);
}
function Pe(t) {
  return typeof t == "function";
}
function le(t, n) {
  return t != t ? n == n : t !== n || t && typeof t == "object" || typeof t == "function";
}
function qe(t) {
  return Object.keys(t).length === 0;
}
function me(t) {
  const n = {};
  for (const e in t)
    e[0] !== "$" && (n[e] = t[e]);
  return n;
}
function Se(t, n) {
  const e = {};
  n = new Set(n);
  for (const l in t)
    !n.has(l) && l[0] !== "$" && (e[l] = t[l]);
  return e;
}
function L(t, n) {
  t.appendChild(n);
}
function D(t, n, e) {
  t.insertBefore(n, e || null);
}
function I(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function W(t) {
  return document.createElement(t);
}
function j(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function N(t) {
  return document.createTextNode(t);
}
function Be() {
  return N(" ");
}
function Ue(t, n, e, l) {
  return t.addEventListener(n, e, l), () => t.removeEventListener(n, e, l);
}
function C(t, n, e) {
  e == null ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function Ee(t, n) {
  const e = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const l in n)
    n[l] == null ? t.removeAttribute(l) : l === "style" ? t.style.cssText = n[l] : l === "__value" ? t.value = t[l] = n[l] : e[l] && e[l].set ? t[l] = n[l] : C(t, l, n[l]);
}
function Ge(t) {
  return Array.from(t.childNodes);
}
function Ce(t, n, e, l) {
  e === null ? t.style.removeProperty(n) : t.style.setProperty(n, e, l ? "important" : "");
}
function re(t, n, e) {
  t.classList[e ? "add" : "remove"](n);
}
class Ze {
  constructor(n = !1) {
    this.is_svg = !1, this.is_svg = n, this.e = this.n = null;
  }
  c(n) {
    this.h(n);
  }
  m(n, e, l = null) {
    this.e || (this.is_svg ? this.e = j(e.nodeName) : this.e = W(e.nodeName), this.t = e, this.c(n)), this.i(l);
  }
  h(n) {
    this.e.innerHTML = n, this.n = Array.from(this.e.childNodes);
  }
  i(n) {
    for (let e = 0; e < this.n.length; e += 1)
      D(this.t, this.n[e], n);
  }
  p(n) {
    this.d(), this.h(n), this.i(this.a);
  }
  d() {
    this.n.forEach(I);
  }
}
let J;
function X(t) {
  J = t;
}
function Ne() {
  if (!J)
    throw new Error("Function called outside component initialization");
  return J;
}
function Ve(t) {
  Ne().$$.on_mount.push(t);
}
function Xe(t) {
  Ne().$$.after_update.push(t);
}
const V = [], ve = [], ie = [], ze = [], Me = Promise.resolve();
let ye = !1;
function Ie() {
  ye || (ye = !0, Me.then(He));
}
function Je() {
  return Ie(), Me;
}
function be(t) {
  ie.push(t);
}
const pe = /* @__PURE__ */ new Set();
let ae = 0;
function He() {
  const t = J;
  do {
    for (; ae < V.length; ) {
      const n = V[ae];
      ae++, X(n), Ye(n.$$);
    }
    for (X(null), V.length = 0, ae = 0; ve.length; )
      ve.pop()();
    for (let n = 0; n < ie.length; n += 1) {
      const e = ie[n];
      pe.has(e) || (pe.add(e), e());
    }
    ie.length = 0;
  } while (V.length);
  for (; ze.length; )
    ze.pop()();
  ye = !1, pe.clear(), X(t);
}
function Ye(t) {
  if (t.fragment !== null) {
    t.update(), K(t.before_update);
    const n = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(be);
  }
}
const se = /* @__PURE__ */ new Set();
let O;
function Ke() {
  O = {
    r: 0,
    c: [],
    p: O
  };
}
function Qe() {
  O.r || K(O.c), O = O.p;
}
function U(t, n) {
  t && t.i && (se.delete(t), t.i(n));
}
function Y(t, n, e, l) {
  if (t && t.o) {
    if (se.has(t))
      return;
    se.add(t), O.c.push(() => {
      se.delete(t), l && (e && t.d(1), l());
    }), t.o(n);
  } else
    l && l();
}
function We(t, n) {
  const e = {}, l = {}, d = { $$scope: 1 };
  let h = t.length;
  for (; h--; ) {
    const r = t[h], a = n[h];
    if (a) {
      for (const u in r)
        u in a || (l[u] = 1);
      for (const u in a)
        d[u] || (e[u] = a[u], d[u] = 1);
      t[h] = a;
    } else
      for (const u in r)
        d[u] = 1;
  }
  for (const r in l)
    r in e || (e[r] = void 0);
  return e;
}
function et(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function _e(t) {
  t && t.c();
}
function ue(t, n, e, l) {
  const { fragment: d, after_update: h } = t.$$;
  d && d.m(n, e), l || be(() => {
    const r = t.$$.on_mount.map(Te).filter(Pe);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : K(r), t.$$.on_mount = [];
  }), h.forEach(be);
}
function oe(t, n) {
  const e = t.$$;
  e.fragment !== null && (K(e.on_destroy), e.fragment && e.fragment.d(n), e.on_destroy = e.fragment = null, e.ctx = []);
}
function tt(t, n) {
  t.$$.dirty[0] === -1 && (V.push(t), Ie(), t.$$.dirty.fill(0)), t.$$.dirty[n / 31 | 0] |= 1 << n % 31;
}
function ce(t, n, e, l, d, h, r, a = [-1]) {
  const u = J;
  X(t);
  const g = t.$$ = {
    fragment: null,
    ctx: [],
    props: h,
    update: M,
    not_equal: d,
    bound: ke(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (u ? u.$$.context : [])),
    callbacks: ke(),
    dirty: a,
    skip_bound: !1,
    root: n.target || u.$$.root
  };
  r && r(g.root);
  let b = !1;
  if (g.ctx = e ? e(t, n.props || {}, (v, y, ...E) => {
    const F = E.length ? E[0] : y;
    return g.ctx && d(g.ctx[v], g.ctx[v] = F) && (!g.skip_bound && g.bound[v] && g.bound[v](F), b && tt(t, v)), y;
  }) : [], g.update(), b = !0, K(g.before_update), g.fragment = l ? l(g.ctx) : !1, n.target) {
    if (n.hydrate) {
      const v = Ge(n.target);
      g.fragment && g.fragment.l(v), v.forEach(I);
    } else
      g.fragment && g.fragment.c();
    n.intro && U(t.$$.fragment), ue(t, n.target, n.anchor, n.customElement), He();
  }
  X(u);
}
class fe {
  $destroy() {
    oe(this, 1), this.$destroy = M;
  }
  $on(n, e) {
    if (!Pe(e))
      return M;
    const l = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
    return l.push(e), () => {
      const d = l.indexOf(e);
      d !== -1 && l.splice(d, 1);
    };
  }
  $set(n) {
    this.$$set && !qe(n) && (this.$$.skip_bound = !0, this.$$set(n), this.$$.skip_bound = !1);
  }
}
var $e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, we = {}, nt = {
  get exports() {
    return we;
  },
  set exports(t) {
    we = t;
  }
};
(function(t) {
  var n = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var e = function(l) {
    var d = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, h = 0, r = {}, a = {
      manual: l.Prism && l.Prism.manual,
      disableWorkerMessageHandler: l.Prism && l.Prism.disableWorkerMessageHandler,
      util: {
        encode: function i(s) {
          return s instanceof u ? new u(s.type, i(s.content), s.alias) : Array.isArray(s) ? s.map(i) : s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        type: function(i) {
          return Object.prototype.toString.call(i).slice(8, -1);
        },
        objId: function(i) {
          return i.__id || Object.defineProperty(i, "__id", { value: ++h }), i.__id;
        },
        clone: function i(s, o) {
          o = o || {};
          var c, f;
          switch (a.util.type(s)) {
            case "Object":
              if (f = a.util.objId(s), o[f])
                return o[f];
              c = {}, o[f] = c;
              for (var p in s)
                s.hasOwnProperty(p) && (c[p] = i(s[p], o));
              return c;
            case "Array":
              return f = a.util.objId(s), o[f] ? o[f] : (c = [], o[f] = c, s.forEach(function(A, m) {
                c[m] = i(A, o);
              }), c);
            default:
              return s;
          }
        },
        getLanguage: function(i) {
          for (; i; ) {
            var s = d.exec(i.className);
            if (s)
              return s[1].toLowerCase();
            i = i.parentElement;
          }
          return "none";
        },
        setLanguage: function(i, s) {
          i.className = i.className.replace(RegExp(d, "gi"), ""), i.classList.add("language-" + s);
        },
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if ("currentScript" in document && 1 < 2)
            return document.currentScript;
          try {
            throw new Error();
          } catch (c) {
            var i = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(c.stack) || [])[1];
            if (i) {
              var s = document.getElementsByTagName("script");
              for (var o in s)
                if (s[o].src == i)
                  return s[o];
            }
            return null;
          }
        },
        isActive: function(i, s, o) {
          for (var c = "no-" + s; i; ) {
            var f = i.classList;
            if (f.contains(s))
              return !0;
            if (f.contains(c))
              return !1;
            i = i.parentElement;
          }
          return !!o;
        }
      },
      languages: {
        plain: r,
        plaintext: r,
        text: r,
        txt: r,
        extend: function(i, s) {
          var o = a.util.clone(a.languages[i]);
          for (var c in s)
            o[c] = s[c];
          return o;
        },
        insertBefore: function(i, s, o, c) {
          c = c || a.languages;
          var f = c[i], p = {};
          for (var A in f)
            if (f.hasOwnProperty(A)) {
              if (A == s)
                for (var m in o)
                  o.hasOwnProperty(m) && (p[m] = o[m]);
              o.hasOwnProperty(A) || (p[A] = f[A]);
            }
          var S = c[i];
          return c[i] = p, a.languages.DFS(a.languages, function(w, z) {
            z === S && w != i && (this[w] = p);
          }), p;
        },
        DFS: function i(s, o, c, f) {
          f = f || {};
          var p = a.util.objId;
          for (var A in s)
            if (s.hasOwnProperty(A)) {
              o.call(s, A, s[A], c || A);
              var m = s[A], S = a.util.type(m);
              S === "Object" && !f[p(m)] ? (f[p(m)] = !0, i(m, o, null, f)) : S === "Array" && !f[p(m)] && (f[p(m)] = !0, i(m, o, A, f));
            }
        }
      },
      plugins: {},
      highlightAll: function(i, s) {
        a.highlightAllUnder(document, i, s);
      },
      highlightAllUnder: function(i, s, o) {
        var c = {
          callback: o,
          container: i,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        a.hooks.run("before-highlightall", c), c.elements = Array.prototype.slice.apply(c.container.querySelectorAll(c.selector)), a.hooks.run("before-all-elements-highlight", c);
        for (var f = 0, p; p = c.elements[f++]; )
          a.highlightElement(p, s === !0, c.callback);
      },
      highlightElement: function(i, s, o) {
        var c = a.util.getLanguage(i), f = a.languages[c];
        a.util.setLanguage(i, c);
        var p = i.parentElement;
        p && p.nodeName.toLowerCase() === "pre" && a.util.setLanguage(p, c);
        var A = i.textContent, m = {
          element: i,
          language: c,
          grammar: f,
          code: A
        };
        function S(z) {
          m.highlightedCode = z, a.hooks.run("before-insert", m), m.element.innerHTML = m.highlightedCode, a.hooks.run("after-highlight", m), a.hooks.run("complete", m), o && o.call(m.element);
        }
        if (a.hooks.run("before-sanity-check", m), p = m.element.parentElement, p && p.nodeName.toLowerCase() === "pre" && !p.hasAttribute("tabindex") && p.setAttribute("tabindex", "0"), !m.code) {
          a.hooks.run("complete", m), o && o.call(m.element);
          return;
        }
        if (a.hooks.run("before-highlight", m), !m.grammar) {
          S(a.util.encode(m.code));
          return;
        }
        if (s && l.Worker) {
          var w = new Worker(a.filename);
          w.onmessage = function(z) {
            S(z.data);
          }, w.postMessage(JSON.stringify({
            language: m.language,
            code: m.code,
            immediateClose: !0
          }));
        } else
          S(a.highlight(m.code, m.grammar, m.language));
      },
      highlight: function(i, s, o) {
        var c = {
          code: i,
          grammar: s,
          language: o
        };
        if (a.hooks.run("before-tokenize", c), !c.grammar)
          throw new Error('The language "' + c.language + '" has no grammar.');
        return c.tokens = a.tokenize(c.code, c.grammar), a.hooks.run("after-tokenize", c), u.stringify(a.util.encode(c.tokens), c.language);
      },
      tokenize: function(i, s) {
        var o = s.rest;
        if (o) {
          for (var c in o)
            s[c] = o[c];
          delete s.rest;
        }
        var f = new v();
        return y(f, f.head, i), b(i, f, s, f.head, 0), F(f);
      },
      hooks: {
        all: {},
        add: function(i, s) {
          var o = a.hooks.all;
          o[i] = o[i] || [], o[i].push(s);
        },
        run: function(i, s) {
          var o = a.hooks.all[i];
          if (!(!o || !o.length))
            for (var c = 0, f; f = o[c++]; )
              f(s);
        }
      },
      Token: u
    };
    l.Prism = a;
    function u(i, s, o, c) {
      this.type = i, this.content = s, this.alias = o, this.length = (c || "").length | 0;
    }
    u.stringify = function i(s, o) {
      if (typeof s == "string")
        return s;
      if (Array.isArray(s)) {
        var c = "";
        return s.forEach(function(S) {
          c += i(S, o);
        }), c;
      }
      var f = {
        type: s.type,
        content: i(s.content, o),
        tag: "span",
        classes: ["token", s.type],
        attributes: {},
        language: o
      }, p = s.alias;
      p && (Array.isArray(p) ? Array.prototype.push.apply(f.classes, p) : f.classes.push(p)), a.hooks.run("wrap", f);
      var A = "";
      for (var m in f.attributes)
        A += " " + m + '="' + (f.attributes[m] || "").replace(/"/g, "&quot;") + '"';
      return "<" + f.tag + ' class="' + f.classes.join(" ") + '"' + A + ">" + f.content + "</" + f.tag + ">";
    };
    function g(i, s, o, c) {
      i.lastIndex = s;
      var f = i.exec(o);
      if (f && c && f[1]) {
        var p = f[1].length;
        f.index += p, f[0] = f[0].slice(p);
      }
      return f;
    }
    function b(i, s, o, c, f, p) {
      for (var A in o)
        if (!(!o.hasOwnProperty(A) || !o[A])) {
          var m = o[A];
          m = Array.isArray(m) ? m : [m];
          for (var S = 0; S < m.length; ++S) {
            if (p && p.cause == A + "," + S)
              return;
            var w = m[S], z = w.inside, R = !!w.lookbehind, xe = !!w.greedy, je = w.alias;
            if (xe && !w.pattern.global) {
              var Oe = w.pattern.toString().match(/[imsuy]*$/)[0];
              w.pattern = RegExp(w.pattern.source, Oe + "g");
            }
            for (var Ae = w.pattern || w, $ = c.next, P = f; $ !== s.tail && !(p && P >= p.reach); P += $.value.length, $ = $.next) {
              var q = $.value;
              if (s.length > i.length)
                return;
              if (!(q instanceof u)) {
                var Q = 1, T;
                if (xe) {
                  if (T = g(Ae, P, i, R), !T || T.index >= i.length)
                    break;
                  var ee = T.index, De = T.index + T[0].length, H = P;
                  for (H += $.value.length; ee >= H; )
                    $ = $.next, H += $.value.length;
                  if (H -= $.value.length, P = H, $.value instanceof u)
                    continue;
                  for (var G = $; G !== s.tail && (H < De || typeof G.value == "string"); G = G.next)
                    Q++, H += G.value.length;
                  Q--, q = i.slice(P, H), T.index -= P;
                } else if (T = g(Ae, 0, q, R), !T)
                  continue;
                var ee = T.index, te = T[0], ge = q.slice(0, ee), Fe = q.slice(ee + te.length), de = P + q.length;
                p && de > p.reach && (p.reach = de);
                var ne = $.prev;
                ge && (ne = y(s, ne, ge), P += ge.length), E(s, ne, Q);
                var Re = new u(A, z ? a.tokenize(te, z) : te, je, te);
                if ($ = y(s, ne, Re), Fe && y(s, $, Fe), Q > 1) {
                  var he = {
                    cause: A + "," + S,
                    reach: de
                  };
                  b(i, s, o, $.prev, P, he), p && he.reach > p.reach && (p.reach = he.reach);
                }
              }
            }
          }
        }
    }
    function v() {
      var i = { value: null, prev: null, next: null }, s = { value: null, prev: i, next: null };
      i.next = s, this.head = i, this.tail = s, this.length = 0;
    }
    function y(i, s, o) {
      var c = s.next, f = { value: o, prev: s, next: c };
      return s.next = f, c.prev = f, i.length++, f;
    }
    function E(i, s, o) {
      for (var c = s.next, f = 0; f < o && c !== i.tail; f++)
        c = c.next;
      s.next = c, c.prev = s, i.length -= f;
    }
    function F(i) {
      for (var s = [], o = i.head.next; o !== i.tail; )
        s.push(o.value), o = o.next;
      return s;
    }
    if (!l.document)
      return l.addEventListener && (a.disableWorkerMessageHandler || l.addEventListener("message", function(i) {
        var s = JSON.parse(i.data), o = s.language, c = s.code, f = s.immediateClose;
        l.postMessage(a.highlight(c, a.languages[o], o)), f && l.close();
      }, !1)), a;
    var _ = a.util.currentScript();
    _ && (a.filename = _.src, _.hasAttribute("data-manual") && (a.manual = !0));
    function x() {
      a.manual || a.highlightAll();
    }
    if (!a.manual) {
      var k = document.readyState;
      k === "loading" || k === "interactive" && _ && _.defer ? document.addEventListener("DOMContentLoaded", x) : window.requestAnimationFrame ? window.requestAnimationFrame(x) : window.setTimeout(x, 16);
    }
    return a;
  }(n);
  t.exports && (t.exports = e), typeof $e < "u" && ($e.Prism = e), e.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, e.languages.markup.tag.inside["attr-value"].inside.entity = e.languages.markup.entity, e.languages.markup.doctype.inside["internal-subset"].inside = e.languages.markup, e.hooks.add("wrap", function(l) {
    l.type === "entity" && (l.attributes.title = l.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(e.languages.markup.tag, "addInlined", {
    value: function(d, h) {
      var r = {};
      r["language-" + h] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: e.languages[h]
      }, r.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var a = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: r
        }
      };
      a["language-" + h] = {
        pattern: /[\s\S]+/,
        inside: e.languages[h]
      };
      var u = {};
      u[d] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return d;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: a
      }, e.languages.insertBefore("markup", "cdata", u);
    }
  }), Object.defineProperty(e.languages.markup.tag, "addAttribute", {
    value: function(l, d) {
      e.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + l + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [d, "language-" + d],
                inside: e.languages[d]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), e.languages.html = e.languages.markup, e.languages.mathml = e.languages.markup, e.languages.svg = e.languages.markup, e.languages.xml = e.languages.extend("markup", {}), e.languages.ssml = e.languages.xml, e.languages.atom = e.languages.xml, e.languages.rss = e.languages.xml, function(l) {
    var d = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    l.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + d.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
        }
      },
      url: {
        pattern: RegExp("\\burl\\((?:" + d.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + d.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + d.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: d,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, l.languages.css.atrule.inside.rest = l.languages.css;
    var h = l.languages.markup;
    h && (h.tag.addInlined("style", "css"), h.tag.addAttribute("style", "css"));
  }(e), e.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }, e.languages.javascript = e.languages.extend("clike", {
    "class-name": [
      e.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), e.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, e.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: e.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: e.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: e.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: e.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: e.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), e.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: e.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), e.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), e.languages.markup && (e.languages.markup.tag.addInlined("script", "javascript"), e.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), e.languages.js = e.languages.javascript, function() {
    if (typeof e > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var l = "Loading…", d = function(_, x) {
      return "✖ Error " + _ + " while fetching file: " + x;
    }, h = "✖ Error: File does not exist or is empty", r = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, a = "data-src-status", u = "loading", g = "loaded", b = "failed", v = "pre[data-src]:not([" + a + '="' + g + '"]):not([' + a + '="' + u + '"])';
    function y(_, x, k) {
      var i = new XMLHttpRequest();
      i.open("GET", _, !0), i.onreadystatechange = function() {
        i.readyState == 4 && (i.status < 400 && i.responseText ? x(i.responseText) : i.status >= 400 ? k(d(i.status, i.statusText)) : k(h));
      }, i.send(null);
    }
    function E(_) {
      var x = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(_ || "");
      if (x) {
        var k = Number(x[1]), i = x[2], s = x[3];
        return i ? s ? [k, Number(s)] : [k, void 0] : [k, k];
      }
    }
    e.hooks.add("before-highlightall", function(_) {
      _.selector += ", " + v;
    }), e.hooks.add("before-sanity-check", function(_) {
      var x = _.element;
      if (x.matches(v)) {
        _.code = "", x.setAttribute(a, u);
        var k = x.appendChild(document.createElement("CODE"));
        k.textContent = l;
        var i = x.getAttribute("data-src"), s = _.language;
        if (s === "none") {
          var o = (/\.(\w+)$/.exec(i) || [, "none"])[1];
          s = r[o] || o;
        }
        e.util.setLanguage(k, s), e.util.setLanguage(x, s);
        var c = e.plugins.autoloader;
        c && c.loadLanguages(s), y(
          i,
          function(f) {
            x.setAttribute(a, g);
            var p = E(x.getAttribute("data-range"));
            if (p) {
              var A = f.split(/\r\n?|\n/g), m = p[0], S = p[1] == null ? A.length : p[1];
              m < 0 && (m += A.length), m = Math.max(0, Math.min(m - 1, A.length)), S < 0 && (S += A.length), S = Math.max(0, Math.min(S, A.length)), f = A.slice(m, S).join(`
`), x.hasAttribute("data-start") || x.setAttribute("data-start", String(m + 1));
            }
            k.textContent = f, e.highlightElement(k);
          },
          function(f) {
            x.setAttribute(a, b), k.textContent = f;
          }
        );
      }
    }), e.plugins.fileHighlight = {
      highlight: function(x) {
        for (var k = (x || document).querySelectorAll(v), i = 0, s; s = k[i++]; )
          e.highlightElement(s);
      }
    };
    var F = !1;
    e.fileHighlight = function() {
      F || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), F = !0), e.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(nt);
const Z = we;
(function() {
  if (typeof Prism > "u" || typeof document > "u")
    return;
  var t = "line-numbers", n = /\n(?!$)/g, e = Prism.plugins.lineNumbers = {
    getLine: function(r, a) {
      if (!(r.tagName !== "PRE" || !r.classList.contains(t))) {
        var u = r.querySelector(".line-numbers-rows");
        if (u) {
          var g = parseInt(r.getAttribute("data-start"), 10) || 1, b = g + (u.children.length - 1);
          a < g && (a = g), a > b && (a = b);
          var v = a - g;
          return u.children[v];
        }
      }
    },
    resize: function(r) {
      l([r]);
    },
    assumeViewportIndependence: !0
  };
  function l(r) {
    if (r = r.filter(function(u) {
      var g = d(u), b = g["white-space"];
      return b === "pre-wrap" || b === "pre-line";
    }), r.length != 0) {
      var a = r.map(function(u) {
        var g = u.querySelector("code"), b = u.querySelector(".line-numbers-rows");
        if (!(!g || !b)) {
          var v = u.querySelector(".line-numbers-sizer"), y = g.textContent.split(n);
          v || (v = document.createElement("span"), v.className = "line-numbers-sizer", g.appendChild(v)), v.innerHTML = "0", v.style.display = "block";
          var E = v.getBoundingClientRect().height;
          return v.innerHTML = "", {
            element: u,
            lines: y,
            lineHeights: [],
            oneLinerHeight: E,
            sizer: v
          };
        }
      }).filter(Boolean);
      a.forEach(function(u) {
        var g = u.sizer, b = u.lines, v = u.lineHeights, y = u.oneLinerHeight;
        v[b.length - 1] = void 0, b.forEach(function(E, F) {
          if (E && E.length > 1) {
            var _ = g.appendChild(document.createElement("span"));
            _.style.display = "block", _.textContent = E;
          } else
            v[F] = y;
        });
      }), a.forEach(function(u) {
        for (var g = u.sizer, b = u.lineHeights, v = 0, y = 0; y < b.length; y++)
          b[y] === void 0 && (b[y] = g.children[v++].getBoundingClientRect().height);
      }), a.forEach(function(u) {
        var g = u.sizer, b = u.element.querySelector(".line-numbers-rows");
        g.style.display = "none", g.innerHTML = "", u.lineHeights.forEach(function(v, y) {
          b.children[y].style.height = v + "px";
        });
      });
    }
  }
  function d(r) {
    return r ? window.getComputedStyle ? getComputedStyle(r) : r.currentStyle || null : null;
  }
  var h = void 0;
  window.addEventListener("resize", function() {
    e.assumeViewportIndependence && h === window.innerWidth || (h = window.innerWidth, l(Array.prototype.slice.call(document.querySelectorAll("pre." + t))));
  }), Prism.hooks.add("complete", function(r) {
    if (r.code) {
      var a = r.element, u = a.parentNode;
      if (!(!u || !/pre/i.test(u.nodeName)) && !a.querySelector(".line-numbers-rows") && Prism.util.isActive(a, t)) {
        a.classList.remove(t), u.classList.add(t);
        var g = r.code.match(n), b = g ? g.length + 1 : 1, v, y = new Array(b + 1).join("<span></span>");
        v = document.createElement("span"), v.setAttribute("aria-hidden", "true"), v.className = "line-numbers-rows", v.innerHTML = y, u.hasAttribute("data-start") && (u.style.counterReset = "linenumber " + (parseInt(u.getAttribute("data-start"), 10) - 1)), r.element.appendChild(v), l([u]), Prism.hooks.run("line-numbers", r);
      }
    }
  }), Prism.hooks.add("line-numbers", function(r) {
    r.plugins = r.plugins || {}, r.plugins.lineNumbers = !0;
  });
})();
var Le = {}, rt = {
  get exports() {
    return Le;
  },
  set exports(t) {
    Le = t;
  }
};
(function(t) {
  (function() {
    if (typeof Prism > "u")
      return;
    var n = Object.assign || function(r, a) {
      for (var u in a)
        a.hasOwnProperty(u) && (r[u] = a[u]);
      return r;
    };
    function e(r) {
      this.defaults = n({}, r);
    }
    function l(r) {
      return r.replace(/-(\w)/g, function(a, u) {
        return u.toUpperCase();
      });
    }
    function d(r) {
      for (var a = 0, u = 0; u < r.length; ++u)
        r.charCodeAt(u) == "	".charCodeAt(0) && (a += 3);
      return r.length + a;
    }
    var h = {
      "remove-trailing": "boolean",
      "remove-indent": "boolean",
      "left-trim": "boolean",
      "right-trim": "boolean",
      "break-lines": "number",
      indent: "number",
      "remove-initial-line-feed": "boolean",
      "tabs-to-spaces": "number",
      "spaces-to-tabs": "number"
    };
    e.prototype = {
      setDefaults: function(r) {
        this.defaults = n(this.defaults, r);
      },
      normalize: function(r, a) {
        a = n(this.defaults, a);
        for (var u in a) {
          var g = l(u);
          u !== "normalize" && g !== "setDefaults" && a[u] && this[g] && (r = this[g].call(this, r, a[u]));
        }
        return r;
      },
      leftTrim: function(r) {
        return r.replace(/^\s+/, "");
      },
      rightTrim: function(r) {
        return r.replace(/\s+$/, "");
      },
      tabsToSpaces: function(r, a) {
        return a = a | 0 || 4, r.replace(/\t/g, new Array(++a).join(" "));
      },
      spacesToTabs: function(r, a) {
        return a = a | 0 || 4, r.replace(RegExp(" {" + a + "}", "g"), "	");
      },
      removeTrailing: function(r) {
        return r.replace(/\s*?$/gm, "");
      },
      removeInitialLineFeed: function(r) {
        return r.replace(/^(?:\r?\n|\r)/, "");
      },
      removeIndent: function(r) {
        var a = r.match(/^[^\S\n\r]*(?=\S)/gm);
        return !a || !a[0].length || (a.sort(function(u, g) {
          return u.length - g.length;
        }), !a[0].length) ? r : r.replace(RegExp("^" + a[0], "gm"), "");
      },
      indent: function(r, a) {
        return r.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++a).join("	") + "$&");
      },
      breakLines: function(r, a) {
        a = a === !0 ? 80 : a | 0 || 80;
        for (var u = r.split(`
`), g = 0; g < u.length; ++g)
          if (!(d(u[g]) <= a)) {
            for (var b = u[g].split(/(\s+)/g), v = 0, y = 0; y < b.length; ++y) {
              var E = d(b[y]);
              v += E, v > a && (b[y] = `
` + b[y], v = E);
            }
            u[g] = b.join("");
          }
        return u.join(`
`);
      }
    }, t.exports && (t.exports = e), Prism.plugins.NormalizeWhitespace = new e({
      "remove-trailing": !0,
      "remove-indent": !0,
      "left-trim": !0,
      "right-trim": !0
    }), Prism.hooks.add("before-sanity-check", function(r) {
      var a = Prism.plugins.NormalizeWhitespace;
      if (!(r.settings && r.settings["whitespace-normalization"] === !1) && Prism.util.isActive(r.element, "whitespace-normalization", !0)) {
        if ((!r.element || !r.element.parentNode) && r.code) {
          r.code = a.normalize(r.code, r.settings);
          return;
        }
        var u = r.element.parentNode;
        if (!(!r.code || !u || u.nodeName.toLowerCase() !== "pre")) {
          r.settings == null && (r.settings = {});
          for (var g in h)
            if (Object.hasOwnProperty.call(h, g)) {
              var b = h[g];
              if (u.hasAttribute("data-" + g))
                try {
                  var v = JSON.parse(u.getAttribute("data-" + g) || "true");
                  typeof v === b && (r.settings[g] = v);
                } catch {
                }
            }
          for (var y = u.childNodes, E = "", F = "", _ = !1, x = 0; x < y.length; ++x) {
            var k = y[x];
            k == r.element ? _ = !0 : k.nodeName === "#text" && (_ ? F += k.nodeValue : E += k.nodeValue, u.removeChild(k), --x);
          }
          if (!r.element.children.length || !Prism.plugins.KeepMarkup)
            r.code = E + r.code + F, r.code = a.normalize(r.code, r.settings);
          else {
            var i = E + r.element.innerHTML + F;
            r.element.innerHTML = a.normalize(i, r.settings), r.code = r.element.textContent;
          }
        }
      }
    });
  })();
})(rt);
function at(t) {
  let n, e;
  return {
    c() {
      n = j("svg"), e = j("path"), C(e, "fill-rule", "evenodd"), C(e, "d", "M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"), C(e, "clip-rule", "evenodd"), C(n, "xmlns", "http://www.w3.org/2000/svg"), C(n, "viewBox", "0 0 24 24"), C(n, "fill", "currentColor"), C(n, "class", "w-6 h-6 svelte-ru7doq");
    },
    m(l, d) {
      D(l, n, d), L(n, e);
    },
    p: M,
    i: M,
    o: M,
    d(l) {
      l && I(n);
    }
  };
}
class it extends fe {
  constructor(n) {
    super(), ce(this, n, null, at, le, {});
  }
}
function st(t) {
  let n, e, l, d;
  return {
    c() {
      n = j("svg"), e = j("path"), l = j("path"), d = j("path"), C(e, "fill-rule", "evenodd"), C(e, "d", "M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 01-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0113.5 1.5H15a3 3 0 012.663 1.618zM12 4.5A1.5 1.5 0 0113.5 3H15a1.5 1.5 0 011.5 1.5H12z"), C(e, "clip-rule", "evenodd"), C(l, "d", "M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 019 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0116.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625v-12z"), C(d, "d", "M10.5 10.5a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963 5.23 5.23 0 00-3.434-1.279h-1.875a.375.375 0 01-.375-.375V10.5z"), C(n, "xmlns", "http://www.w3.org/2000/svg"), C(n, "viewBox", "0 0 24 24"), C(n, "fill", "currentColor"), C(n, "class", "w-6 h-6 svelte-tt07on");
    },
    m(h, r) {
      D(h, n, r), L(n, e), L(n, l), L(n, d);
    },
    p: M,
    i: M,
    o: M,
    d(h) {
      h && I(n);
    }
  };
}
class lt extends fe {
  constructor(n) {
    super(), ce(this, n, null, st, le, {});
  }
}
function ut(t) {
  let n, e;
  return n = new lt({}), {
    c() {
      _e(n.$$.fragment);
    },
    m(l, d) {
      ue(n, l, d), e = !0;
    },
    i(l) {
      e || (U(n.$$.fragment, l), e = !0);
    },
    o(l) {
      Y(n.$$.fragment, l), e = !1;
    },
    d(l) {
      oe(n, l);
    }
  };
}
function ot(t) {
  let n, e, l, d;
  return e = new it({}), {
    c() {
      n = N("Copied "), l = W("div"), _e(e.$$.fragment), Ce(l, "display", "contents"), Ce(l, "--color", "#abe338");
    },
    m(h, r) {
      D(h, n, r), D(h, l, r), ue(e, l, null), d = !0;
    },
    i(h) {
      d || (U(e.$$.fragment, h), d = !0);
    },
    o(h) {
      Y(e.$$.fragment, h), d = !1;
    },
    d(h) {
      h && I(n), h && e && I(l), oe(e, h);
    }
  };
}
function ct(t) {
  let n, e, l, d, h, r, a, u, g, b, v, y, E, F, _, x, k, i, s, o, c;
  const f = [ot, ut], p = [];
  function A(w, z) {
    return w[4] ? 0 : 1;
  }
  F = A(t), _ = p[F] = f[F](t);
  let m = [
    {
      class: i = t[5] + " " + t[1]
    },
    t[7]
  ], S = {};
  for (let w = 0; w < m.length; w += 1)
    S = B(S, m[w]);
  return {
    c() {
      n = W("link"), e = Be(), l = W("div"), d = W("pre"), h = N("  "), r = W("code"), a = N(`
    `), u = new Ze(!1), g = N(`
  `), v = N(`
`), y = W("button"), E = N(`
  `), _.c(), x = N(`
`), k = N(`
`), C(n, "rel", "stylesheet"), C(n, "href", "https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-a11y-dark.min.css"), document.title = "About", u.a = g, C(r, "class", b = "language-" + t[0] + " svelte-1m6suul"), C(y, "class", "svelte-1m6suul"), re(y, "isCopied", t[4]), Ee(d, S), re(d, "svelte-1m6suul", !0), C(l, "class", "svelte-1m6suul");
    },
    m(w, z) {
      L(document.head, n), D(w, e, z), D(w, l, z), L(l, d), L(d, h), L(d, r), L(r, a), u.m(t[3], r), L(r, g), L(d, v), L(d, y), L(y, E), p[F].m(y, null), L(y, x), L(d, k), t[12](d), s = !0, o || (c = Ue(y, "click", t[6]), o = !0);
    },
    p(w, [z]) {
      (!s || z & 8) && u.p(w[3]), (!s || z & 1 && b !== (b = "language-" + w[0] + " svelte-1m6suul")) && C(r, "class", b);
      let R = F;
      F = A(w), F !== R && (Ke(), Y(p[R], 1, 1, () => {
        p[R] = null;
      }), Qe(), _ = p[F], _ || (_ = p[F] = f[F](w), _.c()), U(_, 1), _.m(y, x)), (!s || z & 16) && re(y, "isCopied", w[4]), Ee(d, S = We(m, [
        (!s || z & 34 && i !== (i = w[5] + " " + w[1])) && { class: i },
        z & 128 && w[7]
      ])), re(d, "svelte-1m6suul", !0);
    },
    i(w) {
      s || (U(_), s = !0);
    },
    o(w) {
      Y(_), s = !1;
    },
    d(w) {
      I(n), w && I(e), w && I(l), p[F].d(), t[12](null), o = !1, c();
    }
  };
}
function ft(t, n, e) {
  let l;
  const d = [
    "code",
    "language",
    "showLineNumbers",
    "normalizeWhiteSpace",
    "normalizeWhiteSpaceConfig",
    "classes"
  ];
  let h = Se(n, d), { code: r = "" } = n, { language: a = "javascript" } = n, { showLineNumbers: u = !0 } = n, { normalizeWhiteSpace: g = !0 } = n, { normalizeWhiteSpaceConfig: b = {
    "remove-trailing": !0,
    "remove-indent": !0,
    "left-trim": !0,
    "right-trim": !0
  } } = n, { classes: v = "" } = n, y, E = "", F = !1;
  const _ = (i) => navigator.clipboard.writeText(i), x = () => {
    _(r), e(4, F = !0), setTimeout(() => e(4, F = !1), 2e3);
  };
  Ve(() => {
    g && Z.plugins.NormalizeWhitespace.setDefaults(b);
  }), Xe(async () => {
    await Je(), Z.highlightAllUnder(y);
  });
  function k(i) {
    ve[i ? "unshift" : "push"](() => {
      y = i, e(2, y);
    });
  }
  return t.$$set = (i) => {
    n = B(B({}, n), me(i)), e(7, h = Se(n, d)), "code" in i && e(8, r = i.code), "language" in i && e(0, a = i.language), "showLineNumbers" in i && e(9, u = i.showLineNumbers), "normalizeWhiteSpace" in i && e(10, g = i.normalizeWhiteSpace), "normalizeWhiteSpaceConfig" in i && e(11, b = i.normalizeWhiteSpaceConfig), "classes" in i && e(1, v = i.classes);
  }, t.$$.update = () => {
    t.$$.dirty & 1537 && e(5, l = `language-${a} ${u ? "line-numbers" : ""} ${g === !0 ? "" : "no-whitespace-normalization"}`), t.$$.dirty & 257 && typeof Z < "u" && r && e(3, E = Z.highlight(r, Z.languages[a], a));
  }, [
    a,
    v,
    y,
    E,
    F,
    l,
    x,
    h,
    r,
    u,
    g,
    b,
    k
  ];
}
let gt = class extends fe {
  constructor(n) {
    super(), ce(this, n, ft, ct, le, {
      code: 8,
      language: 0,
      showLineNumbers: 9,
      normalizeWhiteSpace: 10,
      normalizeWhiteSpaceConfig: 11,
      classes: 1
    });
  }
};
function dt(t) {
  let n, e;
  const l = [t[0]];
  let d = {};
  for (let h = 0; h < l.length; h += 1)
    d = B(d, l[h]);
  return n = new gt({ props: d }), {
    c() {
      _e(n.$$.fragment);
    },
    m(h, r) {
      ue(n, h, r), e = !0;
    },
    p(h, [r]) {
      const a = r & 1 ? We(l, [et(h[0])]) : {};
      n.$set(a);
    },
    i(h) {
      e || (U(n.$$.fragment, h), e = !0);
    },
    o(h) {
      Y(n.$$.fragment, h), e = !1;
    },
    d(h) {
      oe(n, h);
    }
  };
}
function ht(t, n, e) {
  return t.$$set = (l) => {
    e(0, n = B(B({}, n), me(l)));
  }, n = me(n), [n];
}
class mt extends fe {
  constructor(n) {
    super(), ce(this, n, ht, dt, le, {});
  }
}
export {
  mt as default
};
