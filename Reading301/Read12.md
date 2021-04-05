## EJS PARTIALS

Partials: is a function where you can maintain large websites easer , in which you use files to define the code. Partials are native to JS.


Partials allow you to use the same part of the page in all other pages for example the navebar or footer.

navbar.ejs: which will contain only the HTML for the navigation bar at the top of the home and post pages.

footer.ejs: file contain only the footer elements.

 Note: The <%- %> tags allow us to output the unescaped content onto the page (notice the -). This is important when using the include() statement since you don’t want EJS to escape your HTML characters like ‘<’, ‘>’, 

 
Most tag we use in partials: 

  `<%- include('path')%>`

 ------------------------------------------------------------------------

 
 LINK FOR VIDEO PLAYLIST ABOUT EJS: 
 https://www.youtube.com/playlist?list=PL7sCSgsRZ-slYARh3YJIqPGZqtGVqZRGt