# Mentees Exams

A small Node.js project used for the mentorship exams.

## Requirements

- [Git](https://git-scm.com/) (on Windows, install Git for Windows)
- [Node.js](https://nodejs.org/) (LTS version)

Check that both are installed:

```
git --version
node -v
```

Each command should print a version number. If you get "command not found" or "not recognized", install the missing tool first and open a new terminal.

## Project files

| File         | What it is                                                              |
|--------------|-------------------------------------------------------------------------|
| `index.js`   | The entry point. Running it starts the app.                             |
| `users.js`   | The exam file. It holds the list of users in a variable. Do not change the list. |
| `README.md`  | This file.                                                              |

## Install

This project has **no dependencies**, so there is nothing to install. You do not need to run `npm install`.

## Run the app

From the project folder (the one that contains `index.js`), run:

```
node index.js
```

You should see this message in the terminal and no errors:

```
Mentees exams app is running
```

If you see that message, the project works on your machine and you can start the exam.

## Troubleshooting

- **`node` is not recognized:** Node.js is not installed, or the terminal was open during the install. Close the terminal and open a new one.
- **`Cannot find module` or `no such file`:** you are in the wrong folder. Run `cd` into the project folder (the one that contains `index.js`) and try again.
- **Command works in one terminal but not another:** try Git Bash (installed with Git for Windows) or PowerShell.
