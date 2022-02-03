function largestElement(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.lengnth; i++) {
        const element = numbers[i];
        //joto gulo numbers er vitore joto gulo element ase ta paite cai taile numbers er index[i] ber korte hobe

        if (element > max) {
            max = element; //element boro hole max er man element hobe
        }

    }

}

function smallElement(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.lengnth; i++) {
        const element = numbers[i];
        if (element < min) {
            min = element;
        }
    }
}