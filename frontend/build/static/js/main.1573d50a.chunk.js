(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{106:function(e,t){},125:function(e,t,c){},126:function(e,t,c){},127:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(41),s=c.n(r),i=(c(58),c(59),c(14)),o=c(1);function l(){return Object(o.jsx)("div",{className:"main-container",children:Object(o.jsx)(i.b,{to:"/spotify",className:"btn-hero",children:"Login with Spotify"})})}c(69);function u(){return Object(o.jsx)("div",{className:"footer-container"})}c(70);function j(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(l,{})})}var f=c(11),d=c(16),b=c.n(d);function h(e,t){var c=Object(n.useState)((function(){var c=window.localStorage.getItem(t);return null!==c?JSON.parse(c):e})),a=Object(f.a)(c,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){window.localStorage.setItem(t,JSON.stringify(r))}),[t,r]),[r,s]}var O=c(129),m=c(130),x=c(43),v=c.n(x);function p(e){var t=e.track,c=e.chooseTrack;return Object(o.jsxs)("div",{className:"d-flex m-2 align-items-center",style:{cursor:"pointer"},onClick:function(){c(t)},children:[Object(o.jsx)("img",{src:t.albumUrl,style:{height:"64px",width:"64px"}}),Object(o.jsxs)("div",{className:"ml-3",children:[Object(o.jsx)("div",{children:t.title}),Object(o.jsx)("div",{className:"text-muted",children:t.artist})]})]})}var g=c(52);function k(e){var t=e.accessToken,c=e.trackUri,a=Object(n.useState)(!1),r=Object(f.a)(a,2),s=r[0],i=r[1];return Object(n.useEffect)((function(){return i(!0)}),[c]),t?Object(o.jsx)(g.a,{token:t,showSaveIcon:!0,initialVolume:.3,callback:function(e){e.isPlaying||i(!1)},play:s,uris:c?[c]:[]}):null}var y=new v.a({clientId:"f38e45905b8f40f4a2400c457ec4af11"});function N(e){var t=e.code;console.log("made it to the dashboard");var c=function(e){var t=h("","accessToken"),c=Object(f.a)(t,2),a=c[0],r=c[1],s=h("","refreshToken"),i=Object(f.a)(s,2),o=i[0],l=i[1],u=h("","expiresIn"),j=Object(f.a)(u,2),d=j[0],O=j[1];return Object(n.useEffect)((function(){e&&(console.log("attempting to login"),b.a.post("http://localhost:3001/login",{code:e}).then((function(e){r(e.data.accessToken),l(e.data.refreshToken),O(e.data.expiresIn),console.log("redirecting to dashboard"),window.history.pushState({},null,"/dashboard")})).catch((function(){})))}),[e]),Object(n.useEffect)((function(){if(console.log("checking refresh"),console.log(o),console.log(d),o&&d){console.log("refrshing token");var e=setInterval((function(){b.a.post("http://localhost:3001/refresh",{refreshToken:o}).then((function(e){r(e.data.accessToken),O(e.data.expiresIn)})).catch((function(){}))}),1e3*(d-60));return function(){return clearInterval(e)}}}),[o,d]),a}(t),a=Object(n.useState)(""),r=Object(f.a)(a,2),s=r[0],i=r[1],l=Object(n.useState)([]),u=Object(f.a)(l,2),j=u[0],d=u[1],x=Object(n.useState)([]),v=Object(f.a)(x,2),g=v[0],N=v[1],w=Object(n.useState)(""),S=Object(f.a)(w,2),T=S[0],I=S[1];function E(e){N(e),i(""),I("")}return Object(n.useEffect)((function(){g&&b.a.get("http://localhost:3001/lyrics",{params:{track:g.title,artist:g.artist}}).then((function(e){I(e.data.lyrics)}))}),[g]),Object(n.useEffect)((function(){if(!c)return null;y.setAccessToken(c)}),[c]),Object(n.useEffect)((function(){if(!s)return d([]);if(c){var e=!1;return y.searchTracks(s).then((function(t){e||d(t.body.tracks.items.map((function(e){var t=e.album.images.reduce((function(e,t){return t.heigh<e.height?t:e}),e.album.images[0]);return{artist:e.artists[0].name,title:e.name,uri:e.uri,albumUrl:t.url}})))})),function(){return e=!0}}}),[s,c]),Object(o.jsxs)(O.a,{className:"d-flex flex-column py-2",style:{height:"90vh"},children:[Object(o.jsx)(m.a.Control,{type:"search",placeholder:"Search Songs/Artists",value:s,onChange:function(e){return i(e.target.value)}}),Object(o.jsxs)("div",{className:"flex-grow-1 my-2",style:{overflowY:"auto"},children:[j.map((function(e){return Object(o.jsx)(p,{track:e,chooseTrack:E},e.uri)})),0===j.length&&Object(o.jsx)("div",{className:"text-center",style:{whiteSpace:"pre"},children:T})]}),Object(o.jsx)("div",{children:Object(o.jsx)(k,{accessToken:c,trackUri:null===g||void 0===g?void 0:g.uri})})]})}c(125);function w(){return Object(o.jsx)("div",{className:"navbar",children:Object(o.jsx)("div",{className:"navbar-container",children:Object(o.jsxs)("ul",{className:"nav-menu",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{to:"/",className:"nav-links",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{to:"/",className:"nav-links",children:"About"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{to:"/spotify",className:"nav-links",children:"Login"})})]})})})}var S=c(6),T=(c(126),new URLSearchParams(window.location.search).get("code"));var I=function(){return Object(o.jsx)("div",{className:"main",children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)(w,{}),Object(o.jsxs)(S.c,{children:[Object(o.jsx)(S.a,{path:"/",exact:!0,component:j}),Object(o.jsx)(S.a,{path:"/dashboard",render:function(){return Object(o.jsx)(N,{code:T})}}),Object(o.jsx)(S.a,{path:"/spotify",component:function(){return window.location="https://accounts.spotify.com/authorize?client_id=f38e45905b8f40f4a2400c457ec4af11&response_type=code&scope=streaming%20user-read-email%20user-read-private%20user-read-playback-state%20user-modify-playback-state%20user-library-read%20user-library-modify&redirect_uri=http://localhost:3000/dashboard",null}})]}),Object(o.jsx)(u,{})]})})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(I,{})}),document.getElementById("root"))},59:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){}},[[127,1,2]]]);
//# sourceMappingURL=main.1573d50a.chunk.js.map