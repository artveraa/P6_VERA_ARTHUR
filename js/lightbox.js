class Lightbox {
    static init(media) {
        const gallerySection = document.querySelector('.gallery')
        const links = Array.from(gallerySection.querySelectorAll('.photographer-media'))
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                new Lightbox(e.currentTarget.dataset.id, media)
            })
        })
    }

    constructor(id, media) {
        this.media = media
        this.currentMedia = this.media.find(el => el.id == id)
        //this.loadImage(url)
        this.element = this.buildDOM()
        this.onKeyUp = this.onKeyUp.bind(this)
        document.body.appendChild(this.element)
        document.addEventListener('keyup', this.onKeyUp.bind(this))
    }


    onKeyUp(e) {
        if (e.key === 'Escape') {
            this.close(e)
        }

        if (e.key === 'ArrowRight') {
            this.next(e)
        }

        if (e.key === 'ArrowLeft') {
            this.prev(e)
        }


    }

    close(e) {
        e.preventDefault()
        this.element.classList.add('fadeOut')
        window.setTimeout(() => {
            this.element.remove()
        }, 500)
    }

    next(e) {
        e.preventDefault()
        let index = this.media.findIndex(el => el.id == this.currentMedia.id)
        if (index === this.media.length - 1){
            this.currentMedia = this.media[0]
        } else {
            this.currentMedia = this.media[index + 1]
        }
        this.element.querySelector('.lightbox-container').innerHTML = this.currentMedia.createLightBoxMedia()
    }

    prev(e) {
        e.preventDefault()
        let index = this.media.findIndex(el => el.id == this.currentMedia.id)
        if (index === 0){
            this.currentMedia = this.media[this.media.length - 1]
        } else {
            this.currentMedia = this.media[index - 1]
        }
        this.element.querySelector('.lightbox-container').innerHTML = this.currentMedia.createLightBoxMedia()
    }


    buildDOM() {

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
        dom.querySelector('.lightbox-close').addEventListener('click', this.close.bind(this))
        dom.querySelector('.lightbox-next').addEventListener('click', this.next.bind(this))
        dom.querySelector('.lightbox-prev').addEventListener('click', this.prev.bind(this))
        return dom
    }
}





