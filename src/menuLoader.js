import lobsterImage from './lobster.jpg'

class menuLoader {
    
    static loadPage() {
        let contents = `
        <div class="article">
            <h2>Menu</h2>
            <h4>Lobster</h4>
            <img src="${lobsterImage}">
            <p>
                Extremely good lobster dipped in a mysterious yellow sauce. Also there's corn on the cob for some reason.
            </p>
        </div>`

        let content = document.getElementById('content')
        content.innerHTML = contents
    }

}

export {menuLoader}