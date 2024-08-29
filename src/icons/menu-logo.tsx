import Image from 'next/image';
import React from 'react'

type MenuLogoProps = {
  onClick(): void
}

export const MenuLogo = ({ onClick }: MenuLogoProps) => {
  return (
    <Image
      src="/images/logohack.png"
      alt="LOGO"
      style={{
        width: "50px",
        height: "50px",
      }}
      width={100}
      height={100}
      onClick={onClick}
    />
  );
}
