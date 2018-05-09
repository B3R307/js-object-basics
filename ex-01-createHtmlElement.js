/**
 * createHtmlElement()
 *
 * Write a function called `createHtmlElement` that takes an object
 * as argument and returns a simple formatted HTML string.
 *
 * var exampleHtmlObj = {
 *   element: 'h1',
 *   classNames: 'grid small-section',
 *   textContent: 'Lorem ipsum dolor sit amet.'
 * }
 *
 * createHtmlElement(htmlObj)
 *  => '<h1 class="grid small-section">Lorem ipsum dolor sit amet.</h1>'
*/
 function createHtmlElement(obj){
   var htmlObj = ''
   var element = obj.element
   var text = obj.textContent
   var classN = obj.classNames
   htmlObj = `<${element} class="${classN}">${text}</${element}>`
   console.log(htmlObj)
   return htmlObj

//
// for(var property in obj){
//   var objEl = obj[property]
//   strHtml += objEl
// }
// console.log(strHtml);
//    return strHtml
 }
//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var exampleObj1 = {
  element: 'p',
  textContent: 'This is so freaking cool!',
  classNames: 'featured-section'
}

var exampleObj2 = {
  element: 'h2',
  textContent: 'Bill Brasky',
  classNames: 'ui-card-title bg--inverse'
}

var exampleObj3 = {
  element: 'span',
  textContent: 'This is an important message.',
  classNames: 'highlight text-important'
}

var htmlString1 = createHtmlElement(exampleObj1)
var htmlString2 = createHtmlElement(exampleObj2)
var htmlString3 = createHtmlElement(exampleObj3)

console.assert(htmlString1 === '<p class="featured-section">This is so freaking cool!</p>')
console.assert(htmlString2 === '<h2 class="ui-card-title bg--inverse">Bill Brasky</h2>')
console.assert(htmlString3 === '<span class="highlight text-important">This is an important message.</span>')
