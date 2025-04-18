const listItems = document.querySelectorAll(".programme-list-container ol li");

const pages = [
    "2d-array.html",
    "basicprogrammes.html",
    "dataconversion.html",
    "filehandling.html",
    "functions.html",
    "inheritance.html",
    "oop.html",
    "operator-overloading.html",
    "singledimensionalarray.html",
    "strings.html",
    "virtual-functions.html"
];


listItems.forEach((item,index) => {
  item.addEventListener("click", () => {
    window.location.href=`${pages[index]}`
  })
})