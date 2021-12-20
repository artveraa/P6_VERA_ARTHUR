class Detail {
    constructor() {
        let url = new URL(window.location);
        this.photographerId = url.searchParams.get("id");
        this.mainDetail = document.querySelector('#main');
    }

    async init() {
        const data = await Api.get('/data/photographers.json')
        this.photographer = data.photographers.find((element) => element.id == this.photographerId)
        this.media = data.media.filter((element) => element.photographerId == this.photographerId)
        let content = "";

        const Template = new Photographer(this.photographer)
        content += Template.createPhotographerDetail();

        this.mainDetail.insertAdjacentHTML("afterbegin", content);

        //

        console.log(data.media)

        const image = data.media.forEach(obj => {
            obj.keys(obj).map(media => new MediaFactory(media, 'image'))
        })

        const video = data.media.forEach(obj => {
            obj.keys(obj).map(media => new MediaFactory(media, 'video'))
        })

        const allMediaTypes = image.concat(video)

        console.log(allMediaTypes)

        allMediaTypes.forEach(media => {
            const Template = new Photographer(media)
            content += Template.createPhotographerDetail()
        })

        this.mainDetail.insertAdjacentHTML("afterbegin", content);

    }
}

const detail = new Detail()
detail.init()