
import './style.css'
import { mainLoader} from "./mainLoader"
import { menuLoader } from "./menuLoader"

const tabs = [...document.getElementsByClassName('tab')]

for (const tab in tabs) {
    let thisTab = tabs[tab]
    thisTab.onclick = () => {
        const focus = document.getElementsByClassName('focus')[0]
        focus.classList.remove('focus')

        thisTab.classList.add('focus')
    }
}

menuLoader.loadPage()