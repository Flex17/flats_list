import React from 'react';

interface HeaderProps {
  children: React.ReactNode,
}

const Header = ({ children }: HeaderProps) => (
  <header>
    <h6 className="xxs:mb-10 md:mb-6 2xl:mb-12">{children}</h6>
  </header>
);

export default Header;
