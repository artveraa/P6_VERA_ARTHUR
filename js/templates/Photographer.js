class Photographer {
    constructor(photographerJson) {
        this._name = photographerJson.name
        this._id = photographerJson.id
        this._city = photographerJson.city
        this._country = photographerJson.country
        this._tagline = photographerJson.tagline
        this._price = photographerJson.price
        this._portrait = photographerJson.portrait
    }

    createPhotographerCard() {
        return `
        <article class="photographer">
            <a href="./photographer.html?id=${this._id}">
            <img src="../../assets/Photographers%20ID%20Photos/${this._portrait}" alt="${this._name}">
            <h2 class="photographer-name"><a href="#">${this._name}</a></h2>
            <p class="photographer-location">${this._city}, ${this._country}</p>
            <p class="photographer-tagline">${this._tagline}</p>
            <p class="photographer-price">${this._price}€/jour</p>
            </a>
       </article>
        `
    }

    createPhotographerDetail() {
        return `
        <article class="photograph-header">
                <div class='photographer-infos'>
                    <h2>${this._name}</h2>
                    <p class="photographer-city">${this._city}, ${this._country}</p>
                    <p class="photographer-tagline">${this._tagline}</p>
                </div>
                <button class="contact_button" title='Contact Me'>Contactez-moi</button>
                <div class="img-container">
                
                <img src="../../assets/Photographers%20ID%20Photos/${this._portrait}" alt="${this._name}">
                </div>
            </article>
        `
    }

    createPhotographerGallery(){
        
    }
}