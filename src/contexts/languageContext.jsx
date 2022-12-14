import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

 export const LanguageContext = createContext();

 export default function LanguageProvider({children}){
  const [userLanguage, setUserLanguage] = useState(navigator.language || navigator.userLanguage)
  const [isPortuguese, setIsPortuguese] = useState(userLanguage.includes('pt'))
  
  return(
    <LanguageContext.Provider value={{
      isPortuguese, 
      setIsPortuguese
    }}>
      {children}
    </LanguageContext.Provider>
  )
 }

 export function useLanguageContext(){
  return useContext(LanguageContext)
 }