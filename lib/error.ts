export function getErrorMessage(error: string | null | undefined) {
  switch (error) {
    case "authentication_failed":
      return "Email ou senhas incorretos";
    case "user_create_error":
      return "Erro ao criar usuario, tente novamente";
    case "user_already_signed":
      return "Usuario ja existe";
    case "user_created":
      return "Usuario criado com sucesso";
    default:
      return null;
  }
}
