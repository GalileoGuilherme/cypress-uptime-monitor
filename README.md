Uptime Monitor com Cypress e CI/CD

Este projeto tem como objetivo monitorar a disponibilidade de sites específicos, como google.com.br e globo.com.br, utilizando testes automatizados com Cypress integrados a um pipeline de CI/CD no GitHub Actions. Caso um dos sites esteja indisponível, o sistema envia uma notificação por e-mail para alertar os responsáveis.

Funcionalidades

Realiza requisições periódicas (a cada 5 minutos) para verificar se os sites estão ativos.

Integração com CI/CD para execução automatizada.

Notificações por e-mail em caso de indisponibilidade.

Logs detalhados no pipeline para auditoria e resolução de problemas.

Tecnologias Utilizadas

Node.js: Ambiente de execução JavaScript.

Cypress: Ferramenta de testes automatizados.

GitHub Actions: CI/CD para execução dos testes.

Nodemailer: Envio de notificações por e-mail.
