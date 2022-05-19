const fibonacci = function(num) {
    if (num < 0){
        return "OOPS";
    }else if(num <= 2){
        return 1;
    }else{
        let fibb;
        let prev1 = 1;
        prev2 = 1;
        for(let i =3;i <= num;i++){
            fibb = prev1+prev2;
            prev2 = prev1;
            prev1 = fibb;
        }
        return fibb;
    }
};

// Do not edit below this line
module.exports = fibonacci;
