import { z } from "zod";
import { subjectSchema } from "./subject";

export const availableToInscribeSubjectSchema = subjectSchema.extend({
	availableSections: z.array(z.number()),
});

export type AvailableToInscribeSubject = z.infer<
	typeof availableToInscribeSubjectSchema
>;

export const inscriptionDataSchema = z.object({
	availableUC: z.number(),
	availableSubjects: z.array(availableToInscribeSubjectSchema),
});

export type InscriptionData = z.infer<typeof inscriptionDataSchema>;
