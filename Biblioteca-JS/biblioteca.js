/*
    Ordem de métodos da biblioteca:
        1 - Criação de botão
        2 - Criação de Input
        3 - Criação de Select
        4 - Validação de senha forte
        5 - Validação de confirmação de senha
        6 - Toast / Notificação
        7 - Loading Suave
        8 - Smooth Scroll
        9 - Clipboard ( Copiar texto )
        10 - Tranforma data em estilo de data brasileiro;
        11 - Toggle para senhas (Show & hide)
*/






//=====================================================================================================

// Criação de botão - classes de estilização disponíveis:
// button-filled(Botão Preenchido) 
// button-empty (Botão Vazio)
// button-borderchange (Botão com mudança na borda)

/*
--- Exemplo de uso:
<body>

    <H1>Esse é um teste da minha biblioteca</H1>

    <p>Quero meu botão aqui ao lado --> <span id="botao"></span> </p> 

    (1 - Crie um span
     2 - Adicione um id qualquer
     3 - No script crie uma váriavel pegando o span pelo Id
     4 - Crie uma variável e chame a função nesse caso botão.
     5 - Em seguida faça o seguinte comando: nomeVariavelSpan.appendChild(nomeVariávelFunção);
     6 - Seu componente foi chamado Inline, via Script
    )

</body>

<script src="biblioteca.js"></script> (Conecto meu arquivo HTML com a biblioteca javaScript)

<script>
    let container = document.getElementById("botao");
    let btn = createButton("Meu Botão", "button-filled");
    container.appendChild(btn);
</script>

/*





/**
 * @param {string} text - Nome que ficará no botão 
 * @param {classe} classe - Estilização do botão: button-filled, button-empty, button-borderchange
 * @returns {HTMLButtonElement} - Retorna o elemento button criado
 */
function createButton(text, classe){
    let button = document.createElement("button");

    button.textContent = text;
    button.classList.add(classe);

    document.body.appendChild(button);
    return button;
}


// -----------------------------------------------------------------------

// Criação de input(com label)

/*
-----Exemplo de uso: 

    <div class="form-example" id="inputs-container"></div>
    

    <script src="biblioteca.js"></script>
    <script>

        let inputsContainer = document.getElementById("inputs-container");
        let input1 = inputCreate("Nome Completo", "nome", "Digite seu nome", "input-styles", "text", false);
        inputsContainer.appendChild(input1);
    </script>

*/


/**
 * @param {string} textLabel - Texto do rótulo
 * @param {string} name - Nome do select
 * @param {string} placeholder - Texto do placeholder
 * @param {string} classe - Classe CSS para estilizar
 * @param {boolean} required - Se é obrigatório
 * @param {string} type - Tipo do input: text , password, email, file, search, tel
 * @returns {HTMLDivElement} - Retorna o container com label e input
 */

function inputCreate(textLabel, name, placeholder, classe, type, required) {
    if (typeof required !== 'boolean') {
        throw new Error("O parâmetro 'required' deve ser boolean");
    }
    
    // Criar container para label e input
    let container = document.createElement("div");
    container.classList.add("input-container");
    
    // Criar label
    let labelInput = document.createElement("label");
    labelInput.htmlFor = name;
    labelInput.textContent = textLabel;
    
    // Criar input
    let input = document.createElement("input");
    input.id = name;
    input.name = name;
    input.type = type;
    input.placeholder = placeholder;
    input.classList.add(classe);
    input.required = required;
    
    container.appendChild(labelInput);
    container.appendChild(input);
    
    return container; 
    }
// -----------------------------------------------------------------------

//Criação de um select com label estilização única.

/*
-------Exemplo de uso: 

    <div id="select-container"></div>


    <script src="biblioteca.js"></script>
    <script>
        let selectContainer = document.getElementById("select-container");
        let selectElement = createSelect(
            "categoria",
            [
                { value: "eletrônicos", text: "🖥️ Eletrônicos" },
                { value: "roupas", text: "👕 Roupas" },
                { value: "livros", text: "📖 Livros" },
                { value: "alimentos", text: "🍕 Alimentos" }
            ],
            false
        );
        selectContainer.appendChild(selectElement);

    </script>
*/

/**
 * Cria um elemento select com label
 * @param {string} textLabel - Texto do rótulo
 * @param {string} name - Nome do select
 * @param {array} opcoes - Array com as opções [{value: 'val1', text: 'Opção 1'}, ...]
 * @param {string} classe - Classe CSS para estilizar
 * @param {boolean} required - Se é obrigatório
 * @returns {HTMLSelectElement} - Retorna o elemento select criado
 */

function createSelect(name, opcoes, required = false) {
    if (!Array.isArray(opcoes)) {
        throw new Error("O parâmetro 'opcoes' deve ser um array");
    }
    
    let container = document.createElement("div");
    container.classList.add("select-container");
    
    let select = document.createElement("select");
    select.id = name;
    select.name = name;
    select.required = required;
    select.classList.add("select-box");
    
    // Adicionar opção vazia padrão
    let opcaoPadrao = document.createElement("option");
    opcaoPadrao.value = "";
    opcaoPadrao.textContent = "Selecione uma opção";
    select.appendChild(opcaoPadrao);
    
    // Adicionar opções
    opcoes.forEach(opcao => {
        let option = document.createElement("option");
        option.value = opcao.value;
        option.textContent = opcao.text;
        select.appendChild(option);
    });
    
    container.appendChild(select);
    
    document.body.appendChild(container);
    
    return select;
}


// ========================================================================================================
  


//Função para validação de senha forte:

//Para utilização:
/*
    1 - Coloque na variável 'senha' o Id da senha que quer testar;
    2 - Crie um componente 'p' ou 'span' e coloque o Id dela dentro da variável 'msg';
    3 - Chame a função.
*/


function senhaForteValidacao(){

    let senha = document.getElementById('senha');
    let msg = document.getElementById('mensagem');  
    let verificaMaiusculas = /[A-Z]/.test(senha.value);
    let verificaMinusculas = /[a-z]/.test(senha.value);
    let verificaNumeros = /[0-9]/.test(senha.value);

    if(!verificaMaiusculas ){
        msg.innerHTML = 'Sua senha é fraca, ela deve conter letras maiúsculas';
    }
    else if(!verificaMinusculas){
        msg.innerHTML = 'Sua senha é fraca ela deve conter letras minusculas';
    }
    else if(!verificaNumeros){
        msg.innerHTML = 'Sua senha é fraca ela deve conter números';
    }else{
        msg.innerHTML = 'Sua senha é forte';
    }
    
}


// ====================================================================================================



//Verifica se o campo de confirmação de senha e senha são idênticos:

//Para utilização:
/*
    1 - Coloque na variável 'senha' o Id da senha que quer testar;
    2 - Coloque na variável 'confirmsenha' o Id do segundo campo de senha que quer testar;
    3 - Crie um componente 'p' ou 'span' e coloque o Id dela dentro da variável 'msg';
    4 - Chame a função.
*/

function validarSenhas(){
    let senha = document.getElementById("senha");
    let confirmSenha = document.getElementById("confirmsenha");
    let form = document.getElementById("mensagem");

    if(senha.value != confirmSenha.value){
        form.innerHTML = "sua senha não está igual";
        form.style.color = 'red';
        toast("As senhas não coincidem", "error");
    }else{
        form.innerHTML = 'Senhas iguais cadastradas com sucesso';
    }
}
// ===================================================================================================

// Sistema de notificação/Toast (Estilização única).

/*
Utilização:
    toast("Sucesso", "success");

    toast("Erro", "error");

    toast("Aviso", "warning");
*/

function toast(message = "Mensagem", type = "info") {

    const container = document.getElementById("gpm-toast-container");

    const toast = document.createElement("div");

    toast.classList.add("gpm-toast");
    toast.classList.add(type);

    toast.innerText = message;

    container.appendChild(toast);


    // TimeOut pra dar tempo da animação rodar!
    setTimeout(() => {
        toast.classList.add("show");
    }, 1000);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 30);

    }, 3000);
}



//=======================================================================================================
// Sistema de Loading suavizado usando AJAX.

/*
Para que funcione é necessário adicionar isso a parte do código que será utilizado:

  <div id="resultado">

    </div>

    <div id="gpm-loading">
        <div class="spinner"></div>
    </div>

*/

function showLoading(){
    document.getElementById("gpm-loading").style.display = "flex";
}

function hideLoading(){
    document.getElementById("gpm-loading").style.display = "none";
}


async function carregarDados(url){

    showLoading();
    
    try{
        
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);
        document.getElementById("resultado").innerHTML = data.name;

    }catch(error){

        console.log(error);
        toast("Erro ao carregar os dados", "error");

    }finally{

        hideLoading();
    }

}


// ===========================================================================================
// Scroll suave:

/* 
Modo de uso:
1 - Coloque o id do elemento no qual voce quer que vá
2 - Crie um botao e coloque a função onclick ou coloque dentro da função que desejar
*/

function scrollsmooth(idelement){
    let scroll = document.getElementById(idelement);

    try{
        scroll.scrollIntoView({behavior: "smooth"});
    }catch(error){
        console.log(error);
        toast("Elemento não encontrado", "error");
    }


}
// =============================================================================================

// Clipboard - Copiar

/* Modo de uso:
1 - Crie uma variável que salve um element
1 - No parametro 'text' coloque o .value dessa variável


<input type="text" id="meuTexto" value="Copie este texto">

<button onclick="Clipboard(clip.value)">Copiar</button>


<script> 
    let clip = document.getElementById('meuText');
</script>
*/

async function Clipboard(text){

    try{
        await navigator.clipboard.writeText(text);
        toast("Copiado com Sucesso!", "success")

    }catch(error){

        toast("Texto não copiado","error");
    
    }
}

// ========================================================================================
// Sistema de transformar datas em formato AA-mm-dd para formato dd/mm/AA


/* Modo de uso:
1 - Crie uma variável que salve um element do tipo DATE
1 - No parametro 'data' coloque essa variável


<input type="text" id="minhaData" value="AA-mm-dd">


<script> 
    let date = document.getElementById('minhaData');

    let dataBrasil = dataBR(date.value);
</script>
*/



function dataBR(data){
    try {
        let dataObj;
        if (typeof data === 'string') {
            dataObj = new Date(data);
        } else if (data instanceof Date) {
            dataObj = data;
        } else {
            throw new Error("Tipo de data inválido");
        }

        if (isNaN(dataObj.getTime())) {
            throw new Error("Data inválida");
        }

        let dataBR = dataObj.toLocaleDateString('pt-BR');
        return dataBR;
    } catch (error) {
        console.log("Erro na conversão de data:", error);
        toast("Erro ao converter data", "error");
        return null;
    }
}


//===========================================================================================
// Toggle para cadastro de senhas:

//Modo de utilização:
// 1 - Coloque o id do input da senha como parâmetro da função

function toggle(idSenha){
    let senha = document.getElementById(idSenha);
    if(senha.type === 'password' ){
        senha.type = 'text';
    }else{
        senha.type = 'password';
    }
}