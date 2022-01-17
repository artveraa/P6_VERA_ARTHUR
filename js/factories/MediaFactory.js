class MediaFactory {
    constructor(data) {

        if (data.image) {
            return new Image(data)
        } else if (data.video) {
            return new Video(data)
        } else {
            throw 'format inconnu'
        }
    }
}

class Image {
    constructor(data, LikeSystem) {
        this._src = data.image;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._likes = data.likes;
        this._id = data.id;

        this.likeSystem = LikeSystem

    }

    createMedia() {
        return `
        <figure class="photographer-media" data-id="${this._id}">
            <img src="../../assets/medias/${this._photographerId}/${this._src}" />
            <footer class="media-infos">
                <div class="figcaption">${this._title}</div>
                <div class="likes"><span class="number-likes">${this._likes}</span> <i class="like-btn far fa-heart"></i></div>
            </footer>
        </figure>
      `
    }

    createLightBoxMedia(){
        return `
        <img src="../../assets/medias/${this._photographerId}/${this._src}" alt="">
        `
    }

    likeButton() {

    }
}

class Video {
    constructor(data) {
        this._src = data.video;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._likes = data.likes;
        this.id = data.id;
    }

    createMedia() {
        return `
        <figure class="photographer-media" data-id="${this.id}">
            <video controls>
                <source src="../../assets/medias/${this._photographerId}/${this._src}" type="video/mp4" class="video">
            </video>
            <footer class="media-infos">
                <div class="figcaption">${this._title}</div>
                <div class="likes">${this._likes} <i class="like-btn far fa-heart"></i></div>
            </footer>
        </figure>
        `
    }

}




