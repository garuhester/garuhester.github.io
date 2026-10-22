示例1：
```
class Student {

	static type = "person";
	name = "";

	constructor(name) {
		console.log("start")
		this.name = name;
	}

	show() {
		console.log("show")
	}
}

var stu = new Student("hester");
console.log(stu.name)
console.log(Student.type)
stu.show();
```

示例2：
```
var Student = (function () {
    function Student(name) {
    	console.log("start")
        this.name = name;
    }
    Student.type = "person";
    Student.prototype.show = function () {
        console.log("show");
    };
    return Student;
}());

var stu = new Student("hester");
console.log(stu.name)
console.log(Student.type)
stu.show();
```
