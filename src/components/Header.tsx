import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[120px] flex justify-center items-center">
      <div className="w-[80%] flex justify-between items-center h-full">
        <Link href="/" className="logo">
          <Image src="/images/logo.png" alt="logo" width={200} height={200} />
        </Link>
        <nav className="flex justify-center items-center w-auto h-auto p-2">
                <Image src="/images/menu-icon.png" alt="logo" width={50} height={50} className="w-[50px] h-[50px]" />
        </nav>
      </div>
    </div>
  );
};

export default Header;
