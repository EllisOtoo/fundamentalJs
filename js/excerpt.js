let testButton = document.
querySelector('#testbutton'), divText =
document.querySelector('.divOne'), 
divAllHTML = divText.innerHTML;
;

testButton.addEventListener('click',
(event)=> {
    event.preventDefault()
    /* alert('Hello World'); */ // debugging purposes 
   /*  console.log(divText.innerHTML) */
   divText.classList.toggle('divOne');
   console.log(divText.classList)
   if(divText.class != 'divOne') {
        testButton.textContent = 'Show less'
   } else if(divText.class == 'divOne'){
       testButton.textContent = ''
   } 
} );

let paraText = document.querySelector('.innerText');
let paraTextInner = paraText.textContent;
console.log(typeof paraTextInner)
paraText.textContent = 'Hello '/* paraTextInner.substring(0, 10);
 */

/* function highlight(strings, ...values) {
    console.log(strings[0])
    // console.log(values, strings)
    // debugger;
} */
function highlight(strings, ...values) {
    let newString = '';
    strings.forEach((string, index)=>
        newString += string + (values[index] || '')
    )
    return newString;
}

let var1 = 'Scooby'
let var2 = 32
let var4 = ()=> 204

let toBeProcessedString  =  highlight`My dogs name is ${var1} and is ${var2} years old ${var4()} hello world`;
console.log(toBeProcessedString)

// console.log(toBeProcessedString)

var a2 = 'hello';
let var3 =  (undefined || Boolean('')) ;
let var5 = (Boolean(NaN) && '');
console.log(`value of var5 is ${var5}`);

// let var3 =  (false || fasle) ;
a2+=var3;

function filterSuckerMessage (strings, ...values) {
    let newStatement = '';
    strings.forEach((strngs, i)=> 
           newStatement+=strngs+(values[i]||'Stupid!')
        )
    return newStatement
}

function askQuestion(stringValues) {
    return stringValues+ ', and Your DOB'
}

let question = askQuestion`'Enter a Number'`, suckmessage = filterSuckerMessage`You are Just a Sucker! ${undefined} The game chnages `;
// document.write(suckmessage)
var x = console.log (parseInt(prompt(question)) || parseInt(prompt(question))|| alert(suckmessage));

console.log(`a2 is ${a2}`)
console.log(`The boolean value of Number 0`, Boolean(0))



let testArray = [1, 5,6, 7, 7];
var found = testArray.find((item)=> item > 99 || item > 6 );
console.log('The value of :: ', found)


console.log(typeof askQuestion)


/* let calc = function (num1, num2, calcType) {
    if(calcType == 'add') {
        console.log(num1+ num2)
    } else if(calcType == 'multiply') {
        console.log(num1 * num2)
    }
    return 'Calculated'
}
 */

/* calc(1, 4, 'multiply');
calc(1, 4, 'add');
 */


function testIfReturn(arg1) {
    if(''|| '') {
    return 'James';
 }
 return new Error('Check if Arguments')
}


console.log(testIfReturn('callJames'))


let returnFunc =  function(x, y) {
    alert(`About returning a function ${x} ${y}`)
    return function(a, b) {
        return a / b;
    }
}

let multiply =  function(x, y) {
    return x * y;
}

let addMore =  function(x, y) {
    return x + y;
}

let calc = function(num1, num2, callBack, callBack2){
    console.log(callBack2(num2, num1));
    return callBack(num1, num2)
}

console.log(calc(2, 5, multiply));
console.log(calc(10,5, addMore, returnFunc));



