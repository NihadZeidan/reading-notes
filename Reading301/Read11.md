## EJS 

EJS is Embedded JavaScript templates

`<%=  %>` 
`<% for () { %>     <% } %>`
`<% if () { %>      <% } %>     <% else { %>    <% } %>`

`<%- body %>`  To use layout in EJS, layout to keep something static over the pages like the nav bar ! 

`<%- include (path) %>` To use partials in EJS


All the files that we need :

- views
----- partials
---------- footer.ejs
---------- head.ejs
---------- header.ejs
----- pages
---------- index.ejs
---------- about.ejs
- package.json
- server.js


