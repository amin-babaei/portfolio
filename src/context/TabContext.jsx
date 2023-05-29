import { createContext, useState } from "react";

export const TabContext = createContext()

export const TabProvider = ({children}) => {
    const [pageNumber, setPageNumber] = useState(1);

    const handlePageNumber = (id) => {
      setPageNumber(id)
      window.scrollTo(0, 0);
  };
  console.log(pageNumber);
    return (
        <TabContext.Provider value={{pageNumber,setPageNumber,handlePageNumber}}>
            {children}
        </TabContext.Provider>
    )
}