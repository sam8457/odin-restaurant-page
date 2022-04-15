
import { pageLoader } from "./pageLoader"

console.log(document.getElementById('hello'))

let content = document.getElementById('content')
console.log(content)
pageLoader.loadPage(content)
