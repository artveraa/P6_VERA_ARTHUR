class Lightbox {
    static init(media) {
        const gallerySection = document.querySelector('.gallery')
        const links = Array.from(gallerySection.querySelectorAll('.photographer-media'))
        //const gallery = links.map((link) => link.getAttribute("src"));
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                new Lightbox(e.currentTarget.dataset.id, media)
            })
        })
    }

    constructor(id, media) {
        this.media = media
        this.currentMedia = new Image(this.media.find(el => el.id == id))
        this.element = this.buildDOM()
        document.body.appendChild(this.element)
    }

    buildDOM(){
        const dom = document.createElement('div')
        dom.classList.add('lightbox')
        dom.innerHTML = `
            <button class="lightbox-close">Fermer</button>
            <button class="lightbox-next">Suivant</button>
            <button class="lightbox-prev">Précédent</button>
            <div class="lightbox-container">
                ${this.currentMedia.createLightBoxMedia()}
            </div>
        `
        return dom
    }
}





