var a=[1,2,3,4,5,6]
a.sort((a,b)=>a-b)
var count=0
var sum=9
var low=0
var upp=a.length-1

while(low<upp){
    count++
    var newSum=a[low]+a[upp]
    if(sum==newSum){
        console.log(a[low],a[upp]);
        low++
upp--
    }
    else if(newSum<sum){
        low++
    }
    else if(newSum>sum){
    upp--
    }
}
console.log(count);