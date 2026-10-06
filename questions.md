### **Level 0 (L0) – Target Search in String Array**

#### **Problem Description**

Write a function `containsWord` that accepts two arguments:

1. `list`: an array of strings to search through.
2. `word`: a target string to look for.

The function must return `true` if `word` exists anywhere in `list` (exact match), and `false` otherwise.

#### **Function Signature & Constraints**

* **Inputs:** `list: string[]`, `word: string`
* **Output:** `boolean`
* **Case Sensitivity:** Case-sensitive matching (e.g., `"Apple"` does not equal `"apple"`).
* **Constraints:** list is not null or undefined, list length is between 0 and 10, word is not null or undefined, and word length is between 0 and 100.

#### **Test Examples**

```javascript
// Test 1: Target present in list
containsWord(["apple", "banana", "cherry"], "banana");
// Expected Output: true

// Test 2: Target absent from list
containsWord(["apple", "banana", "cherry"], "grape");
// Expected Output: false

// Test 3: Edge Case - Empty array
containsWord([], "apple");
// Expected Output: false

// Test 4: Edge Case - Case sensitivity
containsWord(["React", "Node", "Vue"], "react");
// Expected Output: false

// Test 5: Edge Case - Target is empty string
containsWord(["hello", "", "world"], "");
// Expected Output: true

```

---

### **Level 1 (L1) – Job & Candidate Skill Matching**

#### **Problem Description**

You are given two datasets:

1. `employees`: An array of employee objects, where each object contains a `name` (string), `email` (string), and `skills` (array of strings).
2. `jobs`: An array of job vacancy objects, where each object contains a `title` (string), `description` (string), and `requiredSkills` (array of strings).

Write a function `matchJobsWithEmployees` that processes both lists and returns an array of matching results. A candidate matches a job **only if they possess every skill listed in `requiredSkills` for that job** (they may also have extra skills).

#### **Function Signature & Structure**

* **Input Types:**
* `employees: Array<{ name: string, email: string, skills: string[] }>`
* `jobs: Array<{ title: string, description: string, requiredSkills: string[] }>`


* **Return Type:**
* `Array<{ title: string, matchingEmployees: string[] }>`


* **Constraints:**
* If a job has no required skills (`requiredSkills = []`), all employees match.
* If no employees match a job, return an empty array for `matchingEmployees`.



#### **Test Examples**

```javascript
// Sample Datasets
const sampleEmployees = [
  { name: "Alice", email: "alice@dev.com", skills: ["JavaScript", "React", "Node.js"] },
  { name: "Bob", email: "bob@dev.com", skills: ["Python", "SQL"] },
  { name: "Charlie", email: "charlie@dev.com", skills: ["JavaScript", "React", "Node.js", "TypeScript", "SQL"] },
  { name: "Diana", email: "diana@dev.com", skills: [] }
];

const sampleJobs = [
  { title: "Frontend Engineer", description: "Build React UIs", requiredSkills: ["JavaScript", "React"] },
  { title: "Fullstack Engineer", description: "Node + React + TS", requiredSkills: ["JavaScript", "Node.js", "TypeScript"] },
  { title: "Data Analyst", description: "SQL reporting", requiredSkills: ["SQL"] },
  { title: "DevOps Engineer", description: "Cloud infrastructure", requiredSkills: ["Docker", "Kubernetes"] },
  { title: "General Intern", description: "Entry level position", requiredSkills: [] }
];

// Execute Match
matchJobsWithEmployees(sampleEmployees, sampleJobs);

```

#### **Expected Test Output**

```json
[
  {
    "title": "Frontend Engineer",
    "matchingEmployees": ["Alice", "Charlie"]
  },
  {
    "title": "Fullstack Engineer",
    "matchingEmployees": ["Charlie"]
  },
  {
    "title": "Data Analyst",
    "matchingEmployees": ["Bob", "Charlie"]
  },
  {
    "title": "DevOps Engineer",
    "matchingEmployees": []
  },
  {
    "title": "General Intern",
    "matchingEmployees": ["Alice", "Bob", "Charlie", "Diana"]
  }
]

```
### Level 2 (L2) – Candidate Skill Gap Analysis
Write a function `analyzeSkillGaps` that takes two arguments:
1. `employees`: An array of employee objects, where each object contains a `name` (string), `email` (string), and `skills` (array of strings).
2. `jobs`: An array of job vacancy objects, where each object contains a `title (string), `description` (string), and `requiredSkills` (array of strings).
3. The function should return an array of objects, where each object represents a job and contains the following properties:
* `title`: The title of the job.
* `missingSkills`: An array of objects, where each object represents an employee who does not possess all the required skills for the job. Each object should contain:
  * `name`: The name of the employee.
  * `missingSkills`: An array of strings representing the skills that the employee is missing for the job.
  * **Constraints:**
* If a job has no required skills (`requiredSkills = []`), all employees are considered to have no missing skills.
* If an employee possesses all the required skills for a job, they should not be included in the `missingSkills` array for that job.
* If no employees are missing skills for a job, the `missingSkills` array for that job should be empty.
* **Test Examples**

```javascript
// Sample Datasets
const sampleEmployees = [
  { name: "Alice", email: "alice@dev.com", skills: ["JavaScript", "React", "Node.js"] },
  { name: "Bob", email: "bob@dev.com", skills: ["Python", "SQL"] },
  { name: "Charlie", email: "charlie@dev.com", skills: ["JavaScript", "React", "Node.js", "TypeScript", "SQL"] },
  { name: "Diana", email: "diana@dev.com", skills: [] }
];

const sampleJobs = [
  { title: "Frontend Engineer", description: "Build React UIs", requiredSkills: ["JavaScript", "React"] },
  { title: "Fullstack Engineer", description: "Node + React + TS", requiredSkills: ["JavaScript", "Node.js", "TypeScript"] },
  { title: "Data Analyst", description: "SQL reporting", requiredSkills: ["SQL"] },
  { title: "DevOps Engineer", description: "Cloud infrastructure", requiredSkills: ["Docker", "Kubernetes"] },
  { title: "General Intern", description: "Entry level position", requiredSkills: [] }
];

// Execute Skill Gap Analysis
analyzeSkillGaps(sampleEmployees, sampleJobs);
```
#### **Expected Test Output**

```json
[
  {
    "title": "Frontend Engineer",
    "missingSkills": [
      { "name": "Bob", "missingSkills": ["JavaScript", "React"] },
      { "name": "Diana", "missingSkills": ["JavaScript", "React"] }
    ]
  },
  {
    "title": "Fullstack Engineer",
    "missingSkills": [
      { "name": "Alice", "missingSkills": ["TypeScript"] },
      { "name": "Bob", "missingSkills": ["JavaScript", "Node.js", "TypeScript"] },
      { "name": "Diana", "missingSkills": ["JavaScript", "Node.js", "TypeScript"] }
    ]
  },
  {
    "title": "Data Analyst",
    "missingSkills": [
      { "name": "Alice", "missingSkills": ["SQL"] },
      { "name": "Diana", "missingSkills": ["SQL"] }
    ]
  },
  {
    "title": "DevOps Engineer",
    "missingSkills": [
      { "name": "Alice", "missingSkills": ["Docker", "Kubernetes"] },
      { "name": "Bob", "missingSkills": ["Docker", "Kubernetes"] },
      { "name": "Charlie", "missingSkills": ["Docker", "Kubernetes"] },
      { "name": "Diana", "missingSkills": ["Docker", "Kubernetes"] }
    ]
  },
  {
    "title": "General Intern",
    "missingSkills": []
  }
]
```
