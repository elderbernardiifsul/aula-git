/**
 * Este vai ser o nosso arquivo de scripts.

 */

/**
 *  ** Fazer um get na API para buscar um objeto. **
 *  - Criar var para guardar o resultado;
 *  - criar uma funcao para fazer o trabalho;
 *    - fazer a requisicao para a API;
 *    - verificar se a resposta foi bem sucedida;
 *      - se sim, guardar o resultado na var;
 */

let resultado;

//chamada para a funcao de GET
alert('Fazendo um GET na API');

resultado = buscarDispositivos();
alert('DADOS VINDOS DA FUNCAO: ' + resultado);
alert(`Dados vindos da API ${resultado}`);

const divResultado = document.getElementById('resultado');
divResultado.textContent = `Dados vindos da API: ${JSON.stringify(resultado)}`; 

/* Funcao faz GET para /objects e retorn o JSON como resultado */
async function buscarDispositivos(){
    try { //vou tentar fazer o que esta ente {}
        const resposta = await fetch('https://api.restful-api.dev/objects');
        let dados = await resposta.json();
        alert(JSON.stringify(dados));
        return dados;   
    } catch (error) { //se acaso der erro, vai executar isso
        console.error('Erro ao buscar dispositivos:', error);
        return {};
    }
}
