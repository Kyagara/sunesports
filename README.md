# Sunlight Esports

<div align="center">
    <a href="https://discord.gg/c8Y5QFy4Qa">
        <img src="https://discordapp.com/api/guilds/656272932758356008/embed.png" alt="Discord #SUN Community" />
    </a>
</div>

<div align='center'>
    <a href='https://sunesports.com.br'>
        <img src='https://sunesports.com.br/sun.svg' alt='Logo da SUN' />
    </a>
</div>

## Sobre

Esse repositório é uma monorepo criada com [Turborepo](https://turborepo.org/) com os projetos mais importantes da [Sunlight Esports](https://sunesports.com.br), ela não é 100% Typescript e não possui o antigo bot de Discord utilizado para moderação.

### Apps e Packages

-   `website`: site principal utilizando Next.js
-   `webhooks`: serviço de webhook utilizando Fastify
-   `radio`: bot de rádio do Discord utilizando discord.js
-   `config`: configurações do `eslint`
-   `tsconfig`: configurações `tsconfig` utilizadas em alguns `apps`

### Dev

Renomeie todos os arquivos `.env.exemplo` para `.env` e insira os valores pedidos.

Utilize Turborepo para executar comandos em alguns ou todos projetos:

Instalar a monorepo:
`yarn`

Compilar todos os projetos:
`yarn build`

Iniciar todos os projeto em modo dev:
`yarn dev`

Iniciar apenas o projeto `@sunesports/radio` em modo dev:
`yarn dev --scope=@sunesports/radio`

Iniciar apenas a versão compilada do projeto `@sunesports/website`:
`yarn start --scope=@sunesports/website`
