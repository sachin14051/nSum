let cl = console.log;

function sum(n){
    return n*(n+1) / 2
}
cl(sum(10));

function add(n){
    let  total = 0;
    for(let i = 1; i<=n; i++){
        total += i
    }
    return total 
}

cl(add(10))