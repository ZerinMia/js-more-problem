/* 
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
 */

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perchair = 3;
    const pertable = 10;
    const perbed = 50;
    const perchairQuantity = chairQuantity * perchair;
    const pertableQuantity = tableQuantity * pertable;
    const perbedQuantity = bedQuantity * perbed;
    const totalwood = perchairQuantity + pertableQuantity + perbedQuantity;
    return totalwood;
}

const total = woodCalculator(1, 1, 1);
console.log(total)