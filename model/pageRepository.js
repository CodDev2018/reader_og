class PageRepository  {
    constructor () {
        this.pageList = []
    }

    exists(url) {
        return this.pageList.some(page => page.url === url)
    }

    save(page) {
        console.log(page);
        if (this.exists(page.url)) {
            return false
        }

        this.pageList.push(page)
        return true
    }

    saveAll(pages) {
        pages.forEach(page => {
            this.save(page)
        });
    }
}


module.exports = new PageRepository()