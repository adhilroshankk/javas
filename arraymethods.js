// var a=[1,2,3,4,5,6,7,8]


// sort-sorted Array
// Map()-- create a new array of elements same as inputarray

// var a=[1,2,3,4,5,6]
// console.log(a.map(i=>i**2));
// square=[1,4,9]


// filter()
// console.log(a.filter(i=>i%2==0));
// a=[1,2,3,4,5,6]
// even=[2,4,6]


// find()
// reduce()
// reduceRight()
// forEach()
// some()
// flat()
// includes()
// reverse ()

// map-------------------------------------
// console.log(a.map(i=>i>5?i+1:i<5?i-1:i));

// var stu=["arun","amal","neha","vasu","ajay"]

// console.log(stu.filter(i=>i[0]=="a"));

var emp=[
    [1,"arun","dev","kochi",67000,3],
    [2,"ajay","sales","kkd",54000,2],
    [3,"amal","ui/ux","pkd",39000,5],
    [4,"akash","q&a","mlprm",10000,1],
    [5,"alby","dev","kochi",51000,3],
    [6,"yadav","ui/ux","pkd",48000,2],
]

                                              

      
// console.log(emp.find(i=>i[1]=        ="akash")[4]);

console.log(emp.find(i=>i[0]==4)[1]);                                               



// console.log(emp.filter(i=>i[4]=="pkd").filter);

// console.log(emp.filter(i=>i[5]>2)[1][1]);

//[id,name,price,stock]
products=[                                                                                                                                                                                                                                          
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]

console.log(products.find(i=>i[1]=="oreo")[2]);

//1. display all product name

// console.log("display all product name");
// console.log(products.map(i=>i[1]));


//2. display product whose price < Rs.50

// console.log("display product whose price < Rs.50");
// console.log(products.filter(i=>i[2]<50).map(i=>i[1]));


// 3. print price of oreo

// console.log("print price of oreo");
// console.log(products.filter(i=>i[1]=="oreo").map(i=>i[2]));


//4. print costly product name

// console.log("print costly product name");
// console.log(products.sort((a,b)=>b[2]-a[2])[0][1]);


//5. display out of stock product

// console.log("display out of stock product");
// console.log(products.filter(i=>i[3]==0).map(i=>i[1]));

//6. sort products based on stock in decsending order
// console.log('sort products based on stock in decsending order');
// console.log(products.sort((i1,i2)=>i2[3]-i1[3]).map(i=>i[1]));

//7. print product having maximum available stock


// console.log('print product having maximum available stock');
// console.log(products.sort((i1,i2)=>i2[3]-i1[3])[0][1]);