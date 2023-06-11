const student = {
    firstName: "Julie",
    lastName: "Lidahl",
    strengths: ["music", "art", "dance", "theater"],
    presence: true,
    exams: function () {
        var midterm = 95;
        var final = 70;
        var avg = (midterm + final) / 2;
        return avg;
    }
}

var student_innfo = document.getElementById("student_info");
student_innfo.innerHTML = "Student's name is: " + student.firstName + student.lastName
    + ", Good in: " + student.strengths + ", Present in all exams: " + student.presence
    + ". To see the average mark of this student, press that button";

var btn = document.getElementById("show_mark").addEventListener("click", displayAvg);

function displayAvg() {
    var average = document.getElementById("avg");
    // average.innerHTML = student.exams();
    alert("The average mark achieved by this student is " + student.exams());
}





