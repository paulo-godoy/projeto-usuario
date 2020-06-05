//Essa variavel guarda todos os elementos do object e o for vare todos os elementos dendo da variavel.
var fields = document.querySelectorAll("#form-user-create [name]");
fields.forEach(function(field, index){
    if (field.name == "gender") {
        if (field.checked) {
            console.log("Sim", field);
        }
        
    } else {
        console.log("Não");
    }
    

});