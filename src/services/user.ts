import { createRandomStudentUser } from "../../test/randonData/user"

export const getStudentUser = async (): Promise<any> => {
  return createRandomStudentUser()
}
