define("api", function(){
    var _getAPI = function(obj,com,ret,i){
        for(var name in obj){
            if(obj.hasOwnProperty(name) && (name == "fn" || !com.hasOwnProperty(name))){
                var prop = obj[ name ];
                var type = typeof prop;
                if(!com[name]){
                    com[name] = {}
                }
                ret[name] = type;
                if((type === "function" || type === "object") && Object.keys(prop).length >= 3 && i < 4){
                    ret[name] = {}
                    _getAPI(prop,  com[name], ret[name], ++i)
                }
            }
        }
    }
    //将这一段置于种子模块临结束的最下方
    //    window.compare = {};
    //    window.API = {};
    //    var getAPI = function(name){
    //        var ret = {};
    //        _getAPI($, compare, ret, 0);
    //        API[ name ] = ret;
    //    }
    //    getAPI("core", $)
    //    $.require("ready,fx,attr,event,flow,ajax",function(){
    //        delete API.core["1"]
    //        $.log( JSON.stringify(window.API,null,2))
    //    })
    //将  getAPI(token, assemble( callback, args ))放于require方法
    //return transfer[ token ] = assemble( callback, args );
    //这一语句之上
    //将getAPI(obj.name, transfer[ obj.name ])置于
    //transfer[ obj.name ] = assemble( obj.callback, obj.args );
    //这一语句之下          


    //它利用上述方法与属性在mass.js这个文件的三处，求得整个框架的API
    return {
        "模块加载模块": {
            require: "function",
            define: "function",
            config: "function",
            mix: "function",
            slice: "function",
            type: "function",
            log: "function",
            oneObject: "function",
            bind: "function",
            unbind: "function",
            noop: "function",
            erase: "function",
            html: "object",
            head: "object",
            rword: "object",
            mass: "number",
            getUid: "function",
            exports: "function"
        },

        "语言扩展模块": {
            "String": {
                contains: "function",
                startsWith: "function",
                endsWith: "function",
                repeat: "function",
                byteLen: "function",
                "truncate": "function",
                "camelize": "function",
                "underscored": "function",
                "capitalize": "function",
                "escapeHTML": "function",
                "unescapeHTML": "function",
                "stripTags": "function",
                "stripScripts": "function",
                "wbr": "function",
                "pad": "function"
            },
            "Array": {
                "clone": "function",
                "contains": "function",
                "remove": "function",
                "removeAt": "function",
                "shuffle": "function",
                "random": "function",
                "min": "function",
                "max": "function",
                "pluck": "function",
                "sortBy": "function",
                "compact": "function",
                "diff": "function",
                "merge": "function",
                "union": "function",
                "intersect": "function",
                "unique": "function",
                "ensure": "function",
                "inGroupsOf": "function",
                "flatten": "function"
            },
            "Number": {
                "limit": "function",
                "nearer": "function",
                "round": "function"
            },
            "Object": {
                "subset": "function",
                "each": "function",
                "map": "function",
                "clone": "function",
                "merge": "function",
                "without": "function"
            },
            "isPlainObject": "function",
            "isNative": "function",
            "isEmptyObject": "function",
            "isArrayLike": "function",
            "format": "function",
            "tag": "function",
            "range": "function",
            "quote": "function",
            "dump": "function",
            "parseJS": "function",
            "parseJSON": "function",
            "parseXML": "function",
            "isArray": "function",
            "isFunction": "function",
            "each": "function",
            "map": "function",
            "lang": "function"
        },
        "类工厂模块": {
            "factory": "function"
        },
        "节点模块": {
            "fn": {
                "init": "function",
                "mass": "number",
                "length": "number",
                "valueOf": "function",
                "toString": "function",
                "slice": "function",
                "get": "function",
                "eq": "function",
                "gt": "function",
                "lt": "function",
                "first": "function",
                "even": "function",
                "odd": "function",
                "last": "function",
                "each": "function",
                "map": "function",
                "collect": "function",
                "clone": "function",
                "html": "function",
                "text": "function",
                "push": "function",
                "unshift": "function",
                "pop": "function",
                "shift": "function",
                "splice": "function",
                "sort": "function",
                "reverse": "function",
                "remove": "function",
                "empty": "function",
                "append": "function",
                "appendTo": "function",
                "prepend": "function",
                "prependTo": "function",
                "before": "function",
                "beforeTo": "function",
                "after": "function",
                "afterTo": "function",
                "replace": "function",
                "replaceTo": "function",
                "data": "function",
                "removeData": "function",
                "find": "function",
                "filter": "function",
                "not": "function",
                "is": "function",
                "has": "function",
                "closest": "function",
                "index": "function",
                "parent": "function",
                "parents": "function",
                "parentsUntil": "function",
                "next": "function",
                "nextAll": "function",
                "nextUntil": "function",
                "prev": "function",
                "prevAll": "function",
                "prevUntil": "function",
                "children": "function",
                "siblings": "function",
                "contents": "function"
            },
            "implement": "function",
            "extend": "function",
            "match": "function",
            "parseHTML": "function"
        },
        "选择器模块": {
            "isXML": "function",
            "contains": "function",
            "getText": "function",
            "unique": "function",
            "query": "function"
        },
        "数据缓存模块": {
            "data": "function",
            "parseData": "function",
            "removeData": "function",
            "mergeData": "function"
        },
        "样式模块": {
            "fn": {
                "css": "function",
                "width": "function",
                "height": "function",
                "innerWidth": "function",
                "innerHeight": "function",
                "outerWidth": "function",
                "outerHeight": "function",
                "offset": "function",
                "position": "function",
                "offsetParent": "function",
                "scrollParent": "function",
                "scrollLeft": "function",
                "scrollTop": "function"
            },
            "cssName": "function",
            "scrollbarWidth": "function",
            "css": "function"
        },
        "属性模块": {
            "fn": {
                "addClass": "function",
                "hasClass": "function",
                "removeClass": "function",
                "toggleClass": "function",
                "replaceClass": "function",
                "val": "function",
                "removeAttr": "function",
                "removeProp": "function",
                "attr": "function",
                "prop": "function",
                "class": "function"
            },
            "attr": "function",
            "prop": "function",
            "attrMap": "object",
            "propMap": "object",
            "_remove_attr": "function",
            "propAdapter": "object",
            "valAdapter": "object"
        },
        "事件模块": {
            "fn": {
                "on": "function",
                "bind": "function",
                "off": "function",
                "unbind": "function",
                "toggle": "function",
                "hover": "function",
                "delegate": "function",
                "live": "function",
                "one": "function",
                "undelegate": "function",
                "die": "function",
                "fire": "function",
                "contextmenu": "function",
                "click": "function",
                "dblclick": "function",
                "mouseout": "function",
                "mouseover": "function",
                "mouseenter": "function",
                "mouseleave": "function",
                "mousemove": "function",
                "mousedown": "function",
                "mouseup": "function",
                "mousewheel": "function",
                "abort": "function",
                "error": "function",
                "load": "function",
                "unload": "function",
                "resize": "function",
                "scroll": "function",
                "change": "function",
                "select": "function",
                "reset": "function",
                "submit": "function",
                "blur": "function",
                "focus": "function",
                "focusin": "function",
                "focusout": "function",
                "keypress": "function",
                "keydown": "function",
                "keyup": "function"
            },
            "eventAdapter": {
                "focus": "object",
                "blur": "object",
                "beforeunload": "object",
                "focusin": "object",
                "focusout": "object",
                "mousewheel": "object"
            },
            "event": {
                "bind": "function",
                "unbind": "function",
                "fire": "function",
                "filter": "function",
                "dispatch": "function",
                "fix": "function"
            },
            "Event": "function",
            "EventTarget": "object",
            "eventSupport": "function"
        },
        "数据交互模块": {
            "get": "function",
            "post": "function",
            "getScript": "function",
            "getJSON": "function",
            "upload": "function",
            "serialize": "function",
            "serializeArray": "function",
            "param": "function",
            "ajax": {
                "uniqueNumber": "number",
                "defineEvents": "function",
                "bind": "function",
                "unbind": "function",
                "fire": "function",
                "isLocal": "boolean",
                "@data_14": "object"
            },
            "XHR": {
                "inherit": "function",
                "implement": "function",
                "extend": "function",
                "toString": "function"
            },
            "xhr": "function"
        },

        "动画模块": {
            "fn": { 
                "fx": "function",
                "stop": "function",
                "delay": "function",
                "slideDown": "function",
                "slideUp": "function",
                "slideToggle": "function",
                "fadeIn": "function",
                "fadeOut": "function",
                "fadeToggle": "function",
                "show": "function",
                "hide": "function",
                "puff": "function"
            },
            "easing": "object",
            "fx": "function",
            "show": "function",
            "hide": "function",
            "toggle": "function"
        },
        "操作流模块": {
            "Flow": "function",
            "flow.bind":"function",
            "flow.unbind":"function",
            "flow.fire":"function",
            "flow.find":"function",
            "flow.append":"function",
            "flow.reduce":"function"
        },
        "特征侦探模块": {}
    }


   
})
