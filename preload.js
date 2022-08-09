console.log("### PRELOAD ###")

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded')
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    replaceText('electron-version', process.version('electron'))
    replaceText('nox-version', require('root-require')('package.json').version)
  })