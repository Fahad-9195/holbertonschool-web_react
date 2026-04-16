import { Subjects as SubjectsBase } from './Subject';

export namespace Subjects {
  export interface Teacher extends SubjectsBase.Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends SubjectsBase.Subjects.Subject {
    teacher!: Teacher;

    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingJava) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
