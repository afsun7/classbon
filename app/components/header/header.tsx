import Image from "next/image";
import { TopNavigation } from "./top-navigation";

export const Header = () => {
  return (
    <header className="border-b dark:border-base-content dark:border-opacity-5">
      <div className="container flex items-center justify-between mx-auto">
        <Image
          src="/images/logo-light.svg"
          width={100}
          height={36}
          alt="کلاسبن"
        />
        <TopNavigation />
        <div className="mr-auto">User Authentication</div>
      </div>
    </header>
  );
};
