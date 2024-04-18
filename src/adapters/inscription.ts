import { InscriptionData, inscriptionDataSchema } from "@/models/inscription";

export const adaptInscriptionData = (data: any): InscriptionData => {
	return inscriptionDataSchema.parse(data);
};
