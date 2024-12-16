// import icon from './assets/output.png';
// import { Button } from 'antd';
// import { LeftOutlined } from '@ant-design/icons';
// import { MailOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
// import './App.css';
// import './index.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
//
// function Login() {
//     const [PasswordVisible, setPasswordVisible] = useState<boolean>(false);
//     const [email, setEmail] = useState<string>('');
//     const [password, setPassword] = useState<string>('');
//     const [emailError, setEmailError] = useState<string>('');
//     const [passwordError, setPasswordError] = useState<string>('');
//     const [users, setUsers] = useState<any>([]); // ذخیره کاربران دریافت شده از JSON Server
//
//     // دریافت اطلاعات کاربران از JSON Server
//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3000/users'); // آدرس JSON Server
//                 setUsers(response.data); // ذخیره کاربران در state
//             } catch (error) {
//                 console.error('خطا در دریافت کاربران:', error);
//             }
//         };
//
//         fetchUsers();
//     }, []);
//
//     // اعتبارسنجی ایمیل
//     const CheckEmail = (email: string): boolean => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     };
//
//     // اعتبارسنجی پسورد
//     const CheckPassword = (password: string): boolean => {
//         const passwordRegex = /[@#$!]/;
//         return passwordRegex.test(password);
//     };
//
//     // مدیریت ارسال فرم
//     const handelSubmit = (event: React.FormEvent) => {
//         event.preventDefault();
//
//         // اعتبارسنجی اولیه
//         if (!CheckEmail(email)) {
//             setEmailError('ایمیل معتبر نیست');
//             return;
//         } else {
//             setEmailError('');
//         }
//
//         if (!CheckPassword(password)) {
//             setPasswordError('پسورد باید حداقل یکی از کاراکترهای @#$! را شامل باشد');
//             return;
//         } else {
//             setPasswordError('');
//         }
//
//         // بررسی ورود موفق
//         const user = users.find((u) => u.email === email && u.password === password);
//
//         if (user) {
//             alert('ورود موفقیت‌آمیز بود!');
//         } else {
//             alert('ایمیل یا رمز عبور اشتباه است');
//         }
//     };
//
//     return (
//         <div>
//             <div className={'h-screen w-full'}>
//                 <div className={'mt-[4px] ml-[4px]'}>
//                     <Button className={'w-[25px] h-[25px]'}>
//                         <LeftOutlined></LeftOutlined>
//                     </Button>
//                 </div>
//                 <div className={'w-[100px] h-[100px] m-auto'}>
//                     <img src={icon} alt={'icon'} />
//                 </div>
//                 <div className={'flex justify-center items-center'}>
//                     <h1 className={'text-center font-bold mt-[10px] text-[27px]'}>Login to Your Account</h1>
//                 </div>
//                 <div className={'flex justify-center items-center w-full'}>
//                     <form className={'w-[80%]'} onSubmit={handelSubmit}>
//                         <label
//                             className={
//                                 'block mt-[10px] w-[340px] focus:outline-none focus-within:ring-2 focus-within:ring-black'
//                             }
//                             style={{ backgroundColor: '#fafafa' }}
//                         >
//                             <MailOutlined></MailOutlined>
//                             <input
//                                 type={'email'}
//                                 placeholder={'Email'}
//                                 style={{ backgroundColor: '#fafafa' }}
//                                 className={'w-[95%] outline-none'}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             ></input>
//                             {emailError && (
//                                 <div>
//                                     <p
//                                         className={'text-center text-red-600 font-bold'}
//                                         style={{ fontSize: 'small' }}
//                                     >
//                                         {emailError}
//                                     </p>
//                                 </div>
//                             )}
//                         </label>
//                         <label
//                             className={
//                                 'block mt-[15px] w-[340px] focus:outline-none focus-within:ring-2 focus-within:ring-black'
//                             }
//                             style={{ backgroundColor: '#fafafa' }}
//                         >
//                             <LockOutlined></LockOutlined>
//                             <input
//                                 type={PasswordVisible ? 'text' : 'password'}
//                                 placeholder={'Password'}style={{ backgroundColor: '#fafafa' }}
//                                 className={'w-[90%] outline-none'}
//                                 onChange={(pas) => setPassword(pas.target.value)}
//                                 maxLength={16}
//                                 minLength={8}
//                             />
//                             <span onClick={() => setPasswordVisible(!PasswordVisible)}>
//                 {PasswordVisible ? <EyeTwoTone></EyeTwoTone> : <EyeInvisibleOutlined></EyeInvisibleOutlined>}
//               </span>
//                             {passwordError && (
//                                 <div>
//                                     <p
//                                         className={'text-center text-red-600 font-bold'}
//                                         style={{ fontSize: 'small' }}
//                                     >
//                                         {passwordError}
//                                     </p>
//                                 </div>
//                             )}
//                         </label>
//                         <label className={'block mt-[15px] w-[340px]'}>
//                             <input type={'checkbox'} />
//                             <p className={'inline'}>Remember me</p>
//                         </label>
//                         <div className={'m-auto flex justify-center items-center w-full'}>
//                             <Button
//                                 style={{ backgroundColor: '#6e7174' }}
//                                 className={'text-white w-[90%] m-auto top-[140px]'}
//                                 htmlType="submit"
//                             >
//                                 Sign in
//                             </Button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default Login;