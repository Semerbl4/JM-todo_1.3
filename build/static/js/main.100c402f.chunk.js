(this["webpackJsonptodo-stage3"]=this["webpackJsonptodo-stage3"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(8),o=n.n(s),l=n(9),i=n(2),u=n(3),d=n(5),p=n(4),j=(n(15),n(16),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={value:""},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state.value,n=this.props.addTask;return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("h1",{children:"todos"}),Object(c.jsx)("input",{className:"new-todo",placeholder:"What needs to be done?",value:t,autoFocus:!0,onChange:function(t){e.setState({value:t.target.value})},onKeyDown:function(e){13===e.keyCode&&(n(t),console.log(t))}})]})}}]),n}(r.a.Component)),h=n(6),f=(n(17),n(18),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).completeToogler=function(){e.props.completeChanged(e.props.id)},e.currentTaskDestroyed=function(){var t=e.props.id;e.props.taskDestroyed(t)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.completed,t=this.props.taskText;return Object(c.jsxs)("li",Object(h.a)(Object(h.a)({},this.props),{},{className:e?"completed":null,children:[Object(c.jsxs)("div",{className:"view",children:[Object(c.jsx)("input",{className:"toggle",type:"checkbox",onClick:this.completeToogler,checked:!!e}),Object(c.jsxs)("label",{children:[Object(c.jsx)("span",{className:"description",children:t}),Object(c.jsx)("span",{className:"created",children:"created 17 seconds ago"})]}),Object(c.jsx)("button",{className:"icon icon-edit"}),Object(c.jsx)("button",{className:"icon icon-destroy",onClick:this.currentTaskDestroyed})]}),"editing"===this.props.className?Object(c.jsx)("input",{type:"text",className:"edit",defaultValue:"Editing task"}):null]}))}}]),n}(r.a.Component)),b=function(e){var t=e.todoData,n=e.completeChanged,r=e.taskDestroyed,s=e.currentFilter;return Object(c.jsx)("ul",{className:"todo-list",children:function(){var e;return"Active"===s&&(e=t.filter((function(e){return!1===e.completed}))),"Completed"===s?e=t.filter((function(e){return!0===e.completed})):"All"===s&&(e=t.slice()),e=e.map((function(e){return Object(a.createElement)(f,Object(h.a)(Object(h.a)({},e),{},{key:e.id,completeChanged:n,taskDestroyed:r}))})),console.log(s,e,t),e}()})},m=(n(19),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={activeButton:"All"},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.changeFilter,n=this.state.activeButton;return Object(c.jsxs)("ul",{className:"filters",onClick:function(n){t(n.target.textContent),e.setState({activeButton:n.target.textContent})},children:[Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"All"===n?"selected":null,children:"All"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"Active"===n?"selected":null,children:"Active"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"Completed"===n?"selected":null,children:"Completed"})})]})}}]),n}(r.a.Component)),v=(n(20),function(e){var t=e.changeFilter,n=e.clearCompleted,a=e.uncompletedTasks;return Object(c.jsxs)("footer",{className:"footer",children:[Object(c.jsxs)("span",{className:"todo-count",children:[a()," items left"]}),Object(c.jsx)(m,{changeFilter:t}),Object(c.jsx)("button",{className:"clear-completed",onClick:n,children:"Clear completed"})]})}),O=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={serverInfo:[],currentFilter:"All"},e.uncompletedTasks=function(){var t=0;return e.state.serverInfo.forEach((function(e){!1===e.completed&&t++})),t},e.clearCompleted=function(){var t=e.state.serverInfo.filter((function(e){return!1===e.completed}));e.setState({serverInfo:t})},e.changeFilter=function(t){e.setState({currentFilter:t}),console.log(e.state)},e.addTask=function(t){var n=Object(l.a)(e.state.serverInfo);n.push({id:Math.random(),completed:!1,taskText:t}),e.setState({serverInfo:n})},e.completeChanged=function(t){var n=e.state.serverInfo;n=JSON.stringify(n);var c=(n=JSON.parse(n)).map((function(e){return e.id===t&&(e.completed=!e.completed),e}));e.setState({serverInfo:c})},e.taskDestroyed=function(t){var n=e.state.serverInfo;n=JSON.stringify(n);var c=(n=JSON.parse(n)).filter((function(e){return e.id!==t}));e.setState({serverInfo:c})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("section",{className:"todoapp",children:[Object(c.jsx)(j,{addTask:this.addTask}),Object(c.jsx)(b,{todoData:this.state.serverInfo,completeChanged:this.completeChanged,taskDestroyed:this.taskDestroyed,currentFilter:this.state.currentFilter}),Object(c.jsx)(v,{changeFilter:this.changeFilter,clearCompleted:this.clearCompleted,uncompletedTasks:this.uncompletedTasks})]})}}]),n}(r.a.Component);o.a.render(Object(c.jsx)(O,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.100c402f.chunk.js.map