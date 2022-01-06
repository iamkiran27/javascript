function average(n, len){
    return n / len;
}


function calculate(callback, num)
{
    
    let sum = num.reduce((res, val) => {
        console.log(val)
        return res + val ;
    })
    console.log(sum);
   return callback(sum, num.length);
}


let x = calculate(average, [1,2,3,4,5])
console.log("Average is : ", x);





const x = [2,3,4,52,1,33]

console.log("Array before sort : ", x)
function compare(a, b)
{
    return a - b;
}

x.sort(compare)

console.log("Sorted array : ",x)