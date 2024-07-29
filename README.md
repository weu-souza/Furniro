
<img src="https://imgs-furniro.s3.us-east-2.amazonaws.com/json-mages/project-icons/logo_furniro.svg"> 

<p align="center"> 
  <img width="1000px" heigth="300px" src="./src/assets/toReadMe/Furniro-Google-Chrome-2024-07-28-21-26-28.gif">
</p>

furniro e um app que emula um ecomerce de vendas de imovel com carrinho, produtos é tela de compra.

## Aviso

A parte de login e feita pelo firebase, e eu não coloquei as minhas configurações no arquivo.

para acessar a aplicação você vai ter que criar uma conta no firebase e pegar a parte de configuração e colocar no example.env, as variaveis ja estão prontas para serem consumidas pelo arquivo de configuração, e são com o mesmo nome das config do firebase.

# Ativar Login

- Após criar o projto no firebase e configurar o .env va para autentication
- Vá em métodos de login
- Adicionar fornecedor
- Adicione email/senha
- Adicione google

Feito isso o login e registro do app ja estão funcionando e login pelo google tambem.

# home
A home e dividida em 5 partes
- `primeira` parte constitui de um card que tem um botão que leva para a pagina de shopping
- `segunda` parte contem 3 imagens que levam para shoping mas com o filtro pela categoria
- `terceira` parte existem 8 produtos e um botão show more que leva para a parte de shopping.
- `quarta` parte um carrossel de imagens pela categoria
- `ultima` parte são fotos estaticas sem função

# shop
A tela shopping tem 5 funcionalidades

- `primeira` e um identificador, mostrando que esta no shopping, ao clicar em home ele volta para a home
- `segunda` um filtro que consegue mostrar a quantidade de produtos que mostram na terceira funcionalidade e filtra por categoria
- `terceira` funcionalidades um card de itens que mostram os produtos e ao clicar leva para a tela de produtos, existem botões nele ao colocar o mouse em cima e ao clicar no botão adiciona o item ao carrinho
- `quarta` funcionalidade e um paginador que ele calcula quantos produtos estão sendo chamado e filtra de acordo com isso exibindo o numero de paginas e um botão next, você pode navegar tanto pelos numeros quanto pelo next obs: não existe botão prev pois não fazia parte do leout.
- `quinta` funcionalidade e um footerzinho que aparecem em quase todas as paginas que só e funcionalidade visual.

# About
- a pagina about não existe no leout original.

# contact
A pagina de contatos existem 2 funcionalidades
- `primeira` funcionalidade e informações sobre a loja.
-  `Segunda` e um formulariozinho para entrar em contato.

# header 
O header tem 6 botões
- `home` leva para a pagina home
- `shop` leva para a pagina shop
- `About` leva para a pagina about
- `contact` leva para a pagina de contatos
- ` Login` login e um icone de um usuario que se o usuario estiver deslogado ele redireciona para login e se o usuario estiver logado ele mostra um botão para sair
- `sair` o usuario e desconectado da aplicação e não pode acessar cart e nem checkout
- `cart` cart e um icone que ao abrir o mostra um modal com todos os itens que existem no carrinho

# Products
Ao clicar em um card de produtos o usuario e redirecionado para a pagina desse produto em espeficico.
- `produtos` mostram informações sobre o produto.
- `additional information` mostra uma descrição do produto e duas imagens.
- `related products` mostram produtos da mesma categoria com um botão show more que leva para o shopping.

# cart
Existem 2 carrinhos, o modal e a página o modal ao clicar no botão ele mostra todos os itens adicionados e a pagina alem dos itens adicionados existe outra opção
- `Primeira funcionalidade` mostram os itens adicionados ao carrinho existe um botão de mudar a quantidade de itens que atualiza o carrinho
- `Segunda funcionalidade` o total de dinheiro e um botão que leva para a pagina de checkout
# checkout
checkout e o formulario de pagamento onde existem 2 funcionalidades, formulario e pagamento
- `formulario` ao adicionar o zip code ele retorna os valores relacionado ao cep.
- `Pagamento` mostra a quantidade de produtos, o total e forma de pagamento por banco ou dinheiro, ao clicar em place order, se o formulario estiver preenchido ele limpa o carrinho. 

# login
O login e um formulario com a funcionalidade de login, com 3 botões `obs:` precisa fazer login para acessar a pagina de checkout e carrinho.
`Aviso` O login foi feito com o firebase, ve a sessão de <a href="#aviso" style="color:yellow;">Aviso</a> para entender como configurar.
- `Login` ao preencher o formulario e apertar em login ele loga na aplicação
- `clique aqui` redireciona para a pagina de registro 
- `Google` adiciona um usuario com a conta do google.

# registro
um formulario de registro para acessar a aplicação com 2 botões,
`Aviso` O Registro foi feito com o firebase, ve a sessão de <a href="#aviso" style="color:yellow;">Aviso</a> para entender como configurar.

- `Login ` redireciona para a tela de login.
- `register` registra e loga o usuario na aplicação.
 

## Autor
| Papel                   | Nome                              | Contato                                           | 
| ----------------------- | --------------------------------- | --------------------------------------------------| 
| Dev Front               | Weuller Luduvico Meireles Souza   | [![LinkedIn][linkedin-shield-weuller]][linkedin-url-weuller]        |

<!-- Urls -->
[linkedin-url-weuller]: https://linkedin.com/in/weuller-souza-6b49aa120/

<!-- Shields about the project -->
[linkedin-shield-weuller]: https://img.shields.io/badge/LinkedIn_weuller-00599E?style=for-the-badge&logo=Linkedin&logoColor=white


## como usar
- Faça o clone do projeto
- Abra na sua ide
- git install 
- configure o firebase sessão de <a href="#aviso" style="color:yellow;">Aviso</a>

# React + TypeScript + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list





