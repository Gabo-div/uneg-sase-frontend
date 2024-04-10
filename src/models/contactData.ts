import { z } from "zod";

export const contactDataSchema = z.object({
	email: z.string(),
	alternativeEmail: z.string(),
	universityEmail: z.string(),
	phoneNumber: z.string(),
	alternativePhoneNumber: z.string(),
	houseAddress: z.string(),
	workAddress: z.string(),
});

export type ContactData = z.infer<typeof contactDataSchema>;
