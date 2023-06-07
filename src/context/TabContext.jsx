import { createContext, useState } from "react";

export const TabContext = createContext()

export const TabProvider = ({children}) => {
    const [pageNumber, setPageNumber] = useState(1);
    const [show, setShow] = useState(false);

    const handlePageNumber = (id) => {
      setPageNumber(id)
      setShow(false)
      window.scrollTo(0, 0);
  };

    return (
        <TabContext.Provider value={{pageNumber,setPageNumber,handlePageNumber,show,setShow}}>
            {children}
        </TabContext.Provider>
    )
}