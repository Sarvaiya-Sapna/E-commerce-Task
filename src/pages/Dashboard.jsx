import { useEffect, useState } from "react";
import { userData } from "../../public/users.json"

const Dashboard = () => {
    const [users, setUsers] = useState(userData);
    const [search, setSearch] = useState("");

    useEffect(() => {
        setUsers(userData);
    }, []);

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const searchUser = (e) => {
        setSearch(e.target.value); // typo fixed
    };

    const filterUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Admin Dashboard</h1>

            <input
                type="text"
                className="dashboard-search"
                placeholder="Search here..."
                value={search}
                onChange={searchUser}
            />

            <table className="dashboard-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filterUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                {user.role === "Admin" ? (
                                    <span style={{ color: "#9ca3af" }}></span>
                                ) : (
                                    <button className="delete-btn" onClick={() => deleteUser(user.id)}>
                                        Delete
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;