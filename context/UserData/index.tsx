import { createContext, useState } from "react";

interface userProps {
  username: string;
  changeUsername: Function;
  pfp: string | ArrayBuffer;
  changePfp: Function;
}

const UserContext = createContext<userProps>({
  username: "Username",
  changeUsername: () => {},
  pfp: "Profile Picture",
  changePfp: () => {},
});

interface UserProviderProps {
  children: JSX.Element | JSX.Element[];
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [username, setUsername] = useState<string>("");
  const [pfp, setPfp] = useState<string | ArrayBuffer>("");

  const changeUsername = (str: string) => setUsername(str);
  const changePfp = (str: string | ArrayBuffer) => setPfp(str);

  return (
    <UserContext.Provider value={{ username, changeUsername, pfp, changePfp }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
