import { User } from "@/models/user";
import { faker } from "@faker-js/faker";
import { createRandomPersonalData } from "./personalData";
import { createRandomContactData } from "./contactData";
import { createRandomAcademicData } from "./academicData";

export const createRandomStudentUser = (): User => {
  return {
    id: faker.number.int(),
    username: faker.internet.userName(),
    data: {
      role: "student",
      personalData: createRandomPersonalData(),
      contactData: createRandomContactData(),
      academicData: createRandomAcademicData(),
    }
  } satisfies User
}
