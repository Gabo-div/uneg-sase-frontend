import { createRandomStudentUser } from "../../test/randomData/user";

export const getStudentUser = async (): Promise<any> => {
	return createRandomStudentUser();
};
