class Detail {
    constructor() {
        let url = new URL(window.location);
        this.photographerId = url.searchParams.get("id");
        this.mainDetails = document.querySelector('#main');
        this.gallerySection = document.querySelector('.gallery');
    }

    async init() {
        const data = await Api.get('/data/photographers.json')
        this.photographer = data.photographers.find((element) => element.id == this.photographerId)
        this.media = data.media.filter((element) => element.photographerId == this.photographerId)
        let header = "";
        let gallery = "";

        const Description = new Photographer(this.photographer)
        header += Description.createPhotographerDetail();



        //

        this.media.forEach(el => {
            let media = new MediaFactory(el);
            gallery += media.createMedia();
        })





        this.mainDetails.insertAdjacentHTML("afterbegin", header)
        this.gallerySection.insertAdjacentHTML("afterbegin", gallery);
    }
}

const detail = new Detail()
detail.init()