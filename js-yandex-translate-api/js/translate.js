function Translate(api, word, language) {

    this.api = api;
    this.word = word;
    this.language = language;

    this.xhr = new XMLHttpRequest();
}

Translate.prototype.TranslateWord = function (callback) {

    const endPoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.api}&text=${this.word}&lang=${this.language}`;

    this.xhr.open('GET', endPoint);

    this.xhr.onload = function () {
        if (this.status == 200) {
            callback(null,JSON.parse(this.responseText).text[0])
        }
        else {
            console.log("ops!",null);
        }
    }

    this.xhr.send();

}