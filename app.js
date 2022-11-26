// Changing Case


// Write a program that takes user input. Convert and show the input
// in capital letters.

// var word = prompt("Enter Any Word");
// var words = word.toUpperCase();
// console.log(words);


// Write a program that takes user input. Convert and show the
// input in title case.


// var word = prompt("Enter Any word");
// word.slice(1 , word.length)
// var wods = word.slice(0 , 1);
// var uppr = wods.toUpperCase(); 
// console.log(uppr + word);

// Write a program to take a user input about his favorite mobile
// phone model. Find and display the length of user input in your
// browser.
 

// var mobileModel = prompt("Enter Your Favourite Mobile Model");
// var indx = mobileModel.length;
// console.log(indx);


// Write a program to display the last character of a user input

// var word = prompt("Enter Value");
// word = word.slice(-1);
// console.log(word);


// Write a program to find the index of letter “n” in the word “Pakistani”
// and display the result in your browser.

// var Country = "pakistan";
// var indx =Country.indexOf("n");
// console.log(indx); 

// Write a program to take user input and store username in a
// variable. If the username contains any special symbol among (@ . ,
// !), prompt the user to enter a valid username.

// var name = prompt("Enter name");
// var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

// if( String.match(format) ){
//   console.log("No Special Character please");
// }else{
//   console.log();
// }

/*You have a string “The quick brown fox jumps over the lazy
dog”. Write a program to count number of occurrences of word “the”
in given string.*/

// var text = "The quick brown fox jumps over the lazy dog";
// var word = text.length;

// console.log(word);

/*Write a program to find the character at 3 rd index in the word
“Pakistani” and display the result in your browser.*/

// var Country = "pakistan";
// var words =  Object.valueOf(Country[2]).toString();
// console.log(words);

/*Write a program to replace the “Hyder” to “Islam” in the word
“Hyderabad” and display the result in your browser.*/

// var name1 = "hyderabad";
// var result = name1.replace("hyder", "islam");
// console.log(result);

/*Write a program to replace all occurrences of “and” in the string
with “&” and display the result in your browser.
var message = “Ali and Sami are best friends. They play cricket and
football together.”;*/


// var massage = "Ali and Sami are best friends. They play cricket and football together";
// var result = massage.replace(/and/g , "&");
// console.log(result);


// var weight1 = prompt("Enter Weight");
// var weight2 = prompt("Enter Weight");
// var weight3 = prompt("Enter Weight");




// console.log(parseInt(weight1));
// console.log(typeof(weight1));
// console.log(parseInt(weight2));
// console.log(typeof(weight2));
// console.log(parseInt(weight3));
// console.log(typeof(weight3));

// var strng = "12434";
// console.log(toString(strng));
// console.log(typeof(strng));

// var percentage = 30 / 45 * 100; 

// var fxd = percentage.toFixed(2);
// console.log(fxd);

// DATE METHODS//

var dt = new Date();
console.log(dt);
// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var a = month[dt.getMonth(11)];
// console.log(a);

// var dt1 = dt.getDay();
// console.log(dt1);

    // var d = ["sunday","saturday", "monday"];
    // if(d == "sunday" || d == "saturday"){
    //     alert("“It’s Fun day");
    // }else{
    //     alert("Weekday");
    // }

    // var d = prompt("Enter day");
    // if(d <16  ){
    //     alert("First Fifteen days of the Month")
    // }
    // else {
    //     alert("last Fifteen days of the Month")
    // }
// var dt1 = new Date("1-1-2015");
// var s = dt1.getSeconds() - dt.getSeconds();
// console.log(dt1);
// console.log(s);