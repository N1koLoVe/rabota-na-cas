function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  this.getFullName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
  };
}

class Student extends Person {
  constructor(firstName, lastName, age, academyName, studentID) {
    super(firstName, lastName, age);
    this.academyName = academyName;
    this.studentID = studentID;
  }
  study() {
    console.log(`${this.firstName} is studying in ${this.academyName}`);
  }
}

const studentOne = new Student("Jordan", "Nikolov", 19, "Seavus", "A0203");
const studentTwo = new Student("Gordan", "Tushevski", 19, "Brainster", "A0215");

studentOne.getFullName();
studentOne.study();
studentTwo.getFullName();
studentTwo.study();

class DesignStudent extends Student {
  constructor(
    firstName,
    lastName,
    age,
    academyName,
    studentID,
    isStudentOfTheMonth
  ) {
    super(firstName, lastName, age, academyName, studentID);
    this.isStudentOfTheMonth = isStudentOfTheMonth;
  }
  attendAdobeExam() {
    console.log(`${this.firstName} is doing an adobe exam`);
  }
}

const designStudentOne = new DesignStudent(
  "Ivan",
  "Lazarov",
  19,
  "Hogwarts",
  "B221123",
  false
);

designStudentOne.attendAdobeExam();

class CodeStudent extends Student {
  constructor(firstName, lastName, age, academyName, studentID) {
    super(firstName, lastName, age, academyName, studentID);
    this.hasIndividualProject = false;
    this.hasGroupProject = false;
  }
  doProject(type) {
    if (type === "individual") {
      console.log(`${this.firstName} is working on an individual project`);
      this.hasIndividualProject = true;
    } else if (type === "group") {
      console.log(`${this.firstName} is working on a group project`);
      this.hasGroupProject = true;
    }
  }
}

const codeStudentOne = new CodeStudent(
  "Ivan",
  "Borisovski",
  19,
  "Sofija",
  "C23112"
);

codeStudentOne.doProject("group");

class NetworkStudent extends Student {
  constructor(firstName, lastName, age, academyName, studentID, academyPart) {
    super(firstName, lastName, age, academyName, studentID);
    this.academyPart = academyPart;
  }
  attendCiscoExam() {
    console.log(`${this.firstName} is doing a cisco exam!`);
  }
}

const networkStudentOne = new NetworkStudent(
  "Dejan",
  "Angelov",
  19,
  "Hogwarts",
  "C12322",
  21
);
networkStudentOne.attendCiscoExam();
