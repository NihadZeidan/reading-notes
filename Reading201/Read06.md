## The Problem Domain

The real world is a messy place.  Many of the problem domains we face as programmers are difficult to understand and look completely different depending on your viewpoint.
 It is very difficult to solve a problem before you know the question.  It’s like buzzing in on Jeopardy before you hear the clue and shouting
 You can often make the problem domain easier by cutting out cases and narrowing your focus to a particular part of the problem.

 It is easy to fall into the trap of thinking you understand enough of the problem to get started coding it. 

 --------------------------------------------------------
## Objects

 Objects containing functions and variables to create object model.

 functions will be called **Methods** in objects. And it is like tasks for an object.
 variables will be called **Property** in objects. And it tells us about the object.

 The name of an Method or Property called **KEY** ===> and it must be different.
 Each key has **value**

 **This example shows the literal notation method in creating objects:**
 let Nihad = {
     brothers: 4,
     family: 'Zeidan',
     living: 'Zarqa',
     healthy: function() {
         alert('He is healthy');
     }
 } ;  

**You can call objects by DOT NOTATION method:**

let NihadInfo = Nihad.brothers;
                Nihad.family;
                Nihad.living;
                Nihad.healthy();

The Dot is a member operator, whats on left is a member to the right.

You can call Properties only using square brackets:
Let NihadInfo = Nihad[' brothers ']; 

--------------------------------------------------------
## Document Object Model (DOM)

The DOM tells the browser how to create a model of an HTML, and how JS will access and update this model for each user.

Browser structure HTML pages with a specific model determind in the DOM called DOM tree, and its made of OBJECTS.

DOM have methods and properties to access and update objects in the model.

DOM is often called Application programming Interface (API)

DOM node: is each element, attribute and text is defined by DOM Node. Each Node is an object with property and method.

![AccessNodesElements](Images/Access nodes in DOM.png)
![Work with DOM elements](Images/Work with DOM elements.png)

DOM queries : are the methodes to access nodes.
There are two ways to select an element from a Nodelist:
- The item() method: element.item(indexn num) 
- Array syntax:  element[index num]

You can make (for loop) to loop over nodelists one by one:

 var element = document.getElementByClassName('hot');
 if (element.length > 0) {
    for (i= 0, i< element.length, i++) {
        element[ i ].className = 'cool' ;
    }
 }

Traversing the DOM: selecting (moving to) another nodes. by using these properties: 

parentNode 
previousSibling 
nextSibling 
firstChild
lastChild

![Traversing](Images/6c34877571f32828468dd679cd047b21.jpg)

Traversing between elements could be difficult because browsers add a text node between elements that has white space. Therefor you can use them if there are no spaces between elements in HTML.

nodevalue ==> to access text from a node.
innerHTML ==> get\sets texts and markup.
textcontent ==> get\sets text only.
innertext ==> get\sets text only.

-----------------------------------

To add or remove HTML content form the DOM you can do: innerHTML  and DOM manipulation. 

in DOM manipulation you can: 
1. Add elements using appendChild() by these steps:
 - createElement()
 - createTextNode()
 - append the text to the element. using appendChild().
 - find position to add element.
 - add element to the position using appendChild().

2. Remove elements using removeChild() by 3 steps:
 - store the element to be removed in a variable.
 - store the parent of that element in a variable.
 - remove the element from its container. useing removeChild().






 or removeChile() .
