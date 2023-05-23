import React, { createContext, useState, useEffect } from "react";

interface MyContextType {
  isLoggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  closepopup:boolean;
  setClosepopup: React.Dispatch<React.SetStateAction<boolean>>;
  unitoken:String;
  setUnitoken: React.Dispatch<React.SetStateAction<string>>;
  uniupi:String;
  setUniupi: React.Dispatch<React.SetStateAction<string>>;
}

export const MyContext = createContext<MyContextType | any>(undefined);

export const MyContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [closepopup,setClosepopup] = useState(false)
  const [unitoken,setUnitoken] = useState("")
  const [uniupi,setUniupi] = useState("")


  

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn) {
      setLoggedIn(JSON.parse(storedIsLoggedIn));
    }
    setIsLoading(false); // Set isLoading to false after retrieving the value
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Only update local storage when the initial value is retrieved
      localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    }
  }, [isLoggedIn, isLoading]);

  useEffect(() => {
    // console.log("isLoggedIn", isLoggedIn); // Display the value inside the component
  }, [isLoggedIn]);

  if (isLoading) {
    // Render a loading state until the initial value is retrieved
    return <div>Loading...</div>;
  }

  const contextValue: MyContextType = {
    isLoggedIn,
    setLoggedIn,
    closepopup,
    setClosepopup,
    unitoken,
    setUnitoken,
    uniupi,
    setUniupi,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
