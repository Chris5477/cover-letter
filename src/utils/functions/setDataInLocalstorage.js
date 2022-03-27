export const setDataInLocalstorage = (data) => {
  return localStorage.setItem("Cards", JSON.stringify(data))
}