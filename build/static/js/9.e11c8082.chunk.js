(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[9],{82:function(e,t,a){e.exports={moviesGallery:"Cast_moviesGallery__3ng68",moviesGalleryItem:"Cast_moviesGalleryItem__FIqkc",moviesGalleryItemImage:"Cast_moviesGalleryItemImage__10fFg",title:"Cast_title__3Qm0T",header:"Cast_header__1FCKE",text:"Cast_text__2i9sA"}},91:function(e,t,a){"use strict";a.r(t);var s=a(36),c=a(0),i=a(2),l=a(34),n=a.p+"static/media/no-cast.d7e60210.jpg",r=a(82),o=a.n(r),m=a(1);t.default=function(){var e=Object(i.h)().movieId,t=Object(c.useState)([]),a=Object(s.a)(t,2),r=a[0],h=a[1];return Object(c.useEffect)((function(){l.a.fetchMovieCast(e).then(h).catch((function(e){return console.log(e.message)}))}),[e]),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:o.a.title,children:"Actors"}),r&&Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("ul",{className:o.a.moviesGallery,children:r.map((function(e){return Object(m.jsxs)("li",{className:o.a.moviesGalleryItem,children:[Object(m.jsx)("img",{src:e.profile_path?"".concat("https://image.tmdb.org/t/p/w45").concat(e.profile_path):n,alt:e.name,className:o.a.moviesGalleryItemImage}),Object(m.jsx)("p",{className:o.a.text,children:e.original_name||e.name})]},e.id)}))})}),0===r.length&&Object(m.jsx)("p",{children:"There is no information about the cast."})]})}}}]);
//# sourceMappingURL=9.e11c8082.chunk.js.map