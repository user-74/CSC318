(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{62:function(e,s,t){},63:function(e,s,t){},69:function(e,s,t){},74:function(e,s,t){},93:function(e,s,t){},94:function(e,s,t){},95:function(e,s,t){},96:function(e,s,t){},97:function(e,s,t){},99:function(e,s,t){"use strict";t.r(s);var a=t(0),c=t.n(a),n=t(27),r=t.n(n),i=t(5),o=t(4),l=t(7),j=t(8),h=t(10),d=t(9),p=(t(62),t(63),t(113)),m=t(1),b=function(e){Object(h.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=s.call(this,e)).state={progress:e.progress},a}return Object(j.a)(t,[{key:"render",value:function(){return Object(m.jsxs)(p.a,{border:2,children:[Object(m.jsx)("img",{src:"uoft.jpg",style:{height:100,width:100},alt:"Profile"}),Object(m.jsx)("br",{}),"LEVEL 15: ",20*this.state.progress,"/100",Object(m.jsx)("br",{}),"Monday, March 15",Object(m.jsx)("br",{}),"John Doe"]})}}]),t}(c.a.Component),x=(t(69),t(114)),O=function(e){Object(h.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(l.a)(this,t),a=s.call(this,e),0===e.progress?a.state={message:"START"}:4===e.progress?a.state={message:"FINISHED"}:a.state={message:"CONTINUE"},a}return Object(j.a)(t,[{key:"render",value:function(){return Object(m.jsx)(x.a,{variant:"contained",className:"StartButton",children:Object(m.jsx)("div",{className:"StartButton-text",children:this.state.message})})}}]),t}(c.a.Component),g=t(111),v=function(e){Object(h.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(l.a)(this,t),void 0===(a=s.call(this,e)).props.location.state?a.state={progress:0}:(a.state=a.props.location.state,a.props.history.replace(a.props.location.pathname,a.state)),a}return Object(j.a)(t,[{key:"componentDidUpdate",value:function(e,s,t){this.props.location!==e.location&&void 0!==this.props.location.state&&this.setState(this.props.location.state.curr_state)}},{key:"render",value:function(){return Object(m.jsxs)(p.a,{component:"div",className:"homepage",children:[Object(m.jsx)(g.a,{}),Object(m.jsx)(b,{progress:this.state.progress}),Object(m.jsx)("div",{children:Object(m.jsx)(i.b,{className:"link",to:{pathname:4===this.state.progress?"/homepage":"/transition",state:{progress:this.state.progress}},children:Object(m.jsx)(O,{progress:this.state.progress})})}),Object(m.jsx)(i.b,{className:"link",to:{pathname:"/leaderboard",state:{progress:this.state.progress}},children:Object(m.jsx)(x.a,{variant:"contained",children:Object(m.jsxs)(p.a,{style:{fontSize:18},children:[Object(m.jsx)("h1",{children:"Friend Activity and LEADERBOARD"}),"Jenna just finished Yoga! ",Object(m.jsx)("br",{}),"Jean finished Stretches 15 minutes ago!"]})})}),Object(m.jsxs)(i.b,{className:"link",to:{pathname:"/progress",state:{progress:this.state.progress}},children:[Object(m.jsxs)("h1",{children:["Today's Exercise Progress: ",25*this.state.progress," %"]}),Object(m.jsx)(x.a,{variant:"outlined",className:"progress",children:Object(m.jsx)("progress",{className:"myProgress",value:this.state.progress,max:"4"})})]})]})}}]),t}(c.a.Component),u=(t(74),t(52)),N=t.n(u),f=[[{name:"Dynamic Stretching",link:"https://www.youtube.com/watch?v=nPHfEnZD1Wk&ab_channel=RedefiningStrength"},{name:"Light Exercise",link:"https://www.youtube.com/watch?v=MxLL9Scvmzo&ab_channel=POPSUGARFitness"},{name:"Static Stretching",link:"https://www.youtube.com/watch?v=Ji9vKgfWK88&ab_channel=adidasRuntastic"}],[{name:"30 Minutes Yoga",link:"https://www.youtube.com/watch?v=5v1wqxnrmrk&t=1623s&ab_channel=PamelaReif"},{name:"30 Minutes HIIT",link:"https://www.youtube.com/watch?v=jpizoUy4K9s&t=1066s&ab_channel=growingannanas"},{name:"30 Minutes Upper Body Training",link:"https://www.youtube.com/watch?v=c01hlF_EdRk&ab_channel=PamelaReif"},{name:"30-Minute Cardio Latin Dance Workout",link:"https://www.youtube.com/watch?v=8DZktowZo_k&ab_channel=POPSUGARFitness"},{name:"30 minute ab workout",link:"https://www.youtube.com/watch?v=5i8y-_cbwgw&ab_channel=CarolineGirvan"}]],k=function(e){Object(h.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(l.a)(this,t),0===(a=s.call(this,e)).props.location.state.progress?a.state={progress:a.props.location.state.progress,message:"Dynamic Stretching",url:f[0][0].link}:1===a.props.location.state.progress?a.state={progress:a.props.location.state.progress,message:"Light Exercises",url:f[0][1].link}:2===a.props.location.state.progress?a.state={progress:a.props.location.state.progress,message:a.props.location.state.video.name,url:a.props.location.state.video.link}:a.state={progress:a.props.location.state.progress,message:"Static Stretching",url:f[0][2].link},a}return Object(j.a)(t,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"videoPage",children:[Object(m.jsx)("div",{className:"video-title-container",children:Object(m.jsx)("span",{className:"video-title",children:this.state.message})}),Object(m.jsx)("div",{className:"video-container",children:Object(m.jsx)(N.a,{className:"video",url:this.state.url,controls:!0})}),Object(m.jsx)("div",{children:Object(m.jsx)(i.b,{className:"link",to:{pathname:"./homepage",state:{progress:this.state.progress+1}},children:Object(m.jsx)(x.a,{className:"video-home",variant:"contained",children:"Return Home"})})}),Object(m.jsx)("div",{children:Object(m.jsx)(i.b,{className:"link",to:{pathname:3===this.state.progress?"./homepage":"./transition",state:{progress:this.state.progress+1}},children:Object(m.jsx)(x.a,{className:"video-next",variant:"contained",children:"Next"})})})]})}}]),t}(c.a.Component),w=t(33),y=(t(93),function(e){Object(h.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=s.call(this,e)).state={progress:a.props.location.state.progress,flag:0},a.click=a.click.bind(Object(w.a)(a)),a}return Object(j.a)(t,[{key:"click",value:function(){this.setState({flag:(this.state.flag+1)%2})}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"LeaderBoard",children:[Object(m.jsx)("div",{className:"leaderboard-title-container",children:Object(m.jsxs)("span",{className:"leaderboard-title",children:["LEADERBOARD"," ",Object(m.jsx)("span",{className:"leaderboard-activity-container",children:Object(m.jsx)(x.a,{variant:"contained",onClick:this.click,children:0===this.state.flag?Object(m.jsx)("div",{className:"leaderboard-activity",children:"Show Friend Activity"}):Object(m.jsx)("div",{className:"leaderboard-activity",children:"Show Leaderboard"})})})]})}),Object(m.jsxs)("div",{className:"leaderboard-container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"name",children:Object(m.jsx)("span",{className:"name-text",children:"Jack"})}),Object(m.jsx)("div",{className:"score",children:0===this.state.flag?Object(m.jsx)("span",{className:"name-text",children:"Level 28"}):Object(m.jsx)("span",{className:"activity-text",children:"did Yoga 4 hours ago!"})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"name",children:Object(m.jsx)("span",{className:"name-text",children:"Jenna"})}),Object(m.jsx)("div",{className:"score",children:0===this.state.flag?Object(m.jsx)("span",{className:"name-text",children:"Level 23"}):Object(m.jsx)("span",{className:"activity-text",children:"did Cardio 10 hours ago!"})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"name",children:Object(m.jsx)("span",{className:"name-text",children:"John"})}),Object(m.jsx)("div",{className:"score",children:0===this.state.flag?Object(m.jsx)("span",{className:"name-text",children:"Level 15"}):Object(m.jsx)("span",{className:"activity-text",children:"This is you!"})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"name",children:Object(m.jsx)("span",{className:"name-text",children:"Jean"})}),Object(m.jsx)("div",{className:"score",children:0===this.state.flag?Object(m.jsx)("span",{className:"name-text",children:"Level 3"}):Object(m.jsx)("span",{className:"activity-text",children:"did Lower Body 2 minutes ago!"})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"name",children:Object(m.jsx)("span",{className:"name-text",children:"Jason"})}),Object(m.jsx)("div",{className:"score",children:0===this.state.flag?Object(m.jsx)("span",{className:"name-text",children:"Level 2"}):Object(m.jsx)("span",{className:"activity-text",children:"did Stretches 2 hours ago!"})})]})]}),Object(m.jsx)("div",{className:"leaderboard-home-container",children:Object(m.jsx)(i.b,{className:"link",to:{pathname:"/homepage",state:{progress:this.state.progress}},children:Object(m.jsx)(x.a,{variant:"contained",children:Object(m.jsx)("div",{className:"leaderboard-home",children:"Back to Homepage"})})})})]})}}]),t}(c.a.Component)),S=(t(94),t(95),function(e){Object(h.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=s.call(this,e)).state={progress:e.progress},a}return Object(j.a)(t,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{children:[25*this.state.progress," % "]}),Object(m.jsx)("div",{className:"timeline-container",children:Object(m.jsx)("progress",{className:"timeline",value:this.state.progress,max:"4"})})]})}}]),t}(c.a.Component)),P=function(e){Object(h.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(l.a)(this,t),0===(a=s.call(this,e)).props.location.state.progress?a.state={progress:a.props.location.state.progress,message:"Let's do some Dynamic Stretching"}:1===a.props.location.state.progress?a.state={progress:a.props.location.state.progress,message:"Let's do some Light Exercises"}:2===a.props.location.state.progress?a.state={progress:a.props.location.state.progress,message:"Let's see what the plan is for today:"}:a.state={progress:a.props.location.state.progress,message:"Lets finish up with some Static Stretching"},a}return Object(j.a)(t,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Transition",children:[Object(m.jsx)("div",{className:"transition-message",children:Object(m.jsx)("span",{className:"transition-title",children:this.state.message})}),Object(m.jsxs)("div",{className:"transition-timeline",children:[Object(m.jsx)("h2",{children:"Today's Exercise Progress:"}),Object(m.jsx)(S,{progress:this.state.progress})]}),Object(m.jsx)(i.b,{className:"link",to:{pathname:"./homepage",state:{progress:this.state.progress}},children:Object(m.jsx)(x.a,{variant:"contained",className:"transition-home",children:Object(m.jsx)("span",{className:"transition-text",children:"Return Home"})})}),Object(m.jsx)(i.b,{className:"link",to:{pathname:2===this.state.progress?"/makeplan":"/video",state:{progress:this.state.progress}},children:Object(m.jsx)(x.a,{variant:"contained",className:"transition-next",children:Object(m.jsx)("span",{className:"transition-text",children:"Continue"})})})]})}}]),t}(c.a.Component),L=(t(96),function(e){Object(h.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=s.call(this,e)).state={progress:a.props.location.state.progress,videos:f},a}return Object(j.a)(t,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"makePlan",children:[Object(m.jsx)("div",{className:"makePlan-plan-title-container",children:Object(m.jsx)("span",{className:"makePlan-title",children:"Choose From Below"})}),Object(m.jsx)("div",{className:"makePlan-plan-container",children:this.state.videos[1].map((function(e,s){return Object(m.jsx)(i.b,{className:"link",to:{pathname:"/video",state:{progress:this.state.progress,video:e}},children:Object(m.jsx)(x.a,{variant:"contained",className:"makePlan-single-plan-container",children:Object(m.jsx)("span",{className:"makePlan-text",children:e.name})},s)})}),this)}),Object(m.jsx)(i.b,{className:"link",to:{pathname:"/homepage",state:{progress:this.state.progress}},children:Object(m.jsx)("div",{className:"makePlan-home-container",children:Object(m.jsx)(x.a,{variant:"contained",children:Object(m.jsx)("span",{className:"makePlan-text",children:"Home Page"})})})})]})}}]),t}(c.a.Component)),E=(t(97),function(e){Object(h.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=s.call(this,e)).state={progress:a.props.location.state.progress},a}return Object(j.a)(t,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"progress-page",children:[Object(m.jsx)("div",{className:"progress-title-container",children:Object(m.jsx)("span",{className:"progress-title",children:"Progress Report"})}),Object(m.jsx)("span",{className:"progress-header",children:Object(m.jsxs)("h1",{children:["Daily Exercise Progress Complete: ",25*this.state.progress," %"]})}),Object(m.jsxs)(p.a,{children:[this.state.progress>=1&&Object(m.jsx)("div",{className:"exercise",children:"Dynamic Stretching complete!"}),this.state.progress>=2&&Object(m.jsx)("div",{className:"exercise",children:"Light Exercise complete!"}),this.state.progress>=3&&Object(m.jsx)("div",{className:"exercise",children:"Main Exercise complete!"}),this.state.progress>=4&&Object(m.jsx)("div",{className:"exercise",children:"Static Stretching complete!"})]}),Object(m.jsx)("div",{className:"progress-bar-container",children:Object(m.jsx)("progress",{className:"myProgress",value:this.state.progress,max:"4"})}),Object(m.jsx)("div",{className:"progress-home-container",children:Object(m.jsx)(i.b,{className:"link",to:{pathname:"/homepage",state:{progress:this.state.progress}},children:Object(m.jsx)(x.a,{variant:"contained",children:"Return Home"})})})]})}}]),t}(c.a.Component));t(98);var C=function(){return Object(m.jsx)(i.a,{children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)("div",{children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/",exact:!0,component:v}),Object(m.jsx)(o.a,{path:"/homepage",exact:!0,component:v}),Object(m.jsx)(o.a,{path:"/video",exact:!0,component:k}),Object(m.jsx)(o.a,{path:"/leaderboard",exact:!0,component:y}),Object(m.jsx)(o.a,{path:"/transition",exact:!0,component:P}),Object(m.jsx)(o.a,{path:"/makeplan",exact:!0,component:L}),Object(m.jsx)(o.a,{path:"/progress",exact:!0,component:E})]})})})})};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.3ff6b6e3.chunk.js.map