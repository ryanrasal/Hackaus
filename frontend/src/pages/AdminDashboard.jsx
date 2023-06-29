import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:5000/users");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = () => {
    if (!selectedUser) return;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
    };

    fetch(`http://localhost:5000/users/${selectedUser.id}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur ${response.status}: ${response.statusText}`);
        }
        // permet de récuperer le body et de le parse seulement il y a un body dans la réponse sinon on retourne un objet vide cela permet de voir en direct la suppresion du user
        return response.text().then((text) => (text ? JSON.parse(text) : {}));
      })
      .then(() => {
        fetchUsers();
        setShowModal(false);
        setSelectedUser(null);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="px-4 pt-7">
      <NavLink
        to="/admin/create-user"
        className="mt-10 bg-[#00ACB0] text-white p-4 rounded-full shadow hover:bg-blue-700 "
      >
        Créer un utilisateur
      </NavLink>
      <div className="md:grid md:grid-cols-3 md:gap-3 mt-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 mt-4 rounded-lg shadow my-4"
          >
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
              onClick={() => {
                setSelectedUser(user);
                setShowModal(true);
              }}
              className="mt-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Supprimer
            </button>

            {showModal && selectedUser && (
              <>
                <div className="justify-center items-center flex overflow-x-hidden mx-10 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-xl text-center font-semibold">
                          Voulez vous vraiment supprimer{" "}
                          {selectedUser.firstname} {selectedUser.lastname} ?
                        </h3>
                        <button
                          type="button"
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => {
                            setShowModal(false);
                            setSelectedUser(null);
                          }}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            setShowModal(false);
                            setSelectedUser(null);
                          }}
                        >
                          Annuler
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={handleDelete}
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black" />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
