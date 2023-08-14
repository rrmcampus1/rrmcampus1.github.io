~function () {
    function a(a, b, c) { return function () { c.canScrollPrev() ? a.removeAttribute("disabled") : a.setAttribute("disabled", "disabled"); c.canScrollNext() ? b.removeAttribute("disabled") : b.setAttribute("disabled", "disabled") } } function e(a, b, c) {
        c = void 0 === c ? 0 : c; var e = d.findIndex(function (b) { return b.carouselId === a }); -1 !== e && b && !d[e].intervalId && (d[e].intervalId = setInterval(function () {
            if (!document.hidden) {
                var b = d.findIndex(function (b) { return b.carouselId === a }); -1 !== b && (1 !== d[b].embla.scrollProgress() ? d[b].embla.scrollNext() :
                    d[b].embla.scrollTo(0))
            }
        }, 1E3 * c))
    } function f(b, c) {
        return new Promise(function (e, h) {
            var f = b.querySelector(".embla"), g = b.getAttribute("id"), l = f.querySelector(".Profile-containner"); h = f.querySelector(".Previous__button--prev"); f = f.querySelector(".Next__button--next"); if (-1 === d.findIndex(function (a) { return a.carouselId === g })) {
                l = EmblaCarousel(l, c); var q = a(h, f, l); h.addEventListener("click", l.scrollPrev, !1); f.addEventListener("click", l.scrollNext, !1); l.on("select", q); l.on("init", q); d.push({
                    carouselId: g, embla: l,
                    intervalId: null
                }); e(l)
            }
        })
    } function g(a) { var b = {};[].forEach.call(a.attributes, function (a) { if (/^data-/.test(a.name)) { var c = a.name.substr(5).replace(/-(.)/g, function (a, b) { return b.toUpperCase() }); b[c] = m(a.value) } }); return b } function b(a) { var b = d.findIndex(function (b) { return b.carouselId === a }); -1 !== b && ("embla" in d[b] && d[b].embla.destroy(), clearInterval(d[b].intervalId), d.splice(b, 1)) } function m(a) { return "true" === a ? !0 : a } function c(a, b) { var c = {}, e; for (e in b) a[e] || (c[e] = !1); return c } var p = {
        align: "center",
        draggable: !1, skipSnaps: !0, loop: !1, autoPlay: !1, autoPlayInterval: 5
    }, d = [], n = !1, r, u = "function" == typeof jQuery; u && (r = jQuery); if (document.querySelector("html").classList.contains("is-builder") && u) r(document).on("add.cards", function (a) {
        if (!r(a.target).hasClass("rewiew") || n) return Promise.resolve(); var d = a.target.getAttribute("id"); b(d); var h = g(a.target.querySelector(".embla")), t = c(h, p), k = Object.assign(h, t); k.draggable = !1; return f(a.target, k).then(function (a) {
            a.reInit(k); e(d, k.autoPlay, k.autoPlayInterval);
            n = !0; setTimeout(function () { n = !1 }, 0)
        })
    }).on("delete.cards", function (a) { a = a.target.getAttribute("id"); b(a) }).on("changeParameter.cards", function (a, d, q) { if (r(a.target).hasClass("rewiew")) { 
        var h = a.target.getAttribute("id"), k = g(a.target.querySelector(".embla")), l = c(k, p); k = Object.assign(k, l); switch (d) { case "loop": p.loop = q ? !0 : !1; break; case "autoplay": p.autoPlay = q; break; case "interval": p.autoPlayInterval = +q }b(h); k.draggable = !1; f(a.target, k); e(h, k.autoPlay, k.autoPlayInterval) } }); else "undefined" === typeof window.initCarouseMultiplePlugin &&
        (window.initCarouseMultiplePlugin = !0, document.querySelectorAll(".rewiew").forEach(function (a) {var b = a.getAttribute("id"), d = g(a.querySelector(".embla")), h = c(d, p), k = Object.assign(d, h); f(a, Object.assign(d, h)); e(b, k.autoPlay, +k.autoPlayInterval) }))
}();
