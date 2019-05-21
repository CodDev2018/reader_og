class PagesModel {
    getPages(success) {
        fetch("./dados.json")
            .then(response => response.json())
            .then(json => success(json))
            .catch(err => console.error(err))
    }
}