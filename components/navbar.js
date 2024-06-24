import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image } from "@nextui-org/react";
import { useTheme } from "next-themes";
import pfp from '../public/chibi_pfp.png'
import ico from '../public/favicon.ico'
import NextImage from "next/image";

export default function HomeNavBar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleThemeSwitch = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <NavbarItem>
          <Button 
                isIconOnly 
                as={Link}
                color="default" 
                variant="light"
                size="md"
                href="/"
            >
                <Image
                  as={NextImage}
                  src={ico}
                  width={60}
                  height={60}
                  alt="Home Icon"
                  style={{ opacity: 1 }}
                />
            </Button>
        </NavbarItem>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
            <Button 
                as={Link}
                color="default" 
                variant="light"
                size="lg"
                href="https://isabeltovalles.com/exp"
            >
                Experience
            </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
                as={Link}
                color="default" 
                variant="light"
                size="lg"
                href="https://isabeltovalles.com/cs-resources/spill-tea"
            >
                Resources  
            </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
                as={Link}
                color="default" 
                variant="light"
                size="lg"
                href="https://isabeltovalles.com/socials"
            >
                Socials
            </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
                as={Link}
                color="default" 
                variant="light"
                size="lg"
                href="https://isabeltovalles.com/contact-me"
            >
                Contact
            </Button>
        </NavbarItem>
        <NavbarItem>
            <Button 
                isIconOnly 
                onClick={handleThemeSwitch} 
                color="default" 
                variant="light"
                size="md"
                className="hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300 ease-in-out"
            >
                {theme === 'light' ? '🌕' : '🌑'}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
