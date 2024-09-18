AlphaEs - Frontend
Este é o projeto frontend do AlphaEs, uma aplicação mobile desenvolvida com Expo. Siga as instruções abaixo para configurar o ambiente e rodar a aplicação localmente.

Pré-requisitos
Android Studio para emular o aplicativo no Android.
Node.js e npm instalados na sua máquina.
Expo CLI para iniciar a aplicação.
Passos para configuração
1. Baixar o Android Studio
Baixe e instale o Android Studio em sua máquina. O Android Studio é necessário para configurar o ambiente de desenvolvimento Android.

2. Instalar as dependências
Após clonar o repositório, navegue até a pasta do projeto e execute o seguinte comando para instalar todas as dependências necessárias:

npm install
3. Configurar variáveis de ambiente
Dentro do projeto, existe um arquivo chamado .env.example. Use este arquivo como base para criar um arquivo .env, configurando as variáveis de ambiente necessárias.

Nota importante: A variável ANDROID_HOME deve ser configurada com o caminho para a pasta android-sdk, que pode ser encontrada dentro da pasta de instalação do Android Studio.

Exemplo:
ANDROID_HOME=/Users/usuario/Library/Android/sdk
4. Iniciar a aplicação
Para iniciar a aplicação utilizando o Expo, rode o seguinte comando:

npm expo start
Este comando abrirá o Expo Developer Tools, onde você poderá escolher entre rodar a aplicação em um emulador Android ou em um dispositivo físico.