# Rádio #SUNzinho

<div>
    <a href="https://discord.gg/c8Y5QFy4Qa">
        <img src="https://discordapp.com/api/guilds/656272932758356008/embed.png" alt="Discord #SUN Community" />
    </a>
</div>

Nesse repositório se encontra o bot de rádio do Discord [#SUN Community](https://discord.gg/c8Y5QFy4Qa), o Discord da comunidade da Sunlight Esports.

Esse bot foi criado para servir seu propósito de maneira fácil e sem dor de cabeça para a pessoa que apenas quer ter uma rádio tocando de fundo em uma sala de Discord. O bot já está configurado com rádios de Lofi ([Lofi Girl](https://www.youtube.com/watch?v=5qap5aO4i9A)) e Progressive House ([Monstercat Silk](https://www.youtube.com/watch?v=d8Oc90QevaI)), porém é fácil trocar, remover e adicionar mais rádios, basta modificar o arquivo `radios.json`.

`sunzinho-radio` funciona da seguinte forma:

-   Ele irá verificar se há salas já adicionadas no banco de dados
-   Caso exista alguma sala, ele irá se conectar nela (limite de uma sala de voz por Guilda)
-   Ele irá verificar a rádio que está relacionada ao canal conectado
-   Ele irá efetuar o procedimento de baixar -> converter (caso necessário) -> transmitir para o canal de voz as livestreams configurados no servidor

As conexões de voz podem ser fechadas por vários mótivos e nenhuma mensagem de erro ser transmitida no terminal, no momento não há maneiras de lidar com esse problema e por isso a stream feita pelo `ytdl-core-discord` é refeita toda hora.

## Comandos

`sunzinho-radio` conta com os seguintes comandos:

-   `join`: Conecta o bot e salva o canal de voz como sala de rádio.
-   `play`: Escolha o gênero da rádio para tocar.
-   `radio`: Exibe informações sobre a rádio selecionada no momento.

## Permissões

`sunzinho-radio` precisa das seguintes permissões para funcionar:

-   `Ver canais` - usado para ver canais de texto e voz, não incluindo canais privados.
-   `Conectar` - usado para se conectar à um canal de voz.
-   `Falar` - usado para tocar a rádio do canal de voz.

E dessas permissões para melhorar o uso do bot:

> Essas permissões não são necessárias porém ajudam bastante pois elas são usadas como forma de fazer comentários sobre os comandos utilizados.

-   `Mandar mensagens` - usado como forma de se comunicar com o usuário.
-   `Inserir links` - usado para incorporar links em mensagens para apresentar melhor informações.

## Instalação e configuração

É **necessário** ter uma versão do nodejs acima de 16.6.0 por conta do `discord.js`, também é necessário ter `ffmpeg` instalado no sistema.

Configure as rádios que você queira usar nos arquivos `radios.json`, verifique que as rádios tenham um nome único e que os videos sejam livestreams do youtube com um bom uptime.

O bot precisa de permissão para criar `slash commands`, basta convidar seu bot usando o link: `https://discord.com/oauth2/authorize?client_id=ID_DA_APLICAÇÃO&permissions=0&scope=bot%20applications.commands`, mude `ID_DA_APLICAÇÃO` para o id da sua aplicação `https://discord.com/developers/applications`.

Após configurar as rádios, basta ir no diretório `src` do projeto e usar `node .\commands.js` para criar os comandos globais utilizados pelo bot.
