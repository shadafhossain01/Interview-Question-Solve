const employees = [
    { id: 1, name: 'Alice', tasksCompleted: 50, rating: 4.8 },
    { id: 2, name: 'Bob', tasksCompleted: 30, rating: 3.9 },
    { id: 3, name: 'Charlie', tasksCompleted: 70, rating: 4.5 },
    { id: 4, name: 'Diana', tasksCompleted: 20, rating: 3.2 },
    ];



 employees.map((user)=>{
   if(user.tasksCompleted>=40 && user.rating>=4.0){
    let bonus=user.tasksCompleted*10;
 user.bonus=bonus;


let output={};
output.id=user.id;
output.tasksCompleted=user.tasksCompleted;
output.bonus=user.bonus;

console.log(output);
   }
    })

//     ********************************
//       how to Two objects in one Array 
// ********************************** 

let avgRating=0;
for ( let employe of employees ){
avgRating+=employe.rating;

}
avgRating=avgRating/employees.length;
console.log(`average rating of all employees: ${avgRating}`)

if(avgRating>=4.5){
   console.log("company’s overall performance is excellent")
}else if(avgRating>=4.0){
   console.log("company’s overall performance is Good")
}else{
   console.log("company’s overall performance is Needs to improvement")
}
