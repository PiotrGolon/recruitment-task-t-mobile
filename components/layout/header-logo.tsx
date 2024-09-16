import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/news.svg" height={28} width={28} alt="Logo" />
        <p className="font-semibold text-white test-2xl ml-2.5">THN Stories</p>
      </div>
    </Link>
  );
};
