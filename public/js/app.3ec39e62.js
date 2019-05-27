(function(t){function e(e){for(var n,c,r=e[0],d=e[1],a=e[2],u=0,f=[];u<r.length;u++)c=r[u],i[c]&&f.push(i[c][0]),i[c]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);s&&s(e);while(f.length)f.shift()();return l.push.apply(l,a||[]),o()}function o(){for(var t,e=0;e<l.length;e++){for(var o=l[e],n=!0,r=1;r<o.length;r++){var d=o[r];0!==i[d]&&(n=!1)}n&&(l.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},i={app:0},l=[];function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=e,r=r.slice();for(var a=0;a<r.length;a++)e(r[a]);var s=d;l.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},5601:function(t,e,o){"use strict";var n=o("f348"),i=o.n(n);i.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("img",{staticClass:"logo",attrs:{alt:"Vue logo",src:o("cf05")}}),n("h1",[t._v("VueTODO")]),n("todo-list")],1)},l=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-container",{staticClass:"bv-example-row"},[o("b-row",[o("b-col",{attrs:{cols:"12"}},[o("b-form",{on:{submit:function(e){return e.preventDefault(),t.addTodo(e)}}},[o("b-form-group",{attrs:{label:"New todo","label-for":"new-todo"}},[o("b-form-input",{attrs:{id:"new-todo",placeholder:"What needs to be done?"},model:{value:t.newTodo,callback:function(e){t.newTodo=e},expression:"newTodo"}})],1)],1),o("b-list-group",[o("transition-group",{attrs:{name:"fade"}},t._l(t.todosFiltered,function(e,n){return o("TodoItem",{key:e.id,staticClass:"todo-item",attrs:{todo:e,index:n,"check-all":t.completedAll}})}),1)],1),o("b-list-group",{staticClass:"mt-4"},[o("b-list-group-item",{staticClass:"flex-wrap d-flex justify-content-start align-items-center"},[o("TodoCheckAll"),o("TodoItemsRemaining")],1),o("b-list-group-item",{staticClass:"flex-wrap d-flex justify-content-start align-items-center"},[o("TodoFiltered"),o("TodoClearCompleted")],1)],1)],1)],1)],1)],1)},r=[],d=o("cebc"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-list-group-item",{staticClass:"flex-wrap d-flex justify-content-around align-items-center todo-item"},[o("b-col",{attrs:{cols:"2"}},[o("b-form-checkbox",{on:{input:t.doneEdit},model:{value:t.completed,callback:function(e){t.completed=e},expression:"completed"}})],1),o("b-col",{attrs:{cols:"8"}},[t.editing?o("b-form-input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{type:"text"},on:{blur:t.doneEdit,keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doneEdit(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0)?null:t.cancelEdit(e)}]},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}):o("label",{class:{completed:t.completed},on:{dblclick:function(e){t.editing=!0}}},[t._v(t._s(t.title))])],1),o("b-col",{attrs:{cols:"2"}},[o("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.deleteTodo(t.todo.id)}}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])],1)},s=[],u=(o("c5f6"),o("2f62")),f={name:"TodoItem",directives:{focus:{inserted:function(t){t.focus()}}},props:{todo:{type:Object,required:!0},index:{type:Number,required:!0},checkAll:{type:Boolean,required:!0}},data:function(){return{id:this.todo.id,title:this.todo.title,completed:this.todo.completed,editing:!1}},watch:{checkAll:function(){this.completed=!!this.checkAll||this.todo.completed}},methods:Object(d["a"])({},Object(u["b"])(["deleteTodo","updateTodo"]),{doneEdit:function(){this.editing=!1,this.updateTodo({id:this.id,title:this.title,completed:this.completed,editing:this.editing})},cancelEdit:function(){this.title=this.todo.title,this.editing=!1}})},p=f,m=(o("89cf"),o("2877")),b=Object(m["a"])(p,a,s,!1,null,"e8507654",null),h=b.exports,v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-col",{attrs:{sm:"6"}},[o("span",{staticClass:"text-danger"},[t._v(t._s(t.remaining))]),t._v("\n  "+t._s(t._f("pluralize")(t.remaining,"item"))+" left\n")])},g=[],T={name:"TodoItemsRemaining",filters:{pluralize:function(t,e){return 1===t?e:e+"s"}},computed:Object(d["a"])({},Object(u["c"])(["remaining"]))},j=T,O=Object(m["a"])(j,v,g,!1,null,null,null),k=O.exports,x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-col",{attrs:{sm:"6"}},[o("b-form-checkbox",{attrs:{checked:t.completedAll},on:{change:t.checkAll}},[t._v("Check All")])],1)},C=[],y={name:"TodoCheckAll",computed:Object(d["a"])({},Object(u["c"])(["completedAll"])),methods:Object(d["a"])({},Object(u["b"])(["checkAll"]))},_=y,w=Object(m["a"])(_,x,C,!1,null,null,null),A=w.exports,E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-col",{attrs:{sm:"6"}},[o("b-form-radio-group",{attrs:{options:t.options,buttons:"","button-variant":"outline-primary",name:"radio-btn-outline"},on:{change:t.updateFilter},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)},F=[],$={name:"TodoFiltered",data:function(){return{selected:"all",options:[{text:"All",value:"all"},{text:"Active",value:"active"},{text:"Completed",value:"completed"}]}},computed:Object(d["a"])({},Object(u["e"])(["filter"])),methods:Object(d["a"])({},Object(u["d"])(["updateFilter"]))},I=$,P=Object(m["a"])(I,E,F,!1,null,null,null),R=P.exports,S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-col",{attrs:{sm:"6"}},[o("div",[t.showClearCompletedButton?o("b-button",{attrs:{variant:"outline-primary"},on:{click:t.clearCompleted}},[t._v("Clear Completed")]):t._e()],1)])},q=[],M={name:"TodoClearCompleted",computed:Object(d["a"])({},Object(u["c"])(["showClearCompletedButton"])),methods:Object(d["a"])({},Object(u["b"])(["clearCompleted"]))},B=M,L=Object(m["a"])(B,S,q,!1,null,null,null),N=L.exports,z={name:"TodoList",components:{TodoItem:h,TodoItemsRemaining:k,TodoCheckAll:A,TodoFiltered:R,TodoClearCompleted:N},data:function(){return{newTodo:""}},computed:Object(d["a"])({},Object(u["c"])(["completedAll","todosFiltered"])),created:function(){this.$store.dispatch("retrieveTodos")},methods:{addTodo:function(){this.newTodo.trim()&&this.$store.dispatch("addTodo",{id:this.idForTodo,title:this.newTodo}),this.newTodo=""}}},D=z,J=(o("71e8"),Object(m["a"])(D,c,r,!1,null,null,null)),V=J.exports,W={name:"App",components:{TodoList:V}},X=W,H=(o("5601"),Object(m["a"])(X,i,l,!1,null,"1b41858c",null)),U=H.exports,G=(o("20d6"),o("ac6a"),o("bc3a")),K=o.n(G);n["default"].use(u["a"]);var Q=K.a.create({baseURL:"/",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},responseType:"json"}),Y=new u["a"].Store({state:{filter:"all",todos:[]},getters:{remaining:function(t){return t.todos.filter(function(t){return!t.completed}).length},completedAll:function(t,e){return 0===e.remaining},todosFiltered:function(t){return"all"===t.filter?t.todos:"active"===t.filter?t.todos.filter(function(t){return!t.completed}):"completed"===t.filter?t.todos.filter(function(t){return t.completed}):t.todos},showClearCompletedButton:function(t){return t.todos.filter(function(t){return t.completed}).length>0}},mutations:{addTodo:function(t,e){t.todos.push({id:e.id,title:e.title,completed:!1,editing:!1})},clearCompleted:function(t){t.todos=t.todos.filter(function(t){return!t.completed})},updateFilter:function(t,e){t.filter=e},checkAll:function(t,e){t.todos.forEach(function(t){t.completed=e})},deleteTodo:function(t,e){var o=t.todos.findIndex(function(t){return t.id===e});t.todos.splice(o,1)},updateTodo:function(t,e){var o=t.todos.findIndex(function(t){return t.id===e.id});t.todos.splice(o,1,{id:e.id,title:e.title,completed:e.completed,editing:e.editing})},retrieveTodos:function(t,e){t.todos=e}},actions:{retrieveTodos:function(t){var e=t.commit;Q.get("/api/v1/todos").then(function(t){e("retrieveTodos",t.data)}).catch(function(t){console.log(t)})},addTodo:function(t,e){var o=t.commit;Q.post("/api/v1/todos",{title:e.title,completed:!1}).then(function(t){o("addTodo",t.data)}).catch(function(t){console.log(t)})},clearCompleted:function(t){var e=t.commit;Q.delete("/api/v1/delete_completed").then(function(t){e("clearCompleted",t.data)}).catch(function(t){console.log(t)})},checkAll:function(t,e){var o=t.commit;Q.patch("/api/v1/check_all",{checked:e}).then(function(){o("checkAll",e)}).catch(function(t){console.log(t)})},deleteTodo:function(t,e){var o=t.commit;Q.delete("/api/v1/todos/".concat(e)).then(function(t){o("deleteTodo",t.data.id)}).catch(function(t){console.log(t)})},updateTodo:function(t,e){var o=t.commit;Q.patch("/api/v1/todos/".concat(e.id),{title:e.title,completed:e.completed}).then(function(t){o("updateTodo",t.data)}).catch(function(t){console.log(t)})}}}),Z=o("9f7b"),tt=o.n(Z);o("f9e3"),o("2dd8");n["default"].use(tt.a),n["default"].config.productionTip=!1,new n["default"]({store:Y,render:function(t){return t(U)}}).$mount("#app")},"71e8":function(t,e,o){"use strict";var n=o("b8aa"),i=o.n(n);i.a},"89cf":function(t,e,o){"use strict";var n=o("b98e"),i=o.n(n);i.a},b8aa:function(t,e,o){},b98e:function(t,e,o){},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"},f348:function(t,e,o){}});
//# sourceMappingURL=app.3ec39e62.js.map