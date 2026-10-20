# Intern Interview Challenges

Coding exercises for interns and junior developers. These challenges assess practical skills in using the terminal, working with Git, and solving problems with JavaScript.

## Available exams

### Exam 01: CLI, Git & JavaScript — User Manager

Build an in-memory user manager using the supplied `users` array in `users.js`. Implement adding users with validation, finding and deleting users, and identifying the oldest and youngest users by birth date. Optional bonuses include updating users, finding the first and last users hired, and adding extra validation.

- **Level:** Junior / fresh graduate
- **Suggested time:** 1–1.5 hours
- **Tools:** Git and Node.js (LTS)
- **Language:** Plain JavaScript, with no external libraries

Read the [exam instructions](exam-01/question.md) for the full requirements and deliverables. See the [setup guide](exam-01/README.md) for installation checks and troubleshooting.

## Getting started

1. Install [Git](https://git-scm.com/) and [Node.js (LTS)](https://nodejs.org/). On Windows, use Git for Windows.
2. Follow the [exam setup instructions](exam-01/question.md#part-1-setup-cli--git) to clone the repository into a folder named `mentees-exams` on your Desktop.
3. From the cloned repository, run the starter app:

   ```sh
   cd exam-01
   node index.js
   ```

   You should see `Mentees exams app is running!` in the terminal.

4. Create your own branch before making changes. Do not commit to `main`.
5. Complete the exam and follow its submission instructions.

**No dependency installation is needed.** You do not need to run `npm install`.

## Repository layout

- [`exam-01/README.md`](exam-01/README.md) — Setup, run instructions, and troubleshooting.
- [`exam-01/question.md`](exam-01/question.md) — Task requirements, validation rules, and submission checklist.
- [`exam-01/index.js`](exam-01/index.js) — Starter app used to verify your setup.
- [`exam-01/users.js`](exam-01/users.js) — Starter file containing the `users` array. **Do not change the supplied users.** Write your functions below the list.

For Exam 01, work inside `exam-01/`: implement your functions in the existing `users.js`, then call each function once and print the results at the bottom of the same file. The functions themselves must return values or throw errors, not print output. References to the project or root folder in the exam instructions mean this exam folder for those files.

## Submission

- Implement `addUser`, `findUser`, `deleteUser`, and `getOldestAndYoungest` in `users.js`, below the supplied list.
- Call each function once and print the results at the bottom of `users.js`. From `exam-01/`, verify that `node users.js` runs without errors.
- Keep proof that the starter app runs locally, such as a screenshot or terminal output.
- Make at least **four small commits** with descriptive messages.
- Push your branch.

Use the [exam deliverables checklist](exam-01/question.md#deliverables-checklist) before submitting.
