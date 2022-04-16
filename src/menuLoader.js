import lobsterImage from './lobster.jpg'
import clamChowderImage from './clamChowder.jpg'
import shrimpImage from './shrimp.jpg'
import shrimpAndSushi from './shrimpAndSushi.jpg'

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
            <h4>Clam Chowder</h4>
            <img src="${clamChowderImage}">
            <p>
                Honestly not that great TBH. Sprinked with some weeds I found in my backyard.
            </p>
            <h4>Grilled Shrimp</h4>
            <img src="${shrimpImage}">
            <p>
                Extremely good lobster dipped in a mysterious yellow sauce. Also there's corn on the cob for some reason.
            </p>
            <h4>Shrimp & Sushi Meal</h4>
            <img src="${shrimpAndSushi}">
            <p>
                Extremely good lobster dipped in a mysterious yellow sauce. Also there's corn on the cob for some reason.
            </p>
        </div>
        `

        let content = document.getElementById('content')
        content.innerHTML = contents
    }

}

export {menuLoader}