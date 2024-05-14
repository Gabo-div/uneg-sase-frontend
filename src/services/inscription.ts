import {
	createRandomInscriptionData,
	createRandomAdditionData,
	createRandomWithdrawData,
} from "../../test/randomData/inscription";

export const getInscriptionData = async (): Promise<any> => {
	return createRandomInscriptionData();
};

export const getAdditionData = async (): Promise<any> => {
	return createRandomAdditionData();
};

export const getWithdrawData = async (): Promise<any> => {
	return createRandomWithdrawData();
};
