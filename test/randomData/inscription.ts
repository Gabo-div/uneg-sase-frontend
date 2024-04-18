import { faker } from "@faker-js/faker";
import { InscriptionData } from "@/models/inscription";
import { createRandomSubject } from "./subject";

export const createRandomInscriptionData = (): InscriptionData => {
	return {
		availableUC: faker.number.int({ min: 12, max: 26 }),
		availableSubjects: Array.from(
			{ length: faker.number.int({ min: 5, max: 15 }) },
			() => ({
				...createRandomSubject(),
				availableSections: Array.from(
					{ length: faker.number.int({ min: 0, max: 5 }) },
					() => faker.number.int({ min: 1, max: 5 }),
				),
			}),
		),
	};
};
