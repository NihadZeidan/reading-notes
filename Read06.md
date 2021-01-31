### CSS: Cascading style Sheet
it provide rules to HTML to determine how the content will be styled, and how specific elements will be displayed.

#### Linking CSS

we can link CSS to HTML pages using different methodes:
1. Inline: in which we write directily to the element by adding 'style' attribiute.
     EXP: < P style="color:black;"> </ P>
2. Internal: we put style element inside the head tag, and the identifiy the selector then the property and value.
     EXP: < style > h1 { color:black;} </ style>
3. External: where we can link the style in the head with a link to its source and relation.
     EXP: < link rel="stylesheet" href="style.css">  note: no need to close the link here because its empty element

-------------------------------------------------------------------------------------

When building a website with more than one page it is prefable to link CSS to HTMA extarnally to share the same style within the whole pages. And to keep the content saperated from how it looks like.

--------------------------------------------------------------------------------------

### CSS colors 

There are many methodes to add color in CSS: 
- Name --- > color:black; 
- RGB  --- > color: rgb (red value, Green value, Blue value);  note that rgb has values from 0 - 255, and you can Alfa to it; which is opacity.
- hexadicimal --- > # 00 00 00 
- hsl --- > color:hsl(hue value, saturation value, lightness value);
   hue: is the degree of color on wheel from 0 - 360 
   Saturation: shade of grey from 0% - 100%
   lightness: from 0% - 100% 
    - also note that you can add Alfa to hsl too, alfa value = 0.0 - 1.0 
------------------------------------------------------------------------------------------

### Functions

Functions in javascript let you group a series of statement together to perform a specific task (simply it's a block of code that does something)

We use functions to reuse it whenever we want. and to avoid DRY (don't repeat yourslef)

There are 2 ways to insert functions: 
1. Decalration: 
      function   funName() { 
          input
          Code
          return output.
      }

2. Expressions Functions: 
    var  varName = function () {
        input
        Code
        return output
    }

#### IMPORTANT NOTES: 
 - Functions won't run unless you call it eaither by function name for declaration or var name for expresstion function.
   funName();
   varName ();
- Variablies inside functions are only for the function and won't work outside it.
- inside parantheses of the funcition you can write what we call it parameteres. and when you assign values to it in calling it will be called urguments.


![CSS](https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg)