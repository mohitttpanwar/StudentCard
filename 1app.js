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
