'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: Takes a value, and returns it unchanged
 * @param {Any Datatype} value: can be any datatype/value
 * 
 * @return {Any Datatype}: will be the same value as our input value.
 * 
 */
 
function identity(value){
    return value;
}

module.exports.identity = identity;

/**
 * typeOf: takes a value and returns a string of its value
 * @param {Any Datatype} value: can be any data type 
 * @return {String}: will be a string of the given value 
 */ 

 function typeOf(value) {
    if (typeof value === undefined){
        return "undefined";
    } else if (value === null) {
        return "null";
    } else if (Array.isArray(value)){
        return "array";
    } else {
        return typeof value;
    }
}

module.exports.typeOf = typeOf;

/**
 * first: designed to loop over an array and return a new array of the index at a given 
 * and return the first index to the given number
 * @param {Array} array: the collection over which to iterate
 * @param {Number} num: the number determining where to stop pushing into the array
 * @return {Array} newArray: an array of the relevant indexes
 */

function first(array, num){
    let newArray = [];
    if (Array.isArray(array) === false || num < 0){
        return [];
    } else if (typeof num !== "number" || num === null){
         return array[0];
    } else {
      newArray = array.slice(0, num);
    }
return newArray;
}

module.exports.first = first;
/**
 * last: Designed to loop over an array and return the indexes from a given number
 * to the end of the array
 * @param {Array} array: the collection over which to iterate
 * @param {Number} num: the number determining where to start pushing in the array
 * @return {Array} newArray: an array of the relevant indexes
 */

function last(array, num) {
    if (Array.isArray(array) === false || num < 0){
        return [];
    } else if (typeof num !== "number" || num === null){
         return array[array.length - 1];
    } else {
        return array.slice(-num, array.length);
    }
}

module.exports.last = last;

/**
 * indexOf: Designed to loop over an array and produce the index of a given value
 * @param {Array} array: the collection over which to iterate.
 * @param {Any Datatype} value: the value held by number we're looking for
 * @return {Number} i: the index of the argument value
 */

function indexOf(array, value) {
    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] === value) {
            return i;
        }
    } return -1;
}

module.exports.indexOf = indexOf;

/**
 * contains: Designed to look through an array and return a boolean if a given value 
 * exists inside the array
 * @param {Array} array: the array being checked.
 * @return {Boolean}: the result of the test of whether or not the value exists in the loop
 */

function contains(array, value) {
    return (array.includes(value) ? true : false);
}

module.exports.contains = contains;

/**
 * unique: Designed to take an array and bring back and new array of the values of 
 * the first array with the duplicates removed
 * @param {Array} array: the duplicate laden array
 * @return {Array} arr: the new array that contains the first array's values minus 
 * duplicates
 */

function unique(array){
    let arr = [];
    for (let i = 0; i <= array.length-1; i++) {
        if (arr.indexOf(array[i]) === -1) {
          arr.push(array[i]); 
        }
    }
    return arr;
}

module.exports.unique = unique;

/**
 * filter: designed to run a test on each element of an array, and return an array of 
 * only those elements which pass the test
 * @param {Array} array: the array to be looped and tested
 * @param {Function} test: the test run on each element that will decide wnether it makes
 * it to the new array or not
 * @return {Array} resultArray: the array of elements that have passed the test
 */

function filter(array, test) {
    var resultArray = [];
    each(array, function(element, index, array) {
        if (test(element, index, array)) {
            resultArray.push(element);
        }
    });
    return resultArray;
}

module.exports.filter = filter;

/**
 * reject: designed to create an array of only those elements which do not pass a test
 * @param {Array} array: the collection to be tested
 * @param {Function} test: the test that will determine the result group
 * @return {Array} resultArray: the array of elements that failed the test
 */

function reject(array, test) {
    var resultArray = [];
    each(array, function(element, index, array) {
        if (test(element, index, array) === false) {
            resultArray.push(element);
        }
    });
    return resultArray;
};

module.exports.reject = reject;

/**
 * partition: designed to take an original array, and parse it into two sub arrays
 * of elements that pass a test, and those that do not.
 * @param {Array} array: the array to be sorted
 * @param {Function} fOrF: the test that will derive a boolean for each element 
 * @return {Array} all: the array made of the two sub arrays carrying truthy and falsy elements
 */

function partition(array, tOrF) {
    let all = [];
    let truthies = [];
    let falsies = [];
    for(let i = 0; i <= array.length - 1; i++) {
        if (tOrF(array[i], array[i]["key"], array)) {
            truthies.push(array[i]);
        } else {
            falsies.push(array[i]);
        }
    }
    all.push(truthies, falsies);
    return all;
}

module.exports.partition = partition;

/**
 * map: Designed to take a collection, and perform some action on all the elements 
 * and return an updated collection of elements
 * @param {Array or Object} collection: the collection that will be updated
 * @param {Function} test: the function that will update the elements before putting
 * them in the result array
 * @return {Array} result: the array of updated elements
 */

function map(collection, test){
    let result = [];
    if(Array.isArray(collection)){
        for (let i = 0; i <= collection.length - 1; i++){
            result.push(test(collection[i], i, collection));
        }
    } else {
        for (let key in collection){
            result.push(test(collection[key], key, collection));
        }
    }
    return result;
};

module.exports.map = map;

/**
 * pluck: designed to returned an array containing the value of a given key within
 * every element of an array
 * @param {Array} array: the array that will be plucked from 
 * @param {String} key: the name of the property whose value will be plucked and collected
 * @return {Function} map: returns a function that will produce an array according to the test 
 */

function pluck(array, key){
    
   return map(array, function(element, index, collection){
       return element[key];
    });
    
};

module.exports.map = map;

/**
 * every: designed to make sure that every element of a collection passes a test 
 * @param {Array or Object} collection: the collection to be tested 
 * @return {Boolean}: returns true only if all elements pass the test 
 */

function every(collection, test) {
     console.log(collection);
     if (Array.isArray(collection)) {
       for (let i = 0; i <= collection.length - 1; i++) {
           if (test === undefined && collection[i]) {
               return true;
           } else if (test === undefined && !collection[i]) {
               return false;
           } else if(!test(collection[i], i, collection)) {
               return false;
           }
       } return true;
    } else if (typeof collection === "object") {
        for (let key in collection) {
            if(test === undefined && collection[key]) {
                return true;    
            } else if (test === undefined && !collection[key]) {
                return false;    
            } else if (!test(collection[key], key, collection)) {
                return false;
            }
        }
        return true;
   }   
}

module.exports.every = every;

/**
 * some: Designed to run a test on every element of a collection, and return true 
 * if at least one element passes
 * @param {Array or Object} collection: the collection being tested
 * @param {Function} test: the test run on each element
 * @return {Boolean}: return the result of the test 
 */

function some(collection, test) {
     if (Array.isArray(collection)) {
       for (let i = 0; i <= collection.length - 1; i++) {
           if (test === undefined && collection[i]) {
               return true;
           } else if (test === undefined && !collection[i]) {
               return false;
           } else if(test(collection[i], i, collection)) {
               return true;
           }
       } return false;
    } else if (typeof collection === "object") {
        for (let key in collection) {
            if(test === undefined && collection[key]) {
                return true;    
            } else if (test === undefined && !collection[key]) {
                return false;    
            } else if (test(collection[key], key, collection)) {
                return true;
            }
        }
        return false;
   } 
}

module.exports.some = some;

/**
 * reduce: Designed to take many elements and reduce them to one value 
 * @param {Array} array: the iteratee, the collection being reduced
 * @param {Function} test: the way we are going to work on our values
 * @param {Any Datatype} seed: the starting value that starts the train moving, a placeholder
 */

function reduce(array, test, seed) {
    
    let previousResult = seed;
    
    if (seed === undefined) {
    
        previousResult = array[0];
     
    for(let i = 1; i <= array.length - 1; i++) {
        
        previousResult = test(previousResult, array[i], i);
    } 
     
    } else {
      for(let i = 0; i <= array.length - 1; i++) {
         
        previousResult = test(previousResult, array[i], i);
        }   
    }
    
    return previousResult;
}

module.exports.reduce = reduce;

function extend(object1, ...arrOfObjects){
   for(let i = 0; i <= arrOfObjects.length - 1; i++) {
       for(let key in arrOfObjects[i]) {
           object1[key] = arrOfObjects[i][key];
       }
   } 
   return object1;
}

module.exports.extend = extend;