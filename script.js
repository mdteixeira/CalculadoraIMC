function calcularIMC() {
    let Altura = Number(document.querySelector('#altura').value);
    let Massa = Number(document.querySelector('#massa').value);

    if (Altura > 3) {
        Altura = Altura / 100;
    }

    let resultado = Massa / (Altura * Altura);

    if (Altura < 1 && Massa < 1) {
        erro('inputVazio', '.row');
    } else if (resultado == Infinity) {
        erro('inf', '#cardAltura');
    } else if (resultado == 0) {
        erro('zero', '#cardMassa');
    } else {
        mostrarResultado(resultado);
    }
}

function erro(codigo, campo) {
    let alerta = document.querySelector(`#${codigo}`);
    alerta.style.display = 'block';

    let invalido = document.querySelector(`${campo}`);
    invalido.classList.add('border', 'border-2', 'border-danger');

    const myTimeout = setTimeout(tirarAlerta, 3500);
    myTimeout;
    function tirarAlerta() {
        alerta.style.display = '';
        invalido.classList.remove('border', 'border-2', 'border-danger');
    }
}

function mostrarResultado(resultado) {
    let resElemento = document.querySelector('#resultado');
    let eyebrow = document.querySelector('#topText');
    resElemento.innerHTML = resultado.toFixed(2);

    if (resultado < 18.5) {
        topText = 'Cuidado, você está';
        categoria = 'Abaixo do peso saudável';
        cor = '#B19719';
        cat = -1;
    } else if (resultado > 18.5 && resultado < 24.9) {
        topText = 'Parabéns, você está com um';
        categoria = 'Peso saudável';
        cor = '#16B13D';
        cat = 0;
    } else if (resultado >= 25 && resultado < 30) {
        topText = 'Cuidado, você está';
        categoria = 'Sobrepeso';
        cor = '#B19719';
        cat = 1;
    } else if (resultado >= 30 && resultado < 35) {
        topText = 'Cuidado, você está na categoria';
        categoria = 'Obesidade grau I';
        cor = '#B19719';
        cat = 2;
    } else if (resultado >= 35 && resultado < 40) {
        topText = 'Cuidado, você está na categoria';
        categoria = 'Obesidade grau II';
        cor = '#B1671E';
        cat = 3;
    } else if (resultado >= 40) {
        topText = 'Cuidado, você está na categoria';
        categoria = 'Obesidade grau III (obesidade mórbida)';
        cor = '#B12B1D';
        cat = 4;
    } else {
        topText = 'Não calculado';
        categoria = '';
    }

    let ElemCategoria = document.querySelector('#categoria');
    ElemCategoria.innerHTML = categoria;
    eyebrow.innerHTML = topText;

    let catTab = document.querySelector(`#t${cat}`);
    catTab.classList = 'border border-2 border-info bg-info-subtle';

    const myTimeout = setTimeout(tirarCat, 15000);
    myTimeout;
    function tirarCat() {
        catTab.classList = ''
    }

    let blocoRes = document.getElementById('BlocoResultado');
    resElemento.style.color = cor;
    blocoRes.style.display = 'block';
    blocoRes.scrollIntoView();
}

var input = document.querySelector('html');

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('confirmar').click();
    }
});
