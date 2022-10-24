import { createContext, useState } from "react";

export const PopupContext = createContext({});
export const PopupContextProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <PopupContext.Provider value={{ modalVisible, setModalVisible }}>
      {children}
    </PopupContext.Provider>
  );
};
