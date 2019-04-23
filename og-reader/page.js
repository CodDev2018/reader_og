class Page {
    constructor(url, title, image, type, dateTime){
        this.url = url
        this.title =  title
        this.image = image
        this.type = type
        this.dateTime = dateTime
    }

    isValid() {
        return this.title && this.type && this.image && this.url
    }
}

module.exports = Page