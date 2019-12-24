(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{28:function(e,a,t){e.exports=t.p+"static/media/me.00bdcbb9.jpg"},30:function(e,a,t){e.exports=t(66)},35:function(e,a,t){},36:function(e,a,t){},47:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),o=t.n(c),l=(t(35),t(36),t(2)),i=function(){return r.a.createElement("div",{className:"landing"},r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Hi! I am Ian Salazar"),r.a.createElement("div",null,"I develop web applications using HTML, CSS, JS, and back-end services using Python"),r.a.createElement(l.Link,{to:"projects-section",spy:!0,smooth:!0,duration:500},r.a.createElement("div",{className:"button button-primary"},"View Projects"))))},s=t(10),m=t(3),u=function(){var e=Object(n.useState)(["navbar-items"]),a=Object(m.a)(e,2),t=a[0],c=a[1],o=function(){t.includes("show")?c(["navbar-items"]):c([].concat(Object(s.a)(t),["show"]))},i=r.a.createElement(n.Fragment,null,r.a.createElement(l.Link,{to:"about-section",spy:!0,smooth:!0,duration:500,className:"navbar-item",activeClass:"navbar-item-active",onClick:o},r.a.createElement("div",null,"About")),r.a.createElement(l.Link,{to:"projects-section",spy:!0,smooth:!0,duration:500,className:"navbar-item",activeClass:"navbar-item-active",onClick:o},"Projects"),r.a.createElement(l.Link,{to:"contact-section",spy:!0,smooth:!0,duration:500,className:"navbar-item",activeClass:"navbar-item-active",onClick:o},"Contact"));return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-brand"},"Ian Salazar"),r.a.createElement("div",{className:"burger",onClick:o},r.a.createElement("i",{className:"fa fa-bars"})),r.a.createElement("div",{className:t.join(" ")},i))},d=t(28),p=t.n(d),E=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(l.Element,{id:"about-section",name:"about-section"},r.a.createElement("div",{className:"section section-1"},r.a.createElement("div",{className:"container section-content"},r.a.createElement("h2",null,"About Me"),r.a.createElement("div",{className:"margin-y-2 grid-2-8"},r.a.createElement("div",null,r.a.createElement("img",{src:p.a,width:"200",alt:"avatar",className:"circular-image"})),r.a.createElement("div",{className:"text-justified"},r.a.createElement("p",{className:"text-indent"},"I'm a freelance web developer based in Los Ba\xf1os, Laguna, Philippines. I am currently studying BS Computer Science in the University of the Philippines (UPLB) Los Ba\xf1os."),r.a.createElement("p",{className:"text-indent"},"I also join hackathons with my friends because we enjoy thrill of making solutions in a short amount of time. In this year, I joined ",r.a.createElement("a",{href:"https://hack4rice2019.irri.org/"},"Hack4Rice")," and ",r.a.createElement("a",{href:"https://www.spaceappschallenge.org/"},"NASA Space Apps Challenge: Online Participation"),". In most of my projects, I use React for the front-end and either Django or Express for the back-end. For databases, I am more familiar in using PostgresQL than MongoDB."),r.a.createElement("p",{className:"text-indent"},"Other than that, I also enjoy reading books. Especially financial literacy books like Rich Dad Poor Dad and business-related books like The Lean Startup.")))))))},b=(t(47),function(e){var a=e.name,t=e.description,n=e.url;return r.a.createElement("div",{className:"bg-light",id:"projectItem"},r.a.createElement("div",{id:"header",className:"text-center text-header"},a),r.a.createElement("div",{className:"text-left text-indent",id:"description"},null===t?"No Description provided":t),r.a.createElement("div",{id:"footnote"},r.a.createElement("a",{className:"button button-primary button-block",href:n,target:"_blank",rel:"noopener noreferrer"},"View Project")))}),h=Object(n.createContext)(),v=function(){var e=Object(n.useContext)(h),a=e.repos,t=e.getRepos;Object(n.useEffect)((function(){t()}),[]);var c=r.a.createElement("h3",null,"Fetching...");return a.length>0&&(c=r.a.createElement(n.Fragment,null,a.map((function(e,a){var t=e.node;return r.a.createElement(b,{key:a,name:t.name,description:t.description,url:t.url})})))),r.a.createElement(n.Fragment,null,r.a.createElement(l.Element,{id:"projects-section",name:"projects-section"},r.a.createElement("div",{className:"section section-2"},r.a.createElement("div",{className:"container section-content"},r.a.createElement("h2",null,"Projects"),r.a.createElement("div",{className:"margin-y-2 grid-3"},c)))))},f=(t(9),t(4),function(){return r.a.createElement(n.Fragment,null,r.a.createElement(l.Element,{id:"contact-section",name:"contact-section"},r.a.createElement("div",{className:"section section-1"},r.a.createElement("div",{className:"container section-content"},r.a.createElement("h2",null,"Contact Me"),r.a.createElement("div",{className:"margin-y-2 grid-1"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"form-container"},r.a.createElement("h3",null,"My e-mails"),r.a.createElement("div",{className:"card bg-primary"},"iansalazar67@gmail.com"),r.a.createElement("div",{className:"card bg-primary"},"iisalazar@up.edu.ph")),r.a.createElement("div",{className:""},r.a.createElement("h3",null,"Reach me through my social accounts"),r.a.createElement("div",{className:"margin-y-1"},r.a.createElement("a",{href:"https://linkedin.com/in/ian-salazar-22373b19a",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{className:"button button-link button-circular button-secondary social-link"},r.a.createElement("i",{className:"fa fa-linkedin"}))),r.a.createElement("a",{href:"https://www.facebook.com/salazar.ian.i",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{className:"button button-link button-circular button-secondary social-link"},r.a.createElement("i",{className:"fa fa-facebook"}))),r.a.createElement("a",{href:"https://github.com/dertrockx",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{className:"button button-link button-circular button-secondary social-link"},r.a.createElement("i",{className:"fa fa-github"})))))))))))}),g=function(){return r.a.createElement("footer",{className:"bg-secondary text-center"},r.a.createElement("i",null,"Just a footer ;)"))},k=t(15),N=t.n(k),y=function(e,a){switch(a.type){case"GET_REPOS":return Object(s.a)(a.payload);default:return e}},w=t(29),j=t.n(w),x=function(e){var a=Object(n.useReducer)(y,[]),t=Object(m.a)(a,2),c=t[0],o=t[1];return r.a.createElement(h.Provider,{value:{repos:c,getRepos:function(){var e,a,t;return N.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e={headers:{"Content-Type":"application/json"}},"https://portfolio-back-end-service.herokuapp.com/","http://localhost:5000",n.next=6,N.a.awrap(j.a.get("https://portfolio-back-end-service.herokuapp.com/",{},e));case 6:a=n.sent,t=a.data.edges,console.log(t),o({type:"GET_REPOS",payload:t}),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),n.t0&&console.error(n.t0);case 15:case"end":return n.stop()}}),null,null,[[0,12]])}}},e.children)},I=function(){return console.log("Hi fellow dev! I see you're checking on my page. If you want to know how I created this, feel free to contact me ;)\nMy e-mail is located below on my website"),r.a.createElement(x,null,r.a.createElement(n.Fragment,null,r.a.createElement(u,null),r.a.createElement(i,null),r.a.createElement(E,null),r.a.createElement(v,null),r.a.createElement(f,null),r.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.76d8e246.chunk.js.map
