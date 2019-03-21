/*
 FlexSearch v0.6.22
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/flexsearch
*/
'use strict';
(function(v, N, Q) {
  let J;
  (J = Q.define) && J.amd ? J([], function() {
    return N;
  }) : (J = Q.modules) ? J[v.toLowerCase()] = N : "object" === typeof exports ? module.exports = N : Q[v] = N;
})("FlexSearch", function() {
  function v(a, b) {
    const c = b ? b.id : a && a.id;
    this.id = c || 0 === c ? c : ja++;
    this.init(a, b);
    ca(this, "index", function() {
      return this.a ? Object.keys(this.a.index[this.a.keys[0]].f) : Object.keys(this.f);
    });
    ca(this, "length", function() {
      return this.index.length;
    });
  }
  function N(a) {
    const b = B();
    for (const c in a) {
      if (a.hasOwnProperty(c)) {
        const d = a[c];
        b[c] = E(d) ? d.slice(0) : H(d) ? N(d) : d;
      }
    }
    return b;
  }
  function Q(a, b) {
    const c = a.length, d = O(b), e = [];
    for (let g = 0, f = 0; g < c; g++) {
      const h = a[g];
      if (d && b(h) || !d && !b[h]) {
        e[f++] = h;
      }
    }
    return e;
  }
  function J(a, b, c, d, e, g, f, h, l, m) {
    c = da(c, f ? 0 : e, h, g, b, l, m);
    let p;
    h && (h = c.page, p = c.next, c = c.result);
    if (f) {
      b = this.where(f, null, e, c);
    } else {
      b = c;
      c = this.g;
      e = b.length;
      g = Array(e);
      for (f = 0; f < e; f++) {
        g[f] = c[b[f]];
      }
      b = g;
    }
    c = b;
    d && (O(d) || (K = d.split(":"), 1 < K.length ? d = ka : (K = K[0], d = la)), c.sort(d));
    c = R(h, p, c);
    this.cache && this.j.set(a, c);
    return c;
  }
  function ca(a, b, c) {
    Object.defineProperty(a, b, {get:c});
  }
  function q(a) {
    return new RegExp(a, "g");
  }
  function P(a, b) {
    for (let c = 0; c < b.length; c += 2) {
      a = a.replace(b[c], b[c + 1]);
    }
    return a;
  }
  function T(a, b, c, d, e, g, f, h) {
    if (b[c]) {
      return b[c];
    }
    e = e ? (h - (f || h / 1.5)) * g + (f || h / 1.5) * e : g;
    b[c] = e;
    e >= f && (a = a[h - (e + 0.5 >> 0)], a = a[c] || (a[c] = []), a[a.length] = d);
    return e;
  }
  function Y(a, b) {
    if (a) {
      const c = Object.keys(a);
      for (let d = 0, e = c.length; d < e; d++) {
        const g = c[d], f = a[g];
        if (f) {
          for (let h = 0, l = f.length; h < l; h++) {
            if (f[h] === b) {
              1 === l ? delete a[g] : f.splice(h, 1);
              break;
            } else {
              H(f[h]) && Y(f[h], b);
            }
          }
        }
      }
    }
  }
  function Z(a) {
    let b = "", c = "";
    var d = "";
    for (let e = 0; e < a.length; e++) {
      const g = a[e];
      if (g !== c) {
        if (e && "h" === g) {
          if (d = "a" === d || "e" === d || "i" === d || "o" === d || "u" === d || "y" === d, ("a" === c || "e" === c || "i" === c || "o" === c || "u" === c || "y" === c) && d || " " === c) {
            b += g;
          }
        } else {
          b += g;
        }
      }
      d = e === a.length - 1 ? "" : a[e + 1];
      c = g;
    }
    return b;
  }
  function ma(a, b) {
    a = a.length - b.length;
    return 0 > a ? 1 : a ? -1 : 0;
  }
  function la(a, b) {
    a = a[K];
    b = b[K];
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function ka(a, b) {
    const c = K.length;
    for (let d = 0; d < c; d++) {
      a = a[K[d]], b = b[K[d]];
    }
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function R(a, b, c) {
    return a ? {page:a, next:b ? "" + b : null, result:c} : c;
  }
  function da(a, b, c, d, e, g, f) {
    let h, l = [];
    if (!0 === c) {
      c = "0";
      var m = "";
    } else {
      m = c && c.split(":");
    }
    const p = a.length;
    if (1 < p) {
      const y = B(), r = [];
      let w, x;
      var n = 0, k;
      let F;
      var u = !0;
      let C, D = 0, M, aa, U, ba;
      m && (2 === m.length ? (U = m, m = !1) : m = ba = parseInt(m[0], 10));
      if (f) {
        for (w = B(); n < p; n++) {
          if ("not" === e[n]) {
            for (x = a[n], F = x.length, k = 0; k < F; k++) {
              w["@" + x[k]] = 1;
            }
          } else {
            aa = n + 1;
          }
        }
        if (I(aa)) {
          return R(c, h, l);
        }
        n = 0;
      } else {
        M = L(e) && e;
      }
      let V;
      for (; n < p; n++) {
        const na = n === (aa || p) - 1;
        if (!M || !n) {
          if ((k = M || e && e[n]) && "and" !== k) {
            if ("or" === k) {
              V = !1;
            } else {
              continue;
            }
          } else {
            V = g = !0;
          }
        }
        x = a[n];
        if (F = x.length) {
          if (u) {
            if (C) {
              var t = C.length;
              for (k = 0; k < t; k++) {
                u = C[k];
                var A = "@" + u;
                f && w[A] || (y[A] = 1, g || (l[D++] = u));
              }
              C = null;
              u = !1;
            } else {
              C = x;
              continue;
            }
          }
          A = !1;
          for (k = 0; k < F; k++) {
            t = x[k];
            var z = "@" + t;
            const W = g ? y[z] || 0 : n;
            if (!(!W && !d || f && w[z] || !g && y[z])) {
              if (W === n) {
                if (na) {
                  if (!ba || --ba < D) {
                    if (l[D++] = t, b && D === b) {
                      return R(c, D + (m || 0), l);
                    }
                  }
                } else {
                  y[z] = n + 1;
                }
                A = !0;
              } else {
                d && (z = r[W] || (r[W] = []), z[z.length] = t);
              }
            }
          }
          if (V && !A && !d) {
            break;
          }
        } else {
          if (V && !d) {
            return R(c, h, x);
          }
        }
      }
      if (C) {
        if (n = C.length, f) {
          for (k = m ? parseInt(m, 10) : 0; k < n; k++) {
            a = C[k], w["@" + a] || (l[D++] = a);
          }
        } else {
          l = C;
        }
      }
      if (d) {
        for (D = l.length, U ? (n = parseInt(U[0], 10) + 1, k = parseInt(U[1], 10) + 1) : (n = r.length, k = 0); n--;) {
          if (t = r[n]) {
            for (F = t.length; k < F; k++) {
              if (d = t[k], !f || !w["@" + d]) {
                if (l[D++] = d, b && D === b) {
                  return R(c, n + ":" + k, l);
                }
              }
            }
            k = 0;
          }
        }
      }
    } else {
      !p || e && "not" === e[0] || (l = a[0], m && (m = parseInt(m[0], 10)));
    }
    b && (f = l.length, m && m > f && (m = 0), m = m || 0, h = m + b, h < f ? l = l.slice(m, h) : (h = 0, m && (l = l.slice(m))));
    return R(c, h, l);
  }
  function L(a) {
    return "string" === typeof a;
  }
  function E(a) {
    return a.constructor === Array;
  }
  function O(a) {
    return "function" === typeof a;
  }
  function H(a) {
    return "object" === typeof a;
  }
  function I(a) {
    return "undefined" === typeof a;
  }
  function ea(a) {
    const b = Array(a);
    for (let c = 0; c < a; c++) {
      b[c] = B();
    }
    return b;
  }
  function B() {
    return Object.create(null);
  }
  const G = {encode:"icase", c:"forward", split:/\W+/, cache:!1, async:!1, C:!1, v:!1, a:!1, b:9, threshold:0, depth:0}, fa = {memory:{encode:"extra", c:"strict", threshold:0, b:1}, speed:{encode:"icase", c:"strict", threshold:1, b:3, depth:2}, match:{encode:"extra", c:"full", threshold:1, b:3}, score:{encode:"extra", c:"strict", threshold:1, b:9, depth:4}, balance:{encode:"balance", c:"strict", threshold:0, b:3, depth:3}, fast:{encode:"icase", c:"strict", threshold:8, b:9, depth:1}}, X = [];
  let ja = 0;
  const ha = {}, ia = {};
  v.create = function(a, b) {
    return new v(a, b);
  };
  v.registerMatcher = function(a) {
    for (const b in a) {
      a.hasOwnProperty(b) && X.push(q(b), a[b]);
    }
    return this;
  };
  v.registerEncoder = function(a, b) {
    S[a] = b.bind(S);
    return this;
  };
  v.registerLanguage = function(a, b) {
    ha[a] = b.filter;
    ia[a] = b.stemmer;
    return this;
  };
  v.encode = function(a, b) {
    return S[a](b);
  };
  v.prototype.init = function(a, b) {
    this.m = [];
    if (b) {
      var c = b.preset;
      a = b;
    } else {
      a || (a = G), c = a.preset;
    }
    b = {};
    L(a) ? (b = fa[a], a = {}) : c && (b = fa[c]);
    this.c = a.tokenize || b.c || this.c || G.c;
    this.split = a.split || this.split || G.split;
    this.v = a.rtl || this.v || G.v;
    this.async = "undefined" === typeof Promise || I(c = a.async) ? this.async || G.async : c;
    this.threshold = I(c = a.threshold) ? b.threshold || this.threshold || G.threshold : c;
    this.b = I(c = a.resolution) ? c = b.b || this.b || G.b : c;
    c <= this.threshold && (this.b = this.threshold + 1);
    this.depth = "strict" !== this.c || I(c = a.depth) ? b.depth || this.depth || G.depth : c;
    this.o = (c = I(c = a.encode) ? b.encode || G.encode : c) && S[c] && S[c].bind(S) || (O(c) ? c : this.o || !1);
    (c = a.matcher) && this.addMatcher(c);
    if (c = (b = a.lang) || a.filter) {
      L(c) && (c = ha[c]);
      if (E(c)) {
        var d = this.o, e = B();
        for (var g = 0; g < c.length; g++) {
          var f = d ? d(c[g]) : c[g];
          e[f] = 1;
        }
        c = e;
      }
      this.filter = c;
    }
    if (c = b || a.stemmer) {
      var h;
      b = L(c) ? ia[c] : c;
      d = this.o;
      e = [];
      for (h in b) {
        b.hasOwnProperty(h) && (g = d ? d(h) : h, e.push(q(g + "($|\\W)"), d ? d(b[h]) : b[h]));
      }
      this.stemmer = h = e;
    }
    this.a = e = (c = a.doc) ? N(c) : this.a || G.a;
    this.i = ea(this.b - (this.threshold || 0));
    this.h = B();
    this.f = B();
    if (e) {
      this.g = B();
      a.doc = null;
      h = e.index = {};
      b = e.keys = [];
      d = e.field;
      g = e.tag;
      E(e.id) || (e.id = e.id.split(":"));
      if (g) {
        this.w = B();
        f = B();
        if (d) {
          if (L(d)) {
            f[d] = a;
          } else {
            if (E(d)) {
              for (let l = 0; l < d.length; l++) {
                f[d[l]] = a;
              }
            } else {
              H(d) && (f = d);
            }
          }
        }
        E(g) || (e.tag = g = [g]);
        for (d = 0; d < g.length; d++) {
          this.w[g[d]] = B();
        }
        this.B = g;
        d = f;
      }
      if (d) {
        let l;
        E(d) || (H(d) ? (l = d, e.field = d = Object.keys(d)) : e.field = d = [d]);
        for (e = 0; e < d.length; e++) {
          g = d[e], E(g) || (l && (a = l[g]), b[e] = g, d[e] = g.split(":")), h[g] = new v(a), h[g].g = this.g;
        }
      }
    }
    this.u = !0;
    this.j = (this.cache = c = I(c = a.cache) ? this.cache || G.cache : c) ? new oa(c) : !1;
    return this;
  };
  v.prototype.encode = function(a) {
    a && X.length && (a = P(a, X));
    a && this.m.length && (a = P(a, this.m));
    a && this.o && (a = this.o(a));
    a && this.stemmer && (a = P(a, this.stemmer));
    return a;
  };
  v.prototype.addMatcher = function(a) {
    const b = this.m;
    for (const c in a) {
      a.hasOwnProperty(c) && b.push(q(c), a[c]);
    }
    return this;
  };
  v.prototype.add = function(a, b, c, d, e) {
    if (this.a && H(a)) {
      return this.s("add", a, b);
    }
    if (b && L(b) && (a || 0 === a)) {
      var g = "@" + a;
      if (this.f[g] && !d) {
        return this.update(a, b);
      }
      if (!e) {
        if (this.async) {
          let r = this;
          g = new Promise(function(w) {
            setTimeout(function() {
              r.add(a, b, null, d, !0);
              r = null;
              w();
            });
          });
          if (c) {
            g.then(c);
          } else {
            return g;
          }
          return this;
        }
        if (c) {
          return this.add(a, b, null, d, !0), c(), this;
        }
      }
      b = this.encode(b);
      if (!b.length) {
        return this;
      }
      c = this.c;
      e = O(c) ? c(b) : b.split(this.split);
      this.filter && (e = Q(e, this.filter));
      const n = B();
      n._ctx = B();
      const k = e.length, u = this.threshold, t = this.depth, A = this.b, z = this.i, y = this.v;
      for (let r = 0; r < k; r++) {
        var f = e[r];
        if (f) {
          var h = f.length, l = (y ? r + 1 : k - r) / k, m = "";
          switch(c) {
            case "reverse":
            case "both":
              for (var p = h; --p;) {
                m = f[p] + m, T(z, n, m, a, y ? 1 : (h - p) / h, l, u, A - 1);
              }
              m = "";
            case "forward":
              for (p = 0; p < h; p++) {
                m += f[p], T(z, n, m, a, y ? (p + 1) / h : 1, l, u, A - 1);
              }
              break;
            case "full":
              for (p = 0; p < h; p++) {
                const w = (y ? p + 1 : h - p) / h;
                for (let x = h; x > p; x--) {
                  m = f.substring(p, x), T(z, n, m, a, w, l, u, A - 1);
                }
              }
              break;
            default:
              if (h = T(z, n, f, a, 1, l, u, A - 1), t && 1 < k && h >= u) {
                for (h = n._ctx[f] || (n._ctx[f] = B()), f = this.h[f] || (this.h[f] = ea(A - (u || 0))), l = r - t, m = r + t + 1, 0 > l && (l = 0), m > k && (m = k); l < m; l++) {
                  l !== r && T(f, h, e[l], a, 0, A - (l < r ? r - l : l - r), u, A - 1);
                }
              }
          }
        }
      }
      this.f[g] = 1;
      this.u = !1;
    }
    return this;
  };
  v.prototype.s = function(a, b, c) {
    if (E(b)) {
      for (let l = 0, m = b.length; l < m; l++) {
        if (l === m - 1) {
          return this.s(a, b[l], c);
        }
        this.s(a, b[l]);
      }
    } else {
      const l = this.a.index, m = this.a.keys;
      var d = this.a.tag, e = this.a.id;
      let p;
      let n;
      for (var g = 0; g < e.length; g++) {
        p = (p || b)[e[g]];
      }
      if (d) {
        for (e = 0; e < d.length; e++) {
          var f = d[e];
          var h = f.split(":");
          for (g = 0; g < h.length; g++) {
            n = (n || b)[h[g]];
          }
          n = "@" + n;
        }
        h = this.w[f];
        h = h[n] || (h[n] = []);
      }
      if ("remove" === a) {
        delete this.g[p];
        for (let k = 0, u = m.length; k < u; k++) {
          if (k === u - 1) {
            return l[m[k]].remove(p, c), this;
          }
          l[m[k]].remove(p);
        }
      }
      e = this.a.field;
      h && (h[h.length] = b);
      this.g[p] = b;
      for (let k = 0, u = e.length; k < u; k++) {
        d = e[k];
        let t;
        for (f = 0; f < d.length; f++) {
          t = (t || b)[d[f]];
        }
        d = l[m[k]];
        f = "add" === a ? d.add : d.update;
        k === u - 1 ? f.call(d, p, t, c) : f.call(d, p, t);
      }
    }
    return this;
  };
  v.prototype.update = function(a, b, c) {
    if (this.a && H(a)) {
      return this.s("update", a, b);
    }
    this.f["@" + a] && L(b) && (this.remove(a), this.add(a, b, c, !0));
    return this;
  };
  v.prototype.remove = function(a, b, c) {
    if (this.a && H(a)) {
      return this.s("remove", a, b);
    }
    var d = "@" + a;
    if (this.f[d]) {
      if (!c) {
        if (this.async && "function" !== typeof importScripts) {
          let e = this;
          d = new Promise(function(g) {
            setTimeout(function() {
              e.remove(a, null, !0);
              e = null;
              g();
            });
          });
          if (b) {
            d.then(b);
          } else {
            return d;
          }
          return this;
        }
        if (b) {
          return this.remove(a, null, !0), b(), this;
        }
      }
      for (b = 0; b < this.b - (this.threshold || 0); b++) {
        Y(this.i[b], a);
      }
      this.depth && Y(this.h, a);
      delete this.f[d];
      this.u = !1;
    }
    return this;
  };
  let K;
  v.prototype.search = function(a, b, c, d) {
    if (H(b)) {
      if (E(b)) {
        for (var e = 0; e < b.length; e++) {
          b[e].query = a;
        }
      } else {
        b.query = a;
      }
      a = b;
      b = 1000;
    } else {
      b && O(b) ? (c = b, b = 1000) : b || 0 === b || (b = 1000);
    }
    let g = [], f = a;
    let h, l, m;
    if (H(a) && !E(a)) {
      c || (c = a.callback) && (f.callback = null);
      l = a.sort;
      h = a.page;
      b = a.limit;
      var p = a.threshold;
      m = a.suggest;
      a = a.query;
    }
    if (this.a) {
      p = this.a.index;
      const y = f.where;
      var n = f.bool || "or", k = f.field;
      let r = n;
      let w, x;
      if (k) {
        E(k) || (k = [k]);
      } else {
        if (E(f)) {
          var u = f;
          k = [];
          r = [];
          for (var t = 0; t < f.length; t++) {
            d = f[t], e = d.bool || n, k[t] = d.field, r[t] = e, "not" === e ? w = !0 : "and" === e && (x = !0);
          }
        } else {
          k = this.a.keys;
        }
      }
      n = k.length;
      for (t = 0; t < n; t++) {
        u && (f = u[t]), h && !L(f) && (f.page = null, f.limit = 0), g[t] = p[k[t]].search(f, 0);
      }
      if (c) {
        return c(J.call(this, a, r, g, l, b, m, y, h, x, w));
      }
      if (this.async) {
        const F = this;
        return new Promise(function(C) {
          Promise.all(g).then(function(D) {
            C(J.call(F, a, r, D, l, b, m, y, h, x, w));
          });
        });
      }
      return J.call(this, a, r, g, l, b, m, y, h, x, w);
    }
    p || (p = this.threshold || 0);
    if (!d) {
      if (this.async && "function" !== typeof importScripts) {
        let y = this;
        p = new Promise(function(r) {
          setTimeout(function() {
            r(y.search(f, b, null, !0));
            y = null;
          });
        });
        if (c) {
          p.then(c);
        } else {
          return p;
        }
        return this;
      }
      if (c) {
        return c(this.search(f, b, null, !0)), this;
      }
    }
    if (!a || !L(a)) {
      return g;
    }
    f = a;
    if (this.cache) {
      if (this.u) {
        if (c = this.j.get(a)) {
          return c;
        }
      } else {
        this.j.clear(), this.u = !0;
      }
    }
    f = this.encode(f);
    if (!f.length) {
      return g;
    }
    c = this.c;
    c = O(c) ? c(f) : f.split(this.split);
    this.filter && (c = Q(c, this.filter));
    u = c.length;
    d = !0;
    e = [];
    const A = B();
    let z = 0;
    1 < u && (this.depth && "strict" === this.c ? n = !0 : c.sort(ma));
    if (!n || (t = this.h)) {
      const y = this.b;
      for (; z < u; z++) {
        let r = c[z];
        if (r) {
          if (n) {
            if (!k) {
              if (t[r]) {
                k = r, A[r] = 1;
              } else {
                if (!m) {
                  return g;
                }
              }
            }
            if (m && z === u - 1 && !e.length) {
              n = !1, r = k || r, A[r] = 0;
            } else {
              if (!k) {
                continue;
              }
            }
          }
          if (!A[r]) {
            const w = [];
            let x = !1, F = 0;
            const C = n ? t[k] : this.i;
            if (C) {
              let D;
              for (let M = 0; M < y - p; M++) {
                if (D = C[M] && C[M][r]) {
                  w[F++] = D, x = !0;
                }
              }
            }
            if (x) {
              k = r, e[e.length] = 1 < F ? w.concat.apply([], w) : w[0];
            } else {
              if (!m) {
                d = !1;
                break;
              }
            }
            A[r] = 1;
          }
        }
      }
    } else {
      d = !1;
    }
    d && (g = da(e, b, h, m));
    this.cache && this.j.set(a, g);
    return g;
  };
  v.prototype.find = function(a, b) {
    return this.where(a, b, 1)[0] || null;
  };
  v.prototype.where = function(a, b, c, d) {
    const e = this.g, g = [];
    let f = 0;
    let h;
    var l;
    let m;
    if (H(a)) {
      c || (c = b);
      var p = Object.keys(a);
      var n = p.length;
      h = !1;
      if (1 === n && "id" === p[0]) {
        return [e[a.id]];
      }
      if ((l = this.B) && !d) {
        for (var k = 0; k < l.length; k++) {
          var u = l[k], t = a[u];
          if (!I(t)) {
            m = this.w[u]["@" + t];
            if (0 === --n) {
              return m;
            }
            p.splice(p.indexOf(u), 1);
            delete a[u];
            break;
          }
        }
      }
      l = Array(n);
      for (k = 0; k < n; k++) {
        l[k] = p[k].split(":");
      }
    } else {
      if (O(a)) {
        b = d || Object.keys(e);
        c = b.length;
        for (p = 0; p < c; p++) {
          n = e[b[p]], a(n) && (g[f++] = n);
        }
        return g;
      }
      if (I(b)) {
        return [e[a]];
      }
      if ("id" === a) {
        return [e[b]];
      }
      p = [a];
      n = 1;
      l = [a.split(":")];
      h = !0;
    }
    d = m || d || Object.keys(e);
    k = d.length;
    for (u = 0; u < k; u++) {
      t = m ? d[u] : e[d[u]];
      let A = !0;
      for (let z = 0; z < n; z++) {
        h || (b = a[p[z]]);
        const y = l[z], r = y.length;
        let w = t;
        if (1 < r) {
          for (let x = 0; x < r; x++) {
            w = w[y[x]];
          }
        } else {
          w = w[y[0]];
        }
        if (w !== b) {
          A = !1;
          break;
        }
      }
      if (A && (g[f++] = t, c && f === c)) {
        break;
      }
    }
    return g;
  };
  v.prototype.info = function() {
    return {id:this.id, items:this.length, cache:this.cache && this.cache.l ? this.cache.l.length : !1, matcher:X.length + (this.m ? this.m.length : 0), worker:this.C, threshold:this.threshold, depth:this.depth, resolution:this.b, contextual:this.depth && "strict" === this.c};
  };
  v.prototype.clear = function() {
    return this.destroy().init();
  };
  v.prototype.destroy = function() {
    this.cache && (this.j.clear(), this.j = null);
    this.i = this.h = this.f = null;
    if (this.a) {
      const a = this.a.keys;
      for (let b = 0; b < a.length; b++) {
        this.a.index[a[b]].destroy();
      }
      this.a = this.g = null;
    }
    return this;
  };
  v.prototype.export = function() {
    let a;
    if (this.a) {
      const b = this.a.keys;
      a = Array(b.length + 1);
      let c = 0;
      for (; c < b.length; c++) {
        const d = this.a.index[b[c]];
        a[c] = [d.i, d.h, Object.keys(d.f)];
      }
      a[c] = this.g;
    } else {
      a = [this.i, this.h, Object.keys(this.f)];
    }
    return JSON.stringify(a);
  };
  v.prototype.import = function(a) {
    a = JSON.parse(a);
    const b = B();
    if (this.a) {
      var c = this.a.keys, d = c.length, e = a[0][2];
      for (var g = 0; g < e.length; g++) {
        b[e[g]] = 1;
      }
      for (e = 0; e < d; e++) {
        g = this.a.index[c[e]], g.i = a[e][0], g.h = a[e][1], g.f = b, g.g = a[d];
      }
      this.g = a[d];
    } else {
      c = a[2];
      for (d = 0; d < c.length; d++) {
        b[c[d]] = 1;
      }
      this.i = a[0];
      this.h = a[1];
      this.f = b;
    }
  };
  const S = {icase:function(a) {
    return a.toLowerCase();
  }, simple:function() {
    const a = [q("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"), "a", q("[\u00e8\u00e9\u00ea\u00eb]"), "e", q("[\u00ec\u00ed\u00ee\u00ef]"), "i", q("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"), "o", q("[\u00f9\u00fa\u00fb\u00fc\u0171]"), "u", q("[\u00fd\u0177\u00ff]"), "y", q("\u00f1"), "n", q("[\u00e7c]"), "k", q("\u00df"), "s", q(" & "), " and ", q("[-/]"), " ", q("[^a-z0-9 ]"), "", q("\\s+"), " "];
    return function(b) {
      b = P(b.toLowerCase(), a);
      return " " === b ? "" : b;
    };
  }(), advanced:function() {
    const a = [q("ae"), "a", q("ai"), "ei", q("ay"), "ei", q("ey"), "ei", q("oe"), "o", q("ue"), "u", q("ie"), "i", q("sz"), "s", q("zs"), "s", q("sh"), "s", q("ck"), "k", q("cc"), "k", q("th"), "t", q("dt"), "t", q("ph"), "f", q("pf"), "f", q("ou"), "o", q("uo"), "u"];
    return function(b, c) {
      if (!b) {
        return b;
      }
      b = this.simple(b);
      2 < b.length && (b = P(b, a));
      c || 1 < b.length && (b = Z(b));
      return b;
    };
  }(), extra:function() {
    const a = [q("p"), "b", q("z"), "s", q("[cgq]"), "k", q("n"), "m", q("d"), "t", q("[vw]"), "f", q("[aeiouy]"), ""];
    return function(b) {
      if (!b) {
        return b;
      }
      b = this.advanced(b, !0);
      if (1 < b.length) {
        b = b.split(" ");
        for (let c = 0; c < b.length; c++) {
          const d = b[c];
          1 < d.length && (b[c] = d[0] + P(d.substring(1), a));
        }
        b = b.join(" ");
        b = Z(b);
      }
      return b;
    };
  }(), balance:function() {
    const a = [q("[-/]"), " ", q("[^a-z0-9 ]"), "", q("\\s+"), " "];
    return function(b) {
      return Z(P(b.toLowerCase(), a));
    };
  }()}, oa = function() {
    function a(b) {
      this.clear();
      this.A = !0 !== b && b;
    }
    a.prototype.clear = function() {
      this.cache = B();
      this.count = B();
      this.index = B();
      this.l = [];
    };
    a.prototype.set = function(b, c) {
      if (this.A && I(this.cache[b])) {
        let d = this.l.length;
        if (d === this.A) {
          d--;
          const e = this.l[d];
          delete this.cache[e];
          delete this.count[e];
          delete this.index[e];
        }
        this.index[b] = d;
        this.l[d] = b;
        this.count[b] = -1;
        this.cache[b] = c;
        this.get(b);
      } else {
        this.cache[b] = c;
      }
    };
    a.prototype.get = function(b) {
      const c = this.cache[b];
      if (this.A && c) {
        var d = ++this.count[b];
        const g = this.index;
        let f = g[b];
        if (0 < f) {
          const h = this.l;
          for (var e = f; this.count[h[--f]] <= d && -1 !== f;) {
          }
          f++;
          if (f !== e) {
            for (d = e; d > f; d--) {
              e = h[d - 1], h[d] = e, g[e] = d;
            }
            h[f] = b;
            g[b] = f;
          }
        }
      }
      return c;
    };
    return a;
  }();
  return v;
}(!1), this);

