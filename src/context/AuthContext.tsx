// import React, { createContext, useState, ReactNode, useEffect } from "react";
// import jwt_decode from "jwt-decode";
// import axios from "axios";

// type AccessTokensType = {
//   access: string | undefined;
//   refresh: string | undefined;
// };

// interface CurrentUserContextType {
//   authTokens: AccessTokensType;
//   setAuthTokens: React.Dispatch<React.SetStateAction<AccessTokensType>>;
//   user: string | undefined;
//   setUser: React.Dispatch<React.SetStateAction<string | undefined>>;
//   loading: boolean;
//   setLoading: React.Dispatch<React.SetStateAction<boolean>>;
//   callLogout: () => void;
// }

// interface Props {
//   children: ReactNode;
// }

// export const AuthContext = createContext<CurrentUserContextType>(
//   {} as CurrentUserContextType
// );

// const AuthProvider: React.FC<Props> = ({ children }) => {
//   let [authTokens, setAuthTokens] = useState<AccessTokensType>(() =>
//     localStorage.getItem("authTokens")
//       ? JSON.parse(localStorage.getItem("authTokens") || "")
//       : undefined
//   );

//   let [user, setUser] = useState<string | undefined>(() =>
//     localStorage.getItem("authTokens")
//       ? jwt_decode(localStorage.getItem("authTokens") || "")
//       : undefined
//   );

//   let [loading, setLoading] = useState<boolean>(false);
// }

// export default AuthProvider;

// return (
//   <AuthContext.Provider
//     value={{
//       setAuthTokens,
//       authTokens,
//       setLoading,
//       loading,
//       callLogout,
//       user,
//       setUser
//     }}
//   >
//     {loading ? children : null}
//   </AuthContext.Provider>
// );