var g = G$('John','Doe')
g.greet().setLang('es').greet(true).log();

$('#login').click(function(){
    //create the login greeter
    var loginGreeter = G$('John','Doe');
    //hide the div showing the dropdown
    $('#logindiv').hide();
    //select the language
    var language = $('#lang').val();
    //set the language and then show the HTML greeting by passing in the selector
    loginGreeter.setLang(language).HTMLGreeting('#greeting',true).log()
})