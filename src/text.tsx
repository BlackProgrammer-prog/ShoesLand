// import React, { useState, useEffect } from 'react';
//
// interface User {
//     id: number;
//     name: string;
//     email: string;
// }
//
// const CreateUserWithList: React.FC = () => {
//     const [users, setUsers] = useState<User[]>([]);
//     const [user, setUser] = useState<Omit<User, 'id'>>({ name: '', email: '' });
//     const [shouldFetchUsers, setShouldFetchUsers] = useState<boolean>(true);
//
//     // Fetch users whenever shouldFetchUsers changes
//     useEffect(() => {
//         if (shouldFetchUsers) {
//             const fetchUsers = async () => {
//                 try {
//                     const response = await fetch('http://localhost:3001/users');
//                     if (response.ok) {
//                         const data = await response.json();
//                         setUsers(data);
//                     }
//                 } catch (error) {
//                     console.error('Error fetching users:', error);
//                 } finally {
//                     setShouldFetchUsers(false);
//                 }
//             };
//             fetchUsers();
//         }
//     }, [shouldFetchUsers]);
//
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setUser({ ...user, [e.target.name]: e.target.value });
//     };
//
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:3001/users', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(user),
//             });
//             if (response.ok) {
//                 setUser({ name: '', email: '' });
//                 setShouldFetchUsers(true);
//             }
//         } catch (error) {
//             console.error('Error creating user:', error);
//         }
//     };
//
//     return (
//         <div>
//             <h2>Create User</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="name"
//                     value={user.name}
//                     onChange={handleChange}
//                     placeholder="Name"
//                     required
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     value={user.email}
//                     onChange={handleChange}
//                     placeholder="Email"
//                     required
//                 />
//                 <button type="submit">Submit</button>
//             </form>
//
//             <h2>Users</h2>
//             <ul>
//                 {users.map(user => (
//                     <li key={user.id}>
//                         {user.name} - {user.email}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
//
// export default CreateUserWithList;