let readmore= document.getElementById('readmore');
let secondP =  document.getElementById('secondPBut')

// The P element:
let existingText  = document.getElementById('theCdeBroke');
let secondPText  = document.getElementById('secondP');


// The P textconten::
let existTextContent=  existingText.textContent;
let secondPContent =  secondPText.textContent;

readmore.addEventListener('click', ()=>{ 
    existingText.innerHTML = existTextContent + 'This is new Text to add after click This is new Text to add after click';
    // existingText.style.width = '50%';
    }
)

let secondPRawText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
Neque ullam molestiae aliquam. Doloremque qui ipsa, at cumque quae voluptates 
omnis enim cum maiores amet veniam, illo inventore praesentium quo debitis!`

secondPBut.addEventListener('click', ()=> secondPText.innerHTML = secondPContent + secondPRawText )

let jonesValues  = [
    {name: 'Ellis',
    class: 45
    },
    {
     name: `Charles`,
     class: 45
    },
    [1, 3, 55],
    {
        name: 'killer AK',
        gunType : 'AKs'
    }
    // We would eb popping this
]

let objectArray = [{name:'Josh'}]
let mikeFriend = objectArray.pop();

/*  console.log(mikeFriend.name)
console.log(jonesValues.pop().name) */

    

//    let elderJones = [...jonesValues.pop(), 'fifty Five'];
elderJones = [    
     {
        name: 'killer AK',
        gunType : 'AKs'
    },
    'Fifty Five'
    ]


console.log(elderJones[0].gunType + 47 ) // 1

const divFinal = document.querySelector('#final');
const numberList = [1, 4, 5]

divFinal.style.backgroundColor = `blue`
divFinal.style.padding = `20px 0`
/*  divFinal.innerHTML= `<ul>
    <li>Just Testing</li><li>World</li><li>Hello</li>
</ul>` */

 divFinal.innerHTML= `
    <ul>
        ${numberList.map((numbers, index)=> `<li>${numbers + 1} @ ${index+1} Pos</li>`).join('')}
    </ul>
`


function helloWord(name, ...allArgs) {
    let newName =  name;
    console.log('New Name Arg', newName)
    return allArgs.shift()
}

console.log(`shifted value/or firstValue from remaining array values is ${helloWord(1, 2, 3, 555)}`)

let newWord = `${helloWord(1, 23)} and makes the world a better place to live`
console.log(newWord)

function makeObject() {
    return {
        x: 44,
        y: 22,
        x : 77
    }
}


let tempObject = makeObject(), {x:newlyAssignedX}= tempObject;

console.log(newlyAssignedX);

let readmoreButton =  document.getElementById('readmoreButton');
readmore.addEventListener('click', 
    ()=>readmoreButton.classList.toggle('readmore')
)


