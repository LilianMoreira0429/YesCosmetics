# Aplicativo de Gestão de Produtos - Yes Cosmetics

Este é um aplicativo mobile desenvolvido em **React Native** utilizando **Expo**. O objetivo do app é gerenciar o cadastro de produtos para a franquia de cosméticos **Yes Cosmetics**, permitindo adicionar, atualizar, listar e remover produtos de um banco de dados local.

## Funcionalidades

- **Cadastrar produtos**: Adicione novos produtos com nome e quantidade.
- **Atualizar produtos**: Altere os detalhes de produtos já cadastrados.
- **Listar produtos**: Visualize uma lista dos produtos cadastrados.
- **Remover produtos**: Exclua produtos do banco de dados.
- **Detalhes do produto**: Visualize os detalhes de um produto específico.

## Tecnologias Utilizadas

- **React Native** com **Expo**: Para o desenvolvimento do app mobile.
- **SQLite**: Para armazenamento local dos produtos.
- **Expo Router**: Para navegação entre telas.
- **Componentização**: Inputs e itens de produto encapsulados em componentes reutilizáveis.

## Pré-requisitos

- **Node.js** (v22.11.0 ou superior) e **npm/npx** (v10.9.0 ou superior).
- **Expo CLI** instalado globalmente.
- Dispositivo ou emulador para testar o app.

## Como executar o projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

## Instale as dependências:

- **npm install**
## Inicie o app:

- **npx expo start**
## Execute no dispositivo:

Escaneie o QR Code com o aplicativo do Expo Go no seu celular.
Ou use um emulador Android/iOS configurado no seu ambiente de desenvolvimento.

- **├── components/**
- **│   ├── Input.tsx**         # Componente de entrada de dados
- **│   ├── Product.tsx**       # Componente para renderizar um item da lista de produtos
- **├── database/**
- **│   ├── useProductDatabase.ts**  # Hook para operações no banco de dados SQLite
- **├── assets/**
- **│   └── logo.png**          # Logo da Yes Cosmetics (imagem de fundo)
- **├── screens/**
- **│   └── Index.tsx**        # Tela principal do app
- **├── App.tsx**              # Arquivo principal do projeto

## Código Principal
O arquivo Index.tsx contém a lógica central do aplicativo, incluindo:

- **Estados do React:**
-- id, name, quantity e search para manipular os produtos.
## Funções principais:
- create(): Cadastra novos produtos.
- update(): Atualiza produtos existentes.
- list(): Busca produtos no banco de dados.
- remove(): Remove produtos do banco de dados.
- details(): Exibe os detalhes de um produto.
## Telas e Interface
- Formulário de cadastro: Inputs estilizados com bordas visíveis, placeholder customizado e validação de entrada.

- Lista de produtos: Apresentação dos produtos com opções de editar e excluir.

- Imagem de fundo: Utiliza a logo da Yes Cosmetics como plano de fundo.

## Estilo Visual
- Paleta de Cores:
Verde (#32CD32): Para textos e destaques.
Azul claro (#F0F8FF): Para o fundo da lista.
Azul escuro (#4682B4): Para placeholders.
Cinza (#D3D3D3): Para bordas dos inputs.

