(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[8],{35:function(e,t,a){"use strict";t.a=a.p+"static/media/no-poster-available.7555b152.jpg"},46:function(e,t,a){e.exports={moviesGallery:"MoviesList_moviesGallery__1eucY",moviesGalleryItem:"MoviesList_moviesGalleryItem__3H5J9",moviesGalleryItemImage:"MoviesList_moviesGalleryItemImage__1rP4N",Title:"MoviesList_Title__13Jy6"}},59:function(e,t,a){"use strict";a.r(t);var s=a(35),i=a(46),o=a.n(i),c=a(2),l=a(9),m=a(1);t.default=function(e){var t=e.movies,a=0!==t.length,i=Object(c.g)(),r=Object(c.f)();return Object(m.jsx)("ul",{className:o.a.moviesGallery,children:a&&t.map((function(e){return Object(m.jsx)("li",{className:o.a.moviesGalleryItem,children:Object(m.jsxs)(l.b,{to:{pathname:"/movies/".concat(e.id),state:{from:"".concat(r.location.pathname)+"".concat(r.location.search),label:"Back to movies",search:i.search}},children:[Object(m.jsx)("h2",{className:o.a.Title,children:e.name||e.original_title}),Object(m.jsx)("img",{src:e.poster_path?"".concat("https://image.tmdb.org/t/p/w342").concat(e.poster_path):s.a,alt:e.title,className:o.a.moviesGalleryItemImage})]})},e.id)}))})}}}]);
//# sourceMappingURL=8.ec547348.chunk.js.map