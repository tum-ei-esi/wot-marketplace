(function(t){function e(e){for(var s,o,n=e[0],c=e[1],l=e[2],d=0,p=[];d<n.length;d++)o=n[d],a[o]&&p.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],s=!0,n=1;n<r.length;n++){var c=r[n];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var s={},a={app:0},i=[];function o(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=s,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(r,s,function(e){return t[e]}.bind(null,s));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var s=r("64a9"),a=r.n(s);a.a},"104b":function(t,e,r){"use strict";var s=r("efa8"),a=r.n(s);a.a},"17d9":function(t,e,r){},"210d":function(t,e,r){},"2ca0":function(t,e,r){"use strict";var s=r("17d9"),a=r.n(s);a.a},"2d19":function(t,e,r){},"302d":function(t,e,r){},"36bb":function(t,e,r){"use strict";var s=r("927e"),a=r.n(s);a.a},"54b0":function(t,e,r){"use strict";var s=r("6cb3"),a=r.n(s);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var s=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view"),r("Footer")],1)},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"header"},[r("li",{staticClass:"header-ci-element",attrs:{id:"header-logo"}}),r("li",{staticClass:"header-ci-element",attrs:{id:"header-title"}},[r("router-link",{attrs:{to:"/"}},[t._v("WoTify")])],1),r("li",{staticClass:"header-nav-element",on:{click:function(e){t.current=t.item.about}}},[r("router-link",{class:{selected:t.current==t.item.about},attrs:{to:"/about"}},[t._v("About")])],1),r("li",{staticClass:"header-nav-element",on:{click:function(e){t.current=t.item.search}}},[r("router-link",{class:{selected:t.current==t.item.search},attrs:{to:"/"}},[t._v("Search")])],1)])},n=[],c=(r("386d"),{name:"Header",data:function(){return{current:void 0,item:{search:"search",about:"about"}}},created:function(){this.current=this.item.search}}),l=c,u=(r("b186"),r("2877")),d=Object(u["a"])(l,o,n,!1,null,"d728b056",null),p=d.exports,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div")},m=[],h={name:"Footer"},v=h,b=Object(u["a"])(v,f,m,!1,null,"0522d377",null),g=b.exports,_={name:"app",components:{Header:p,Footer:g}},j=_,C=(r("034f"),Object(u["a"])(j,a,i,!1,null,null,null)),y=C.exports,k=r("8c4f"),P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("SearchBar",{on:{"search-btn-clicked":t.searchBtnClicked}}),r("Status",{class:{invisible:!t.loading&&"load"!=t.status},attrs:{status:t.status,propSearchTerm:t.searchTerm}}),r("div",{staticClass:"status-container",class:{invisible:"noResult"!=t.status}},[t._v('There are no projects for "'+t._s(t.searchTerm)+'"')]),r("SearchResults",{attrs:{projects:t.projects},on:{"project-item-clicked":t.projectItemClicked}})],1)},w=[],x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"search-bar-container"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],attrs:{type:"search",id:"search-bar",placeholder:"Search WoTify library"},domProps:{value:t.searchTerm},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("search-btn-clicked",t.searchTerm)},input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}}),r("button",{staticClass:"btn search-btn",on:{click:function(e){return t.$emit("search-btn-clicked",t.searchTerm)}}},[t._v("Search")]),r("button",{staticClass:"btn search-btn btn-right"},[r("router-link",{attrs:{to:"/new-project"}},[t._v("New Project")])],1)])},T=[],D={name:"SearchBar",data:function(){return{searchTerm:""}}},$=D,S=(r("d0f4"),Object(u["a"])($,x,T,!1,null,"4a7fc199",null)),E=S.exports,I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"status-container"},[r("div",{attrs:{id:"loading"}},[t._v("Loading...")]),r("div",{class:{invisible:"noResult"!=t.status},attrs:{id:"no-result"}},[t._v('There are no projects for "'+t._s(t.searchTerm)+'"')]),r("div",{staticClass:"invisible",attrs:{id:"error"}},[t._v("There was an error: "+t._s(t.error)+". Please check your connection.")])])},O=[],N={name:"Status",props:["status","loading","propSearchTerm"],data:function(){return{searchTerm:"",error:""}},created:function(){this.searchTerm=this.propSearchTerm}},G=N,R=(r("d92b"),Object(u["a"])(G,I,O,!1,null,"3a1baafa",null)),A=R.exports,L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"search-results"}},t._l(t.projects,function(e){return r("div",{key:e.id,staticClass:"project-item"},[r("ProjectItem",{attrs:{project:e},on:{"project-item-clicked":function(r){return t.$emit("project-item-clicked",e)}}})],1)}),0)},M=[],B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-item-container",on:{click:function(e){return t.$emit("project-item-clicked",t.project.artistId)}}},[r("div",{staticClass:"project-item project-item-top"},[r("p",{staticClass:"project-item-title"},[t._v(t._s(t.project.artistName))]),r("p",{staticClass:"project-item-description"},[t._v(t._s(t.project.artistViewUrl))])]),r("div",[r("p",{staticClass:"project-item project-item-bottom"},[t._v(t._s(t.project.artistId))])])])},V=[],U={name:"ProjectItem",props:["project"],data:function(){return{color:""}},created:function(){switch(this.project.platform){case"raspberry":this.color="red";break;case"arduino":this.color="blue";break;case"esp":this.color="green";break;case"other":default:this.color="grey"}}},F=U,H=(r("104b"),Object(u["a"])(F,B,V,!1,null,"8d60ce06",null)),J=H.exports,W={name:"SearchResults",components:{ProjectItem:J},props:["projects"]},K=W,Q=(r("54b0"),Object(u["a"])(K,L,M,!1,null,"238e16c0",null)),q=Q.exports,z=r("a18f"),X=r.n(z),Y={name:"SearchContainer",components:{SearchBar:E,Status:A,SearchResults:q},data:function(){return{searchTerm:"",loading:!1,status:"",projects:[],err:void 0}},methods:{searchBtnClicked:function(t){var e=this;this.searchTerm=t,this.status="load",this.loading=!0,X()("https://itunes.apple.com/search?term=".concat(encodeURIComponent(this.searchTerm),"&limit=10&media=music")).then(function(t){return t.json()}).then(function(t){e.loading=!1,e.status="",e.projects=t.results,0===e.projects.length&&(e.status="noResult"),console.log("results",t.results)}).catch(function(t){e.status="error",e.error=t})},projectItemClicked:function(t){this.$router.push({name:"Project",params:{project:{clickedProject:t}}})}}},Z=Y,tt=(r("7a63"),Object(u["a"])(Z,P,w,!1,null,"7f41744b",null)),et=tt.exports,rt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg"},[r("form",{staticClass:"form-container",on:{submit:t.addProject}},[r("div",{staticClass:"form-el"},[t._m(0),r("div",{staticClass:"form-el-right"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-el-right-input",attrs:{type:"text"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}})])]),r("div",{staticClass:"form-el"},[t._m(1),r("div",{staticClass:"form-el-right"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.shortDescription,expression:"form.shortDescription"}],staticClass:"form-el-right-input",attrs:{type:"text"},domProps:{value:t.form.shortDescription},on:{input:function(e){e.target.composing||t.$set(t.form,"shortDescription",e.target.value)}}})])]),r("div",{staticClass:"form-el"},[t._m(2),r("div",{staticClass:"form-el-right"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.longDescription,expression:"form.longDescription"}],staticClass:"form-el-right-input",attrs:{type:"text"},domProps:{value:t.form.longDescription},on:{input:function(e){e.target.composing||t.$set(t.form,"longDescription",e.target.value)}}})])]),r("div",{staticClass:"form-el"},[t._m(3),r("div",{staticClass:"form-el-right"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.url,expression:"form.url"}],staticClass:"form-el-right-input",attrs:{type:"text"},domProps:{value:t.form.url},on:{input:function(e){e.target.composing||t.$set(t.form,"url",e.target.value)}}})])]),r("div",{staticClass:"form-el"},[t._m(4),r("div",{staticClass:"form-el-right-td-area"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.thingDescription,expression:"form.thingDescription"}],staticClass:"form-el-right-input",attrs:{type:"text"},domProps:{value:t.form.thingDescription},on:{input:function(e){e.target.composing||t.$set(t.form,"thingDescription",e.target.value)}}})])]),t._m(5),t._m(6),t._m(7),t._m(8),r("div",{staticClass:"form-el"},[r("div",{staticClass:"form-el-one"},[r("button",{staticClass:"btn submit-btn",attrs:{type:"submit"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addProject(e)}}},[t._v("Create Project")])])]),r("div",{staticClass:"form-el"})])])},st=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-el-left"},[r("h4",{staticClass:"form-el-left-heading"},[r("label",[t._v("Title")])]),r("p",{staticClass:"form-el-left-text"},[t._v("Give your project a short, descriptive title.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-el-left"},[r("h4",{staticClass:"form-el-left-heading"},[r("label",[t._v("Short Description")])]),r("p",{staticClass:"form-el-left-text"},[t._v("Describe this project in one sentence (max 180 characters).")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-el-left"},[r("h4",{staticClass:"form-el-left-heading"},[r("label",[t._v("Description")])]),r("p",{staticClass:"form-el-left-text"},[t._v("Describe this project and how it is used.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-el-left"},[r("h4",{staticClass:"form-el-left-heading"},[r("label",[t._v("Repository Url")])]),r("p",{staticClass:"form-el-left-text"},[t._v("Add the URL of the repository, where your WoT project is hosted. Make sure it is publiclly available.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-el-left"},[r("h4",{staticClass:"form-el-left-heading"},[r("label",[t._v("Thing Description")])]),r("p",{staticClass:"form-el-left-text"},[t._v("Paste the Thing Description of your project")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-el"},[r("div",{staticClass:"form-el-left"},[r("h4",{staticClass:"form-el-left-heading"},[r("label",[t._v("Topic")])]),r("p",{staticClass:"form-el-left-text"},[t._v("Please select at least one topic for your project.")])]),r("div",{staticClass:"form-el-right"},[r("div",{staticClass:"form-el-right-radio-container"},[r("input",{staticClass:"form-el-right-radio",attrs:{type:"radio",id:"rad-1"}}),r("label",{staticClass:"form-el-right-radio-label",attrs:{for:"rad-1"}},[t._v("Sensor")])]),r("div",{staticClass:"form-el-right-radio-container"},[r("input",{staticClass:"form-el-right-radio",attrs:{type:"radio",id:"rad-2"}}),r("label",{staticClass:"form-el-right-radio-label",attrs:{for:"rad-2"}},[t._v("Robotics")])]),r("div",{staticClass:"form-el-right-radio-container"},[r("input",{staticClass:"form-el-right-radio",attrs:{type:"radio",id:"rad-3"}}),r("label",{staticClass:"form-el-right-radio-label",attrs:{for:"rad-3"}},[t._v("Actuator")])]),r("div",{staticClass:"form-el-right-radio-container"},[r("input",{staticClass:"form-el-right-radio",attrs:{type:"radio",id:"rad-4"}}),r("label",{staticClass:"form-el-right-radio-label",attrs:{for:"rad-4"}},[t._v("Other")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-el"},[r("div",{staticClass:"form-el-left"},[r("h4",{staticClass:"form-el-left-heading"},[r("label",[t._v("Platform")])]),r("p",{staticClass:"form-el-left-text"},[t._v("Pleace choose the according platform.")])]),r("div",{staticClass:"form-el-right"},[r("div",{staticClass:"form-el-right-radio-container"},[r("input",{staticClass:"form-el-right-radio",attrs:{type:"radio",id:"rad-plat-1"}}),r("label",{staticClass:"form-el-right-radio-label",attrs:{for:"rad-plat-1"}},[t._v("Raspberry")])]),r("div",{staticClass:"form-el-right-radio-container"},[r("input",{staticClass:"form-el-right-radio",attrs:{type:"radio",id:"rad-plat-2"}}),r("label",{staticClass:"form-el-right-radio-label",attrs:{for:"rad-plat-2"}},[t._v("Arduino")])]),r("div",{staticClass:"form-el-right-radio-container"},[r("input",{staticClass:"form-el-right-radio",attrs:{type:"radio",id:"rad-plat-3"}}),r("label",{staticClass:"form-el-right-radio-label",attrs:{for:"rad-plat-3"}},[t._v("ESP")])]),r("div",{staticClass:"form-el-right-radio-container"},[r("input",{staticClass:"form-el-right-radio",attrs:{type:"radio",id:"rad-plat-4"}}),r("label",{staticClass:"form-el-right-radio-label",attrs:{for:"rad-plat-4"}},[t._v("Other")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-el"},[r("div",{staticClass:"form-el-left"},[r("h4",{staticClass:"form-el-left-heading"},[r("label",[t._v("Implementation Type")])]),r("p",{staticClass:"form-el-left-text"},[t._v("To distinguish between the TD templates and source code with Github.")])]),r("div",{staticClass:"form-el-right"},[r("div",{staticClass:"form-el-right-radio-container"},[r("input",{staticClass:"form-el-right-radio",attrs:{type:"radio",id:"rad-impl-1"}}),r("label",{staticClass:"form-el-right-radio-label",attrs:{for:"rad-impl-1"}},[t._v("Template")])]),r("div",{staticClass:"form-el-right-radio-container"},[r("input",{staticClass:"form-el-right-radio",attrs:{type:"radio",id:"rad-impl-2"}}),r("label",{staticClass:"form-el-right-radio-label",attrs:{for:"rad-impl-2"}},[t._v("Code")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-el"},[r("div",{staticClass:"form-el-left"},[r("h4",{staticClass:"form-el-left-heading"},[r("label",[t._v("Tags")])]),r("p",{staticClass:"form-el-left-text"},[t._v("Add some tags that will help others find your project. Comma or space separate the tags.")])]),r("div",{staticClass:"form-el-right"},[r("ul",{staticClass:"form-el-right-input",attrs:{id:"add-tags"}},[r("li",{staticClass:"tag"},[t._v("Bla")]),r("li",{staticClass:"form-el-right-tag-list-input"},[r("input",{staticClass:"form-el-right-tag-input",attrs:{type:"text"}})])])])])}],at={name:"AddProject",data:function(){return{form:{title:"",shortDescription:"",longDescription:"",url:""}}},methods:{addProject:function(t){var e=!1;t.preventDefault();var r=this.form;e=!0,e?this.$router.push({name:"Project",params:{project:{newProject:r}}}):console.log("Form is not correct")}}},it=at,ot=(r("59cc"),Object(u["a"])(it,rt,st,!1,null,"398c8384",null)),nt=ot.exports,ct=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project"},[r("div",[r("h1",{staticClass:"project-title"},[t._v(t._s(t.prName))]),r("p",{staticClass:"project-short-description"},[t._v(t._s(t.prShortDescr))]),r("div",{staticClass:"project-content-left"},[r("div",{staticClass:"project-content-left-container"},[r("ProjectGeneral",{class:{invisible:t.buttons.btnG!=t.selected},attrs:{projectGeneral:t.prLongDescr}}),r("ProjectTD",{class:{invisible:t.buttons.btnT!=t.selected},attrs:{projectTD:t.prTD}})],1),r("div",{staticClass:"project-content-left-btns"},[r("a",{staticClass:"left",class:{active:t.buttons.btnG==t.selected},attrs:{href:"#",id:"btn-general"},on:{click:function(e){t.selected=t.buttons.btnG}}},[t._v("General")]),r("a",{staticClass:"middle",class:{active:t.buttons.btnT==t.selected},attrs:{href:"#",id:"btn-td"},on:{click:function(e){t.selected=t.buttons.btnT}}},[t._v("Thing Description")])])])]),r("div",{staticClass:"project-content-right"},[r("ProjectInfobox",{attrs:{projectInfo:t.prInfo}})],1)])},lt=[],ut=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"info-container"},[r("h4",[t._v("General Info")]),r("div",{staticClass:"info-el"},[t._v("Type: "+t._s(t.projectInfo.implType))]),r("div",{staticClass:"info-el"},[t._v("Topic: "+t._s(t.projectInfo.topic))]),r("div",{staticClass:"info-el"},[t._v("Platform: "+t._s(t.projectInfo.platform))]),r("div",{staticClass:"info-el"},[t._v("Complexity: "+t._s(t.projectInfo.complexity))]),r("div",{staticClass:"info-el"},[r("a",{attrs:{target:"_blank",href:""+t.projectInfo.url}},[t._v("View on Github")])])]),r("div",{staticClass:"info-container"},[r("h4",[t._v("Keywords")]),r("ul",{staticClass:"info-tags"},t._l(t.projectInfo.tags,function(e){return r("li",{key:e,staticClass:"info-tag"},[t._v(t._s(e))])}),0)])])},dt=[],pt={name:"ProjectInfobox",props:["projectInfo"]},ft=pt,mt=(r("2ca0"),Object(u["a"])(ft,ut,dt,!1,null,"95e47320",null)),ht=mt.exports,vt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"project-general-container"},[r("vue-markdown",[t._v("\n*first one*\n")]),r("VueShowdown",{attrs:{markdown:"## markdown text",flavor:"github",options:{emoji:!0}}}),r("div",{staticClass:"project-general-container"},[t._v(t._s(t.projectGeneral))])],1)])},bt=[],gt=r("9ce6"),_t=r.n(gt),jt=r("866c"),Ct=r.n(jt),yt={name:"ProjectGeneral",props:["projectGeneral"],components:{VueMarkdown:_t.a,VueShowdown:Ct.a}},kt=yt,Pt=(r("36bb"),Object(u["a"])(kt,vt,bt,!1,null,"7b25ee8a",null)),wt=Pt.exports,xt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-td-container"},[r("vue-json-pretty",{attrs:{path:"res",data:t.projectTD,showDoubleQuotes:!0,showLine:!0,showLength:!0,highlightMouseoverNode:!0}})],1)},Tt=[],Dt=r("d538"),$t=r.n(Dt),St={name:"ProjectTD",props:["projectTD"],components:{VueJsonPretty:$t.a}},Et=St,It=(r("c733"),Object(u["a"])(Et,xt,Tt,!1,null,"919bfd22",null)),Ot=It.exports,Nt={name:"Project",components:{ProjectInfobox:ht,ProjectGeneral:wt,ProjectTD:Ot},props:["project"],data:function(){return{buttons:{btnG:"btn-general",btnT:"btn-td"},selected:void 0,prName:"",prShortDescr:"",prLongDescr:"",prTD:"",prInfo:{implType:"",platform:"",complexity:"",topic:"",tags:["Hi","Bla","sadhasd","asdasd","ASdads"],url:""}}},created:function(){this.selected=this.buttons.btnG,this.project&&(this.project.clickedProject&&(this.prName=this.project.clickedProject.artistName,this.prShortDescr=this.project.clickedProject.collectionCensoredName,this.getReadme("something"),this.prTD=this.project.clickedProject.artistViewUrl,this.prInfo.implType=this.project.clickedProject.trackPrice,this.prInfo.platform=this.project.clickedProject.trackNumber,this.prInfo.complexity=this.project.clickedProject.trackCount,this.prInfo.topic=this.project.clickedProject.trackCount,this.prInfo.url=this.project.clickedProject.previewUrl),this.project.newProject&&(this.prName=this.project.newProject.title,this.prShortDescr=this.project.newProject.shortDescription,this.prLongDescr=this.project.newProject.longDescription))},methods:{getReadme:function(t){var e=this;this.entryPoint="https://api.github.com/repos",this.searchTerm="/tum-ei-esi/wot-marketplace",this.readmeEndPoint="/readme",this.download_url="",fetch("https://api.github.com/repos/tum-ei-esi/testbench/readme").then(function(t){return t.json()}).then(function(t){console.log("resJSON is ",t),e.html_url=t.html_url,e.download_url=t.download_url,console.log("urls are",e.html_url,e.download_url)}).then(fetch("https://raw.githubusercontent.com/tum-ei-esi/wot-marketplace/ege-frontend/README.md").then(function(t){return t.text()}).then(function(t){console.log("markdown in text is ",t),e.prLongDescr=t})).catch(function(t){e.status="error",e.error=t})}}},Gt=Nt,Rt=(r("8815"),Object(u["a"])(Gt,ct,lt,!1,null,"93b32fd2",null)),At=Rt.exports,Lt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Mt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about-container"},[r("h1",[t._v("About")]),r("p",[t._v("Wotify About page")])])}],Bt={name:"About"},Vt=Bt,Ut=(r("a008"),Object(u["a"])(Vt,Lt,Mt,!1,null,"e90d1a56",null)),Ft=Ut.exports;s["a"].use(k["a"]);var Ht=new k["a"]({routes:[{path:"/",name:"home",component:et},{path:"/new-project",name:"AddProject",component:nt},{path:"/project",name:"Project",component:At,props:!0},{path:"/about",name:"About",component:Ft}]});s["a"].config.productionTip=!1,new s["a"]({router:Ht,render:function(t){return t(y)}}).$mount("#app")},"59cc":function(t,e,r){"use strict";var s=r("2d19"),a=r.n(s);a.a},"633e":function(t,e,r){},"64a9":function(t,e,r){},"697b":function(t,e,r){},"6cb3":function(t,e,r){},"7a63":function(t,e,r){"use strict";var s=r("633e"),a=r.n(s);a.a},"7b83":function(t,e,r){},8815:function(t,e,r){"use strict";var s=r("697b"),a=r.n(s);a.a},"927e":function(t,e,r){},a008:function(t,e,r){"use strict";var s=r("210d"),a=r.n(s);a.a},b186:function(t,e,r){"use strict";var s=r("bbcc"),a=r.n(s);a.a},b45e:function(t,e,r){},bbcc:function(t,e,r){},c733:function(t,e,r){"use strict";var s=r("b45e"),a=r.n(s);a.a},d0f4:function(t,e,r){"use strict";var s=r("7b83"),a=r.n(s);a.a},d92b:function(t,e,r){"use strict";var s=r("302d"),a=r.n(s);a.a},efa8:function(t,e,r){}});
//# sourceMappingURL=app.564f2810.js.map