const students = [
    { id: 1, name: 'John', scores: [85, 78, 92] },
    { id: 2, name: 'Sara', scores: [62, 70, 68] },
    { id: 3, name: 'Emma', scores: [90, 95, 94] },
    { id: 4, name: 'Tom', scores: [50, 48, 55] },
    ];

    let arr=[];
students.map((student)=>{
   let averageScore=student.scores.reduce((a,b)=>a+b);
    averageScore=averageScore/student.scores.length;

let status;
if(averageScore>=60){
status="Pass"
}
else{
    status="Fail"
}

    let output={
        id:student.id,
        name:student.name,
        averageScore:averageScore,
        status:status
    };
   
  arr.push(output);


})
console.log(arr);

function getTopScorer(students){
let c=students.reduce((a,b)=>a.averageScore>b.averageScore?a:b)
console.log("TopScorer: ",c);

} 

getTopScorer(arr);

function classPerformance(students){
let avg=students.reduce((a,b)=>a+b.averageScore,0);
avg=avg/students.length;

if(avg>=80){
    console.log("Class Performance is Excellent")
}else if(avg>=60 && avg<80){
    console.log("Class Performance is Good")
}else{
    console.log("Class Performance Needs to improvment")
}

}
classPerformance(arr)