(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{51:function(e,t,n){e.exports=n(61)},56:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),o=n.n(l),c=(n(56),n(37)),i=n.n(c),u=n(42),m=n(38),s=n(107),d=n(108),p=n(104),f=n(110),h=n(109),g=n(102),b=n(106),v=n(99),E=Object(v.a)((function(e){return{formControl:{margin:e.spacing(1),width:600},indeterminateColor:{color:"#f50057"},selectAllText:{fontWeight:500},selectedAll:{backgroundColor:"rgba(0, 0, 0, 0.08)","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.08)"}}}})),y={PaperProps:{style:{maxHeight:224,width:250}},getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},variant:"menu"},j=n(105),w=function(){var e=E(),t=Object(a.useState)([]),n=Object(m.a)(t,2),l=n[0],o=n[1],c=Object(a.useState)(null),v=Object(m.a)(c,2),w=v[0],k=v[1];function O(){return(O=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("data.json");case 2:return t=e.sent,e.t0=k,e.next=6,t.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){!function(){O.apply(this,arguments)}()}),[]);var A=null===w||void 0===w?void 0:w.programs;if(A){var x=function(e){var t=document.createElement("a"),n=new Blob([e],{type:"text/plain"});t.href=URL.createObjectURL(n),t.download="program_install.json",document.body.appendChild(t),t.click(),localStorage.clear()};return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-center"},r.a.createElement("article",{className:"hero-info"},r.a.createElement("h2",null,"Application dependency ",r.a.createElement("br",null)," template"),r.a.createElement("p",null,"To install your application dependencies select from the below list and generate the template, then add the file in your repository. If you can't find it in the list, you can send a request."))),r.a.createElement("div",{className:"quiz quiz-small"},r.a.createElement(g.a,{className:e.formControl},r.a.createElement(d.a,{id:"mutiple-select-label"},"Select programs"),r.a.createElement(b.a,{labelId:"mutiple-select-label",multiple:!0,value:l,onChange:function(e){var t=e.target.value;"all"!==t[t.length-1]?o(t):o(l.length===A.length?[]:A)},renderValue:function(e){return e.join(", ")},MenuProps:y},A.map((function(e){return r.a.createElement(h.a,{key:e.id,value:e.name},r.a.createElement(p.a,null,r.a.createElement(s.a,{checked:l.indexOf(e.name)>-1})),r.a.createElement(f.a,{primary:e.name}))}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(j.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(e){if(e.preventDefault(),0===l.length)alert("Nothing selected");else{var t=[];for(var n in l)for(var a in A)l[n]===A[a].name&&t.push(A[a]);localStorage.setItem("data",JSON.stringify(t));var r='{"programs":'.concat(localStorage.getItem("data"),"}");x(r),o([])}}},"Generate"),r.a.createElement("br",null),r.a.createElement(j.a,{title:"example@domain.com.tr",fullWidth:!0,variant:"contained",color:"secondary",onClick:function(){return window.location="mailto:example@domain.com.tr?Subject=New Dependency Request&body=Merhaba a\u015fa\u011f\u0131da bilgileri verilen program\u0131 listeye ekleyebilir misiniz?%0D%0A\n                Program Ad\u0131:%0D%0A\n                Versiyonu:%0D%0A\n                G\xfcncel \u0130ndirme Linki:%0D%0A\n                Detayl\u0131 Bilgi:%0D%0A\n                %20%0D%0A\n                \u0130yi \xe7al\u0131\u015fmalar."}},"Request New Dependency"))))}return r.a.createElement("div",null,"Hata olu\u015ftu.")};var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null))};o.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.eaaf7d21.chunk.js.map