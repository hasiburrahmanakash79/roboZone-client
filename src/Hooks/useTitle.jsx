import { useEffect } from "react";

const useTitle = (title) => {
    return (
        useEffect(()=>{
            document.title =`${title} | robotWorld`
           },[title])
    );
};

export default useTitle;