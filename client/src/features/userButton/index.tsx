import { Button } from "@/shared/ui/button";
import { User } from "lucide-react";
import { AuthButton } from "./authButton";

export const UserButton = () => {
  const isAuth = false;
  return isAuth ? (
    <Button>
      <User size={16} />
        <span>Профиль</span>
    </Button>
  ) : (
    <AuthButton />
  );
};
