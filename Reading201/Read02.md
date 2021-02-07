#### HTML tags:

< h1 > - < h6 >  ===> to creating headings (up to 6 headings)
< p > ===> to create paragraphe
< b > ===> to make bold text
< i > ===> to make italec text
< sup > ===> superscript
< sub > ===> subscript 
< br /> ===> adding line break
< hr /> ===> to add horziantal rule 
 - Note: empty elements: do not have any words between openning and closing tags, and only have one tag like < br /> < hr />
------------------------------

Semantic markup: elements to add extra info to the text
 - exp: < em > to add emphasis to the text or < blockquote > to idecate to a quoted text.
 these semantic markup help search engines to know that you have quotes in your page.

 - example of semantic markup: 
   - < em > ===> to make emphasis (browser will make the text italec too)
   - < blockquote >  ===> to add quote (Browsers tend to indent the contents of the element)
   - < stronge > ===> strong importance (browser will make the text bold too)
   - < q > ===> to add short quote 
   - < abbr > ===> to add abbreviations and acronyms ( title attribute should be add with full term. exp: < abbr title="doctor"> Dr < /abbr >)

   - < cite > ===> to add referance (citations)
   - < dfn > ===> to add definitions
   - < address > ===> to add contact info for the author (email, physical address, phone number )
   - < ins > and < del > ===> to show inserted or deleted content (The content of a < ins > element
is usually underlined, while the content of a < del > element usually has a line through it.) 
   - < s > ===> to indicate to somthing no longer accurate 
--------------------------------------------------------

#### CSS: Cascading style Sheet
it provide rules to HTML to determine how the content will be styled, and how specific elements will be displayed.

#### Linking CSS

we can link CSS to HTML pages using different methodes:
1. Inline: in which we write directily to the element by adding 'style' attribiute.
     EXP: < P style="color:black;"> </ P>
2. Internal: we put style element inside the head tag, and the identifiy the selector then the property and value.
     EXP: < style > h1 { color:black;} </ style>
3. External: where we can link the style in the head with a link to its source and relation.
     EXP: < link rel="stylesheet" href="style.css">  note: no need to close the link here because its empty element

When building a website with more than one page it is prefable to link CSS to HTMA extarnally to share the same style within the whole pages. And to keep the content saperated from how it looks like.

#### CSS Selectors:
- *{ }  ===> global selector
- .className ===> class selector 
- #idName ===> id selector
- h1, h2 ===> type selector (element selector)

<!-- 
If you specify the font-family or color properties on the < body > element, they will apply to most child elements. This is because the value of the font-family property is inherited by child elements. It saves you from having to apply these properties to as many elements (and results in simpler style sheets).

If there are two or more rules that apply to the same element, it is important to understand which will take precedence.
 LAST RULE If the two selectors are identical, the latter of the two will take precedence. 

IMPORTANT
You can add !important after any property value to indicate that it should be considered more important than other rules that apply to the same element. -->

----------------------------------------------------------------

#### Javascript

Script: is a series of instructions (steps) that a computer can follow to achieve a goal.

Each step is called statement and it must end with semicolon. 
Each block code is written inside curly brackets { }.
var: is like a container for values.
 - Before using a variable you should declare it (by announce it and giving it a name)
 - then you should assign value to a variable by putting the = sign after the variable name. If you do not assign value then its undefined

###### Data type in Js: 
 1. Strings: letters and charachters between single quote ' ' or double quote " " 
 2. Numbers: any number 
 3. Boolian: that resulte in true or false value 

using variables many times with the same name ===>  will result in overwrite over the old one. 


Arrays: is used to define more than one value. 
 - exp: var name= ['first', 'family']; 
 - arrays start count values form 0 : first= 0, family= 1  ...
 - to know how many values in array you write: nameOfVar.length 
 - to change the value in array you enter the varName[number value in array]= 'change the value' 

 Expressions: result in a single value. two types: either just assign value to a var or use to or more values to return a single value.
 Operators: are symbols that do something. 
  - Types: arithmetic, assignment, string, comparison, logical (&&, ||, !)
  - for logical operators: false && anything = false,,, True || anything = true

IF statement: check the (condition), if its true will result in the first statement in the code block, if not then it result in the second statement in the code block after the (else)