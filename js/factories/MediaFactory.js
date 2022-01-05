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
    constructor(data) {
        this._src = data.image;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._likes = data.likes;

    }

    createMedia() {
        return `
        <figure class="photographer-media">
            <img src="../../assets/medias/${this._photographerId}/${this._src}" />
            <footer class="media-infos">
                <div class="figcaption">${this._title}</div>
                <div class="likes">${this._likes}</div>
            </footer>
        </figure>
      `
    }





}

class Video {
    constructor(data) {
        this._src = data.video;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._likes = data.likes;
    }

    createMedia() {
        return `
        <figure class="photographer-media">
            <video controls>
                <source src="../../assets/medias/${this._photographerId}/${this._src}" type="video/mp4" class="video">
            </video>
            <footer class="media-infos">
                <div class="figcaption">${this._title}</div>
                <div class="likes">${this._likes}</div>
            </footer>
        </figure>
        `
    }

}

class LikeUnlike {
    constructor() {
        this._observers = []
    }

    subscribe(observer){
        this._observers.push(observer)
    }

    unsubscribe(observer){
        this._observers = this._observers.filter(obs => obs !== observer)
    }

    fire(productName){
        this._observers.forEach(obs => obs.Like(productName))
    }
}

class Like {
    constructor() {
        this.products = []
    }

    Like(productName){
        console.log(`Le media ${productName} a reçu un like`)
        this.products.push(productName)
    }
}

const likeUnlike = new LikeUnlike()
const like = new Like()

likeUnlike.subscribe(like)




