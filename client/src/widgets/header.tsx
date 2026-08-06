import { Search } from "@/features/search";
import { UserButton } from "@/features/userButton";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Logotype } from "@/shared/ui/logotype";

export const Header = () => {
  return (
    <header className="py-10">
      <Container className="flex items-center gap-10">
        <Logotype />
        <div className="flex-1">
          <Search />
        </div>
        <div className="">
          <UserButton />
        </div>
      </Container>
    </header>
  );
};
