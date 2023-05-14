export function html(params: { url: string; host: string; theme: Theme }) {
  const { url, host, theme } = params;

  const color = {
    background: "#f9f9f9",
    text: "#444",
    mainBackground: "#fff",
    buttonBackground: "#1F883D",
    buttonText: theme.buttonText || "#fff",
  };

  return `
  <body style="background: ${color.background}; height: 500px; width: 100%; display: flex; justify-center: center; items-center: center;">
    <table width="100%" border="0" cellspacing="20" cellpadding="0"
      style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 5px;">
      <tr>
        <td align="center"
          style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
          Prezado(a) usuário(a) <br> Obrigado por se cadastrar em Custom Resume. <br>Por favor, clique no botão abaixo para fazer login
        </td>
      </tr>
      <tr>
        <td align="center" style="padding: 5px 0;">
          <table border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
                  target="_blank"
                  style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px;  display: inline-block; font-weight: bold;">Acessar sua Conta
                  </a></td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="center"
          style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
          Se você não se cadastrou em nosso serviço, por favor ignore este e-mail.
        </td>
      </tr>
    </table>
  </body>
  `;
}

export function text({ url, host }: { url: string; host: string }) {
  return `Sign in to ${host}\n${url}\n\n`;
}
