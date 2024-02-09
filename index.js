const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para construção de páginas web",
        "Um sistema operacional",
        "Um tipo de café especial",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console do navegador?",
      respostas: [
        "print()",
        "log()",
        "display()",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de animal",
        "Um tipo de variável",
        "Uma estrutura de dados para armazenar vários valores",
      ],
      correta: 2
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "let",
        "var",
        "int",
      ],
      correta: 0
    },
    {
      pergunta: "Qual dessas opções não é um operador de comparação em JavaScript?",
      respostas: [
        "==",
        "===",
        "><",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "append()",
        "add()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona um elemento HTML com base em um seletor CSS",
        "Cria um novo elemento HTML",
        "Remove um elemento HTML do DOM",
      ],
      correta: 0
    },
    {
      pergunta: "Qual desses é um tipo de dado primitivo em JavaScript?",
      respostas: [
        "Array",
        "Object",
        "String",
      ],
      correta: 2
    },
    {
      pergunta: "O que o operador '&&' faz em JavaScript?",
      respostas: [
        "Condição de igualdade",
        "Concatenação de strings",
        "Operador lógico 'E' (AND)",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de uma linha",
        "/* Este é um comentário de uma linha */",
        "<!-- Este é um comentário de uma linha -->",
      ],
      correta: 0
    },
   ];
   
   const quiz = document.querySelector('#quiz')
   const template = document.querySelector('template')
   
   const corretas = new Set()
   const totalDePerguntas = perguntas.length
   const mostrarTotal = document.querySelector('#acertos span')
   mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
   
   //loop ou laço de repetição
   for(const item of perguntas){
     const quizItem = template.content.cloneNode(true)
     quizItem.querySelector('h3').textContent = item.pergunta
   
     for(let resposta of item.respostas){
       const dt = quizItem.querySelector('dl dt').cloneNode(true)
       dt.querySelector('span').textContent = resposta
       dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
       dt.querySelector('input').value = item.respostas.indexOf(resposta)
       dt.querySelector('input').onchange = (event) => {
         const estaCorreta = event.target.value == item.correta
         
         corretas.delete(item)
         if(estaCorreta){
           corretas.add(item)
         }
         
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
       }
   
   
       quizItem.querySelector('dl').appendChild(dt)
     }
   
     quizItem.querySelector('dl dt').remove()
   
   
     // coloca a pergunta na tela
     quiz.appendChild(quizItem)
     //alert(item.pergunta)
   }