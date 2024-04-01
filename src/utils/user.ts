import { User } from "@/models/user"

type Gender = User["data"]["personalData"]["gender"]

export const translateGender = (gender: Gender): string => {
  const translatedGender: Record<Gender, string> = {
    male: "Masculino",
    female: "Femenino"
  }

  return translatedGender[gender]
}

type MaritalStatus = User["data"]["personalData"]["maritalStatus"]

export const translateMaritalStatus = (maritalStatus: MaritalStatus): string => {
  const translatedStatus: Record<MaritalStatus, string> = {
    single: "Soltero",
    married: "Casado",
    divorced: "Divorciado",
    widower: "Viudo"
  }

  return translatedStatus[maritalStatus]
}
