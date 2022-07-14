(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [768], {
        8768: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return O
                }
            });
            var s = n(5893),
                i = n(9008),
                r = n(8804),
                o = n(8031),
                a = n(7294),
                c = n(1664),
                l = n(5675),
                d = n(1120),
                h = n.n(d);

            function u() {
                return (0, s.jsx)(r.Z, {
                    className: "".concat(h().logo),
                    children: (0, s.jsx)(c.default, {
                        href: "/",
                        children: (0, s.jsx)("a", {
                            children: (0, s.jsx)(l.default, {
                                priority: !0,
                                src: "/images/logo.png",
                                width: 220,
                                height: 55,
                                alt: "logo"
                            })
                        })
                    })
                })
            }
            var f = n(1436),
                m = n(7625),
                x = n(2820),
                g = n(1592),
                p = n(8207);

            function j(e) {
                var t = e.fromApp,
                    n = (0, a.useState)(""),
                    i = n[0],
                    o = n[1],
                    l = (0, a.useState)(!1),
                    d = l[0],
                    u = l[1],
                    j = (0, a.useState)(""),
                    _ = j[0],
                    w = j[1],
                    v = function() {
                        return u(!1)
                    },
                    y = (0, x.Ds)((function(e) {
                        var t = e.target.value;
                        w(t), t ? function(e) {
                            (0, g.$)(p.oW, "POST", {
                                search_text: e
                            }).then((function(e) {
                                e.data && !e.data.status ? o("") : o(e.data.data)
                            })).catch((function(e) {
                                console.error(e)
                            }))
                        }(t) : o("")
                    })),
                    N = function(e) {
                        var t = e.target.className;
                        t && ("string" !== typeof t || t.indexOf("search") < 0) && v()
                    };
                return (0, a.useEffect)((function() {
                    return document.addEventListener("click", N),
                        function() {
                            document.removeEventListener("click", N)
                        }
                }), []), (0, s.jsx)(r.Z, {
                    lg: 2,
                    xs: 12,
                    className: "".concat(h().search_section),
                    children: (0, s.jsxs)("div", {
                        className: h().searchCont,
                        children: [(0, s.jsxs)("form", {
                            action: "/articles/",
                            children: [(0, s.jsx)(r.Z, {
                                lg: 12,
                                className: "no-padding",
                                children: (0, s.jsx)("input", {
                                    className: "".concat(h().search_input, " form-control"),
                                    type: "text",
                                    name: "search",
                                    autoComplete: "off",
                                    placeholder: "Search your queries",
                                    onChange: y,
                                    onFocus: function() {
                                        return u(!0)
                                    }
                                })
                            }), (0, s.jsx)("div", {
                                className: h().search_button_cont,
                                children: (0, s.jsx)(m.G, {
                                    icon: f.wn1,
                                    color: "#B3B3B3",
                                    width: 16
                                })
                            })]
                        }), d && _ && i ? (0, s.jsx)("div", {
                            className: h().searchSuggestions,
                            children: i.length ? i.map((function(e) {
                                return (0, s.jsx)("div", {
                                    className: h().suggestions,
                                    children: (0, s.jsx)(c.default, {
                                        href: "/articles/article-details/" + e.slug + (t ? "?audience=app" : ""),
                                        children: (0, s.jsx)("a", {
                                            onClick: v,
                                            children: e.title
                                        })
                                    })
                                }, e.title)
                            })) : (0, s.jsx)("div", {
                                className: h().suggestions,
                                children: "No Results Found"
                            })
                        }) : null]
                    })
                })
            }
            var _ = n(8088),
                w = n(9025);

            function v(e) {
                var t = e.showProfileNav,
                    n = e.from_sideNav,
                    i = void 0 !== n && n,
                    r = e.closeSideNav,
                    o = void 0 === r ? function() {} : r,
                    c = (0, a.useContext)(_.Il),
                    l = c[0],
                    d = c[1],
                    u = function(e) {
                        o(), d((0, w.K4)({
                            name: e
                        }))
                    };
                return (0, a.useEffect)((function() {
                    window.location.pathname.indexOf("/users/profile") > -1 || i || (0, g.$)(p.lj, "POST").then((function(e) {
                        d((0, w.Pl)({
                            isLoggedIn: e.data.isLoggedIn,
                            uname: e.data.username,
                            fb_login_url: e.data.fb_login_url
                        }))
                    })).catch((function(e) {
                        console.error(e)
                    }))
                }), []), (0, s.jsx)(s.Fragment, {
                    children: l.isLoggedIn ? (0, s.jsxs)("span", {
                        className: h().sign_in,
                        style: {
                            fontSize: "1em"
                        },
                        onClick: function() {
                            o(), t()
                        },
                        children: [(0, s.jsx)(m.G, {
                            icon: f.ILF,
                            width: 14,
                            height: 16,
                            size: "1x"
                        }), "\xa0 Hi ", l.userInfo && l.userInfo.uname || "Anonymous"]
                    }) : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("span", {
                            className: h().sign_in,
                            onClick: function() {
                                return u("login")
                            },
                            children: "Login"
                        }), "\xa0/\xa0", (0, s.jsx)("span", {
                            className: h().sign_in,
                            onClick: function() {
                                return u("signup")
                            },
                            children: "Signup"
                        })]
                    })
                })
            }
            var y = n(9130),
                N = n.n(y);

            function k(e) {
                var t = e.show,
                    n = e.closeSideNav,
                    i = e.categories,
                    o = e.showProfileNav;
                return (0, s.jsx)("div", {
                    className: "".concat(N().helpful_section, " ").concat(N().sidenav),
                    style: {
                        width: "".concat(t ? "260px" : "0px")
                    },
                    children: (0, s.jsxs)(r.Z, {
                        lg: 12,
                        children: [(0, s.jsx)("div", {
                            className: N().closebtn,
                            onClick: n,
                            children: (0, s.jsx)(m.G, {
                                icon: f.NBC,
                                color: "white",
                                width: 16
                            })
                        }), (0, s.jsxs)("ul", {
                            className: N().helpful_lists,
                            children: [(0, s.jsx)("li", {
                                children: (0, s.jsx)("a", {
                                    href: "#",
                                    onClick: function(e) {
                                        return e.preventDefault()
                                    },
                                    style: {
                                        width: "100%"
                                    },
                                    children: (0, s.jsx)(v, {
                                        showProfileNav: o,
                                        closeSideNav: n,
                                        from_sideNav: !0
                                    })
                                })
                            }, "accounts"), (0, s.jsx)("li", {
                                children: (0, s.jsx)(c.default, {
                                    href: "/programs",
                                    children: (0, s.jsxs)("a", {
                                        children: [(0, s.jsx)(m.G, {
                                            icon: f.A8,
                                            color: "white",
                                            width: 16
                                        }), "\xa0Programs"]
                                    })
                                })
                            }, "programs"), (0, s.jsx)("li", {
                                children: (0, s.jsx)(c.default, {
                                    href: "/fertility-store",
                                    children: (0, s.jsxs)("a", {
                                        children: [(0, s.jsx)(m.G, {
                                            icon: f.sq$,
                                            color: "white",
                                            width: 18,
                                            height: 16
                                        }), "\xa0Fertility Store"]
                                    })
                                })
                            }, "fertility-store"), (0, s.jsx)("li", {
                                children: (0, s.jsx)(c.default, {
                                    href: "/map-my-fertility",
                                    children: (0, s.jsxs)("a", {
                                        children: [(0, s.jsx)(m.G, {
                                            icon: f.jOV,
                                            color: "white",
                                            width: 14,
                                            height: 16
                                        }), "\xa0Map My Fertility"]
                                    })
                                })
                            }, "map-my-fertility"), (0, s.jsx)("li", {
                                children: (0, s.jsx)(c.default, {
                                    href: "/fertilityebooks",
                                    children: (0, s.jsxs)("a", {
                                        children: [(0, s.jsx)(m.G, {
                                            icon: f.FL8,
                                            color: "white",
                                            width: 14,
                                            height: 16
                                        }), "\xa0Fertility E-books"]
                                    })
                                })
                            }, "fertilityebooks"), i.map((function(e) {
                                return (0, s.jsxs)("li", {
                                    children: [e.name, (0, s.jsx)("ul", {
                                        className: N().helpful_lists,
                                        children: e.sub_categories.map((function(e) {
                                            return (0, s.jsx)("li", {
                                                children: (0, s.jsx)(c.default, {
                                                    href: "/category/" + e.slug,
                                                    children: (0, s.jsxs)("a", {
                                                        children: [(0, s.jsx)(m.G, {
                                                            icon: f.G8n,
                                                            color: "white",
                                                            width: 14,
                                                            height: 16
                                                        }), "\xa0", e.name]
                                                    })
                                                })
                                            }, e.name)
                                        }))
                                    })]
                                }, e.name)
                            })), (0, s.jsxs)("li", {
                                children: [(0, s.jsx)(c.default, {
                                    href: "/about-us",
                                    children: (0, s.jsxs)("a", {
                                        children: [(0, s.jsx)(m.G, {
                                            icon: f.C4q,
                                            color: "white",
                                            width: 14,
                                            height: 16
                                        }), "\xa0About Us"]
                                    })
                                }), (0, s.jsxs)("ul", {
                                    className: N().helpful_lists,
                                    children: [(0, s.jsx)("li", {
                                        children: (0, s.jsx)(c.default, {
                                            href: "/category/media",
                                            children: (0, s.jsxs)("a", {
                                                children: [(0, s.jsx)(m.G, {
                                                    icon: f.C4q,
                                                    color: "white",
                                                    width: 14,
                                                    height: 16
                                                }), "\xa0Media"]
                                            })
                                        })
                                    }), (0, s.jsx)("li", {
                                        children: (0, s.jsx)(c.default, {
                                            href: "/contact-us",
                                            children: (0, s.jsxs)("a", {
                                                children: [(0, s.jsx)(m.G, {
                                                    icon: f.j1w,
                                                    color: "white",
                                                    width: 14,
                                                    height: 16
                                                }), "\xa0Contact Us"]
                                            })
                                        })
                                    }), (0, s.jsx)("li", {
                                        children: (0, s.jsx)(c.default, {
                                            href: "/medical-disclaimer",
                                            children: (0, s.jsxs)("a", {
                                                children: [(0, s.jsx)(m.G, {
                                                    icon: f.C4q,
                                                    color: "white",
                                                    width: 14,
                                                    height: 16
                                                }), "\xa0Medical Disclaimer"]
                                            })
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            }

            function b(e) {
                var t = e.closeMiniSideNav,
                    n = e.openSideNav,
                    i = e.categories;
                return (0, s.jsxs)("div", {
                    className: "".concat(N().desktopNav, " padding_bottom"),
                    children: [(0, s.jsx)("h3", {
                        className: N().closeCont,
                        children: (0, s.jsx)(m.G, {
                            icon: f.NBC,
                            color: "white",
                            width: 16,
                            onClick: t
                        })
                    }), (0, s.jsxs)("ul", {
                        className: N().helpful_lists,
                        children: [(0, s.jsx)("li", {
                            children: (0, s.jsx)(c.default, {
                                href: "/programs",
                                children: (0, s.jsxs)("a", {
                                    children: [(0, s.jsx)(m.G, {
                                        icon: f.A8,
                                        color: "white",
                                        width: 16
                                    }), "\xa0Programs"]
                                })
                            })
                        }, "programs"), (0, s.jsx)("li", {
                            children: (0, s.jsx)(c.default, {
                                href: "/fertility-store",
                                children: (0, s.jsxs)("a", {
                                    children: [(0, s.jsx)(m.G, {
                                        icon: f.sq$,
                                        color: "white",
                                        width: 18,
                                        height: 16
                                    }), "\xa0Fertility Store"]
                                })
                            })
                        }, "store"), (0, s.jsx)("li", {
                            children: (0, s.jsx)(c.default, {
                                href: "/map-my-fertility",
                                children: (0, s.jsxs)("a", {
                                    children: [(0, s.jsx)(m.G, {
                                        icon: f.jOV,
                                        color: "white",
                                        width: 14,
                                        height: 16
                                    }), "\xa0Map My Fertility"]
                                })
                            })
                        }, "map-my-fertility"), (0, s.jsx)("li", {
                            children: (0, s.jsx)(c.default, {
                                href: "/fertilityebooks",
                                children: (0, s.jsxs)("a", {
                                    children: [(0, s.jsx)(m.G, {
                                        icon: f.FL8,
                                        color: "white",
                                        width: 14,
                                        height: 16
                                    }), "\xa0Fertility E-books"]
                                })
                            })
                        }, "ebooks"), i.map((function(e) {
                            return e.sub_categories.map((function(e, t) {
                                return 0 == t ? (0, s.jsx)("li", {
                                    children: (0, s.jsx)(c.default, {
                                        href: "/category/" + e.slug,
                                        children: (0, s.jsxs)("a", {
                                            children: [(0, s.jsx)(m.G, {
                                                icon: f.G8n,
                                                color: "white",
                                                width: 14,
                                                height: 16
                                            }), "\xa0", e.name]
                                        })
                                    })
                                }, e.name) : ""
                            }))
                        }))]
                    }), (0, s.jsx)("p", {
                        onClick: n,
                        className: N().viewMore,
                        children: "View More"
                    })]
                })
            }

            function C(e) {
                var t = e.show,
                    n = e.close,
                    i = (0, a.useContext)(_.Il),
                    r = (i[0], i[1]);
                return (0, s.jsxs)("div", {
                    className: "".concat(N().profile_nav, " ").concat(N().sidenav),
                    style: {
                        width: "".concat(t ? "260px" : "0px")
                    },
                    children: [(0, s.jsx)("div", {
                        className: N().closebtn,
                        onClick: n,
                        children: (0, s.jsx)(m.G, {
                            icon: f.NBC,
                            color: "white",
                            width: 16
                        })
                    }), (0, s.jsx)(c.default, {
                        href: "/users/profile",
                        children: (0, s.jsx)("a", {
                            children: "Profile"
                        })
                    }), (0, s.jsx)("a", {
                        href: "#",
                        onClick: function(e) {
                            e.preventDefault(), (0, g.$)(p.yi, "POST").then((function(e) {
                                r((0, w.kS)()), window.location.href = "/"
                            })).catch((function(e) {
                                console.error(e)
                            }))
                        },
                        children: "Logout"
                    })]
                })
            }

            function S(e) {
                var t = e.pageName,
                    n = e.fromApp,
                    i = (0, a.useState)(!1),
                    l = i[0],
                    d = i[1],
                    f = (0, a.useState)(!1),
                    m = f[0],
                    x = f[1],
                    _ = (0, a.useState)(!1),
                    w = _[0],
                    y = _[1],
                    N = (0, a.useState)(!1),
                    S = N[0],
                    L = N[1],
                    E = (0, a.useState)([]),
                    M = E[0],
                    A = E[1],
                    P = function() {
                        d(!1)
                    },
                    F = function() {
                        d(!0)
                    },
                    G = function() {
                        var e = document.documentElement.scrollTop || document.body.scrollTop;
                        y(e >= 180 && !n)
                    },
                    T = function() {
                        return L(!1)
                    },
                    Z = function() {
                        return L(!0)
                    };
                return (0, a.useEffect)((function() {
                    return (0, g.$)(p.qM, "POST").then((function(e) {
                            A(e.data.data)
                        })).catch((function(e) {
                            console.error(e)
                        })), window.addEventListener("scroll", G),
                        function() {
                            window.removeEventListener("scroll", G)
                        }
                }), []), (0, s.jsxs)("div", {
                    children: [(0, s.jsx)("header", {
                        children: n ? (0, s.jsx)("div", {
                            style: {
                                margin: "20px 0"
                            },
                            children: (0, s.jsx)(j, {
                                fromApp: n
                            })
                        }) : (0, s.jsxs)("div", {
                            className: h().headerCont,
                            children: [(0, s.jsx)(r.Z, {
                                lg: 3,
                                xs: 3,
                                className: h().logoCont,
                                children: (0, s.jsx)(u, {})
                            }), (0, s.jsx)(j, {}), (0, s.jsx)(r.Z, {
                                lg: 7,
                                xs: 12,
                                className: h().top_links,
                                children: (0, s.jsxs)("div", {
                                    className: h().scrollLinks,
                                    children: [(0, s.jsx)(c.default, {
                                        href: "/programs",
                                        children: (0, s.jsx)("a", {
                                            children: "Programs"
                                        })
                                    }), (0, s.jsx)(c.default, {
                                        href: "/articles",
                                        children: (0, s.jsx)("a", {
                                            children: "Blog"
                                        })
                                    }), (0, s.jsx)(c.default, {
                                        href: "/programs#pricing",
                                        children: (0, s.jsx)("a", {
                                            children: "Pricing"
                                        })
                                    }), (0, s.jsx)(c.default, {
                                        href: "/faqs",
                                        children: (0, s.jsx)("a", {
                                            children: "FAQs"
                                        })
                                    }), (0, s.jsx)("a", {
                                        href: "#",
                                        className: "hidden-xs",
                                        onClick: function(e) {
                                            return e.preventDefault()
                                        },
                                        style: {
                                            width: "100%"
                                        },
                                        children: (0, s.jsx)(v, {
                                            showProfileNav: Z
                                        })
                                    })]
                                })
                            }), (0, s.jsx)(C, {
                                show: S,
                                close: T
                            }), (0, s.jsx)(r.Z, {
                                lg: 12,
                                className: "".concat(h().menu_section, " no-padding"),
                                children: (0, s.jsx)(r.Z, {
                                    xs: 2,
                                    className: "".concat(h().ham_icon, " hidden-lg hidden-md"),
                                    children: (0, s.jsx)("span", {
                                        className: h().ham_circle,
                                        onClick: F,
                                        children: "\u2630"
                                    })
                                })
                            })]
                        })
                    }), (0, s.jsx)(k, {
                        show: l,
                        closeSideNav: P,
                        categories: M,
                        showProfileNav: Z
                    }), (0, s.jsx)("div", {
                        className: "black_overlay ".concat(l || S ? "active" : ""),
                        onClick: function() {
                            P(), T()
                        }
                    }), ["home", "blog"].includes(t) ? (0, s.jsx)("div", {
                        className: "container-fluid",
                        children: (0, s.jsx)(o.Z, {
                            children: (0, s.jsxs)(r.Z, {
                                lg: 12,
                                children: [(0, s.jsx)("div", {
                                    className: "".concat(h().desktopNav, " ").concat(h().affix, " hidden-xs ").concat(m ? "" : "hide"),
                                    children: (0, s.jsx)("span", {
                                        className: h().ham_circle,
                                        onClick: F,
                                        children: "\u2630"
                                    })
                                }), (0, s.jsx)(r.Z, {
                                    lg: 12,
                                    className: "".concat(h().affix, " hidden-xs ").concat(m ? "hide" : "", " ").concat(w ? "" : "hide", " "),
                                    children: (0, s.jsx)(b, {
                                        show: l,
                                        closeMiniSideNav: function() {
                                            x(!0)
                                        },
                                        openSideNav: F,
                                        categories: M
                                    })
                                })]
                            })
                        })
                    }) : ""]
                })
            }
            var L = n(4121),
                E = n(3713),
                M = n.n(E),
                A = {
                    external: !0,
                    links: [{
                        Instagram: "https://www.instagram.com/fertility_dost/"
                    }, {
                        Twitter: "https://twitter.com/fertility_dost/"
                    }, {
                        Facebook: "https://www.facebook.com/fertilitydost/"
                    }, {
                        Youtube: "https://www.youtube.com/channel/UCSqBNgEhC1zvSqBKYn6ipUA/featured?view_as=subscriber"
                    }, {
                        Whatsapp: "https://api.whatsapp.com/send?phone=+919971327422&text=Hi%20FertilityDost,"
                    }, {
                        LinkedIn: "https://www.linkedin.com/in/dostfertility/"
                    }]
                },
                P = {
                    external: !1,
                    links: [{
                        Read: "/articles"
                    }, {
                        Resources: "/fertilityebooks"
                    }, {
                        Programs: "/programs"
                    }]
                },
                F = {
                    external: !1,
                    links: [{
                        Infertility: "/category/infertility"
                    }, {
                        IVF: "/category/ivf"
                    }, {
                        "Success Stories": "/category/success-stories"
                    }, {
                        "Male Infertility": "/category/male-infertility"
                    }]
                },
                G = {
                    external: !1,
                    links: [{
                        PCOS: "/category/pcos"
                    }, {
                        Pregnancy: "/category/pregnancy-"
                    }, {
                        "IVF Clinics": "/category/ivf-clinics"
                    }, {
                        Ayurveda: "/category/ayurveda"
                    }, {
                        Nutrition: "/category/nutrition"
                    }, {
                        Acupuncture: "/category/acupuncture"
                    }, {
                        "Emotional Support": "/category/emotional-support"
                    }, {
                        Media: "/category/media"
                    }]
                },
                T = {
                    external: !1,
                    links: [{
                        "About Us": "/about-us"
                    }, {
                        "Contact Us": "/contact-us"
                    }, {
                        Privacy: "/medical-disclaimer"
                    }, {
                        "support@fertilitydost.com": "mailto:support@fertilitydost.com",
                        icon: "faEnvelope",
                        external: !0
                    }]
                };

            function Z() {
                var e = function(e) {
                    return (0, s.jsx)("ul", {
                        className: M().ul,
                        children: e.links.map((function(t, n) {
                            var i = Object.entries(t),
                                r = (0, L.Z)(i[0], 2),
                                o = r[0],
                                a = r[1],
                                l = i.length > 1 ? i[1] : [],
                                d = (0, L.Z)(l, 2),
                                h = d[0];
                            d[1];
                            return (0, s.jsx)("li", {
                                className: M().list,
                                children: t.external || e.external ? (0, s.jsxs)("div", {
                                    children: [h ? (0, s.jsx)(m.G, {
                                        icon: f.FU$,
                                        color: "white",
                                        width: "15px",
                                        children: " \xa0 "
                                    }) : "", (0, s.jsx)("a", {
                                        href: a || "/",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: o
                                    })]
                                }) : (0, s.jsx)(c.default, {
                                    href: a || "/",
                                    children: (0, s.jsx)("a", {
                                        children: o
                                    })
                                })
                            }, o)
                        }))
                    })
                };
                return (0, s.jsx)("div", {
                    className: "container footer_links",
                    children: (0, s.jsxs)(r.Z, {
                        lg: 12,
                        className: "no-padding",
                        children: [(0, s.jsx)(r.Z, {
                            lg: 2,
                            className: "pr-0",
                            children: e(A)
                        }), (0, s.jsx)(r.Z, {
                            lg: 2,
                            xs: 6,
                            className: "mp-15 no-padding",
                            children: e(P)
                        }), (0, s.jsx)(r.Z, {
                            lg: 2,
                            xs: 6,
                            className: "no-padding",
                            children: e(F)
                        }), (0, s.jsx)(r.Z, {
                            lg: 2,
                            xs: 6,
                            className: "mp-15 no-padding",
                            children: e(G)
                        }), (0, s.jsx)(r.Z, {
                            lg: 4,
                            xs: 6,
                            className: "no-padding",
                            children: e(T)
                        })]
                    })
                })
            }

            function q() {
                return (0, s.jsx)("div", {
                    className: "".concat(M().copyright_cont, " container-fluid"),
                    children: (0, s.jsx)("div", {
                        className: "row",
                        children: (0, s.jsx)(r.Z, {
                            md: 12,
                            children: (0, s.jsx)("div", {
                                className: "text-center",
                                children: (0, s.jsxs)("p", {
                                    children: [" ", (0, s.jsxs)("span", {
                                        children: ["Copyright \xa9 \xa0", (0, s.jsx)("span", {
                                            children: "FertilityDost"
                                        }), " 2021. All right reserved."]
                                    })]
                                })
                            })
                        })
                    })
                })
            }

            function I(e) {
                var t = e.fromApp;
                return (0, s.jsxs)("div", {
                    children: [t ? "" : (0, s.jsx)("footer", {
                        className: M().footerCont,
                        children: (0, s.jsx)(Z, {})
                    }), (0, s.jsx)(q, {})]
                })
            }

            function O(e) {
                var t = e.pageName,
                    n = void 0 === t ? "" : t,
                    r = e.fromApp,
                    o = e.children,
                    c = function() {
                        if (void 0 !== document)
                            for (var e = document.querySelectorAll(".animation-element"), t = 0; t < e.length; t++)(0, x.PZ)(e[t]) ? e[t].classList.add("in-view") : e[t].classList.remove("in-view")
                    };
                (0, a.useEffect)((function() {
                    if (void 0 !== window) return window.addEventListener ? (addEventListener("DOMContentLoaded", c, !1), addEventListener("load", c, !1), addEventListener("scroll", c, !1), addEventListener("resize", c, !1)) : window.attachEvent && (attachEvent("onDOMContentLoaded", c), attachEvent("onload", c), attachEvent("onscroll", c), attachEvent("onresize", c)), (0, x.Wf)(),
                        function() {
                            (0, x.zJ)()
                        }
                }), []);
                var l = parseInt((new Date).getTime() / 1e3);
                return (0, s.jsxs)("div", {
                    children: [(0, s.jsxs)(i.default, {
                        children: [(0, s.jsx)("link", {
                            rel: "preload",
                            href: "/fonts/Heebo-Regular.ttf",
                            as: "font",
                            crossOrigin: ""
                        }), (0, s.jsx)("link", {
                            rel: "preload",
                            href: "/fonts/BebasNeue-Regular.ttf",
                            as: "font",
                            crossOrigin: ""
                        }), (0, s.jsx)("link", {
                            rel: "preload",
                            href: "/fonts/Heebo-Bold.ttf",
                            as: "font",
                            crossOrigin: ""
                        }), (0, s.jsx)("link", {
                            href: "https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap",
                            rel: "stylesheet"
                        }), (0, s.jsx)("link", {
                            href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap",
                            rel: "stylesheet"
                        }), (0, s.jsx)("link", {
                            rel: "stylesheet",
                            href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
                            integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
                            crossOrigin: "anonymous"
                        }), (0, s.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1.0"
                        }), (0, s.jsx)("meta", {
                            property: "og:updated_time",
                            content: l
                        }), (0, s.jsx)("meta", {
                            charSet: "utf-8"
                        }), (0, s.jsx)("script", {
                            async: !0,
                            src: "https://www.googletagmanager.com/gtag/js?id=AW-947728238"
                        }), (0, s.jsx)("script", {
                            dangerouslySetInnerHTML: {
                                __html: "\n                    window.dataLayer = window.dataLayer || [];\n                    function gtag(){dataLayer.push(arguments);}\n                    gtag('js', new Date());\n                    gtag('config', 'AW-947728238');"
                            }
                        }), (0, s.jsx)("script", {
                            async: !0,
                            src: "https://www.googletagmanager.com/gtag/js?id=UA-31014765-4"
                        }), (0, s.jsx)("script", {
                            dangerouslySetInnerHTML: {
                                __html: "window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments);}\n                    gtag('js', new Date());\n                    gtag('config', 'UA-31014765-4');"
                            }
                        }), (0, s.jsx)("script", {
                            dangerouslySetInnerHTML: {
                                __html: "\n                    gtag('event', 'conversion', {'send_to': 'AW-947728238/AF5UCNOWiOsBEO7e9MMD'});"
                            }
                        }), (0, s.jsx)("script", {
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {
                                __html: '\n                    {\n                    "@context": "https://schema.org",\n\n                    "@type": "Organization",\n\n                    "name": "FertilityDost",\n\n                    "alternateName": "FertilityDost",\n\n                    "url": "https://www.fertilitydost.com/",\n\n                    "logo": "https://www.fertilitydost.com/images/default_logo.png",\n\n                    "sameAs": [\n\n                        "https://www.facebook.com/fertilitydost/",\n\n                        "https://www.twitter.com/fertility_dost/",\n\n                        "https://www.instagram.com/fertility_dost/",\n\n                        "https://www.youtube.com/channel/UCSqBNgEhC1zvSqBKYn6ipUA",\n\n                        "https://www.linkedin.com/in/dostfertility/",\n\n                        "https://www.fertilitydost.com/"\n\n                    ]\n                    }'
                            }
                        }), (0, s.jsx)("script", {
                            dangerouslySetInnerHTML: {
                                __html: "\n                    !function(f,b,e,v,n,t,s)\n                {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?\n                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)};\n                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n                n.queue=[];t=b.createElement(e);t.async=!0;\n                t.src=v;s=b.getElementsByTagName(e)[0];\n                    s.parentNode.insertBefore(t,s)}(window,document,'script',\n                'https://connect.facebook.net/en_US/fbevents.js');\n                fbq('init', '413611612776116');\n                fbq('track', 'PageView');"
                            }
                        }), (0, s.jsx)("noscript", {
                            children: (0, s.jsx)("img", {
                                height: "1",
                                width: "1",
                                src: "https://www.facebook.com/tr?id=413611612776116&ev=PageView&noscript=1"
                            })
                        }), (0, s.jsx)("script", {
                            dangerouslySetInnerHTML: {
                                __html: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n                    })(window,document,'script','dataLayer','GTM-5LT4PVM');"
                            }
                        }), (0, s.jsx)("noscript", {
                            children: (0, s.jsx)("iframe", {
                                src: "https://www.googletagmanager.com/ns.html?id=GTM-5LT4PVM",
                                height: "0",
                                width: "0",
                                style: {
                                    display: "none",
                                    visibility: "hidden"
                                }
                            })
                        })]
                    }), (0, s.jsx)("div", {
                        id: "fb-root"
                    }), (0, s.jsx)("div", {
                        id: "fb-customer-chat",
                        className: "fb-customerchat"
                    }), (0, s.jsx)(S, {
                        pageName: n,
                        fromApp: r
                    }), (0, s.jsx)("div", {
                        className: "clear",
                        children: o
                    }), (0, s.jsx)(I, {
                        fromApp: r
                    })]
                })
            }
        },
        3713: function(e) {
            e.exports = {
                copyright_cont: "footer_copyright_cont__ZA2K0",
                footerCont: "footer_footerCont__2kDk2",
                list: "footer_list__3N9si",
                ul: "footer_ul__3G2xX"
            }
        },
        1120: function(e) {
            e.exports = {
                cont: "header_cont__3adUq",
                logoCont: "header_logoCont__3tArz",
                logo: "header_logo__489xt",
                search_section: "header_search_section__3mTt7",
                searchCont: "header_searchCont__1c-NG",
                search_input: "header_search_input__1k6ck",
                search_button_cont: "header_search_button_cont__2MVc8",
                search_button: "header_search_button__yi27H",
                login_section: "header_login_section__1pQ5E",
                sign_in: "header_sign_in__sNv4j",
                menu_section: "header_menu_section__3tyTL",
                ham_icon: "header_ham_icon__32FtA",
                ham_circle: "header_ham_circle__x4ELY",
                desktopNav: "header_desktopNav__7J4fP",
                affix: "header_affix__1QNt7",
                top_links: "header_top_links__11sif",
                scrollLinks: "header_scrollLinks__1RCPN",
                searchSuggestions: "header_searchSuggestions__3QI6x",
                suggestions: "header_suggestions__2_5Fy"
            }
        },
        9130: function(e) {
            e.exports = {
                icon: "menu_icon__2qwMv",
                title: "menu_title__27sFg",
                menu_selected: "menu_menu_selected__2En-u",
                cont: "menu_cont__1v1bi",
                sidenav: "menu_sidenav__-6wxR",
                helpful_section: "menu_helpful_section__25txL",
                profile_nav: "menu_profile_nav__3mVZw",
                closebtn: "menu_closebtn__2N8OP",
                desktopNav: "menu_desktopNav__2C2Dk",
                helpful_lists: "menu_helpful_lists__27zv_",
                closeCont: "menu_closeCont__1wTen",
                viewMore: "menu_viewMore__4c9g1",
                detail: "menu_detail__1NMoX"
            }
        }
    }
]);