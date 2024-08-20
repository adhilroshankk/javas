// reduce - evaluate all elemnts in an array and return a single value 

// reduceRight is used to get the frst elemt whereas reduce retursn only the last Element/

// var a=[1,2,6,5]

// sum

// console.log(a.reduce((a,b)=>a+b));

// max 

// console.log(a.reduce((a,b)=>a>b?a:b));


// console.log(a.reduce((a,b)=>a<b?a:b));


var emp=[
    [1,"arun","dev","kochi",67000,3],
    [2,"ajay","sales","kkd",54000,2],
    [3,"amal","ui/ux","pkd",39000,5],
    [4,"akash","q&a","mlprm",10000,1],
    [5,"alby","dev","kochi",51000,1],
    [6,"yadav","ui/ux","pkd",48000,2],
]


// find highst paid emp

// console.log(emp.reduce((a,b)=>a[4]>b[4]?a:b)[1]);


// find emp loctn with least expr 

console.log(emp.reduceRight((a,b)=>a[5]<b[5]?a:b)[1]);

// console.log(emp.map(i=>i[4]).reduce((a,b)=>a+b));
