(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(46)},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),l=n.n(c),o=n(14),i=n(15),s=n(16),d=n(19),u=n(17),p=n(20),h=n(2),m=n.n(h),b=n(18),f=(n(44),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",receiptId:0,price1:0,price2:0},n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;return n.setState(Object(o.a)({},r,a))},n.createAndDownloadPdf=function(){m.a.post("/create-pdf",n.state).then(function(){return m.a.get("fetch-pdf",{responseType:"blob"})}).then(function(e){var t=new Blob([e.data],{type:"application/pdf"});Object(b.saveAs)(t,"newPdf.pdf")})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App bg"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"head"},r.a.createElement("h1",null,"Enter Your Details to Download Cerificate")),r.a.createElement("input",{class:"box",type:"text",placeholder:"Enter Student Name",name:"name",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{class:"box",type:"text",placeholder:"Enter Student Role",name:"role",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{class:"box",type:"text",placeholder:"Enter Course Name",name:"course",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.createAndDownloadPdf},"Download PDF")))}}]),t}(a.Component));l.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.47b2555a.chunk.js.map