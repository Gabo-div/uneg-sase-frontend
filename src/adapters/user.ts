import { User, userSchema } from "@/models/user"

export const adaptUser = (user: any): User => {
	return userSchema.parse(user)
}
