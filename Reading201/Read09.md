## Events and Forms 

Events: are triggers that tell the code to change or display another code or change the properties.

`element.addEventListner(type of event, function() {}` or you can use a global function already delared but without (). 



You can create a form in HTML using the following elements
`<form>`: you give it ID 
`<fieldset>`: to put the form in box 
`<label>`: to put labers behind the input area (it has `for=" "` attribute and link it with input ID)
`<input>`: it has ID, name (to generate the values form it), type(type of input: Number, Text, checkbox, submit), placeholder (to show defalut message in the input area) and required (to make it required input).


Use this path to get the data from the form : `event.target.(what inside the name in input).value(or checked for checkbox type)`

The defalut behavior of `submit` data type is refreshing the page, so you can do `preventdefault();` function in JS to not refresh the page when the user submit form.

