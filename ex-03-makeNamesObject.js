/**
 * makeNamesObject()
 *
 * Create a function that accepts 3 strings with first + last names as arguments
 * The function should return an object with 3 properties:
 * The first name will be a property-name and the last name will be the value
 *
 * EXAMPLE:
 * makeNamesObject("George Washington", "John Adams", "Kanye West")
 *   =>
 *   {
 *      George: "Washington",
 *      John: "Adams",
 *      Kanye: "West"
 *   }
 *
 * HINT: You may need to review `object bracket notation` to dynamically
 *       set an object's property name.
 *
*/


function makeNamesObject(str1, str2, str3){
  var newObj = {}
  // console.log(str1);
  // console.log(str2);
  // console.log(str3);

    var strN1 = str1.split(' ');
    // console.log(strN1);
    var strN2 = str2.split(' ');
    // console.log(strN2);
    var strN3 = str3.split(' ');
    // console.log(strN3);

    newObj = {
      [strN1[0]]: strN1[1],
      [strN2[0]]: strN2[1],
      [strN3[0]]: strN3[1],
   }
     // console.log(strN1, strN2, strN3);
     // console.log(newObj);
     return newObj


}




// strN1 = `${str1.split(' ')} ${str2.split(' ')} ${str3.split(' ')}`

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj['Abe'] === "Lincoln")
console.assert(greatMenObj.Kanye === "West")
//-------------------
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")
