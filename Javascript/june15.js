            // TERNARY OPERATORS;

  // EXPRESSIONAL STATEMENT;

// let x= 100;
// let result= x >= 150 ? "Pass" : "Fail";
// console.log(typeof result);
// console.log(result);
// console.log(typeof x);


// let x=100;
// let y=400;
// let max=x>y ? x:y; // if the value of x is greater than the value of y then(?) print "x" otherwise print "y".
// console.log(max);

// let x= 1000;
// let y=900;
// let z=5000;
// // let result=x>y ? (x>z ? x : z) : (y>z ? y : z);
// let result= x>y && x>z ? x: (y>z ? y:z);
// console.log(result);

            // COMAPERISION OPERATOR;
        
// let x=10 === "10" //False "===" ->  "strick equality operator means they also see the data type."
// let y=10 == "10" //True "===" ->  "loose equality operator means they doesn't see the data type."
// console.log(x);
// console.log(y);


              // LOGICAL OPERATOR;
             ///   && OPERATOR    \\\
          
// expre1-falsy && whatever=Return expre1-falsy (if expression1 is not ture then they doesn't read the value of second expression whatever is it);
// let ans=10>50 && "karachi";
// console.log(ans); // false

// // expre1-truthy && expre2=return expre2 (If expression1 is true then return the value of second expression);
// let c= 20-10 && "Islamabad"
// console.log(c); // Islamabad

// let error=true;
// let error1=0;
// error && console.log("Erorr is loading");
// error1 && console.log("return expression if first value is false"); // 0

// let b=0 && "karachi";
// console.log(b) // return 0 means return the expression not bollean

// let a= 10>5 && "lahore"
// console.log(a) // lahore


            /// OR OPERATOR (||) \\\
// expre1-truthy || expre2 =Return expre1 (if expression1 is true then they return expression1 they doesn't read the vale of expression2);
// let x=20>10 || 10>20;
// console.log(x); //true

// expre1-falsy || expre2 = Return expre2 (if expression1 is falsy value then they return the value of expression2);

// let y=10>20 || 20>10;
// console.log(x); // true

// let z=10>20 || 50>100;
// console.log(z); // False



              /// NOT OPERATOR (!)  \\\
// Not operator only evaluate the value experession like if expression the is true they return false & if the value is falsy they return true;
// i.e;
// let x=! (10>20)
// console.log(x) //Return true;

// let y= ! (100<50);
// console.log(y) // Return true 

// let z= ! ("abc");
// console.log(z) // Return False

// let ans=! undefined; 
// console.log(ans) // true

// let a=! console.log(!"abd") // console = undefined => first they evaluate the value of console which is in paranthesis & it's ture so reurn false then evaluate console.log
//                             // which is equal to undefined \\
// console.log(a) //false then true 


