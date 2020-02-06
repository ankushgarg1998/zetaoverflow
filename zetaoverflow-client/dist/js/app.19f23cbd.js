(function(t){function e(e){for(var s,a,i=e[0],u=e[1],c=e[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(s=!1)}s&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var s={},a={app:0},r={app:0},o=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"efa735ad"}[t]+".js"}function u(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"12c3fd98"}[t]+".css",r=u.p+s,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var c=o[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===s||l===r))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===s||l===r)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var s=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete a[t],h.parentNode.removeChild(h),n(o)},h.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){a[t]=0})));var s=r[t];if(0!==s)if(s)e.push(s[2]);else{var o=new Promise((function(e,n){s=r[t]=[e,n]}));e.push(s[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(h);var n=r[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",d.name="ChunkLoadError",d.type=s,d.request=a,n[1](d)}r[t]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=s,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)u.d(n,s,function(e){return t[e]}.bind(null,s));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var h=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0411":function(t,e,n){"use strict";var s=n("1f15"),a=n.n(s);a.a},1237:function(t,e,n){},"16ca":function(t,e,n){},"1f15":function(t,e,n){},"1f97":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"answers-question"},[this.edit?t._e():n("router-link",{attrs:{to:{path:"/answers",query:{questionId:this.question.id}}}},[n("h4",{staticClass:"card-title"},[t._v(t._s(t.question.title))])]),this.edit?n("b-form-input",{attrs:{placeholder:"Question Title",maxlength:"200"},model:{value:t.updatedQuestion.title,callback:function(e){t.$set(t.updatedQuestion,"title",e)},expression:"updatedQuestion.title"}}):t._e(),n("b-row",[n("b-col",{attrs:{cols:"2",sm:"1"}},[n("div",{staticClass:"votes"},[n("b-icon",{staticClass:"vote upvote",class:{"upvote-active":1===t.currentUserVote},attrs:{icon:"chevron-compact-up"},on:{click:t.upvote}}),n("h5",[t._v(t._s(t.votes))]),n("b-icon",{staticClass:"vote downvote",class:{"downvote-active":-1===t.currentUserVote},attrs:{icon:"chevron-compact-down"},on:{click:t.downvote}})],1)]),n("b-col",{staticClass:"question-text",attrs:{cols:"10",sm:"11"}},[this.edit?n("div",{staticClass:"edit-answer"},[n("br"),n("b-form-textarea",{attrs:{id:"textarea",placeholder:"Explain your question...",rows:"3","max-rows":"6"},model:{value:t.updatedQuestion.text,callback:function(e){t.$set(t.updatedQuestion,"text",e)},expression:"updatedQuestion.text"}}),n("br")],1):t._e(),this.edit?t._e():n("b-card-text",{domProps:{innerHTML:t._s(t.question.text)}},[t._v(t._s(t.question.text))]),n("b-row",[n("b-col",{attrs:{sm:"8"}},[this.edit?t._e():n("ul",t._l(t.tags,(function(e){return n("li",{key:e.id},[n("b-badge",{staticClass:"tag",attrs:{variant:"primary"}},[t._v(t._s(e.name))])],1)})),0),this.edit?n("b-form-group",{attrs:{state:t.state},scopedSlots:t._u([{key:"invalid-feedback",fn:function(){return[t._v("You must provide no more than 10 tags")]},proxy:!0},{key:"description",fn:function(){return[t._v("Tags must less than 20 characters and lowercase.")]},proxy:!0}],null,!1,3009845164)},[n("b-form-tags",{attrs:{"tag-variant":"primary",placeholder:"Enter space seperated tags...",state:t.state,"tag-validator":t.tagValidator,separator:" "},model:{value:t.updatedQuestion.tags,callback:function(e){t.$set(t.updatedQuestion,"tags",e)},expression:"updatedQuestion.tags"}})],1):t._e()],1),n("b-col",{attrs:{sm:"4"}},[n("b-row",[n("b-col",{attrs:{cols:"9"}},[n("p",[n("sub",[t._v("asked "+t._s(t.timeDiff(t.question.createdAt))+" by")]),n("br"),t.question.updatedAt?n("sub",[t._v("updated "+t._s(t.timeDiff(t.question.updatedAt))+" by")]):t._e()]),n("router-link",{attrs:{to:"/profile/"+t.question.user.id}},[n("p",[n("b-icon",{attrs:{icon:"person-fill"}}),t._v(" "+t._s(t.question.user.username)+" ")],1)])],1),t.currentUserId===t.question.user.id?n("b-col",{staticClass:"options",attrs:{cols:"3"}},[n("b-icon",{staticClass:"edit option",attrs:{icon:"pencil"},on:{click:t.editQuestion}}),n("b-icon",{staticClass:"delete option",attrs:{icon:"x-circle"},on:{click:t.deleteQuestion}})],1):t._e()],1)],1)],1),this.edit?n("b-button",{attrs:{variant:"primary"},on:{click:t.updateQuestion}},[t._v("Update question")]):t._e()],1)],1)],1)},a=[],r=(n("99af"),n("d81d"),n("b0c0"),n("ac1f"),n("5319"),n("e01f")),o=n.n(r),i=n("d722"),u={name:"questionComponent",props:["question"],data:function(){return{loggedIn:null!==localStorage.getItem("userId"),tags:[],votes:0,currentUserVote:0,updatedQuestion:{title:"",text:"",tags:[]},currentUserId:localStorage.getItem("userId"),edit:!1,dirty:!1}},computed:{state:function(){return this.dirty?this.updatedQuestion.tags.length<11:null}},watch:{question:{handler:"loadTags",immediate:!0},"updatedQuestion.tags":function(t,e){this.dirty=!0}},methods:{tagValidator:function(t){return t===t.toLowerCase()&&t.length>0&&t.length<20},loadTags:function(){var t=this;this.question.text=this.question.text.replace(/\r?\n/g,"<br />"),i["a"].get("/questions/".concat(this.question.id,"/tags")).then((function(e){t.tags=e.data,t.question.tags=t.tags})).catch((function(t){return window.console.log(t)})),this.loadVotes()},loadVotes:function(){var t=this;i["a"].get("/questions/".concat(this.question.id,"/vote")).then((function(e){for(var n=0,s=0;s<e.data.length;s++)n+=e.data[s].value,e.data[s].userId==t.currentUserId&&(t.currentUserVote=e.data[s].value);t.votes=n})).catch((function(t){return window.console.log(t)}))},tagClick:function(t){var e=t.target.innerHTML;this.$router.push("/questions?tag=".concat(e))},editQuestion:function(){this.updatedQuestion.title=this.question.title,this.updatedQuestion.text=this.question.text,this.updatedQuestion.tags=this.tags.map((function(t){return t.name})),this.edit=!this.edit},updateQuestion:function(){var t=this,e=!0;if(this.updatedQuestion.title.length<5&&(alert("Title of the question must be atleast 5 characters long."),e=!1),e){var n={title:this.updatedQuestion.title,text:this.updatedQuestion.text};i["a"].put("/questions/".concat(this.question.id),n).then((function(e){return t.question=e.data})).catch((function(t){return window.console.log(t)})),i["a"].post("/questions/".concat(this.question.id,"/tags"),this.updatedQuestion.tags).then((function(e){return t.tags=e.data})).catch((function(t){return window.console.log(t)})),this.edit=!1,this.$emit("updateQuestion",this.question)}},deleteQuestion:function(){var t=this;i["a"].delete("/questions/".concat(this.question.id)).then((function(e){t.$emit("deleteQuestion"),t.$route.query.questionId&&t.$router.push("/questions")})).catch((function(t){return window.console.log(t)}))},timeDiff:o.a.timeDiff,upvote:function(){var t=this;this.loggedIn?i["a"].post("/questions/".concat(this.question.id,"/vote/").concat(1===this.currentUserVote?0:1)).then((function(e){t.votes+=0===t.currentUserVote?1:1===t.currentUserVote?-1:2,t.currentUserVote=1===t.currentUserVote?0:1})).catch((function(t){return window.console.log(t)})):alert("Please login to vote.")},downvote:function(){var t=this;this.loggedIn?i["a"].post("/questions/".concat(this.question.id,"/vote/").concat(-1===this.currentUserVote?0:-1)).then((function(e){t.votes+=0===t.currentUserVote?-1:-1===t.currentUserVote?1:-2,t.currentUserVote=-1===t.currentUserVote?0:-1})).catch((function(t){return window.console.log(t)})):alert("Please login to vote.")}}},c=u,l=(n("371a"),n("2877")),d=Object(l["a"])(c,s,a,!1,null,"28b5a2bd",null);e["a"]=d.exports},"266f":function(t,e,n){},"26b3":function(t,e,n){"use strict";var s=n("1237"),a=n.n(s);a.a},"2c09":function(t,e,n){"use strict";var s=n("41ef"),a=n.n(s);a.a},"371a":function(t,e,n){"use strict";var s=n("d13c"),a=n.n(s);a.a},4179:function(t,e,n){"use strict";var s=n("6d39"),a=n.n(s);a.a},"41ef":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"relative"}},[n("div",{attrs:{id:"app"}},[n("Header"),n("b-container",[n("router-view",{key:t.$route.fullPath})],1)],1),t._m(0)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[t._v(" v1.0 | Made by Ankush, Samarth and Vaibhav for "),n("strong",[t._v("Zeta")]),t._v(" | 2020 ")])}],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"primary"}},[n("b-navbar-brand",{attrs:{"router-link":"",to:"/"}},[n("strong",[t._v("ZetaOverflow")])]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{"router-link":"",to:"/questions"}},[t._v("All questions")]),t.loggedIn?n("b-nav-item",{attrs:{"router-link":"",to:"/questions/add"}},[t._v("Ask question")]):t._e(),n("b-nav-item",{attrs:{"router-link":"",to:"/questions/search?q="}},[t._v("Find question")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-form",{on:{submit:t.search}},[n("b-input-group",[n("b-form-input",{attrs:{size:"sm",placeholder:"Search"},model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}}),n("b-input-group-append",[n("b-button",{attrs:{type:"submit",variant:"light",size:"sm"}},[n("b-icon",{attrs:{icon:"search"}})],1)],1)],1)],1),n("b-nav-item"),t.loggedIn?t._e():n("b-nav-item",{attrs:{"router-link":"",to:"/login"}},[t._v("Login")]),t.loggedIn?t._e():n("b-nav-item",{attrs:{"router-link":"",to:"/signup"}},[t._v("Signup")]),t.loggedIn?n("b-nav-item",{attrs:{"router-link":"",to:"/profile/"+t.currentUserId}},[t._v("My Profile")]):t._e(),t.loggedIn?n("b-nav-item",{on:{click:t.logout}},[t._v("Logout")]):t._e()],1)],1)],1)],1)},i=[],u={name:"nav-header",data:function(){return{loggedIn:null!==localStorage.getItem("userId"),currentUserId:localStorage.getItem("userId"),searchString:""}},methods:{logout:function(){this.loggedIn=!1,localStorage.clear(),window.location.pathname="/"},search:function(t){t.preventDefault();var e=this.searchString;this.$router.push("/questions/search?q=".concat(e))}}},c=u,l=(n("ddea"),n("2877")),d=Object(l["a"])(c,o,i,!1,null,"8717468c",null),h=d.exports,f={name:"app",components:{Header:h}},p=f,v=(n("5c0b"),Object(l["a"])(p,a,r,!1,null,null,null)),g=v.exports,m=(n("f669"),n("5f5b")),w=n("b1e0"),b=(n("d3b7"),n("8c4f")),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",[n("p",{staticClass:"heading"},[t._v("Welcome to ZetaOverflow")]),n("b-row",[n("b-col",{staticClass:"box-wrapper"},[n("div",{staticClass:"div-box"},[n("h1",[t._v(t._s(t.userCount))]),n("p",[t._v("Users")])])]),n("b-col",{staticClass:"box-wrapper"},[n("div",{staticClass:"div-box"},[n("h1",[t._v(t._s(t.questionCount))]),n("p",[t._v("Questions")])])]),n("b-col",{staticClass:"box-wrapper"},[n("div",{staticClass:"div-box"},[n("h1",[t._v(t._s(t.answerCount))]),n("p",[t._v("Answers")])])])],1)],1)])},_=[],q=n("d722"),x={data:function(){return{loggedIn:null!==localStorage.getItem("userId"),userCount:0,questionCount:0,answerCount:0}},created:function(){var t=this;q["a"].get("/questions/count").then((function(e){return t.questionCount=e.data})).catch((function(t){return window.console.log(t)})),q["a"].get("/users/count").then((function(e){return t.userCount=e.data})).catch((function(t){return window.console.log(t)})),q["a"].get("/answers/count").then((function(e){return t.answerCount=e.data})).catch((function(t){return window.console.log(t)}))}},A=x,C=(n("26b3"),Object(l["a"])(A,y,_,!1,null,"6d6a7ce3",null)),k=C.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"question"},[n("Question",{attrs:{question:t.question}})],1),n("h4",[t._v(t._s(this.rows)+" Answers")]),n("b-tabs",{attrs:{"content-class":"mt-3",align:"right"}},[n("b-tab",{attrs:{title:"Oldest"},on:{click:function(e){t.sortBy="oldest"}}}),n("b-tab",{attrs:{title:"Latest"},on:{click:function(e){t.sortBy="latest"}}}),n("b-tab",{attrs:{title:"Most Voted",active:""},on:{click:function(e){t.sortBy="votes"}}})],1),n("div",{staticClass:"answers"},t._l(t.answers,(function(e,s){return n("div",{key:e.id,staticClass:"answer"},[n("Answer",{attrs:{answer:e},on:{updateAnswer:function(e){return t.updateAnswer(s,e)},deleteAnswer:function(){return t.deleteAnswer(s)}}})],1)})),0),n("div",{staticClass:"mt-3"},[t.rows>5?n("b-pagination",{attrs:{"per-page":t.perPage,"total-rows":t.rows,align:"center"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],1),n("AddAnswer",{on:{addAnswer:t.addAnswer}})],1)},I=[],U=(n("99af"),n("a434"),n("2909")),P=n("1f97"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-answer"},[t.loggedIn?n("div",[n("h5",[t._v("Your Answer")]),n("br"),n("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6"},model:{value:t.newAnswer,callback:function(e){t.newAnswer=e},expression:"newAnswer"}}),n("br"),n("b-button",{attrs:{variant:"primary"},on:{click:t.addAnswer}},[t._v("Post your answer")])],1):t._e()])},E=[],V={name:"addAnswer",data:function(){return{newAnswer:"",loggedIn:null!==localStorage.getItem("userId")}},methods:{addAnswer:function(){var t=!0;if(this.newAnswer.length<5&&(alert("Answer must be atleast 5 characters long."),t=!1),t){var e={text:this.newAnswer};this.$emit("addAnswer",e),this.newAnswer=""}}}},$=V,O=Object(l["a"])($,S,E,!1,null,null,null),j=O.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",[n("b-row",[n("b-col",{attrs:{cols:"2",sm:"1"}},[n("div",{staticClass:"votes"},[n("b-icon",{staticClass:"vote upvote",class:{"upvote-active":1===t.currentUserVote},attrs:{icon:"chevron-compact-up"},on:{click:t.upvote}}),n("h5",[t._v(t._s(t.votes))]),n("b-icon",{staticClass:"vote downvote",class:{"downvote-active":-1===t.currentUserVote},attrs:{icon:"chevron-compact-down"},on:{click:t.downvote}})],1)]),n("b-col",{staticClass:"question-text",attrs:{cols:"10",sm:"11"}},[this.edit?n("div",{staticClass:"edit-answer"},[n("b-form-textarea",{attrs:{id:"textarea",rows:"3","max-rows":"6"},model:{value:t.updatedAnswer,callback:function(e){t.updatedAnswer=e},expression:"updatedAnswer"}}),n("br"),n("b-button",{attrs:{variant:"primary"},on:{click:t.updateAnswer}},[t._v("Update answer")])],1):t._e(),this.edit?t._e():n("b-card-text",{domProps:{innerHTML:t._s(t.answer.text)}},[t._v(t._s(t.answer.text))]),n("b-row",[n("b-col",{attrs:{sm:"9"}}),n("b-col",{attrs:{sm:"3"}},[n("b-row",[n("b-col",{attrs:{cols:"9"}},[n("p",[n("sub",[t._v("answered "+t._s(t.timeDiff(t.answer.createdAt))+" by")]),n("br"),t.answer.updatedAt?n("sub",[t._v("updated "+t._s(t.timeDiff(t.answer.updatedAt))+" by")]):t._e()]),n("p",[n("b-icon",{attrs:{icon:"person-fill"}}),t._v(" "+t._s(t.answer.user.username)+" ")],1)]),t.currentUserId===t.answer.user.id?n("b-col",{staticClass:"options",attrs:{cols:"3"}},[n("b-icon",{staticClass:"edit option",attrs:{icon:"pencil"},on:{click:t.editAnswer}}),n("b-icon",{staticClass:"delete option",attrs:{icon:"x-circle"},on:{click:t.deleteAnswer}})],1):t._e()],1)],1)],1)],1)],1)],1)},D=[],L=(n("ac1f"),n("5319"),n("e01f")),M=n.n(L),N={name:"answer",data:function(){return{loggedIn:null!==localStorage.getItem("userId"),edit:!1,updatedAnswer:"",votes:0,currentUserVote:0,currentUserId:localStorage.getItem("userId")}},props:["answer"],watch:{answer:{handler:"loadVotes",immediate:!0}},methods:{loadVotes:function(){var t=this;this.answer.text=this.answer.text.replace(/\r?\n/g,"<br />"),q["a"].get("/answers/".concat(this.answer.id,"/vote")).then((function(e){window.console.log(e.data);for(var n=0,s=0;s<e.data.length;s++)n+=e.data[s].value,e.data[s].userId==t.currentUserId&&(t.currentUserVote=e.data[s].value);t.votes=n})).catch((function(t){return window.console.log(t)}))},editAnswer:function(){this.updatedAnswer=this.answer.text,this.edit=!this.edit},updateAnswer:function(){var t=!0;this.updatedAnswer.length<5&&(alert("Answer must be atleast 5 characters long."),t=!1),t&&(this.$emit("updateAnswer",{text:this.updatedAnswer}),this.edit=!1)},deleteAnswer:function(){this.$emit("deleteAnswer")},timeDiff:M.a.timeDiff,upvote:function(){var t=this;this.loggedIn?q["a"].post("/answers/".concat(this.answer.id,"/vote/").concat(1===this.currentUserVote?0:1)).then((function(e){t.votes+=0===t.currentUserVote?1:1===t.currentUserVote?-1:2,t.currentUserVote=1===t.currentUserVote?0:1})).catch((function(t){return window.console.log(t)})):alert("Please login to vote.")},downvote:function(){var t=this;this.loggedIn?q["a"].post("/answers/".concat(this.answer.id,"/vote/").concat(-1===this.currentUserVote?0:-1)).then((function(e){t.votes+=0===t.currentUserVote?-1:-1===t.currentUserVote?1:-2,t.currentUserVote=-1===t.currentUserVote?0:-1})).catch((function(t){return window.console.log(t)})):alert("Please login to vote.")}}},B=N,z=(n("59c2"),Object(l["a"])(B,T,D,!1,null,"2890a778",null)),H=z.exports,R={name:"answers",components:{Question:P["a"],Answer:H,AddAnswer:j},data:function(){return{question:{},tags:[],answers:[],rows:1,currentPage:1,perPage:5,sortBy:"votes"}},watch:{currentPage:{handler:"loadAnswers",immediate:!0},sortBy:{handler:"loadAnswers",immediate:!0}},methods:{loadAnswers:function(){var t=this,e=this.$route.query.questionId;q["a"].get("/questions/".concat(e,"/answers/page/").concat(this.currentPage-1,"?sortBy=").concat(this.sortBy)).then((function(e){window.console.log(e.data),t.answers=e.data.content,t.rows=e.data.totalElements})).catch((function(t){return window.console.log(t)}))},addAnswer:function(t){var e=this;q["a"].post("/questions/".concat(this.question.id,"/answers"),t).then((function(t){return e.answers.push(t.data)})).catch((function(t){return window.console.log(t)}))},updateAnswer:function(t,e){var n=this;q["a"].put("/answers/".concat(this.answers[t].id),e).then((function(e){var s=Object(U["a"])(n.answers);s[t]=e.data,n.answers=s})).catch((function(t){return window.console.log(t)}))},deleteAnswer:function(t){var e=this;q["a"].delete("/answers/".concat(this.answers[t].id)).then((function(n){e.answers.splice(t,1)})).catch((function(t){return window.console.log(t)}))}},created:function(){var t=this,e=this.$route.query.questionId;e||this.$router.push("/"),q["a"].get("/questions/".concat(e)).then((function(e){return t.question=e.data})).catch((function(t){return window.console.log(t)})),this.loadAnswers()}},Y=R,Z=(n("0411"),Object(l["a"])(Y,Q,I,!1,null,"2e209177",null)),J=Z.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-question"},[n("h3",[t._v("Add Question")]),n("br"),n("b-form-input",{attrs:{placeholder:"Question Title",maxlength:"200"},model:{value:t.newQuestion.title,callback:function(e){t.$set(t.newQuestion,"title",e)},expression:"newQuestion.title"}}),n("br"),n("b-form-textarea",{attrs:{id:"textarea",placeholder:"Explain your question...",rows:"8","max-rows":"8"},model:{value:t.newQuestion.text,callback:function(e){t.$set(t.newQuestion,"text",e)},expression:"newQuestion.text"}}),n("br"),n("b-form-group",{attrs:{state:t.state},scopedSlots:t._u([{key:"invalid-feedback",fn:function(){return[t._v("You must provide no more than 10 tags")]},proxy:!0},{key:"description",fn:function(){return[t._v(" Tags must less than 20 characters and lowercase. ")]},proxy:!0}])},[n("b-form-tags",{attrs:{"tag-variant":"primary",placeholder:"Enter space seperated tags...",state:t.state,"tag-validator":t.tagValidator,separator:" "},model:{value:t.tagsArray,callback:function(e){t.tagsArray=e},expression:"tagsArray"}})],1),n("br"),n("br"),n("b-button",{attrs:{variant:"primary"},on:{click:t.addQuestion}},[t._v("Post your question")])],1)},K=[],W={name:"addQuestion",data:function(){return{newQuestion:{title:"",text:""},tagsArray:[],dirty:!1}},computed:{state:function(){return this.dirty?this.tagsArray.length<11:null}},watch:{tagsArray:function(t,e){this.dirty=!0}},methods:{tagValidator:function(t){return t===t.toLowerCase()&&t.length>0&&t.length<20},addQuestion:function(){var t=this,e=!0;this.newQuestion.title.length<5&&(alert("Title of the question must be atleast 5 characters long."),e=!1),e&&q["a"].post("/questions",this.newQuestion).then((function(e){q["a"].post("/questions/".concat(e.data.id,"/tags"),t.tagsArray).then((function(e){return t.$router.push("/questions")})).catch((function(t){return window.console.log(t)}))})).catch((function(t){return window.console.log(t)}))}}},G=W,X=(n("8b72"),Object(l["a"])(G,F,K,!1,null,"18e8fee2",null)),tt=X.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-row",[n("b-col",{attrs:{sm:"6","offset-sm":"3"}},[n("b-jumbotron",{staticClass:"header-body",scopedSlots:t._u([{key:"header",fn:function(){return[t._v("SignUp")]},proxy:!0}])},[n("form",{staticClass:"form-body",on:{submit:t.validate}},[n("label",[t._v("Username:")]),n("b-form-input",{attrs:{placeholder:"Enter your Username"},model:{value:t.Username,callback:function(e){t.Username=e},expression:"Username"}}),n("br"),n("label",[t._v("Email:")]),n("b-form-input",{attrs:{type:"email",placeholder:"Enter your Email"},model:{value:t.Email,callback:function(e){t.Email=e},expression:"Email"}}),n("br"),n("label",[t._v("Password:")]),n("b-form-input",{attrs:{type:"password",placeholder:"Enter your Password"},model:{value:t.Password,callback:function(e){t.Password=e},expression:"Password"}}),n("br"),n("label",[t._v("Re-Enter Password:")]),n("b-form-input",{attrs:{type:"password",placeholder:"Re-Enter your Password"},model:{value:t.ConformPassword,callback:function(e){t.ConformPassword=e},expression:"ConformPassword"}}),n("br"),n("div",{staticClass:"buttons"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")]),n("button",{staticClass:"btn btn-light",attrs:{type:"reset"}},[t._v("Reset")]),n("p"),n("a",{attrs:{href:"/login"}},[t._v("Already have an account?")])])],1)])],1)],1)],1)},nt=[],st={name:"signup",data:function(){return{Username:"",Email:"",Password:"",ConformPassword:""}},methods:{validate:function(t){var e=this;t.preventDefault();var n=!0;if(""!=this.Password&&""!=this.Username&&""!=this.Email||(alert("Invalid details!"),n=!1),this.Password!=this.ConformPassword&&(alert("Password does not match! :("),n=!1),this.Password.length<4&&(alert("Password must be atleast 4 characters long."),n=!1),1==n){var s={username:this.Username,email:this.Email,password:this.Password};q["a"].post("/users",s).then((function(t){e.$router.push("/login")})).catch((function(t){alert("An account with this username or email already exists. Please Login."),window.console.log(t.response)}))}}}},at=st,rt=(n("5de5"),Object(l["a"])(at,et,nt,!1,null,"b5452dae",null)),ot=rt.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-row",[n("b-col",{attrs:{sm:"6","offset-sm":"3"}},[n("b-jumbotron",{staticClass:"header-body",scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Login")]},proxy:!0}])},[n("form",{staticClass:"form-body",on:{submit:t.validate}},[n("label",[t._v("Username:")]),n("b-form-input",{attrs:{placeholder:"Enter your Username",value:""},model:{value:t.Username,callback:function(e){t.Username=e},expression:"Username"}}),n("br"),n("label",[t._v("Password:")]),n("b-form-input",{attrs:{type:1==t.Eye?"password":"text",placeholder:"Enter your Password",value:""},model:{value:t.Password,callback:function(e){t.Password=e},expression:"Password"}}),n("div",{staticClass:"h3 mb-1 eye-button"},[n("b-icon",{attrs:{icon:0==t.Eye?"eye-fill":"eye-slash"},on:{click:t.toggleEye}})],1),n("br"),n("div",{staticClass:"buttons"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("LogIn")]),n("button",{staticClass:"btn btn-light",attrs:{type:"reset"}},[t._v("Reset")]),n("p"),n("a",{attrs:{href:"/signup"}},[t._v("Create an account")])])],1)])],1)],1)],1)},ut=[],ct=(n("1276"),n("4c53"),{name:"signin",data:function(){return{Username:"",Password:"",Eye:!0,User:""}},methods:{validate:function(t){t.preventDefault();var e=!0;if(""!=this.Username&&""!=this.Password||(alert("Invalid Details!"),e=!1),e){var n={username:this.Username,password:this.Password};this.login(n)}},toggleEye:function(){this.Eye=!this.Eye},login:function(t){q["a"].post("/login",t).then((function(t){var e=t.headers.authorization;localStorage.setItem("authorization",e);var n=e.split(".")[1],s=JSON.parse(atob(n));window.console.log(s),localStorage.setItem("username",s.sub),localStorage.setItem("userId",s.userId),window.location.pathname="/questions"})).catch((function(t){alert("Incorrect credentials."),window.console.log("lol",t)}))}}}),lt=ct,dt=(n("2c09"),Object(l["a"])(lt,it,ut,!1,null,"58d4a0ec",null)),ht=dt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("br"),n("b-row",[n("b-col",{attrs:{cols:"12",sm:"6"}},[n("b-form",{on:{submit:t.search}},[n("b-input-group",[n("b-form-input",{attrs:{placeholder:"Search..."},model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}}),n("b-input-group-append",[n("b-button",{attrs:{type:"submit",variant:"primary"}},[n("b-icon",{staticStyle:{color:"#fff"},attrs:{icon:"search"}})],1)],1)],1)],1)],1),n("b-col",{attrs:{cols:"12",sm:"6"}},[n("b-form",{on:{submit:t.searchTags}},[n("b-input-group",{scopedSlots:t._u([{key:"invalid-feedback",fn:function(){return[t._v("You must provide no more than 10 tags")]},proxy:!0},{key:"description",fn:function(){return[t._v("Tags must less than 20 characters and lowercase.")]},proxy:!0}])},[n("b-form-tags",{attrs:{"tag-variant":"primary",placeholder:"Search by tags...",state:t.state,"tag-validator":t.tagValidator,separator:" "},model:{value:t.tagsArray,callback:function(e){t.tagsArray=e},expression:"tagsArray"}}),n("b-input-group-append",[n("b-button",{attrs:{type:"submit",variant:"primary"}},[n("b-icon",{staticStyle:{color:"#fff"},attrs:{icon:"search"}})],1)],1)],1)],1)],1)],1),n("br"),n("br"),n("h1",[t._v("Search Results")]),n("hr"),t._l(t.questions,(function(e,s){return n("div",{key:e.id},[n("b-card",[n("Question",{attrs:{question:e},on:{updateQuestion:function(e){return t.updateQuestion(s,e)},deleteQuestion:function(){return t.deleteQuestion(s)}}})],1)],1)})),0===t.questions.length?n("p",[t._v("No results found...")]):t._e()],2)},pt=[],vt=(n("4de4"),n("4160"),n("caad"),n("d81d"),n("b0c0"),n("2532"),n("159b"),{name:"search",components:{Question:P["a"]},data:function(){return{questions:[],searchString:"",tagsArray:[],dirty:!1}},computed:{state:function(){return this.dirty?this.tagsArray.length<11:null}},watch:{tagsArray:function(t,e){this.dirty=!0}},methods:{tagValidator:function(t){return t===t.toLowerCase()&&t.length>0&&t.length<20},loadQuestions:function(t){var e=this;""===t?q["a"].get("/questions").then((function(t){var n=t.data;e.limitQuestions(n),e.questions=n})).catch((function(t){alert("Invalid Search String."),e.questions=[],window.console.log(t)})):q["a"].get("/questions/search?q=".concat(t)).then((function(t){var n=t.data;e.limitQuestions(n),e.questions=n})).catch((function(t){alert("Invalid Search String."),e.questions=[],window.console.log(t)}))},limitQuestions:function(t){var e=170,n=550;t.forEach((function(t){t.title.length>e&&(t.title="".concat(t.title.substring(0,e),"...")),t.text.length>n&&(t.text="".concat(t.text.substring(0,n),"..."))}))},updateQuestion:function(t,e){var n=Object(U["a"])(this.questions);n[t]=e,this.questions=n},deleteQuestion:function(t){this.questions.splice(t,1)},search:function(t){t.preventDefault(),this.$router.push("/questions/search?q=".concat(this.searchString))},filterQuestions:function(){var t=this;this.questions=this.questions.filter((function(e){var n=e.tags.map((function(t){return t.name})),s=t.tagsArray.filter((function(t){return n.includes(t)}));return s.length==t.tagsArray.length}))},searchTags:function(t){t.preventDefault(),this.filterQuestions()}},created:function(){var t=this.$route.query.q;this.loadQuestions(t)}}),gt=vt,mt=(n("7fe2"),Object(l["a"])(gt,ft,pt,!1,null,"6e4cf9cd",null)),wt=mt.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("b-row",[n("div",{staticClass:"logo-wrapper"},[n("b-list-group",{staticClass:"user-box"},[n("div",{staticClass:"h2 mb-0"},[n("b-icon",{attrs:{icon:"person-fill"}})],1)]),n("p",[t._v(t._s(t.userName))])],1)]),n("div",[n("h2",[t.myPage?n("span",[t._v("My")]):t._e(),t._v(" Questions")]),n("hr"),t._l(t.questions,(function(e,s){return n("div",{key:e.id},[n("b-card",[n("Question",{attrs:{question:e},on:{updateQuestion:function(e){return t.updateQuestion(s,e)},deleteQuestion:function(){return t.deleteQuestion(s)}}})],1)],1)})),0===t.questions.length?n("p",[t._v("No questions by this user yet.")]):t._e()],2),n("br"),n("div",[n("h2",[t.myPage?n("span",[t._v("My")]):t._e(),t._v(" Answers")]),n("hr"),t._l(t.answers,(function(e,s){return n("div",{key:e.id,staticClass:"answer"},[n("Answer",{attrs:{answer:e},on:{updateAnswer:function(e){return t.updateAnswer(s,e)},deleteAnswer:function(){return t.deleteAnswer(s)}}})],1)})),0===t.answers.length?n("p",[t._v("No answers by this user yet.")]):t._e()],2)],1)},yt=[],_t={components:{Question:P["a"],Answer:H},data:function(){return{userName:"ZetaOverflow User",questions:[],answers:[],currentUserId:localStorage.getItem("userId"),userId:"",myPage:!1}},methods:{updateQuestion:function(t,e){var n=Object(U["a"])(this.questions);n[t]=e,this.questions=n},deleteQuestion:function(t){this.questions.splice(t,1)},updateAnswer:function(t,e){var n=this;q["a"].put("/answers/".concat(this.answers[t].id),e).then((function(e){var s=Object(U["a"])(n.answers);s[t]=e.data,n.answers=s})).catch((function(t){return window.console.log(t)}))},deleteAnswer:function(t){var e=this;q["a"].delete("/answers/".concat(this.answers[t].id)).then((function(n){e.answers.splice(t,1)})).catch((function(t){return window.console.log(t)}))}},created:function(){var t=this,e=this.$route.path.split("/").pop();this.userId=e,this.myPage=e===this.currentUserId,q["a"].get("/users/".concat(this.userId,"/name")).then((function(e){return t.userName=e.data})).catch((function(t){return window.console.log(t)})),q["a"].get("/answers/user/".concat(this.userId)).then((function(e){t.answers=e.data,window.console.log(t.answers)})).catch((function(t){return window.console.log(t)})),q["a"].get("/questions/user/".concat(this.userId)).then((function(e){t.questions=e.data})).catch((function(t){return window.console.log(t)}))}},qt=_t,xt=(n("4179"),Object(l["a"])(qt,bt,yt,!1,null,"4c273ae4",null)),At=xt.exports;s["default"].use(b["a"]);var Ct=[{path:"/",name:"home",component:k},{path:"/questions",name:"questions",component:function(){return n.e("about").then(n.bind(null,"66ba"))}},{path:"/questions/search",name:"search",component:wt},{path:"/answers",name:"answers",component:J},{path:"/questions/add",name:"addQuestion",component:tt},{path:"/signup",name:"signup",component:ot},{path:"/login",name:"signin",component:ht},{path:"/profile/:id",name:"profile",component:At}],kt=new b["a"]({mode:"history",base:"/",routes:Ct}),Qt=kt;s["default"].use(m["a"]),s["default"].use(w["a"]),s["default"].config.productionTip=!1,new s["default"]({router:Qt,render:function(t){return t(g)}}).$mount("#app")},"59c2":function(t,e,n){"use strict";var s=n("8901"),a=n.n(s);a.a},"5c0b":function(t,e,n){"use strict";var s=n("9c0c"),a=n.n(s);a.a},"5de5":function(t,e,n){"use strict";var s=n("686f"),a=n.n(s);a.a},"686f":function(t,e,n){},"6d39":function(t,e,n){},"7a5f":function(t,e,n){},"7fe2":function(t,e,n){"use strict";var s=n("16ca"),a=n.n(s);a.a},8901:function(t,e,n){},"8b72":function(t,e,n){"use strict";var s=n("266f"),a=n.n(s);a.a},"9c0c":function(t,e,n){},d13c:function(t,e,n){},d722:function(t,e,n){"use strict";var s=n("bc3a"),a=n.n(s);e["a"]=a.a.create({baseURL:"https://zetaoverflow.herokuapp.com/",timeout:5e3,headers:{Authorization:localStorage.getItem("authorization"),"Content-Type":"application/json"}})},ddea:function(t,e,n){"use strict";var s=n("7a5f"),a=n.n(s);a.a},e01f:function(t,e,n){n("a15b"),n("ac1f"),n("1276"),t.exports={timeDiff:function(t){t=t.split(".")[0].split("T").join(" ").split("-").join("/")+"+0000";var e=(new Date).getTime(),n=new Date(t).getTime(),s=6e4,a=60*s,r=24*a,o=30*r,i=365*r,u=e-n;return u<s?Math.round(u/1e3)+" seconds ago":u<a?Math.round(u/s)+" minutes ago":u<r?Math.round(u/a)+" hours ago":u<o?"approximately "+Math.round(u/r)+" days ago":u<i?"approximately "+Math.round(u/o)+" months ago":"approximately "+Math.round(u/i)+" years ago"}}},f669:function(t,e,n){}});
//# sourceMappingURL=app.19f23cbd.js.map