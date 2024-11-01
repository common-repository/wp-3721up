function fnCom3721upUploadApi() {

    var i = "Com3721upUploadApi";
    if (typeof window[i] == "object") {
        return window[i]
    }
	
	//通过一个声明多个变量
    var f = window,
    r = document,
    n = r.documentElement,
    k = r.body,
    a = "http://3721up.com/",
    p = "com3721upDialog",
    e = "com3721upConfig",
    c = "com3721upPermisstion",
    m = "http://static.3721up.com/api/css/themes/default.css?t=201109014a",
    q = "http://upload.3721up.com/Receive/ApiReceiveData.aspx?api={apiId}&amp;c=upload&amp;d=good.gd&amp;up={uploadId}&amp;k={uploadKey}&amp;t={uploadToken}",
    o = {
        container: '<div id="' + p + '"><div class="' + p + '-body">{body}</div><div class="' + p + '-footer">{footer}</div><a class="' + p + '-close" href="javascript:void(0);" title="\u5173\u95ed">\u5173\u95ed</a></div>',
        body: '<div class="' + p + '-main">{main}</div><div class="' + p + '-info">{info}</div>',
        poweredByInfo: '<div class="poweredBy">Powered By <a href="' + a + '" title="\u70b9\u51fb\u8bbf\u95ee 3721up" target="_blank">' + a.substring(0, a.length - 1).replace("http://", "") + "</a></div>",
        uploadForm: '<form enctype="multipart/form-data"  target="_blank" action="{actionUrl}" method="post"><input type="file" /><input type="submit" /></form>',
        writeback: "\u6587\u4ef6\u540d\uff1a{fileName}{br}\u6587\u4ef6\u5927\u5c0f\uff1a{fileSize}{br}\u4e0b\u8f7d\u5730\u5740\uff1a{url}",
        receiveType: {
            text: "{url}",
            ubb: "[url={url}]{url}[/url]",
            html: '<a href="{url}" target="_blank">{url}</a>'
        }
    },
    d = {
        "default": '\u7981\u6b62\u4e0a\u4f20\u8272\u60c5\u3001\u4fb5\u6743\u3001\u8fdd\u6cd5\u6216\u65e0\u6cd5\u5ba1\u67e5\u5185\u5bb9\u7684\u6587\u4ef6\uff0c\u4e0a\u4f20\u65e2\u4ee3\u8868\u63a5\u53d7 <a href="http://3721up.com/agreements.htm" class="link" target="_blank"><u>\u4e0a\u4f20\u534f\u8bae</u></a> \u4e0a\u4f20\u6210\u529f\u540e\u53ef\u901a\u8fc7 <a href="http://3721up.com" class="link" target="_blank"><u>3721up.com</u></a> \u7ba1\u7406\u6587\u4ef6\u3002',
        IE6: '<div class="IE6">\u7cfb\u7edf\u68c0\u6d4b\u5230\u60a8\u6b63\u5728\u4f7f\u7528\u7684\u662f IE6 \u7248\u6d4f\u89c8\u5668\uff0c\u8be5\u6d4f\u89c8\u5668\u4f1a\u5f71\u54cd\u60a8\u5927\u6587\u4ef6\u7684\u4e0a\u4f20\uff0c\u5efa\u8bae\u60a8\u66f4\u6362\u5176\u5b83<span title="\u975e IE \u5185\u6838\u7684\u6d4f\u89c8\u5668\u5728\u5982 Opera\u3001Chrome\u3001FireFox\u3001Safari">\u975e IE \u5185\u6838\u6d4f\u89c8\u5668</span>\uff0c\u6216\u5347\u7ea7\u5230 <a href="http://www.microsoft.com/china/windows/internet-explorer/" class="link" title="\u4e0b\u8f7d IE8" target="_blank"><u>IE8</u></a> \u7248\u3002</div>'
    },
    b = {
        confirmUploadingClose: "\u5f53\u524d\u6709\u6587\u4ef6\u6b63\u5728\u4e0a\u4f20\uff0c\u60a8\u786e\u5b9a\u8981\u5173\u95ed\u5417\uff1f"
    },
    g = "#com3721upDialog {position: absolute;left:50px;	top:50px;z-index:999999;color:#333;font:12px/1.5 \u5b8b\u4f53;text-align:left;width:420px;	min-height:180px;	_height:180px;padding:20px 20px 10px;background:white;border:4px solid #CCC;}#com3721upDialog .com3721upDialog-close {display:block;position:absolute;top:5px;	right:5px;font-size:0;text-indent:-9999px;width:18px;	height:18px;background:url(http://static.3721up.com/api/img/btn-close.gif) no-repeat;}#com3721upDialog .com3721upDialog-body {min-height:175px;_height:175px;}#com3721upDialog .com3721upDialog-body a.link u {text-decoration:undeline;}#com3721upDialog .com3721upDialog-body div.IE6 {color:#999;margin-top:20px;}#com3721upDialog .com3721upDialog-main {padding-bottom:10px;border-bottom:1px dashed #ccc;margin:10px 0;}#com3721upDialog .com3721upDialog-footer .poweredBy {text-align:right;}#com3721upDialog .com3721upDialog-footer .poweredBy, #com3721upDialog .com3721upDialog-footer .poweredBy a {color:#999;}",
    h = function(s) {
        return r.getElementById(s)
    },
    l = function(w, t, v) {
        var x = [];
        if (w) {
            var y = w.getElementsByTagName(v ? v: "*");
            for (var u = 0,s = y.length; u < s; u++) {
                if (y[u].className.indexOf(t) > -1) {
                    x.push(y[u])
                }
            }
        }
        return x
    };
	
	

    var j = function(t) {
        var s = this;
        for (var u in t) {
            s[u] = t[u]
        }
        s._private = {
            bUploading: false,
            fnCancelUploadHandler: null
        };
        s._init();//调用j.protptype中的_init()
    };
	

	
    j.prototype = {
        receiver: "J_Receiver",
        applyTo: "other",
        receiveType: "text",
        writebackOverwrite: false,
        getUploadConfigUrl: "http://api.3721up.com/apiloader.aspx?id=815&k=EzBR4hspIhTMN8Bzn4dSKg%3d%3d&t=1315296740&tag=cCom3721up_1",
        globalVarName: "cCom3721up0",
        width: 450,
        height: 220,
        _init: function() {
            var s = this,
            t = d["default"];
            if (navigator.userAgent.match(/msie 6/i)) {
                t += d.IE6
            }
            s._initStyleSheet();
            s._getUploadConfig();
            s._getStyle(m);
            s.updateDialog("\u6b63\u5728\u521d\u59cb\u5316\uff0c\u8bf7\u7a0d\u7b49\u3002\u3002\u3002", t);
            s._addEventListener();
            s.resetPosition();
            return s
        },
        _addEventListener: function() {
            var t = this,
            x = p,
            w = h(x),
            v = navigator.userAgent.match(/msie/i);
            var s = l(w, x + "-close", "a")[0],
            u = l(w, x + "-trigger", "input")[0];
            if (v) {
                f.attachEvent("onresize",
                function() {
                    t.resetPosition()
                });
                f.attachEvent("onscroll",
                function() {
                    t.resetPosition()
                });
                s.attachEvent("onclick",
                function() {
                    t.close()
                })
            } else {
                f.addEventListener("resize",
                function() {
                    t.resetPosition()
                },
                false);
                f.addEventListener("scroll",
                function() {
                    t.resetPosition()
                },
                false);
                s.addEventListener("click",
                function() {
                    t.close()
                },
                false)
            }
            return t
        },
        _initStyleSheet: function() {
            var t = this,
            v = t._private,
            u = r.getElementsByTagName("head")[0] || r.getElementsByClassName("body")[0],
            s = r.createElement("style");
            u.appendChild(s);
            if (navigator.userAgent.match(/msie/i)) {
                s.styleSheet.cssText = g
            } else {
                s.appendChild(r.createTextNode(g))
            }
            return t
        },
        _getScript: function(v, y) {
            var s = this,
            x = document,
            u = x.getElementsByTagName("head")[0] || x.getElementsByClassName("body")[0],
            w = x.createElement("script");
            w.src = v;
            w.async = true;
            if (w.readyState) {
                var t = w.onreadystatechange;
                w.onreadystatechange = function() {
                    var z = w.readyState;
                    if (z === "loaded" || z === "complete") {
                        w.onreadystatechange = null;
                        t && t();
                        y.call(this)
                    }
                }
            } else {
                w.addEventListener("load",
                function(z) {
                    y(z);
                    w.parentNode.removeChild(w)
                },
                false)
            }
            u.appendChild(w);
            return w
        },
        _getStyle: function(u) {
            var s = this,
            t = r.getElementsByTagName("head")[0] || r.getElementsByClassName("body")[0],
            v = r.createElement("link");
            v.rel = "stylesheet";
            v.href = u;
            t.appendChild(v);
            return s
        },
        _getUploadConfig: function() {
            var s = this,
            t = s.getUploadConfigUrl.replace(/&amp;/g, "&") + "&tag=" + s.globalVarName;
            s._getScript(t,
            function() {
                var u = window[s.globalVarName + "Config"];
                if (u.status == 1) {
                    l(r, p + "-main", "div")[0].innerHTML = '<div id="rongqi"></div>'
                } else {
                    s.updateDialog("Error: " + u.status, u.msg)
                }
            });
            return s
        },
        _getCompleteContent: function(v) {
            var s = this,
            u = s.receiveType.toLowerCase(),
            t = s._substitute(o.writeback, {
                fileName: v.name,
                fileSize: s._formatSize(v.size),
                url: s._substitute(o.receiveType[u], {
                    fileName: v.name,
                    url: a + v.fid
                }),
                br: u == "html" ? "<br />": "\r\n"
            });
            return t
        },
        _onUploadSuccess: function(t) {
            var s = this,
            v = s._private,
            u = h(v.containerName);
            s.writeback()
        },
        _substitute: function(s, u) {
            for (var t in u) {
                s = s.replace(new RegExp("{" + t + "}", "g"), u[t])
            }
            s = s.replace(/{[1-9a-z]}/gi, "");
            return s
        },
        _formatSize: function(s) {
            var t = ["B", "KB", "MB", "GB", "TB"],
            u = 0;
            while (s > 1024) {
                s /= 1024;
                u++
            }
            s = Math.round(s * 100) / 100;
            return s + t[u]
        },
		
		//显示上传窗口.设置窗口的显示的block
        open: function() {
            var s = this;
            h(p).style.display = "block";
            return s
        },
        close: function(u) {
            var s = this,
            v = s._private;
            if (v.bUploading) {
                if (confirm(b.confirmUploadingClose)) {
                    if (v.fnCancelUploadHandler) {
                        v.fnCancelUploadHandler()
                    }
                    t()
                }
            } else {
                t()
            }
            function t() {
                h(p).style.display = "none";
                if (typeof u == "function") {
                    u()
                }
            }
            return s
        },
        updateDialog: function(w, t) {
            var s = this,
            x = s._private,
            v = p,
            u = h(v);
            if (!u) {
                u = document.createElement("div");
                u.innerHTML = s._substitute(o.container, {
                    containerName: v,
                    body: s._substitute(o.body, {
                        containerName: v
                    }),
                    footer: o.poweredByInfo
                });
                k.appendChild(u.firstChild);
                u = h(v)
            }
            l(u, v + "-main", "div")[0].innerHTML = w;
            l(u, v + "-info", "div")[0].innerHTML = t;
            return s
        },
        resetPosition: function() {
            var v = this,
            A = v._private,
            y = h(p),
            u = n.clientWidth || k.clientWidth,
            s = n.clientHeight || k.clientHeight,
            w = n.scrollTop || k.scrollTop,
            x = n.scrollLeft || k.scrollLeft,
            t = y.clientWidth,
            z = y.clientHeight;
            if (u > t) {
                y.style.left = (u - t) / 2 + x + "px"
            }
            if (s > z) {
                y.style.top = (s - z) / 2 + w + "px"
            }
            return v
        },
        writeback: function(x) {
            var t = this,
            v = t.writebackOverwrite,
            u = t.applyTo,
            w = null,
            s = t._getCompleteContent(x);
            if (u == "discuz") {
                t._writebackToDiscuz(s)
            } else {
                if (u == "phpWind") {
                    alert("\u5bf9\u4e0d\u8d77\uff0c\u6682\u4e0d\u652f\u6301\u5bf9 phpWind \u7684\u63d2\u5165\u65b9\u5f0f")
                } else {
                    if (u == "wordPress") {
                        alert("\u5bf9\u4e0d\u8d77\uff0c\u6682\u4e0d\u652f\u6301\u5bf9 wordPress \u7684\u63d2\u5165\u65b9\u5f0f")
                    } else {
                        w = h(t.receiver);
                        if (v) {
                            w.value = s
                        } else {
                            w.value += s
                        }
                    }
                }
            }
            return t
        },
        _writebackToDiscuz: function(y) {
            var t = this;
            try {
                var z = h("e_iframe");
                if (z && z.style.display != "none") {
                    var x = z.contentWindow.document,
                    A = x.body,
                    D = function() {
                        var E = null;
                        if (t.receiveType != "html") {
                            E = r.createTextNode(y)
                        } else {
                            E = r.createElement("div");
                            E.innerHTML = y
                        }
                        return E
                    } ();
                    if (x.selection) {
                        var u = A.createTextRange();
                        u.collapse(false);
                        u.pasteHTML(y)
                    } else {
                        var w = x.getSelection();
                        if (w.rangeCount > 0) {
                            var u = w.getRangeAt(0),
                            C = u.startContainer,
                            B = u.endContainer;
                            if (C.nodeName == "#text") {
                                u.extractContents()
                            }
                            u.insertNode(D)
                        } else {
                            A.appendChild(D)
                        }
                    }
                } else {
                    var s = h("e_textarea");
                    s.value += y.replace(/<br.*?>/gi, "\r\n").replace(/<a.*?>(.*?)<\/a>/gi, "$1")
                }
            } catch(v) {
                alert("\u5bf9\u4e0d\u8d77\uff0c\u5c06\u4e0a\u4f20\u6587\u4ef6\u7684 url \u56de\u5199\u5165 Disuc \u7f16\u8f91\u5668\u5931\u8d25!\r\nError\uff1a" + v.message)
            }
            return t
        },
        getUploading: function() {
            return this._private.bUploading
        },
        setUploading: function(s) {
            var t = this;
            t._private.bUploading = s;
            return t
        },
        getCancelUploadHandler: function() {
            return this._private.fnCancelUploadHandle
        },
        setCancelUploadHandler: function(s) {
            var t = this;
            t._private.fnCancelUploadHandler = s;
            return t
        }
    };//END OF j.prototype
    window[i] = j;
    
	//调用J然后将J返回
	return j
}



function com3721upUpload(d) {
    var a = d + "Class",
    b = window[a];
    if (!b) {
        var c = window[d];
        if (!c) {
            alert("\u5bf9\u4e0d\u8d77\uff0c\u4e0a\u4f20\u53d8\u91cf\u65e0\u6548\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458\u5e76\u6838\u5bf9 API \u4ee3\u7801!");
            return
        }
        window[a] = b = new(fnCom3721upUploadApi())(c)
    }
    b.open()
 };