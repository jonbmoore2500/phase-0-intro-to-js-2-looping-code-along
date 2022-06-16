// Code your solutions in this file

const people = ['Guadalupe', 'Ollie', 'Aki'] 

function writeCards(peopleList, event) {
    let messageArray = []; // creates empty array to populate. outside for loop to avoid resetting as empty each iteration
    for (let i = 0; i < peopleList.length; i++) {
        messageArray.push(`Thank you, ${peopleList[i]}, for the wonderful ${event} gift!`);
        // pushes each message to array as it iterates over the length of the names list
    }
    return messageArray; // returns array with all messages pushed to it
}

// console.log(writeCards(['Guadalupe', 'Ollie', 'Aki'], 'Birthday'))

function countDown(startNum) {
    for (let i = startNum; i >= 0; i--) {
        console.log(i);
    }
}