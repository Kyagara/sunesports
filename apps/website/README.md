# #SUNesports

Nesse repositório se encontra o código fonte de [Sunlight Esports](https://sunesports.com.br), um site estático criado com [Next.js](https://github.com/vercel/next.js/), utilizando [Tailwind](https://tailwindcss.com) e hospedado com [Cloudflare Pages](https://pages.cloudflare.com/).

## Estrutura do projeto

-   ./public

Pasta utilizada pelo Next.js para servir conteúdo estático.

-   ./src

Páginas e componentes do site.

-   ./src/build

Ao usar `yarn build`, o arquivo `Build.ts` será executado e com isso serão feitos pedidos no Twitter e Instagram pelos perfis registrados no `.env` do projeto, Tweets e Posts serão salvos em arquivos na pasta `src/data` e imagens do Instagram no caminho `public`.
