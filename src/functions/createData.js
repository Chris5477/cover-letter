export const createData = (name, description, state, method, setterOne, setteurTwo) => {
    if (!name || !description) {
        alert("Impossible de créer une donnée si le titre ou la descritpion est manquante.");
    } else {
        method([...state, { name: name, description: description }]);
        setterOne("");
        setteurTwo("");
    }
};