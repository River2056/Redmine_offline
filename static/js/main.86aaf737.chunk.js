(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(36)},31:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n(15),r=n(6),c=n(7),i=n(9),l=n(8),s=n(10),u=n(0),d=n.n(u),p=n(22),m=n.n(p),f=n(13),b=n(5),h=(n(30),n(31),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function y(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach(function(t){Object(o.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var k=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={title:""},n.inputChange=function(e){n.setState(Object(o.a)({},e.target.name,e.target.value))},n.submitForm=function(e){e.preventDefault();var t=e.target.elements.title.value;t&&""!==t&&(n.props.addTodo(n.state.title),n.setState({title:""}))},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return d.a.createElement("form",{onSubmit:this.submitForm,style:{display:"flex"}},d.a.createElement("input",{type:"text",style:{flex:"10",padding:"10px",fontFamily:"sans-serif"},name:"title",placeholder:"Add Todo...",value:this.state.title,onChange:this.inputChange}),d.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-outline-secondary",style:{flex:"1",color:"#fff"}}))}}]),t}(d.a.Component),w=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return d.a.createElement(O,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo,copyItem:e.props.copyItem})})}}]),t}(d.a.Component),O=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).getStyle=function(){var e=n.props.todo.isCompleted;return{textDecoration:e?"line-through":"none",backgroundColor:e?"#28A745":"#fbfbfb",color:e?"#fff":"#000",fontStyle:e?"italic":"normal",position:"relative",margin:"5px auto",padding:"0"}},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,n=e.title;return d.a.createElement("div",{className:"card card-body",style:this.getStyle()},d.a.createElement("p",{id:t,onClick:this.props.markComplete.bind(this,t),style:{height:"100%",fontSize:"20px",lineHeight:"20px",padding:"10px",fontFamily:"sans-serif"}},n),d.a.createElement("button",{onClick:this.props.delTodo.bind(this,t),className:"btn btn-danger btn-sm",style:{cursor:"pointer",position:"absolute",right:"10px",top:"12px"}},"X"),d.a.createElement("button",{onClick:this.props.copyItem.bind(this,t),className:"btn btn-info btn-sm",style:{cursor:"pointer",position:"absolute",right:"50px",top:"14px"}},"copy"))}}]),t}(d.a.Component),E=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement("header",{style:j},d.a.createElement("h1",null,"Redmine"),d.a.createElement(f.b,{style:C,to:"/"},"Todo")," ","|"," ",d.a.createElement(f.b,{style:C,to:"/trans"},"Transform")))}}]),t}(d.a.Component),j={fontFamily:"Orbitron",background:"#007BFF",color:"#fff",textAlign:"center",padding:"5px"},C={color:"#fff",textDecoration:"none"},S=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={hour:(new Date).getHours(),min:(new Date).getMinutes(),sec:(new Date).getSeconds(),day:(new Date).getDay(),date:(new Date).getDate(),month:(new Date).getMonth()},n.displayClock=function(){var e=new Date,t=e.getHours(),a=e.getMinutes(),o=e.getSeconds(),r=e.getDay(),c=e.getDate(),i=e.getMonth();switch(t<10&&(t="0"+t),a<10&&(a="0"+a),o<10&&(o="0"+o),r){case 0:r="SUN";break;case 1:r="MON";break;case 2:r="TUE";break;case 3:r="WED";break;case 4:r="THUR";break;case 5:r="FRI";break;case 6:r="SAT";break;default:r="NONE"}switch(i){case 0:i="JAN";break;case 1:i="FEB";break;case 2:i="MAR";break;case 3:i="APR";break;case 4:i="MAY";break;case 5:i="JUN";break;case 6:i="JULY";break;case 7:i="AUG";break;case 8:i="SEP";break;case 9:i="OCT";break;case 10:i="NOV";break;case 11:i="DEC";break;default:i="NONE"}n.setState(function(){return{hour:t,min:a,sec:o,day:r,date:c,month:i}})},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.displayClock,100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return d.a.createElement("div",{style:N},d.a.createElement("span",{style:{fontSize:"25px",float:"left",color:"#fff"}},this.state.hour,":",this.state.min,":",this.state.sec),d.a.createElement("span",{style:{fontSize:"25px",float:"right",color:"#fff"}},this.state.day,"-",this.state.date,"-",this.state.month))}}]),t}(d.a.Component),N={fontFamily:"Orbitron",border:"5px solid #007ACC",borderRadius:"5px",height:"45px",backgroundColor:"#1e1e1e",padding:"5px"},x=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).handleInput=function(e){var t=e.target.value;n.setState(function(){return{paragraph:t}})},n.addBuilder=function(e,t){var n=e.replace(/\t+/g,"").split("\n");return(n=n.map(function(e){return e=e.replace(/\s\s/g,""),"".concat(t,'(" ').concat(e,' ");\n')})).join("")},n.deConvertBuilder=function(e){var t=e.match(/".*"/g);return(t=t.map(function(e){return e.replace(/\"/g,"").concat("\n")})).join("")},n.formatSQLBuilder=function(e){var t=e.split("\n");return(t=t.map(function(e){return e=e.replace(/\t+/g,"").replace(/\s\s/g,""),e="".concat(e,"\n")})).join("")},n.switchType=function(){n.setState(function(e){return{type:"sql.a"===e.type?"sql.append":"sql.a"}})},n.convert=function(){var e=n.state.paragraph;e=n.addBuilder(e,n.state.type),n.setState(function(){return{output:e}})},n.deConvert=function(){var e=n.state.paragraph;e=n.deConvertBuilder(e),n.setState(function(){return{output:e}})},n.format=function(){var e=n.state.paragraph;e=n.formatSQLBuilder(e),n.setState(function(){return{output:e}})},n.copy=function(){var e=window.getSelection(),t=document.createRange();t.selectNodeContents(document.getElementById("output")),e.removeAllRanges(),e.addRange(t),document.execCommand("copy"),e.removeAllRanges()},n.styleForBtn=function(){return{width:"170px"}},n.state={paragraph:"",pArray:[],output:"",type:"sql.a"},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement("h3",{style:{color:"#fff"}},"paste paragraph here")," ",d.a.createElement("span",{style:{color:"#fff"}},"click to switch type:"," ",d.a.createElement("input",{className:"btn btn-outline-secondary btn-sm",value:this.state.type,style:{cursor:"pointer"},onClick:this.switchType})," "),d.a.createElement("textarea",{className:"card card-body col-12",name:"paragraph",cols:"150",rows:"10",onChange:this.handleInput,value:this.state.paragraph,style:{fontFamily:"sans-serif"}}),d.a.createElement("div",{className:"container"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-sm-6"},d.a.createElement("input",{className:"btn btn-outline-primary btn-block",type:"submit",value:"convert",onClick:this.convert})),d.a.createElement("div",{className:"col-sm-6"},d.a.createElement("input",{className:"btn btn-outline-danger btn-block",type:"submit",value:"de-convert",onClick:this.deConvert}))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-sm-6"},d.a.createElement("input",{className:"btn btn-outline-warning btn-block",type:"submit",value:"format-SQL",onClick:this.format})),d.a.createElement("div",{className:"col-sm-6"},d.a.createElement("input",{className:"btn btn-outline-info btn-block",type:"submit",value:"copy to clipboard",onClick:this.copy})))),d.a.createElement("p",{id:"output",style:{fontFamily:"sans-serif",whiteSpace:"pre-wrap"},className:"card card-body"},this.state.output))}}]),t}(d.a.Component),A={todos:[]},D=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state=g({},A),n.markComplete=function(e){n.setState({todos:n.state.todos.map(function(t){return t.id===e&&(t.isCompleted=!t.isCompleted),t})})},n.delTodo=function(e){n.setState(function(){return{todos:Object(a.a)(n.state.todos.filter(function(t){return t.id!==e}))}})},n.addTodo=function(e){var t={id:Math.floor(1e7*Math.random()),title:e,isCompleted:!1};n.setState(function(e){return{todos:[t].concat(Object(a.a)(e.todos))}})},n.deleteAllTodo=function(){n.setState(function(){return{todos:[]}}),window.localStorage.clear()},n.copyItem=function(e){var t=window.getSelection(),n=document.createRange();n.selectNodeContents(document.getElementById(e)),t.removeAllRanges(),t.addRange(n),document.execCommand("copy"),t.removeAllRanges()},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(window.localStorage.getItem("todos"));try{this.setState(g({},e))}catch(t){}}},{key:"componentDidUpdate",value:function(){var e=JSON.stringify(this.state);window.localStorage.setItem("todos",e)}},{key:"render",value:function(){var e=this;return d.a.createElement(f.a,null,d.a.createElement("div",{className:"container"},d.a.createElement(E,null),d.a.createElement(b.a,{exact:!0,path:"/",render:function(t){return d.a.createElement(d.a.Fragment,null,d.a.createElement(k,{addTodo:e.addTodo}),d.a.createElement("div",null,d.a.createElement("input",{onClick:e.deleteAllTodo,className:"btn btn-outline-danger btn-block",type:"button",value:"Delete All"})),d.a.createElement(S,null),d.a.createElement(w,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo,copyItem:e.copyItem}))}}),d.a.createElement(b.a,{path:"/trans",render:function(e){return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{style:{margin:"10px"}}),d.a.createElement(x,null))}})))}}]),t}(d.a.Component),T=document.getElementById("root");m.a.render(d.a.createElement(D,null),T),function(e){if("serviceWorker"in navigator){if(new URL("/River2056/Redmine_offline",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/River2056/Redmine_offline","/service-worker.js");h?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):y(t,e)})}}()}},[[25,1,2]]]);
//# sourceMappingURL=main.86aaf737.chunk.js.map