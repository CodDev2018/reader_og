class PagesController {
    constructor(model, view) {
        this.model = model
        this.view = view
    }

    init(selector) {
        this.model.getPages(pages => {
            this.view.printAllPages(selector, pages)
        })
    }
}