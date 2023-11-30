/*
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

let nomeDoHeroi = "Thiago";
let xpDoHeroi = 7050;

let niveldoHeroi;

if (xpDoHeroi < 1000) {
  niveldoHeroi = "Ferro";
} else if (xpDoHeroi >= 1.001 && xpDoHeroi <= 2000){
  niveldoHeroi = "Bronze";
}else if(xpDoHeroi >= 2.001 && xpDoHeroi <= 5000){
  niveldoHeroi = "Prata";
}else if(xpDoHeroi >= 6.001 && xpDoHeroi <= 7000){
  niveldoHeroi = "Ouro";
}else if(xpDoHeroi >= 7.001 && xpDoHeroi <= 8000){
  niveldoHeroi = "Platina";
}else if(xpDoHeroi >= 8.001 && xpDoHeroi <= 9000){
  niveldoHeroi = "Ascendente";
}else if(xpDoHeroi >= 9.001 && xpDoHeroi <= 10000){
  niveldoHeroi = "Imortal";
}else if(xpDoHeroi >= 10.001){
  niveldoHeroi = "Radiante";
}

console.log(`O Herói de nome ${nomeDoHeroi} está no nível ${niveldoHeroi}`);