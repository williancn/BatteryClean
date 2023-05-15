let signupBtn = document.getElementById('signupBtn');
let signinBtn = document.getElementById('signinBtn');
let nameField = document.getElementById('nameField');
let title = document.getElementById('title');
const status = "";

if (window.location.pathname === '/login') {
    function entrar() {
        nameField.style.maxHeight = "0";
        title.innerHTML = "Entrar!";
        signupBtn.classList.add("disabled");
        signinBtn.classList.remove("disabled");

        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        localStorage.setItem('email', email);
        console.log("email: " + localStorage.getItem('email'));
        if (email != null && email == localStorage.getItem('email') && password != null && password == localStorage.getItem('password')) {
            this.status = "200 - OK";
            localStorage.setItem('parametro', 'true');
            window.location.href = '/';
            applyName();
        } else {
            this.status = "401 - BAD REQUEST";
        }
    }

    function criarConta() {
        nameField.style.maxHeight = "60px";
        title.innerHTML = "Criar conta!";
        signupBtn.classList.remove("disabled");
        signinBtn.classList.add("disabled");

        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;


        if (nome && email && password) {
            window.location.href = '/login';

            localStorage.setItem('nome', nome);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
        }
    }
}

// Verificar o estado de login ao carregar a página
window.addEventListener('load', function () {
    console.log("teste");
    var loginButton = document.getElementById('loginButton');
    var paragrafoMensagemLogin = document.getElementById('message-login');
    var userImage = document.querySelector('.user-image');

    if (localStorage.getItem('parametro') === 'true') {
        paragrafoMensagemLogin.innerText = "Bem-vindo, " + localStorage.getItem('nome') + "!";
        loginButton.innerText = 'Sair';
    } else {
        userImage.classList.add('hidden');
    }
});

function gerenciarLogin() {
    if (localStorage.getItem('parametro') === 'true') {
        // Realizar ação para fazer logout
        deslogar();
    } else {
        // Realizar ação para fazer login
        window.location.href = '/login';
    }
}

function deslogar() {
    // Realizar ação de logout, limpar o "cookie" e redirecionar para a página de login
    localStorage.setItem('parametro', 'false');
    window.location.href = '/';
}

if (window.location.pathname === '/servicos') {
    // Selecionar o elemento do botão
    var botaoColeta = document.getElementById("button-coleta");

    // Verificar a condição e atualizar o texto do botão
    if (localStorage.getItem('parametro') === 'true') {
        botaoColeta.innerText = "Solicitar Coleta!";
        botaoColeta.onclick = function () {
            window.location.href = '/solicitar_coleta';
        };
    } else {
        botaoColeta.innerText = "Faça login";
        botaoColeta.onclick = function () {
            window.location.href = '/login';
        };
    }
}

if (window.location.pathname === '/solicitar_coleta') {
    if (localStorage.getItem('parametro') === 'true') {
        console.log('Parametro válido!')

        
    function enviar() {
        alert("Envio de formulário bem-sucedido!");
        window.location.href = '/';
    }

    function toggleSelection() {
        var emptySelectionDiv = document.getElementById("emptySelection");
        var selectedOptionsDiv = document.getElementById("option-itens-box");
        var select = document.getElementById("itens-menu");
        var selectedOption = select.options[select.selectedIndex];
        var optionValue = selectedOption.value;
        var optionText = selectedOption.text;

        var selectedDivs = selectedOptionsDiv.getElementsByClassName("selectedOption");
        var selectedDivCount = selectedDivs.length;

        if (emptySelectionDiv.style.display === "block") {
            emptySelectionDiv.style.display = "none";
        }

        if (optionValue !== "" && selectedDivCount < 11) {
            var newOptionDiv = createSelectedOptionDiv(optionText);
            selectedOptionsDiv.appendChild(newOptionDiv);
        }

        if (selectedDivCount >= 10) {
            var emptySelectionText = emptySelectionDiv.querySelector("span");
            emptySelectionText.textContent = "Limite máximo atingido";
        }

        // Reordenar a div emptySelection para ficar por último
        selectedOptionsDiv.appendChild(emptySelectionDiv);

        // Restaurar o texto padrão após a seleção
        select.selectedIndex = 0;
    }

    function createSelectedOptionDiv(optionText) {
        var newOptionDiv = document.createElement("div");
        newOptionDiv.className = "selectedOption";

        var optionTextSpan = document.createElement("span");
        optionTextSpan.textContent = optionText;

        var quantityInputContainer = document.createElement("div");
        quantityInputContainer.className = "quantity-input";

        var quantityInput = document.createElement("input");
        quantityInput.type = "text";
        quantityInput.className = "quantity-value";
        quantityInput.value = "0";

        var buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";

        var minusButton = document.createElement("button");
        minusButton.type = "button";
        minusButton.className = "quantity-button minus";
        minusButton.textContent = "-";

        var plusButton = document.createElement("button");
        plusButton.type = "button";
        plusButton.className = "quantity-button plus";
        plusButton.textContent = "+";

        buttonContainer.appendChild(plusButton);
        buttonContainer.appendChild(minusButton);
        quantityInputContainer.appendChild(quantityInput);
        newOptionDiv.appendChild(optionTextSpan);
        newOptionDiv.appendChild(quantityInputContainer);
        newOptionDiv.appendChild(buttonContainer);

        return newOptionDiv;
    }

    // Evento de clique no botão de decremento
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('minus')) {
            var quantityInput = event.target.closest('.selectedOption').querySelector('.quantity-value');
            console.log("teste1", quantityInput);
            var currentValue = parseInt(quantityInput.value);
            if (currentValue > 0) {
                quantityInput.value = currentValue - 1;
            }
        }
    });

    // Evento de clique no botão de incremento
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('plus')) {
            var quantityInput = event.target.closest('.selectedOption').querySelector('.quantity-value');
            console.log("teste2", quantityInput);
            var currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        }
    });
    } else {
        const validacao = document.getElementById('container')
        validacao.innerHTML = '<h1> Voce NÃO tem as permissões necessárias para acessar esta página!'
        validacao.style.color = 'red'
    }

}