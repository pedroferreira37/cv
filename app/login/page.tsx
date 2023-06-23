import React from "react";
import { OAuthSignInButton } from "@/components/ui/oauth-signin-button";

export default function Page() {
  return (
    <div className="h-[calc(100vh_-_65px)] flex justify-center items-center ">
      <form className="w-[280px]">
        <h2 className="text-center py-4 text-2xl font-medium">Bem vindo</h2>
        <p className="text-sm text-gray-600 text-center font-medium mb-4">
          Crie seu currículo perfeito com facilidade <br />
          Comece agora
        </p>

        <OAuthSignInButton />
      </form>
    </div>
  );
}
