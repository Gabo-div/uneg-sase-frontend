import { z } from "zod";
import { studentSchema } from "./student";


export const userSchema = z.object({
  id: z.number(),
  username: z.string(),
  data: z.discriminatedUnion("role", [
    z.object({
      role: z.literal("student"),
    }).merge(studentSchema),
  ])
})

export type User = z.infer<typeof userSchema>;
