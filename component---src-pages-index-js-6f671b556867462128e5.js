(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,t,n){"use strict";n.r(t);var r=n("zufY"),i=n("q1tI"),a=n.n(i),o=n("Wbzz"),c=(n("HQhv"),n("zGcK"),n("+ZDr")),s=n.n(c),d=n("VgBE"),l=(n("1NdR"),d.sorter),h=function(e){var t=e.content,n=e.title;console.log(l);var r=t.map((function(e){return e.node.frontmatter})).sort(l).reduce((function(e,t){return e.length?(e[e.length-1][0].section.split(",")[0]===t.section.split(",")[0]?e[e.length-1].push(t):e.push([t]),e):(e.push([t]),e)}),[]);return a.a.createElement("div",{className:"main-card"},a.a.createElement("h1",{className:"lesson-title gradient"},n),a.a.createElement("div",{className:"lesson-content"},a.a.createElement("ol",{className:"sections-name"},r.map((function(e){return a.a.createElement("li",{key:e[0].section},a.a.createElement("h3",{className:"lesson-section-title"},e[0].section),a.a.createElement("ol",null,e.map((function(e){return a.a.createElement("li",{key:e.path},a.a.createElement(s.a,{to:e.path},e.title))}))))})))))};n("EDuE"),t.default=function(){return a.a.createElement(o.a,{query:"2707967039",render:function(e){return a.a.createElement("div",{className:"index"},a.a.createElement("div",{className:"jumbotron gradient"},a.a.createElement("h1",null,e.site.siteMetadata.title),a.a.createElement("h2",null,e.site.siteMetadata.subtitle)),a.a.createElement(h,{title:"Table of Contents",content:e.allMarkdownRemark.edges}))},data:r})}},VgBE:function(e,t,n){function r(e){if(!/^\d+[A-Z]+$/.test(e))throw new Error(e+" does not match the section format. It must be <numbers><capital letters>, like 16A or 5F (case sensitive)");return[/^\d+/.exec(e)[0],/[A-Z]+$/.exec(e)[0]]}n("HQhv");var i=function(e){return e.split("").map((function(e,t){return e.charCodeAt(0)*Math.pow(10,t)})).reduce((function(e,t){return e+t}))};e.exports.splitSections=r,e.exports.sorter=function(e,t){var n,a;e.attributes&&e.attributes.order?(n=e.attributes.order,a=t.attributes.order):(n=e.order,a=t.order);var o=r(n),c=o[0],s=o[1],d=r(a),l=d[0],h=d[1];return c!==l?c-l:i(s)-i(h)}},zufY:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Introduction to Git and Github","subtitle":"Learn Git and Github basics","description":"A workshop based of focused on learning the basics of Git and Github. Some real life usages of Git and Github will be demoed in the workshop.","keywords":["git","github","basics of git","basics of github","project management on github"]}},"allMarkdownRemark":{"edges":[{"node":{"id":"450ed13b-cadb-55b3-97c4-15b34b8d1ee1","frontmatter":{"order":"1A","path":"/intro","title":"Introduction","section":"Welcome","description":"This pages "}}},{"node":{"id":"1fbd679e-1e8d-5309-a14e-599f52da4609","frontmatter":{"order":"1B","path":"/set-up-instructions","title":"Set Up Instructions","section":"Welcome","description":"setup"}}},{"node":{"id":"7c6a312d-91a2-5668-a7c6-5785151c5306","frontmatter":{"order":"2A","path":"/understand-necessity-git-github","title":"Understanding the Necessity of Git and Github","section":"Understanding The Necessity","description":"understanding why we need git and github"}}},{"node":{"id":"02ab19b1-697a-5ba5-bb1b-f5173b67e543","frontmatter":{"order":"3A","path":"/organization","title":"Organizing Your Code","section":"Architecture","description":"The Project"}}},{"node":{"id":"0c7f01c2-6718-5bee-9cb8-320e25529649","frontmatter":{"order":"3B","path":"/init","title":"Init the Project","section":"Architecture","description":"The Project"}}},{"node":{"id":"387a1c18-8296-5860-aed2-f19e433fb734","frontmatter":{"order":"3C","path":"/state-machine","title":"State Machine","section":"Architecture","description":"The Project"}}},{"node":{"id":"19522d7a-5851-51f3-b387-75c64d7f4318","frontmatter":{"order":"4A","path":"/some-ui","title":"Some UI","section":"The Game","description":"The Project"}}},{"node":{"id":"023cf764-db32-5064-b36b-f76d333d9e1f","frontmatter":{"order":"4B","path":"/interacting-with-the-ui","title":"Interacting with the UI","section":"The Game","description":"The Project"}}},{"node":{"id":"302ffee7-fb85-5346-8862-8a981c6c1332","frontmatter":{"order":"4C","path":"/the-states","title":"The States","section":"The Game","description":"The Project"}}},{"node":{"id":"b87ea0d4-8585-531c-9e0d-828acc73a04f","frontmatter":{"order":"4D","path":"/transitioning-between-states","title":"Transitioning Between States","section":"The Game","description":"The Project"}}},{"node":{"id":"62458e18-68c3-5913-9ad9-a9465429c9c1","frontmatter":{"order":"4E","path":"/pooping","title":"Pooping","section":"The Game","description":"The Project"}}},{"node":{"id":"b6f295d9-efcf-56ba-bc18-e2b0fef7378d","frontmatter":{"order":"4G","path":"/death","title":"Death","section":"The Game","description":"The Project"}}},{"node":{"id":"ca0d4d87-b3b2-58ad-9f17-18d8c5d0e943","frontmatter":{"order":"5A","path":"/conclusion","title":"Wrapping Up","section":"Conclusion","description":"The Project"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-6f671b556867462128e5.js.map