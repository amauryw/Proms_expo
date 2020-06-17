// for now the call are fake unntil we install the api

export function getUser() {
  const text = fetch("https://amauryw.builtwithdark.com/user").then(response =>
    response.json()
  );
  return text;
}

export function getUserInfo() {
  const user = {
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

  return user;
}

export function getUserAccount() {
  const account = {
    id: "AccountId",
    foys: -23,
    cotiz: false,
    taf: -21.2,
    other: 30
  };

  return account;
}

export function getEvents() {
  const event = {
    id: "eventId",
    title: "Chofeps",
    month: "Octobre",
    day: "12",
    location: "Lille",
    subscriptions: 20,
    description:
      "Ceci est une courte description d'un évènement qui va se dérouler bientôt"
  };

  const event2 = {
    id: "eventId2",
    title: "Chops2",
    month: "Octobre",
    day: "15",
    location: "Lille",
    subscriptions: 160,
    description:
      "Ceci est une courte description d'un évènement qui va se dérouler bientôt"
  };

  const event3 = {
    id: "eventId3",
    title: "Chofweps3",
    month: "Octobre",
    day: "18",
    location: "Lille",
    subscriptions: 0,
    description:
      "Ceci est une courte description d'un évènement qui va se dérouler bientôt"
  };
  const event4 = {
    id: "eventId4",
    title: "Chopwfs4",
    month: "Janvier",
    day: "2",
    location: "Lille",
    subscriptions: 0,
    description:
      "Ceci est une courte description d'un évènement qui va se dérouler bientôt"
  };

  return [event4, event, event2, event3];
}
