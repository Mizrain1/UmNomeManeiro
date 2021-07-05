window.onload=function(){

const html = document.querySelector("html")
const checkbox = document.querySelector("#darkLightMode[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

//escrever o nome das var css no mesmo padrão
const initialColors = {
    bgBody: getStyle(html, "--bg-body"),
    bgHf: getStyle(html, "--bg-hf"),
    bgConteudo: getStyle(html, "--bg-conteudo"),
    colorFont: getStyle(html, "--color-font"),
    colorfontRgba: getStyle(html, "--colorfont-rgba"),
    colorfontConteudo: getStyle(html, "--colorfont-conteudo"),
    colorLogo: getStyle(html, "--color-logo"),
    colortoggleMenu: getStyle(html, "--colortoggle-menu")
}

//cores no dark mode
const darkMode = {
    bgBody: "#333333",
    bgHf: "#616161",
    bgConteudo: "#757575",
    colorFont: "#FFF",
    colorfontConteudo: "#FFF",
    colorLogo: "#eeeeee",
    colortoggleMenu: "#fff"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})

//-------------- LOCAL STORAGE

const isExistLocalStorage = (key) => 
  localStorage.getItem(key) != null

const createOrEditLocalStorage = (key, value) => 
  localStorage.setItem(key, JSON.stringify(value))

const getValeuLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key))

checkbox.addEventListener("change", ({target}) => {
  if (target.checked) {
    changeColors(darkMode) 
    createOrEditLocalStorage('modo','darkMode')
  } else {
    changeColors(initialColors)
    createOrEditLocalStorage('modo','initialColors')
  }
})

if(!isExistLocalStorage('modo'))
  createOrEditLocalStorage('modo', 'initialColors')


if (getValeuLocalStorage('modo') === "initialColors") {
  checkbox.removeAttribute('checked')
  changeColors(initialColors);
} else {
  checkbox.setAttribute('checked', "")
  changeColors(darkMode);
}

}