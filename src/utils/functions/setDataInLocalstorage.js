export const setDataInLocalstorage = (data) => {
  localStorage.setItem("Cards", JSON.stringify(data))
  alert("Les cartes sont enregistées.")
}