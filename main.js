function average (arr){
let sum = 0;
for (let i =0; i< arr.length; i++) {
    sum +=arr[i];

}
const avg = sum/arr.length;
return avg;
}

const arr1=[1,3,4,3,5,5,3,4,5,3];
q1_answer=average(arr1);


function fact(num){
    let result=1;
    if (num===0 || num===1){
        result=1;
    }
    else{
        for(let i=2;i<=num;i++){
            result*=i;
        }
    }
    return result;
}

function combination(x,y){
    if(y > x){
        result=fact(y) / (fact(y-x)*fact(x));
    }
    if (x==y){
        x=x-1;
        result=fact(y)/(fact(y-x)*fact(x));
    }
    if (x > y){
        result=fact(x)/(fact(x-y)*fact(y))
    }
    return result;
}
const num1=3;
const num2=3;
q2_answer=combination(num1,num2);

