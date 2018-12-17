function UI() {

    this.outputImage = document.getElementById('outputImage');
    this.outputLanguage = document.getElementById('outputLanguage');
    this.languageList = document.getElementById('language');
    this.outputWord = document.getElementById('outputWord');

}

UI.prototype.getChanges = function () {

    this.outputLanguage.innerText = this.languageList[this.languageList.selectedIndex].innerHTML;
    this.outputImage.src = `images/${this.languageList[this.languageList.selectedIndex].value}.png`;
    this.outputWord.innerText = "";

}

UI.prototype.getTranslateValue = function(value){
    this.outputWord.innerText = value;
}