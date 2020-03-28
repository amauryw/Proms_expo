import { UserType } from "./me.type";

const ClemData: UserType = {
  id: "userId",
  nom: "Bouchet",
  prenom: "Clement",
  bucque: "Dja Sprey",
  nums: 124,
  email: "clement.bouchet@gadzorg",
  telephone: "0600000000",
  solde: 10.2,
  lieu: "Paris",
  activite: "Dev"
};

const getFakeData = (name: string): Promise<UserType> => {
  switch (name) {
    case "Clement":
      return Promise.resolve(ClemData);
    default:
      return Promise.reject("LOGIN ERROR");
  }
};

export const postLogin = async (name: string): Promise<UserType> =>
  new Promise(resolve => setTimeout(() => resolve(getFakeData(name)), 300));
