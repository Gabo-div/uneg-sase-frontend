import { faker } from '@faker-js/faker';
import { Subject } from "@/models/subject";

export const createRandomSubject = (): Subject => {
  return {
    code: faker.number.int({ min: 1, max: 50 }),
    semester: faker.number.int({ min: 1, max: 9 }),
    name: faker.lorem.word(),
    uc: faker.number.int({ min: 1, max: 5 }),
    approved: faker.datatype.boolean(),
    timesFailed: faker.number.int({ min: 0, max: 5 }),
    needed: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () => faker.number.int({ min: 1, max: 50 })),
  } satisfies Subject
}

export const createRandomRegisteredSubject = (): Subject => {
  return {
    ...createRandomSubject(),
    section: faker.number.int({ min: 1, max: 7 }),
    teacher: faker.name.fullName(),
  }
}
