import { Subjects as SubjectsBase } from './Subject';

export namespace Subjects {
  export interface Teacher extends SubjectsBase.Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends SubjectsBase.Subjects.Subject {
    teacher!: Teacher;

    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingReact) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
