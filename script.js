const langSelector = document.getElementById('lang-selector')

function onChange() {
    const value = langSelector.value
    localStorage.setItem('language', value)
    window.location.reload()
}
langSelector.onchange = onChange

const textsToChange = document.querySelectorAll('[data-value]')

const changeLanguage = async () => {
    const value = localStorage.getItem('language')
    if (value) {
        document.getElementById('lang-selector').value = value
    }

    const langCode = value.toLowerCase().slice(0, 2)
    const requestJson = await fetch(`./languages/${langCode}.json`)
    const languageFile = await requestJson.json()
    for (text of textsToChange) {
        const value = text.dataset.value
        text.innerHTML = languageFile[value]
    }
}
changeLanguage()
