const students = [
    { id: 1, name: 'John', scores: [85, 78, 92] },
    { id: 2, name: 'Sara', scores: [62, 70, 68] },
    { id: 3, name: 'Emma', scores: [90, 95, 94] },
    { id: 4, name: 'Tom', scores: [50, 48, 55] },
    ];

students.map((student)=>{

    let total=student.scores.reduce((a,b)=>a+b,0)
    let avg=total/student.scores.length;

let newObj={};
newObj.id=student.id;
newObj.name=student.name;
newObj.averageScore=avg;

let status;
if(avg >= 60){
    status="Pass"
}
else{
    status="Fail"
}
newObj.status=status


console.log(newObj)

})

function getTopScorer(students){
    students.map((student)=>{
        let total=student.scores.reduce((a,b)=>a+b,0)
    let avg=total/student.scores.length;
    student.averageScore=avg;

    })

let highest=students.reduce((a,b)=>{
    return a.averageScore>b.averageScore?a:b
})

console.log("highest", highest)

    
}

getTopScorer(students)


function classPerformance(students){

    let performance=0;

    for(let student of students){
        performance+=student.averageScore/students.length;

    }
    console.log(performance)
 if(performance>=80){
    console.log("Excellent");
    
 }
 else if(performance>=60 && performance<80){
    console.log( "Good");
    
 }
 else{
    console.log( "Needs to Improvement");
 }


}

classPerformance(students)