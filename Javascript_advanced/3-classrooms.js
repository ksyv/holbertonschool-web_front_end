function creatClassRoom (numbersOfStudents) {
    function studentSeat (seat) {
        return function(){
            return seat
        }
    }
    var students = [];
    for (var i = 0; i < numbersOfStudents; i++)
        students.push(studentSeat (i + 1));
    return students;
}

var classRoom = creatClassRoom(10)
