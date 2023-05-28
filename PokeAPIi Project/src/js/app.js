const url = `https://pokeapi.co/api/v2/pokemon/`
let linkImgPokemon = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{IDIMAGE}.png';

let nomes = [];

document.getElementById('btSubmit').addEventListener('click', function pesquisar() {
    let input = document.querySelector('.search-input');

    if (validacaoInput(input.value) == 'vazia') {
        alert('Prreecnha o campo corretamente..')
    } else {
        //coloca o nome em minusculo
        let nomeAjustado = input.value.toLowerCase();
        //obtém a img do item
        let link = url + nomeAjustado;

        fetch(link).then(response => {
            if(verificaErros(response.status)){
                alert(verificaErros(response.status));
            }else{
                return response.json()
            }
        })
            //var que contem todo o JSON como uma Array de Objetos
            .then(pokemon => {
                console.log(pokemon);
                verificarCard(pokemon, pokemon.id, nomeAjustado)
            })
    }

})

function criarElementos(p, d) {
    let subContainer = document.getElementById('subContainer');
    let card = document.createElement('div');
    card.class

    subContainer.appendChild(card);
    card.setAttribute('class', 'card');


    //elementos
    let title = document.createElement('h1')
    let phHeight = document.createElement('p')
    let pWeight = document.createElement('p')
    let abilities = document.createElement('p');

    //divs que vão armazenar os itens
    let imgPoke = document.createElement('img')
    let imgContainer = document.createElement('div')

    //conteúdo dos elementos
    imgPoke.src = d;
    imgContainer.setAttribute('class', 'container-img')

    let txtTitle = document.createTextNode('Nome:' + p.name);
    let txtHeight = document.createTextNode('Height:' + p.height);
    let txtWeight = document.createTextNode('Weight:' + p.weight);
    let txtabilities = document.createTextNode('Abilities:' + p.abilities); //caminho esta errado

    imgContainer.appendChild(imgPoke);

    card.appendChild(imgContainer);
    card.appendChild(title);
    title.appendChild(txtTitle);
    card.appendChild(phHeight);
    phHeight.appendChild(txtHeight);
    card.appendChild(pWeight);
    pWeight.appendChild(txtWeight);
    card.appendChild(abilities);
    abilities.appendChild(txtabilities);

}


let validacaoInput = function (y) {
    if (y == '') {
        return 'vazia';
    } else {
        return 'semErro';
    }
}

function verificarCard(p, i, n) {
    let contemValor = nomes.indexOf(n);
    //se o item ainda ão tiver sido adicionado
    if (contemValor == -1) {
        let definindoImg = linkImgPokemon.replace('{IDIMAGE}', i)
        criarElementos(p, definindoImg);
        nomes.push(n);
        console.log(n);
        console.log(nomes);
    } else {
        //se o item já tiver sido adicionado
        alert('Card já adicionado, selecione outro');
    }
}

let verificaErros = function (s) {
    if (s == 404) {
        console.log('Erro');
        return 'Item não encontrado, digite outro';
    }else{
        console.log('Operação sem erros');
    }
}
/*
let onis = [
    {
        demon: "Lua Superior 9",
        power: 904,
        abilites: "Fire"
    },
    {
        demon: "Lua Superior 8",
        power: 1068,
        abilites: "Fire"
    },
    {
        demon: "Lua Superior 7",
        power: 1427,
        abilites: "Fire"
    },
    {
        demon: "Lua Superior 6",
        power: 1752,
        abilites: "Fire"
    },
    {
        demon: "Lua Superior 5",
        power: 2017,
        abilites: "Fire"
    },
    {
        demon: "Lua Superior 4",
        power: 2687,
        abilites: "Fire"
    },
    {
        demon: "Lua Superior 3",
        power: 2974,
        abilites: "Fire"
  
    },
    {
        demon: "Lua Superior 2",
        power: 3489,
        abilites: "Fire"
    },
    {
        demon: "Lua Superior 1",
        power: 5074,
        abilites: "Fire"
    },
    {
        demon: "Lua Superior Mãe",
        power: 10020,
        abilites: "Fire"
    }
]

console.log("Total de Oni's: " + onis.length);

console.log('Onis com poder superior a 3000 mil:')
for(let i in onis){
    if(onis[i].power > 3000){
    console.log(onis[i].demon);
    }
}
*/


