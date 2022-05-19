const palindromes = function (str) {
    let new_str = "";
    for(let j = 0;j< str.length;j++){
        if(((str[j] >= "a" && str[j] <= "z") || (str[j] >= "A" && str[j] <= "Z"))){
            new_str += str[j].toLowerCase();
        }
    }
    let len =new_str.length;
    for(let i=0;i< (len)/2;i++){
        if(new_str[i] != new_str[len-1-i]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
