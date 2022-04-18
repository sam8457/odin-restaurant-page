
import './style.css'
import { mainLoader} from "./mainLoader"
import { menuLoader } from "./menuLoader"
import { supportLoader } from './supportLoader'

const tabs = [...document.getElementsByClassName('tab')]
const pageFunctions = [mainLoader.loadPage, menuLoader.loadPage, supportLoader.loadPage]

for (const tab in tabs) {
    let thisTab = tabs[tab]
    thisTab.onclick = () => {
        const focus = document.getElementsByClassName('focus')[0]
        focus.classList.remove('focus')

        thisTab.classList.add('focus')

        pageFunctions[tab]()
    }
}

mainLoader.loadPage()