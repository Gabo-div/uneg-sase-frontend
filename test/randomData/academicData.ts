import { AcademicData } from "@/models/academicData";
import { faker } from "@faker-js/faker";

export const createRandomAcademicData = (): AcademicData => {
	return {
		status: faker.helpers.arrayElement(["active", "inactive"]),
		campus: faker.location.city(),
		career: faker.lorem.word(),
		level: faker.number.int({ min: 1, max: 10 }),
		approvedUc: faker.number.int({ min: 0, max: 100 }),
		totalUc: faker.number.int({ min: 0, max: 100 }),
		record: faker.number.int({ min: 1000000, max: 9999999 }),
		index: faker.number.float({ min: 0, max: 10, fractionDigits: 2 }),
	} satisfies AcademicData;
};
