// import React, { useState } from "react";
//
// const App: React.FC = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [passwordError, setPasswordError] = useState("");
//
//     const validateEmail = (email: string): boolean => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     };
//
//     const validatePassword = (password: string): boolean => {
//         const specialCharsRegex = /[@#$!]/;
//         return specialCharsRegex.test(password);
//     };
//
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // let isValid = true;
//
//         // Validate email
//         if (!validateEmail(email)) {
//             setEmailError("ایمیل وارد شده معتبر نیست.");
//             // isValid = false;
//         } else {
//             setEmailError("");
//         }
//
//         // Validate password
//         if (!validatePassword(password)) {
//             setPasswordError("پسورد باید حداقل یکی از کاراکترهای @#$! را شامل باشد.");
//             // isValid = false;
//         } else {
//             setPasswordError("");
//         }
//
//         // if (isValid) {
//         //     alert("اطلاعات معتبر هستند!");
//         // }
//     };
//
//     return (
//         <div style={{ padding: "20px", fontFamily: "Arial" }}>
//             <h2>اعتبارسنجی ایمیل و پسورد</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="email">ایمیل:</label>
//                     <input
//                         type="text"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         style={{ margin: "10px", padding: "5px" }}
//                     />
//                     {emailError && <div style={{ color: "red" }}>{emailError}</div>}
//                 </div>
//                 <div>
//                     <label htmlFor="password">پسورد:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         style={{ margin: "10px", padding: "5px" }}
//                     />
//                     {passwordError && <div style={{ color: "red" }}>{passwordError}</div>}
//                 </div>
//                 <button type="submit" style={{ padding: "10px 15px", marginTop: "10px" }}>
//                     ارسال
//                 </button>
//             </form>
//         </div>
//     );
// };
//
// export default App;