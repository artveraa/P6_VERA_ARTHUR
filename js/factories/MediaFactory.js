class MediaFactory{
    constructor(data, type) {
        const typeImage = data.media.filter(el => el['image'])
        const typeVideo = data.media.filter(el => el['video'])


        if (type === typeImage){
            return new mediaImage(data)
        } else if(type === typeVideo) {
            return new mediaVideo(data)
        } else {
            throw 'format inconnu'
        }
    }
}
