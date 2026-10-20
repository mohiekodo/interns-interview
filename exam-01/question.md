# Exam 1: CLI, Git & JavaScript — User Manager

**Level:** Junior / Fresh grad
**Suggested time:** 1 to 1.5 hours
**Environment:** Windows, Git for Windows, Node.js (LTS). Use the terminal for every step (PowerShell, CMD or Git Bash).
**Rules:** Plain JavaScript only. You may use Node's built-in modules (`fs`, `path`), but no external libraries.

---

## What you will build

A small in-memory **user manager**: it loads a list of users from a JSON file and lets you add, find and delete users, and find the oldest and youngest one.

---

## Part 1: Setup (CLI + Git)

1. Open a terminal and clone the repository into a new directory called `mentees-exams`:
   ```
   git clone git@github.com:mohiekodo/interns-interview.git mentees-exams
   ```
2. Go into the directory:
   ```
   cd mentees-exams
   ```
3. Follow the repository's `README` to install and run the project. Confirm it runs without errors, and keep a screenshot (or a copy of the terminal output) as proof.
4. Create your own branch. **Never commit to `main`.**
   ```
   git checkout -b feature/users-<your-first-name>
   ```

---

## Part 2: The task

The repository contains a file called `users.json` (in the root folder). It holds an array of users. Do **not** edit this file.

Each user has these attributes, and **all seven are required**:

| Attribute   | Type   | Example                  | Rule                                                              |
|-------------|--------|--------------------------|-------------------------------------------------------------------|
| `id`        | number | `7`                      | Positive whole number. Must be unique.                            |
| `email`     | string | `yazan.aziz@example.com` | Valid email format (`something@something.something`, no spaces). Must be unique, ignoring upper/lower case. |
| `firstName` | string | `"Yazan"`                | Must be a string.                                                 |
| `lastName`  | string | `"Aziz"`                 | Must be a string.                                                 |
| `age`       | number | `32`                     | Whole number from 18 to 100.                                      |
| `birthDate` | string | `"1993-12-08"`           | A valid date written as `YYYY-MM-DD`.                             |
| `startDate` | string | `"2018-08-20"`           | A valid date written as `YYYY-MM-DD`.                             |

### Your work

Create a file called `users.js` in the root of the repository and implement the following.

1. **Load the data.** Read `users.json` and store its content in a variable called `users`.

   Example:
   ```js
   users.length; // 15
   users[0];
   // {
   //   id: 1,
   //   email: "ahmad.haddad@example.com",
   //   firstName: "Ahmad",
   //   lastName: "Haddad",
   //   age: 38,
   //   startDate: "2014-09-01",
   //   birthDate: "1988-04-12"
   // }
   ```

2. **`addUser(user)`**
   - Validates the user object using the rules in the table above.
   - If valid, adds it to `users` and returns the added user.
   - If invalid, throws an `Error` with a clear message saying which attribute failed.

   Example (valid):
   ```js
   addUser({
     id: 16,
     email: "zaid.rahal@example.com",
     firstName: "Zaid",
     lastName: "Rahal",
     age: 25,
     startDate: "2026-10-01",
     birthDate: "2001-05-20"
   });
   // returns the same object, and `users` now has 16 users
   ```

   Example (invalid, `age` is too low):
   ```js
   addUser({
     id: 17,
     email: "sara.omar@example.com",
     firstName: "Sara",
     lastName: "Omar",
     age: 17,
     startDate: "2026-10-01",
     birthDate: "2009-05-20"
   });
   // throws Error: "Invalid age: must be a whole number from 18 to 100"
   // (the wording of your message is up to you)
   ```

3. **`findUser(id)`**
   - Receives a user `id` (a number), for example `3`.
   - Returns the user, or `null` if not found.

   Example:
   ```js
   findUser(3);
   // { id: 3, email: "omar.khoury@example.com", firstName: "Omar", lastName: "Khoury",
   //   age: 35, startDate: "2016-05-09", birthDate: "1991-07-22" }

   findUser(999); // null
   ```

4. **`deleteUser(id)`**
   - Receives a user `id`, same as `findUser`.
   - Removes the user from `users` and returns the removed user, or `null` if not found.

   Example:
   ```js
   deleteUser(5);
   // { id: 5, email: "khaled.mansour@example.com", firstName: "Khaled", lastName: "Mansour",
   //   age: 27, startDate: "2022-01-10", birthDate: "1999-03-17" }
   // `users` now has 14 users

   deleteUser(5); // null (already deleted)
   ```

5. **`getOldestAndYoungest()`**
   - Returns `{ oldest, youngest }`, decided by **`birthDate`**.
   - If two users are tied, return the one that appears **first in the list**.

   Example (the shape of the result):
   ```js
   getOldestAndYoungest();
   // { oldest: { ...a full user object }, youngest: { ...a full user object } }
   ```

**Also required:**
- Export `users` and the four functions (`addUser`, `findUser`, `deleteUser`, `getOldestAndYoungest`) so they can be imported from another file.
- Your functions must **not** print anything (`console.log`). They return values or throw errors.

---

## Part 3: Prove it works

Create a file called `demo.js` that imports from `users.js`, calls each function once, and prints the results.

Run it from the terminal:
```
node demo.js
```

---

## Part 4: Git workflow

- Commit your work in **small steps**: at least **4 commits**, with clear messages that say what you did (for example `feat: add validation to addUser`). Messages like `update` or `fix` are not accepted.
- Do not commit `node_modules`, system files, or any change to `users.json`.
- Push your branch:
  ```
  git push -u origin feature/users-<your-first-name>
  ```

---

## Bonus (optional, only if you finish early)

Do these only after everything above works and is committed. Export any new function too.

1. **`getFirstAndLastHired()`**
   - Returns `{ firstHired, lastHired }`, decided by **`startDate`**. Ties: the first in the list.

   Example (the shape of the result):
   ```js
   getFirstAndLastHired();
   // { firstHired: { ...a full user object }, lastHired: { ...a full user object } }
   ```

2. **`updateUser(id, changes)`**
   - Finds the user by `id` and updates only the attributes in `changes` (for example `{ lastName: "Haddad-Ali" }`).
   - The `id` of a user can **not** be changed. If `changes` contains an `id`, throw an `Error`.
   - Returns the updated user, or `null` if no user has that `id`.

   Example:
   ```js
   updateUser(1, { lastName: "Haddad-Ali" });
   // { id: 1, email: "ahmad.haddad@example.com", firstName: "Ahmad", lastName: "Haddad-Ali",
   //   age: 38, startDate: "2014-09-01", birthDate: "1988-04-12" }

   updateUser(1, { id: 50 });            // throws Error (the id cannot be changed)
   updateUser(999, { lastName: "Ali" }); // null
   ```

3. Make `addUser` also check that:
   - `firstName` and `lastName` are not empty (spaces only counts as empty).
   - `startDate` is **after** `birthDate`.

4. If you did `updateUser`: make it check the changes with the same rules as `addUser`. If they are invalid, throw an `Error` and leave the user **unchanged**.

---

## Deliverables checklist

- [ ] Repository cloned into a directory called `mentees-exams`
- [ ] Project runs locally (screenshot / terminal output as proof)
- [ ] Your own branch, with nothing committed to `main`
- [ ] `users.js` with the 4 functions
- [ ] `demo.js` that runs with `node demo.js`
- [ ] 4+ commits with clear messages
- [ ] Branch pushed

---

## Tips

- If a command does not work in PowerShell, try Git Bash (installed with Git for Windows).
- Use `git status` often to check what you are about to commit.
- Do the functions in order and commit after each one. If you are short on time, a working simple version is better than an unfinished perfect one.

Good luck!
