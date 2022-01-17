class LikesCounter {
    constructor() {
        this._allLikes = document.querySelectorAll('.likes')
        this._count = 0
        this._$likesCounter = document.querySelector('.likes-counter')
    }

    getLikes(){
        this._allLikes.forEach(like => {
            let oneLike = Number(like)
            this._count += oneLike
        });
        return this._count
    }

    update(action) {
        if (action === 'INC') {
            this._count += 1
        } else if (action === 'DEC') {
            this._count -= 1
        } else {
            throw 'erreur'
        }

        this._$likesCounter.innerHTML = this._count
    }

}