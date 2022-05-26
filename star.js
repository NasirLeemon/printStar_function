
function printStar (num) {
    for (let i = 1; i < num; i ++){
        if ( i % 5 === 0) {
            console.log('***')
        } else {
            console.log(i);
        }
    }
}

printStar(20);