# Use a imagem oficial do Node.js como base
FROM node:18

# Crie e defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos de configuração e dependências
COPY package.json yarn.lock ./

# Instale as dependências usando o Yarn
RUN yarn install

# Copie todo o código-fonte para o contêiner
COPY . .

# Defina as variáveis de ambiente com base no .env
ENV API_URL=${API_URL}

# Exponha a porta onde o aplicativo estará em execução
EXPOSE 3001

RUN yarn build

# Comando para iniciar o servidor Next.js
CMD ["yarn", "start"]
