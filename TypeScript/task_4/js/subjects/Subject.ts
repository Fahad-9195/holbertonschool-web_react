import { Subjects as SubjectsTeacher } from './Teacher';

export namespace Subjects {
  export type Teacher = SubjectsTeacher.Teacher;

  export class Subject {
    teacher!: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
