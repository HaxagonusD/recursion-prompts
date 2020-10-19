/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
    return n < 0 ? null : n === 0 ? 1 : factorial(n-1) *n
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
    //[1,2,3,4,5,6] ->>> [1] + [2] + [3] + [4] +[5] + [6] + 0
    //                     ... sum([1,2,3])+  sum([1,2,3,4,])+ sum([1,2,3,4,5])      
    // return something + function(the rest of the things )
    // return [6] + sum([1,2,3,4,5])
    //return [6] + [5] + sum([1,2,3,4])
    //return [6] + [5] + [4] + sum([1,2,3])
    //return [6] + [5] + [4] + [3] + Sum([1,2]) .....
    //...
    // if(array.length === 0){
    //     return 0;
    // }
    // //recursive call
    // return array[-1] + sum(array.slice(0, array.length -1))

   const copyArray = [...array]; 
    //array.forEach(item=> copyArray.push(item))
   

    return copyArray.length === 0 ? 0 : copyArray.pop() + sum(copyArray) // [1,2,3,4,5]
    
    
   
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
//          [[4], 5]
//          []
//          ?????????
var arraySum = function(array) {
    // return someInteger + next recursive call(             ) 
    //          the first number                    the rest of the elements 
    if(array.length === 0){
        return 0;
    }
    if(!Array.isArray(array[0])){
        return array[0] + arraySum(array.slice(1))
        //     number +  the rest
    } else {
        return arraySum(array.flat())
    }
  /**
   * 1(){
   *    2(){
   *        3(){}
   *    //blah 
   * //blah 
{   }   * 
   *    }
        3()
   * 
   * }
   * 1()
   * 3()
   * 
   * in/bottom:        :top/ out
   * 
   * 
   * motor = []
   * car = []
   * 
   * return 
   */
    
};

// 4. Check if a number is even.
var isEven = function(n) {
   
   let a = Math.abs(n)
    if(a === 0 ) {
        return true;
    }else if(a === 1 ){
        return false;
    } else {
        return isEven(a-2)
    }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45 
// sumBelow(7); // 21
var sumBelow = function(n) {
    return n > 0 ? 
    (n === 0 ?  0: (n-1) + sumBelow(n-1) ) : 
    (n === 0 ? 0 : (n+1) + sumBelow(n+1))



    // -n    0    + n

    //    -infinity                  x     y         +infinity
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
let range = function(x, y) {
    let  inter = true;
    
    // if x is greater than y switch x and y 
    if (x > y) {
      let temp = x;
      x = y;
      y = temp;
      inter = false;
    }
    //return Function() + function() +  function() ... + function()  + someValue
    //  x,y 
    //happens only once at the end of all the recursive calls
    if (x === y) return [];
    if (x+1 === y) return [];
    let array = range(x, y-1); // //<<<<<<----- recursive call (create the call stack)
    // -----------------------
    // (clean up) vvv happens at the end of every recursive call
    array.push(y-1);
    return inter ? array : array.reverse();

    /*               x  y
        [2,3,4,5,6,7,8] - range(2,9){
            array = range(2,8)
            -------------
            array.push(8)
            return [2,3,4,5,6,7,8]
        }
        [2,3,4,5,6,7] - range(2, 8) {
            array = range(2,7)
            ----------------
            array.push(7)
            return [2,3,4,5,6,7]
        }
        ...
      [2]           --range(2,3){
            array = range(2,2) //[]
            -=--------------
            array.push(2)
            return [2]
        } 
        [] --- range(2,2){
            return []
        }
     */
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    // The point of recursion is not to think about evaluating functions
    //as they go forward but as they are resolved backwards
    // 4,2 = 4**2 = 4x4 = 16 
    //4,-2 = 4**-2 = 1/4 * 1/4 = 1/(4*4) = (1/4)/4 = 1/16 = .0625
    // what needs to run in the begining 
    if(exp === 0 ) return 1;
    //What needs be recusive 
    // let endNumber = exponent(base, exp > 0 ? exp-1 : exp+1)
    // //what needs to run at the end 
    // endNumber *=  exp > 0 ? base: 1/base;
    
    if(exp > 0){
        return base* exponent(base, exp-1)
    }
    if(exp < 0 ){        
        return exponent(base, exp+1) /base; 
    }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if(n < 1) return false; 
    if(n === 1) return true 
    return powerOfTwo(n/2)
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
    if(string === "") return ""
    return string.charAt(string.length -1) + reverse(string.slice(0,string.length -1))
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    const stringS = string.replace(/\W/g, "").toLowerCase() ;
    if(stringS.length === 0 ){
        return true;
    } 
    if(stringS.length === 1){
        return true;
    }
    
    if(stringS.charAt(0) === stringS.charAt(stringS.length -1)){
        return palindrome(stringS.slice(1, stringS.length -1))
    }
    return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    // -79 % 82 // -79
    // -4 % 2 // 0
    // -255 %-254 // -1
    var result = 0;
if (x === 0 && y === 0) {
    return  NaN;
} else if (x < y) {
    return x;
} else {
    result = modulo(x - y, y);
}
return result;
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.

var multiply = function(x, y) {
    
 
    if (x == 0 || y == 0) {
        return 0;
    } else if( y < 0 ) {
        return - x + multiply(x, y + 1);
    } else {
        return x + multiply(x, y - 1);
    }
    
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
   
    if(y === 0){
        return 0;
    }
    if(x < y){
        return 0;
    } else {
        return (x-y) - divide( x - y, y)
    }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {

if(x < 0 || y < 0){
    return null 
}
if(y != 0) {
    return gcd(y , x % y)

} else  {
    return x
}
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    if(str1.length === 0 && str2.length === 0 ) return true
    if(str1.length === 0 && str2.length !== 0 ) return false 
    if(str1.length !== 0 && str2.length === 0 ) return false 
      //if they are equal return "this" if not return false 
  
    if(str1.charAt(0) !== str2.charAt(0)){
        return false;
    }
  
    return compareStr(str1.slice(1, str1.length), str2.slice(1, str2.length))
    
    
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
    if(str.length === 0 ) return []
    let temp = []; 
    temp.push(str.charAt(0))
    return temp.concat(createArray(str.slice(1, str.length )))
    
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
    if(array.length === 0) return [];
    let temp = [];
    temp.push(array[array.length -1]);
    return temp.concat(reverseArr(array.slice(0, array.length -1)))
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    if(length === 0) return []
    let temp = [];
    temp.push(value);
    return temp.concat(buildList(value, length-1))
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
