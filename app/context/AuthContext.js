// "use client";

// import { createContext, useContext, useEffect, useState } from "react";

// const AuthContext = createContext(null);

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchUser = async () => {
//     try {
//       const res = await fetch("/api/auth/me");
//       const data = await res.json();
//       setUser(data.user);
//     } catch {
//       setUser(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);



// "use client";

// import { createContext, useContext, useEffect, useState } from "react";

// const AuthContext = createContext(null);

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchUser = async () => {
//     try {
//       const res = await fetch("/api/auth/me");
//       const data = await res.json();
//       setUser(data.user);
//     } catch {
//       setUser(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);








"use client"

import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => setUser(data.user))
      .finally(() => setLoading(false))
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)




// "use client";

// import { createContext, useContext, useEffect, useState } from "react";

// const AuthContext = createContext(null);

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 🔁 Restore admin login OR normal user on refresh
//   useEffect(() => {
//     const admin = localStorage.getItem("dx_admin");

//     if (admin) {
//       setUser(JSON.parse(admin));
//       setLoading(false);
//       return;
//     }

//     // Normal user session (existing logic)
//     fetch("/api/auth/me")
//       .then((res) => res.ok ? res.json() : null)
//       .then((data) => {
//         if (data?.user) setUser(data.user);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   // ✅ Called after successful /admin/login
//   function loginAdmin() {
//     const adminUser = {
//       role: "admin",
//       email: "admin"
//     };

//     setUser(adminUser);
//     localStorage.setItem("dx_admin", JSON.stringify(adminUser));
//   }

//   function logout() {
//     setUser(null);
//     localStorage.removeItem("dx_admin");
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         setUser,
//         loginAdmin,
//         logout,
//         loading,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }
