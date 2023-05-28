
document.getElementById('btPesquisarCep')
    .addEventListener('click', function consultarCep() {

        let inCep = document.getElementById("inCep");
        let cep = inCep.value;

        if (cep.length != 8) {
            alert('Digite um CEP valido..');
            inCep.focus();
            return;
        }

        let urlApi = `https://viacep.com.br/ws/${cep}/json/`;


        fetch(urlApi).then(function (response) {
            response.json().then(mostrarEndereco);
        })

    })

function mostrarEndereco(dados) {
    let respostaCep = document.querySelector('.respostaCep');

    if (dados.erro) {
        respostaCep.innerHTML = `Não foi possivel loaclizar o endereço..`
    } else {
        respostaCep.innerHTML = `<p>${dados.logradouro}</p>
                                <p>${dados.bairro}</p>
                                <p>${dados.localidade} - ${dados.uf}</p>
                                <p>DDD - ${dados.ddd}</p>`;

    }
}


