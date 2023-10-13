console.log('hello world 2')
//day 2:continue with control flow
//switch case statement
const day = new Date().getDay()
console.log(day)

const literalDay = new Date().toString();
console.log(literalDay, typeof literalDay)

switch(day){
    case 0:
        console.log('sunday')
        break;
    case 1:
        console.log('monday')
        break
    case 2:
        console.log('tuesday')
        break
    default:
        console.log('some other day')
        break
}


switch(literalDay.split(' ')[0]){
    case 0:
        console.log('sunday')
      
    case 1:
        console.log('monday')
        break
    case 2:
        console.log('tuesday')
        break
    default:
        console.log('some  other day')
        break
}

// js object(aka python dictionaries)
const person = {
    name: 'shoha',
    age: 9001,
    teams: [
        'dodgers',
        'lakers'
    ],
    wallet: {
        visa: 100,
        amex: 1000,
        bofa:20
    }
}

//access data in obj 
console.log(person['name']) //bracker noation
console.log(person.name) //dot noation

// get keys / values / pairs
//person.keys() this does not work
//.keys is a static method
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
