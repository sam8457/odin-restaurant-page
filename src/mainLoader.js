import salmon from './salmon.jpg'

class mainLoader {
    
    static loadPage() {
        let contents = `
        <div class="article">
            <h2 style="margin-bottom: 1rem;">Welcome</h2>
            <img src="${salmon}" alt="">
            <p>
                Some text about how the restaurant is good. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Semper auctor neque vitae tempus quam. Morbi tincidunt augue interdum velit euismod. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet.
            </p>
        </div>`

        let content = document.getElementById('content')
        content.innerHTML = contents
    }

}

export {mainLoader}
