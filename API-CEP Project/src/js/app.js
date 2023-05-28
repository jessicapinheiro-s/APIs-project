
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
        styleComponents ();
    })

function mostrarEndereco(dados) {
    let respostaCep = document.querySelector('.respostaCep');
    
    if (dados.erro) {
        respostaCep.innerHTML = `Não foi possivel loaclizar o endereço..`
    } else {
        respostaCep.innerHTML = `<p><strong>Rua:</strong> ${dados.logradouro}</p>
                                <p><strong>Bairro:</strong> ${dados.bairro}</p>
                                <p><strong>Localidade:</strong> ${dados.localidade} - ${dados.uf}</p>
                                <p><strong>DDD:</strong>  - ${dados.ddd}</p>`;

    }
}

function styleComponents (){
    let containerResp = document.getElementById('container-resp');

    containerResp.style.width = '20%';
    containerResp.style.margin= '15px auto';
    containerResp.style.padding= '15px 20px';
    containerResp.style.borderRadius= '10px';
    containerResp.style.border= '1px solid rgb(231, 231, 231)';
    containerResp.style.boxShadow= '1px 3px 5px 3px rgba(230, 230, 230, 0.473)';

}


