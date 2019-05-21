class PagesView {
    printPage(page) {
        const template = `<div class="card">
                            <img class="card-img-top" src="${page.image}" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">${page.title}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                    the card's content.</p>
                                <a href="${page.url}" class="btn btn-primary" target="_blank">Saiba mais</a>
                            </div>
                        </div>`

        const div = document.createElement('div')
        div.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3")
        div.innerHTML = template
        return div
    }

    printAllPages(selector, pages) {
        const container = document.querySelector(selector)
        pages.forEach(page => {
            const pageHtml = this.printPage(page)
            container.appendChild(pageHtml)
        })
    }

}