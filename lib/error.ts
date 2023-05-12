export function getErrorMessage(error: string | null | undefined) {
  switch (error) {
    case "authentication_failed":
      return "Email ou senhas incorretos";

    default:
      return null;
  }
}
