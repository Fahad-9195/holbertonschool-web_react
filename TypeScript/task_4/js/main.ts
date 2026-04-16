import { Subjects as CppSubjects } from './subjects/Cpp';
import { Subjects as ReactSubjects } from './subjects/React';
import { Subjects as JavaSubjects } from './subjects/Java';

export const cpp = new CppSubjects.Cpp();
export const react = new ReactSubjects.React();
export const java = new JavaSubjects.Java();

export const cTeacher: CppSubjects.Teacher & ReactSubjects.Teacher & JavaSubjects.Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10,
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
