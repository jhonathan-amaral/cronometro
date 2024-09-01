##  ⏱️ Aplicativo de Gerenciamento de Tempo  ⏱️

Este projeto é uma aplicação web, um gerenciador de tempo e de produtividade, desenvolvido com React, TypeScript e Vite. Ele implementa um sistema de ciclos com histórico e um cronômetro de contagem regressiva.

## 💻 Tecnologias Utilizadas:

- React
- TypeScript
- Vite
- ESLint
- Immer
- React Hook Form
- React Router Dom
- Styled Components
- Zod

## 📂 Arquitetura do Projeto

### 📁 src/

O núcleo do código-fonte da aplicação.

- `main.tsx` 🚀: Ponto de entrada principal da aplicação.
- `App.tsx`: Componente raiz da aplicação.
- `Router.tsx`: Define as rotas da aplicação.

#### 📁 components/

Componentes reutilizáveis da interface.

- `Header/`: Componente de cabeçalho.
- `layouts/`: Definição de layouts para diferentes páginas.
    - `DefaultLayout/`: Layout padrão da aplicação.

#### 📁 pages/

Páginas da aplicação.

- `Home/`: Página inicial.
    - `components/`: Componentes específicos da página Home.
        - `Countdown/`: Componente de contagem regressiva.
        - `NewCycleForm/`:  Formulário para criar um novo ciclo. 
- `History/`: Página de histórico de ciclos.

#### 📁 contexts/

Gerenciamento de estado global com Context API.

- `CyclesContext.tsx`: Define o contexto para gerenciar os ciclos.

#### 📁 reducers/

Lógica para atualização do estado global.

- `cycles/`:  Reducer para gerenciar o estado dos ciclos.
    - `actions.ts`: Define as ações que podem ser despachadas.
    - `reducer.ts`: Função reducer que atualiza o estado com base nas ações.

#### 📁 styles/

Estilos globais e temas da aplicação.

- `global.ts`: Estilos CSS globais.
- `themes/`: Definição de temas.
    - `default.ts`: Tema padrão da aplicação. 

#### 📁 assets/

Arquivos estáticos como imagens.

- `Logo.svg`: Logotipo da aplicação.

### 📄 Arquivos da raiz

- `.eslintrc.json`: Configurações do ESLint para estilo de código.
- `.gitignore`: Define arquivos e pastas ignorados pelo Git.
- `package-lock.json`, `package.json` 📦: Gerenciamento de dependências.
- `README.md` 📄: Este arquivo README. 

## Detalhes Adicionais:

- O projeto parece utilizar um sistema de gerência de estados global, com Context API, dado o uso de reducers e actions.
- A estrutura sugere uma atenção especial à organização e separação de responsabilidades, o que é uma boa prática em projetos React.

## Utilização 
Para utilizar o projeto, você precisará ter o Node.js e o npm instalados em sua máquina
1. Clone o repositório com o comando `git clone https://github.com/jhonathan-amaral/cronometro.git`
2. Entre na pasta do projeto com o comando `cd cronometro`
3. Instale as dependências com o comando `npm install` ou `npm install --force`
4. Inicie o servidor com o comando `npm run dev`
5. Acesse o projeto em seu navegador com o endereço `http://localhost:3001`


