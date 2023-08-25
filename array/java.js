let nomes = [];
let profissoes = [];
let nome = document.getElementById("nome")
let prof = document.getElementById("prof")

function adc(){
    nomes.push(nome.value.toUpperCase());
    profissoes.push(prof.value.toUpperCase());
    console.log(nomes, profissoes);
}
function rmv(){
    let pos = nomes.indexOf(nome.value);
    if(pos !== -1){
        nomes.splice(pos, 1);
        profissoes.splice(pos, 1);

    }
    else{
        console.log("O nome "+nome.value+" não foi encontrado")
    
    }
    console.log(nomes, profissoes);
}

// NomeDaString.ToUpperCase() Converte em maiúsculo