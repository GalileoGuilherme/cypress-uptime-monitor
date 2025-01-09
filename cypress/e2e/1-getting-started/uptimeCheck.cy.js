describe('Uptime Monitoring', () => {
  const urls = [
    'https://google.com.br', 
    'https://globo.com',
    'http://www.lalalalalririala.com/'
    ];

  urls.forEach((url) => {
    it(`should check if ${url} is up`, () => {
      cy.request({
        url,
        failOnStatusCode: false,
      }).then((response) => {
        if (response.status !== 200) {
          sendNotificationEmail(url, response.status);
        } else {
          cy.log(`${url} is up with status ${response.status}`);
        }
      });
    });
  });

  const sendNotificationEmail = (url, status) => {
    cy.task('sendEmail', { url, status });
  };
});
