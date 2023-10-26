//alert("Hello, world"); //Output to windows alert box
document.getElementById("ScriptThisDIV").innerHTML = "Debug the innerHTML"; //Output to the DOM (Document Object Module) with the id="ScriptThisDIV"
console.log("Debug the console log"); //Output to the console (Open dev tools and look at the console)
 
// Pseudocode START
/*
START
    SET num1 to GET keyboard input
    SET pressed = GET calc key
    SET num2 to GET keyboard input
    SET result
    IF pressed = plus
        result = addNum (num1, num2)
    ELSE IF pressed = minus
        result = minNum (num1, num2)
    ELSE IF pressed = division
        result = divNum (num1, num2)
    ELSE IF pressed = multiply
        result = mulNum (num1, num2)
    ELSE IF pressed = squared
        result = sqdNum (num1, num2)
    ENDIF
    DISPLAY result
END


BEGIN SUBROUTINE addNum (a, b)
    return a + b
END

BEGIN SUBROUTINE minNum (a, b)
    return a - b
END

BEGIN SUBROUTINE divNum (a, b)
    return a (devided by) b
END

BEGIN SOUBROUTINE mulNum (a, b)
    return a x b
END

BEGIN SUBROUTINE sqdNum (a, b)
    return a x a
    OR
    return b x b
END
*/

let num1 = 0;
let num2 = 0;

let numInput1 = 0;
let numInput2 = 0;

//let numInput1 = parseInt(prompt("Choose choose a number"));
//let numInput2 = parseInt(prompt("Choose a second number"));

calculationMethods();

function calculationMethods () {
    let numMethod = prompt("choose a method of calculation");

    if (numMethod == "plus") {
        numInput1 = parseInt(prompt("Choose choose a number"));
        numInput2 = parseInt(prompt("Choose a second number"));
        console.log("user chose addition");
        alert("your answer is: " + (numInput1 + numInput2));
    } else if (numMethod == "minus") {
        numInput1 = parseInt(prompt("Choose choose a number"));
        numInput2 = parseInt(prompt("Choose a second number"));
        console.log("user chose subtraction");
        alert("your answer is: " + (numInput1 - numInput2));
    } else if (numMethod == "multiplication") {
        numInput1 = parseInt(prompt("Choose choose a number"));
        numInput2 = parseInt(prompt("Choose a second number"));
        console.log("user chose multiplication");
        alert("your answer is: " + (numInput1 * numInput2));
    } else if (numMethod == "division") {
        numInput1 = parseInt(prompt("Choose choose a number"));
        numInput2 = parseInt(prompt("Choose a second number"));
        console.log("user chose division");
        alert("your answer is: " + (numInput1 / numInput2));
    } else if (numMethod == "squared") {
        numInput1 = parseInt(prompt("Choose choose a number"));
        console.log("user chose squared");
        alert("your answer is: " + (numInput1 ** 2));
    } else if (numMethod !== "plus" || "minus" || "multiplication" || "division" || "squared") {
        alert("please choose addition (plus), subtraction (minus), multiplication, division or squared");
    }
    
    var intervalId = window.setInterval(function(){
        calculationMethods();
        numMethod = 0;
        numInput1 = 0;
        numInput2 = 0;
      }, 1000);
}