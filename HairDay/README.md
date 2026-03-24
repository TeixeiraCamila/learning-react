# HairDay - Sistema de Agendamentos

## Instruções

### Estrutura, regras e requisitos do projeto

#### 1. Estrutura inicial

Crie um projeto no React utilizando Vite com Typescript.

Estruturé a aplicação com pelo menos dois componentes principais:
- Sidebar para adicionar novos agendamentos.
- Listagem de agendamentos exibindo cada agendamento no seu respectivo período.

#### 2. Funcionalidades obrigatórias

**➕ Adicionar agendamento**
- O usuário deve escolher a data, horário e informar o nome do cliente.
- Ao clicar no botão de agendar, o agendamento deve ser adicionado à lista.
- Cada novo agendamento deve aparecer imediatamente na interface, com:
  - Horário;
  - Nome do cliente;
  - Um botão de lixeira para excluir.

**🗑️ Remover agendamento**
- O usuário deve poder excluir qualquer agendamento da lista clicando no botão de lixeira.
- Após a remoção, a lista deve ser atualizada automaticamente.

**📊 Períodos**
- Os agendamentos devem ser agrupados e exibidos de acordo com três períodos:
  - **Manhã**: agendamentos entre 9h e 12h.
  - **Tarde**: agendamentos entre 13h e 18h.
  - **Noite**: agendamentos entre 19h e 21h.

#### 3. Estados e manipulação

- Use estados do React para armazenar a lista de agendamentos.
- Cada agendamento deve ser representado por um objeto com pelo menos id, nome do cliente, data e horário.
- Utilize métodos de array como map, filter e reduce para atualizar os estados corretamente.

#### 4. Interface (baseada no layout do Figma)

A tela inicial deve exibir:
- O logo.
- Os inputs para adicionar o agendamento.
- A sidebar.
- A listagem de agendamentos
- O agrupamento por períodos
- O período, caso não haja agendamentos, deve exibir uma mensagem de estado vazio:
  - "Você ainda não tem agendamentos cadastrados nesse período."
- Botão de excluir → ícone de lixeira.

---

## Como rodar o projeto

```bash
cd HairDay
npm install
npm run dev
```

Abra http://localhost:5173 no seu navegador.

---

## Tecnologias utilizadas

- React 19
- TypeScript
- Vite
- TailwindCSS 4
- React Router DOM
- class-variance-authority
- use-local-storage