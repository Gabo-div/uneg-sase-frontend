import { z } from "zod";

export const academicDataSchema = z.object({
	status: z.enum(["active", "inactive"]),
	campus: z.string(),
	career: z.string(),
	level: z.number(),
	approvedUc: z.number(),
	totalUc: z.number(),
	record: z.number(),
	index: z.number(),
});

export type AcademicData = z.infer<typeof academicDataSchema>;
