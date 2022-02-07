class Detail {
    constructor() {
        let url = new URL(window.location);
        this.photographerId = url.searchParams.get("id");
        this.mainDetails = document.querySelector('#main');
        this.gallerySection = document.querySelector('.gallery');

    }

    displayMedia(media) {
        let gallery = "";
        gallery += media.forEach(el => el.createMedia());
        this.gallerySection.insertAdjacentHTML("afterbegin", gallery);
    }

    async init() {
        const data = await Api.get('/data/photographers.json')
        this.photographer = data.photographers.find((element) => element.id == this.photographerId)
        this.media = data.media.filter((element) => element.photographerId == this.photographerId)
        let header = "";


        const Description = new Photographer(this.photographer)
        header += Description.createPhotographerDetail();


        const filtersSelect = document.querySelector('#filters')

        filtersSelect.addEventListener('change', (e) => {
            if (filtersSelect.selectedIndex === 0) {
                console.log(e.target.value)
                mediaObject.sort(function (a, b) {
                    return b.likes - a.likes
                })
            } else if (filtersSelect.selectedIndex === 1) {
                console.log(e.target.value)
            } else {
                console.log('Veuillez faire un choix')
            }

            this.displayMedia(mediaObject)
        })


        let mediaObject = [];
        this.media.forEach(el => {
            let media = new MediaFactory(el);
            mediaObject.push(media);
        })


        this.photograhInfos = document.querySelector('.photograph-infos')
        this.photograhInfos.innerHTML = new Photographer(this.photographer).photograhInfos();
        this.totalLikes = document.querySelector('.likes-counter')
        this.totalLikes.innerHTML = this.media.map(media => media.likes).reduce((total, value) => total + value)


        this.mainDetails.insertAdjacentHTML("afterbegin", header);
        this.displayMedia(mediaObject)
        Lightbox.init(mediaObject);
        this.likeClick = this.likeClick.bind(this)
        document.querySelectorAll('.like-btn').forEach(like => {
            like.addEventListener('click', this.likeClick, false)
        })

        const contactBtn = document.querySelector('.contact_button')
        const contactModal = document.querySelector('#contact_modal')
        const closeBtn = contactModal.querySelector('img')
        const textInput = contactModal.querySelector('input')
        const err = contactModal.querySelector('.error')
        const submitBtn = contactModal.querySelector('.contact_button')
        const form = document.querySelector('form')
        const formData = document.querySelectorAll(".form-data");

        contactBtn.addEventListener('click', e => {
            contactModal.style.display = 'block';
        })

        closeBtn.addEventListener('click', e => {
            contactModal.style.display = 'none';
        })

        submitBtn.addEventListener('click', e => {
            e.preventDefault()

            formData.forEach(formData => {
                formData.querySelectorAll('input').forEach(input => {
                    const err = input.closest(".form-data").querySelector(".error");
                    if (!input.validity.valid) {

                        err.classList.add('show');

                    } else {

                        err.classList.remove("show");

                    }
                })
            })

        })


    }

    likeClick(e) {
        let likesCounter = e.target.closest('.likes').querySelector('.number-likes')
        likesCounter.innerHTML = parseInt(likesCounter.innerHTML) + 1
        this.totalLikes.innerHTML = parseInt(this.totalLikes.innerHTML) + 1

        e.target.removeEventListener('click', this.likeClick)
    }
}


const detail = new Detail()
detail.init()

