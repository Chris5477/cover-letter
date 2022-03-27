import Data from "../../components/Data";
import { setDataInLocalstorage } from "./setDataInLocalstorage";

export const removeCard = (e, index, state, setter) => {
	e.stopPropagation();
    state.splice(index,1)
    setDataInLocalstorage(state)
    const data = JSON.parse(localStorage.getItem("Cards"));
    setter(data)
   
};
