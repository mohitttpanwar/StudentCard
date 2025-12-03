import { useState } from "react";

function SimpleForm() {
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleSubmit = () => {
    setSubmittedText(text);
    setText(""); // optional: clears input after submit
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
