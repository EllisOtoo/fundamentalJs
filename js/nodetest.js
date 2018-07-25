
 var nextTestfuncExpr =  function() {
    //  alert('This is a fucntion expression privates to nextText variable')
    return 'We came out through though'
    }


    
console.log(testReturn() && nextTestfuncExpr());
// console.log(testReturn() && Boolean(nextTestfuncExpr()));
//  Use Boolean() Methods to return bool evaluation >> True/ false




{
    let blockedVar = 99;
    // alert(blockedVar);
}

/* (function() {
    console.log('Hello James')
})();
 */




 function testReturn  () {
    //  alert(`Did this functions alert comes first???`)
     return 'Hello People'
 }


let noValue= '';
noValue += 2;

console.log(typeof noValue, noValue);
console.log(typeof parseInt (noValue), parseInt (noValue));

let notDefined;

let _2 = 'i'; console.log(_2)
console.log(notDefined += 2);
console.log(typeof notDefined);

let number = 2;
let str =  '2';
console.log('Value of number + string: ', typeof(number + str));

let func =  () => 'Helll World '
let sampleArray =  [1, 5, 56,88];



console.log(typeof sampleArray)
console.log('Type of Func variable: ', typeof func)

let a =  '7';
let b =  6.9;
console.log(Math.round(parseFloat(b))); console.log(parseInt(a, 8  )); 
console.log(parseInt(a)); console.log(typeof (parseInt('b')));

console.log(!isNaN(testReturn() && nextTestfuncExpr())); 
// isNaN means is-not-a-number, a function that 
// tests the value to and returns true if it's not a number
console.log(!isNaN(77));


let unaryValue = 18 < 1 ? allTrue(): 'Condition evaluated to false';

console.log(unaryValue);


function allTrue() {
    alert(`Conditional Expression evaluated to True: 18 is greater than 1   `)
    return 'True'
}

a = 4;
a -= 1; 

let xe = a--;  // 

xe = [1, 3, 43];
console.log(`Array values: `, xe[xe.length - 2]);

let x = !isNaN(true) ? 'hello': ( false ? 'Returns This if True': 'Returns this if false'); 
// Changed order of operations || returns :: 
// let x = isNaN(true) ? 'hello': 100  ? 'Returns This if True': 'Returns this if false';
x = `Its Sunny is in this Scope`;


console.log('The Value of X  is: ', x);

if ( /* Boolean(x) == true  */ '') {
    alert('X evaluates to True');
    let x = 'This value of X is local to this If Block';
    console.log(x)
} else {
    console.log(`condition value is falsy`)
}


// console.log(x)
// console.log(a);
// Falsy Values  = '' || 0 || false || undefined || NaN || 
// Truthy value = {}, [], string, number, true

function sayFortyFive () {
    return 45
}

function sayfirst() {
    return 55;
}
let valueOfLargerExpression = sayFortyFive() + ( '' || (console.log(sayfirst())));
console.log(valueOfLargerExpression)

console.log( true || (sayfirst()));

document.getElementById('divTwo').style.position = 'absolute';
document.getElementById('divTwo').style.top = '10px';
document.getElementById('divTwo').style.left = '10px';
document.getElementById('divTwo').style.zIndex = '-1';
document.getElementById('divTwo').style.height = '400px';


function returnFunc() {
    return function() {
        let a =  22;
        console.log('Hello, Im a returned fucntion')
    }
}

// console.log(typeof returnFunc()());
returnFunc()();


function one() {
    return console.log('one')
}

let value = one();

// function Declarartion ::
function two() {
    return function() {
        return 'Im a returned FUnction Expression'
    }
} // function Two :: fucntion declaration return data type of function expression 

let myFucntion = two();
console.log(myFucntion());
  
let name = 'ferr'

let car  = {
    name: 'ferrari', 
    year: 1992, 
    year: 1990,
    model: 'range rover',
    callname : function (){
        // let name = 'Lambo'
        return ()=>this.name;
    },
    printYear: function() {
        return this.year;
    }
}


let callName = car.callname()();
console.log('test Returned Funct name: ', callName)         ;

let carYear = car.printYear(); // this of printyear method only work when called as a member of an object
// and outside the context ofthe function which points to teh global object.
// var year = 1888;
console.log('test: ', carYear);


function testScoping(arg1)  {
    if(arg1){
        let james = 'Hello james'
        var iffunc =  function() {
            janeName ='Janes Morrison'
        }
        iffunc()
    }
    james= 'GoodBye James';
    let functionObject = {
        name: james
    }
    return functionObject.name;
}


console.log(testScoping('true'));
console.log(james);
console.log(janeName);
// console.log(james)



var globeTestvariable =  'Ellis is here'; // Attached to global object
let globeTestvariable2 =  'Ellis is here'; // Not attached to global object 
console.log('Gloablew variable test: ',window.globeTestvariable);


let counter =(
    function () {
        // alert('The Iffy Fucntion has been executed');
        count = 0;
        function print(message) {
            console.log(message + '----' + this.value)
        };
        function localTest() {
            alert('testing local functions')
        };
        return {
            // value:count,  // closure
            value: count,
            get: function() {
                this.value += 1;
                console.log(this.value);
                return count;
            },
            arrow : () => this.value,
            set: function(value) {
                count =  value;
                return count;
            },
            increment: function() {
                // count += 1;
                value += 1;
                print('After Increment');
            },
            reset: function() {
                print('Before reset');
                count = 0;
                print('After reset');
            },
            testLocal: localTest    
        }
    }
)();



// value  = 12;
counter.get()
console.log(counter.set(99))
console.log(counter.arrow())
/* counter.increment();
counter.increment();
counter.increment(); */

/* counter.set(88);
console.log(counter.get()) */

// counter.reset();

// print('Hello James')


// iffySample.class = 'A+';

// console.log(iffySample)
// iffySample.title= 'Foudations of the code'; 
// Object.freeze(iffySample);
// console.log('Object after freeze: ', iffySample);
// console.log(iffySample());

var myModule = (function() {
    'use strict';
 
    var _privateProperty = 'Hello World';
    var publicProperty = 'I am a public property';
  
    function _privateMethod() {
        console.log(_privateProperty);
    }
  
  	function publicMethod() {
    	_privateMethod();
  	}
     
    return {
        publicMethod: publicMethod,
        publicProperty: publicProperty
    };
}());
  
/* myModule.publicMethod = function() {
    console.log('This Module has been changed')
} */

myModule.publicMethod();

console.log('myModule')