const users = [
    { id: 1, name: "Alice", age: 25, isActive: true, scores: [85, 92, 88] },
    { id: 2, name: "Bob", age: 30, isActive: false, scores: [70, 75,80] },
    { id: 3, name: "Charlie", age: 35, isActive: true, scores: [95,90, 93] },
    { id: 4, name: "Diana", age: 28, isActive: true, scores: [60, 65,70] },
    { id: 5, name: "Eve", age: 40, isActive: false, scores: [80, 85,88] }
    ];

    let activeUsers=users.filter((user)=>user.isActive==true);

activeUsers.map((user)=>{
    let total=user.scores.reduce((a,b)=>a+b,0);
let avg=Math.floor(total/user.scores.length);
user.averageScore=avg
})

let highestScore=activeUsers.reduce((a,b)=>a.averageScore>b.averageScore?a:b);

let under30=users.filter((user)=>user.age<30);
let above30=users.filter((user)=>user.age>=30)



function processUsers(){
   return {
        activeUsers: activeUsers,
        topPerformer: highestScore,
        ageGroups:{
        under30:under30,
        over30:above30,
        }
        }
        
}

console.log(processUsers())