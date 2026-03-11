function Utilisateur({ nom, age, prof, ville }) {
  return (
    <>
      <li>
        Nom: {nom}, age: {age}, profession: {prof}, ville: {ville}
      </li>
    </>
  );
}

// function Utilisateur({ user }) {
//   return (
//     <>
//       <li>
//         Nom: {user.nom}, age: {user.age}, profession: {user.prof}, ville:{" "}
//         {user.ville}
//       </li>
//     </>
//   );
// }

export default Utilisateur;
