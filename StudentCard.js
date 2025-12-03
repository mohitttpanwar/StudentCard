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
