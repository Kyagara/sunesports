# #SUNzinho Webhooks

<div>
    <a href="https://discord.gg/c8Y5QFy4Qa">
        <img src="https://discordapp.com/api/guilds/656272932758356008/embed.png" alt="Discord #SUN Community" />
    </a>
</div>

Nesse repositório se encontra o serviço de webhooks usados no Discord [#SUN Community](https://discord.gg/c8Y5QFy4Qa), o Discord da comunidade da Sunlight Esports.

Esse projeto era usado para publicar tweets no Discord da Sunlight, ele pode ser expandido para suportar outros webhooks como o EventSub da [Twitch](https://dev.twitch.tv/docs/eventsub).

`sunzinho-webhooks` funciona da seguinte forma:

-   Um usuário publica algo em alguma rede social, [@sunesportsbr](https://twitter.com/sunesportsbr) como exemplo
-   A API do [Twitter](https://developer.twitter.com/en/docs/twitter-api/premium/account-activity-api/overview), que terá a conta em questão registrada para receber eventos, irá enviar um `post` para o servidor Fastify
-   O pedido irá passar por uma proxy reversa como [nginx](https://www.nginx.com/)
-   A proxy pode verificar se o pedido está nos blocos de ip permitidos, caso esteja, ele irá passar o pedido para o servidor
-   Caso o evento seja um tweet que contém o que queremos, iremos publicar ele usando o webhook do [Discord](https://discord.com/developers/docs/resources/webhook)

## Estrutura do projeto

-   ./src/api

Métodos usados nas rotas separados em pastas, é aqui que criamos métodos como `TwitterCreateCRC` para ser usado na sua respectiva rota.

-   ./src/routes

Rotas que serão exportadas quando o servidor for iniciado, é aqui que iremos criar rotas como `/webhooks/twitter`, separados em arquivos para cada rede social.

## Requisitos

Como muitas APIs tem como requisito um servidor seguro e com https, você pode utilizar uma combinação dos serviços gratuitos da [Oracle Cloud](https://www.oracle.com/br/cloud/) com os serviços da Cloudflare, esse processo é um pouco demorado e complicado de se configurar já que é necessário preparar uma máquina virtual e configurar uma proxy reversa com os certificados de um dominio seu feitos pela Cloudflare.

Você precisará aplicar para ter uma conta de developer no [Twitter](https://developer.twitter.com/en/apply-for-access) e criar uma aplicação.

`node` e `yarn` instalados no sistema.

Um webhook criado no canal de texto do Discord que deseja receber essas notificações.

## APIs

É preciso negar qualquer pedido ao servidor que não esteja vindo das apis que utilizamos, caso tenha outros serviços hospedados no mesmo dominio, bloqueie acesso ao servidor apenas no bloco `/webhooks/` do seu site.

```
location ^~ /webhooks/ {
    # Permitir blocos de ip do Twitter
    allow 199.59.148.0/22;
    allow 199.16.156.0/22;

    # Bloquear qualquer outro ip
    deny all
}
```

#### Twitter

Recomendo utilizar [twurl](https://github.com/twitter/twurl) para criar o webhook e registrar o usuário que queremos receber notificações.

Para autenticar o usuário que queremos receber notificações, use as keys da aplicação criada no Twitter:

```
twurl authorize --consumer-key API-KEY --consumer-secret API-KEY-SECRET
```

Você irá receber um link, antes de clicar nele, certifique-se que você está logado na conta que quer receber notificações ou envie o link para alguém que está logado nela, ao permitir acesso ao aplicativo você irá receber um pin, copie e cole ele na janela do terminal que você usou o comando anterior.

Agora é preciso criar um webhook que aponta para esse servidor, é necessário que o servidor esteja ligado já que o Twitter irá enviar um desáfio:

```
twurl -X POST "/1.1/account_activity/all/prod/webhooks.json?url=https://api.seusite.com.br/webhooks/twitter"
```
