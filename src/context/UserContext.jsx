// import  { createContext, useState, useEffect, useContext } from 'react';
// import { jwtDecode } from "jwt-decode";
// import LoginAPI from '../APIs/BookingSiteAPI/LoginAPi';
// const UserContext = createContext(null);

// export const UserProvider = ({ children }) => 
// {



//   const [user, setUser] = useState(() => {
//     // Check if the user is already available in localStorage
//     const token = localStorage.getItem('token');
//     if (token) {
//       const decodedToken = jwtDecode(token);
//       return {
//         username: decodedToken.sub,
//         userId: decodedToken.userId,
//         role: decodedToken.roles[0],
//       };
//     }
//     // If user data isn't available, return default initial state
//     return {
//       username: '',
//       userId: 0,
//       role: '',
//     };
//   });



  

//   // useEffect(() => {
//   //   const token = localStorage.getItem('token');
//   //   if (token) {
//   //     try {
//   //       // Decode the token
//   //       const decodedToken = jwtDecode(token);
//   //       console.log(decodedToken);

//   //       // Extract user data from decoded token and set the user state
//   //       setUser({
//   //         ...user,
//   //         username: decodedToken.sub,
//   //         userId: decodedToken.userId,
//   //         role: decodedToken.roles[0]
//   //       });
//   //       console.log(user);
//   //     } catch (error) {
//   //       console.error('Error decoding token:', error);
//   //     }
//   //   }
    
//   // }, []);

  

//   async function login(username, password) 
//   {
//     try {
//       const response = await LoginAPI.login(username, password);
//       if (response.ok) 
//       {
//         const jwtToken = (await response.json()).accessToken;
//         localStorage.setItem('token', jwtToken);
        
  
//         const decodedToken = jwtDecode(jwtToken);
//         console.log(decodedToken);
  
//         setUser({
//           ...user,
//           username: decodedToken.sub,
//           userId: decodedToken.userId,
//           role: decodedToken.roles[0],
//         });
  
//         return 'success';
//       } 
//       else 
//       {
//         return 'fail';
//       }
//     } catch (error) {
//       console.error('Login failed:', error);
//       return 'fail';
//     }
//   }

//   async function logOut()
//   {
//     //remove the token
//     localStorage.removeItem('token');
    
//     //set user to initial value
//     setUser({
//       ...user,
//       username: '',
//       userId: 0,
//       role: ''

//     });

//   }

//   return (
//     <UserContext.Provider value={{user, login, logOut}}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = ()=>
// {
//   return useContext(UserContext);
// }