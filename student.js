const student = {
    firstName: "Julie",
    lastName: "Lidahl",
    strengths: ["music", "art", "dance", "theater"],
    presence: true,
    exams: function avgMark() {
        var midterm = 95;
        var final = 88;
        var avg = (midterm + final) / 2;
        return avg;
    }
}

document.write("Student's name is " + student.firstName + student.lastName
    + ", Good in " + student.strengths + ", Present in all exams " + student.presence
    + ".  Student's average mark in exams is " + student.exams.avgMark);

