class App {
    constructor() {
        this.photographersSection = document.querySelector('.photographer_section');

    }

    async photographerCard() {
        const data = await Api.get('/data/photographers.json')
        let content = "";

        data.photographers.forEach(photographer => {
            const Template = new Photographer(photographer)
            content += Template.createPhotographerCard();
        });

        this.photographersSection.insertAdjacentHTML("afterbegin", content);
    }
}

const app = new App()
app.photographerCard()

