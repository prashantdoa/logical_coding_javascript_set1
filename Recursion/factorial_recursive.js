// function for finding the factorial of a given integers n
function f(n){
    if(n == 1){
        return 1;
    }
    return n * f(n-1);
}

console.log(f(7));