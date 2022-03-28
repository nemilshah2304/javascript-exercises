const removeFromArray = function(array, ...num) {
    let elemToRemove;
    for(let i=0;i<num.length;i++){
        elemToRemove = num[i];
        for(let j=0;j<array.length;j++){
            if(array[j] === elemToRemove){
                array.splice(j,1);
                break;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
