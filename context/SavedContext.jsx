import { createContext, useState, useContext } from "react";

const SavedContext = createContext();

export function SavedProvider({ children }) {
  const [saved, setSaved] = useState([]);

  const addToSaved = (item) => setSaved((prev) => [...prev, item]);
  const removeFromSaved = (name) =>
    setSaved((prev) => prev.filter((i) => i.name !== name));
  const clearSaved = () => setSaved([]);

  return (
    <SavedContext.Provider value={{ saved, addToSaved, removeFromSaved, clearSaved }}>
      {children}
    </SavedContext.Provider>
  );
}

export function useSaved() {
  return useContext(SavedContext);
}