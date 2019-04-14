const PageRepository = {
    pageList: [],
    exists(url) {
        return this.pageList.some(page => page.url === url)
    },
    save(page) {
        console.log(page);
        if (this.exists(page.url)) {
            return false
        }

        this.pageList.push(page)
        console.log(this.pageList.length + ' páginas lidas.')
        return true
    }
}


module.exports = PageRepository