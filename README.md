Link Notion: https://www.notion.so/Biblioteca-JS-35f1d6f6eb7980deb840ee358e4f86be


# Biblioteca JS

## Modo de uso das funções de componentes:


1. Crie um span ou div
2. Adicione um id qualquer
3. No script crie uma váriavel pegando o span pelo Id
4. Crie uma variável e chame a função que desejar (Nesse caso botão)
5. Em seguida faça o seguinte comando: nomeVariavelSpan.appendChild(nomeVariávelFunção);
6. Seu componente foi chamado Inline, via Script


```HTML
<body>

<H1>Esse é um teste da minha biblioteca</H1>
<p>Quero meu botão aqui ao lado --> <span id="botao"></span> </p> 

</body>

<script src="biblioteca.js"></script> (Conecto meu arquivo HTML com a biblioteca javaScript)

<script>
    let container = document.getElementById("botao");
    let btn = createButton("Meu Botão", "button-filled");
    container.appendChild(btn);
</script>

```


## Funções de componentes:

### Criação de botão - classes de estilização disponíveis:
- button-filled(Botão Preenchido) 
- button-empty (Botão Vazio)
- button-borderchange (Botão com mudança na borda)


### Exemplo de uso:


``` HTML
 <p>Quero meu botão aqui ao lado --> <span id="botao"></span> </p>

<script src="biblioteca.js">

// Button exemplo:
let container = document.getElementById("botao");
let btn = createButton("Meu Botão", "button-filled");
container.appendChild(btn);

<script>
```

## Criação de Input com Label

### Tipos disponíveis:
- text
- password
- email
- file
- search
- tel


### Exemplo de uso:

```HTML
<div id="input-container"></div>

<script src="biblioteca.js"></script>

<script>

let container = document.getElementById("input-container");

let input = inputCreate(
    "Nome Completo",
    "nome",
    "Digite seu nome",
    "input-style",
    "text",
    true
);

container.appendChild(input);

</script>
```


## Criação de Select

### Exemplo de uso:

```HTML
<div id="select-container"></div>

<script src="biblioteca.js"></script>

<script>

let container = document.getElementById("select-container");

let select = createSelect(
    "categoria",
    [
        { value: "eletronicos", text: "Eletrônicos" },
        { value: "roupas", text: "Roupas" },
        { value: "livros", text: "Livros" }
    ],
    true
);

container.appendChild(select);

</script>
```


## Validação de senha forte

### Regras da validação:
- Deve conter letras maiúsculas
- Deve conter letras minúsculas
- Deve conter números


### Exemplo de uso:

```HTML
<input type="password" id="senha">

<p id="mensagem"></p>

<script src="biblioteca.js"></script>

<script>

senha.addEventListener("keyup", () => {
    senhaForteValidacao();
});

</script>
```


## Verificação de confirmação de senha

### Exemplo de uso:

```HTML
<input type="password" id="senha">
<input type="password" id="confirmsenha">

<p id="mensagem"></p>

<script src="biblioteca.js"></script>

<script>

confirmSenha.addEventListener("keyup", () => {
    validarSenhas();
});

</script>
```


## Sistema de Toast/Notificação

### Tipos disponíveis:
- success
- error
- warning
- info


### Estrutura necessária:

```HTML
<div id="gpm-toast-container"></div>
```


### Exemplo de uso:

```HTML
<script src="biblioteca.js"></script>

<script>

toast("Sucesso", "success");

toast("Erro", "error");

toast("Aviso", "warning");

toast("Informação", "info");

</script>
```


## Sistema de Loading com AJAX

### Estrutura necessária:

```HTML
<div id="resultado"></div>

<div id="gpm-loading">
    <div class="spinner"></div>
</div>
```


### Exemplo de uso:

```HTML
<script src="biblioteca.js"></script>

<script>

carregarDados("https://jsonplaceholder.typicode.com/users");

</script>
```


## Sistema de scroll suave

### Exemplo de uso:

```HTML
<button onclick="scrollsmooth('idTeste')"></button>

<div id="idTeste">Deslizando para esta div</div>


<script src="biblioteca.js"></script>
<script>


<script>

```

# Clipboard

### Exemplo de uso:
 Modo de uso:
1. Crie uma variável que salve um element
2. No parametro 'text' coloque o .value dessa variável


```HTML
<input type="text" id="meuTexto" value="Copie este texto">

<button onclick="Clipboard(clip.value)">Copiar</button>


<script> 
    let clip = document.getElementById('meuText');
</script>
```

# Transforma data AA-mm-dd em dd/mm/AA

## Modo de uso:
1. Crie uma variável que salve um element do tipo DATE
2. No parametro 'data' coloque essa variável

```HTML
<input type="text" id="minhaData" value="AA-mm-dd">


<script> 
    let date = document.getElementById('minhaData');

    let dataBrasil = dataBR(date.value);
</script>
```


# Toggle - Show e hide das senhas

## Modo de uso:

### Modo de utilização:
1. Coloque o id do input da senha como parâmetro da função

```HTML
<label name="senha" >Senha: </label>
<input type="password" name="Senha" id="senha">
<button onclick="toggle('senha')"> Mostrar senha</button>

<script src="biblioteca.js"></script>

```
## Observações importantes

- Todas as funções retornam elementos HTML manipuláveis via JavaScript.
- É necessário importar o arquivo `biblioteca.js` antes de utilizar as funções.
- Algumas funcionalidades dependem de elementos HTML específicos para funcionamento.
- Para melhor funcionamento importe também o arquivo style.css da biblioteca HTML-CSS do repositório: 
https://github.com/GabrielEloi/Biblioteca-HTML-CSS
