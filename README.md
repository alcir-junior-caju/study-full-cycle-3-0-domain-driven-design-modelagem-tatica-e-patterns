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

#### Domain Driven Design: Domain Services
- Um serviço de domínio é uma operação sem estado que cumpre uma tarefa específica do domínio. Muitas vezes, a melhor indicação de que você deve criar um Serviço no modelo de domínio é quando a operação que você precisa executar parece não se encaixar como um método em um Aggregate ou um Value Object. (Vernon, Vaughn);
- Quando um processo ou transformação significativa no domínio não for uma responsabilidade natural de uma Entity ou Value Object, adicione um Service. Defina a interface em baseada na linguagem do modelo de domínio e certifique-se de que o nome da operação faça parte do Ubiquitous Language. Torne o Service sem estado. (Evans, Eric);
- Uma entidade pode realizar uma ação que vai afetar todas as entidades;
- Como realizar uma operação em loter?;
- Como calcular algo cuja as informações constam em mais de uma entidade?

#### Domain Driven Design: Domain Services - Cuidados
- Quando houver muitos Domain Services em seu projeto, Talvez, isso pode indicar que seus Aggregates estão anêmicos;
- Domain Services são Stateless;

#### Domain Driven Design: Repositories
- Um repositório comumente se refere a um local de armazenamento, geralmente considerado um local de segurança ou preservação dos itens nele armazenados. Quando você armazena algo em um repositório e depois retorna para recuperá-lo, você espera que ele esteja no mesmo estado que estava quando você o colocou lá. Em algum momento, você pode optar por remover o item armazenado do repositório.(Vernon, Vaughn);
- Esses objetos semelhantes a coleções são sobre persistência. Todo tipo Agregado persistente terá um Repository. De um modo geral, existe uma relação um-para-um entre um tipo Agregado e um Repositório.(Vernon, Vaughn);

#### Domain Driven Design: Domain Events
- Use um evento de domínio para capturar uma ocorrência de algo que aconteceu no domínio. (Vernon, Vaughn);
- A essência de um evento de domínio é que você o usa para capturar coisas que podem desencadear uma mudança no estado do aplicativo que você está desenvolvendo. Esses objetos são processados para causar alterações no sistema e armazenados para fornecer um AuditLog.(Fowler, Martin);
- Todo ecento deve ser representado em uma ação realizada no passado:
  - UserCreated;
  - OrderPlaced;
  - EmailSent;

#### Domain Driven Design: Domain Events - Quando utilizar?
- Normalmente um Domain Event deve ser utilizado quando queremos notificar outros Bounded Contexts de uma mudança de estado;

#### Domain Driven Design: Domain Events - Components
- Event;
- Handler: Executa o processamento quando um evento é chamado;
- Event Dispatcher: Responsável por armazenar e executar os handlers de um evento quando ele for disparado;

#### Domain Driven Design: Domain Events - Dinâmica
- Criar um Event Dispatcher;
- Criar um Event;
- Criar um Handler para o Event;
- Registrar o Event, juntamente com o Handler no Event Dispatcher;
- Agora para disparar um Event, basta executar o método `notify` do Event Dispatcher. Nesse momento todos os Handlers registrados no evento serão executados;

#### Domain Driven Design: Modules
- Em um contexto de DDD, Modules em seu modelo serve como containers nomeados para classes de objetos de domínio que são altamente coesas entre si. O objetivo deve ser baixo acoplamento entre classes que estão em modules diferentes. Como Modules usados no DDD não são compartimentos de armazenamento anêmicos ou genéricos, também é importante nomear adequadamente os Modules.(Vernon, Vaughn);
- Respeitar a linguagem universal;
- Baixo acoplamento;
- Um ou mais aggregates devem estar juntos somente se fazem sentido;
- Organizado pelo domínio / subdomínio e não pelo tipo de objetos;
- Devem respeitar a mesma divisão quando estão em camadas diferentes;
