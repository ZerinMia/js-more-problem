const numbers = [2, 5, 67, 34, 52, 87, 56, 56, 45, 75, 34, 2, 87, 98, 90, 45, 65];

/* function removeDuplicateNum(numbers) {
    const unique = [];
    for (const element of numbers) {
        console.log(element);
        if (unique.indexOf(element) == -1) {
            //unique e jodi element na take tokon
            unique.push(element);
        }
    }
    return unique;
}
const callName = removeDuplicateNum(numbers);
console.log(callName)
 */



//for array of string

const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul'];

function removeDuplicate(names) {
    const unique = [];
    for (const element of names) {
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }

    }
    return unique;
}
const callMyName = removeDuplicate(names);
console.log(callMyName);