/* eslint-disable indent */
/* eslint-disable max-lines-per-function */

// Create a school object. The school object uses the same kind of student
// object as the previous exercise. It has methods that use and update
// information about the student. Be sure to check out the previous exercise
// for the other arguments that might be needed by the school object.
// Implement the following methods for the school object:

// addStudent: Adds a student by creating a new student and adding the
// student to a collection of students. The method adds a constraint that
// the year can only be any of the following values: '1st', '2nd', '3rd',
// '4th', or '5th'. Returns a student object if year is valid otherwise it
// logs "Invalid Year".
// enrollStudent: Enrolls a student in a course.
// addGrade: Adds the grade of a student for a course.
// getReportCard: Logs the grades of a student for all courses. If the
// course has no grade, it uses "In progress" as the grade.
// courseReport: Logs the grades of all students for a given course name.
// Only student with grades are part of the course report.
// To test your code, use the three student objects listed below. Using the
// three student objects, produce the following values from the getReportCard
// and courseReport methods respectively.


// Examples of created student objects with grades; methods
// on the objects are not shown here for brevity. The
// following are only showing the properties that aren't
// methods for the three objects

function createStudent(name, grade) {
  return {
    name,
    grade,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.grade} year student.`);
    },

    addCourse(course) {
      course.notes = [];
      this.courses.push(course);
    },

    listCourses() {
      console.log(this.courses);
    },

    addNote(code, note) {
      let courseIdx = this.findCourseIdx(code);
      if (courseIdx !== -1) {
        this.courses[courseIdx].notes.push(note);
      }
    },

    updateNote(code, update) {
      let courseIdx = this.findCourseIdx(code);
      if (courseIdx !== -1) {
        this.courses[courseIdx].notes = [update];
      }
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.notes.length > 0) {
          console.log(course.name + ': ' + course.notes.join('; '));
        }
      });
    },

    findCourseIdx(code) {
      for (let idx = 0; idx < this.courses.length; idx++) {
        if (this.courses[idx].code === code) {
          return idx;
        }
      }

      return -1;
    }
  };
}

let school = {
  students: [],
  courses: [],

  addStudent(student) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(student.grade)) {
      let newStudent = createStudent(student.name, student.grade);
      this.students.push(newStudent);
      return newStudent;
    } else {
      console.log('Invalid Year');
      return null;
    }
  },

  enrollStudent(student, course) {
    let studentIdx = this.findStudent(student);
    if (studentIdx !== -1) {
      this.students[studentIdx].courses.push(course);
    }
  },

  findStudent(student) {
    for (let idx = 0; idx < this.students.length; idx++) {
      let currStudent = this.students[idx];
      if (student.name === currStudent.name &&
          student.grade === currStudent.grade) {
        return idx;
      }
    }

    return -1;
  },

  addGrade(student, courseCode, grade) {
    let studentIdx = this.findStudent(student);
    if (studentIdx !== -1) {
      let courseIdx = this.findCourse(this.students[studentIdx], courseCode);
      if (courseIdx !== -1) {
        this.students[studentIdx].courses[courseIdx].grade = grade;
      }
    }
  },

  findCourse(student, courseCode) {
    for (let idx = 0; idx < student.courses.length; idx++) {
      if (student.courses[idx].code === courseCode) return idx;
    }

    return -1;
  },

  getReportCard(student) {
    let studentIdx = this.findStudent(student);
    if (studentIdx !== -1) {
      let student = this.students[studentIdx];
      student.courses.forEach(course => {
        let grade = course.grade ? course.grade : 'In progress';
        console.log(`= ${course.name}: ${grade}`);
      });
    }
  },

  courseReport(courseCode) {
    let courseName = '';
    let coursePerformances = [];
    this.students.forEach(student => {
      student.courses.forEach(course => {
        if (course.code === courseCode && course.grade) {
          courseName = course.name;
          coursePerformances.push([student.name, course.grade]);
        }
      });
    });

    if (coursePerformances.length === 0) {
      console.log('= undefined');
      return;
    }

    let average = coursePerformances.reduce((sum, performance) => {
      return sum + performance[1];
    }, 0) / coursePerformances.length;

    console.log(`=${courseName} Grades=`);
    coursePerformances.forEach(performance => {
      console.log(performance[0] + ': ' + performance[1]);
    });

    console.log('---');
    console.log(`Course Average: ${average}`);
  },
};

let paul = createStudent('Paul', '3rd');
school.addStudent(paul);
school.enrollStudent(paul, { name: 'Math', code: 101 });
school.enrollStudent(paul, { name: 'Advanced Math', code: 102 });
school.enrollStudent(paul, { name: 'Physics', code: 202 });
school.addGrade(paul, 101, 95);
school.addGrade(paul, 102, 90);
console.log(paul);
// {
//   name: 'Paul',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

let mary = createStudent('Mary', '3rd');
school.addStudent(mary);
school.enrollStudent(mary, { name: 'Math', code: 101 });
school.addGrade(mary, 101, 91);
console.log(mary);
// {
//   name: 'Mary',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

let kim = createStudent('Kim', '2nd');
school.addStudent(kim);
school.enrollStudent(kim, { name: 'Math', code: 101 });
school.enrollStudent(kim, { name: 'Advanced Math', code: 102 });
school.addGrade(kim, 101, 93);
school.addGrade(kim, 102, 90);
console.log(kim);
// {
//   name: 'Kim',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }

// // getReportCard output
school.getReportCard(paul);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress


// courseReport output
// > school.courseReport('Math');
school.courseReport(101);
// = =Math Grades=
// = Paul: 95
// = Mary: 91
// = Kim: 93
// = ---
// = Course Average: 93

school.courseReport(102);
// > school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = Paul: 90
// = Kim: 90
// = ---
// = Course Average: 90

school.courseReport(202);
// > school.courseReport('Physics');
// = undefined