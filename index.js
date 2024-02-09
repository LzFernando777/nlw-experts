const perguntas = [
 {
   pergunta: "Qual time brasileiro venceu a Copa do Mundo de 1994?",
   respostas: [
     "Santos",
     "Corinthians",
     "Brasil",
   ],
   correta: 2
 },
 {
   pergunta: "Quem foi o artilheiro do Campeonato Brasileiro de 1998?",
   respostas: [
     "Romário",
     "Edmundo",
     "Túlio Maravilha",
   ],
   correta: 0
 },
 {
   pergunta: "Qual foi o primeiro clube brasileiro a conquistar a Copa Libertadores da América?",
   respostas: [
     "Santos",
     "Flamengo",
     "São Paulo",
   ],
   correta: 0
 },
 {
   pergunta: "Qual jogador brasileiro foi eleito o melhor do mundo pela FIFA em 1994?",
   respostas: [
     "Ronaldo",
     "Romário",
     "Rivaldo",
   ],
   correta: 1
 },
 {
   pergunta: "Qual equipe brasileira venceu a Copa do Brasil em 1993?",
   respostas: [
     "Grêmio",
     "Vasco da Gama",
     "Palmeiras",
   ],
   correta: 1
 },
 {
   pergunta: "Qual time foi campeão da Copa Conmebol em 1997?",
   respostas: [
     "Santos",
     "Botafogo",
     "Cruzeiro",
   ],
   correta: 2
 },
 {
   pergunta: "Quem foi o técnico da Seleção Brasileira na conquista da Copa América de 1997?",
   respostas: [
     "Vanderlei Luxemburgo",
     "Felipão",
     "Zagallo",
   ],
   correta: 0
 },
 {
   pergunta: "Qual foi o time que venceu o Campeonato Brasileiro de 1992?",
   respostas: [
     "Flamengo",
     "Palmeiras",
     "São Paulo",
   ],
   correta: 2
 },
 {
   pergunta: "Qual jogador brasileiro foi artilheiro da Copa do Mundo de 1994?",
   respostas: [
     "Ronaldo",
     "Bebeto",
     "Romário",
   ],
   correta: 2
 },
 {
   pergunta: "Em que ano o Brasil sediou a Copa do Mundo?",
   respostas: [
     "1990",
     "1994",
     "1998",
   ],
   correta: 1
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