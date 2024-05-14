import {
	AdditionData,
	InscriptionData,
	WithdrawData,
	additionDataSchema,
	inscriptionDataSchema,
	withdrawDataSchema,
} from "@/models/inscription";

export const adaptInscriptionData = (data: any): InscriptionData => {
	return inscriptionDataSchema.parse(data);
};

export const adaptAdditionData = (data: any): AdditionData => {
	return additionDataSchema.parse(data);
};

export const adaptWithdrawData = (data: any): WithdrawData => {
	return withdrawDataSchema.parse(data);
};
