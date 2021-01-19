var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];
    
// precisamos de tbody, pois ele recebera a tr que vamos construir

var tbody = document.querySelector('table tbody');
document.querySelector('.form').addEventListener('submit', function(event){
    
    //cancelando a submissão do formulario
    event.preventDefault();

    //substituindo o alert pelo novo codigo
    var tr = document.createElement('tr');

    campos.forEach(function(campo){

    //cria uma td sem informações
    var td = document.createElement('td');

    //atribui o valor do campo a td
    td.textContent = campo.value;

    //adiciona a td na tr
    tr.appendChild(td);
    });

    //nova td que armazena o volume da negociação
    var tdVolume = document.createElement('td');

    //as posições 1 e 2 do array armazena os campos de quantidade
    //e valor, respectivamente
    tdVolume.textContent = campos[1].value * campos[2].value;

    //adicionando a td que faltava a tr
    tr.appendChild(tdVolume);

    //adicionando a tr
    tbody.appendChild(tr);

    //limpa o campo da data
    campos[0].value = '';
    //limpa o campo da quantidade
    campos[1].value = '';
    //limpa o campo do valor
    campos[2].value = '';
    //foca no campo da data
    campos[0].focus();
    
});