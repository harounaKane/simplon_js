import "./App.css";
import Utilisateur from "./components/Utilisateur";

function App() {
  const users = [
    { id: 4, nom: "Toto", age: "20", prof: "pilote", ville: "Aix" },
    { id: 2, nom: "Tata", age: "40", prof: "Professeur", ville: "Nice" },
    { id: 3, nom: "Toto", age: "30", prof: "Etudiant", ville: "Avignon" },
  ];

  return (
    <>
      <ul>
        {users.map((user) => (
          <Utilisateur key={user.id} {...user} />
        ))}
      </ul>
    </>
  );
}

export default App;
