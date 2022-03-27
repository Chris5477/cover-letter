export const setDataInLocalstorage = (data) => {
   localStorage.setItem("Cards", JSON.stringify(data))
}