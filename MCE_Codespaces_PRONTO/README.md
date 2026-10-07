# MCE — Monitoramento Computacional Escolar
## Versão preparada para GitHub Codespaces

Esta versão foi ajustada para que o aluno consiga abrir o projeto com o mínimo possível de configuração.

## Forma mais fácil

1. Crie um repositório vazio no GitHub.
2. Envie **todos os arquivos desta pasta para a raiz do repositório**.
3. No GitHub, clique em **Code**.
4. Abra a guia **Codespaces**.
5. Clique em **Create codespace on main**.
6. Aguarde o ambiente terminar de carregar.

O Codespaces executará `npm install` automaticamente.

Depois, abra o terminal e execute:

```bash
npm run dev
```

Quando aparecer a porta **5173**, clique em **Open in Browser**.

## Forma ainda mais simples

No terminal:

```bash
./APRESENTAR.sh
```

O script instala as dependências quando necessário e inicia o projeto.

## Se a página não abrir automaticamente

1. Abra a aba **PORTS / PORTAS**.
2. Procure a porta **5173**.
3. Clique no ícone de globo.
4. Escolha **Open in Browser**.

## Login para teste

A autenticação desta versão é demonstrativa.

E-mail:
```text
admin@escola.edu.br
```

Senha:
```text
1234
```

Na prática, qualquer e-mail e senha preenchidos permitem entrar, porque ainda não existe banco de dados ligado à autenticação.

## Comandos

Executar:
```bash
npm run dev
```

Instalar dependências:
```bash
npm install
```

Gerar versão de produção:
```bash
npm run build
```

## O que foi corrigido

O ZIP original possuía uma configuração específica do **Figma Make** que importava arquivos de uma pasta `.figma` que não estava presente. Isso poderia impedir o projeto de iniciar.

Nesta versão:
- removi a dependência da configuração interna do Figma Make;
- simplifiquei o `vite.config.ts`;
- configurei o Vite para Codespaces;
- padronizei a porta **5173**;
- adicionei `.devcontainer`;
- configurei `npm install` automático;
- defini Node.js 22;
- criei `APRESENTAR.sh`;
- deixei o fluxo apenas com **npm**, evitando confusão com pnpm.

## Onde trabalhar

O código principal fica em:

```text
src/
```

Não edite:

```text
node_modules/
```

Essa pasta é criada automaticamente.
