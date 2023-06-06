# Calculadora de IMC
### Feito por:
- Dayana Liu
- Matheus Teixeira

# Como foi feito

## Bootstrap
 Os componentes/ferramentas do Bootstrap utilizados foram:
- Cards - mostrar informações/estilizar o input;
- Grids - organizar os componentes;
- Buttons - permitir a interação do usuário;
- Alerts - avisos de input;
- Flex - organizar os componentes;
- Shadow - estilizar os botões;
- Lists - mostrar dados sobre IMC;
- Tipografia - definir estilização dos textos;
- Badges - mostrar o resultado;

## Google Fonts/Icons
- Utilizados para definir uma fonte diferente
- permitir o icon de "info" da página;

## Funcionamento JavaScript
No HTML:
- Durante o input, ele altera de "metros" para "centímetros";

No script.js:
- Função "calcularIMC():
* Recebe altura e massa dos inputs
* Verifica se o input "altura" está em metros ou centímetros
* Calcula o resultado
* Verifica o status dos inputs a partir do resultado, para retornar ao usuário algum erro acontecido. 
* Se os inputs estiverem corretos, chama a função mostrarResultado, que recebe o resultado para mostrar informações;

- Função mostrarResultado:
* Recebe o resultado como parâmetro;
* Verifica se resultado está entre os intervalos dados pelo exercício;
* Estando em alguma das opções, define
    * Top Text - Texto de retorno (Texto em linguagem natural relacionada ao resultado)
    * Categoria - Categoria definida pelo exercício (como sobrepeso e peso saudável)
    * Cor - uma cor de uma escala de cores para indicar a gravidade do resultado (verde para um resultado bom, que vai ficando vermelho conforme seriedade.)
    * Categoria (Cat) - Retorna um número, para indicar na tabela qual foi a categoria que o usuário se encaixa.
* Após estas definições, aplicam os estilos na página
    * Define o TopText;
    * Define a categoria na tabela, e tira o indicador após 15 segundos.
    * Faz o bloco de resultado ficar visível. 

Funcionalidade de teclado:
- Se o usuário apertar "enter", o programa vai "clicar" no botão para mostrar o resultado.
- Foi utilizado a função 'addEventListener' com 'keypress'.