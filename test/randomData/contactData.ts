import { ContactData } from '@/models/contactData'
import { faker } from '@faker-js/faker'

export const createRandomContactData = (): ContactData => {
  return {
    email: faker.internet.email(),
    alternativeEmail: faker.internet.email(),
    universityEmail: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    alternativePhoneNumber: faker.phone.number(),
    houseAddress: faker.location.streetAddress(),
    workAddress: faker.location.streetAddress(),
  } satisfies ContactData
}
