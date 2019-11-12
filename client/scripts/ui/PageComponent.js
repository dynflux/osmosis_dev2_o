function PageComponent(bind, args) {
    this.activeVideoURL = "https://www.youtube.com/watch?v=xIZQRjkwV9Q";
    this.flashCardsCount = "0 Flashcards";
    this.questionsCount = "0 Questions";
    this.categoryPath = "Cardiovscular > Physiology: Cardiovascular Physiology > Electrocardiography";
    this.title = "ECG Basics";

    this.upNext = [{
        image: "img/upList.png",
        title: "Bload pressure, blood flow, and resistance",
        source: "Osmosis",
        length: 9.43
    }];

    this.relatedVideos = [
        {
            image: "img/1_.jpg",
            title: "Electrocardiography Handwritten",
            source: "Youtube",
            length: 9.43
        },
        {
            image: "img/2_.jpg",
            title: "Electrocardiography Khan Academy",
            source: "Youtube",
            length: 9.43
        }
    ];

    bind(this);
}

/**
 * Searchs given term in project.
 * @param {String} term Search term.
 */
PageComponent.prototype.search = function (term) {
    term = term ? term : $('#txtSearch').val().trim();

    $.ajax({
        url: '/api/search',
        type: 'GET',
        contentType: 'application/json',
        data: JSON.stringify({
            term: term
        }),
        success: function (result) {
            alert(result);
        },
        error: function (err) {
            alert(err);
        }
    });
};

module.exports = PageComponent;