
eventListeners();


function eventListeners() {

    document.getElementById('translate-form').addEventListener('submit', TranslateText);
    document.getElementById('language').addEventListener('change', ChangeLanguage);

}


function ChangeLanguage() {
    const ui = new UI();

    ui.getChanges();
    ui.getTranslateValue();
}

function TranslateText(e) {

    e.preventDefault();

    let word = document.getElementById('word').value;
    let language = document.getElementById('language').value;
    let api = 'trnsl.1.1.20181217T121556Z.b928671daa2e9d4f.a3ef77ad565c22115ecf2e5cb35fd92ed38a5224';

    let translate = new Translate(api, word, language);

    translate.TranslateWord(function(err,response){
        if(err==null){
            new UI().getTranslateValue(response);
        }
        else{
            console.error(err);
        }
    });
}