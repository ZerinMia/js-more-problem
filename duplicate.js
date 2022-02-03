const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul'];

function removeDuplicate(names) {
    const unique = [];
    // for (let i = 0; i < names.length; i++) {
    //     const element = names[i];
    //     // console.log(element);
    // }
    //option
    for (const element of names) {
        console.log(element)
        if (unique.indexOf(element) == -1) { //unique arry te element er suci na takle -1 hole tumi array k push kore dao
            unique.push(element);
        }
    }
    return unique;
}
const uniquname = removeDuplicate(names);
console.log(uniquname);