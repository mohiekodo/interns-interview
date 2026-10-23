// Exam 1: User Manager
//
// The list of users is stored in the variable `users` below.
// Do not change the users in the list. Write your functions underneath it.

let users = [
  {
    id: 1,
    email: "ahmad.haddad@example.com",
    firstName: "Ahmad",
    lastName: "Haddad",
    age: 38,
    startDate: "2014-09-01",
    birthDate: "1988-04-12",
  },
  {
    id: 2,
    email: "layla.nasser@example.com",
    firstName: "Layla",
    lastName: "Nasser",
    age: 30,
    startDate: "2019-02-18",
    birthDate: "1995-11-03",
  },
  {
    id: 3,
    email: "omar.khoury@example.com",
    firstName: "Omar",
    lastName: "Khoury",
    age: 35,
    startDate: "2016-05-09",
    birthDate: "1991-07-22",
  },
  {
    id: 4,
    email: "rania.darwish@example.com",
    firstName: "Rania",
    lastName: "Darwish",
    age: 42,
    startDate: "2012-06-01",
    birthDate: "1984-01-30",
  },
  {
    id: 5,
    email: "khaled.mansour@example.com",
    firstName: "Khaled",
    lastName: "Mansour",
    age: 27,
    startDate: "2022-01-10",
    birthDate: "1999-03-17",
  },
  {
    id: 6,
    email: "noor.saleh@example.com",
    firstName: "Noor",
    lastName: "Saleh",
    age: 24,
    startDate: "2025-03-03",
    birthDate: "2002-09-15",
  },
  {
    id: 7,
    email: "yazan.aziz@example.com",
    firstName: "Yazan",
    lastName: "Aziz",
    age: 32,
    startDate: "2018-08-20",
    birthDate: "1993-12-08",
  },
  {
    id: 8,
    email: "hala.hamdan@example.com",
    firstName: "Hala",
    lastName: "Hamdan",
    age: 30,
    startDate: "2020-10-05",
    birthDate: "1996-05-25",
  },
  {
    id: 9,
    email: "samer.qasim@example.com",
    firstName: "Samer",
    lastName: "Qasim",
    age: 47,
    startDate: "2013-04-15",
    birthDate: "1979-08-14",
  },
  {
    id: 10,
    email: "dana.sabbagh@example.com",
    firstName: "Dana",
    lastName: "Sabbagh",
    age: 26,
    startDate: "2023-06-12",
    birthDate: "2000-03-01",
  },
  {
    id: 11,
    email: "tarek.barakat@example.com",
    firstName: "Tarek",
    lastName: "Barakat",
    age: 44,
    startDate: "2012-09-03",
    birthDate: "1982-10-02",
  },
  {
    id: 12,
    email: "maya.issa@example.com",
    firstName: "Maya",
    lastName: "Issa",
    age: 41,
    startDate: "2017-11-27",
    birthDate: "1985-06-19",
  },
  {
    id: 13,
    email: "bassel.younes@example.com",
    firstName: "Bassel",
    lastName: "Younes",
    age: 23,
    startDate: "2024-09-09",
    birthDate: "2003-02-11",
  },
  {
    id: 14,
    email: "lina.kassab@example.com",
    firstName: "Lina",
    lastName: "Kassab",
    age: 34,
    startDate: "2026-08-17",
    birthDate: "1992-04-04",
  },
  {
    id: 15,
    email: "fadi.najjar@example.com",
    firstName: "Fadi",
    lastName: "Najjar",
    age: 36,
    startDate: "2021-03-22",
    birthDate: "1990-01-09",
  },
];

// ---- Write your functions below this line ----
function printusers() {
  console.log("number of users" + users.length);
}

printusers();

function addUser (user) {
  if (typeof user.id !== "number" ){
    console.error("id must be a number")
    return;
  }
  if (user.age < 18 || user.age >100) {
    console.error("age must be a whole number fom 18 to 100");
    return;
  }
    users.push(user);
  
}
let user = {
   id: 17,
  email: "sara.omar@example.com",
  firstName: "Sara",
  lastName: "Omar",
  age: 17,
  startDate: "2026-10-01",
  birthDate: "2009-05-20"
};

 addUser(user);
 printusers();

function findUser(id) {
  return users.find (user => user.id ===id) || null;
}
console.log(findUser(3));
console.log(findUser(999));

function deleteUser(id) {
  const index = users.findIndex(user=> user.id ===id);
  if (!user) {
    return null;
  }
  users.splice(users.indexOf(user) , 1);
  return user;
}

console.log(deleteUser(5));
console.log(deleteUser(999));
deleteUser(user);
printusers();

function getOldestAndYoungest(){
  let oldest = users[0];
  let youngest = users[0];
  for (let user of users) {
    if (user.birthdate < oldest.birthdate) oldest= user;
    if (user.birthdate > youngest.birthdate) youngest= user;

  }
  console.log(getOldestAndYoungest());
  getOldestAndYoungest();
}