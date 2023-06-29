import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:5000/users");
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
    };

    fetch(`http://localhost:5000/users/${id}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur ${response.status}: ${response.statusText}`);
        }
        // permet de récuperer le body et de le parse seulement il y a un body dans la réponse sinon on retourne un objet vide cela permet de voir en direct la suppresion du user
        return response.text().then((text) => (text ? JSON.parse(text) : {}));
      })
      .then(() => {
        fetchUsers();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="px-4 py-2">
      {users.map((user) => (
        <div key={user.id} className="bg-white p-4 rounded-lg shadow mb-4">
          <h2 className="font-bold text-lg mb-2">
            {user.firstname} {user.lastname}
          </h2>
          <p>{user.email}</p>
          <button
            type="button"
            // onClick={() => handleEdit(user.id)} //// A FAIRE
            className="mt-2 mr-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Modifier
          </button>
          <button
            type="button"
            onClick={() => handleDelete(user.id)}
            className="mt-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Supprimer
          </button>
        </div>
      ))}
      <NavLink
        to="/admin/create-user"
        className=" right-6 bottom-6 bg-blue-500 text-white p-4 rounded-full shadow hover:bg-blue-700 transition"
      >
        Créer un utilisateur
      </NavLink>
    </div>
  );
}

export default App;
