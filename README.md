# Cypress Uptime Monitor

> Sistema automatizado para monitoramento contínuo da disponibilidade de sites e serviços críticos, integrado com pipelines de CI/CD e alertas por e-mail.

## 📦 Pré-requisitos

* Git
* Node.js
* Um editor de código, como o VSCode

## 🗂 Estrutura do projeto

```text
cypress-uptime-monitor/
  ├─ .github/workflows/ # Pipeline de CI/CD (GitHub Actions)
  ├─ cypress/
  │   ├─ e2e/          # Testes de verificação de uptime
  │   └─ support/      # Funções de suporte e notificações
  ├─ cypress.config.js # Configurações globais do Cypress
  ├─ package.json      # Dependências e scripts
  └─ package-lock.json

```

## ⚙️ Configuração e Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>

```


2. Acesse a pasta do projeto:
```bash
cd cypress-uptime-monitor

```


3. Instale as dependências:
```bash
npm install

```



## 🚀 Scripts NPM disponíveis

```bash
# Executar a verificação de uptime localmente em modo headless
npm run cypress:run

```

## 📌 Funcionalidades Principais

* **Verificações Periódicas:** Execução automatizada (a cada 5 minutos via CI/CD) para checar se os alvos estão ativos.
* **Integração Contínua:** Configurado com GitHub Actions para rodar de forma autônoma sem intervenção manual.
* **Alertas de Indisponibilidade:** Notificações via e-mail (utilizando Nodemailer) acionadas imediatamente caso falhas sejam detetadas.
* **Auditoria:** Logs detalhados no pipeline para rastreabilidade e resolução rápida de problemas.

## ⚡ Objetivo

Garantir alta disponibilidade e resposta rápida a incidentes em serviços críticos através de uma abordagem leve baseada em automação de testes.

## 📝 Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

## 👤 Autor

Desenvolvido por **Galileo Guilherme**

[LinkedIn](https://www.linkedin.com/in/galileo-guilherme-silva-01996693/) • Email: galileoguilhermeqa@gmail.com
