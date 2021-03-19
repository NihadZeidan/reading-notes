## Responsive Web Design

Is the process of making websites responsive,adaptive and and fit to mobile screen sizes.


RWD has 3 major component: 
1. Flexible Layout: in order to make flexible layout we can use this formula : `target ÷ context = result`
and use relative units instead of fixed one, for instance using `em` and `%` instead of using `px` 
this will create a dynamic website that will adjest the elements to fit the width. But the content of each element may no longe fit the element so we need to make dynamic too.

2. Media Queries: used to identify differnet styles for different browser or device circumstances. Its prefarble to use `@media` inside the css file.
Logical operators for media : `and`, `only`, `not`  and default media type is `all` exp : `@media all and (min-width: 800px) and (max-width: 1024px) {...}` 

Media Queries have many features, exp of the features are as following:
`@media all and (min-width: 320px) and (max-width: 780px) {...}`
`@media all and (min-width: 320px) and (max-width: 780px) {...}`
`@media all and (min-device-aspect-ratio: 16/9) {...}` the first number identify the width in px and the second for the height. 
`@media print and (min-resolution: 300dpi) {...}` DPI stands for dots per pixel.
`mobile first` The mobile first approach includes using styles targeted at smaller viewports as the default styles for a website, then use media queries to add styles as the viewport grows.

`viewport` meta tag is used to adjest the content based on the mobile screen size. And you can use the following contents for it: 
`<meta name="viewport" content="width=device-width">` : you can use `height=device-height` too.

`<meta name="viewport" content="minimum-scale=0">`
`<meta name="viewport" content="initial-scale=2">`

`<meta name="viewport" content="target-densitydpi=device-dpi">`

`<meta name="viewport" content="user-scalable=yes">` : user-scalable is used to help in accessability and usablitiy and to help those with disabilities for viewing a website as desired.

3. flexible media: meaning making the media and embaded media scalable as the viewport (device screen) changes,  One quick way to make media scalable is by using the `max-width` property with a value of 100%. Doing so ensures that as the viewport gets smaller any media will scale down according to its containers width. 

exp:

img, video, canvas {
  max-width: 100%;
}



-----------------------------------------------------------------------


## Float 

In web design, We use float CSS property to make the text flow over the images just like on prining paper the image has text around it.

Absolute Positioning: make the element out of the flow in the web page and the element will not affect or get affected by other elements. And thats different from float.

Values of Float property: 

  `Left` and `Right` 
  `None` (the default) ensures the element will not float.
  `Inherit` which will assume the float value from that elements parent element.


We use `clear` float property to prevent any collapsing of other elements after the floated elements in the contanier but before closing of the container (parent).

Values of `clear` property:

`Both` which clears floats coming from either direction. 
`Left` and `Right` can be used to only clear the float from one direction respectively. 
`None` is the default, which is typically unnecessary unless removing a clear value from a cascade. 
`Inherit`

 Techniques for Clearing Floats:
 1. The Empty Div Method  `<div style="clear: both;"></div>` .
 2. The Overflow Method relies on setting the `overflow` CSS property on a parent element. If this property is set to auto or hidden on the parent element, the parent will expand to contain the floats, effectively clearing it for succeeding elements.

 3. You can put a class to the container of the floated elements (parent) and use CSS pseudo selector `:after` then clear both floats.

 Problems with Floats:
 
- Pushdown: is a symptom of an element inside a floated item being wider than the float itself (typically an image). WE fix it by using `overflow:hidden`
- Double Margin Bug: when using float and margin the margin will be doubled. We fix it by making `display:inline` on the float.
- The 3px Jog : accuries to the text next to the floated elements (3px margin to the text). We fix it by setting a width or height on the affected text.
- Bottom Margin Bug: when floated parent had floated children the bottom margin sometimes ignored. we fix it by putting padding instead of margin to the floated parent.

---------------------------------------------


## What is SMACSS: 
Scalable and Modular Architecture for CSS: is a guide to module your work in CSS 

## Grids: 

WE can make grids in websites by selecting the percentages of each area in the page (main area for example will have width more than the left-slid bar) and put them inside a parent div and floating them. 
Then we have to cleare the float from the parent element (because the parent element has 0 height because it has only floated children) by selecting the parent and use `:after` then clear both:

.grid:after {
  content: "";
  display: table;
  clear: both;
}


You can use as much columns as you want but make sure to assign the right width to each one.

Exp : 

.col-1-2 {
  width: 50%;
}
.col-1-4 {
  width: 25%;
}
.col-1-8 {
  width: 12.5%;
}


-------------------------------------------------

The source of the codes in the examples: 

https://learn.shayhowe.com/advanced-html-css/responsive-web-design/

https://css-tricks.com/all-about-floats/

https://css-tricks.com/dont-overthink-it-grids/


