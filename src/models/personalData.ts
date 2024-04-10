import { z } from "zod";

export const personalDataSchema = z.object({
	ic: z.string(),
	name: z.string(),
	secondName: z.string(),
	lastName: z.string(),
	secondLastName: z.string(),
	gender: z.enum(["male", "female"]),
	maritalStatus: z.enum(["single", "married", "divorced", "widower"]),
	birthDate: z.string(),
	birthPlace: z.string(),
});

export type PersonalData = z.infer<typeof personalDataSchema>;
