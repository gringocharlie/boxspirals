console.log("### p5.collide v0.7.3 ###"),
    (p5.prototype._collideDebug = !1),
    (p5.prototype.collideDebug = function (t) {
        _collideDebug = t;
    }),
    (p5.prototype.collideRectRect = function (t, o, e, i, r, l, n, c) {
        return t + e >= r && t <= r + n && o + i >= l && o <= l + c;
    }),
    (p5.prototype.collideRectRectVector = function (t, o, e, i) {
        return p5.prototype.collideRectRect(t.x, t.y, o.x, o.y, e.x, e.y, i.x, i.y);
    }),
    (p5.prototype.collideRectCircle = function (t, o, e, i, r, l, n) {
        var c = r,
            p = l;
        return r < t ? (c = t) : r > t + e && (c = t + e), l < o ? (p = o) : l > o + i && (p = o + i), this.dist(r, l, c, p) <= n / 2;
    }),
    (p5.prototype.collideRectCircleVector = function (t, o, e, i) {
        return p5.prototype.collideRectCircle(t.x, t.y, o.x, o.y, e.x, e.y, i);
    }),
    (p5.prototype.collideCircleCircle = function (t, o, e, i, r, l) {
        return this.dist(t, o, i, r) <= e / 2 + l / 2;
    }),
    (p5.prototype.collideCircleCircleVector = function (t, o, e, i) {
        return p5.prototype.collideCircleCircle(t.x, t.y, o, e.x, e.y, i);
    }),
    (p5.prototype.collidePointCircle = function (t, o, e, i, r) {
        return this.dist(t, o, e, i) <= r / 2;
    }),
    (p5.prototype.collidePointCircleVector = function (t, o, e) {
        return p5.prototype.collidePointCircle(t.x, t.y, o.x, o.y, e);
    }),
    (p5.prototype.collidePointEllipse = function (t, o, e, i, r, l) {
        var n = r / 2,
            c = l / 2;
        if (t > e + n || t < e - n || o > i + c || o < i - c) return !1;
        var p = t - e,
            y = o - i,
            d = (c * this.sqrt(this.abs(n * n - p * p))) / n;
        return y <= d && y >= -d;
    }),
    (p5.prototype.collidePointEllipseVector = function (t, o, e) {
        return p5.prototype.collidePointEllipse(t.x, t.y, o.x, o.y, e.x, e.y);
    }),
    (p5.prototype.collidePointRect = function (t, o, e, i, r, l) {
        return t >= e && t <= e + r && o >= i && o <= i + l;
    }),
    (p5.prototype.collidePointRectVector = function (t, o, e) {
        return p5.prototype.collidePointRect(t.x, t.y, o.x, o.y, e.x, e.y);
    }),
    (p5.prototype.collidePointLine = function (t, o, e, i, r, l, n) {
        var c = this.dist(t, o, e, i),
            p = this.dist(t, o, r, l),
            y = this.dist(e, i, r, l);
        return void 0 === n && (n = 0.1), c + p >= y - n && c + p <= y + n;
    }),
    (p5.prototype.collidePointLineVector = function (t, o, e, i) {
        return p5.prototype.collidePointLine(t.x, t.y, o.x, o.y, e.x, e.y, i);
    }),
    (p5.prototype.collideLineCircle = function (t, o, e, i, r, l, n) {
        var c = this.collidePointCircle(t, o, r, l, n),
            p = this.collidePointCircle(e, i, r, l, n);
        if (c || p) return !0;
        var y = t - e,
            d = o - i,
            u = this.sqrt(y * y + d * d),
            s = ((r - t) * (e - t) + (l - o) * (i - o)) / this.pow(u, 2),
            x = t + s * (e - t),
            f = o + s * (i - o);
        return !!this.collidePointLine(x, f, t, o, e, i) && (this._collideDebug && this.ellipse(x, f, 10, 10), (y = x - r), (d = f - l), this.sqrt(y * y + d * d) <= n / 2);
    }),
    (p5.prototype.collideLineCircleVector = function (t, o, e, i) {
        return p5.prototype.collideLineCircle(t.x, t.y, o.x, o.y, e.x, e.y, i);
    }),
    (p5.prototype.collideLineLine = function (t, o, e, i, r, l, n, c, p) {
        var y = ((n - r) * (o - l) - (c - l) * (t - r)) / ((c - l) * (e - t) - (n - r) * (i - o)),
            d = ((e - t) * (o - l) - (i - o) * (t - r)) / ((c - l) * (e - t) - (n - r) * (i - o));
        if (y >= 0 && y <= 1 && d >= 0 && d <= 1) {
            if (this._collideDebug || p)
                var u = t + y * (e - t),
                    s = o + y * (i - o);
            return this._collideDebug && this.ellipse(u, s, 10, 10), !p || { x: u, y: s };
        }
        return !!p && { x: !1, y: !1 };
    }),
    (p5.prototype.collideLineLineVector = function (t, o, e, i, r) {
        return p5.prototype.collideLineLine(t.x, t.y, o.x, o.y, e.x, e.y, i.x, i.y, r);
    }),
    (p5.prototype.collideLineRect = function (t, o, e, i, r, l, n, c, p) {
        var y, d, u, s, x;
        return (
            p
                ? (x = {
                      left: (y = this.collideLineLine(t, o, e, i, r, l, r, l + c, !0)),
                      right: (d = this.collideLineLine(t, o, e, i, r + n, l, r + n, l + c, !0)),
                      top: (u = this.collideLineLine(t, o, e, i, r, l, r + n, l, !0)),
                      bottom: (s = this.collideLineLine(t, o, e, i, r, l + c, r + n, l + c, !0)),
                  })
                : ((y = this.collideLineLine(t, o, e, i, r, l, r, l + c)),
                  (d = this.collideLineLine(t, o, e, i, r + n, l, r + n, l + c)),
                  (u = this.collideLineLine(t, o, e, i, r, l, r + n, l)),
                  (s = this.collideLineLine(t, o, e, i, r, l + c, r + n, l + c))),
            !!(y || d || u || s) && (!p || x)
        );
    }),
    (p5.prototype.collideLineRectVector = function (t, o, e, i, r) {
        return p5.prototype.collideLineRect(t.x, t.y, o.x, o.y, e.x, e.y, i.x, i.y, r);
    }),
    (p5.prototype.collidePointPoly = function (t, o, e) {
        for (var i = !1, r = 0, l = 0; l < e.length; l++) {
            (r = l + 1) === e.length && (r = 0);
            var n = e[l],
                c = e[r];
            ((n.y >= o && c.y < o) || (n.y < o && c.y >= o)) && t < ((c.x - n.x) * (o - n.y)) / (c.y - n.y) + n.x && (i = !i);
        }
        return i;
    }),
    (p5.prototype.collidePointPolyVector = function (t, o) {
        return p5.prototype.collidePointPoly(t.x, t.y, o);
    }),
    (p5.prototype.collideCirclePoly = function (t, o, e, i, r) {
        void 0 === r && (r = !1);
        for (var l = 0, n = 0; n < i.length; n++) {
            (l = n + 1) === i.length && (l = 0);
            var c = i[n],
                p = i[l];
            if (this.collideLineCircle(c.x, c.y, p.x, p.y, t, o, e)) return !0;
        }
        if (!0 === r && this.collidePointPoly(t, o, i)) return !0;
        return !1;
    }),
    (p5.prototype.collideCirclePolyVector = function (t, o, e, i) {
        return p5.prototype.collideCirclePoly(t.x, t.y, o, e, i);
    }),
    (p5.prototype.collideRectPoly = function (t, o, e, i, r, l) {
        null == l && (l = !1);
        for (var n = 0, c = 0; c < r.length; c++) {
            (n = c + 1) === r.length && (n = 0);
            var p = r[c],
                y = r[n];
            if (this.collideLineRect(p.x, p.y, y.x, y.y, t, o, e, i)) return !0;
            if (!0 === l) if (this.collidePointPoly(t, o, r)) return !0;
        }
        return !1;
    }),
    (p5.prototype.collideRectPolyVector = function (t, o, e, i) {
        return p5.prototype.collideRectPoly(t.x, t.y, o.x, o.y, e, i);
    }),
    (p5.prototype.collideLinePoly = function (t, o, e, i, r) {
        for (var l = 0, n = 0; n < r.length; n++) {
            (l = n + 1) === r.length && (l = 0);
            var c = r[n].x,
                p = r[n].y,
                y = r[l].x,
                d = r[l].y;
            if (this.collideLineLine(t, o, e, i, c, p, y, d)) return !0;
        }
        return !1;
    }),
    (p5.prototype.collideLinePolyVector = function (t, o, e) {
        return p5.prototype.collideLinePoly(t.x, t.y, o.x, o.y, e);
    }),
    (p5.prototype.collidePolyPoly = function (t, o, e) {
        void 0 === e && (e = !1);
        for (var i = 0, r = 0; r < t.length; r++) {
            (i = r + 1) === t.length && (i = 0);
            var l = t[r],
                n = t[i],
                c = this.collideLinePoly(l.x, l.y, n.x, n.y, o);
            if (c) return !0;
            if (!0 === e) {
                if ((c = this.collidePointPoly(o[0].x, o[0].y, t))) return !0;
                if ((c = this.collidePointPoly(t[0].x, t[0].y, o))) return !0;
            }
        }
        return !1;
    }),
    (p5.prototype.collidePolyPolyVector = function (t, o, e) {
        return p5.prototype.collidePolyPoly(t, o, e);
    }),
    (p5.prototype.collidePointTriangle = function (t, o, e, i, r, l, n, c) {
        var p = this.abs((r - e) * (c - i) - (n - e) * (l - i));
        return this.abs((e - t) * (l - o) - (r - t) * (i - o)) + this.abs((r - t) * (c - o) - (n - t) * (l - o)) + this.abs((n - t) * (i - o) - (e - t) * (c - o)) === p;
    }),
    (p5.prototype.collidePointTriangleVector = function (t, o, e, i) {
        return p5.prototype.collidePointTriangle(t.x, t.y, o.x, o.y, e.x, e.y, i.x, i.y);
    }),
    (p5.prototype.collidePointPoint = function (t, o, e, i, r) {
        return void 0 === r && (r = 0), this.dist(t, o, e, i) <= r;
    }),
    (p5.prototype.collidePointPointVector = function (t, o, e) {
        return p5.prototype.collidePointPoint(t.x, t.y, o.x, o.y, e);
    }),
    (p5.prototype.collidePointArc = function (t, o, e, i, r, l, n, c) {
        void 0 === c && (c = 0);
        var p = this.createVector(t, o),
            y = this.createVector(e, i),
            d = this.createVector(r, 0).rotate(l),
            u = p.copy().sub(y);
        if (p.dist(y) <= r + c) {
            var s = d.dot(u),
                x = d.angleBetween(u);
            if (s > 0 && x <= n / 2 && x >= -n / 2) return !0;
        }
        return !1;
    }),
    (p5.prototype.collidePointArcVector = function (t, o, e, i, r, l) {
        return p5.prototype.collidePointArc(t.x, t.y, o.x, o.y, e, i, r, l);
    });
