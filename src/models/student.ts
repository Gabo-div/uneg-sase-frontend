import { z } from "zod"
import { personalDataSchema } from "./personalData"
import { academicDataSchema } from "./academicData"
import { contactDataSchema } from "./contactData"

export const studentSchema = z.object({
	personalData: personalDataSchema,
	contactData: contactDataSchema,
	academicData: academicDataSchema,
})

export type Student = z.infer<typeof studentSchema>
