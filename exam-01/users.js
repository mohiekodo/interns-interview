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
function isValidDate(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const date = new Date(value + "T00:00:00Z");
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

function isValidEmail(value) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateUser(user, currentUser = null) {
  if (user === null || typeof user !== "object" || Array.isArray(user)) {
    throw new Error("Invalid user: must be an object");
  }

  const requiredFields = ["id", "email", "firstName", "lastName", "age", "birthDate", "startDate"];
  for (const field of requiredFields) {
    if (!(field in user)) {
      throw new Error(`Invalid ${field}: is required`);
    }
  }

  if (!Number.isInteger(user.id) || user.id <= 0) {
    throw new Error("Invalid id: must be a positive whole number");
  }
  if (users.some((other) => other !== currentUser && other.id === user.id)) {
    throw new Error("Invalid id: must be unique");
  }

  if (!isValidEmail(user.email)) {
    throw new Error("Invalid email: must be a valid email address with no spaces");
  }
  if (users.some((other) => other !== currentUser && other.email.toLowerCase() === user.email.toLowerCase())) {
    throw new Error("Invalid email: must be unique");
  }

  if (typeof user.firstName !== "string" || user.firstName.trim() === "") {
    throw new Error("Invalid firstName: must be a non-empty string");
  }
  if (typeof user.lastName !== "string" || user.lastName.trim() === "") {
    throw new Error("Invalid lastName: must be a non-empty string");
  }

  if (!Number.isInteger(user.age) || user.age < 18 || user.age > 100) {
    throw new Error("Invalid age: must be a whole number from 18 to 100");
  }

  if (!isValidDate(user.birthDate)) {
    throw new Error("Invalid birthDate: must be a valid date in YYYY-MM-DD format");
  }
  if (!isValidDate(user.startDate)) {
    throw new Error("Invalid startDate: must be a valid date in YYYY-MM-DD format");
  }
  if (user.startDate <= user.birthDate) {
    throw new Error("Invalid startDate: must be after birthDate");
  }

  return user;
}

function addUser(user) {
  validateUser(user);
  users.push(user);
  return user;
}

function findUser(id) {
  return users.find((user) => user.id === id) || null;
}

function deleteUser(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) {
    return null;
  }

  return users.splice(index, 1)[0];
}

function getOldestAndYoungest() {
  if (users.length === 0) {
    throw new Error("No users found");
  }

  let oldest = users[0];
  let youngest = users[0];

  for (const user of users) {
    if (user.birthDate < oldest.birthDate) oldest = user;
    if (user.birthDate > youngest.birthDate) youngest = user;
  }

  return { oldest, youngest };
}

function getFirstAndLastHired() {
  if (users.length === 0) {
    throw new Error("No users found");
  }

  let firstHired = users[0];
  let lastHired = users[0];

  for (const user of users) {
    if (user.startDate < firstHired.startDate) firstHired = user;
    if (user.startDate > lastHired.startDate) lastHired = user;
  }

  return { firstHired, lastHired };
}

function updateUser(id, changes) {
  const user = findUser(id);
  if (!user) {
    return null;
  }
  if (changes === null || typeof changes !== "object" || Array.isArray(changes)) {
    throw new Error("Invalid changes: must be an object");
  }
  if ("id" in changes) {
    throw new Error("Invalid id: the id cannot be changed");
  }

  const updatedUser = { ...user, ...changes };
  validateUser(updatedUser, user);

  Object.assign(user, changes);
  return user;
}

// ---- Demo ----
console.log(
  "addUser:",
  addUser({
    id: 16,
    email: "zaid.rahal@example.com",
    firstName: "Zaid",
    lastName: "Rahal",
    age: 25,
    startDate: "2026-10-01",
    birthDate: "2001-05-20",
  })
);
console.log("findUser:", findUser(3));
console.log("deleteUser:", deleteUser(16));
console.log("getOldestAndYoungest:", getOldestAndYoungest());
