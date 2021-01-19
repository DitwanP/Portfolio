(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[8],{111:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return y}));var t=n(41),s=n(42),i=n(43),r=n(44),c=n(0),o=n.n(c),l=n(45),m=n(8),d=(n(82),{in:{scale:[.95,.95,.95,1],x:["100vw","100vw","0vw","0vw"]},notIn:{scale:.95,x:"100vw"},outDown:{scale:[1,.95,.95],y:[0,0,1e3]}}),g={type:"tween",ease:"easeInOut",duration:.75},p={start:{y:40,opacity:0},end:{y:0,opacity:1},rotate:{scale:1.1,rotateX:180}},h={showCube:!1,dimension:"3D",velocity:.5,boundaryType:"passthru",antialias:!1,direction:{xMin:-.6,xMax:.3,yMin:1,yMax:0,zMin:-.6,zMax:.3},lines:{colorMode:"solid",color:"#081016",transparency:.9,limitConnections:!0,maxConnections:20,minDistance:150,visible:!1},particles:{colorMode:"solid",color:"#081016",transparency:1,shape:"circle",boundingBox:"canvas",count:90,minSize:20,maxSize:40,visible:!0},cameraControls:{enabled:!1,enableDamping:!0,dampingFactor:.2,enableZoom:!0,autoRotate:!1,autoRotateSpeed:.3,resetCameraFlag:!0}},u={showCube:!1,dimension:"3D",velocity:.5,boundaryType:"passthru",antialias:!1,direction:{xMin:-.6,xMax:.3,yMin:1,yMax:0,zMin:-.6,zMax:.3},lines:{colorMode:"rainbow",color:"#351CCB",transparency:.9,limitConnections:!0,maxConnections:20,minDistance:150,visible:!1},particles:{colorMode:"solid",color:"#4bc3b7",transparency:1,shape:"circle",boundingBox:"canvas",count:60,minSize:10,maxSize:30,visible:!0},cameraControls:{enabled:!1,enableDamping:!0,dampingFactor:.2,enableZoom:!0,autoRotate:!1,autoRotateSpeed:.3,resetCameraFlag:!0}},y=function(e){Object(i.a)(n,e);var a=Object(r.a)(n);function n(e){var s;return Object(t.a)(this,n),(s=a.call(this,e)).nameText=o.a.createRef(),s.professionText=o.a.createRef(),s}return Object(s.a)(n,[{key:"componentDidMount",value:function(){for(var e=this.nameText.current.childNodes,a=this.professionText.current.childNodes,n=function(a){e[a].addEventListener("animationend",(function(n){e[a].classList.remove("animated")})),e[a].addEventListener("mouseover",(function(n){e[a].classList.add("animated")}))},t=0;t<=e.length-1;t++)n(t);for(var s=function(e){a[e].addEventListener("animationend",(function(n){a[e].classList.remove("animated")})),a[e].addEventListener("mouseover",(function(n){a[e].classList.add("animated")}))},i=0;i<=a.length-1;i++)s(i)}},{key:"render",value:function(){return o.a.createElement(m.b.div,{className:"hero-container",variants:d,initial:"notIn",animate:"in",exit:"outDown",transition:g},o.a.createElement(m.b.div,{className:"animation-canvas",style:{opacity:0},animate:{opacity:1},transition:{duration:2,delay:1.8}},o.a.createElement(l.a,{config:h})),o.a.createElement(m.b.div,{className:"animation-canvas",style:{opacity:0},animate:{opacity:1},transition:{duration:2,delay:1.8}},o.a.createElement(l.a,{config:u})),o.a.createElement("section",{className:"hero-content"},o.a.createElement(m.b.div,{className:"greeting",initial:"start",animate:"end",variants:p,transition:{ease:"easeIn",duration:.25,delay:1}},o.a.createElement("h3",null,"Hi, my name is")),o.a.createElement(m.b.div,{className:"name",variants:p,initial:"start",animate:"end",transition:{ease:"easeIn",duration:.25,delay:1.1}},o.a.createElement("h1",{ref:this.nameText,"aria-label":"Ditwan Price"},o.a.createElement("span",{className:"greeting-chars"},"D"),o.a.createElement("span",{className:"greeting-chars"},"i"),o.a.createElement("span",{className:"greeting-chars"},"t"),o.a.createElement("span",{className:"greeting-chars"},"w"),o.a.createElement("span",{className:"greeting-chars"},"a"),o.a.createElement("span",{className:"greeting-chars"},"n"),"\xa0",o.a.createElement("span",{className:"greeting-chars"},"P"),o.a.createElement("span",{className:"greeting-chars"},"r"),o.a.createElement("span",{className:"greeting-chars"},"i"),o.a.createElement("span",{className:"greeting-chars"},"c"),o.a.createElement("span",{className:"greeting-chars"},"e"),o.a.createElement("span",{className:"greeting-chars"},"."))),o.a.createElement(m.b.div,{className:"profession",style:{y:40,opacity:0},animate:{y:0,opacity:1},transition:{ease:"easeIn",duration:.25,delay:1.2}},o.a.createElement("h1",{ref:this.professionText,"aria-label":"Ditwan Price"},o.a.createElement("span",{className:"greeting-chars"},"I"),o.a.createElement("span",{className:"greeting-chars"},"'"),o.a.createElement("span",{className:"greeting-chars"},"m"),"\xa0",o.a.createElement("span",{className:"greeting-chars"},"a"),"\xa0",o.a.createElement("span",{className:"greeting-chars"},"D"),o.a.createElement("span",{className:"greeting-chars"},"e"),o.a.createElement("span",{className:"greeting-chars"},"v"),o.a.createElement("span",{className:"greeting-chars"},"e"),o.a.createElement("span",{className:"greeting-chars"},"l"),o.a.createElement("span",{className:"greeting-chars"},"o"),o.a.createElement("span",{className:"greeting-chars"},"p"),o.a.createElement("span",{className:"greeting-chars"},"e"),o.a.createElement("span",{className:"greeting-chars"},"r"),o.a.createElement("span",{className:"greeting-chars"},"."))),o.a.createElement(m.b.div,{className:"about-me",style:{y:40,opacity:0},animate:{y:0,opacity:1},transition:{ease:"easeIn",duration:.25,delay:1.3}},o.a.createElement("h1",{"aria-label":"brief about me"},"I'm a CS new grad that has developed a genuine passion for coding. I am eager and open to learning many different technologies, and currently in search of opportunities that will allow me to continue developing and honing my skills while contributing what I already know."))))}}]),n}(c.Component)},82:function(e,a,n){}}]);
//# sourceMappingURL=8.85de78c5.chunk.js.map