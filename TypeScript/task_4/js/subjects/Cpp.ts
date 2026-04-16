import { Subjects as SubjectsBase } from './Subject';

export namespace Subjects {
  export interface Teacher extends SubjectsBase.Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends SubjectsBase.Subjects.Subject {
    teacher!: Teacher;

    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingC) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
