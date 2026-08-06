import { Input } from "@/shared/ui/input";
import { SearchIcon } from "lucide-react";

export const Search = () => {
  return (
    <label className="relative">
      <SearchIcon
        size={16}
        className="absolute left-5  top-1/2 -translate-y-1/2 text-muted-foreground stroke-foreground/50"
      />
      <Input className="bg-muted border-none ring-0 focus:ring-0 pl-12 text-[16px]" placeholder="Поиск..." />
    </label>
  );
};
