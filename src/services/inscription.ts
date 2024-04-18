import { createRandomInscriptionData } from "../../test/randomData/inscription";

export const getInscriptionData = async (): Promise<any> => {
	return createRandomInscriptionData();
};
