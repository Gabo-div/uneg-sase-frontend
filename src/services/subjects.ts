import { createRandomRegisteredSubject, createRandomSubject } from '../../test/randomData/subject';

export const getStudentSubjects = async (): Promise<any> => {
  return Array.from({ length: 50 }, () => createRandomSubject())
}

export const getStudentRegisteredSubjects = async (): Promise<any> => {
  return Array.from({ length: 6 }, () => createRandomRegisteredSubject())
}

