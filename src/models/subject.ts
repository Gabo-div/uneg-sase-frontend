import { z } from "zod"

export const subjectSchema = z.object({
	code: z.number(),
	semester: z.number(),
	name: z.string(),
	uc: z.number(),
	needed: z.array(z.number()),
	approved: z.boolean(),
	timesFailed: z.number(),
})

export type Subject = z.infer<typeof subjectSchema>

export const registeredSubjectSchema = subjectSchema.extend({
	section: z.number(),
	teacher: z.string(),
})

export type RegisteredSubject = z.infer<typeof registeredSubjectSchema>
