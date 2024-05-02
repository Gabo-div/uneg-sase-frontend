import {
	AdditionData,
	InscriptionData,
	additionDataSchema,
	inscriptionDataSchema,
} from "@/models/inscription";

export const adaptInscriptionData = (data: any): InscriptionData => {
	return inscriptionDataSchema.parse(data);
};

export const adaptAdditionData = (data: any): AdditionData => {
	return additionDataSchema.parse(data);
};
