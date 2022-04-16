
class supportLoader {
    
    static loadPage() {
        let contents = `
        <div class="article">
            <h2>FAQ:</h2>
            <h4>Q: Why don't you serve the salmon on the homepage?</h4>
            <p>
                A: <em>Fuck</em> you that's why.
            </p>
            <h4>Q: Why do you have so many health code violations?</h4>
            <p>
                A: We treat the healthcode as a checklist.
            </p>
            <h4>Q: Will you ever add crab to your menu?</h4>
            <p>
                A: You ever had crabs? Very itchy. I don't recommend.
            </p>
            <h4>Q: Did you know your clam chowder is titled clam choder?</h4>
            <p>
                A: Fixed.
            </p>
            <h4>Q: What do you think about the situation in Ukrane?</h4>
            <p>
                A: Putin cringe.
            </p>
        </div>
        `

        let content = document.getElementById('content')
        content.innerHTML = contents
    }

}

export {supportLoader}