export const setDataInLocalstorage = (data, setter) => {
  localStorage.setItem("Cards", JSON.stringify(data))
  setter("success-save")
}