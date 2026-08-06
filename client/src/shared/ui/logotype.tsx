import Image from "next/image";
import Link from "next/link";

export const Logotype = () => {
  return (
    <Link href="/" className="flex items-center gap-3.75">
      <Image src="/logotype.png" alt="Next Pizza" width={35} height={35} />
      <div className="flex flex-col leading-none">
        <span className="text-2xl font-black">NEXT PIZZA</span>
        <span className="text-mini text-muted-foreground">
          вкусней уже некуда
        </span>
      </div>
    </Link>
  );
};
