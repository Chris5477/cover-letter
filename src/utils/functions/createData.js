export const createData = (name, description, state, method, setterOne, setteurTwo, setterThree) => {
    if (!name || !description) {
        setterThree("error")
    } else {
        method([...state, { name: name, description: description }]);
        setterOne("");
        setteurTwo("");
        setterThree("success-create")
    }
};