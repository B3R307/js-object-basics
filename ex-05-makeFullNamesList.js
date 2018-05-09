/**
 * makeFullNamesList()
 *
 * Write a function called `makeFullNamesList` that takes an array
 * of objects with first and last names properties and returns
 * an array of strings, where each string is a full title + first & last
 * name.
 *
**/

function makeFullNamesList(arrObj){
  var arrOfStr = []
  // console.log(arrObj);

 for(var i = 0; i < arrObj.length; i ++){
    var objEl = arrObj[i]

     // console.log(arrObj[i])
     // console.log(objEl);
    // arrOfStr.push(objEl)

  if(objEl.gender === 'female'){
    arrOfStr.push('Ms. '+ objEl.first + ' ' + objEl.last);
      } else{
    arrOfStr.push('Mr. ' +objEl.first + ' ' + objEl.last)
      }

    }
    // console.log(arrOfStr)
    return arrOfStr

}




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var customersList = [
    { first: 'Joe', last: 'Blogs', gender: 'male'},
    { first: 'Kate', last: 'Smith', gender: 'female'},
    { first: 'Dave', last: 'Jones', gender: 'male'},
    { first: 'Jacky', last: 'White', gender: 'female'}
]

var moreCustomersList = [
	{ first: 'Ruby', last: 'Scooby', gender: 'female'},
	{ first: 'Jen', last: 'Vin', gender: 'female'},
	{ first: 'Dan', last: 'Theman', gender: 'male'},
]

//===============================
var fullNamesList1 = makeFullNamesList(customersList)
console.assert(typeof fullNamesList1[0] === "string")
console.assert(fullNamesList1[0] === "Mr. Joe Blogs")
console.assert(fullNamesList1[1] === "Ms. Kate Smith")
//-------------------------------
var moreNamesList = makeFullNamesList(moreCustomersList)
console.assert(typeof moreNamesList[1] === "string")
console.assert(moreNamesList[0] === "Ms. Ruby Scooby")
console.assert(moreNamesList[2] === "Mr. Dan Theman")
