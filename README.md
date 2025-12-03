# StudentCard
# React Props & Forms Practice ⚛️

This project is a beginner-friendly React app that demonstrates:

* Passing and displaying **props**
* Rendering **multiple components**
* Using the **useState hook**
* Handling **form input and submission**

---

## ✅ Tasks Overview

### 🔹 Task 1: StudentCard Component

Create a React component called `StudentCard` that accepts the following props:

* `name`
* `course`
* `score`

Then render **three different StudentCard components** inside `App.js` with different values.

---

### 🔹 Task 2: SimpleForm Component

Create a React component called `SimpleForm` that includes:

* A text input
* A submit button
* A message displaying **"You typed: "** after submission

The input value is stored and displayed using the `useState` hook.

---

## 📂 Project Structure

```
src/
│
├── App.js
├── StudentCard.js
├── SimpleForm.js
└── index.js
```

---

## 🧠 Concepts Used

* React Functional Components
* Props
* JSX
* `useState` Hook
* Event Handling (`onClick`, `onChange`)
* Conditional Rendering
* Component Reusability

---

## 💻 Setup & Installation

### 1️⃣ Install Node.js

Download from:

```
https://nodejs.org
```

---

### 2️⃣ Create a React Project

Using **Vite (recommended)**:

```bash
npm create vite@latest react-props-form
cd react-props-form
npm install
npm run dev
```

Or using **Create React App**:

```bash
npx create-react-app react-props-form
cd react-props-form
npm start
```

---

### 3️⃣ Add the Components

#### ✅ `StudentCard.js`

```js
function StudentCard({ name, course, score }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h2>Name: {name}</h2>
      <p>Course: {course}</p>
      <p>Score: {score}</p>
    </div>
  );
}

export default StudentCard;
```

---

#### ✅ `SimpleForm.js`

```js
import { useState } from "react";

function SimpleForm() {
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleSubmit = () => {
    setSubmittedText(text);
    setText("");
  };

  return (
    <div>
      <h2>Simple Form</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />

      <button onClick={handleSubmit}>Submit</button>

      {submittedText && <p>You typed: {submittedText}</p>}
    </div>
  );
}

export default SimpleForm;
```

---

#### ✅ `App.js`

```js
import StudentCard from "./StudentCard";
import SimpleForm from "./SimpleForm";

function App() {
  return (
    <div>
      <h1>Student Cards</h1>

      <StudentCard name="Alice" course="React" score={90} />
      <StudentCard name="Bob" course="JavaScript" score={85} />
      <StudentCard name="Charlie" course="Python" score={95} />

      <hr />

      <SimpleForm />
    </div>
  );
}

export default App;
```

---

## ✅ Final Output

When the app runs, you will see:

* ✅ Three student cards with different data
* ✅ A text input field
* ✅ A submit button
* ✅ A message showing:
  **"You typed: [your input]"**

---

## 🎯 Learning Outcomes

After completing this project, you understand how to:

* Pass and display **props**
* Reuse components
* Store and update data with `useState`
* Handle form input
* Display submitted data dynamically

---


