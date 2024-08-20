// var nums=[1,2,3,"hello" , true]
// console.log(nums);

// hettrogeneous data collection

// linear data structure
// console.log(nums[3]);

// ------------------

// for(let i of nums){
//     console.log(i);
// }

// write fn to find first last and middle

// findElement=a=>{
//     console.log("frst elemnt",a[0]);
//     console.log("last",a[a.length-1]);
//     console.log("middle",a[Math.floor((a.length-1)/2)]);
// }

// findElement([1,2,3,4,5])

// ------------------------------------------------------------

// var a=[]
// a.push(1,2,3,4)
// console.log(a);

// push

// -----------------------------------------------------

// var a=[1,3,6,9,8,2]

// function squareArray(a){
//     var square=[]
//     for(let i of a){
//         square.push(i**2)
//     }
//     console.log(square);
// }

// squareArray([1,5,3,4,6])

// -------------------------------------------------------

// eventOddArray=a=>{
//     var even=[]
//     var odd=[]
//     for(let i of a){
//         i%2==0?even.push(i):odd.push(i)
//     }
//     console.log(even);
//     console.log(odd);
// }
// eventOddArray([1,2,3,4,5,6,7,8,9])

// --------------------------------------------------------

// var expense=[23000,12000,45000,22000]

// var total=0
// for (let i of expense){
//     total=total+i
// }
// console.log(total);


// var max=0
// for (let i of expense){
//     if(i>max){
//         max=i
//     }
    
// }
// console.log(max);

// var min=23000
// for (let i of expense){
//     if(i<min){
//         min=i
//     }
    
// }
// console.log(min);

// ----------------------------------------------------------

// var nums=[[12,2],[8,45],[7,3],[90,32]]
// var inside=0
// for(let i of nums){
//    for(j of i){
//     if(j>10){
//         console.log(j);
//     }
//    }
// }


// var employees=[
//     [1,"arun","dev","kochi",67000,3],
//     [2,"ajay","sales","kkd",54000,2],
//     [3,"amal","ui/ux","pkd",39000,5],
//     [4,"akash","q&a","mlprm",10000,1],
//     [5,"alby","dev","kochi",51000,3],
//     [6,"yadav","ui/ux","pkd",48000,2],
// ]

// console.log(employees);

// display all emp name

// for(let i of employees){
    
//         console.log(i[1]);
    
// }

// find total No of employees

// No of devs 
// find tester frmclt
// salry of neha
// for(let i of employees){
//     if(i[1]="neha")
//     console.log(i[4]);

// }
// display details of employee with id 4
//  emp salry who hv more thn 2yr


// ---------------------------------------------------------


// var a=[1,4,2,3,5]
// console.log(a.sort((a,b)=>a-b));
// console.log(a.sort((a,b)=>b-a));

// console.log(a);

// for nested array
// log(employees.sort((a,b)b[0]-a[0]))



// var emp=[
//     [1,"arun","dev","kochi",67000,3],
//     [2,"ajay","sales","kkd",54000,2],
//     [3,"amal","ui/ux","pkd",39000,5],
//     [4,"akash","q&a","mlprm",10000,1],
//     [5,"alby","dev","kochi",51000,3],
//     [6,"yadav","ui/ux","pkd",48000,2],
// ]

// highest salary


// console.log(emp.sort((a,b)=>b[4]-a[4])[0][1]);

// id of who has less expr

// console.log(emp.sort((a,b)=>a[5]-b[5])[0][0]);

