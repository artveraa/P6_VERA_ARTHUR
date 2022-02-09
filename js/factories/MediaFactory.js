class MediaFactory {
    constructor(data) {

        if (data.image) {
            return new Image(data);
        } else if (data.video) {
            return new Video(data)
        } else {
            throw 'format inconnu'
        }
    }
}

class Image {
    constructor(data, LikeSystem) {
        this.src = data.image;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.likes = data.likes;
        this.id = data.id;
        this.date = data.date;
        this.alt = data.alt;

    }

    createMedia() {
        return `
        <article class="media" tabindex="2">
        <figure class="photographer-media" data-id="${this.id}" aria-label="${this.title} closeup view">
            <img src="../../assets/medias/${this.photographerId}/${this.src}" alt="${this.title}"/>
        </figure>
            <footer class="media-infos">
                <div class="figcaption">${this.title}</div>
                <div class="likes"><span class="number-likes" >${this.likes}</span> <i class="like-btn far fa-heart" tabindex="2" aria-label="Ajouter un j'aime"></i></div>
            </footer>
</article>
        
      `
    }

    createLightBoxMedia(){
        return `
        <img src="../../assets/medias/${this.photographerId}/${this.src}" alt="">
        `
    }



}

class Video {
    constructor(data) {
        this.src = data.video;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.likes = data.likes;
        this.id = data.id;
    }

    createMedia() {
        return `
<article class="media">
<figure class="photographer-media" data-id="${this.id}" aria-label="${this.title} closeup view">
            <video controls>
                <source src="../../assets/medias/${this.photographerId}/${this.src}" alt="${this.title}" type="video/mp4" class="video">
            </video>
        </figure>
            <footer class="media-infos">
                <div class="figcaption">${this.title}</div>
                <div class="likes">${this.likes} <i class="like-btn far fa-heart"></i></div>
            </footer>
</article>
        
        `
    }

    createLightBoxMedia(){
        return `
        <video controls>
                <source src="../../assets/medias/${this.photographerId}/${this.src}" type="video/mp4" class="video">
            </video>
        `
    }

}




