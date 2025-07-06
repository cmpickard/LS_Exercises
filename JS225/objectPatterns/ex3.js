// Implement the following diagram using the pseudo-classical approach.
// Subclasses should inherit all of the superclass's methods. Reuse the
// constructors of the superclass when implementing a subclass.

/*
Person:
firstName, lastName, age, gender
fullName(), communicate(), eat(), sleep()

Doctor isA Person:
specialization,
diagnose()

Professor isA Person:
subject,
teach()

Student isA Person:
degree,
study()

GraduateStudent isA Student:
graduateDegree
research()
*/

// For the methods, you can have it log out anything you want.

// Here's a sample run you can use as a reference:

function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.sleep = function sleep() {
  console.log('sleepin');
};
Person.prototype.communicate = function communicate() {
  console.log('blah');
};
Person.prototype.fullName = function fullName() {
  return `${this.firstName} ${this.lastName}`;
};
Person.prototype.eat = function eat() {
  console.log('nomnomnom');
};

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}
Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;
Doctor.prototype.diagnose = function diagnose() {
  console.log('You have lupus');
};

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.teach = function teach() {
  console.log('learn this');
};

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function study() {
  console.log('I am learning this');
};

function GraduateStudent(firstName, lastName, age, gender, graduateDegree) {
  Person.call(this, firstName, lastName, age, gender);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;
GraduateStudent.prototype.research = function research() {
  console.log('I am researching');
};

const person = new Person('Foo', 'Bar', 21, 'male');
console.log(person instanceof Person);       // logs true
console.log(person instanceof Doctor);       // logs false
console.log(person instanceof Professor);    // logs false
console.log(person instanceof Student);      // logs false
person.eat();                                // logs 'Eating'
person.communicate();                        // logs 'Communicating'
person.sleep();                              // logs 'Sleeping'
console.log(person.fullName());              // logs 'Foo Bar'

const doctor = new Doctor('Bar', 'Qux', 21, 'female', 'Pediatrics');
console.log(doctor instanceof Person);       // logs true
console.log(doctor instanceof Doctor);       // logs true
console.log(doctor instanceof Professor);    // logs false
console.log(doctor instanceof Student);      // logs false
doctor.eat();                                // logs 'Eating'
doctor.communicate();                        // logs 'Communicating'
doctor.sleep();                              // logs 'Sleeping'
console.log(doctor.fullName());              // logs 'Bar Qux'
doctor.diagnose();                           // logs 'Diagnosing'

const professor = new Professor('Bar', 'Foo', 48, 'female', 'Law');
console.log(professor instanceof Person);    // logs true
console.log(professor instanceof Professor); // logs true
console.log(professor instanceof Doctor);    // logs false
console.log(professor instanceof Student);   // logs false
professor.eat();                             // logs 'Eating'
professor.communicate();                     // logs 'Communicating'
professor.sleep();                           // logs 'Sleeping'
console.log(professor.fullName());           // logs 'Bar Foo'
professor.teach();                           // logs 'Teaching'

const graduateStudent = new GraduateStudent('Qux', 'Bar', 21, 'non-binary', 'BS Industrial Engineering', 'MS Industrial Engineering');
console.log(graduateStudent instanceof Person);          // logs true
console.log(graduateStudent instanceof Student);         // logs true
console.log(graduateStudent instanceof GraduateStudent); // logs true
console.log(graduateStudent instanceof Professor);       // logs false
console.log(graduateStudent instanceof Doctor);          // logs false
graduateStudent.eat();                                   // logs 'Eating'
graduateStudent.communicate();                           // logs 'Communicating'
graduateStudent.sleep();                                 // logs 'Sleeping'
console.log(graduateStudent.fullName());                 // logs 'Qux Bar'
graduateStudent.study();                                 // logs 'Studying'
graduateStudent.research();                              // logs 'Researching'