# Curso Full Cycle 3.0 - Módulo Domain Driven Design: Modelagem Tática e Patterns

<div>
    <img alt="Criado por Alcir Junior [Caju]" src="https://img.shields.io/badge/criado%20por-Alcir Junior [Caju]-%23f08700">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23f08700">
</div>

---

## Descrição

O Curso Full Cycle é uma formação completa para fazer com que pessoas desenvolvedoras sejam capazes de trabalhar em projetos expressivos sendo capazes de desenvolver aplicações de grande porte utilizando de boas práticas de desenvolvimento.

---

## Repositório Pai
https://github.com/alcir-junior-caju/study-full-cycle-3-0

---

## Visualizar o projeto na IDE:

Para quem quiser visualizar o projeto na IDE clique no teclado a tecla `ponto`, esse recurso do GitHub é bem bacana

---
### Domain Driven Design: Elementos táticos
- Quando estamos falando sobre DDD e precisamos olhar mais a fundo um bounded context. Precisamos ser capazes de modelarmos de forma mais assertiva os seus principais componentes, comportamentos e individualidades, bem como suas relações.

#### Domain Driven Design: Entities
- Uma Entidade é algo único que é capaz de ser alterado de forma contínua durante um longo período de tempo. (Vernon Vaughn);
- Uma entidade é algo que possuí uma continuidade em seu ciclo de vida e pode ser distinguida independente dos atributos que são importantes para a aplicação do usuário. Pode ser uma pessoa, cidade, carro, um ticket de loteria ou uma transação bancária. (Evans, Eric);
- Entidade = Identidade;

#### Domain Driven Design: Value Objects
- Quando você se preocupa apenas com os atributos de um elemento de um model, classifique isso como um Value Object;
- Trate o Value Object como imutável. (Evans, Eric);
- Address;
  - Street;
  - City;
  - State;
  - Zip code;
  - Number;

#### Domain Driven Design: Aggregates
- Um agregado é um conjunto de objetos associados que tratamos como uma unidade para o propósito de mudança de dados. (Evans, Eric);

