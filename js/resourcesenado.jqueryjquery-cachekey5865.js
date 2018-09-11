
/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - ++resource++senado.jquery/jquery.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/++resource++senado.jquery/jquery.js?original=1
(function(window,undefined){var
readyList,rootjQuery,core_strundefined=typeof undefined,location=window.location,document=window.document,docElem=document.documentElement,_jQuery=window.jQuery,_$=window.$,class2type={},core_deletedIds=[],core_version="1.10.2",core_concat=core_deletedIds.concat,core_push=core_deletedIds.push,core_slice=core_deletedIds.slice,core_indexOf=core_deletedIds.indexOf,core_toString=class2type.toString,core_hasOwn=class2type.hasOwnProperty,core_trim=core_version.trim,jQuery=function(selector,context){return new jQuery.fn.init(selector,context,rootjQuery)},core_pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,core_rnotwhite=/\S+/g,rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,rvalidchars=/^[\],:{}\s]*$/,rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g,rvalidescape=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,rvalidtokens=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return letter.toUpperCase()},completed=function(event){if(document.addEventListener||event.type==="load"||document.readyState==="complete"){detach();jQuery.ready()}},detach=function(){if(document.addEventListener){document.removeEventListener("DOMContentLoaded",completed,false);window.removeEventListener("load",completed,false)} else{document.detachEvent("onreadystatechange",completed);window.detachEvent("onload",completed)}};jQuery.fn=jQuery.prototype={jquery:core_version,constructor:jQuery,init: function(selector,context,rootjQuery){var match,elem;if(!selector){return this}
if(typeof selector==="string"){if(selector.charAt(0)==="<"&&selector.charAt(selector.length-1)===">"&&selector.length>=3){match=[null,selector,null]} else{match=rquickExpr.exec(selector)}
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(jQuery.isFunction(this[match])){this[match](context[match])} else{this.attr(match,context[match])}}}
return this} else{elem=document.getElementById(match[2]);if(elem&&elem.parentNode){if(elem.id!==match[2]){return rootjQuery.find(selector)}
this.length=1;this[0]=elem}
this.context=document;this.selector=selector;return this}} else if(!context||context.jquery){return(context||rootjQuery).find(selector)} else{return this.constructor(context).find(selector)}} else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this} else if(jQuery.isFunction(selector)){return rootjQuery.ready(selector)}
if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context}
return jQuery.makeArray(selector,this)},selector:"",length:0,toArray: function(){return core_slice.call(this)},get: function(num){return num==null?this.toArray():(num<0?this[this.length+num]:this[num])},pushStack: function(elems){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;ret.context=this.context;return ret},each: function(callback,args){return jQuery.each(this,callback,args)},ready: function(fn){jQuery.ready.promise().done(fn);return this},slice: function(){return this.pushStack(core_slice.apply(this,arguments))},first: function(){return this.eq(0)},last: function(){return this.eq(-1)},eq: function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[])},map: function(callback){return this.pushStack(jQuery.map(this, function(elem,i){return callback.call(elem,i,elem)}))},end: function(){return this.prevObject||this.constructor(null)},push:core_push,sort:[].sort,splice:[].splice};jQuery.fn.init.prototype=jQuery.fn;jQuery.extend=jQuery.fn.extend=function(){var src,copyIsArray,copy,name,options,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[1]||{};i=2}
if(typeof target!=="object"&&!jQuery.isFunction(target)){target={}}
if(length===i){target=this;--i}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[]} else{clone=src&&jQuery.isPlainObject(src)?src:{}}
target[name]=jQuery.extend(deep,clone,copy)} else if(copy!==undefined){target[name]=copy}}}}
return target};jQuery.extend({expando:"jQuery"+(core_version+Math.random()).replace(/\D/g,""),noConflict: function(deep){if(window.$===jQuery){window.$=_$}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery}
return jQuery},isReady:false,readyWait:1,holdReady: function(hold){if(hold){jQuery.readyWait++} else{jQuery.ready(true)}},ready: function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return}
if(!document.body){return setTimeout(jQuery.ready)}
jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return}
readyList.resolveWith(document,[jQuery]);if(jQuery.fn.trigger){jQuery(document).trigger("ready").off("ready")}},isFunction: function(obj){return jQuery.type(obj)==="function"},isArray:Array.isArray|| function(obj){return jQuery.type(obj)==="array"},isWindow: function(obj){return obj!=null&&obj==obj.window},isNumeric: function(obj){return!isNaN(parseFloat(obj))&&isFinite(obj)},type: function(obj){if(obj==null){return String(obj)}
return typeof obj==="object"||typeof obj==="function"?class2type[core_toString.call(obj)]||"object":typeof obj},isPlainObject: function(obj){var key;if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false}
try{if(obj.constructor&&!core_hasOwn.call(obj,"constructor")&&!core_hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false}} catch(e){return false}
if(jQuery.support.ownLast){for(key in obj){return core_hasOwn.call(obj,key)}}
for(key in obj){}
return key===undefined||core_hasOwn.call(obj,key)},isEmptyObject: function(obj){var name;for(name in obj){return false}
return true},error: function(msg){throw new Error(msg)},parseHTML: function(data,context,keepScripts){if(!data||typeof data!=="string"){return null}
if(typeof context==="boolean"){keepScripts=context;context=false}
context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];if(parsed){return [context.createElement(parsed[1])]}
parsed=jQuery.buildFragment([data],context,scripts);if(scripts){jQuery(scripts).remove()}
return jQuery.merge([],parsed.childNodes)},parseJSON: function(data){if(window.JSON&&window.JSON.parse){return window.JSON.parse(data)}
if(data===null){return data}
if(typeof data==="string"){data=jQuery.trim(data);if(data){if(rvalidchars.test(data.replace(rvalidescape,"@").replace(rvalidtokens,"]").replace(rvalidbraces,""))){return(new Function("return "+data))()}}}
jQuery.error("Invalid JSON: "+data)},parseXML: function(data){var xml,tmp;if(!data||typeof data!=="string"){return null}
try{if(window.DOMParser){tmp=new DOMParser();xml=tmp.parseFromString(data,"text/xml")} else{xml=new ActiveXObject("Microsoft.XMLDOM");xml.async="false";xml.loadXML(data)}} catch(e){xml=undefined}
if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data)}
return xml},noop: function(){},globalEval: function(data){if(data&&jQuery.trim(data)){(window.execScript|| function(data){window["eval"].call(window,data)})(data)}},camelCase: function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase)},nodeName: function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase()},each: function(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);if(args){if(isArray){for(;i<length;i++){value=callback.apply(obj[i],args);if(value===false){break}}} else{for(i in obj){value=callback.apply(obj[i],args);if(value===false){break}}}} else{if(isArray){for(;i<length;i++){value=callback.call(obj[i],i,obj[i]);if(value===false){break}}} else{for(i in obj){value=callback.call(obj[i],i,obj[i]);if(value===false){break}}}}
return obj},trim:core_trim&&!core_trim.call("\uFEFF\xA0")?
function(text){return text==null?"":core_trim.call(text)}:
function(text){return text==null?"":(text+"").replace(rtrim,"")},makeArray: function(arr,results){var ret=results||[];if(arr!=null){if(isArraylike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr)} else{core_push.call(ret,arr)}}
return ret},inArray: function(elem,arr,i){var len;if(arr){if(core_indexOf){return core_indexOf.call(arr,elem,i)}
len=arr.length;i=i?i<0?Math.max(0,len+i):i:0;for(;i<len;i++){if(i in arr&&arr[i]===elem){return i}}}
return-1},merge: function(first,second){var l=second.length,i=first.length,j=0;if(typeof l==="number"){for(;j<l;j++){first[i++]=second[j]}} else{while(second[j]!==undefined){first[i++]=second[j++]}}
first.length=i;return first},grep: function(elems,callback,inv){var retVal,ret=[],i=0,length=elems.length;inv=!!inv;for(;i<length;i++){retVal=!!callback(elems[i],i);if(inv!==retVal){ret.push(elems[i])}}
return ret},map: function(elems,callback,arg){var value,i=0,length=elems.length,isArray=isArraylike(elems),ret=[];if(isArray){for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value}}} else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value}}}
return core_concat.apply([],ret)},guid:1,proxy: function(fn,context){var args,proxy,tmp;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp}
if(!jQuery.isFunction(fn)){return undefined}
args=core_slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(core_slice.call(arguments)))};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy},access: function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,length=elems.length,bulk=key==null;if(jQuery.type(key)==="object"){chainable=true;for(i in key){jQuery.access(elems,fn,i,key[i],true,emptyGet,raw)}} else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true}
if(bulk){if(raw){fn.call(elems,value);fn=null} else{bulk=fn;fn=function(elem,key,value){return bulk.call(jQuery(elem),value)}}}
if(fn){for(;i<length;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)))}}}
return chainable?elems:bulk?fn.call(elems):length?fn(elems[0],key):emptyGet},now: function(){return(new Date()).getTime()},swap: function(elem,options,callback,args){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name]}
ret=callback.apply(elem,args||[]);for(name in options){elem.style[name]=old[name]}
return ret}});jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();if(document.readyState==="complete"){setTimeout(jQuery.ready)} else if(document.addEventListener){document.addEventListener("DOMContentLoaded",completed,false);window.addEventListener("load",completed,false)} else{document.attachEvent("onreadystatechange",completed);window.attachEvent("onload",completed);var top=false;try{top=window.frameElement==null&&document.documentElement} catch(e){}
if(top&&top.doScroll){(function doScrollCheck(){if(!jQuery.isReady){try{top.doScroll("left")} catch(e){return setTimeout(doScrollCheck,50)}
detach();jQuery.ready()}})()}}}
return readyList.promise(obj)};jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i,name){class2type["[object "+name+"]"]=name.toLowerCase()});
function isArraylike(obj){var length=obj.length,type=jQuery.type(obj);if(jQuery.isWindow(obj)){return false}
if(obj.nodeType===1&&length){return true}
return type==="array"||type!=="function"&&(length===0||typeof length==="number"&&length>0&&(length-1) in obj)}
rootjQuery=jQuery(document);(function(window,undefined){var i,support,cachedruns,Expr,getText,isXML,compile,outermostContext,sortInput,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+-(new Date()),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),hasDuplicate=false,sortOrder=function(a,b){if(a===b){hasDuplicate=true;return 0}
return 0},strundefined=typeof undefined,MAX_NEGATIVE=1<<31,hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,indexOf=arr.indexOf|| function(elem){var i=0,len=this.length;for(;i<len;i++){if(this[i]===elem){return i}}
return-1},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",characterEncoding="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",identifier=characterEncoding.replace("w","w#"),attributes="\\["+whitespace+"*("+characterEncoding+")"+whitespace+"*(?:([*^$|!~]?=)"+whitespace+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+identifier+")|)|)"+whitespace+"*\\]",pseudos=":("+characterEncoding+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+attributes.replace(3,8)+")*)|.*)\\)|)",rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rsibling=new RegExp(whitespace+"*[+~]"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+characterEncoding+")"),"CLASS":new RegExp("^\\.("+characterEncoding+")"),"TAG":new RegExp("^("+characterEncoding.replace("w","w*")+")"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rescape=/'|\\/g,runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;return high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00)};try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType} catch(e){push={apply:arr.length?
function(target,els){push_native.apply(target,slice.call(els))}:
function(target,els){var j=target.length,i=0;while((target[j++]=els[i++])){}
target.length=j-1}}}
function Sizzle(selector,context,results,seed){var match,elem,m,nodeType,i,groups,old,nid,newContext,newSelector;if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context)}
context=context||document;results=results||[];if(!selector||typeof selector!=="string"){return results}
if((nodeType=context.nodeType)!==1&&nodeType!==9){return []}
if(documentIsHTML&&!seed){if((match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){elem=context.getElementById(m);if(elem&&elem.parentNode){if(elem.id===m){results.push(elem);return results}} else{return results}} else{if(context.ownerDocument&&(elem=context.ownerDocument.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results}}} else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results} else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results}}
if(support.qsa&&(!rbuggyQSA||!rbuggyQSA.test(selector))){nid=old=expando;newContext=context;newSelector=nodeType===9&&selector;if(nodeType===1&&context.nodeName.toLowerCase()!=="object"){groups=tokenize(selector);if((old=context.getAttribute("id"))){nid=old.replace(rescape,"\\$&")} else{context.setAttribute("id",nid)}
nid="[id='"+nid+"'] ";i=groups.length;while(i--){groups[i]=nid+toSelector(groups[i])}
newContext=rsibling.test(selector)&&context.parentNode||context;newSelector=groups.join(",")}
if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results} catch(qsaError){} finally{if(!old){context.removeAttribute("id")}}}}}
return select(selector.replace(rtrim,"$1"),context,results,seed)}
function createCache(){var keys=[];
function cache(key,value){if(keys.push(key+=" ")>Expr.cacheLength){delete cache[keys.shift()]}
return(cache[key]=value)}
return cache}
function markFunction(fn){fn[expando]=true;return fn}
function assert(fn){var div=document.createElement("div");try{return!!fn(div)} catch(e){return false} finally{if(div.parentNode){div.parentNode.removeChild(div)}
div=null}}
function addHandle(attrs,handler){var arr=attrs.split("|"),i=attrs.length;while(i--){Expr.attrHandle[arr[i]]=handler}}
function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-(~a.sourceIndex||MAX_NEGATIVE);if(diff){return diff}
if(cur){while((cur=cur.nextSibling)){if(cur===b){return-1}}}
return a?1:-1}
function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type}}
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type}}
function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j])}}})})}
isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false};support=Sizzle.support={};setDocument=Sizzle.setDocument=function(node){var doc=node?node.ownerDocument||node:preferredDoc,parent=doc.defaultView;if(doc===document||doc.nodeType!==9||!doc.documentElement){return document}
document=doc;docElem=doc.documentElement;documentIsHTML=!isXML(doc);if(parent&&parent.attachEvent&&parent!==parent.top){parent.attachEvent("onbeforeunload", function(){setDocument()})}
support.attributes=assert(function(div){div.className="i";return!div.getAttribute("className")});support.getElementsByTagName=assert(function(div){div.appendChild(doc.createComment(""));return!div.getElementsByTagName("*").length});support.getElementsByClassName=assert(function(div){div.innerHTML="<div class='a'></div><div class='a i'></div>";div.firstChild.className="i";return div.getElementsByClassName("i").length===2});support.getById=assert(function(div){docElem.appendChild(div).id=expando;return!doc.getElementsByName||!doc.getElementsByName(expando).length});if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!==strundefined&&documentIsHTML){var m=context.getElementById(id);return m&&m.parentNode?[m]:[]}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId}}} else{delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!==strundefined&&elem.getAttributeNode("id");return node&&node.value===attrId}}}
Expr.find["TAG"]=support.getElementsByTagName?
function(tag,context){if(typeof context.getElementsByTagName!==strundefined){return context.getElementsByTagName(tag)}}:
function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem)}}
return tmp}
return results};Expr.find["CLASS"]=support.getElementsByClassName&& function(className,context){if(typeof context.getElementsByClassName!==strundefined&&documentIsHTML){return context.getElementsByClassName(className)}};rbuggyMatches=[];rbuggyQSA=[];if((support.qsa=rnative.test(doc.querySelectorAll))){assert(function(div){div.innerHTML="<select><option selected=''></option></select>";if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")")}
if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked")}});assert(function(div){var input=doc.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("t","");if(div.querySelectorAll("[t^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")")}
if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled")}
div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:")})}
if((support.matchesSelector=rnative.test((matches=docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(div){support.disconnectedMatch=matches.call(div,"div");matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos)})}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));contains=rnative.test(docElem.contains)||docElem.compareDocumentPosition?
function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16))}:
function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true}}}
return false};sortOrder=docElem.compareDocumentPosition?
function(a,b){if(a===b){hasDuplicate=true;return 0}
var compare=b.compareDocumentPosition&&a.compareDocumentPosition&&a.compareDocumentPosition(b);if(compare){if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){if(a===doc||contains(preferredDoc,a)){return-1}
if(b===doc||contains(preferredDoc,b)){return 1}
return sortInput?(indexOf.call(sortInput,a)-indexOf.call(sortInput,b)):0}
return compare&4?-1:1}
return a.compareDocumentPosition?-1:1}:
function(a,b){var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(a===b){hasDuplicate=true;return 0} else if(!aup||!bup){return a===doc?-1:b===doc?1:aup?-1:bup?1:sortInput?(indexOf.call(sortInput,a)-indexOf.call(sortInput,b)):0} else if(aup===bup){return siblingCheck(a,b)}
cur=a;while((cur=cur.parentNode)){ap.unshift(cur)}
cur=b;while((cur=cur.parentNode)){bp.unshift(cur)}
while(ap[i]===bp[i]){i++}
return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0};return doc};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements)};Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document){setDocument(elem)}
expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret}} catch(e){}}
return Sizzle(expr,document,null,[elem]).length>0};Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!==document){setDocument(context)}
return contains(context,elem)};Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!==document){setDocument(elem)}
var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val===undefined?support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null:val};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg)};Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i)}}
while(j--){results.splice(duplicates[j],1)}}
return results};getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){for(;(node=elem[i]);i++){ret+=getText(node)}} else if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent} else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem)}}} else if(nodeType===3||nodeType===4){return elem.nodeValue}
return ret};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR": function(match){match[1]=match[1].replace(runescape,funescape);match[3]=(match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" "}
return match.slice(0,4)},"CHILD": function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0])}
match[4]=+(match[4]?match[5]+(match[6]||1):2 *(match[3]==="even"||match[3]==="odd"));match[5]=+((match[7]+match[8])||match[3]==="odd")} else if(match[3]){Sizzle.error(match[0])}
return match},"PSEUDO": function(match){var excess,unquoted=!match[5]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null}
if(match[3]&&match[4]!==undefined){match[2]=match[4]} else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess)}
return match.slice(0,3)}},filter:{"TAG": function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?
function(){return true}:
function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName}},"CLASS": function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className, function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!==strundefined&&elem.getAttribute("class")||"")})},"ATTR": function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!="}
if(!operator){return true}
result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false}},"CHILD": function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?
function(elem){return!!elem.parentNode}:
function(elem,context,xml){var cache,outerCache,node,diff,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType;if(parent){if(simple){while(dir){node=elem;while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false}}
start=dir=type==="only"&&!start&&"nextSibling"}
return true}
start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){outerCache=parent[expando]||(parent[expando]={});cache=outerCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=cache[0]===dirruns&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){outerCache[type]=[dirruns,nodeIndex,diff];break}}} else if(useCache&&(cache=(elem[expando]||(elem[expando]={}))[type])&&cache[0]===dirruns){diff=cache[1]} else{while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){(node[expando]||(node[expando]={}))[type]=[dirruns,diff]}
if(node===elem){break}}}}
diff-=last;return diff===first||(diff%first===0&&diff/first>=0)}}},"PSEUDO": function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument)}
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf.call(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i])}}):
function(elem){return fn(elem,0,args)}}
return fn}},pseudos:{"not":markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem)}}}):
function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);return!results.pop()}}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0}}),"contains":markFunction(function(text){return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1}}),"lang":markFunction( function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang)}
lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0}} while((elem=elem.parentNode)&&elem.nodeType===1);return false}}),"target": function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id},"root": function(elem){return elem===docElem},"focus": function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex)},"enabled": function(elem){return elem.disabled===false},"disabled": function(elem){return elem.disabled===true},"checked": function(elem){var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected)},"selected": function(elem){if(elem.parentNode){elem.parentNode.selectedIndex}
return elem.selected===true},"empty": function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeName>"@"||elem.nodeType===3||elem.nodeType===4){return false}}
return true},"parent": function(elem){return!Expr.pseudos["empty"](elem)},"header": function(elem){return rheader.test(elem.nodeName)},"input": function(elem){return rinputs.test(elem.nodeName)},"button": function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button"},"text": function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()===elem.type)},"first":createPositionalPseudo(function(){return [0]}),"last":createPositionalPseudo(function(matchIndexes,length){return [length-1]}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return [argument<0?argument+length:argument]}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i)}
return matchIndexes}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i)}
return matchIndexes}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i)}
return matchIndexes}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i)}
return matchIndexes})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i)}
for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i)}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();
function tokenize(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0)}
soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar}
groups.push(tokens=[])}
matched=false;if((match=rcombinators.exec(soFar))){matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length)}
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length)}}
if(!matched){break}}
return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0)}
function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value}
return selector}
function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first?
function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml)}}}:
function(elem,context,xml){var data,cache,outerCache,dirkey=dirruns+" "+doneName;if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true}}}} else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});if((cache=outerCache[dir])&&cache[0]===dirkey){if((data=cache[1])===true||data===cachedruns){return data===true}} else{cache=outerCache[dir]=[dirkey];cache[1]=matcher(elem,context,xml)||cachedruns;if(cache[1]===true){return true}}}}}}}
function elementMatcher(matchers){return matchers.length>1?
function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false}}
return true}:matchers[0]}
function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i)}}}}
return newUnmatched}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter)}
if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector)}
return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml)}
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem)}}}
if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem))}}
postFinder(null,(matcherOut=[]),temp,xml)}
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf.call(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem)}}}} else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml)} else{push.apply(results,matcherOut)}}})}
function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator( function(elem){return elem===checkContext},implicitRelative,true),matchAnyContext=addCombinator( function(elem){return indexOf.call(checkContext,elem)>-1},implicitRelative,true),matchers=[ function(elem,context,xml){return(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml))}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)]} else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break}}
return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens))}
matchers.push(matcher)}}
return elementMatcher(matchers)}
function matcherFromGroupMatchers(elementMatchers,setMatchers){var matcherCachedRuns=0,bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,expandContext){var elem,j,matcher,setMatched=[],matchedCount=0,i="0",unmatched=seed&&[],outermost=expandContext!=null,contextBackup=outermostContext,elems=seed||byElement&&Expr.find["TAG"]("*",expandContext&&context.parentNode||context),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1);if(outermost){outermostContext=context!==document&&context;cachedruns=matcherCachedRuns}
for(;(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;while((matcher=elementMatchers[j++])){if(matcher(elem,context,xml)){results.push(elem);break}}
if(outermost){dirruns=dirrunsUnique;cachedruns=++matcherCachedRuns}}
if(bySet){if((elem=!matcher&&elem)){matchedCount--}
if(seed){unmatched.push(elem)}}}
matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml)}
if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results)}}}
setMatched=condense(setMatched)}
push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results)}}
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup}
return unmatched};return bySet?markFunction(superMatcher):superMatcher}
compile=Sizzle.compile=function(selector,group){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){if(!group){group=tokenize(selector)}
i=group.length;while(i--){cached=matcherFromTokens(group[i]);if(cached[expando]){setMatchers.push(cached)} else{elementMatchers.push(cached)}}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers))}
return cached};
function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results)}
return results}
function select(selector,context,results,seed){var i,tokens,token,type,find,match=tokenize(selector);if(!seed){if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results}
selector=selector.slice(tokens.shift().value.length)}
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];if(Expr.relative[(type=token.type)]){break}
if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&context.parentNode||context))){tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results}
break}}}}}
compile(selector,match)(seed,context,!documentIsHTML,results,rsibling.test(selector));return results}
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;support.detectDuplicates=hasDuplicate;setDocument();support.sortDetached=assert(function(div1){return div1.compareDocumentPosition(document.createElement("div"))&1});if(!assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild.getAttribute("href")==="#" })){addHandle("type|href|height|width", function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2)}})}
if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value")===""})){addHandle("value", function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue}})}
if(!assert(function(div){return div.getAttribute("disabled")==null})){addHandle(booleans, function(elem,name,isXML){var val;if(!isXML){return(val=elem.getAttributeNode(name))&&val.specified?val.value:elem[name]===true?name.toLowerCase():null}})}
jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains})(window);var optionsCache={};
function createOptions(options){var object=optionsCache[options]={};jQuery.each(options.match(core_rnotwhite)||[], function(_,flag){object[flag]=true});return object}
jQuery.Callbacks=function(options){options=typeof options==="string"?(optionsCache[options]||createOptions(options)):jQuery.extend({},options);var
firing,memory,fired,firingLength,firingIndex,firingStart,list=[],stack=!options.once&&[],fire=function(data){memory=options.memory&&data;fired=true;firingIndex=firingStart||0;firingStart=0;firingLength=list.length;firing=true;for(;list&&firingIndex<firingLength;firingIndex++){if(list[firingIndex].apply(data[0],data[1])===false&&options.stopOnFalse){memory=false;break}}
firing=false;if(list){if(stack){if(stack.length){fire(stack.shift())}} else if(memory){list=[]} else{self.disable()}}},self={add: function(){if(list){var start=list.length;(function add(args){jQuery.each(args, function(_,arg){var type=jQuery.type(arg);if(type==="function"){if(!options.unique||!self.has(arg)){list.push(arg)}} else if(arg&&arg.length&&type!=="string"){add(arg)}})})(arguments);if(firing){firingLength=list.length} else if(memory){firingStart=start;fire(memory)}}
return this},remove: function(){if(list){jQuery.each(arguments, function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(firing){if(index<=firingLength){firingLength--}
if(index<=firingIndex){firingIndex--}}}})}
return this},has: function(fn){return fn?jQuery.inArray(fn,list)>-1:!!(list&&list.length)},empty: function(){list=[];firingLength=0;return this},disable: function(){list=stack=memory=undefined;return this},disabled: function(){return!list},lock: function(){stack=undefined;if(!memory){self.disable()}
return this},locked: function(){return!stack},fireWith: function(context,args){if(list&&(!fired||stack)){args=args||[];args=[context,args.slice?args.slice():args];if(firing){stack.push(args)} else{fire(args)}}
return this},fire: function(){self.fireWith(this,arguments);return this},fired: function(){return!!fired}};return self};jQuery.extend({Deferred: function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state: function(){return state},always: function(){deferred.done(arguments).fail(arguments);return this},then: function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples, function(i,tuple){var action=tuple[0],fn=jQuery.isFunction(fns[i])&&fns[i];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify)} else{newDefer[action+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments)}})});fns=null}).promise()},promise: function(obj){return obj!=null?jQuery.extend(obj,promise):promise}},deferred={};promise.pipe=promise.then;jQuery.each(tuples, function(i,tuple){var list=tuple[2],stateString=tuple[3];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString},tuples[i ^ 1][2].disable,tuples[2][2].lock)}
deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);return this};deferred[tuple[0]+"With"]=list.fireWith});promise.promise(deferred);if(func){func.call(deferred,deferred)}
return deferred},when: function(subordinate){var i=0,resolveValues=core_slice.call(arguments),length=resolveValues.length,remaining=length!==1||(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?core_slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values)} else if(!(--remaining)){deferred.resolveWith(contexts,values)}}},progressValues,progressContexts,resolveContexts;if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFunc(i,progressContexts,progressValues))} else{--remaining}}}
if(!remaining){deferred.resolveWith(resolveContexts,resolveValues)}
return deferred.promise()}});jQuery.support=(function(support){var all,a,input,select,fragment,opt,eventName,isSupported,i,div=document.createElement("div");div.setAttribute("className","t");div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";all=div.getElementsByTagName("*")||[];a=div.getElementsByTagName("a")[0];if(!a||!a.style||!all.length){return support}
select=document.createElement("select");opt=select.appendChild(document.createElement("option"));input=div.getElementsByTagName("input")[0];a.style.cssText="top:1px;float:left;opacity:.5";support.getSetAttribute=div.className!=="t";support.leadingWhitespace=div.firstChild.nodeType===3;support.tbody=!div.getElementsByTagName("tbody").length;support.htmlSerialize=!!div.getElementsByTagName("link").length;support.style=/top/.test(a.getAttribute("style"));support.hrefNormalized=a.getAttribute("href")==="/a";support.opacity=/^0.5/.test(a.style.opacity);support.cssFloat=!!a.style.cssFloat;support.checkOn=!!input.value;support.optSelected=opt.selected;support.enctype=!!document.createElement("form").enctype;support.html5Clone=document.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>";support.inlineBlockNeedsLayout=false;support.shrinkWrapBlocks=false;support.pixelPosition=false;support.deleteExpando=true;support.noCloneEvent=true;support.reliableMarginRight=true;support.boxSizingReliable=true;input.checked=true;support.noCloneChecked=input.cloneNode(true).checked;select.disabled=true;support.optDisabled=!opt.disabled;try{delete div.test} catch(e){support.deleteExpando=false}
input=document.createElement("input");input.setAttribute("value","");support.input=input.getAttribute("value")==="";input.value="t";input.setAttribute("type","radio");support.radioValue=input.value==="t";input.setAttribute("checked","t");input.setAttribute("name","t");fragment=document.createDocumentFragment();fragment.appendChild(input);support.appendChecked=input.checked;support.checkClone=fragment.cloneNode(true).cloneNode(true).lastChild.checked;if(div.attachEvent){div.attachEvent("onclick", function(){support.noCloneEvent=false});div.cloneNode(true).click()}
for(i in{submit:true,change:true,focusin:true}){div.setAttribute(eventName="on"+i,"t");support[i+"Bubbles"]=eventName in window||div.attributes[eventName].expando===false}
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";for(i in jQuery(support)){break}
support.ownLast=i!=="0";jQuery(function(){var container,marginDiv,tds,divReset="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",body=document.getElementsByTagName("body")[0];if(!body){return}
container=document.createElement("div");container.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";body.appendChild(container).appendChild(div);div.innerHTML="<table><tr><td></td><td>t</td></tr></table>";tds=div.getElementsByTagName("td");tds[0].style.cssText="padding:0;margin:0;border:0;display:none";isSupported=(tds[0].offsetHeight===0);tds[0].style.display="";tds[1].style.display="none";support.reliableHiddenOffsets=isSupported&&(tds[0].offsetHeight===0);div.innerHTML="";div.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";jQuery.swap(body,body.style.zoom!=null?{zoom:1}:{}, function(){support.boxSizing=div.offsetWidth===4});if(window.getComputedStyle){support.pixelPosition=(window.getComputedStyle(div,null)||{}).top!=="1%";support.boxSizingReliable=(window.getComputedStyle(div,null)||{width:"4px"}).width==="4px";marginDiv=div.appendChild(document.createElement("div"));marginDiv.style.cssText=div.style.cssText=divReset;marginDiv.style.marginRight=marginDiv.style.width="0";div.style.width="1px";support.reliableMarginRight=!parseFloat((window.getComputedStyle(marginDiv,null)||{}).marginRight)}
if(typeof div.style.zoom!==core_strundefined){div.innerHTML="";div.style.cssText=divReset+"width:1px;padding:1px;display:inline;zoom:1";support.inlineBlockNeedsLayout=(div.offsetWidth===3);div.style.display="block";div.innerHTML="<div></div>";div.firstChild.style.width="5px";support.shrinkWrapBlocks=(div.offsetWidth!==3);if(support.inlineBlockNeedsLayout){body.style.zoom=1}}
body.removeChild(container);container=div=tds=marginDiv=null});all=select=fragment=opt=a=input=null;return support})({});var rbrace=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,rmultiDash=/([A-Z])/g;
function internalData(elem,name,data,pvt){if(!jQuery.acceptData(elem)){return}
var ret,thisCache,internalKey=jQuery.expando,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[internalKey]:elem[internalKey]&&internalKey;if((!id||!cache[id]||(!pvt&&!cache[id].data))&&data===undefined&&typeof name==="string"){return}
if(!id){if(isNode){id=elem[internalKey]=core_deletedIds.pop()||jQuery.guid++} else{id=internalKey}}
if(!cache[id]){cache[id]=isNode?{}:{toJSON:jQuery.noop}}
if(typeof name==="object"||typeof name==="function"){if(pvt){cache[id]=jQuery.extend(cache[id],name)} else{cache[id].data=jQuery.extend(cache[id].data,name)}}
thisCache=cache[id];if(!pvt){if(!thisCache.data){thisCache.data={}}
thisCache=thisCache.data}
if(data!==undefined){thisCache[jQuery.camelCase(name)]=data}
if(typeof name==="string"){ret=thisCache[name];if(ret==null){ret=thisCache[jQuery.camelCase(name)]}} else{ret=thisCache}
return ret}
function internalRemoveData(elem,name,pvt){if(!jQuery.acceptData(elem)){return}
var thisCache,i,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[jQuery.expando]:jQuery.expando;if(!cache[id]){return}
if(name){thisCache=pvt?cache[id]:cache[id].data;if(thisCache){if(!jQuery.isArray(name)){if(name in thisCache){name=[name]} else{name=jQuery.camelCase(name);if(name in thisCache){name=[name]} else{name=name.split(" ")}}} else{name=name.concat(jQuery.map(name,jQuery.camelCase))}
i=name.length;while(i--){delete thisCache[name[i]]}
if(pvt?!isEmptyDataObject(thisCache):!jQuery.isEmptyObject(thisCache)){return}}}
if(!pvt){delete cache[id].data;if(!isEmptyDataObject(cache[id])){return}}
if(isNode){jQuery.cleanData([elem],true)} else if(jQuery.support.deleteExpando||cache!=cache.window){delete cache[id]} else{cache[id]=null}}
jQuery.extend({cache:{},noData:{"applet":true,"embed":true,"object":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData: function(elem){elem=elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];return!!elem&&!isEmptyDataObject(elem)},data: function(elem,name,data){return internalData(elem,name,data)},removeData: function(elem,name){return internalRemoveData(elem,name)},_data: function(elem,name,data){return internalData(elem,name,data,true)},_removeData: function(elem,name){return internalRemoveData(elem,name,true)},acceptData: function(elem){if(elem.nodeType&&elem.nodeType!==1&&elem.nodeType!==9){return false}
var noData=elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()];return!noData||noData!==true&&elem.getAttribute("classid")===noData}});jQuery.fn.extend({data: function(key,value){var attrs,name,data=null,i=0,elem=this[0];if(key===undefined){if(this.length){data=jQuery.data(elem);if(elem.nodeType===1&&!jQuery._data(elem,"parsedAttrs")){attrs=elem.attributes;for(;i<attrs.length;i++){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name])}}
jQuery._data(elem,"parsedAttrs",true)}}
return data}
if(typeof key==="object"){return this.each(function(){jQuery.data(this,key)})}
return arguments.length>1?this.each(function(){jQuery.data(this,key,value)}):elem?dataAttr(elem,key,jQuery.data(elem,key)):null},removeData: function(key){return this.each(function(){jQuery.removeData(this,key)})}});
function dataAttr(elem,key,data){if(data===undefined&&elem.nodeType===1){var name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data} catch(e){}
jQuery.data(elem,key,data)} else{data=undefined}}
return data}
function isEmptyDataObject(obj){var name;for(name in obj){if(name==="data"&&jQuery.isEmptyObject(obj[name])){continue}
if(name!=="toJSON"){return false}}
return true}
jQuery.extend({queue: function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=jQuery._data(elem,type);if(data){if(!queue||jQuery.isArray(data)){queue=jQuery._data(elem,type,jQuery.makeArray(data))} else{queue.push(data)}}
return queue||[]}},dequeue: function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type)};if(fn==="inprogress"){fn=queue.shift();startLength--}
if(fn){if(type==="fx"){queue.unshift("inprogress")}
delete hooks.stop;fn.call(elem,next,hooks)}
if(!startLength&&hooks){hooks.empty.fire()}},_queueHooks: function(elem,type){var key=type+"queueHooks";return jQuery._data(elem,key)||jQuery._data(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){jQuery._removeData(elem,type+"queue");jQuery._removeData(elem,key)})})}});jQuery.fn.extend({queue: function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--}
if(arguments.length<setter){return jQuery.queue(this[0],type)}
return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type)}})},dequeue: function(type){return this.each(function(){jQuery.dequeue(this,type)})},delay: function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type, function(next,hooks){var timeout=setTimeout(next,time);hooks.stop=function(){clearTimeout(timeout)}})},clearQueue: function(type){return this.queue(type||"fx",[])},promise: function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements])}};if(typeof type!=="string"){obj=type;type=undefined}
type=type||"fx";while(i--){tmp=jQuery._data(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve)}}
resolve();return defer.promise(obj)}});var nodeHook,boolHook,rclass=/[\t\r\n\f]/g,rreturn=/\r/g,rfocusable=/^(?:input|select|textarea|button|object)$/i,rclickable=/^(?:a|area)$/i,ruseDefault=/^(?:checked|selected)$/i,getSetAttribute=jQuery.support.getSetAttribute,getSetInput=jQuery.support.input;jQuery.fn.extend({attr: function(name,value){return jQuery.access(this,jQuery.attr,name,value,arguments.length>1)},removeAttr: function(name){return this.each(function(){jQuery.removeAttr(this,name)})},prop: function(name,value){return jQuery.access(this,jQuery.prop,name,value,arguments.length>1)},removeProp: function(name){name=jQuery.propFix[name]||name;return this.each(function(){try{this[name]=undefined;delete this[name]} catch(e){}})},addClass: function(value){var classes,elem,cur,clazz,j,i=0,len=this.length,proceed=typeof value==="string"&&value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className))})}
if(proceed){classes=(value||"").match(core_rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):" ");if(cur){j=0;while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" "}}
elem.className=jQuery.trim(cur)}}}
return this},removeClass: function(value){var classes,elem,cur,clazz,j,i=0,len=this.length,proceed=arguments.length===0||typeof value==="string"&&value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className))})}
if(proceed){classes=(value||"").match(core_rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):"");if(cur){j=0;while((clazz=classes[j++])){while(cur.indexOf(" "+clazz+" ")>=0){cur=cur.replace(" "+clazz+" "," ")}}
elem.className=value?jQuery.trim(cur):""}}}
return this},toggleClass: function(value,stateVal){var type=typeof value;if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value)}
if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal)})}
return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),classNames=value.match(core_rnotwhite)||[];while((className=classNames[i++])){if(self.hasClass(className)){self.removeClass(className)} else{self.addClass(className)}}} else if(type===core_strundefined||type==="boolean"){if(this.className){jQuery._data(this,"__className__",this.className)}
this.className=this.className||value===false?"":jQuery._data(this,"__className__")||""}})},hasClass: function(selector){var className=" "+selector+" ",i=0,l=this.length;for(;i<l;i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>=0){return true}}
return false},val: function(value){var ret,hooks,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get" in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret}
ret=elem.value;return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret}
return}
isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return}
if(isFunction){val=value.call(this,i,jQuery(this).val())} else{val=value}
if(val==null){val=""} else if(typeof val==="number"){val+=""} else if(jQuery.isArray(val)){val=jQuery.map(val, function(value){return value==null?"":value+""})}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set" in hooks)||hooks.set(this,val,"value")===undefined){this.value=val}})}});jQuery.extend({valHooks:{option:{get: function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:elem.text}},select:{get: function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;for(;i<max;i++){option=options[i];if((option.selected||i===index)&&(jQuery.support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value}
values.push(value)}}
return values},set: function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if((option.selected=jQuery.inArray(jQuery(option).val(),values)>=0)){optionSet=true}}
if(!optionSet){elem.selectedIndex=-1}
return values}}},attr: function(elem,name,value){var hooks,ret,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return}
if(typeof elem.getAttribute===core_strundefined){return jQuery.prop(elem,name,value)}
if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:nodeHook)}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name)} else if(hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret} else{elem.setAttribute(name,value+"");return value}} else if(hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null){return ret} else{ret=jQuery.find.attr(elem,name);return ret==null?undefined:ret}},removeAttr: function(elem,value){var name,propName,i=0,attrNames=value&&value.match(core_rnotwhite);if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){propName=jQuery.propFix[name]||name;if(jQuery.expr.match.bool.test(name)){if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){elem[propName]=false} else{elem[jQuery.camelCase("default-"+name)]=elem[propName]=false}} else{jQuery.attr(elem,name,"")}
elem.removeAttribute(getSetAttribute?name:propName)}}},attrHooks:{type:{set: function(elem,value){if(!jQuery.support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val}
return value}}}},propFix:{"for":"htmlFor","class":"className"},prop: function(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return}
notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name]}
if(value!==undefined){return hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined?ret:(elem[name]=value)} else{return hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null?ret:elem[name]}},propHooks:{tabIndex:{get: function(elem){var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1}}}});boolHook={set: function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name)} else if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){elem.setAttribute(!getSetAttribute&&jQuery.propFix[name]||name,name)} else{elem[jQuery.camelCase("default-"+name)]=elem[name]=true}
return name}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i,name){var getter=jQuery.expr.attrHandle[name]||jQuery.find.attr;jQuery.expr.attrHandle[name]=getSetInput&&getSetAttribute||!ruseDefault.test(name)?
function(elem,name,isXML){var fn=jQuery.expr.attrHandle[name],ret=isXML?undefined:(jQuery.expr.attrHandle[name]=undefined)!=getter(elem,name,isXML)?name.toLowerCase():null;jQuery.expr.attrHandle[name]=fn;return ret}:
function(elem,name,isXML){return isXML?undefined:elem[jQuery.camelCase("default-"+name)]?name.toLowerCase():null}});if(!getSetInput||!getSetAttribute){jQuery.attrHooks.value={set: function(elem,value,name){if(jQuery.nodeName(elem,"input")){elem.defaultValue=value} else{return nodeHook&&nodeHook.set(elem,value,name)}}}}
if(!getSetAttribute){nodeHook={set: function(elem,value,name){var ret=elem.getAttributeNode(name);if(!ret){elem.setAttributeNode((ret=elem.ownerDocument.createAttribute(name)))}
ret.value=value+="";return name==="value"||value===elem.getAttribute(name)?value:undefined}};jQuery.expr.attrHandle.id=jQuery.expr.attrHandle.name=jQuery.expr.attrHandle.coords=function(elem,name,isXML){var ret;return isXML?undefined:(ret=elem.getAttributeNode(name))&&ret.value!==""?ret.value:null};jQuery.valHooks.button={get: function(elem,name){var ret=elem.getAttributeNode(name);return ret&&ret.specified?ret.value:undefined},set:nodeHook.set};jQuery.attrHooks.contenteditable={set: function(elem,value,name){nodeHook.set(elem,value===""?false:value,name)}};jQuery.each(["width","height"], function(i,name){jQuery.attrHooks[name]={set: function(elem,value){if(value===""){elem.setAttribute(name,"auto");return value}}}})}
if(!jQuery.support.hrefNormalized){jQuery.each(["href","src"], function(i,name){jQuery.propHooks[name]={get: function(elem){return elem.getAttribute(name,4)}}})}
if(!jQuery.support.style){jQuery.attrHooks.style={get: function(elem){return elem.style.cssText||undefined},set: function(elem,value){return(elem.style.cssText=value+"")}}}
if(!jQuery.support.optSelected){jQuery.propHooks.selected={get: function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex}}
return null}}}
jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"], function(){jQuery.propFix[this.toLowerCase()]=this});if(!jQuery.support.enctype){jQuery.propFix.enctype="encoding"}
jQuery.each(["radio","checkbox"], function(){jQuery.valHooks[this]={set: function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0)}}};if(!jQuery.support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value}}});var rformElems=/^(?:input|select|textarea)$/i,rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;
function returnTrue(){return true}
function returnFalse(){return false}
function safeActiveElement(){try{return document.activeElement} catch(err){}}
jQuery.event={global:{},add: function(elem,types,handler,data,selector){var tmp,events,t,handleObjIn,special,eventHandle,handleObj,handlers,type,namespaces,origType,elemData=jQuery._data(elem);if(!elemData){return}
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector}
if(!handler.guid){handler.guid=jQuery.guid++}
if(!(events=elemData.events)){events=elemData.events={}}
if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!==core_strundefined&&(!e||jQuery.event.triggered!==e.type)?jQuery.event.dispatch.apply(eventHandle.elem,arguments):undefined};eventHandle.elem=elem}
types=(types||"").match(core_rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){continue}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false)} else if(elem.attachEvent){elem.attachEvent("on"+type,eventHandle)}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid}}
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj)} else{handlers.push(handleObj)}
jQuery.event.global[type]=true}
elem=null},remove: function(elem,types,handler,selector,mappedTypes){var j,handleObj,tmp,origCount,t,events,special,handlers,type,namespaces,origType,elemData=jQuery.hasData(elem)&&jQuery._data(elem);if(!elemData||!(events=elemData.events)){return}
types=(types||"").match(core_rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true)}
continue}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--}
if(special.remove){special.remove.call(elem,handleObj)}}}
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle)}
delete events[type]}}
if(jQuery.isEmptyObject(events)){delete elemData.handle;jQuery._removeData(elem,"events")}},trigger: function(event,data,elem,onlyHandlers){var handle,ontype,cur,bubbleType,special,tmp,i,eventPath=[elem||document],type=core_hasOwn.call(event,"type")?event.type:event,namespaces=core_hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return}
if(rfocusMorph.test(type+jQuery.event.triggered)){return}
if(type.indexOf(".")>=0){namespaces=type.split(".");type=namespaces.shift();namespaces.sort()}
ontype=type.indexOf(":")<0&&"on"+type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.result=undefined;if(!event.target){event.target=elem}
data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return}
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode}
for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur}
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window)}}
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;handle=(jQuery._data(cur,"events")||{})[event.type]&&jQuery._data(cur,"handle");if(handle){handle.apply(cur,data)}
handle=ontype&&cur[ontype];if(handle&&jQuery.acceptData(cur)&&handle.apply&&handle.apply(cur,data)===false){event.preventDefault()}}
event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&jQuery.acceptData(elem)){if(ontype&&elem[type]&&!jQuery.isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null}
jQuery.event.triggered=type;try{elem[type]()} catch(e){}
jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp}}}}
return event.result},dispatch: function(event){event=jQuery.event.fix(event);var i,ret,handleObj,matched,j,handlerQueue=[],args=core_slice.call(arguments),handlers=(jQuery._data(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.namespace_re||event.namespace_re.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation()}}}}}
if(special.postDispatch){special.postDispatch.call(this,event)}
return event.result},handlers: function(event,handlers){var sel,handleObj,matches,i,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&(!event.button||event.type!=="click")){for(;cur!=this;cur=cur.parentNode||this){if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>=0:jQuery.find(sel,this,null,[cur]).length}
if(matches[sel]){matches.push(handleObj)}}
if(matches.length){handlerQueue.push({elem:cur,handlers:matches})}}}}
if(delegateCount<handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)})}
return handlerQueue},fix: function(event){if(event[jQuery.expando]){return event}
var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{}}
copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop]}
if(!event.target){event.target=originalEvent.srcElement||document}
if(event.target.nodeType===3){event.target=event.target.parentNode}
event.metaKey=!!event.metaKey;return fixHook.filter?fixHook.filter(event,originalEvent):event},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter: function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode}
return event}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter: function(event,original){var body,eventDoc,doc,button=original.button,fromElement=original.fromElement;if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0)}
if(!event.relatedTarget&&fromElement){event.relatedTarget=fromElement===event.target?original.toElement:fromElement}
if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)))}
return event}},special:{load:{noBubble:true},focus:{trigger: function(){if(this!==safeActiveElement()&&this.focus){try{this.focus();return false} catch(e){}}},delegateType:"focusin"},blur:{trigger: function(){if(this===safeActiveElement()&&this.blur){this.blur();return false}},delegateType:"focusout"},click:{trigger: function(){if(jQuery.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();return false}},_default: function(event){return jQuery.nodeName(event.target,"a")}},beforeunload:{postDispatch: function(event){if(event.result!==undefined){event.originalEvent.returnValue=event.result}}}},simulate: function(type,elem,event,bubble){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true,originalEvent:{}});if(bubble){jQuery.event.trigger(e,null,elem)} else{jQuery.event.dispatch.call(elem,e)}
if(e.isDefaultPrevented()){event.preventDefault()}}};jQuery.removeEvent=document.removeEventListener?
function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false)}}:
function(elem,type,handle){var name="on"+type;if(elem.detachEvent){if(typeof elem[name]===core_strundefined){elem[name]=null}
elem.detachEvent(name,handle)}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props)}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=(src.defaultPrevented||src.returnValue===false||src.getPreventDefault&&src.getPreventDefault())?returnTrue:returnFalse} else{this.type=src}
if(props){jQuery.extend(this,props)}
this.timeStamp=src&&src.timeStamp||jQuery.now();this[jQuery.expando]=true};jQuery.Event.prototype={isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault: function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(!e){return}
if(e.preventDefault){e.preventDefault()} else{e.returnValue=false}},stopPropagation: function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(!e){return}
if(e.stopPropagation){e.stopPropagation()}
e.cancelBubble=true},stopImmediatePropagation: function(){this.isImmediatePropagationStopped=returnTrue;this.stopPropagation()}};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout"}, function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle: function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix}
return ret}}});if(!jQuery.support.submitBubbles){jQuery.event.special.submit={setup: function(){if(jQuery.nodeName(this,"form")){return false}
jQuery.event.add(this,"click._submit keypress._submit", function(e){var elem=e.target,form=jQuery.nodeName(elem,"input")||jQuery.nodeName(elem,"button")?elem.form:undefined;if(form&&!jQuery._data(form,"submitBubbles")){jQuery.event.add(form,"submit._submit", function(event){event._submit_bubble=true});jQuery._data(form,"submitBubbles",true)}})},postDispatch: function(event){if(event._submit_bubble){delete event._submit_bubble;if(this.parentNode&&!event.isTrigger){jQuery.event.simulate("submit",this.parentNode,event,true)}}},teardown: function(){if(jQuery.nodeName(this,"form")){return false}
jQuery.event.remove(this,"._submit")}}}
if(!jQuery.support.changeBubbles){jQuery.event.special.change={setup: function(){if(rformElems.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){jQuery.event.add(this,"propertychange._change", function(event){if(event.originalEvent.propertyName==="checked"){this._just_changed=true}});jQuery.event.add(this,"click._change", function(event){if(this._just_changed&&!event.isTrigger){this._just_changed=false}
jQuery.event.simulate("change",this,event,true)})}
return false}
jQuery.event.add(this,"beforeactivate._change", function(e){var elem=e.target;if(rformElems.test(elem.nodeName)&&!jQuery._data(elem,"changeBubbles")){jQuery.event.add(elem,"change._change", function(event){if(this.parentNode&&!event.isSimulated&&!event.isTrigger){jQuery.event.simulate("change",this.parentNode,event,true)}});jQuery._data(elem,"changeBubbles",true)}})},handle: function(event){var elem=event.target;if(this!==elem||event.isSimulated||event.isTrigger||(elem.type!=="radio"&&elem.type!=="checkbox")){return event.handleObj.handler.apply(this,arguments)}},teardown: function(){jQuery.event.remove(this,"._change");return!rformElems.test(this.nodeName)}}}
if(!jQuery.support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"}, function(orig,fix){var attaches=0,handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true)};jQuery.event.special[fix]={setup: function(){if(attaches++===0){document.addEventListener(orig,handler,true)}},teardown: function(){if(--attaches===0){document.removeEventListener(orig,handler,true)}}}})}
jQuery.fn.extend({on: function(types,selector,data,fn,one){var type,origFn;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined}
for(type in types){this.on(type,selector,data,types[type],one)}
return this}
if(data==null&&fn==null){fn=selector;data=selector=undefined} else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined} else{fn=data;data=selector;selector=undefined}}
if(fn===false){fn=returnFalse} else if(!fn){return this}
if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments)};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++)}
return this.each( function(){jQuery.event.add(this,types,fn,data,selector)})},one: function(types,selector,data,fn){return this.on(types,selector,data,fn,1)},off: function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this}
if(typeof types==="object"){for(type in types){this.off(type,selector,types[type])}
return this}
if(selector===false||typeof selector==="function"){fn=selector;selector=undefined}
if(fn===false){fn=returnFalse}
return this.each(function(){jQuery.event.remove(this,types,fn,selector)})},trigger: function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this)})},triggerHandler: function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true)}}});var isSimple=/^.[^:#\[\.,]*$/,rparentsprev=/^(?:parents|prev(?:Until|All))/,rneedsContext=jQuery.expr.match.needsContext,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({find: function(selector){var i,ret=[],self=this,len=self.length;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true}}}))}
for(i=0;i<len;i++){jQuery.find(selector,self[i],ret)}
ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?this.selector+" "+selector:selector;return ret},has: function(target){var i,targets=jQuery(target,this),len=targets.length;return this.filter(function(){for(i=0;i<len;i++){if(jQuery.contains(this,targets[i])){return true}}})},not: function(selector){return this.pushStack(winnow(this,selector||[],true))},filter: function(selector){return this.pushStack(winnow(this,selector||[],false))},is: function(selector){return!!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length},closest: function(selectors,context){var cur,i=0,l=this.length,ret=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){if(cur.nodeType<11&&(pos?pos.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){cur=ret.push(cur);break}}}
return this.pushStack(ret.length>1?jQuery.unique(ret):ret)},index: function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1}
if(typeof elem==="string"){return jQuery.inArray(this[0],jQuery(elem))}
return jQuery.inArray(elem.jquery?elem[0]:elem,this)},add: function(selector,context){var set=typeof selector==="string"?jQuery(selector,context):jQuery.makeArray(selector&&selector.nodeType?[selector]:selector),all=jQuery.merge(this.get(),set);return this.pushStack(jQuery.unique(all))},addBack: function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector))}});
function sibling(cur,dir){do{cur=cur[dir]} while(cur&&cur.nodeType!==1);return cur}
jQuery.each({parent: function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null},parents: function(elem){return jQuery.dir(elem,"parentNode")},parentsUntil: function(elem,i,until){return jQuery.dir(elem,"parentNode",until)},next: function(elem){return sibling(elem,"nextSibling")},prev: function(elem){return sibling(elem,"previousSibling")},nextAll: function(elem){return jQuery.dir(elem,"nextSibling")},prevAll: function(elem){return jQuery.dir(elem,"previousSibling")},nextUntil: function(elem,i,until){return jQuery.dir(elem,"nextSibling",until)},prevUntil: function(elem,i,until){return jQuery.dir(elem,"previousSibling",until)},siblings: function(elem){return jQuery.sibling((elem.parentNode||{}).firstChild,elem)},children: function(elem){return jQuery.sibling(elem.firstChild)},contents: function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.merge([],elem.childNodes)}}, function(name,fn){jQuery.fn[name]=function(until,selector){var ret=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until}
if(selector&&typeof selector==="string"){ret=jQuery.filter(selector,ret)}
if(this.length>1){if(!guaranteedUnique[name]){ret=jQuery.unique(ret)}
if(rparentsprev.test(name)){ret=ret.reverse()}}
return this.pushStack(ret)}});jQuery.extend({filter: function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")"}
return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems, function(elem){return elem.nodeType===1}))},dir: function(elem,dir,until){var matched=[],cur=elem[dir];while(cur&&cur.nodeType!==9&&(until===undefined||cur.nodeType!==1||!jQuery(cur).is(until))){if(cur.nodeType===1){matched.push(cur)}
cur=cur[dir]}
return matched},sibling: function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){r.push(n)}}
return r}});
function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements, function(elem,i){return!!qualifier.call(elem,i,elem)!==not})}
if(qualifier.nodeType){return jQuery.grep(elements, function(elem){return(elem===qualifier)!==not})}
if(typeof qualifier==="string"){if(isSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not)}
qualifier=jQuery.filter(qualifier,elements)}
return jQuery.grep(elements, function(elem){return(jQuery.inArray(elem,qualifier)>=0)!==not})}
function createSafeFragment(document){var list=nodeNames.split("|"),safeFrag=document.createDocumentFragment();if(safeFrag.createElement){while(list.length){safeFrag.createElement(list.pop())}}
return safeFrag}
var nodeNames="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"+"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",rinlinejQuery=/ jQuery\d+="(?:null|\d+)"/g,rnoshimcache=new RegExp("<(?:"+nodeNames+")[\\s/>]","i"),rleadingWhitespace=/^\s+/,rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rtbody=/<tbody/i,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i,manipulation_rcheckableType=/^(?:checkbox|radio)$/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/^$|\/(?:java|ecma)script/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:jQuery.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},safeFragment=createSafeFragment(document),fragmentDiv=safeFragment.appendChild(document.createElement("div"));wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;jQuery.fn.extend({text: function(value){return jQuery.access(this, function(value){return value===undefined?jQuery.text(this):this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(value))},null,value,arguments.length)},append: function(){return this.domManip(arguments, function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem)}})},prepend: function(){return this.domManip(arguments, function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild)}})},before: function(){return this.domManip(arguments, function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this)}})},after: function(){return this.domManip(arguments, function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling)}})},remove: function(selector,keepData){var elem,elems=selector?jQuery.filter(selector,this):this,i=0;for(;(elem=elems[i])!=null;i++){if(!keepData&&elem.nodeType===1){jQuery.cleanData(getAll(elem))}
if(elem.parentNode){if(keepData&&jQuery.contains(elem.ownerDocument,elem)){setGlobalEval(getAll(elem,"script"))}
elem.parentNode.removeChild(elem)}}
return this},empty: function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false))}
while(elem.firstChild){elem.removeChild(elem.firstChild)}
if(elem.options&&jQuery.nodeName(elem,"select")){elem.options.length=0}}
return this},clone: function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map( function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents)})},html: function(value){return jQuery.access(this, function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined){return elem.nodeType===1?elem.innerHTML.replace(rinlinejQuery,""):undefined}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&(jQuery.support.htmlSerialize||!rnoshimcache.test(value))&&(jQuery.support.leadingWhitespace||!rleadingWhitespace.test(value))&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value}}
elem=0} catch(e){}}
if(elem){this.empty().append(value)}},null,value,arguments.length)},replaceWith: function(){var
args=jQuery.map(this, function(elem){return [elem.nextSibling,elem.parentNode]}),i=0;this.domManip(arguments, function(elem){var next=args[i++],parent=args[i++];if(parent){if(next&&next.parentNode!==parent){next=this.nextSibling}
jQuery(this).remove();parent.insertBefore(elem,next)}},true);return i?this:this.remove()},detach: function(selector){return this.remove(selector,true)},domManip: function(args,callback,allowIntersection){args=core_concat.apply([],args);var first,node,hasScripts,scripts,doc,fragment,i=0,l=this.length,set=this,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);if(isFunction||!(l<=1||typeof value!=="string"||jQuery.support.checkClone||!rchecked.test(value))){return this.each(function(index){var self=set.eq(index);if(isFunction){args[0]=value.call(this,index,self.html())}
self.domManip(args,callback,allowIntersection)})}
if(l){fragment=jQuery.buildFragment(args,this[0].ownerDocument,false,!allowIntersection&&this);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first}
if(first){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"))}}
callback.call(this[i],node,i)}
if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!jQuery._data(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){jQuery._evalUrl(node.src)} else{jQuery.globalEval((node.text||node.textContent||node.innerHTML||"").replace(rcleanScript,""))}}}}
fragment=first=null}}
return this}});
function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType===1?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem}
function disableScript(elem){elem.type=(jQuery.find.attr(elem,"type")!==null)+"/"+elem.type;return elem}
function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1]} else{elem.removeAttribute("type")}
return elem}
function setGlobalEval(elems,refElements){var elem,i=0;for(;(elem=elems[i])!=null;i++){jQuery._data(elem,"globalEval",!refElements||jQuery._data(refElements[i],"globalEval"))}}
function cloneCopyEvent(src,dest){if(dest.nodeType!==1||!jQuery.hasData(src)){return}
var type,i,l,oldData=jQuery._data(src),curData=jQuery._data(dest,oldData),events=oldData.events;if(events){delete curData.handle;curData.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i])}}}
if(curData.data){curData.data=jQuery.extend({},curData.data)}}
function fixCloneNodeIssues(src,dest){var nodeName,e,data;if(dest.nodeType!==1){return}
nodeName=dest.nodeName.toLowerCase();if(!jQuery.support.noCloneEvent&&dest[jQuery.expando]){data=jQuery._data(dest);for(e in data.events){jQuery.removeEvent(dest,e,data.handle)}
dest.removeAttribute(jQuery.expando)}
if(nodeName==="script"&&dest.text!==src.text){disableScript(dest).text=src.text;restoreScript(dest)} else if(nodeName==="object"){if(dest.parentNode){dest.outerHTML=src.outerHTML}
if(jQuery.support.html5Clone&&(src.innerHTML&&!jQuery.trim(dest.innerHTML))){dest.innerHTML=src.innerHTML}} else if(nodeName==="input"&&manipulation_rcheckableType.test(src.type)){dest.defaultChecked=dest.checked=src.checked;if(dest.value!==src.value){dest.value=src.value}} else if(nodeName==="option"){dest.defaultSelected=dest.selected=src.defaultSelected} else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue}}
jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"}, function(name,original){jQuery.fn[name]=function(selector){var elems,i=0,ret=[],insert=jQuery(selector),last=insert.length-1;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);core_push.apply(ret,elems.get())}
return this.pushStack(ret)}});
function getAll(context,tag){var elems,elem,i=0,found=typeof context.getElementsByTagName!==core_strundefined?context.getElementsByTagName(tag||"*"):typeof context.querySelectorAll!==core_strundefined?context.querySelectorAll(tag||"*"):undefined;if(!found){for(found=[],elems=context.childNodes||context;(elem=elems[i])!=null;i++){if(!tag||jQuery.nodeName(elem,tag)){found.push(elem)} else{jQuery.merge(found,getAll(elem,tag))}}}
return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],found):found}
function fixDefaultChecked(elem){if(manipulation_rcheckableType.test(elem.type)){elem.defaultChecked=elem.checked}}
jQuery.extend({clone: function(elem,dataAndEvents,deepDataAndEvents){var destElements,node,clone,i,srcElements,inPage=jQuery.contains(elem.ownerDocument,elem);if(jQuery.support.html5Clone||jQuery.isXMLDoc(elem)||!rnoshimcache.test("<"+elem.nodeName+">")){clone=elem.cloneNode(true)} else{fragmentDiv.innerHTML=elem.outerHTML;fragmentDiv.removeChild(clone=fragmentDiv.firstChild)}
if((!jQuery.support.noCloneEvent||!jQuery.support.noCloneChecked)&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);srcElements=getAll(elem);for(i=0;(node=srcElements[i])!=null;++i){if(destElements[i]){fixCloneNodeIssues(node,destElements[i])}}}
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0;(node=srcElements[i])!=null;i++){cloneCopyEvent(node,destElements[i])}} else{cloneCopyEvent(elem,clone)}}
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"))}
destElements=srcElements=node=null;return clone},buildFragment: function(elems,context,scripts,selection){var j,elem,contains,tmp,tag,tbody,wrap,l=elems.length,safe=createSafeFragment(context),nodes=[],i=0;for(;i<l;i++){elem=elems[i];if(elem||elem===0){if(jQuery.type(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem)} else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem))} else{tmp=tmp||safe.appendChild(context.createElement("div"));tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+elem.replace(rxhtmlTag,"<$1></$2>")+wrap[2];j=wrap[0];while(j--){tmp=tmp.lastChild}
if(!jQuery.support.leadingWhitespace&&rleadingWhitespace.test(elem)){nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]))}
if(!jQuery.support.tbody){elem=tag==="table"&&!rtbody.test(elem)?tmp.firstChild:wrap[1]==="<table>"&&!rtbody.test(elem)?tmp:0;j=elem&&elem.childNodes.length;while(j--){if(jQuery.nodeName((tbody=elem.childNodes[j]),"tbody")&&!tbody.childNodes.length){elem.removeChild(tbody)}}}
jQuery.merge(nodes,tmp.childNodes);tmp.textContent="";while(tmp.firstChild){tmp.removeChild(tmp.firstChild)}
tmp=safe.lastChild}}}
if(tmp){safe.removeChild(tmp)}
if(!jQuery.support.appendChecked){jQuery.grep(getAll(nodes,"input"),fixDefaultChecked)}
i=0;while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)!==-1){continue}
contains=jQuery.contains(elem.ownerDocument,elem);tmp=getAll(safe.appendChild(elem),"script");if(contains){setGlobalEval(tmp)}
if(scripts){j=0;while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem)}}}}
tmp=null;return safe},cleanData: function(elems,acceptData){var elem,type,id,data,i=0,internalKey=jQuery.expando,cache=jQuery.cache,deleteExpando=jQuery.support.deleteExpando,special=jQuery.event.special;for(;(elem=elems[i])!=null;i++){if(acceptData||jQuery.acceptData(elem)){id=elem[internalKey];data=id&&cache[id];if(data){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type)} else{jQuery.removeEvent(elem,type,data.handle)}}}
if(cache[id]){delete cache[id];if(deleteExpando){delete elem[internalKey]} else if(typeof elem.removeAttribute!==core_strundefined){elem.removeAttribute(internalKey)} else{elem[internalKey]=null}
core_deletedIds.push(id)}}}}},_evalUrl: function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",async:false,global:false,"throws":true})}});jQuery.fn.extend({wrapAll: function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i))})}
if(this[0]){var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0])}
wrap.map(function(){var elem=this;while(elem.firstChild&&elem.firstChild.nodeType===1){elem=elem.firstChild}
return elem}).append(this)}
return this},wrapInner: function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i))})}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html)} else{self.append(html)}})},wrap: function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html)})},unwrap: function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes)}}).end()}});var iframe,getStyles,curCSS,ralpha=/alpha\([^)]*\)/i,ropacity=/opacity\s*=\s*([^)]*)/,rposition=/^(top|right|bottom|left)$/,rdisplayswap=/^(none|table(?!-c[ea]).+)/,rmargin=/^margin/,rnumsplit=new RegExp("^("+core_pnum+")(.*)$","i"),rnumnonpx=new RegExp("^("+core_pnum+")(?!px)[a-z%]+$","i"),rrelNum=new RegExp("^([+-])=("+core_pnum+")","i"),elemdisplay={BODY:"block"},cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:0,fontWeight:400},cssExpand=["Top","Right","Bottom","Left"],cssPrefixes=["Webkit","O","Moz","ms"];
function vendorPropName(style,name){if(name in style){return name}
var capName=name.charAt(0).toUpperCase()+name.slice(1),origName=name,i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in style){return name}}
return origName}
function isHidden(elem,el){elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem)}
function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue}
values[index]=jQuery._data(elem,"olddisplay");display=elem.style.display;if(show){if(!values[index]&&display==="none"){elem.style.display=""}
if(elem.style.display===""&&isHidden(elem)){values[index]=jQuery._data(elem,"olddisplay",css_defaultDisplay(elem.nodeName))}} else{if(!values[index]){hidden=isHidden(elem);if(display&&display!=="none"||!hidden){jQuery._data(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"))}}}}
for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue}
if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none"}}
return elements}
jQuery.fn.extend({css: function(name,value){return jQuery.access(this, function(elem,name,value){var len,styles,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles)}
return map}
return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name)},name,value,arguments.length>1)},show: function(){return showHide(this,true)},hide: function(){return showHide(this)},toggle: function(state){if(typeof state==="boolean"){return state?this.show():this.hide()}
return this.each(function(){if(isHidden(this)){jQuery(this).show()} else{jQuery(this).hide()}})}});jQuery.extend({cssHooks:{opacity:{get: function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret}}}},cssNumber:{"columnCount":true,"fillOpacity":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{"float":jQuery.support.cssFloat?"cssFloat":"styleFloat"},style: function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return}
var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rrelNum.exec(value))){value=(ret[1]+1) * ret[2]+parseFloat(jQuery.css(elem,name));type="number"}
if(value==null||type==="number"&&isNaN(value)){return}
if(type==="number"&&!jQuery.cssNumber[origName]){value+="px"}
if(!jQuery.support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit"}
if(!hooks||!("set" in hooks)||(value=hooks.set(elem,value,extra))!==undefined){try{style[name]=value} catch(e){}}} else{if(hooks&&"get" in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret}
return style[name]}},css: function(elem,name,extra,styles){var num,val,hooks,origName=jQuery.camelCase(name);name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(elem.style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get" in hooks){val=hooks.get(elem,true,extra)}
if(val===undefined){val=curCSS(elem,name,styles)}
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name]}
if(extra===""||extra){num=parseFloat(val);return extra===true||jQuery.isNumeric(num)?num||0:val}
return val}});if(window.getComputedStyle){getStyles=function(elem){return window.getComputedStyle(elem,null)};curCSS=function(elem,name,_computed){var width,minWidth,maxWidth,computed=_computed||getStyles(elem),ret=computed?computed.getPropertyValue(name)||computed[name]:undefined,style=elem.style;if(computed){if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name)}
if(rnumnonpx.test(ret)&&rmargin.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth}}
return ret}} else if(document.documentElement.currentStyle){getStyles=function(elem){return elem.currentStyle};curCSS=function(elem,name,_computed){var left,rs,rsLeft,computed=_computed||getStyles(elem),ret=computed?computed[name]:undefined,style=elem.style;if(ret==null&&style&&style[name]){ret=style[name]}
if(rnumnonpx.test(ret)&&!rposition.test(name)){left=style.left;rs=elem.runtimeStyle;rsLeft=rs&&rs.left;if(rsLeft){rs.left=elem.currentStyle.left}
style.left=name==="fontSize"?"1em":ret;ret=style.pixelLeft+"px";style.left=left;if(rsLeft){rs.left=rsLeft}}
return ret===""?"auto":ret}}
function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);return matches?Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):value}
function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?4:name==="width"?1:0,val=0;for(;i<4;i+=2){if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles)}
if(isBorderBox){if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles)}
if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles)}} else{val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles)}}}
return val}
function getWidthOrHeight(elem,name,extra){var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box";if(val<=0||val==null){val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name]}
if(rnumnonpx.test(val)){return val}
valueIsBorderBox=isBorderBox&&(jQuery.support.boxSizingReliable||val===elem.style[name]);val=parseFloat(val)||0}
return(val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles))+"px"}
function css_defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc);if(display==="none"||!display){iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(doc.documentElement);doc=(iframe[0].contentWindow||iframe[0].contentDocument).document;doc.write("<!doctype html><html><body>");doc.close();display=actualDisplay(nodeName,doc);iframe.detach()}
elemdisplay[nodeName]=display}
return display}
function actualDisplay(name,doc){var elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=jQuery.css(elem[0],"display");elem.remove();return display}
jQuery.each(["height","width"], function(i,name){jQuery.cssHooks[name]={get: function(elem,computed,extra){if(computed){return elem.offsetWidth===0&&rdisplayswap.test(jQuery.css(elem,"display"))?jQuery.swap(elem,cssShow, function(){return getWidthOrHeight(elem,name,extra)}):getWidthOrHeight(elem,name,extra)}},set: function(elem,value,extra){var styles=extra&&getStyles(elem);return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,jQuery.support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles):0)}}});if(!jQuery.support.opacity){jQuery.cssHooks.opacity={get: function(elem,computed){return ropacity.test((computed&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?(0.01 * parseFloat(RegExp.$1))+"":computed?"1":""},set: function(elem,value){var style=elem.style,currentStyle=elem.currentStyle,opacity=jQuery.isNumeric(value)?"alpha(opacity="+value * 100+")":"",filter=currentStyle&&currentStyle.filter||style.filter||"";style.zoom=1;if((value>=1||value==="")&&jQuery.trim(filter.replace(ralpha,""))===""&&style.removeAttribute){style.removeAttribute("filter");if(value===""||currentStyle&&!currentStyle.filter){return}}
style.filter=ralpha.test(filter)?filter.replace(ralpha,opacity):filter+" "+opacity}}}
jQuery(function(){if(!jQuery.support.reliableMarginRight){jQuery.cssHooks.marginRight={get: function(elem,computed){if(computed){return jQuery.swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"])}}}}
if(!jQuery.support.pixelPosition&&jQuery.fn.position){jQuery.each(["top","left"], function(i,prop){jQuery.cssHooks[prop]={get: function(elem,computed){if(computed){computed=curCSS(elem,prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed}}}})}});if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.hidden=function(elem){return elem.offsetWidth<=0&&elem.offsetHeight<=0||(!jQuery.support.reliableHiddenOffsets&&((elem.style&&elem.style.display)||jQuery.css(elem,"display"))==="none")};jQuery.expr.filters.visible=function(elem){return!jQuery.expr.filters.hidden(elem)}}
jQuery.each({margin:"",padding:"",border:"Width"}, function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand: function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0]}
return expanded}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber}});var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;jQuery.fn.extend({serialize: function(){return jQuery.param(this.serializeArray())},serializeArray: function(){return this.map(function(){var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this}).filter(function(){var type=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!manipulation_rcheckableType.test(type))}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val, function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")}}):{name:elem.name,value:val.replace(rCRLF,"\r\n")}}).get()}});jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():(value==null?"":value);s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value)};if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional}
if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a, function(){add(this.name,this.value)})} else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add)}}
return s.join("&").replace(r20,"+")};
function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){jQuery.each(obj, function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v)} else{buildParams(prefix+"["+(typeof v==="object"?i:"")+"]",v,traditional,add)}})} else if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add)}} else{add(prefix,obj)}}
jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "), function(i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name)}});jQuery.fn.extend({hover: function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver)},bind: function(types,data,fn){return this.on(types,null,data,fn)},unbind: function(types,fn){return this.off(types,null,fn)},delegate: function(selector,types,data,fn){return this.on(types,selector,data,fn)},undelegate: function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn)}});var
ajaxLocParts,ajaxLocation,ajax_nonce=jQuery.now(),ajax_rquery=/\?/,rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,_load=jQuery.fn.load,prefilters={},transports={},allTypes="*/".concat("*");try{ajaxLocation=location.href} catch(e){ajaxLocation=document.createElement("a");ajaxLocation.href="";ajaxLocation=ajaxLocation.href}
ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];
function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*"}
var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(core_rnotwhite)||[];if(jQuery.isFunction(func)){while((dataType=dataTypes[i++])){if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func)} else{(structure[dataType]=structure[dataType]||[]).push(func)}}}}}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);
function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[], function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false} else if(seekingTransport){return!(selected=dataTypeOrTransport)}});return selected}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*")}
function ajaxExtend(target,src){var deep,key,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key]}}
if(deep){jQuery.extend(true,target,deep)}
return target}
jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments)}
var selector,response,type,self=this,off=url.indexOf(" ");if(off>=0){selector=url.slice(off,url.length);url=url.slice(0,off)}
if(jQuery.isFunction(params)){callback=params;params=undefined} else if(params&&typeof params==="object"){type="POST"}
if(self.length>0){jQuery.ajax({url:url,type:type,dataType:"html",data:params}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText)}).complete(callback&& function(jqXHR,status){self.each(callback,response||[jqXHR.responseText,status,jqXHR])})}
return this};jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"], function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn)}});jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup: function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target)},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax: function(url,options){if(typeof url==="object"){options=url;url=undefined}
options=options||{};var
parts,i,cacheURL,responseHeadersString,timeoutTimer,fireGlobals,transport,responseHeaders,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,getResponseHeader: function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2]}}
match=responseHeaders[key.toLowerCase()]}
return match==null?null:match},getAllResponseHeaders: function(){return state===2?responseHeadersString:null},setRequestHeader: function(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value}
return this},overrideMimeType: function(type){if(!state){s.mimeType=type}
return this},statusCode: function(map){var code;if(map){if(state<2){for(code in map){statusCode[code]=[statusCode[code],map[code]]}} else{jqXHR.always(map[jqXHR.status])}}
return this},abort: function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText)}
done(0,finalText);return this}};deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;s.url=((url||s.url||ajaxLocation)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(core_rnotwhite)||[""];if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());s.crossDomain=!!(parts&&(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?"80":"443"))!==(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443"))))}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional)}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(state===2){return jqXHR}
fireGlobals=s.global;if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart")}
s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url;if(!s.hasContent){if(s.data){cacheURL=(s.url+=(ajax_rquery.test(cacheURL)?"&":"?")+s.data);delete s.data}
if(s.cache===false){s.url=rts.test(cacheURL)?cacheURL.replace(rts,"$1_="+ajax_nonce++):cacheURL+(ajax_rquery.test(cacheURL)?"&":"?")+"_="+ajax_nonce++}}
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL])}
if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL])}}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType)}
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i])}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){return jqXHR.abort()}
strAbort="abort";for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i])}
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport")} else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s])}
if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout")},s.timeout)}
try{state=1;transport.send(requestHeaders,done)} catch(e){if(state<2){done(-1,e)} else{throw e}}}
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(state===2){return}
state=2;if(timeoutTimer){clearTimeout(timeoutTimer)}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304;if(responses){response=ajaxHandleResponses(s,jqXHR,responses)}
response=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified}
modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified}}
if(status===204||s.type==="HEAD"){statusText="nocontent"} else if(status===304){statusText="notmodified"} else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error}} else{error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0}}}
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR])} else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error])}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error])}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop")}}}
return jqXHR},getJSON: function(url,data,callback){return jQuery.get(url,data,callback,"json")},getScript: function(url,callback){return jQuery.get(url,undefined,callback,"script")}});jQuery.each(["get","post"], function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined}
return jQuery.ajax({url:url,type:method,dataType:type,data:data,success:callback})}});
function ajaxHandleResponses(s,jqXHR,responses){var firstDataType,ct,finalDataType,type,contents=s.contents,dataTypes=s.dataTypes;while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type")}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break}}}
if(dataTypes[0] in responses){finalDataType=dataTypes[0]} else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break}
if(!firstDataType){firstDataType=type}}
finalDataType=finalDataType||firstDataType}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType)}
return responses[finalDataType]}}
function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv]}}
current=dataTypes.shift();while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response}
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType)}
prev=current;current=dataTypes.shift();if(current){if(current==="*"){current=prev} else if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===true){conv=converters[conv2]} else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1])}
break}}}}
if(conv!==true){if(conv&&s["throws"]){response=conv(response)} else{try{response=conv(response)} catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current}}}}}}}
return{state:"success",data:response}}
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script": function(text){jQuery.globalEval(text);return text}}});jQuery.ajaxPrefilter("script", function(s){if(s.cache===undefined){s.cache=false}
if(s.crossDomain){s.type="GET";s.global=false}});jQuery.ajaxTransport("script", function(s){if(s.crossDomain){var script,head=document.head||jQuery("head")[0]||document.documentElement;return{send: function(_,callback){script=document.createElement("script");script.async=true;if(s.scriptCharset){script.charset=s.scriptCharset}
script.src=s.url;script.onload=script.onreadystatechange=function(_,isAbort){if(isAbort||!script.readyState||/loaded|complete/.test(script.readyState)){script.onload=script.onreadystatechange=null;if(script.parentNode){script.parentNode.removeChild(script)}
script=null;if(!isAbort){callback(200,"success")}}};head.insertBefore(script,head.firstChild)},abort: function(){if(script){script.onload(undefined,true)}}}}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback: function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(ajax_nonce++));this[callback]=true;return callback}});jQuery.ajaxPrefilter("json jsonp", function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&!(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName)} else if(s.jsonp!==false){s.url+=(ajax_rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName}
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called")}
return responseContainer[0]};s.dataTypes[0]="json";overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments};jqXHR.always(function(){window[callbackName]=overwritten;if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName)}
if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0])}
responseContainer=overwritten=undefined});return "script"}});var xhrCallbacks,xhrSupported,xhrId=0,xhrOnUnloadAbort=window.ActiveXObject&& function(){var key;for(key in xhrCallbacks){xhrCallbacks[key](undefined,true)}};
function createStandardXHR(){try{return new window.XMLHttpRequest()} catch(e){}}
function createActiveXHR(){try{return new window.ActiveXObject("Microsoft.XMLHTTP")} catch(e){}}
jQuery.ajaxSettings.xhr=window.ActiveXObject?
function(){return!this.isLocal&&createStandardXHR()||createActiveXHR()}:createStandardXHR;xhrSupported=jQuery.ajaxSettings.xhr();jQuery.support.cors=!!xhrSupported&&("withCredentials" in xhrSupported);xhrSupported=jQuery.support.ajax=!!xhrSupported;if(xhrSupported){jQuery.ajaxTransport(function(s){if(!s.crossDomain||jQuery.support.cors){var callback;return{send: function(headers,complete){var handle,i,xhr=s.xhr();if(s.username){xhr.open(s.type,s.url,s.async,s.username,s.password)} else{xhr.open(s.type,s.url,s.async)}
if(s.xhrFields){for(i in s.xhrFields){xhr[i]=s.xhrFields[i]}}
if(s.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(s.mimeType)}
if(!s.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest"}
try{for(i in headers){xhr.setRequestHeader(i,headers[i])}} catch(err){}
xhr.send((s.hasContent&&s.data)||null);callback=function(_,isAbort){var status,responseHeaders,statusText,responses;try{if(callback&&(isAbort||xhr.readyState===4)){callback=undefined;if(handle){xhr.onreadystatechange=jQuery.noop;if(xhrOnUnloadAbort){delete xhrCallbacks[handle]}}
if(isAbort){if(xhr.readyState!==4){xhr.abort()}} else{responses={};status=xhr.status;responseHeaders=xhr.getAllResponseHeaders();if(typeof xhr.responseText==="string"){responses.text=xhr.responseText}
try{statusText=xhr.statusText} catch(e){statusText=""}
if(!status&&s.isLocal&&!s.crossDomain){status=responses.text?200:404} else if(status===1223){status=204}}}} catch(firefoxAccessException){if(!isAbort){complete(-1,firefoxAccessException)}}
if(responses){complete(status,statusText,responses,responseHeaders)}};if(!s.async){callback()} else if(xhr.readyState===4){setTimeout(callback)} else{handle=++xhrId;if(xhrOnUnloadAbort){if(!xhrCallbacks){xhrCallbacks={};jQuery(window).unload(xhrOnUnloadAbort)}
xhrCallbacks[handle]=callback}
xhr.onreadystatechange=callback}},abort: function(){if(callback){callback(undefined,true)}}}}})}
var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([+-])=|)("+core_pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,value){var tween=this.createTween(prop,value),target=tween.cur(),parts=rfxnum.exec(value),unit=parts&&parts[3]||(jQuery.cssNumber[prop]?"":"px"),start=(jQuery.cssNumber[prop]||unit!=="px"&&+target)&&rfxnum.exec(jQuery.css(tween.elem,prop)),scale=1,maxIterations=20;if(start&&start[3]!==unit){unit=unit||start[3];parts=parts||[];start=+target||1;do{scale=scale||".5";start=start/scale;jQuery.style(tween.elem,prop,start+unit)} while(scale!==(scale=tween.cur()/target)&&scale!==1&&--maxIterations)}
if(parts){start=tween.start=+start||+target||0;tween.unit=unit;tween.end=parts[1]?start+(parts[1]+1) * parts[2]:+parts[2]}
return tween}]};
function createFxNow(){setTimeout(function(){fxNow=undefined});return(fxNow=jQuery.now())}
function createTween(value,prop,animation){var tween,collection=(tweeners[prop]||[]).concat(tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if((tween=collection[index].call(animation,prop,value))){return tween}}}
function Animation(elem,properties,options){var result,stopped,index=0,length=animationPrefilters.length,deferred=jQuery.Deferred().always( function(){delete tick.elem}),tick=function(){if(stopped){return false}
var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length ;index++){animation.tweens[index].run(percent)}
deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining} else{deferred.resolveWith(elem,[animation]);return false}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{}},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween: function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween},stop: function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return this}
stopped=true;for(;index<length ;index++){animation.tweens[index].run(1)}
if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd])} else{deferred.rejectWith(elem,[animation,gotoEnd])}
return this}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length ;index++){result=animationPrefilters[index].call(animation,elem,props,animation.opts);if(result){return result}}
jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation)}
jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)}
function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0]}
if(index!==name){props[name]=value;delete props[index]}
hooks=jQuery.cssHooks[name];if(hooks&&"expand" in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing}}} else{specialEasing[name]=easing}}}
jQuery.Animation=jQuery.extend(Animation,{tweener: function(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"]} else{props=props.split(" ")}
var prop,index=0,length=props.length;for(;index<length ;index++){prop=props[index];tweeners[prop]=tweeners[prop]||[];tweeners[prop].unshift(callback)}},prefilter: function(callback,prepend){if(prepend){animationPrefilters.unshift(callback)} else{animationPrefilters.push(callback)}}});
function defaultPrefilter(elem,props,opts){var prop,value,toggle,tween,hooks,oldfire,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=jQuery._data(elem,"fxshow");if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire()}}}
hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire()}})})}
if(elem.nodeType===1&&("height" in props||"width" in props)){opts.overflow=[style.overflow,style.overflowX,style.overflowY];if(jQuery.css(elem,"display")==="inline"&&jQuery.css(elem,"float")==="none"){if(!jQuery.support.inlineBlockNeedsLayout||css_defaultDisplay(elem.nodeName)==="inline"){style.display="inline-block"} else{style.zoom=1}}}
if(opts.overflow){style.overflow="hidden";if(!jQuery.support.shrinkWrapBlocks){anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2]})}}
for(prop in props){value=props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){continue}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop)}}
if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden" in dataShow){hidden=dataShow.hidden}} else{dataShow=jQuery._data(elem,"fxshow",{})}
if(toggle){dataShow.hidden=!hidden}
if(hidden){jQuery(elem).show()} else{anim.done(function(){jQuery(elem).hide()})}
anim.done(function(){var prop;jQuery._removeData(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop])}});for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0}}}}}
function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing)}
jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init: function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||"swing";this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px")},cur: function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this)},run: function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration * percent,0,1,this.options.duration)} else{this.pos=eased=percent}
this.now=(this.end-this.start) * eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this)}
if(hooks&&hooks.set){hooks.set(this)} else{Tween.propHooks._default.set(this)}
return this}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get: function(tween){var result;if(tween.elem[tween.prop]!=null&&(!tween.elem.style||tween.elem.style[tween.prop]==null)){return tween.elem[tween.prop]}
result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result},set: function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween)} else if(tween.elem.style&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit)} else{tween.elem[tween.prop]=tween.now}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set: function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now}}};jQuery.each(["toggle","show","hide"], function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback)}});jQuery.fn.extend({fadeTo: function(speed,to,easing,callback){return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback)},animate: function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty||jQuery._data(this,"finish")){anim.stop(true)}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation)},stop: function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd)};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined}
if(clearQueue&&type!==false){this.queue(type||"fx",[])}
return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=jQuery._data(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index])}} else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index])}}}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1)}}
if(dequeue||!gotoEnd){jQuery.dequeue(this,type)}})},finish: function(type){if(type!==false){type=type||"fx"}
return this.each(function(){var index,data=jQuery._data(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.finish=true;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true)}
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1)}}
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this)}}
delete data.finish})}});
function genFx(type,includeWidth){var which,attrs={height:type},i=0;includeWidth=includeWidth?1:0;for(;i<4 ;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type}
if(includeWidth){attrs.opacity=attrs.width=type}
return attrs}
jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}}, function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback)}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;if(opt.queue==null||opt.queue===true){opt.queue="fx"}
opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this)}
if(opt.queue){jQuery.dequeue(this,opt.queue)}};return opt};jQuery.easing={linear: function(p){return p},swing: function(p){return 0.5-Math.cos(p*Math.PI)/2}};jQuery.timers=[];jQuery.fx=Tween.prototype.init;jQuery.fx.tick=function(){var timer,timers=jQuery.timers,i=0;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1)}}
if(!timers.length){jQuery.fx.stop()}
fxNow=undefined};jQuery.fx.timer=function(timer){if(timer()&&jQuery.timers.push(timer)){jQuery.fx.start()}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval)}};jQuery.fx.stop=function(){clearInterval(timerId);timerId=null};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fx.step={};if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers, function(fn){return elem===fn.elem}).length}}
jQuery.fn.offset=function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i)})}
var docElem,win,box={top:0,left:0},elem=this[0],doc=elem&&elem.ownerDocument;if(!doc){return}
docElem=doc.documentElement;if(!jQuery.contains(docElem,elem)){return box}
if(typeof elem.getBoundingClientRect!==core_strundefined){box=elem.getBoundingClientRect()}
win=getWindow(doc);return{top:box.top+(win.pageYOffset||docElem.scrollTop)-(docElem.clientTop||0),left:box.left+(win.pageXOffset||docElem.scrollLeft)-(docElem.clientLeft||0)}};jQuery.offset={setOffset: function(elem,options,i){var position=jQuery.css(elem,"position");if(position==="static"){elem.style.position="relative"}
var curElem=jQuery(elem),curOffset=curElem.offset(),curCSSTop=jQuery.css(elem,"top"),curCSSLeft=jQuery.css(elem,"left"),calculatePosition=(position==="absolute"||position==="fixed")&&jQuery.inArray("auto",[curCSSTop,curCSSLeft])>-1,props={},curPosition={},curTop,curLeft;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left} else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0}
if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset)}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft}
if("using" in options){options.using.call(elem,props)} else{curElem.css(props)}}};jQuery.fn.extend({position: function(){if(!this[0]){return}
var offsetParent,offset,parentOffset={top:0,left:0},elem=this[0];if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect()} else{offsetParent=this.offsetParent();offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset()}
parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true)}
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)}},offsetParent: function(){return this.map(function(){var offsetParent=this.offsetParent||docElem;while(offsetParent&&(!jQuery.nodeName(offsetParent,"html")&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent}
return offsetParent||docElem})}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"}, function(method,prop){var top=/Y/.test(prop);jQuery.fn[method]=function(val){return jQuery.access(this, function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?(prop in win)?win[prop]:win.document.documentElement[method]:elem[method]}
if(win){win.scrollTo(!top?val:jQuery(win).scrollLeft(),top?val:jQuery(win).scrollTop())} else{elem[method]=val}},method,val,arguments.length,null)}});
function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false}
jQuery.each({Height:"height",Width:"width"}, function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name}, function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return jQuery.access(this, function(elem,type,value){var doc;if(jQuery.isWindow(elem)){return elem.document.documentElement["client"+name]}
if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name])}
return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra)},type,chainable?margin:undefined,chainable,null)}})});jQuery.fn.size=function(){return this.length};jQuery.fn.andSelf=jQuery.fn.addBack;if(typeof module==="object"&&module&&typeof module.exports==="object"){module.exports=jQuery} else{window.jQuery=window.$=jQuery;if(typeof define==="function"&&define.amd){define("jquery",[], function(){return jQuery})}}})(window);jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);jQuery.curCSS=jQuery.css;

/* - bootstrap.min.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/bootstrap.min.js?original=1
+function(d){var c='[data-dismiss="alert"]';var b=function(e){d(e).on("click",c,this.close)};b.prototype.close=function(j){var i=d(this);var g=i.attr("data-target");if(!g){g=i.attr("href");g=g&&g.replace(/.*(?=#[^\s]*$)/,"")}var h=d(g);if(j){j.preventDefault()}if(!h.length){h=i.hasClass("alert")?i:i.parent()}h.trigger(j=d.Event("close.bs.alert"));if(j.isDefaultPrevented()){return}h.removeClass("in");function f(){h.trigger("closed.bs.alert").remove()}d.support.transition&&h.hasClass("fade")?h.one(d.support.transition.end,f).emulateTransitionEnd(150):f()};var a=d.fn.alert;d.fn.alert=function(e){return this.each(function(){var g=d(this);var f=g.data("bs.alert");if(!f){g.data("bs.alert",(f=new b(this)))}if(typeof e=="string"){f[e].call(g)}})};d.fn.alert.Constructor=b;d.fn.alert.noConflict=function(){d.fn.alert=a;return this};d(document).on("click.bs.alert.data-api",c,b.prototype.close)}(jQuery);+function(c){var b=function(e,d){this.$element=c(e);this.options=c.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."};b.prototype.setState=function(g){var i="disabled";var e=this.$element;var h=e.is("input")?"val":"html";var f=e.data();g=g+"Text";if(!f.resetText){e.data("resetText",e[h]())}e[h](f[g]||this.options[g]);setTimeout(function(){g=="loadingText"?e.addClass(i).attr(i,i):e.removeClass(i).removeAttr(i)},0)};b.prototype.toggle=function(){var d=this.$element.closest('[data-toggle="buttons"]');if(d.length){var e=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");if(e.prop("type")==="radio"){d.find(".active").removeClass("active")}}this.$element.toggleClass("active")};var a=c.fn.button;c.fn.button=function(d){return this.each(function(){var g=c(this);var f=g.data("bs.button");var e=typeof d=="object"&&d;if(!f){g.data("bs.button",(f=new b(this,e)))}if(d=="toggle"){f.toggle()}else{if(d){f.setState(d)}}})};c.fn.button.Constructor=b;c.fn.button.noConflict=function(){c.fn.button=a;return this};c(document).on("click.bs.button.data-api","[data-toggle^=button]",function(f){var d=c(f.target);if(!d.hasClass("btn")){d=d.closest(".btn")}d.button("toggle");f.preventDefault()})}(jQuery);+function(b){var c=function(e,d){this.$element=b(e);this.$indicators=this.$element.find(".carousel-indicators");this.options=d;this.paused=this.sliding=this.interval=this.$active=this.$items=null;this.options.pause=="hover"&&this.$element.on("mouseenter",b.proxy(this.pause,this)).on("mouseleave",b.proxy(this.cycle,this))};c.DEFAULTS={interval:5000,pause:"hover",wrap:true};c.prototype.cycle=function(d){d||(this.paused=false);this.interval&&clearInterval(this.interval);this.options.interval&&!this.paused&&(this.interval=setInterval(b.proxy(this.next,this),this.options.interval));return this};c.prototype.getActiveIndex=function(){this.$active=this.$element.find(".item.active");this.$items=this.$active.parent().children();return this.$items.index(this.$active)};c.prototype.to=function(f){var e=this;var d=this.getActiveIndex();if(f>(this.$items.length-1)||f<0){return}if(this.sliding){return this.$element.one("slid",function(){e.to(f)})}if(d==f){return this.pause().cycle()}return this.slide(f>d?"next":"prev",b(this.$items[f]))};c.prototype.pause=function(d){d||(this.paused=true);if(this.$element.find(".next, .prev").length&&b.support.transition.end){this.$element.trigger(b.support.transition.end);this.cycle(true)}this.interval=clearInterval(this.interval);return this};c.prototype.next=function(){if(this.sliding){return}return this.slide("next")};c.prototype.prev=function(){if(this.sliding){return}return this.slide("prev")};c.prototype.slide=function(k,f){var m=this.$element.find(".item.active");var d=f||m[k]();var j=this.interval;var l=k=="next"?"left":"right";var g=k=="next"?"first":"last";var h=this;if(!d.length){if(!this.options.wrap){return}d=this.$element.find(".item")[g]()}this.sliding=true;j&&this.pause();var i=b.Event("slide.bs.carousel",{relatedTarget:d[0],direction:l});if(d.hasClass("active")){return}if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");this.$element.one("slid",function(){var e=b(h.$indicators.children()[h.getActiveIndex()]);e&&e.addClass("active")})}if(b.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(i);if(i.isDefaultPrevented()){return}d.addClass(k);d[0].offsetWidth;m.addClass(l);d.addClass(l);m.one(b.support.transition.end,function(){d.removeClass([k,l].join(" ")).addClass("active");m.removeClass(["active",l].join(" "));h.sliding=false;setTimeout(function(){h.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{this.$element.trigger(i);if(i.isDefaultPrevented()){return}m.removeClass("active");d.addClass("active");this.sliding=false;this.$element.trigger("slid")}j&&this.cycle();return this};var a=b.fn.carousel;b.fn.carousel=function(d){return this.each(function(){var h=b(this);var g=h.data("bs.carousel");var e=b.extend({},c.DEFAULTS,h.data(),typeof d=="object"&&d);var f=typeof d=="string"?d:e.slide;if(!g){h.data("bs.carousel",(g=new c(this,e)))}if(typeof d=="number"){g.to(d)}else{if(f){g[f]()}else{if(e.interval){g.pause().cycle()}}}})};b.fn.carousel.Constructor=c;b.fn.carousel.noConflict=function(){b.fn.carousel=a;return this};b(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(j){var i=b(this),f;var d=b(i.attr("data-target")||(f=i.attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,""));var g=b.extend({},d.data(),i.data());var h=i.attr("data-slide-to");if(h){g.interval=false}d.carousel(g);if(h=i.attr("data-slide-to")){d.data("bs.carousel").to(h)}j.preventDefault()});b(window).on("load",function(){b('[data-ride="carousel"]').each(function(){var d=b(this);d.carousel(d.data())})})}(jQuery);+function(g){var e=".dropdown-backdrop";var b="[data-toggle=dropdown]";var a=function(i){var h=g(i).on("click.bs.dropdown",this.toggle)};a.prototype.toggle=function(k){var j=g(this);if(j.is(".disabled, :disabled")){return}var i=f(j);var h=i.hasClass("open");d();if(!h){if("ontouchstart" in document.documentElement&&!i.closest(".navbar-nav").length){g('<div class="dropdown-backdrop"/>').insertAfter(g(this)).on("click",d)}i.trigger(k=g.Event("show.bs.dropdown"));if(k.isDefaultPrevented()){return}i.toggleClass("open").trigger("shown.bs.dropdown");j.focus()}return false};a.prototype.keydown=function(l){if(!/(38|40|27)/.test(l.keyCode)){return}var k=g(this);l.preventDefault();l.stopPropagation();if(k.is(".disabled, :disabled")){return}var j=f(k);var i=j.hasClass("open");if(!i||(i&&l.keyCode==27)){if(l.which==27){j.find(b).focus()}return k.click()}var m=g("[role=menu] li:not(.divider):visible a",j);if(!m.length){return}var h=m.index(m.filter(":focus"));if(l.keyCode==38&&h>0){h--}if(l.keyCode==40&&h<m.length-1){h++}if(!~h){h=0}m.eq(h).focus()};function d(){g(e).remove();g(b).each(function(i){var h=f(g(this));if(!h.hasClass("open")){return}h.trigger(i=g.Event("hide.bs.dropdown"));if(i.isDefaultPrevented()){return}h.removeClass("open").trigger("hidden.bs.dropdown")})}function f(j){var h=j.attr("data-target");if(!h){h=j.attr("href");h=h&&/#/.test(h)&&h.replace(/.*(?=#[^\s]*$)/,"")}var i=h&&g(h);return i&&i.length?i:j.parent()}var c=g.fn.dropdown;g.fn.dropdown=function(h){return this.each(function(){var j=g(this);var i=j.data("dropdown");if(!i){j.data("dropdown",(i=new a(this)))}if(typeof h=="string"){i[h].call(j)}})};g.fn.dropdown.Constructor=a;g.fn.dropdown.noConflict=function(){g.fn.dropdown=c;return this};g(document).on("click.bs.dropdown.data-api",d).on("click.bs.dropdown.data-api",".dropdown form",function(h){h.stopPropagation()}).on("click.bs.dropdown.data-api",b,a.prototype.toggle).on("keydown.bs.dropdown.data-api",b+", [role=menu]",a.prototype.keydown)}(jQuery);+function(c){var b=function(e,d){this.options=d;this.$element=c(e);this.$backdrop=this.isShown=null;if(this.options.remote){this.$element.load(this.options.remote)}};b.DEFAULTS={backdrop:true,keyboard:true,show:true};b.prototype.toggle=function(d){return this[!this.isShown?"show":"hide"](d)};b.prototype.show=function(g){var d=this;var f=c.Event("show.bs.modal",{relatedTarget:g});this.$element.trigger(f);if(this.isShown||f.isDefaultPrevented()){return}this.isShown=true;this.escape();this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',c.proxy(this.hide,this));this.backdrop(function(){var i=c.support.transition&&d.$element.hasClass("fade");if(!d.$element.parent().length){d.$element.appendTo(document.body)}d.$element.show();if(i){d.$element[0].offsetWidth}d.$element.addClass("in").attr("aria-hidden",false);d.enforceFocus();var h=c.Event("shown.bs.modal",{relatedTarget:g});i?d.$element.find(".modal-dialog").one(c.support.transition.end,function(){d.$element.focus().trigger(h)}).emulateTransitionEnd(300):d.$element.focus().trigger(h)})};b.prototype.hide=function(d){if(d){d.preventDefault()}d=c.Event("hide.bs.modal");this.$element.trigger(d);if(!this.isShown||d.isDefaultPrevented()){return}this.isShown=false;this.escape();c(document).off("focusin.bs.modal");this.$element.removeClass("in").attr("aria-hidden",true).off("click.dismiss.modal");c.support.transition&&this.$element.hasClass("fade")?this.$element.one(c.support.transition.end,c.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()};b.prototype.enforceFocus=function(){c(document).off("focusin.bs.modal").on("focusin.bs.modal",c.proxy(function(d){if(this.$element[0]!==d.target&&!this.$element.has(d.target).length){this.$element.focus()}},this))};b.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.bs.modal",c.proxy(function(d){d.which==27&&this.hide()},this))}else{if(!this.isShown){this.$element.off("keyup.dismiss.bs.modal")}}};b.prototype.hideModal=function(){var d=this;this.$element.hide();this.backdrop(function(){d.removeBackdrop();d.$element.trigger("hidden.bs.modal")})};b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null};b.prototype.backdrop=function(g){var f=this;var e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=c.support.transition&&e;this.$backdrop=c('<div class="modal-backdrop '+e+'" />').appendTo(document.body);this.$element.on("click.dismiss.modal",c.proxy(function(h){if(h.target!==h.currentTarget){return}this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this));if(d){this.$backdrop[0].offsetWidth}this.$backdrop.addClass("in");if(!g){return}d?this.$backdrop.one(c.support.transition.end,g).emulateTransitionEnd(150):g()}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");c.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(c.support.transition.end,g).emulateTransitionEnd(150):g()}else{if(g){g()}}}};var a=c.fn.modal;c.fn.modal=function(d,e){return this.each(function(){var h=c(this);var g=h.data("bs.modal");var f=c.extend({},b.DEFAULTS,h.data(),typeof d=="object"&&d);if(!g){h.data("bs.modal",(g=new b(this,f)))}if(typeof d=="string"){g[d](e)}else{if(f.show){g.show(e)}}})};c.fn.modal.Constructor=b;c.fn.modal.noConflict=function(){c.fn.modal=a;return this};c(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var h=c(this);var f=h.attr("href");var d=c(h.attr("data-target")||(f&&f.replace(/.*(?=#[^\s]+$)/,"")));var g=d.data("modal")?"toggle":c.extend({remote:!/#/.test(f)&&f},d.data(),h.data());i.preventDefault();d.modal(g,this).one("hide",function(){h.is(":visible")&&h.focus()})});c(document).on("show.bs.modal",".modal",function(){c(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){c(document.body).removeClass("modal-open")})}(jQuery);+function(c){var b=function(e,d){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null;this.init("tooltip",e,d)};b.DEFAULTS={animation:true,placement:"top",selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false};b.prototype.init=function(k,h,f){this.enabled=true;this.type=k;this.$element=c(h);this.options=this.getOptions(f);var j=this.options.trigger.split(" ");for(var g=j.length;g--;){var e=j[g];if(e=="click"){this.$element.on("click."+this.type,this.options.selector,c.proxy(this.toggle,this))}else{if(e!="manual"){var l=e=="hover"?"mouseenter":"focus";var d=e=="hover"?"mouseleave":"blur";this.$element.on(l+"."+this.type,this.options.selector,c.proxy(this.enter,this));this.$element.on(d+"."+this.type,this.options.selector,c.proxy(this.leave,this))}}}this.options.selector?(this._options=c.extend({},this.options,{trigger:"manual",selector:""})):this.fixTitle()};b.prototype.getDefaults=function(){return b.DEFAULTS};b.prototype.getOptions=function(d){d=c.extend({},this.getDefaults(),this.$element.data(),d);if(d.delay&&typeof d.delay=="number"){d.delay={show:d.delay,hide:d.delay}}return d};b.prototype.getDelegateOptions=function(){var d={};var e=this.getDefaults();this._options&&c.each(this._options,function(f,g){if(e[f]!=g){d[f]=g}});return d};b.prototype.enter=function(e){var d=e instanceof this.constructor?e:c(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(d.timeout);d.hoverState="in";if(!d.options.delay||!d.options.delay.show){return d.show()}d.timeout=setTimeout(function(){if(d.hoverState=="in"){d.show()}},d.options.delay.show)};b.prototype.leave=function(e){var d=e instanceof this.constructor?e:c(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(d.timeout);d.hoverState="out";if(!d.options.delay||!d.options.delay.hide){return d.hide()}d.timeout=setTimeout(function(){if(d.hoverState=="out"){d.hide()}},d.options.delay.hide)};b.prototype.show=function(){var n=c.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(n);if(n.isDefaultPrevented()){return}var j=this.tip();this.setContent();if(this.options.animation){j.addClass("fade")}var i=typeof this.options.placement=="function"?this.options.placement.call(this,j[0],this.$element[0]):this.options.placement;var r=/\s?auto?\s?/i;var s=r.test(i);if(s){i=i.replace(r,"")||"top"}j.detach().css({top:0,left:0,display:"block"}).addClass(i);this.options.container?j.appendTo(this.options.container):j.insertAfter(this.$element);var o=this.getPosition();var d=j[0].offsetWidth;var l=j[0].offsetHeight;if(s){var h=this.$element.parent();var g=i;var p=document.documentElement.scrollTop||document.body.scrollTop;var q=this.options.container=="body"?window.innerWidth:h.outerWidth();var m=this.options.container=="body"?window.innerHeight:h.outerHeight();var k=this.options.container=="body"?0:h.offset().left;i=i=="bottom"&&o.top+o.height+l-p>m?"top":i=="top"&&o.top-p-l<0?"bottom":i=="right"&&o.right+d>q?"left":i=="left"&&o.left-d<k?"right":i;j.removeClass(g).addClass(i)}var f=this.getCalculatedOffset(i,o,d,l);this.applyPlacement(f,i);this.$element.trigger("shown.bs."+this.type)}};b.prototype.applyPlacement=function(i,j){var g;var k=this.tip();var f=k[0].offsetWidth;var n=k[0].offsetHeight;var e=parseInt(k.css("margin-top"),10);var h=parseInt(k.css("margin-left"),10);if(isNaN(e)){e=0}if(isNaN(h)){h=0}i.top=i.top+e;i.left=i.left+h;k.offset(i).addClass("in");var d=k[0].offsetWidth;var l=k[0].offsetHeight;if(j=="top"&&l!=n){g=true;i.top=i.top+n-l}if(/bottom|top/.test(j)){var m=0;if(i.left<0){m=i.left*-2;i.left=0;k.offset(i);d=k[0].offsetWidth;l=k[0].offsetHeight}this.replaceArrow(m-f+d,d,"left")}else{this.replaceArrow(l-n,l,"top")}if(g){k.offset(i)}};b.prototype.replaceArrow=function(f,e,d){this.arrow().css(d,f?(50*(1-f/e)+"%"):"")};b.prototype.setContent=function(){var e=this.tip();var d=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](d);e.removeClass("fade in top bottom left right")};b.prototype.hide=function(){var f=this;var h=this.tip();var g=c.Event("hide.bs."+this.type);function d(){if(f.hoverState!="in"){h.detach()}}this.$element.trigger(g);if(g.isDefaultPrevented()){return}h.removeClass("in");c.support.transition&&this.$tip.hasClass("fade")?h.one(c.support.transition.end,d).emulateTransitionEnd(150):d();this.$element.trigger("hidden.bs."+this.type);return this};b.prototype.fixTitle=function(){var d=this.$element;if(d.attr("title")||typeof(d.attr("data-original-title"))!="string"){d.attr("data-original-title",d.attr("title")||"").attr("title","")}};b.prototype.hasContent=function(){return this.getTitle()};b.prototype.getPosition=function(){var d=this.$element[0];return c.extend({},(typeof d.getBoundingClientRect=="function")?d.getBoundingClientRect():{width:d.offsetWidth,height:d.offsetHeight},this.$element.offset())};b.prototype.getCalculatedOffset=function(d,g,e,f){return d=="bottom"?{top:g.top+g.height,left:g.left+g.width/2-e/2}:d=="top"?{top:g.top-f,left:g.left+g.width/2-e/2}:d=="left"?{top:g.top+g.height/2-f/2,left:g.left-e}:{top:g.top+g.height/2-f/2,left:g.left+g.width}};b.prototype.getTitle=function(){var f;var d=this.$element;var e=this.options;f=d.attr("data-original-title")||(typeof e.title=="function"?e.title.call(d[0]):e.title);return f};b.prototype.tip=function(){return this.$tip=this.$tip||c(this.options.template)};b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")};b.prototype.validate=function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}};b.prototype.enable=function(){this.enabled=true};b.prototype.disable=function(){this.enabled=false};b.prototype.toggleEnabled=function(){this.enabled=!this.enabled};b.prototype.toggle=function(f){var d=f?c(f.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;d.tip().hasClass("in")?d.leave(d):d.enter(d)};b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var a=c.fn.tooltip;c.fn.tooltip=function(d){return this.each(function(){var g=c(this);var f=g.data("bs.tooltip");var e=typeof d=="object"&&d;if(!f){g.data("bs.tooltip",(f=new b(this,e)))}if(typeof d=="string"){f[d]()}})};c.fn.tooltip.Constructor=b;c.fn.tooltip.noConflict=function(){c.fn.tooltip=a;return this}}(jQuery);+function(c){var b=function(e,d){this.init("popover",e,d)};if(!c.fn.tooltip){throw new Error("Popover requires tooltip.js")}b.DEFAULTS=c.extend({},c.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});b.prototype=c.extend({},c.fn.tooltip.Constructor.prototype);b.prototype.constructor=b;b.prototype.getDefaults=function(){return b.DEFAULTS};b.prototype.setContent=function(){var f=this.tip();var e=this.getTitle();var d=this.getContent();f.find(".popover-title")[this.options.html?"html":"text"](e);f.find(".popover-content")[this.options.html?"html":"text"](d);f.removeClass("fade top bottom left right in");if(!f.find(".popover-title").html()){f.find(".popover-title").hide()}};b.prototype.hasContent=function(){return this.getTitle()||this.getContent()};b.prototype.getContent=function(){var d=this.$element;var e=this.options;return d.attr("data-content")||(typeof e.content=="function"?e.content.call(d[0]):e.content)};b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};b.prototype.tip=function(){if(!this.$tip){this.$tip=c(this.options.template)}return this.$tip};var a=c.fn.popover;c.fn.popover=function(d){return this.each(function(){var g=c(this);var f=g.data("bs.popover");var e=typeof d=="object"&&d;if(!f){g.data("bs.popover",(f=new b(this,e)))}if(typeof d=="string"){f[d]()}})};c.fn.popover.Constructor=b;c.fn.popover.noConflict=function(){c.fn.popover=a;return this}}(jQuery);+function(c){var b=function(d){this.element=c(d)};b.prototype.show=function(){var j=this.element;var g=j.closest("ul:not(.dropdown-menu)");var f=j.data("target");if(!f){f=j.attr("href");f=f&&f.replace(/.*(?=#[^\s]*$)/,"")}if(j.parent("li").hasClass("active")){return}var h=g.find(".active:last a")[0];var i=c.Event("show.bs.tab",{relatedTarget:h});j.trigger(i);if(i.isDefaultPrevented()){return}var d=c(f);this.activate(j.parent("li"),g);this.activate(d,d.parent(),function(){j.trigger({type:"shown.bs.tab",relatedTarget:h})})};b.prototype.activate=function(f,e,i){var d=e.find("> .active");var h=i&&c.support.transition&&d.hasClass("fade");function g(){d.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");f.addClass("active");if(h){f[0].offsetWidth;f.addClass("in")}else{f.removeClass("fade")}if(f.parent(".dropdown-menu")){f.closest("li.dropdown").addClass("active")}i&&i()}h?d.one(c.support.transition.end,g).emulateTransitionEnd(150):g();d.removeClass("in")};var a=c.fn.tab;c.fn.tab=function(d){return this.each(function(){var f=c(this);var e=f.data("bs.tab");if(!e){f.data("bs.tab",(e=new b(this)))}if(typeof d=="string"){e[d]()}})};c.fn.tab.Constructor=b;c.fn.tab.noConflict=function(){c.fn.tab=a;return this};c(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(d){d.preventDefault();c(this).tab("show")})}(jQuery);+function(b){var c=function(e,d){this.$element=b(e);this.options=b.extend({},c.DEFAULTS,d);this.transitioning=null;if(this.options.parent){this.$parent=b(this.options.parent)}if(this.options.toggle){this.toggle()}};c.DEFAULTS={toggle:true};c.prototype.dimension=function(){var d=this.$element.hasClass("width");return d?"width":"height"};c.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in")){return}var e=b.Event("show.bs.collapse");this.$element.trigger(e);if(e.isDefaultPrevented()){return}var h=this.$parent&&this.$parent.find("> .panel > .in");if(h&&h.length){var f=h.data("bs.collapse");if(f&&f.transitioning){return}h.collapse("hide");f||h.data("bs.collapse",null)}var i=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[i](0);this.transitioning=1;var d=function(){this.$element.removeClass("collapsing").addClass("in")[i]("auto");this.transitioning=0;this.$element.trigger("shown.bs.collapse")};if(!b.support.transition){return d.call(this)}var g=b.camelCase(["scroll",i].join("-"));this.$element.one(b.support.transition.end,b.proxy(d,this)).emulateTransitionEnd(350)[i](this.$element[0][g])};c.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in")){return}var e=b.Event("hide.bs.collapse");this.$element.trigger(e);if(e.isDefaultPrevented()){return}var f=this.dimension();this.$element[f](this.$element[f]())[0].offsetHeight;this.$element.addClass("collapsing").removeClass("collapse").removeClass("in");this.transitioning=1;var d=function(){this.transitioning=0;this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};if(!b.support.transition){return d.call(this)}this.$element[f](0).one(b.support.transition.end,b.proxy(d,this)).emulateTransitionEnd(350)};c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var a=b.fn.collapse;b.fn.collapse=function(d){return this.each(function(){var g=b(this);var f=g.data("bs.collapse");var e=b.extend({},c.DEFAULTS,g.data(),typeof d=="object"&&d);if(!f){g.data("bs.collapse",(f=new c(this,e)))}if(typeof d=="string"){f[d]()}})};b.fn.collapse.Constructor=c;b.fn.collapse.noConflict=function(){b.fn.collapse=a;return this};b(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(j){var l=b(this),d;var k=l.attr("data-target")||j.preventDefault()||(d=l.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"");var f=b(k);var h=f.data("bs.collapse");var i=h?"toggle":l.data();var m=l.attr("data-parent");var g=m&&b(m);if(!h||!h.transitioning){if(g){g.find('[data-toggle=collapse][data-parent="'+m+'"]').not(l).addClass("collapsed")}l[f.hasClass("in")?"addClass":"removeClass"]("collapsed")}f.collapse(i)})}(jQuery);+function(b){function a(){var e=document.createElement("bootstrap");var d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in d){if(e.style[c]!==undefined){return{end:d[c]}}}}b.fn.emulateTransitionEnd=function(e){var d=false,c=this;b(this).one(b.support.transition.end,function(){d=true});var f=function(){if(!d){b(c).trigger(b.support.transition.end)}};setTimeout(f,e);return this};b(function(){b.support.transition=a()})}(jQuery);

/* - ++resource++senado.hpsenado/script/social.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/++resource++senado.hpsenado/script/social.js?original=1
$(function($){"use strict";$(document.body).on('click','.js-socialbar .js-popup', function(ev){ev.preventDefault()
var $this=$(this),url=this.href,$w=$(window),settings={height:$(this).data('height')||300,width:$(this).data('width')||700},y=($w.height()-settings.height)/2,x=($w.width()-settings.width)/2
window.open(url,'','width='+settings.width+', height='+settings.height+', left='+x+',top='+y).focus()})
$('[data-toggle="popover"]').popover()})


/* - bootstrap-lightbox.min.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/bootstrap-lightbox.min.js?original=1
!function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="lightbox"]',"click.dismiss.lightbox",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".lightbox-body").load(this.options.remote)};t.prototype=e.extend({},e.fn.modal.Constructor.prototype),t.prototype.constructor=t,t.prototype.enforceFocus=function(){var t=this;e(document).on("focusin.lightbox",function(e){t.$element[0]!==e.target&&!t.$element.has(e.target).length&&t.$element.focus()})},t.prototype.show=function(){var t=this,n=e.Event("show");this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.preloadSize(function(){t.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})})},t.prototype.hide=function(t){t&&t.preventDefault();var n=this;t=e.Event("hide"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,this.escape(),e(document).off("focusin.lightbox"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},t.prototype.escape=function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.lightbox",function(t){t.which==27&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.lightbox")},t.prototype.preloadSize=function(t){var n=e.Callbacks();t&&n.add(t);var r=this,i,s,o,u,a,f,l,c,h,p;i=e(window).height(),s=e(window).width(),o=parseInt(r.$element.find(".lightbox-content").css("padding-top"),10),u=parseInt(r.$element.find(".lightbox-content").css("padding-bottom"),10),a=parseInt(r.$element.find(".lightbox-content").css("padding-left"),10),f=parseInt(r.$element.find(".lightbox-content").css("padding-right"),10),l=r.$element.find(".lightbox-content").find("img:first"),c=new Image,c.onload=function(){c.width+a+f>=s&&(h=c.width,p=c.height,c.width=s-a-f,c.height=p/h*c.width),c.height+o+u>=i&&(h=c.width,p=c.height,c.height=i-o-u,c.width=h/p*c.height),r.$element.css({position:"fixed",width:c.width+a+f,height:c.height+o+u,top:i/2-(c.height+o+u)/2,left:"50%","margin-left":-1*(c.width+a+f)/2}),r.$element.find(".lightbox-content").css({width:c.width,height:c.height}),n.fire()},c.src=l.attr("src")};var n=e.fn.lightbox;e.fn.lightbox=function(n){return this.each(function(){var r=e(this),i=r.data("lightbox"),s=e.extend({},e.fn.lightbox.defaults,r.data(),typeof n=="object"&&n);i||r.data("lightbox",i=new t(this,s)),typeof n=="string"?i[n]():s.show&&i.show()})},e.fn.lightbox.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.lightbox.Constructor=t,e.fn.lightbox.noConflict=function(){return e.fn.lightbox=n,this},e(document).on("click.lightbox.data-api",'[data-toggle*="lightbox"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("lightbox")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault(),i.lightbox(s).one("hide",function(){n.focus()})})}(jQuery);

/* - hover-dropdown.min.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/hover-dropdown.min.js?original=1
!function(a,b){var d=a();a.fn.dropdownHover=function(c){return"ontouchstart"in document?this:(d=d.add(this.parent()),this.each(function(){function n(){b.clearTimeout(l),m=b.setTimeout(function(){d.find(":focus").blur(),k.instantlyCloseOthers===!0&&d.removeClass("open"),f.addClass("open"),e.trigger(i)},d.hasClass("open")?0:k.openDelay)}var l,m,e=a(this),f=e.parent(),g={delay:300,instantlyCloseOthers:!0,openDelay:400},h={delay:a(this).data("delay"),instantlyCloseOthers:e.data("close-others"),openDelay:e.data("open-delay")},i="show.bs.dropdown",j="hide.bs.dropdown",k=a.extend(!0,{},g,c,h);f.hover(function(a){return f.hasClass("open")||!e.get(0)!=a.target?(n(a),void 0):!0},function(){l=b.setTimeout(function(){f.removeClass("open"),e.trigger(j)},k.delay),b.clearTimeout(m)}),e.hover(function(a){return f.hasClass("open")||f.is(a.target)?(n(a),void 0):!0}),f.find(".dropdown-submenu").each(function(){var d,c=a(this);c.hover(function(){b.clearTimeout(d),c.children(".dropdown-menu").show(),c.siblings().children(".dropdown-menu").hide()},function(){var a=c.children(".dropdown-menu");d=b.setTimeout(function(){a.hide()},k.delay)})})}))},a(function(){a('[data-hover="dropdown"]').dropdownHover()})}(jQuery,this);

/* - jquery-integration.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/jquery-integration.js?original=1
var jq=jQuery;if(typeof cssQuery==='undefined'){var cssQuery=function(s,f){return jQuery.makeArray(jQuery(s,f))}}


/* - register_function.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/register_function.js?original=1
var bugRiddenCrashPronePieceOfJunk=(navigator.userAgent.indexOf('MSIE 5')!==-1&&navigator.userAgent.indexOf('Mac')!==-1);var W3CDOM=(!bugRiddenCrashPronePieceOfJunk&&typeof document.getElementsByTagName!=='undefined'&&typeof document.createElement!=='undefined');var registerEventListener=function(elem,event,func){jQuery(elem).bind(event,func)};var unRegisterEventListener=function(elem,event,func){jQuery(elem).unbind(event,func)};var registerPloneFunction=jQuery;
function getContentArea(){var node=jQuery('#region-content,#content');return node.length?node[0]:null}


/* - plone_javascript_variables.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/plone_javascript_variables.js?original=1
var portal_url='http://www12.senado.leg.br/hpsenado';var form_modified_message='O seu formulário não foi salvo. Todas as alterações serão perdidas.';var form_resubmit_message='Você já clicou no botão de envio. Você realmente quer enviar este formulário novamente?';var external_links_open_new_window='false';var mark_special_links='false';var ajax_noresponse_message='Nenhuma resposta do servidor. Por favore, tente mais tarde.';

/* - ++resource++plone.app.jquerytools.js - */
!function($){function Overlay(trigger,conf){var closers,overlay,opened,self=this,fire=trigger.add(self),w=$(window),maskConf=$.tools.expose&&(conf.mask||conf.expose),uid=Math.random().toString().slice(10);maskConf&&("string"==typeof maskConf&&(maskConf={color:maskConf}),maskConf.closeOnClick=maskConf.closeOnEsc=!1);var jq=conf.target||trigger.attr("rel");if(overlay=jq?$(jq):null||trigger,!overlay.length)throw"Could not find Overlay: "+jq;trigger&&-1==trigger.index(overlay)&&trigger.click(function(e){return self.load(e),e.preventDefault()}),$.extend(self,{load:function(e){if(self.isOpened())return self;var eff=effects[conf.effect];if(!eff)throw'Overlay: cannot find effect : "'+conf.effect+'"';if(conf.oneInstance&&$.each(instances,function(){this.close(e)}),e=e||$.Event(),e.type="onBeforeLoad",fire.trigger(e),e.isDefaultPrevented())return self;opened=!0,maskConf&&$(overlay).expose(maskConf);var top=conf.top,left=conf.left,oWidth=overlay.outerWidth(!0),oHeight=overlay.outerHeight(!0);return"string"==typeof top&&(top="center"==top?Math.max((w.height()-oHeight)/2,0):parseInt(top,10)/100*w.height()),"center"==left&&(left=Math.max((w.width()-oWidth)/2,0)),eff[0].call(self,{top:top,left:left},function(){opened&&(e.type="onLoad",fire.trigger(e))}),maskConf&&conf.closeOnClick&&$.mask.getMask().one("click",self.close),conf.closeOnClick&&$(document).on("click."+uid,function(e){$(e.target).parents(overlay).length||self.close(e)}),conf.closeOnEsc&&$(document).on("keydown."+uid,function(e){27==e.keyCode&&self.close(e)}),self},close:function(e){return self.isOpened()?(e=e||$.Event(),e.type="onBeforeClose",fire.trigger(e),e.isDefaultPrevented()?void 0:(opened=!1,effects[conf.effect][1].call(self,function(){e.type="onClose",fire.trigger(e)}),$(document).off("click."+uid+" keydown."+uid),maskConf&&$.mask.close(),self)):self},getOverlay:function(){return overlay},getTrigger:function(){return trigger},getClosers:function(){return closers},isOpened:function(){return opened},getConf:function(){return conf}}),$.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","),function(i,name){$.isFunction(conf[name])&&$(self).on(name,conf[name]),self[name]=function(fn){return fn&&$(self).on(name,fn),self}}),closers=overlay.find(conf.close||".close"),closers.length||conf.close||(closers=$('<a class="close"></a>'),overlay.prepend(closers)),closers.click(function(e){self.close(e)}),conf.load&&self.load()}$.tools=$.tools||{version:"@VERSION"},$.tools.overlay={addEffect:function(name,loadFn,closeFn){effects[name]=[loadFn,closeFn]},conf:{close:null,closeOnClick:!0,closeOnEsc:!0,closeSpeed:"fast",effect:"default",fixed:!/msie/.test(navigator.userAgent.toLowerCase())||navigator.appVersion>6,left:"center",load:!1,mask:null,oneInstance:!0,speed:"normal",target:null,top:"10%"}};var instances=[],effects={};$.tools.overlay.addEffect("default",function(pos,onLoad){var conf=this.getConf(),w=$(window);conf.fixed||(pos.top+=w.scrollTop(),pos.left+=w.scrollLeft()),pos.position=conf.fixed?"fixed":"absolute",this.getOverlay().css(pos).fadeIn(conf.speed,onLoad)},function(onClose){this.getOverlay().fadeOut(this.getConf().closeSpeed,onClose)}),$.fn.overlay=function(conf){var el=this.data("overlay");return el?el:($.isFunction(conf)&&(conf={onBeforeLoad:conf}),conf=$.extend(!0,{},$.tools.overlay.conf,conf),this.each(function(){el=new Overlay($(this),conf),instances.push(el),$(this).data("overlay",el)}),conf.api?el:this)}}(jQuery),function($){function find(root,query){var el=$(query);return el.length<2?el:root.parent().find(query)}function Scrollable(root,conf){var self=this,fire=root.add(self),itemWrap=root.children(),index=0,vertical=conf.vertical;if(current||(current=self),itemWrap.length>1&&(itemWrap=$(conf.items,root)),conf.size>1&&(conf.circular=!1),$.extend(self,{getConf:function(){return conf},getIndex:function(){return index},getSize:function(){return self.getItems().size()},getNaviButtons:function(){return prev.add(next)},getRoot:function(){return root},getItemWrap:function(){return itemWrap},getItems:function(){return itemWrap.find(conf.item).not("."+conf.clonedClass)},move:function(offset,time){return self.seekTo(index+offset,time)},next:function(time){return self.move(conf.size,time)},prev:function(time){return self.move(-conf.size,time)},begin:function(time){return self.seekTo(0,time)},end:function(time){return self.seekTo(self.getSize()-1,time)},focus:function(){return current=self,self},addItem:function(item){return item=$(item),conf.circular?(itemWrap.children().last().before(item),itemWrap.children().first().replaceWith(item.clone().addClass(conf.clonedClass))):(itemWrap.append(item),next.removeClass("disabled")),fire.trigger("onAddItem",[item]),self},seekTo:function(i,time,fn){if(i.jquery||(i*=1),conf.circular&&0===i&&-1==index&&0!==time)return self;if(!conf.circular&&0>i||i>self.getSize()||-1>i)return self;var item=i;i.jquery?i=self.getItems().index(i):item=self.getItems().eq(i);var e=$.Event("onBeforeSeek");if(!fn&&(fire.trigger(e,[i,time]),e.isDefaultPrevented()||!item.length))return self;var props=vertical?{top:-item.position().top}:{left:-item.position().left};return index=i,current=self,void 0===time&&(time=conf.speed),itemWrap.animate(props,time,conf.easing,fn||function(){fire.trigger("onSeek",[i])}),self}}),$.each(["onBeforeSeek","onSeek","onAddItem"],function(i,name){$.isFunction(conf[name])&&$(self).on(name,conf[name]),self[name]=function(fn){return fn&&$(self).on(name,fn),self}}),conf.circular){var cloned1=self.getItems().slice(-1).clone().prependTo(itemWrap),cloned2=self.getItems().eq(1).clone().appendTo(itemWrap);cloned1.add(cloned2).addClass(conf.clonedClass),self.onBeforeSeek(function(e,i,time){return e.isDefaultPrevented()?void 0:-1==i?(self.seekTo(cloned1,time,function(){self.end(0)}),e.preventDefault()):void(i==self.getSize()&&self.seekTo(cloned2,time,function(){self.begin(0)}))});var hidden_parents=root.parents().add(root).filter(function(){return"none"===$(this).css("display")?!0:void 0});hidden_parents.length?(hidden_parents.show(),self.seekTo(0,0,function(){}),hidden_parents.hide()):self.seekTo(0,0,function(){})}var prev=find(root,conf.prev).click(function(e){e.stopPropagation(),self.prev()}),next=find(root,conf.next).click(function(e){e.stopPropagation(),self.next()});if(conf.circular||(self.onBeforeSeek(function(e,i){setTimeout(function(){e.isDefaultPrevented()||(prev.toggleClass(conf.disabledClass,0>=i),next.toggleClass(conf.disabledClass,i>=self.getSize()-1))},1)}),conf.initialIndex||prev.addClass(conf.disabledClass)),self.getSize()<2&&prev.add(next).addClass(conf.disabledClass),conf.mousewheel&&$.fn.mousewheel&&root.mousewheel(function(e,delta){return conf.mousewheel?(self.move(0>delta?1:-1,conf.wheelSpeed||50),!1):void 0}),conf.touch){var touch={};itemWrap[0].ontouchstart=function(e){var t=e.touches[0];touch.x=t.clientX,touch.y=t.clientY},itemWrap[0].ontouchmove=function(e){if(1==e.touches.length&&!itemWrap.is(":animated")){var t=e.touches[0],deltaX=touch.x-t.clientX,deltaY=touch.y-t.clientY;self[vertical&&deltaY>0||!vertical&&deltaX>0?"next":"prev"](),e.preventDefault()}}}conf.keyboard&&$(document).on("keydown.scrollable",function(evt){if(!(!conf.keyboard||evt.altKey||evt.ctrlKey||evt.metaKey||$(evt.target).is(":input")||"static"!=conf.keyboard&&current!=self)){var key=evt.keyCode;return!vertical||38!=key&&40!=key?vertical||37!=key&&39!=key?void 0:(self.move(37==key?-1:1),evt.preventDefault()):(self.move(38==key?-1:1),evt.preventDefault())}}),conf.initialIndex&&self.seekTo(conf.initialIndex,0,function(){})}$.tools=$.tools||{version:"@VERSION"},$.tools.scrollable={conf:{activeClass:"active",circular:!1,clonedClass:"cloned",disabledClass:"disabled",easing:"swing",initialIndex:0,item:"> *",items:".items",keyboard:!0,mousewheel:!1,next:".next",prev:".prev",size:1,speed:400,vertical:!1,touch:!0,wheelSpeed:0}};var current;$.fn.scrollable=function(conf){var el=this.data("scrollable");return el?el:(conf=$.extend({},$.tools.scrollable.conf,conf),this.each(function(){el=new Scrollable($(this),conf),$(this).data("scrollable",el)}),conf.api?el:this)}}(jQuery),function($){function Tabs(root,paneSelector,conf){var current,self=this,trigger=root.add(this),tabs=root.find(conf.tabs),panes=paneSelector.jquery?paneSelector:root.children(paneSelector);tabs.length||(tabs=root.children()),panes.length||(panes=root.parent().find(paneSelector)),panes.length||(panes=$(paneSelector)),$.extend(this,{click:function(i,e){var tab=tabs.eq(i),firstRender=!root.data("tabs");if("string"==typeof i&&i.replace("#","")&&(tab=tabs.filter('[href*="'+i.replace("#","")+'"]'),i=Math.max(tabs.index(tab),0)),conf.rotate){var last=tabs.length-1;if(0>i)return self.click(last,e);if(i>last)return self.click(0,e)}if(!tab.length){if(current>=0)return self;i=conf.initialIndex,tab=tabs.eq(i)}if(i===current)return self;if(e=e||$.Event(),e.type="onBeforeClick",trigger.trigger(e,[i]),!e.isDefaultPrevented()){var effect=firstRender?conf.initialEffect&&conf.effect||"default":conf.effect;return effects[effect].call(self,i,function(){current=i,e.type="onClick",trigger.trigger(e,[i])}),tabs.removeClass(conf.current),tab.addClass(conf.current),self}},getConf:function(){return conf},getTabs:function(){return tabs},getPanes:function(){return panes},getCurrentPane:function(){return panes.eq(current)},getCurrentTab:function(){return tabs.eq(current)},getIndex:function(){return current},next:function(){return self.click(current+1)},prev:function(){return self.click(current-1)},destroy:function(){return tabs.off(conf.event).removeClass(conf.current),panes.find('a[href^="#"]').off("click.T"),self}}),$.each("onBeforeClick,onClick".split(","),function(i,name){$.isFunction(conf[name])&&$(self).on(name,conf[name]),self[name]=function(fn){return fn&&$(self).on(name,fn),self}}),conf.history&&$.fn.history&&($.tools.history.init(tabs),conf.event="history"),tabs.each(function(i){$(this).on(conf.event,function(e){return self.click(i,e),e.preventDefault()})}),panes.find('a[href^="#"]').on("click.T",function(e){self.click($(this).attr("href"),e)}),location.hash&&"a"==conf.tabs&&root.find('[href="'+location.hash+'"]').length?self.click(location.hash):(0===conf.initialIndex||conf.initialIndex>0)&&self.click(conf.initialIndex)}$.tools=$.tools||{version:"@VERSION"},$.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialEffect:!1,initialIndex:0,event:"click",rotate:!1,slideUpSpeed:400,slideDownSpeed:400,history:!1},addEffect:function(name,fn){effects[name]=fn}};var animating,w,effects={"default":function(i,done){this.getPanes().hide().eq(i).show(),done.call()},fade:function(i,done){var conf=this.getConf(),speed=conf.fadeOutSpeed,panes=this.getPanes();speed?panes.fadeOut(speed):panes.hide(),panes.eq(i).fadeIn(conf.fadeInSpeed,done)},slide:function(i,done){var conf=this.getConf();this.getPanes().slideUp(conf.slideUpSpeed),this.getPanes().eq(i).slideDown(conf.slideDownSpeed,done)},ajax:function(i,done){this.getPanes().eq(0).load(this.getTabs().eq(i).attr("href"),done)}};$.tools.tabs.addEffect("horizontal",function(i,done){if(!animating){var nextPane=this.getPanes().eq(i),currentPane=this.getCurrentPane();w||(w=this.getPanes().eq(0).width()),animating=!0,nextPane.show(),currentPane.animate({width:0},{step:function(now){nextPane.css("width",w-now)},complete:function(){$(this).hide(),done.call(),animating=!1}}),currentPane.length||(done.call(),animating=!1)}}),$.fn.tabs=function(paneSelector,conf){var el=this.data("tabs");return el&&(el.destroy(),this.removeData("tabs")),$.isFunction(conf)&&(conf={onBeforeClick:conf}),conf=$.extend({},$.tools.tabs.conf,conf),this.each(function(){el=new Tabs($(this),paneSelector,conf),$(this).data("tabs",el)}),conf.api?el:this}}(jQuery),function($){function setIframeLocation(h){if(h){var doc=iframe.contentWindow.document;doc.open().close(),doc.location.hash=h}}var hash,iframe,links,inited;$.tools=$.tools||{version:"@VERSION"},$.tools.history={init:function(els){inited||($.browser.msie&&$.browser.version<"8"?iframe||(iframe=$("<iframe/>").attr("src","javascript:false;").hide().get(0),$("body").append(iframe),setInterval(function(){var idoc=iframe.contentWindow.document,h=idoc.location.hash;hash!==h&&$(window).trigger("hash",h)},100),setIframeLocation(location.hash||"#")):setInterval(function(){var h=location.hash;h!==hash&&$(window).trigger("hash",h)},100),links=links?links.add(els):els,els.click(function(e){var href=$(this).attr("href");return iframe&&setIframeLocation(href),"#"!=href.slice(0,1)?(location.href="#"+href,e.preventDefault()):void 0}),inited=!0)}},$(window).on("hash",function(e,h){h?links.filter(function(){var href=$(this).attr("href");return href==h||href==h.replace("#","")}).trigger("history",[h]):links.eq(0).trigger("history",[h]),hash=h}),$.fn.history=function(fn){return $.tools.history.init(this),this.on("history",fn)}}(jQuery),function($){function viewport(){if(/msie/.test(navigator.userAgent.toLowerCase())){var d=$(document).height(),w=$(window).height();return[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,20>d-w?w:d]}return[$(document).width(),$(document).height()]}function call(fn){return fn?fn.call($.mask):void 0}$.tools=$.tools||{version:"@VERSION"};var tool;tool=$.tools.expose={conf:{maskId:"exposeMask",loadSpeed:"slow",closeSpeed:"fast",closeOnClick:!0,closeOnEsc:!0,zIndex:9998,opacity:.8,startOpacity:0,color:"#fff",onLoad:null,onClose:null}};var mask,exposed,loaded,config,overlayIndex;$.mask={load:function(conf,els){if(loaded)return this;"string"==typeof conf&&(conf={color:conf}),conf=conf||config,config=conf=$.extend($.extend({},tool.conf),conf),mask=$("#"+conf.maskId),mask.length||(mask=$("<div/>").attr("id",conf.maskId),$("body").append(mask));var size=viewport();return mask.css({position:"absolute",top:0,left:0,width:size[0],height:size[1],display:"none",opacity:conf.startOpacity,zIndex:conf.zIndex}),conf.color&&mask.css("backgroundColor",conf.color),call(conf.onBeforeLoad)===!1?this:(conf.closeOnEsc&&$(document).on("keydown.mask",function(e){27==e.keyCode&&$.mask.close(e)}),conf.closeOnClick&&mask.on("click.mask",function(e){$.mask.close(e)}),$(window).on("resize.mask",function(){$.mask.fit()}),els&&els.length&&(overlayIndex=els.eq(0).css("zIndex"),$.each(els,function(){var el=$(this);/relative|absolute|fixed/i.test(el.css("position"))||el.css("position","relative")}),exposed=els.css({zIndex:Math.max(conf.zIndex+1,"auto"==overlayIndex?0:overlayIndex)})),mask.css({display:"block"}).fadeTo(conf.loadSpeed,conf.opacity,function(){$.mask.fit(),call(conf.onLoad),loaded="full"}),loaded=!0,this)},close:function(){if(loaded){if(call(config.onBeforeClose)===!1)return this;mask.fadeOut(config.closeSpeed,function(){exposed&&exposed.css({zIndex:overlayIndex}),loaded=!1,call(config.onClose)}),$(document).off("keydown.mask"),mask.off("click.mask"),$(window).off("resize.mask")}return this},fit:function(){if(loaded){var size=viewport();mask.css({width:size[0],height:size[1]})}},getMask:function(){return mask},isLoaded:function(fully){return fully?"full"==loaded:loaded},getConf:function(){return config},getExposed:function(){return exposed}},$.fn.mask=function(conf){return $.mask.load(conf),this},$.fn.expose=function(conf){return $.mask.load(conf,this),this}}(jQuery),function($){function getPosition(trigger,tip,conf){var top=conf.relative?trigger.position().top:trigger.offset().top,left=conf.relative?trigger.position().left:trigger.offset().left,pos=conf.position[0];top-=tip.outerHeight()-conf.offset[0],left+=trigger.outerWidth()+conf.offset[1],/iPad/i.test(navigator.userAgent)&&(top-=$(window).scrollTop());var height=tip.outerHeight()+trigger.outerHeight();"center"==pos&&(top+=height/2),"bottom"==pos&&(top+=height),pos=conf.position[1];var width=tip.outerWidth()+trigger.outerWidth();return"center"==pos&&(left-=width/2),"left"==pos&&(left-=width),{top:top,left:left}}function Tooltip(trigger,conf){var tip,shown,self=this,fire=trigger.add(self),timer=0,pretimer=0,title=trigger.attr("title"),tipAttr=trigger.attr("data-tooltip"),effect=effects[conf.effect],isInput=trigger.is(":input"),isWidget=isInput&&trigger.is(":checkbox, :radio, select, :button, :submit"),type=trigger.attr("type"),evt=conf.events[type]||conf.events[isInput?isWidget?"widget":"input":"def"];if(!effect)throw'Nonexistent effect "'+conf.effect+'"';if(evt=evt.split(/,\s*/),2!=evt.length)throw"Tooltip: bad events configuration for "+type;trigger.on(evt[0],function(e){clearTimeout(timer),conf.predelay?pretimer=setTimeout(function(){self.show(e)},conf.predelay):self.show(e)}).on(evt[1],function(e){clearTimeout(pretimer),conf.delay?timer=setTimeout(function(){self.hide(e)},conf.delay):self.hide(e)}),title&&conf.cancelDefault&&(trigger.removeAttr("title"),trigger.data("title",title)),$.extend(self,{show:function(e){if(!tip&&(tipAttr?tip=$(tipAttr):conf.tip?tip=$(conf.tip).eq(0):title?tip=$(conf.layout).addClass(conf.tipClass).appendTo(document.body).hide().append(title):(tip=trigger.find("."+conf.tipClass),tip.length||(tip=trigger.next()),tip.length||(tip=trigger.parent().next())),!tip.length))throw"Cannot find tooltip for "+trigger;if(self.isShown())return self;tip.stop(!0,!0);var pos=getPosition(trigger,tip,conf);if(conf.tip&&tip.html(trigger.data("title")),e=$.Event(),e.type="onBeforeShow",fire.trigger(e,[pos]),e.isDefaultPrevented())return self;pos=getPosition(trigger,tip,conf),tip.css({position:"absolute",top:pos.top,left:pos.left}),shown=!0,effect[0].call(self,function(){e.type="onShow",shown="full",fire.trigger(e)});var event=conf.events.tooltip.split(/,\s*/);return tip.data("__set")||(tip.off(event[0]).on(event[0],function(){clearTimeout(timer),clearTimeout(pretimer)}),event[1]&&!trigger.is("input:not(:checkbox, :radio), textarea")&&tip.off(event[1]).on(event[1],function(e){e.relatedTarget!=trigger[0]&&trigger.trigger(evt[1].split(" ")[0])}),conf.tip||tip.data("__set",!0)),self},hide:function(e){return tip&&self.isShown()?(e=$.Event(),e.type="onBeforeHide",fire.trigger(e),e.isDefaultPrevented()?void 0:(shown=!1,effects[conf.effect][1].call(self,function(){e.type="onHide",fire.trigger(e)}),self)):self},isShown:function(fully){return fully?"full"==shown:shown},getConf:function(){return conf},getTip:function(){return tip},getTrigger:function(){return trigger}}),$.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(i,name){$.isFunction(conf[name])&&$(self).on(name,conf[name]),self[name]=function(fn){return fn&&$(self).on(name,fn),self}})}$.tools=$.tools||{version:"@VERSION"},$.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,fadeIE:!1,position:["top","center"],offset:[0,0],relative:!1,cancelDefault:!0,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(name,loadFn,hideFn){effects[name]=[loadFn,hideFn]}};var effects={toggle:[function(done){var conf=this.getConf(),tip=this.getTip(),o=conf.opacity;1>o&&tip.css({opacity:o}),tip.show(),done.call()},function(done){this.getTip().hide(),done.call()}],fade:[function(done){var conf=this.getConf();!/msie/.test(navigator.userAgent.toLowerCase())||conf.fadeIE?this.getTip().fadeTo(conf.fadeInSpeed,conf.opacity,done):(this.getTip().show(),done())},function(done){var conf=this.getConf();!/msie/.test(navigator.userAgent.toLowerCase())||conf.fadeIE?this.getTip().fadeOut(conf.fadeOutSpeed,done):(this.getTip().hide(),done())}]};$.fn.tooltip=function(conf){return conf=$.extend(!0,{},$.tools.tooltip.conf,conf),"string"==typeof conf.position&&(conf.position=conf.position.split(/,?\s/)),this.each(function(){null===$(this).data("tooltip")&&(api=new Tooltip($(this),conf),$(this).data("tooltip",api))}),conf.api?api:this}}(jQuery);

/* - ++resource++plone.app.jquerytools.form.js - */
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
/*global ActiveXObject */



/*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are mutually exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').on('submit', function(e) {
            e.preventDefault(); // <-- important
            $(this).ajaxSubmit({
                target: '#output'
            });
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });

    You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
    form does not have to exist when you invoke ajaxForm:

    $('#myForm').ajaxForm({
        delegation: true,
        target: '#output'
    });

    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/

/**
 * Feature detection
 */
var feature = {};
feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
feature.formdata = window.FormData !== undefined;

var hasProp = !!$.fn.prop;

// attr2 uses prop when it can but checks the return type for
// an expected string.  this accounts for the case where a form 
// contains inputs with names like "action" or "method"; in those
// cases "prop" returns the element
$.fn.attr2 = function() {
    if ( ! hasProp ) {
        return this.attr.apply(this, arguments);
    }
    var val = this.prop.apply(this, arguments);
    if ( ( val && val.jquery ) || typeof val === 'string' ) {
        return val;
    }
    return this.attr.apply(this, arguments);
};

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    /*jshint scripturl:true */

    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }

    var method, action, url, $form = this;

    if (typeof options == 'function') {
        options = { success: options };
    }
    else if ( options === undefined ) {
        options = {};
    }

    method = options.type || this.attr2('method');
    action = options.url  || this.attr2('action');

    url = (typeof action === 'string') ? $.trim(action) : '';
    url = url || window.location.href || '';
    if (url) {
        // clean url (don't include hash vaue)
        url = (url.match(/^([^#]+)/)||[])[1];
    }

    options = $.extend(true, {
        url:  url,
        success: $.ajaxSettings.success,
        type: method || $.ajaxSettings.type,
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, options);

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }

    var traditional = options.traditional;
    if ( traditional === undefined ) {
        traditional = $.ajaxSettings.traditional;
    }

    var elements = [];
    var qx, a = this.formToArray(options.semantic, elements);
    if (options.data) {
        options.extraData = options.data;
        qx = $.param(options.data, traditional);
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }

    var q = $.param(a, traditional);
    if (qx) {
        q = ( q ? (q + '&' + qx) : qx );
    }
    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else {
        options.data = q; // data is the query string for 'post'
    }

    var callbacks = [];
    if (options.resetForm) {
        callbacks.push(function() { $form.resetForm(); });
    }
    if (options.clearForm) {
        callbacks.push(function() { $form.clearForm(options.includeHidden); });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            var fn = options.replaceTarget ? 'replaceWith' : 'html';
            $(options.target)[fn](data).each(oldSuccess, arguments);
        });
    }
    else if (options.success) {
        callbacks.push(options.success);
    }

    options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
        var context = options.context || this ;    // jQuery 1.4+ supports scope context
        for (var i=0, max=callbacks.length; i < max; i++) {
            callbacks[i].apply(context, [data, status, xhr || $form, $form]);
        }
    };

    if (options.error) {
        var oldError = options.error;
        options.error = function(xhr, status, error) {
            var context = options.context || this;
            oldError.apply(context, [xhr, status, error, $form]);
        };
    }

     if (options.complete) {
        var oldComplete = options.complete;
        options.complete = function(xhr, status) {
            var context = options.context || this;
            oldComplete.apply(context, [xhr, status, $form]);
        };
    }

    // are there files to upload?

    // [value] (issue #113), also see comment:
    // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
    var fileInputs = $('input[type=file]:enabled', this).filter(function() { return $(this).val() !== ''; });

    var hasFileInputs = fileInputs.length > 0;
    var mp = 'multipart/form-data';
    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    var fileAPI = feature.fileapi && feature.formdata;
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

    var jqxhr;

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
        // hack to fix Safari hang (thanks to Tim Molendijk for this)
        // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
        if (options.closeKeepAlive) {
            $.get(options.closeKeepAlive, function() {
                jqxhr = fileUploadIframe(a);
            });
        }
        else {
            jqxhr = fileUploadIframe(a);
        }
    }
    else if ((hasFileInputs || multipart) && fileAPI) {
        jqxhr = fileUploadXhr(a);
    }
    else {
        jqxhr = $.ajax(options);
    }

    $form.removeData('jqxhr').data('jqxhr', jqxhr);

    // clear element array
    for (var k=0; k < elements.length; k++) {
        elements[k] = null;
    }

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;

    // utility fn for deep serialization
    function deepSerialize(extraData){
        var serialized = $.param(extraData, options.traditional).split('&');
        var len = serialized.length;
        var result = [];
        var i, part;
        for (i=0; i < len; i++) {
            // #252; undo param space replacement
            serialized[i] = serialized[i].replace(/\+/g,' ');
            part = serialized[i].split('=');
            // #278; use array instead of object storage, favoring array serializations
            result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
        }
        return result;
    }

     // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
    function fileUploadXhr(a) {
        var formdata = new FormData();

        for (var i=0; i < a.length; i++) {
            formdata.append(a[i].name, a[i].value);
        }

        if (options.extraData) {
            var serializedData = deepSerialize(options.extraData);
            for (i=0; i < serializedData.length; i++) {
                if (serializedData[i]) {
                    formdata.append(serializedData[i][0], serializedData[i][1]);
                }
            }
        }

        options.data = null;

        var s = $.extend(true, {}, $.ajaxSettings, options, {
            contentType: false,
            processData: false,
            cache: false,
            type: method || 'POST'
        });

        if (options.uploadProgress) {
            // workaround because jqXHR does not expose upload property
            s.xhr = function() {
                var xhr = $.ajaxSettings.xhr();
                if (xhr.upload) {
                    xhr.upload.addEventListener('progress', function(event) {
                        var percent = 0;
                        var position = event.loaded || event.position; /*event.position is deprecated*/
                        var total = event.total;
                        if (event.lengthComputable) {
                            percent = Math.ceil(position / total * 100);
                        }
                        options.uploadProgress(event, position, total, percent);
                    }, false);
                }
                return xhr;
            };
        }

        s.data = null;
        var beforeSend = s.beforeSend;
        s.beforeSend = function(xhr, o) {
            //Send FormData() provided by user
            if (options.formData) {
                o.data = options.formData;
            }
            else {
                o.data = formdata;
            }
            if(beforeSend) {
                beforeSend.call(this, xhr, o);
            }
        };
        return $.ajax(s);
    }

    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUploadIframe(a) {
        var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
        var deferred = $.Deferred();

        // #341
        deferred.abort = function(status) {
            xhr.abort(status);
        };

        if (a) {
            // ensure that every serialized input is still enabled
            for (i=0; i < elements.length; i++) {
                el = $(elements[i]);
                if ( hasProp ) {
                    el.prop('disabled', false);
                }
                else {
                    el.removeAttr('disabled');
                }
            }
        }

        s = $.extend(true, {}, $.ajaxSettings, options);
        s.context = s.context || s;
        id = 'jqFormIO' + (new Date().getTime());
        if (s.iframeTarget) {
            $io = $(s.iframeTarget);
            n = $io.attr2('name');
            if (!n) {
                $io.attr2('name', id);
            }
            else {
                id = n;
            }
        }
        else {
            $io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
            $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
        }
        io = $io[0];


        xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function(status) {
                var e = (status === 'timeout' ? 'timeout' : 'aborted');
                log('aborting upload... ' + e);
                this.aborted = 1;

                try { // #214, #257
                    if (io.contentWindow.document.execCommand) {
                        io.contentWindow.document.execCommand('Stop');
                    }
                }
                catch(ignore) {}

                $io.attr('src', s.iframeSrc); // abort op in progress
                xhr.error = e;
                if (s.error) {
                    s.error.call(s.context, xhr, e, status);
                }
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, e]);
                }
                if (s.complete) {
                    s.complete.call(s.context, xhr, e);
                }
            }
        };

        g = s.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && 0 === $.active++) {
            $.event.trigger("ajaxStart");
        }
        if (g) {
            $.event.trigger("ajaxSend", [xhr, s]);
        }

        if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
            if (s.global) {
                $.active--;
            }
            deferred.reject();
            return deferred;
        }
        if (xhr.aborted) {
            deferred.reject();
            return deferred;
        }

        // add submitting element to data if we know it
        sub = form.clk;
        if (sub) {
            n = sub.name;
            if (n && !sub.disabled) {
                s.extraData = s.extraData || {};
                s.extraData[n] = sub.value;
                if (sub.type == "image") {
                    s.extraData[n+'.x'] = form.clk_x;
                    s.extraData[n+'.y'] = form.clk_y;
                }
            }
        }

        var CLIENT_TIMEOUT_ABORT = 1;
        var SERVER_ABORT = 2;
                
        function getDoc(frame) {
            /* it looks like contentWindow or contentDocument do not
             * carry the protocol property in ie8, when running under ssl
             * frame.document is the only valid response document, since
             * the protocol is know but not on the other two objects. strange?
             * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
             */
            
            var doc = null;
            
            // IE8 cascading access check
            try {
                if (frame.contentWindow) {
                    doc = frame.contentWindow.document;
                }
            } catch(err) {
                // IE8 access denied under ssl & missing protocol
                log('cannot get iframe.contentWindow document: ' + err);
            }

            if (doc) { // successful getting content
                return doc;
            }

            try { // simply checking may throw in ie8 under ssl or mismatched protocol
                doc = frame.contentDocument ? frame.contentDocument : frame.document;
            } catch(err) {
                // last attempt
                log('cannot get iframe.contentDocument: ' + err);
                doc = frame.document;
            }
            return doc;
        }

        // Rails CSRF hack (thanks to Yvan Barthelemy)
        var csrf_token = $('meta[name=csrf-token]').attr('content');
        var csrf_param = $('meta[name=csrf-param]').attr('content');
        if (csrf_param && csrf_token) {
            s.extraData = s.extraData || {};
            s.extraData[csrf_param] = csrf_token;
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        function doSubmit() {
            // make sure form attrs are set
            var t = $form.attr2('target'), 
                a = $form.attr2('action'), 
                mp = 'multipart/form-data',
                et = $form.attr('enctype') || $form.attr('encoding') || mp;

            // update form attrs in IE friendly way
            form.setAttribute('target',id);
            if (!method || /post/i.test(method) ) {
                form.setAttribute('method', 'POST');
            }
            if (a != s.url) {
                form.setAttribute('action', s.url);
            }

            // ie borks in some cases when setting encoding
            if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (s.timeout) {
                timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
            }

            // look for server aborts
            function checkState() {
                try {
                    var state = getDoc(io).readyState;
                    log('state = ' + state);
                    if (state && state.toLowerCase() == 'uninitialized') {
                        setTimeout(checkState,50);
                    }
                }
                catch(e) {
                    log('Server abort: ' , e, ' (', e.name, ')');
                    cb(SERVER_ABORT);
                    if (timeoutHandle) {
                        clearTimeout(timeoutHandle);
                    }
                    timeoutHandle = undefined;
                }
            }

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (s.extraData) {
                    for (var n in s.extraData) {
                        if (s.extraData.hasOwnProperty(n)) {
                           // if using the $.param format that allows for multiple values with the same name
                           if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                               extraInputs.push(
                               $('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value)
                                   .appendTo(form)[0]);
                           } else {
                               extraInputs.push(
                               $('<input type="hidden" name="'+n+'">').val(s.extraData[n])
                                   .appendTo(form)[0]);
                           }
                        }
                    }
                }

                if (!s.iframeTarget) {
                    // add iframe to doc and submit the form
                    $io.appendTo('body');
                }
                if (io.attachEvent) {
                    io.attachEvent('onload', cb);
                }
                else {
                    io.addEventListener('load', cb, false);
                }
                setTimeout(checkState,15);

                try {
                    form.submit();
                } catch(err) {
                    // just in case form has element with name/id of 'submit'
                    var submitFn = document.createElement('form').submit;
                    submitFn.apply(form);
                }
            }
            finally {
                // reset attrs and remove "extra" input elements
                form.setAttribute('action',a);
                form.setAttribute('enctype', et); // #380
                if(t) {
                    form.setAttribute('target', t);
                } else {
                    $form.removeAttr('target');
                }
                $(extraInputs).remove();
            }
        }

        if (s.forceSync) {
            doSubmit();
        }
        else {
            setTimeout(doSubmit, 10); // this lets dom updates render
        }

        var data, doc, domCheckCount = 50, callbackProcessed;

        function cb(e) {
            if (xhr.aborted || callbackProcessed) {
                return;
            }
            
            doc = getDoc(io);
            if(!doc) {
                log('cannot access response document');
                e = SERVER_ABORT;
            }
            if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                xhr.abort('timeout');
                deferred.reject(xhr, 'timeout');
                return;
            }
            else if (e == SERVER_ABORT && xhr) {
                xhr.abort('server abort');
                deferred.reject(xhr, 'error', 'server abort');
                return;
            }

            if (!doc || doc.location.href == s.iframeSrc) {
                // response not received yet
                if (!timedOut) {
                    return;
                }
            }
            if (io.detachEvent) {
                io.detachEvent('onload', cb);
            }
            else {
                io.removeEventListener('load', cb, false);
            }

            var status = 'success', errMsg;
            try {
                if (timedOut) {
                    throw 'timeout';
                }

                var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                log('isXml='+isXml);
                if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                    if (--domCheckCount) {
                        // in some browsers (Opera) the iframe DOM is not always traversable when
                        // the onload callback fires, so we loop a bit to accommodate
                        log('requeing onLoad callback, DOM not available');
                        setTimeout(cb, 250);
                        return;
                    }
                    // let this fall through because server response could be an empty document
                    //log('Could not access iframe DOM after mutiple tries.');
                    //throw 'DOMException: not available';
                }

                //log('response detected');
                var docRoot = doc.body ? doc.body : doc.documentElement;
                xhr.responseText = docRoot ? docRoot.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                if (isXml) {
                    s.dataType = 'xml';
                }
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': s.dataType};
                    return headers[header.toLowerCase()];
                };
                // support for XHR 'status' & 'statusText' emulation :
                if (docRoot) {
                    xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                }

                var dt = (s.dataType || '').toLowerCase();
                var scr = /(json|script|text)/.test(dt);
                if (scr || s.textarea) {
                    // see if user embedded response in textarea
                    var ta = doc.getElementsByTagName('textarea')[0];
                    if (ta) {
                        xhr.responseText = ta.value;
                        // support for XHR 'status' & 'statusText' emulation :
                        xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
                        xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                    }
                    else if (scr) {
                        // account for browsers injecting pre around json response
                        var pre = doc.getElementsByTagName('pre')[0];
                        var b = doc.getElementsByTagName('body')[0];
                        if (pre) {
                            xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                        }
                        else if (b) {
                            xhr.responseText = b.textContent ? b.textContent : b.innerText;
                        }
                    }
                }
                else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                    xhr.responseXML = toXml(xhr.responseText);
                }

                try {
                    data = httpData(xhr, dt, s);
                }
                catch (err) {
                    status = 'parsererror';
                    xhr.error = errMsg = (err || status);
                }
            }
            catch (err) {
                log('error caught: ',err);
                status = 'error';
                xhr.error = errMsg = (err || status);
            }

            if (xhr.aborted) {
                log('upload aborted');
                status = null;
            }

            if (xhr.status) { // we've set xhr.status
                status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (status === 'success') {
                if (s.success) {
                    s.success.call(s.context, data, 'success', xhr);
                }
                deferred.resolve(xhr.responseText, 'success', xhr);
                if (g) {
                    $.event.trigger("ajaxSuccess", [xhr, s]);
                }
            }
            else if (status) {
                if (errMsg === undefined) {
                    errMsg = xhr.statusText;
                }
                if (s.error) {
                    s.error.call(s.context, xhr, status, errMsg);
                }
                deferred.reject(xhr, 'error', errMsg);
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, errMsg]);
                }
            }

            if (g) {
                $.event.trigger("ajaxComplete", [xhr, s]);
            }

            if (g && ! --$.active) {
                $.event.trigger("ajaxStop");
            }

            if (s.complete) {
                s.complete.call(s.context, xhr, status);
            }

            callbackProcessed = true;
            if (s.timeout) {
                clearTimeout(timeoutHandle);
            }

            // clean up
            setTimeout(function() {
                if (!s.iframeTarget) {
                    $io.remove();
                }
                else { //adding else to clean up existing iframe response.
                    $io.attr('src', s.iframeSrc);
                }
                xhr.responseXML = null;
            }, 100);
        }

        var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else {
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            }
            return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
        };
        var parseJSON = $.parseJSON || function(s) {
            /*jslint evil:true */
            return window['eval']('(' + s + ')');
        };

        var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

            var ct = xhr.getResponseHeader('content-type') || '',
                xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                data = xml ? xhr.responseXML : xhr.responseText;

            if (xml && data.documentElement.nodeName === 'parsererror') {
                if ($.error) {
                    $.error('parsererror');
                }
            }
            if (s && s.dataFilter) {
                data = s.dataFilter(data, type);
            }
            if (typeof data === 'string') {
                if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                    data = parseJSON(data);
                } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                    $.globalEval(data);
                }
            }
            return data;
        };

        return deferred;
    }
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
    options = options || {};
    options.delegation = options.delegation && $.isFunction($.fn.on);

    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (!options.delegation && this.length === 0) {
        var o = { s: this.selector, c: this.context };
        if (!$.isReady && o.s) {
            log('DOM not ready, queuing ajaxForm');
            $(function() {
                $(o.s,o.c).ajaxForm(options);
            });
            return this;
        }
        // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
        log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
        return this;
    }

    if ( options.delegation ) {
        $(document)
            .off('submit.form-plugin', this.selector, doAjaxSubmit)
            .off('click.form-plugin', this.selector, captureSubmittingElement)
            .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
            .on('click.form-plugin', this.selector, options, captureSubmittingElement);
        return this;
    }

    return this.ajaxFormUnbind()
        .bind('submit.form-plugin', options, doAjaxSubmit)
        .bind('click.form-plugin', options, captureSubmittingElement);
};

// private event handlers
function doAjaxSubmit(e) {
    /*jshint validthis:true */
    var options = e.data;
    if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
        e.preventDefault();
        $(e.target).ajaxSubmit(options); // #365
    }
}

function captureSubmittingElement(e) {
    /*jshint validthis:true */
    var target = e.target;
    var $el = $(target);
    if (!($el.is("[type=submit],[type=image]"))) {
        // is this a child element of the submit el?  (ex: a span within a button)
        var t = $el.closest('[type=submit]');
        if (t.length === 0) {
            return;
        }
        target = t[0];
    }
    var form = this;
    form.clk = target;
    if (target.type == 'image') {
        if (e.offsetX !== undefined) {
            form.clk_x = e.offsetX;
            form.clk_y = e.offsetY;
        } else if (typeof $.fn.offset == 'function') {
            var offset = $el.offset();
            form.clk_x = e.pageX - offset.left;
            form.clk_y = e.pageY - offset.top;
        } else {
            form.clk_x = e.pageX - target.offsetLeft;
            form.clk_y = e.pageY - target.offsetTop;
        }
    }
    // clear form vars
    setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
}


// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic, elements) {
    var a = [];
    if (this.length === 0) {
        return a;
    }

    var form = this[0];
    var formId = this.attr('id');
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    var els2;

    if (els && !/MSIE [678]/.test(navigator.userAgent)) { // #390
        els = $(els).get();  // convert to standard array
    }

    // #386; account for inputs outside the form which use the 'form' attribute
    if ( formId ) {
        els2 = $(':input[form="' + formId + '"]').get(); // hat tip @thet
        if ( els2.length ) {
            els = (els || []).concat(els2);
        }
    }

    if (!els || !els.length) {
        return a;
    }

    var i,j,n,v,el,max,jmax;
    for(i=0, max=els.length; i < max; i++) {
        el = els[i];
        n = el.name;
        if (!n || el.disabled) {
            continue;
        }

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(form.clk == el) {
                a.push({name: n, value: $(el).val(), type: el.type });
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
            continue;
        }

        v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            if (elements) {
                elements.push(el);
            }
            for(j=0, jmax=v.length; j < jmax; j++) {
                a.push({name: n, value: v[j]});
            }
        }
        else if (feature.fileapi && el.type == 'file') {
            if (elements) {
                elements.push(el);
            }
            var files = el.files;
            if (files.length) {
                for (j=0; j < files.length; j++) {
                    a.push({name: n, value: files[j], type: el.type});
                }
            }
            else {
                // #180
                a.push({ name: n, value: '', type: el.type });
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            if (elements) {
                elements.push(el);
            }
            a.push({name: n, value: v, type: el.type, required: el.required});
        }
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle it here
        var $input = $(form.clk), input = $input[0];
        n = input.name;
        if (n && !input.disabled && input.type == 'image') {
            a.push({name: n, value: $input.val()});
            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) {
            return;
        }
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++) {
                a.push({name: n, value: v[i]});
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            a.push({name: this.name, value: v});
        }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $('input[type=text]').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $('input[type=checkbox]').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $('input[type=radio]').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *    array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
            continue;
        }
        if (v.constructor == Array) {
            $.merge(val, v);
        }
        else {
            val.push(v);
        }
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
        successful = true;
    }

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
            return null;
    }

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) {
            return null;
        }
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                var v = op.value;
                if (!v) { // extra pain for IE...
                    v = (op.attributes && op.attributes.value && !(op.attributes.value.specified)) ? op.text : op.value;
                }
                if (one) {
                    return v;
                }
                a.push(v);
            }
        }
        return a;
    }
    return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function(includeHidden) {
    return this.each(function() {
        $('input,select,textarea', this).clearFields(includeHidden);
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (re.test(t) || tag == 'textarea') {
            this.value = '';
        }
        else if (t == 'checkbox' || t == 'radio') {
            this.checked = false;
        }
        else if (tag == 'select') {
            this.selectedIndex = -1;
        }
        else if (t == "file") {
            if (/MSIE/.test(navigator.userAgent)) {
                $(this).replaceWith($(this).clone(true));
            } else {
                $(this).val('');
            }
        }
        else if (includeHidden) {
            // includeHidden can be the value true, or it can be a selector string
            // indicating a special test; for example:
            //  $('#myForm').clearForm('.special:hidden')
            // the above would clean hidden inputs that have the class of 'special'
            if ( (includeHidden === true && /hidden/.test(t)) ||
                 (typeof includeHidden == 'string' && $(this).is(includeHidden)) ) {
                this.value = '';
            }
        }
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
            this.reset();
        }
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
    if (b === undefined) {
        b = true;
    }
    return this.each(function() {
        this.disabled = !b;
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select === undefined) {
        select = true;
    }
    return this.each(function() {
        var t = this.type;
        if (t == 'checkbox' || t == 'radio') {
            this.checked = select;
        }
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// expose debug var
$.fn.ajaxSubmit.debug = false;

// helper fn for console logging
function log() {
    if (!$.fn.ajaxSubmit.debug) {
        return;
    }
    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
    if (window.console && window.console.log) {
        window.console.log(msg);
    }
    else if (window.opera && window.opera.postError) {
        window.opera.postError(msg);
    }
}




/* - ++resource++plone.app.jquerytools.overlayhelpers.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/++resource++plone.app.jquerytools.overlayhelpers.js?original=1
var pb={spinner:{},overlay_counter:1};jQuery.tools.overlay.conf.oneInstance=false;(function($){jQuery.tools.overlay.addEffect('default',
function(pos,onLoad){var conf=this.getConf(),w=$(window),ovl=this.getOverlay(),op=ovl.parent().offsetParent().offset();if(!conf.fixed){pos.top+=w.scrollTop()-op.top;pos.left+=w.scrollLeft()-op.left}
pos.position=conf.fixed?'fixed':'absolute';ovl.css(pos).fadeIn(conf.speed,onLoad)}, function(onClose){this.getOverlay().fadeOut(this.getConf().closeSpeed,onClose)});pb.spinner.show=function(){$('body').css('cursor','wait')};pb.spinner.hide=function(){$('body').css('cursor','')}}(jQuery));jQuery(function($){$.fn.prepOverlay=function(pba){return this.each(function(){var o,pbo,config,onBeforeLoad,onLoad,src,parts;o=$(this);pbo=$.extend(true,{'width':'60%'},pba);config=pbo.config||{};onBeforeLoad=pb[pbo.subtype];if(onBeforeLoad){config.onBeforeLoad=onBeforeLoad}
onLoad=config.onLoad;config.onLoad=function(){if(onLoad){onLoad.apply(this,arguments)}
pb.fi_focus(this.getOverlay())};src=o.attr('href')||o.attr('src')||o.attr('action');if(pbo.urlmatch){src=src.replace(new RegExp(pbo.urlmatch),pbo.urlreplace)}
if(pbo.subtype==='inline'){src=src.replace(/^.+#/,'#');$("[id='"+src.replace('#','')+"']").addClass('overlay');o.removeAttr('href').attr('rel',src);o.overlay()} else{pbo.nt='pb_'+pb.overlay_counter;pb.overlay_counter+=1;pbo.selector=pbo.filter||pbo.selector;if(!pbo.selector){parts=src.split(' ');src=parts.shift();pbo.selector=parts.join(' ')}
pbo.src=src;pbo.config=config;pbo.source=o;pb.remove_overlay(o);o.data('pbo',pbo);o.attr('rel','#'+pbo.nt);o.addClass('link-overlay');switch(pbo.subtype){case 'image':o.click(pb.image_click);break;case 'ajax':o.click(pb.ajax_click);break;case 'iframe':pb.create_content_div(pbo);o.overlay(config);break;default:throw "Unsupported overlay type"}
o.css('cursor','pointer')}})};pb.remove_overlay=function(o){var old_data=o.data('pbo');if(old_data){switch(old_data.subtype){case 'image':o.unbind('click',pb.image_click);break;case 'ajax':o.unbind('click',pb.ajax_click);break;default:o.unbind('click');break}
if(old_data.nt){$('#'+old_data.nt).remove()}}};pb.create_content_div=function(pbo,trigger){var content,close_message,pbw=pbo.width;if(typeof close_box_message==='undefined'){close_message='Close this box.'} else{close_message=close_box_message}
content=$('<div id="'+pbo.nt+'" class="overlay overlay-'+pbo.subtype+' '+(pbo.cssclass||'')+'"><div class="close"><a href="#" class="hiddenStructure" title="Close this box">'+close_message+'</a></div></div>');content.data('pbo',pbo);if(pbw){if(pbw.indexOf('%')>0){content.width(parseInt(pbw,10)/100 * $(window).width())} else{content.width(pbw)}}
content.appendTo($("body"));return content};pb.image_click=function(event){var ethis,content,api,img,el,pbo;ethis=$(this);pbo=ethis.data('pbo');content=$(ethis.attr('rel'));if(!content.length){content=pb.create_content_div(pbo);content.overlay(pbo.config)}
api=content.overlay();if(content.find('img').length===0){if(pbo.src){pb.spinner.show();img=new Image();img.src=pbo.src;el=$(img);content.append(el.addClass('pb-image'));el.load(function(){pb.spinner.hide();api.load()})}} else{api.load()}
return false};pb.fi_focus=function(jqo){if(!jqo.find("form div.error :input:first").focus().length){jqo.find("form :input:visible:first").focus()}};pb.ajax_error_recover=function(responseText,selector){var tcontent=$('<div/>').append(responseText.replace(/<script(.|\s)*?\/script>/gi,""));return selector?tcontent.find(selector):tcontent};pb.add_ajax_load=function(form){if(form.find('input[name=ajax_load]').length===0){form.prepend($('<input type="hidden" name="ajax_load" value="'+(new Date().getTime())+'" />'))}};pb.prep_ajax_form=function(form){var ajax_parent=form.closest('.pb-ajax'),data_parent=ajax_parent.closest('.overlay-ajax'),pbo=data_parent.data('pbo'),formtarget=pbo.formselector,closeselector=pbo.closeselector,beforepost=pbo.beforepost,afterpost=pbo.afterpost,noform=pbo.noform,api=data_parent.overlay(),selector=pbo.selector,options={};options.beforeSerialize=function(){pb.spinner.show()};if(beforepost){options.beforeSubmit=function(arr,form,options){return beforepost(form,arr,options)}}
options.success=function(responseText,statusText,xhr,form){$(document).trigger('formOverlayStart',[this,responseText,statusText,xhr,form]);var el,myform,success,target,scripts=[],filteredResponseText;success=statusText==="success"||statusText==="notmodified";if(!success){responseText=responseText.responseText}
filteredResponseText=responseText.replace(/<script(.|\s)*?\/script>/gi,"");el=$('<div />').append(selector?$('<div />').append(filteredResponseText).find(selector):filteredResponseText);if(success&&afterpost){afterpost(el,data_parent)}
myform=el.find(formtarget);if(success&&myform.length){ajax_parent.empty().append(el);try{$.buildFragment([responseText],[document],scripts)} catch(e){$.buildFragment([responseText],document,scripts)}
if(scripts.length){$.each(scripts, function(){$.globalEval(this.text||this.textContent||this.innerHTML||"")})}
if($.fn.ploneTabInit){el.ploneTabInit()}
pb.fi_focus(ajax_parent);pb.add_ajax_load(myform);myform.ajaxForm(options);if(closeselector){el.find(closeselector).click(function(event){api.close();return false})}
$(document).trigger('formOverlayLoadSuccess',[this,myform,api,pb,ajax_parent])} else{if(success){if(typeof noform==="function"){noform=noform(el,pbo)}} else{noform=statusText}
switch(noform){case 'close':api.close();break;case 'reload':api.close();pb.spinner.show();location.replace(location.href);break;case 'redirect':api.close();pb.spinner.show();target=pbo.redirect;if(typeof target==="function"){target=target(el,responseText,pbo)}
location.replace(target);break;default:if(el.children()){ajax_parent.empty().append(el)} else{api.close()}
break}
$(document).trigger('formOverlayLoadFailure',[this,myform,api,pb,ajax_parent,noform])}
pb.spinner.hide()};options.error=options.success;pb.add_ajax_load(form);form.ajaxForm(options)};pb.ajax_click=function(event){var ethis=$(this),pbo,content,api,src,el,selector,formtarget,closeselector,sep,scripts=[],e;e=$.Event();e.type="beforeAjaxClickHandled";$(document).trigger(e,[this,event]);if(e.isDefaultPrevented()){return false}
pbo=ethis.data('pbo');content=pb.create_content_div(pbo,ethis);content.overlay(pbo.config,ethis);api=content.overlay();src=pbo.src;selector=pbo.selector;formtarget=pbo.formselector;closeselector=pbo.closeselector;pb.spinner.show();$(this).find("input.submitting").removeClass('submitting');el=$('div.pb-ajax',content);if(el.length===0){el=$('<div class="pb-ajax" />');content.append(el)}
if(api.getConf().fixed){el.css('max-height',Math.floor($(window).height() * 0.75))}
sep=(src.indexOf('?')>=0)?'&':'?';src+=sep+"ajax_load="+(new Date().getTime());if(selector){src+=' '+selector}
el[0].handle_load_inside_overlay=function(responseText,errorText){var ele,target;ele=$(this);if(errorText==='error'){ele.append(pb.ajax_error_recover(responseText,selector))} else if(!responseText.length){ele.append(ajax_noresponse_message||'No response from server.')}
ele.wrapInner('<div />');if(formtarget){target=ele.find(formtarget);if(target.length>0){pb.prep_ajax_form(target)}}
if(closeselector){ele.find(closeselector).click(function(event){api.close();return false})}
try{$.buildFragment([responseText],[document],scripts)} catch(e){$.buildFragment([responseText],document,scripts)}
if(scripts.length){$.each(scripts, function(){$.globalEval(this.text||this.textContent||this.innerHTML||"")})}
if($.fn.ploneTabInit){ele.ploneTabInit()}
api.onClose=function(){content.remove()};$(document).trigger('loadInsideOverlay',[this,responseText,errorText,api])};el.load(src,null, function(responseText,errorText){el[0].handle_load_inside_overlay.apply(this,[responseText,errorText]);pb.spinner.hide();api.load();return true});return false};pb.iframe=function(){var content,pbo;pb.spinner.show();content=this.getOverlay();pbo=this.getTrigger().data('pbo');if(content.find('iframe').length===0&&pbo.src){content.append('<iframe src="'+pbo.src+'" width="'+content.width()+'" height="'+content.height()+'" onload="pb.spinner.hide()"/>')} else{pb.spinner.hide()}
return true}});

/* - overlayhelperscomscript.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/overlayhelperscomscript.js?original=1
var pbcomscript={spinner:{},overlay_counter:1};jQuery.tools.overlay.conf.oneInstance=false;jQuery(function($){pbcomscript.spinner.show=function(){$('body').css('cursor','wait')};pbcomscript.spinner.hide=function(){$('body').css('cursor','')};$.fn.prepOverlayComScript=function(pba){return this.each(function(){var o,pbo,config,onBeforeLoad,onLoad,src,parts;o=$(this);pbo=$.extend(true,{},pba);config=pbo.config||{};onBeforeLoad=pbcomscript[pbo.subtype];if(onBeforeLoad){config.onBeforeLoad=onBeforeLoad}
onLoad=config.onLoad;config.onLoad=function(){if(onLoad){onLoad.apply(this,arguments)}
pbcomscript.fi_focus(this.getOverlay())};src=o.attr('href')||o.attr('src')||o.attr('action');if(pbo.urlmatch){src=src.replace(new RegExp(pbo.urlmatch),pbo.urlreplace)}
if(pbo.subtype==='inline'){src=src.replace(/^.+#/,'#');$("[id='"+src.replace('#','')+"']").addClass('overlay');o.removeAttr('href').attr('rel',src);o.overlay()} else{pbo.nt='pb_'+pbcomscript.overlay_counter;pbcomscript.overlay_counter+=1;pbo.selector=pbo.filter||pbo.selector;if(!pbo.selector){parts=src.split(' ');src=parts.shift();pbo.selector=parts.join(' ')}
pbo.src=src;pbo.config=config;pbcomscript.remove_overlay(o);o.data('pbo',pbo);o.attr('rel','#'+pbo.nt);o.addClass('link-overlay');switch(pbo.subtype){case 'image':o.click(pbcomscript.image_click);break;case 'ajax':o.click(pbcomscript.ajax_click);break;case 'iframe':pbcomscript.create_content_div(pbo);o.overlay(config);break;default:throw "Unsupported overlay type"}
o.css('cursor','pointer')}})};pbcomscript.remove_overlay=function(o){var old_data=o.data('pbo');if(old_data){switch(old_data.subtype){case 'image':o.unbind('click',pbcomscript.image_click);break;case 'ajax':o.unbind('click',pbcomscript.ajax_click);break;default:o.unbind('click')}
if(old_data.nt){$('#'+old_data.nt).remove()}}};pbcomscript.create_content_div=function(pbo){var content;content=$('<div id="'+pbo.nt+'" class="overlay overlay-'+pbo.subtype+' '+(pbo.cssclass||'')+'"><div class="close"><span>Close</span></div></div>');content.data('pbo',pbo);if(pbo.width){content.width(pbo.width)}
content.appendTo($("body"));return content};pbcomscript.image_click=function(event){var ethis,content,api,img,el,pbo;ethis=$(this);pbo=ethis.data('pbo');content=$(ethis.attr('rel'));if(!content.length){content=pbcomscript.create_content_div(pbo);content.overlay(pbo.config)}
api=content.overlay();if(content.find('img').length===0){if(pbo.src){pbcomscript.spinner.show();img=new Image();img.src=pbo.src;el=$(img);content.append(el.addClass('pb-image'));el.load(function(){pbcomscript.spinner.hide();api.load()})}} else{api.load()}
return false};pbcomscript.fi_focus=function(jqo){if(!jqo.find("form div.error :input:first").focus().length){jqo.find("form :input:visible:first").focus()}};pbcomscript.ajax_error_recover=function(responseText,selector){var tcontent=$('<div/>').append(responseText);return selector?tcontent.find(selector):tcontent};pbcomscript.add_ajax_load=function(form){if(form.find('input[name=ajax_load]').length===0){form.prepend($('<input type="hidden" name="ajax_load" value="'+(new Date().getTime())+'" />'))}};pbcomscript.prep_ajax_form=function(form){var ajax_parent=form.closest('.pb-ajax'),data_parent=ajax_parent.closest('.overlay-ajax'),pbo=data_parent.data('pbo'),formtarget=pbo.formselector,closeselector=pbo.closeselector,beforepost=pbo.beforepost,afterpost=pbo.afterpost,noform=pbo.noform,api=data_parent.overlay(),selector=pbo.selector,options={};options.beforeSerialize=function(){pbcomscript.spinner.show()};if(beforepost){options.beforeSubmit=function(arr,form,options){return beforepost(form,arr,options)}}
options.success=function(responseText,statusText,xhr,form){$(document).trigger('formOverlayStart',[this,responseText,statusText,xhr,form]);var el,myform,success,target;success=statusText==="success"||statusText==="notmodified";if(!success){responseText=responseText.responseText}
el=$('<div />').append(selector?$('<div />').append(responseText).find(selector):responseText);if(success&&afterpost){afterpost(el,data_parent)}
myform=el.find(formtarget);if(success&&myform.length){ajax_parent.empty().append(el);pbcomscript.fi_focus(ajax_parent);pbcomscript.add_ajax_load(myform);myform.ajaxForm(options);if(closeselector){el.find(closeselector).click(function(event){api.close();return false})}
$(document).trigger('formOverlayLoadSuccess',[this,myform,api,pbcomscript,ajax_parent])} else{if(success){if(typeof(noform)==="function"){noform=noform(this)}} else{noform=statusText}
switch(noform){case 'close':api.close();break;case 'reload':api.close();pbcomscript.spinner.show();location.replace(location.href);break;case 'redirect':api.close();pbcomscript.spinner.show();target=pbo.redirect;if(typeof(target)==="function"){target=target(this,responseText)}
location.replace(target);break;default:if(el.children()){ajax_parent.empty().append(el)} else{api.close()}}
$(document).trigger('formOverlayLoadFailure',[this,myform,api,pbcomscript,ajax_parent,noform])}
pbcomscript.spinner.hide()};options.error=options.success;pbcomscript.add_ajax_load(form);form.ajaxForm(options)};pbcomscript.ajax_click=function(event){var ethis=$(this),pbo,content,api,src,el,selector,formtarget,closeselector,sep;e=$.Event();e.type="beforeAjaxClickHandled";$(document).trigger(e,[this,event]);if(e.isDefaultPrevented()){return}
pbo=ethis.data('pbo');content=pbcomscript.create_content_div(pbo);content.overlay(pbo.config);api=content.overlay();src=pbo.src;selector=pbo.selector;formtarget=pbo.formselector;closeselector=pbo.closeselector;pbcomscript.spinner.show();$(this).find("input.submitting").removeClass('submitting');el=$('<div class="pb-ajax" />');if(api.getConf().fixed){el.css('max-height',Math.floor($(window).height() * 0.75))}
content.append(el);sep=(src.indexOf('?')>=0)?'&':'?';src+=sep+"ajax_load="+(new Date().getTime());if(selector){selector+=',script'}
el[0].handle_load_inside_overlay=function(responseText,errorText){var el=$(this);if(errorText==='error'){el.append(pbcomscript.ajax_error_recover(responseText,selector))} else if(!responseText.length){el.append(ajax_noresponse_message||'No response from server.')}
el.wrapInner('<div />');if(formtarget){var target=el.find(formtarget);if(target.length>0){pbcomscript.prep_ajax_form(target)}}
if(closeselector){el.find(closeselector).click(function(event){api.close();return false})}
if($.fn.ploneTabInit){el.ploneTabInit()}
api.onClose=function(){content.remove()};$(document).trigger('loadInsideOverlay',[this,responseText,errorText,api])}
$.ajax({url:src,type:"GET",dataType:"html",data:null,complete: function(res,status){if(status==="success"||status==="notmodified"){if(selector){var dummydiv=$("<div></div>");$(document.body).append(dummydiv);dummydiv.append(res.responseText);dummydiv.find(selector).appendTo(el);dummydiv.remove()}
else
el.html(res.responseText)}
el[0].handle_load_inside_overlay.apply(el,[res.responseText,status]);pbcomscript.spinner.hide();api.load();return true}});return false};pbcomscript.iframe=function(){var content,pbo;pbcomscript.spinner.show();content=this.getOverlay();pbo=this.getTrigger().data('pbo');if(content.find('iframe').length===0&&pbo.src){content.append('<iframe src="'+pbo.src+'" width="'+content.width()+'" height="'+content.height()+'" onload="pbcomscript.spinner.hide()"/>')} else{pbcomscript.spinner.hide()}
return true}});

/* - overlay.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/overlay.js?original=1
(function($){$.fn.bindPrimeiro=function(name,fn){this.on(name,fn);this.each(function(){var handlers=$._data(this,'events')[name.split('.')[0]];var handler=handlers.pop();handlers.splice(0,0,handler)})};$(function(){if($.browser.msie&&parseInt($.browser.version,10)<7){return}
var common_content_filter='#content>*:not(div.configlet),dl.portalMessage.error,dl.portalMessage.info,#content-core';var formSelectorIDs="form#form, form[id$='base-edit'], form#delete_confirmation, form[id$='browser_form'], form[class^='kssattr-formname-']";var closeSelectors="[name='form.buttons.cancel'],[name='form.buttons.fechar'],[name='form.actions.cancel']";$('a.link-overlay').prepOverlay({subtype:'ajax',filter:common_content_filter,});$('a.formlink-overlay').prepOverlay({subtype:'ajax',filter:common_content_filter,formselector:formSelectorIDs,noform:'close',closeselector:closeSelectors,});$('a.formlink-overlay-reload').prepOverlay({subtype:'ajax',filter:common_content_filter,formselector:formSelectorIDs,noform:'close',closeselector:closeSelectors,config:{onClose: function(e){location.reload(true);return true}},});$('a.formlink-overlay-reload-aovivo').prepOverlay({subtype:'ajax',filter:'#linha1-colunaesquerda',formselector:formSelectorIDs,noform:'close',closeselector:closeSelectors,config:{onClose: function(e){location.reload(true);return true}},});$('a.formlink-overlay-reload-contenttree').prepOverlayComScript({subtype:'ajax',filter:common_content_filter,formselector:formSelectorIDs,noform:'close',closeselector:'',config:{onClose: function(e){location.reload(true);return true},onLoad: function(e){$('.contenttreeWindow').css('z-index',20000)}},});$('a.formlink-overlay-reload-tinymce').prepOverlayComScript({subtype:'ajax',filter:common_content_filter,formselector:formSelectorIDs,noform:'close',closeselector:'',config:{onClose: function(e){location.reload(true);return true},onLoad:function(){$('textarea.mce_editable').each(function(){$(formSelectorIDs).bindPrimeiro('submit', function(){tinymce.each(window.tinyMCE.editors, function(ed){if(ed.initialized){ed.save();ed.isNotDirty=1}})})})},}});$(document).bind('loadInsideOverlay', function(){$('textarea.mce_editable').each(function(){var config=new TinyMCEConfig($(this).attr('id'));config.init()})})})})(jQuery);

/* - ++resource++plone.app.jquerytools.dateinput.js - */
!function($,undefined){function dayAm(year,month){return new Date(year,month+1,0).getDate()}function zeropad(val,len){for(val=""+val,len=len||2;val.length<len;)val="0"+val;return val}function format(formatter,date,text,lang){var d=date.getDate(),D=date.getDay(),m=date.getMonth(),y=date.getFullYear(),flags={d:d,dd:zeropad(d),ddd:LABELS[lang].shortDays[D],dddd:LABELS[lang].days[D],m:m+1,mm:zeropad(m+1),mmm:LABELS[lang].shortMonths[m],mmmm:LABELS[lang].months[m],yy:String(y).slice(2),yyyy:y},ret=formatters[formatter](text,date,flags,lang);return tmpTag.html(ret).html()}function integer(val){return parseInt(val,10)}function isSameDay(d1,d2){return d1.getFullYear()===d2.getFullYear()&&d1.getMonth()==d2.getMonth()&&d1.getDate()==d2.getDate()}function parseDate(val){if(val!==undefined){if(val.constructor==Date)return val;if("string"==typeof val){var els=val.split("-");if(3==els.length)return new Date(integer(els[0]),integer(els[1])-1,integer(els[2]));if(!/^-?\d+$/.test(val))return;val=integer(val)}var date=new Date;return date.setDate(date.getDate()+val),date}}function Dateinput(input,conf){function select(date,conf,e){return input.attr("readonly")?void self.hide(e):(value=date,currYear=date.getFullYear(),currMonth=date.getMonth(),currDay=date.getDate(),e||(e=$.Event("api")),"click"!=e.type||/msie/.test(navigator.userAgent.toLowerCase())||input.focus(),e.type="beforeChange",fire.trigger(e,[date]),void(e.isDefaultPrevented()||(input.val(format(conf.formatter,date,conf.format,conf.lang)),e.type="change",e.target=input[0],fire.trigger(e),input.data("date",date),self.hide(e))))}function onShow(ev){ev.type="onShow",fire.trigger(ev),$(document).on("keydown.d",function(e){if(e.ctrlKey)return!0;var key=e.keyCode;if(8==key||46==key)return input.val(""),self.hide(e);if(27==key||9==key)return self.hide(e);if($(KEYS).index(key)>=0){if(!opened)return self.show(e),e.preventDefault();var days=$("#"+css.weeks+" a"),el=$("."+css.focus),index=days.index(el);return el.removeClass(css.focus),74==key||40==key?index+=7:75==key||38==key?index-=7:76==key||39==key?index+=1:(72==key||37==key)&&(index-=1),index>41?(self.addMonth(),el=$("#"+css.weeks+" a:eq("+(index-42)+")")):0>index?(self.addMonth(-1),el=$("#"+css.weeks+" a:eq("+(index+42)+")")):el=days.eq(index),el.addClass(css.focus),e.preventDefault()}return 34==key?self.addMonth():33==key?self.addMonth(-1):36==key?self.today():(13==key&&($(e.target).is("select")||$("."+css.focus).click()),$([16,17,18,9]).index(key)>=0)}),$(document).on("click.d",function(e){var el=e.target;el.id==css.root||$(el).parents("#"+css.root).length||el==input[0]||trigger&&el==trigger[0]||self.hide(e)})}var trigger,pm,nm,currYear,currMonth,currDay,opened,original,self=this,now=new Date,yearNow=now.getFullYear(),css=conf.css,labels=LABELS[conf.lang],root=$("#"+css.root),title=root.find("#"+css.title),value=input.attr("data-value")||conf.value||input.val(),min=input.attr("min")||conf.min,max=input.attr("max")||conf.max;if(0===min&&(min="0"),value=parseDate(value)||now,min=parseDate(min||new Date(yearNow+conf.yearRange[0],1,1)),max=parseDate(max||new Date(yearNow+conf.yearRange[1]+1,1,-1)),!labels)throw"Dateinput: invalid language: "+conf.lang;if("date"==input.attr("type")){var original=input.clone(),def=original.wrap("<div/>").parent().html(),clone=$(def.replace(/type/i,"type=text data-orig-type"));conf.value&&clone.val(conf.value),input.replaceWith(clone),input=clone}input.addClass(css.input);var fire=input.add(self);if(!root.length){if(root=$("<div><div><a/><div/><a/></div><div><div/><div/></div></div>").hide().css({position:"absolute"}).attr("id",css.root),root.children().eq(0).attr("id",css.head).end().eq(1).attr("id",css.body).children().eq(0).attr("id",css.days).end().eq(1).attr("id",css.weeks).end().end().end().find("a").eq(0).attr("id",css.prev).end().eq(1).attr("id",css.next),title=root.find("#"+css.head).find("div").attr("id",css.title),conf.selectors){var monthSelector=$("<select/>").attr("id",css.month),yearSelector=$("<select/>").attr("id",css.year);title.html(monthSelector.add(yearSelector))}for(var days=root.find("#"+css.days),d=0;7>d;d++)days.append($("<span/>").text(labels.shortDays[(d+conf.firstDay)%7]));$("body").append(root)}conf.trigger&&(trigger=$("<a/>").attr("href","#").addClass(css.trigger).click(function(e){return conf.toggle?self.toggle():self.show(),e.preventDefault()}).insertAfter(input));var weeks=root.find("#"+css.weeks);yearSelector=root.find("#"+css.year),monthSelector=root.find("#"+css.month),$.extend(self,{show:function(e){if(!input.attr("disabled")&&!opened&&(e=e||$.Event(),e.type="onBeforeShow",fire.trigger(e),!e.isDefaultPrevented())){$.each(instances,function(){this.hide()}),opened=!0,monthSelector.off("change").change(function(){self.setValue(integer(yearSelector.val()),integer($(this).val()))}),yearSelector.off("change").change(function(){self.setValue(integer($(this).val()),integer(monthSelector.val()))}),pm=root.find("#"+css.prev).off("click").click(function(){return pm.hasClass(css.disabled)||self.addMonth(-1),!1}),nm=root.find("#"+css.next).off("click").click(function(){return nm.hasClass(css.disabled)||self.addMonth(),!1}),self.setValue(value);var pos=input.offset();return/iPad/i.test(navigator.userAgent)&&(pos.top-=$(window).scrollTop()),root.css({top:pos.top+input.outerHeight(!0)+conf.offset[0],left:pos.left+conf.offset[1]}),conf.speed?root.show(conf.speed,function(){onShow(e)}):(root.show(),onShow(e)),self}},setValue:function(year,month,day){var date=integer(month)>=-1?new Date(integer(year),integer(month),integer(day==undefined||isNaN(day)?1:day)):year||value;if(min>date?date=min:date>max&&(date=max),"string"==typeof year&&(date=parseDate(year)),year=date.getFullYear(),month=date.getMonth(),day=date.getDate(),-1==month?(month=11,year--):12==month&&(month=0,year++),!opened)return select(date,conf),self;currMonth=month,currYear=year,currDay=day;var week,tmp=new Date(year,month,1-conf.firstDay),begin=tmp.getDay(),days=dayAm(year,month),prevDays=dayAm(year,month-1);if(conf.selectors){monthSelector.empty(),$.each(labels.months,function(i,m){min<new Date(year,i+1,1)&&max>new Date(year,i,0)&&monthSelector.append($("<option/>").html(m).attr("value",i))}),yearSelector.empty();for(var yearNow=now.getFullYear(),i=yearNow+conf.yearRange[0];i<yearNow+conf.yearRange[1];i++)min<new Date(i+1,0,1)&&max>new Date(i,0,0)&&yearSelector.append($("<option/>").text(i));monthSelector.val(month),yearSelector.val(year)}else title.html(labels.months[month]+" "+year);weeks.empty(),pm.add(nm).removeClass(css.disabled);for(var a,num,j=begin?0:-7;(begin?42:35)>j;j++)a=$("<a/>"),j%7===0&&(week=$("<div/>").addClass(css.week),weeks.append(week)),begin>j?(a.addClass(css.off),num=prevDays-begin+j+1,date=new Date(year,month-1,num)):j>=begin+days?(a.addClass(css.off),num=j-days-begin+1,date=new Date(year,month+1,num)):(num=j-begin+1,date=new Date(year,month,num),isSameDay(value,date)?a.attr("id",css.current).addClass(css.focus):isSameDay(now,date)&&a.attr("id",css.today)),min&&min>date&&a.add(pm).addClass(css.disabled),max&&date>max&&a.add(nm).addClass(css.disabled),a.attr("href","#"+num).text(num).data("date",date),week.append(a);return weeks.find("a").click(function(e){var el=$(this);return el.hasClass(css.disabled)||($("#"+css.current).removeAttr("id"),el.attr("id",css.current),select(el.data("date"),conf,e)),!1}),css.sunday&&weeks.find("."+css.week).each(function(){var beg=conf.firstDay?7-conf.firstDay:0;$(this).children().slice(beg,beg+1).addClass(css.sunday)}),self},setMin:function(val,fit){return min=parseDate(val),fit&&min>value&&self.setValue(min),self},setMax:function(val,fit){return max=parseDate(val),fit&&value>max&&self.setValue(max),self},today:function(){return self.setValue(now)},addDay:function(amount){return this.setValue(currYear,currMonth,currDay+(amount||1))},addMonth:function(amount){var targetMonth=currMonth+(amount||1),daysInTargetMonth=dayAm(currYear,targetMonth),targetDay=daysInTargetMonth>=currDay?currDay:daysInTargetMonth;return this.setValue(currYear,targetMonth,targetDay)},addYear:function(amount){return this.setValue(currYear+(amount||1),currMonth,currDay)},destroy:function(){input.add(document).off("click.d keydown.d"),root.add(trigger).remove(),input.removeData("dateinput").removeClass(css.input),original&&input.replaceWith(original)},hide:function(e){if(opened){if(e=$.Event(),e.type="onHide",fire.trigger(e),e.isDefaultPrevented())return;$(document).off("click.d keydown.d"),root.hide(),opened=!1}return self},toggle:function(){return self.isOpen()?self.hide():self.show()},getConf:function(){return conf},getInput:function(){return input},getCalendar:function(){return root},getValue:function(dateFormat){return dateFormat?format(conf.formatter,value,dateFormat,conf.lang):value},isOpen:function(){return opened}}),$.each(["onBeforeShow","onShow","change","onHide"],function(i,name){$.isFunction(conf[name])&&$(self).on(name,conf[name]),self[name]=function(fn){return fn&&$(self).on(name,fn),self}}),conf.editable||input.on("focus.d click.d",self.show).keydown(function(e){var key=e.keyCode;return!opened&&$(KEYS).index(key)>=0?(self.show(e),e.preventDefault()):((8==key||46==key)&&input.val(""),e.shiftKey||e.ctrlKey||e.altKey||9==key?!0:e.preventDefault())}),parseDate(input.val())&&select(value,conf)}$.tools=$.tools||{version:"@VERSION"};var tool,instances=[],formatters={},KEYS=[75,76,38,39,74,72,40,37],LABELS={};tool=$.tools.dateinput={conf:{format:"mm/dd/yy",formatter:"default",selectors:!1,yearRange:[-5,5],lang:"en",offset:[0,0],speed:0,firstDay:0,min:undefined,max:undefined,trigger:0,toggle:0,editable:0,css:{prefix:"cal",input:"date",root:0,head:0,title:0,prev:0,next:0,month:0,year:0,days:0,body:0,weeks:0,today:0,current:0,week:0,off:0,sunday:0,focus:0,disabled:0,trigger:0}},addFormatter:function(name,fn){formatters[name]=fn},localize:function(language,labels){$.each(labels,function(key,val){labels[key]=val.split(",")}),LABELS[language]=labels}},tool.localize("en",{months:"January,February,March,April,May,June,July,August,September,October,November,December",shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",days:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",shortDays:"Sun,Mon,Tue,Wed,Thu,Fri,Sat"});var tmpTag=$("<a/>");tool.addFormatter("default",function(text,date,flags){return text.replace(/d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*'/g,function($0){return $0 in flags?flags[$0]:$0})}),tool.addFormatter("prefixed",function(text,date,flags){return text.replace(/%(d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*')/g,function($0,$1){return $1 in flags?flags[$1]:$0})}),$.expr[":"].date=function(el){var type=el.getAttribute("type");return type&&"date"==type||!!$(el).data("dateinput")},$.fn.dateinput=function(conf){if(this.data("dateinput"))return this;conf=$.extend(!0,{},tool.conf,conf),$.each(conf.css,function(key,val){val||"prefix"==key||(conf.css[key]=(conf.css.prefix||"")+(val||key))});var els;return this.each(function(){var el=new Dateinput($(this),conf);instances.push(el);var input=el.getInput().data("dateinput",el);els=els?els.add(input):input}),els?els:this}}(jQuery);

/* - nodeutilities.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/nodeutilities.js?original=1
function wrapNode(node,wrappertype,wrapperclass){jQuery(node).wrap('<'+wrappertype+'>').parent().addClass(wrapperclass)}
function nodeContained(innernode,outernode){return jQuery(innernode).parents().filter(function(){return this===outernode}).length>0}
function findContainer(node,func){var p=jQuery(node).parents().filter(func);return p.length?p.get(0):false}
function hasClassName(node,class_name){return jQuery(node).hasClass(class_name)}
function addClassName(node,class_name){jQuery(node).addClass(class_name)}
function removeClassName(node,class_name){jQuery(node).removeClass(class_name)}
function replaceClassName(node,old_class,new_class,ignore_missing){if(ignore_missing||jQuery(node).hasClass(old_class)){jQuery(node).removeClass(old_class).addClass(new_class)}}
function walkTextNodes(node,func,data){jQuery(node).find('*').andSelf().contents().each(function(){if(this.nodeType===3){func(this,data)}})}
function getInnerTextCompatible(node){return jQuery(node).text()}
function getInnerTextFast(node){return jQuery(node).text()}
function sortNodes(nodes,fetch_func,cmp_func){var SortNodeWrapper,items;SortNodeWrapper=function(node){this.value=fetch_func(node);this.cloned_node=node.cloneNode(true)};SortNodeWrapper.prototype.toString=function(){return this.value.toString?this.value.toString():this.value};items=jQuery(nodes).map(function(){return new SortNodeWrapper(this)});if(cmp_func){items.sort(cmp_func)} else{items.sort()}
jQuery.each(items, function(i){jQuery(nodes[i]).replace(this.cloned_node)})}
function copyChildNodes(srcNode,dstNode){jQuery(srcNode).children().clone().appendTo(jQuery(dstNode))}


/* - cookie_functions.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/cookie_functions.js?original=1
function createCookie(name,value,days){var date,expires;if(days){date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toGMTString()} else{expires=""}
document.cookie=name+"="+escape(value)+expires+"; path=/;"}
function readCookie(name){var nameEQ=name+"=",ca=document.cookie.split(';'),i,c;for(i=0;i<ca.length;i=i+1){c=ca[i];while(c.charAt(0)===' '){c=c.substring(1,c.length)}
if(c.indexOf(nameEQ)===0){return unescape(c.substring(nameEQ.length,c.length))}}
return null}


/* - livesearch.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/livesearch.js?original=1
var livesearch=(function(){var _2=400,_7=400,_0={},_1="LSHighlight";function _5(f,i){var l=null,r=null,c={},q=f.attr('action').replace(/search$/g,"")+"livesearch_reply",re=f.find('div.LSResult'),s=f.find('div.LSShadow'),p=f.find('input[name=path]');function _12(){re.hide();l=null}function _6(){window.setTimeout('livesearch.hide("'+f.attr('id')+'")',_7)}function _11(d){re.show();s.html(d)}function _14(){if(l===i.value){return}l=i.value;if(r&&r.readyState<4){r.abort()}if(i.value.length<2){_12();return}var qu={q:i.value};if(p.length&&p[0].checked){qu.path=p.val()}qu=jQuery.param(qu);if(c[qu]){_11(c[qu]);return}r=jQuery.get(q,qu,function(d){_11(d);c[qu]=d},'text')}function _4(){window.setTimeout('livesearch.search("'+f.attr('id')+'")',_2)}return{hide:_12,hide_delayed:_6,search:_14,search_delayed:_4}}function _3(f){var t=null,re=f.find('div.LSResult'),s=f.find('div.LSShadow');function _16(){var c=s.find('li.LSHighlight').removeClass(_1),p=c.prev('li');if(!p.length){p=s.find('li:last')}p.addClass(_1);return false}function _9(){var c=s.find('li.LSHighlight').removeClass(_1),n=c.next('li');if(!n.length){n=s.find('li:first')}n.addClass(_1);return false}function _8(){s.find('li.LSHighlight').removeClass(_1);re.hide()}function _10(e){window.clearTimeout(t);switch(e.keyCode){case 38:return _16();case 40:return _9();case 27:return _8();case 37:break;case 39:break;default:t=window.setTimeout('livesearch.search("'+f.attr('id')+'")',_2)}}function _13(){var t=s.find('li.LSHighlight a').attr('href');if(!t){return}window.location=t;return false}return{handler:_10,submit:_13}}function _15(i){var i='livesearch'+i,f=jQuery(this).parents('form:first'),k=_3(f);_0[i]=_5(f,this);f.attr('id',i).submit(k.submit);jQuery(this).attr('autocomplete','off').keydown(k.handler).focus(_0[i].search_delayed).blur(_0[i].hide_delayed)}jQuery(function(){jQuery("#searchGadget,input.portlet-search-gadget").each(_15)});return{search:function(id){_0[id].search()},hide:function(id){_0[id].hide()}}}());

/* - select_all.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/select_all.js?original=1
function toggleSelect(selectbutton,id,initialState,formName){var fid,state,base;fid=id||'ids:list';state=selectbutton.isSelected;if(state===undefined){state=Boolean(initialState)}
selectbutton.isSelected=!state;jQuery(selectbutton).attr('src',portal_url+'/select_'+(state?'all':'none')+'_icon.png');base=formName?jQuery(document.forms[formName]):jQuery(document);base.find(':checkbox[name='+fid+']').attr('checked',!state)}


/* - dragdropreorder.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/dragdropreorder.js?original=1
var ploneDnDReorder={};ploneDnDReorder.dragging=null;ploneDnDReorder.table=null;ploneDnDReorder.rows=null;ploneDnDReorder.locked=false;(function($){ploneDnDReorder.doDown=function(e){var dragging=ploneDnDReorder.dragging,body;if(ploneDnDReorder.locked){return}
if(dragging){if($(this).attr('id')!==dragging.attr('id')){ploneDnDReorder.locked=true;dragging.removeClass('dragging').addClass('error')}
return}
dragging=$(this).parents('.draggable:first');if(!dragging.length){return}
ploneDnDReorder.rows.mousemove(ploneDnDReorder.doDrag);body=$('body');body.mouseup(ploneDnDReorder.doUp);body.mouseleave(ploneDnDReorder.doCancel);ploneDnDReorder.dragging=dragging;dragging.data('ploneDnDReorder.startPosition',ploneDnDReorder.getPos(dragging));dragging.addClass("dragging");$(this).parents('tr').addClass('dragindicator');dragging.data('ploneDnDReorder.subset_ids',$.map(ploneDnDReorder.table.find('tr.draggable'),
function(elem){return $(elem).attr('id').substr('folder-contents-item-'.length)}));return false};ploneDnDReorder.getPos=function(node){var pos=node.parent().children('.draggable').index(node[0]);return pos===-1?null:pos};ploneDnDReorder.doDrag=function(e){var dragging=ploneDnDReorder.dragging,target=this;if(!dragging){return}
if(!target){return}
if($(target).attr('id')!==dragging.attr('id')){ploneDnDReorder.swapElements($(target),dragging)}
return false};ploneDnDReorder.swapElements=function(child1,child2){var parent=child1.parent(),items=parent.children('[id]'),t;if(Math.abs(ploneDnDReorder.getPos(child1)-ploneDnDReorder.getPos(child2))!==1){return}
items.removeClass('even').removeClass('odd');if(child1[0].swapNode){child1[0].swapNode(child2[0])} else{t=parent[0].insertBefore(document.createTextNode(''),child1[0]);child1.insertBefore(child2);child2.insertBefore(t);$(t).remove()}
parent.children('[id]:odd').addClass('even');parent.children('[id]:even').addClass('odd')};ploneDnDReorder.doUp=function(e){var dragging=ploneDnDReorder.dragging,body=$('body');if(!dragging){return}
ploneDnDReorder.updatePositionOnServer();dragging.removeData('ploneDnDReorder.startPosition');dragging.removeData('ploneDnDReorder.subset_ids');ploneDnDReorder.rows.unbind('mousemove',ploneDnDReorder.doDrag);body.unbind('mouseup',ploneDnDReorder.doUp);body.unbind('mouseleave',ploneDnDReorder.doCancel);$(this).parents('tr').removeClass('dragindicator');return false};ploneDnDReorder.doCancel=function(e){var dragging=ploneDnDReorder.dragging,body=$('body');if(!dragging){return}
dragging.removeClass("dragging")
if(ploneDnDReorder.getPos(dragging)-dragging.data('ploneDnDReorder.startPosition')){ploneDnDReorder.locked=true;dragging.addClass("error")}
ploneDnDReorder.rows.unbind('mousemove',ploneDnDReorder.doDrag);body.unbind('mouseup',ploneDnDReorder.doCancel);body.unbind('mouseleave',ploneDnDReorder.doCancel);ploneDnDReorder.dragging=null;return false};ploneDnDReorder.updatePositionOnServer=function(){var dragging=ploneDnDReorder.dragging,delta,args,encoded;if(!dragging){return}
delta=ploneDnDReorder.getPos(dragging)-dragging.data('ploneDnDReorder.startPosition');if(delta===0){return}
args={item_id:dragging.attr('id').substr('folder-contents-item-'.length),subset_ids:dragging.data('ploneDnDReorder.subset_ids')};args['delta:int']=delta;encoded=$.param(args).replace(/%5B%5D=/g,'%3Alist=');$.ajax({type:'POST',url:'folder_moveitem',data:encoded,complete:ploneDnDReorder.complete});ploneDnDReorder.locked=true};ploneDnDReorder.complete=function(xhr,textStatus){var dragging=ploneDnDReorder.dragging;dragging.removeClass("dragging");if(textStatus==="success"||textStatus==="notmodified"){ploneDnDReorder.locked=false} else{dragging.addClass("error")}
ploneDnDReorder.dragging=null}}(jQuery));

/* - collapsiblesections.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/collapsiblesections.js?original=1
function activateCollapsibles(){(function($){$('dl.collapsible:not([class$=Collapsible])').find('dt.collapsibleHeader:first').click(function(){var c=$(this).parents('dl.collapsible:first'),t;if(!c){return true}t=c.hasClass('inline')?'Inline':'Block';c.toggleClass('collapsed'+t+'Collapsible').toggleClass('expanded'+t+'Collapsible')}).end().each(function(){var s=$(this).hasClass('collapsedOnLoad')?'collapsed':'expanded',t=$(this).hasClass('inline')?'Inline':'Block';$(this).removeClass('collapsedOnLoad').addClass(s+t+'Collapsible')})}(jQuery))}jQuery(function($){$(activateCollapsibles)});

/* - form_tabbing.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/form_tabbing.js?original=1
var ploneFormTabbing={jqtConfig:{current:'selected'}};(function($){ploneFormTabbing._buildTabs=function(container,legends){var threshold=legends.length>8;var panel_ids,tab_ids=[],tabs='';for(var i=0;i<legends.length;i++){var className,tab,legend=legends[i],lid=legend.id;tab_ids[i]='#'+lid;switch(i){case(0):className='class="formTab firstFormTab"';break;case(legends.length-1):className='class="formTab lastFormTab"';break;default:className='class="formTab"';break}
if(threshold){tab='<option '+className+' id="'+lid+'" value="'+lid+'">';tab+=$(legend).text()+'</option>'} else{tab='<li '+className+'><a id="'+lid+'" href="#'+lid+'"><span>';tab+=$(legend).text()+'</span></a></li>'}
tabs+=tab;$(legend).hide()}
tab_ids=tab_ids.join(',');panel_ids=tab_ids.replace(/#fieldsetlegend-/g,"#fieldset-");if(threshold){tabs=$('<select class="formTabs">'+tabs+'</select>');tabs.change(function(){var selected=$(this).attr('value');jq('#'+selected).click()})} else{tabs=$('<ul class="formTabs">'+tabs+'</ul>')}
return tabs};ploneFormTabbing.initializeDL=function(){var ftabs=$(ploneFormTabbing._buildTabs(this,$(this).children('dt')));var targets=$(this).children('dd');$(this).before(ftabs);targets.addClass('formPanel');ftabs.tabs(targets,ploneFormTabbing.jqtConfig)};ploneFormTabbing.initializeForm=function(){var jqForm=$(this);var fieldsets=jqForm.children('fieldset');if(!fieldsets.length){return}
var ftabs=ploneFormTabbing._buildTabs(this,fieldsets.children('legend'));$(this).prepend(ftabs);fieldsets.addClass("formPanel");$(this).find('input[name="fieldset.current"]').addClass('noUnloadProtection');$(this).find('.formPanel:has(div.field span.required)').each(function(){var id=this.id.replace(/^fieldset-/,"#fieldsetlegend-");$(id).addClass('required')});var initialIndex=0;var count=0;var found=false;$(this).find('.formPanel').each(function(){if(!found&&$(this).find('div.field.error').length!=0){initialIndex=count;found=true}
count+=1});var tabSelector='ul.formTabs';if($(ftabs).is('select.formTabs')){tabSelector='select.formTabs'}
var tabsConfig=$.extend({},ploneFormTabbing.jqtConfig,{'initialIndex':initialIndex});jqForm.children(tabSelector).tabs('form.enableFormTabbing fieldset.formPanel',tabsConfig);jqForm.submit(function(){var selected;if(ftabs.find('a.selected').length>=1){selected=ftabs.find('a.selected').attr('href').replace(/^#fieldsetlegend-/,"#fieldset-")}
else{selected=ftabs.attr('value').replace(/^fieldsetlegend-/,'#fieldset-')}
var fsInput=jqForm.find('input[name="fieldset.current"]');if(selected&&fsInput){fsInput.val(selected)}});$("#archetypes-schemata-links").addClass('hiddenStructure');$("div.formControls input[name='form.button.previous'],"+"div.formControls input[name='form.button.next']").remove()};$.fn.ploneTabInit=function(pbo){return this.each(function(){var item=$(this);item.find("form.enableFormTabbing,div.enableFormTabbing").each(ploneFormTabbing.initializeForm);item.find("dl.enableFormTabbing").each(ploneFormTabbing.initializeDL);var targetPane=item.find('.enableFormTabbing input[name="fieldset.current"]').val()||window.location.hash;if(targetPane){item.find(".enableFormTabbing .formTab a[href='"+targetPane.replace("'","").replace(/^#fieldset-/,"#fieldsetlegend-")+"']").click()}})};ploneFormTabbing.initialize=function(){$('body').ploneTabInit()}})(jQuery);jQuery(function(){ploneFormTabbing.initialize()});

/* - popupforms.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/popupforms.js?original=1
var common_content_filter='#content>*:not(div.configlet),dl.portalMessage.error,dl.portalMessage.info,#content-core';jQuery.extend(jQuery.tools.overlay.conf,{fixed:false,speed:'fast',mask:{color:'#fff',opacity:0.4,loadSpeed:0,closeSpeed:0}});(function($){$.plonepopups=$.plonepopups||{};$.extend($.plonepopups,{noformerrorshow: function noformerrorshow(el,noform){var o=$(el),emsg=o.find('dl.portalMessage.error');if(emsg.length){o.children().replaceWith(emsg);return false} else{return noform}},redirectbasehref: function redirectbasehref(el,responseText){var mo=responseText.match(/<base href="(\S+?)"/i);if(mo.length===2){return mo[1]}
return location}})})(jQuery);jQuery(function($){if(jQuery.browser.msie&&parseInt(jQuery.browser.version,10)<7){return}
$('#portal-personaltools a[href$="/login"], #portal-personaltools a[href$="/login_form"], .discussion a[href$="/login"], .discussion a[href$="/login_form"]').prepOverlay({subtype:'ajax',filter:common_content_filter,formselector:'form#login_form',noform: function(){if(location.href.search(/pwreset_finish$/)>=0){return 'redirect'} else{return 'reload'}},redirect: function(){var href=location.href;if(href.search(/pwreset_finish$/)>=0){return href.slice(0,href.length-14)+'logged_in'} else{return href}}});$('#siteaction-contact a').prepOverlay({subtype:'ajax',filter:common_content_filter,formselector:'form[name="feedback_form"]',noform: function(el){return $.plonepopups.noformerrorshow(el,'close')}});$('form[name=reply]').prepOverlay({subtype:'ajax',filter:common_content_filter,formselector:'form:has(input[name="discussion_reply:method"])',noform: function(el){return $.plonepopups.noformerrorshow(el,'redirect')},redirect:$.plonepopups.redirectbasehref});$('#contextSetDefaultPage, #folderChangeDefaultPage').prepOverlay({subtype:'ajax',filter:common_content_filter,formselector:'form[name="default_page_form"]',noform: function(el){return $.plonepopups.noformerrorshow(el,'reload')},closeselector:'[name="form.button.Cancel"]',width:'40%'});$('dl#plone-contentmenu-actions a#delete').prepOverlay({subtype:'ajax',filter:common_content_filter,formselector:'#delete_confirmation',noform: function(el){return $.plonepopups.noformerrorshow(el,'redirect')},redirect:$.plonepopups.redirectbasehref,closeselector:'[name="form.button.Cancel"]',width:'50%'});$('dl#plone-contentmenu-actions a#rename').prepOverlay({subtype:'ajax',filter:common_content_filter,closeselector:'[name="form.button.Cancel"]',width:'40%'});$('#portal-personaltools a[href$="/@@register"]').prepOverlay({subtype:'ajax',filter:common_content_filter,formselector:'form.kssattr-formname-register'});$('form[name="users_add"], form[name="groups_add"]').prepOverlay({subtype:'ajax',filter:common_content_filter,formselector:'form.kssattr-formname-new-user, form[name="groups"]',noform: function(el){return $.plonepopups.noformerrorshow(el,'redirect')},redirect: function(){return location.href}});$('#content-history a').prepOverlay({subtype:'ajax',filter:'h2, #content-history',urlmatch:'@@historyview',urlreplace:'@@contenthistorypopup'})});

/* - jquery.nanoscroller.min.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/jquery.nanoscroller.min.js?original=1
!function(a){return"function"==typeof define&&define.amd?define(["jquery"],function(b){return a(b,window,document)}):"object"==typeof exports?module.exports=a(require("jquery"),window,document):a(jQuery,window,document)}(function(a,b,c){"use strict";var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;z={paneClass:"nano-pane",sliderClass:"nano-slider",contentClass:"nano-content",enabledClass:"has-scrollbar",flashedClass:"flashed",activeClass:"active",iOSNativeScrolling:!1,preventPageScrolling:!1,disableResize:!1,alwaysVisible:!1,flashDelay:1500,sliderMinHeight:20,sliderMaxHeight:null,documentContext:null,windowContext:null},u="scrollbar",t="scroll",l="mousedown",m="mouseenter",n="mousemove",p="mousewheel",o="mouseup",s="resize",h="drag",i="enter",w="up",r="panedown",f="DOMMouseScroll",g="down",x="wheel",j="keydown",k="keyup",v="touchmove",d="Microsoft Internet Explorer"===b.navigator.appName&&/msie 7./i.test(b.navigator.appVersion)&&b.ActiveXObject,e=null,D=b.requestAnimationFrame,y=b.cancelAnimationFrame,F=c.createElement("div").style,H=function(){var a,b,c,d,e,f;for(d=["t","webkitT","MozT","msT","OT"],a=e=0,f=d.length;f>e;a=++e)if(c=d[a],b=d[a]+"ransform",b in F)return d[a].substr(0,d[a].length-1);return!1}(),G=function(a){return H===!1?!1:""===H?a:H+a.charAt(0).toUpperCase()+a.substr(1)},E=G("transform"),B=E!==!1,A=function(){var a,b,d;return a=c.createElement("div"),b=a.style,b.position="absolute",b.width="100px",b.height="100px",b.overflow=t,b.top="-9999px",c.body.appendChild(a),d=a.offsetWidth-a.clientWidth,c.body.removeChild(a),d},C=function(){var a,c,d;return c=b.navigator.userAgent,(a=/(?=.+Mac OS X)(?=.+Firefox)/.test(c))?(d=/Firefox\/\d{2}\./.exec(c),d&&(d=d[0].replace(/\D+/g,"")),a&&+d>23):!1},q=function(){function j(d,f){this.el=d,this.options=f,e||(e=A()),this.$el=a(this.el),this.doc=a(this.options.documentContext||c),this.win=a(this.options.windowContext||b),this.body=this.doc.find("body"),this.$content=this.$el.children("."+this.options.contentClass),this.$content.attr("tabindex",this.options.tabIndex||0),this.content=this.$content[0],this.previousPosition=0,this.options.iOSNativeScrolling&&null!=this.el.style.WebkitOverflowScrolling?this.nativeScrolling():this.generate(),this.createEvents(),this.addEvents(),this.reset()}return j.prototype.preventScrolling=function(a,b){if(this.isActive)if(a.type===f)(b===g&&a.originalEvent.detail>0||b===w&&a.originalEvent.detail<0)&&a.preventDefault();else if(a.type===p){if(!a.originalEvent||!a.originalEvent.wheelDelta)return;(b===g&&a.originalEvent.wheelDelta<0||b===w&&a.originalEvent.wheelDelta>0)&&a.preventDefault()}},j.prototype.nativeScrolling=function(){this.$content.css({WebkitOverflowScrolling:"touch"}),this.iOSNativeScrolling=!0,this.isActive=!0},j.prototype.updateScrollValues=function(){var a,b;a=this.content,this.maxScrollTop=a.scrollHeight-a.clientHeight,this.prevScrollTop=this.contentScrollTop||0,this.contentScrollTop=a.scrollTop,b=this.contentScrollTop>this.previousPosition?"down":this.contentScrollTop<this.previousPosition?"up":"same",this.previousPosition=this.contentScrollTop,"same"!==b&&this.$el.trigger("update",{position:this.contentScrollTop,maximum:this.maxScrollTop,direction:b}),this.iOSNativeScrolling||(this.maxSliderTop=this.paneHeight-this.sliderHeight,this.sliderTop=0===this.maxScrollTop?0:this.contentScrollTop*this.maxSliderTop/this.maxScrollTop)},j.prototype.setOnScrollStyles=function(){var a;B?(a={},a[E]="translate(0, "+this.sliderTop+"px)"):a={top:this.sliderTop},D?(y&&this.scrollRAF&&y(this.scrollRAF),this.scrollRAF=D(function(b){return function(){return b.scrollRAF=null,b.slider.css(a)}}(this))):this.slider.css(a)},j.prototype.createEvents=function(){this.events={down:function(a){return function(b){return a.isBeingDragged=!0,a.offsetY=b.pageY-a.slider.offset().top,a.slider.is(b.target)||(a.offsetY=0),a.pane.addClass(a.options.activeClass),a.doc.bind(n,a.events[h]).bind(o,a.events[w]),a.body.bind(m,a.events[i]),!1}}(this),drag:function(a){return function(b){return a.sliderY=b.pageY-a.$el.offset().top-a.paneTop-(a.offsetY||.5*a.sliderHeight),a.scroll(),a.contentScrollTop>=a.maxScrollTop&&a.prevScrollTop!==a.maxScrollTop?a.$el.trigger("scrollend"):0===a.contentScrollTop&&0!==a.prevScrollTop&&a.$el.trigger("scrolltop"),!1}}(this),up:function(a){return function(b){return a.isBeingDragged=!1,a.pane.removeClass(a.options.activeClass),a.doc.unbind(n,a.events[h]).unbind(o,a.events[w]),a.body.unbind(m,a.events[i]),!1}}(this),resize:function(a){return function(b){a.reset()}}(this),panedown:function(a){return function(b){return a.sliderY=(b.offsetY||b.originalEvent.layerY)-.5*a.sliderHeight,a.scroll(),a.events.down(b),!1}}(this),scroll:function(a){return function(b){a.updateScrollValues(),a.isBeingDragged||(a.iOSNativeScrolling||(a.sliderY=a.sliderTop,a.setOnScrollStyles()),null!=b&&(a.contentScrollTop>=a.maxScrollTop?(a.options.preventPageScrolling&&a.preventScrolling(b,g),a.prevScrollTop!==a.maxScrollTop&&a.$el.trigger("scrollend")):0===a.contentScrollTop&&(a.options.preventPageScrolling&&a.preventScrolling(b,w),0!==a.prevScrollTop&&a.$el.trigger("scrolltop"))))}}(this),wheel:function(a){return function(b){var c;if(null!=b)return c=b.delta||b.wheelDelta||b.originalEvent&&b.originalEvent.wheelDelta||-b.detail||b.originalEvent&&-b.originalEvent.detail,c&&(a.sliderY+=-c/3),a.scroll(),!1}}(this),enter:function(a){return function(b){var c;if(a.isBeingDragged)return 1!==(b.buttons||b.which)?(c=a.events)[w].apply(c,arguments):void 0}}(this)}},j.prototype.addEvents=function(){var a;this.removeEvents(),a=this.events,this.options.disableResize||this.win.bind(s,a[s]),this.iOSNativeScrolling||(this.slider.bind(l,a[g]),this.pane.bind(l,a[r]).bind(""+p+" "+f,a[x])),this.$content.bind(""+t+" "+p+" "+f+" "+v,a[t])},j.prototype.removeEvents=function(){var a;a=this.events,this.win.unbind(s,a[s]),this.iOSNativeScrolling||(this.slider.unbind(),this.pane.unbind()),this.$content.unbind(""+t+" "+p+" "+f+" "+v,a[t])},j.prototype.generate=function(){var a,c,d,f,g,h,i;return f=this.options,h=f.paneClass,i=f.sliderClass,a=f.contentClass,(g=this.$el.children("."+h)).length||g.children("."+i).length||this.$el.append('<div class="'+h+'"><div class="'+i+'" /></div>'),this.pane=this.$el.children("."+h),this.slider=this.pane.find("."+i),0===e&&C()?(d=b.getComputedStyle(this.content,null).getPropertyValue("padding-right").replace(/[^0-9.]+/g,""),c={right:-14,paddingRight:+d+14}):e&&(c={right:-e},this.$el.addClass(f.enabledClass)),null!=c&&this.$content.css(c),this},j.prototype.restore=function(){this.stopped=!1,this.iOSNativeScrolling||this.pane.show(),this.addEvents()},j.prototype.reset=function(){var a,b,c,f,g,h,i,j,k,l,m,n;return this.iOSNativeScrolling?void(this.contentHeight=this.content.scrollHeight):(this.$el.find("."+this.options.paneClass).length||this.generate().stop(),this.stopped&&this.restore(),a=this.content,f=a.style,g=f.overflowY,d&&this.$content.css({height:this.$content.height()}),b=a.scrollHeight+e,l=parseInt(this.$el.css("max-height"),10),l>0&&(this.$el.height(""),this.$el.height(a.scrollHeight>l?l:a.scrollHeight)),i=this.pane.outerHeight(!1),k=parseInt(this.pane.css("top"),10),h=parseInt(this.pane.css("bottom"),10),j=i+k+h,n=Math.round(j/b*i),n<this.options.sliderMinHeight?n=this.options.sliderMinHeight:null!=this.options.sliderMaxHeight&&n>this.options.sliderMaxHeight&&(n=this.options.sliderMaxHeight),g===t&&f.overflowX!==t&&(n+=e),this.maxSliderTop=j-n,this.contentHeight=b,this.paneHeight=i,this.paneOuterHeight=j,this.sliderHeight=n,this.paneTop=k,this.slider.height(n),this.events.scroll(),this.pane.show(),this.isActive=!0,a.scrollHeight===a.clientHeight||this.pane.outerHeight(!0)>=a.scrollHeight&&g!==t?(this.pane.hide(),this.isActive=!1):this.el.clientHeight===a.scrollHeight&&g===t?this.slider.hide():this.slider.show(),this.pane.css({opacity:this.options.alwaysVisible?1:"",visibility:this.options.alwaysVisible?"visible":""}),c=this.$content.css("position"),("static"===c||"relative"===c)&&(m=parseInt(this.$content.css("right"),10),m&&this.$content.css({right:"",marginRight:m})),this)},j.prototype.scroll=function(){return this.isActive?(this.sliderY=Math.max(0,this.sliderY),this.sliderY=Math.min(this.maxSliderTop,this.sliderY),this.$content.scrollTop(this.maxScrollTop*this.sliderY/this.maxSliderTop),this.iOSNativeScrolling||(this.updateScrollValues(),this.setOnScrollStyles()),this):void 0},j.prototype.scrollBottom=function(a){return this.isActive?(this.$content.scrollTop(this.contentHeight-this.$content.height()-a).trigger(p),this.stop().restore(),this):void 0},j.prototype.scrollTop=function(a){return this.isActive?(this.$content.scrollTop(+a).trigger(p),this.stop().restore(),this):void 0},j.prototype.scrollTo=function(a){return this.isActive?(this.scrollTop(this.$el.find(a).get(0).offsetTop),this):void 0},j.prototype.stop=function(){return y&&this.scrollRAF&&(y(this.scrollRAF),this.scrollRAF=null),this.stopped=!0,this.removeEvents(),this.iOSNativeScrolling||this.pane.hide(),this},j.prototype.destroy=function(){return this.stopped||this.stop(),!this.iOSNativeScrolling&&this.pane.length&&this.pane.remove(),d&&this.$content.height(""),this.$content.removeAttr("tabindex"),this.$el.hasClass(this.options.enabledClass)&&(this.$el.removeClass(this.options.enabledClass),this.$content.css({right:""})),this},j.prototype.flash=function(){return!this.iOSNativeScrolling&&this.isActive?(this.reset(),this.pane.addClass(this.options.flashedClass),setTimeout(function(a){return function(){a.pane.removeClass(a.options.flashedClass)}}(this),this.options.flashDelay),this):void 0},j}(),a.fn.nanoScroller=function(b){return this.each(function(){var c,d;if((d=this.nanoscroller)||(c=a.extend({},z,b),this.nanoscroller=d=new q(this,c)),b&&"object"==typeof b){if(a.extend(d.options,b),null!=b.scrollBottom)return d.scrollBottom(b.scrollBottom);if(null!=b.scrollTop)return d.scrollTop(b.scrollTop);if(b.scrollTo)return d.scrollTo(b.scrollTo);if("bottom"===b.scroll)return d.scrollBottom(0);if("top"===b.scroll)return d.scrollTop(0);if(b.scroll&&b.scroll instanceof a)return d.scrollTo(b.scroll);if(b.stop)return d.stop();if(b.destroy)return d.destroy();if(b.flash)return d.flash()}return d.reset()})},a.fn.nanoScroller.Constructor=q});

/* - inicializa.nanoscroller.min.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/inicializa.nanoscroller.min.js?original=1
(function($){$(function(){$('#accordion .collapse.in .nano').nanoScroller();$('#accordion').on('shown.bs.collapse', function(){$('.nano').nanoScroller()})})})(jQuery);

/* - input-label.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/input-label.js?original=1
var ploneInputLabel={focus: function(){var t=jQuery(this);if(t.hasClass('inputLabelActive')&&t.val()===t.attr('title')){t.val('').removeClass('inputLabelActive')}
if(t.hasClass('inputLabelPassword')){ploneInputLabel._setInputType(t.removeClass('inputLabelPassword'),'password').focus().bind('blur.ploneInputLabel',ploneInputLabel.blur)}},blur: function(e){var t=jQuery(this);if(t.is(':password[value=""]')){t=ploneInputLabel._setInputType(this,'text').addClass('inputLabelPassword').bind('focus.ploneInputLabel',ploneInputLabel.focus);if(e.originalEvent&&e.originalEvent.explicitOriginalTarget){jQuery(e.originalEvent.explicitOriginalTarget).trigger('focus!')}}
if(!t.val()){t.addClass('inputLabelActive').val(t.attr('title'))}},submit: function(){jQuery('input[title].inputLabelActive').trigger('focus.ploneInputLabel')},_setInputType: function(elem,ntype){var $=jQuery,otype,nelem;otype=new RegExp('type="?'+$(elem).attr('type')+'"?');nelem=$($('<div></div>').append($(elem).clone()).html().replace(otype,'').replace(/\/?>/,'type="'+ntype+'" />'));$(elem).replaceWith(nelem);return nelem}};jQuery(function($){$('form:has(input[title].inputLabel)').submit(ploneInputLabel.submit);$('input[title].inputLabel').bind('focus.ploneInputLabel',ploneInputLabel.focus).bind('blur.ploneInputLabel',ploneInputLabel.blur).trigger('blur.ploneInputLabel')});

/* - jquery.highlightsearchterms.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/jquery.highlightsearchterms.js?original=1
(function($){var Highlighter,makeSearchKey,makeAddress,defaults;Highlighter=function(options){$.extend(this,options);this.terms=this.cleanTerms(this.terms.length?this.terms:this.getSearchTerms())};Highlighter.prototype={highlight: function(startnode){if(!this.terms.length||!startnode.length){return}
var self=this;$.each(this.terms, function(i,term){startnode.find('*:not(textarea)').andSelf().contents().each(function(){if(this.nodeType===3){self.highlightTermInNode(this,term)}})})},highlightTermInNode: function(node,word){var c=node.nodeValue,self=this,highlight,ci,index,next;if($(node).parent().hasClass(self.highlightClass)){return}
highlight=function(content){return $('<span class="'+self.highlightClass+'">'+content+'</span>')};ci=self.caseInsensitive;while(c&&(index=(ci?c.toLowerCase():c).indexOf(word))>-1){$(node).before(document.createTextNode(c.substr(0,index))).before(highlight(c.substr(index,word.length))).before(document.createTextNode(c.substr(index+word.length)));next=node.previousSibling;$(node).remove();node=next;c=node.nodeValue}},queryStringValue: function(uri,regexp){var match,pair;if(uri.indexOf('?')<0){return ''}
uri=uri.substr(uri.indexOf('?')+1);while(uri.indexOf('=')>=0){uri=uri.replace(/^\&*/,'');pair=uri.split('&',1)[0];uri=uri.substr(pair.length);match=pair.match(regexp);if(match){return decodeURIComponent(match[match.length-1].replace(/\+/g,' '))}}
return ''},termsFromReferrer: function(){var ref,i,se;ref=$.fn.highlightSearchTerms._test_referrer!==null?$.fn.highlightSearchTerms._test_referrer:document.referrer;if(!ref){return ''}
for(i=0;i<this.referrers.length;i+=1){se=this.referrers[i];if(ref.match(se.address)){return this.queryStringValue(ref,se.key)}}
return ''},cleanTerms: function(terms){var self=this;return $.unique($.map(terms, function(term){term=$.trim(self.caseInsensitive?term.toLowerCase():term);return(!term||self.filterTerms.test(term))?null:term}))},getSearchTerms: function(){var terms=[],uri=$.fn.highlightSearchTerms._test_location!==null?$.fn.highlightSearchTerms._test_location:location.href;if(this.useReferrer){$.merge(terms,this.termsFromReferrer().split(/\s+/))}
if(this.useLocation){$.merge(terms,this.queryStringValue(uri,this.searchKey).split(/\s+/))}
return terms}};makeSearchKey=function(key){return(typeof key==='string')?new RegExp('^'+key+'=(.*)$','i'):key};makeAddress=function(addr){return(typeof addr==='string')?new RegExp('^https?://(www\\.)?'+addr,'i'):addr};$.fn.highlightSearchTerms=function(options){options=$.extend({},defaults,options);options=$.extend(options,{searchKey:makeSearchKey(options.searchKey),referrers:$.map(options.referrers, function(se){return{address:makeAddress(se.address),key:makeSearchKey(se.key)}})});if(options.includeOwnDomain){var hostname=$.fn.highlightSearchTerms._test_location!==null?$.fn.highlightSearchTerms._test_location:location.hostname;options.referrers.push({address:makeAddress(hostname.replace(/\./g,'\\.')),key:options.searchKey})}
new Highlighter(options).highlight(this);return this};$.fn.highlightSearchTerms.referrers=[{address:'google\\.',key:'q'},{address:'search\\.yahoo\\.',key:'p'},{address:'search\\.msn\\.',key:'q'},{address:'search\\.live\\.',key:'query'},{address:'search\\.aol\\.',key:'userQuery'},{address:'ask\\.com',key:'q'},{address:'altavista\\.',key:'q'},{address:'feedster\\.',key:'q'}];defaults={terms:[],useLocation:true,searchKey:'(searchterm|SearchableText)',useReferrer:true,referrers:$.fn.highlightSearchTerms.referrers,includeOwnDomain:true,caseInsensitive:true,filterTerms:/(not|and|or)/i,highlightClass:'highlightedSearchTerm'};$.fn.highlightSearchTerms._test_location=null;$.fn.highlightSearchTerms._test_referrer=null;$.fn.highlightSearchTerms._highlighter=Highlighter}(jQuery));jQuery(function($){$('#region-content,#content').highlightSearchTerms({includeOwnDomain:$('dl.searchResults').length===0})});

/* - first_input_focus.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/first_input_focus.js?original=1
jQuery(function($){if($("form div.error :input:first").focus().length){return}
$("form.enableAutoFocus :input:not(.formTabs):visible:first").focus()});

/* - accessibility.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/accessibility.js?original=1
function setBaseFontSize(f,r){var b=jQuery('body');if(r){b.removeClass('smallText').removeClass('largeText');createCookie("fontsize",f,365)}b.addClass(f)}jQuery(function($){var f=readCookie("fontsize");if(f){setBaseFontSize(f,0)}});

/* - styleswitcher.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/styleswitcher.js?original=1
function setActiveStyleSheet(title,reset){jQuery('link[rel*=style][title]').attr('disabled',true).find('[title='+title+']').attr('disabled',false);if(reset){createCookie("wstyle",title,365)}}
jQuery(function(){var style=readCookie("wstyle");if(style){setActiveStyleSheet(style,0)}});

/* - toc.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/toc.js?original=1
jQuery(function($){var dest,content,location,stack,oltoc,numdigits,wlh,target,targetOffset;dest=$('dl.toc dd.portletItem');content=$('#region-content,#content');if(!content||!dest.length){return}
dest.empty();location=window.location.href;if(window.location.hash){location=location.substring(0,location.lastIndexOf(window.location.hash))}
stack=[];$(content).find('*').not('.comment > h3').filter(function(){return (/^h[1234]$/).test(this.tagName.toLowerCase())}).not('.documentFirstHeading').each(function(i){var level,ol,li;level=this.nodeName.charAt(1);while(stack.length<level){ol=$('<ol>');if(stack.length){li=$(stack[stack.length-1]).children('li:last');if(!li.length){li=$('<li>').appendTo($(stack[stack.length-1]))}
li.append(ol)}
stack.push(ol)}
while(stack.length>level){stack.pop()}
$(this).before($('<a name="section-'+i+'" />'));$('<li>').append($('<a />').attr('href',location+'#section-'+i).text($(this).text())).appendTo($(stack[stack.length-1]))});if(stack.length){var oltoc=$(stack[0]);var i=1;while(oltoc.children('li').length==1){oltoc=$(stack[i]);i+=1}
if(i<=stack.length){$('dl.toc').show()}
numdigits=oltoc.children().length.toString().length;oltoc.addClass("TOC"+numdigits+"Digit");dest.append(oltoc);wlh=window.location.hash;if(wlh){target=$(wlh);target=target.length&&target||$('[name='+wlh.slice(1)+']');targetOffset=target.offset();if(targetOffset){$('html,body').animate({scrollTop:targetOffset.top},0)}}}});

/* - collapsibleformfields.js - */
// http://www12.senado.leg.br/hpsenado/portal_javascripts/collapsibleformfields.js?original=1
(function($){$.fn.do_search_collapse=function(){
function check_used(element){var e=$(element);if(e.find('input[id$=_toggle]:checkbox').length>0){if(e.find('input[id$=_toggle]:checkbox:checked').length===0){return true}}
if(e.find(':text[value]').length>0){return true}
if(e.find('select .default_option').length>0){if(e.find('select .default_option:selected').length===0){return true}}
return false}
return this.each( function(){var indicator=$(this).find('.collapser:first'),collapse=$(this).find('.collapse:first');indicator.click(function(){var container=$(this).parent(),target=container.find('.collapse:first');target.slideToggle('normal');$(this).toggleClass('expanded');$(this).toggleClass('collapsed')});if(check_used(this)){indicator.addClass('expanded')} else{collapse.hide();indicator.addClass('collapsed')}})};jQuery(function($){$('.field.collapsible').do_search_collapse()})}(jQuery));
