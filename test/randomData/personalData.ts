import { PersonalData } from "@/models/personalData";
import { faker } from "@faker-js/faker";

export const createRandomPersonalData = (): PersonalData => {
	return {
		ic: faker.number.int({ min: 10000000, max: 99999999 }).toString(),
		name: faker.person.firstName(),
		secondName: faker.person.middleName(),
		lastName: faker.person.lastName(),
		secondLastName: faker.person.lastName(),
		gender: faker.person.sexType(),
		maritalStatus: faker.helpers.arrayElement([
			"single",
			"married",
			"divorced",
			"widower",
		]),
		birthDate: faker.date.birthdate().toISOString(),
		birthPlace: faker.location.city(),
	} satisfies PersonalData;
};
