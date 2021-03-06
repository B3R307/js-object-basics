/**
 * createCarRecord()
 *
 * Write a function called `createCarRecord` that takes 4 arguments
 * and returns a new object in the following format.
 *
 * {make: ... , model: ... , year: ... , license: }
 *
 * + The 1st parameter should be a string value for the car make (e.g. ford)
 * + The 2nd parameter should be a string value for the car model (e.g. pinto)
 * + The 3rd parameter should be a number value for the car year.
 * + The 4th parameter should be a string value for the car license plate.
 *
 * you will need to do some type checking on the inputs with the `typeof`
 * perator (see assertions 3 - 4) to make sure that the function is
 * used properly. if the user did not provide the correct the correct inputs,
 * to the function, the function should return a string.
 *  ( see GROUP2 - GROUP4 console.assert() )
**/

function createCarRecord(strMk, strModl, num, strLisc){
  // console.log(strMk, strModl, num, strLisc);
   var newOb = {}
   var mk = typeof strMk
   var md = typeof strModl
   var nu = typeof num
   var lis = typeof strLisc
   // console.log(mk);
   // console.log(md);
   // console.log(nu);
   // console.log(lis);

    if(mk === 'undefined' && md === 'undefined' && nu === 'undefined' && lis === 'undefined'){
        newOb = 'new record must have make, model, year, and license values'
        return newOb
     }  else if(mk !== 'string' && md !== 'string' && nu !== 'number' && lis === 'string'){
        newOb = '1ts and 2nd arguments must be String and 3rd arguments must be a number'
        return newOb
     }  else if(mk === 'string' && md !== 'string' && nu !== 'number' && lis !== 'string'){
        newOb = '2nd and 4th arguments must be String and 3rd arguments must be a number'
        return newOb
     }  else if(mk !== 'string' && md === 'string' && nu !== 'number' && lis !== 'string'){
         newOb = '1st and 4th arguments must be String and 3rd arguments must be a number'
         return newOb
     }  else if(mk !== 'string' && md === 'string' && nu !== 'number' && lis === 'string'){
        newOb = '1st argument must be a String and 3rd argument must be a Number'
        return newOb
     }  else if(mk !== 'string' && md !== 'string' && nu === 'number' && lis !== 'string'){
        newOb = '1st, 2nd, and 4th arguments must be String'
        return newOb
     }  else if(mk === 'string' && md !== 'string' && nu !== 'number' && lis === 'string'){
        newOb = '2nd argument must be a String and 3rd argument must be a Number'
        return newOb
     }  else if(mk === 'string' && md === 'string' && nu !== 'number' && lis !== 'string'){
        newOb = ('3rd argument must be a Number and 4th argument must be a String' )
        return newOb
     } else if(mk !== 'string' && md !== 'string' && nu === 'number' && lis === 'string'){
       newOb = '1ts and 2nd arguments must be String'
       return newOb
     }  else if(mk === 'string' && md !== 'string' && nu === 'number' && lis !== 'string'){
       newOb = '2nd and 4th arguments must be String'
       return newOb
     } else if(mk !== 'string' && md === 'string' && nu === 'number' && lis !== 'string'){
       newOb = '1st and 4th arguments must be String'
       return newOb
     } else if(mk !== 'string'){
       newOb = '1st argument must be a String'
       return newOb
     } else if(md !== 'string'){
       newOb = '2nd argument must be a String'
       return newOb
     } else if(nu !== 'number'){
       newOb = '3rd argument must be a Number'
       return newOb
     } else if(lis !== 'string'){
       newOb = '4th argument must be a String'
       return newOb
     }

     newOb ={
     make: strMk,
     model: strModl,
     year: num,
     plate: strLisc
    }
    console.log(newOb);
    return newOb
  }

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var newCar1 = createCarRecord('Ford', 'Pinto', 1969, 'IOU7S2')
var newCar2 = createCarRecord('Pontiac', 'Azteca', 2001, '48NLL1' )
var newCar3 = createCarRecord('Jeep', 'Wrangler', 1987, '8HPN02' )
// ---------------------------
// Test for incomplete arguments to function.
var newCar4 = createCarRecord()
var newCar5 = createCarRecord('Volkswagen', 'Beatle')
// ---------------------------
// Test for invalid input types
var newCar6 = createCarRecord('Ferrari', true, 2015, 'K9KPL2' )
var newCar7 = createCarRecord( true, 'Spider', 2012, 93933)
// ---------------------------
var newCar8 = createCarRecord( 'Ferrari', 'Spider', '2013', '8IOL32')
console.assert( typeof newCar1 === 'object')
console.assert( newCar1.make === "Ford" && newCar1.model === "Pinto")
console.assert( newCar2.make === "Pontiac" && newCar2.year === 2001)
console.assert( newCar3.model === "Wrangler" && newCar3.license === '8HPN02')
// ---------------------------
//GROUP2
console.assert( typeof newCar4 === 'string')
console.assert( newCar4 === 'new record must have make, model, year, and license values')
console.assert( newCar5 === 'new record must have make, model, year, and license values')
// ---------------------------
//GROUP3
console.assert( typeof newCar6 === 'string')
console.assert( newCar6 === '1st, 2nd, and 4th arguments must be String')
console.assert( newCar7 === '1st, 2nd, and 4th arguments must be String')
// ---------------------------
//GROUP4
console.assert( typeof newCar8 === 'string')
console.assert( newCar8 === '3rd argument must be a Number')
