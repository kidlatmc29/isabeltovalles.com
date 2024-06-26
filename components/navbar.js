import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { useTheme } from "next-themes";
import pfp from '../public/chibi_pfp.png'
import ico from '../public/favicon.ico'
import NextImage from "next/image";

export default function HomeNavBar() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleThemeSwitch = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Navbar shouldHideOnScroll>
      {/* Menu toggle on the left */}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="sm:hidden mr-2"
      />

      {/* Navbar content including brand */}
      <NavbarContent className="flex items-center justify-between w-full">
        {/* Conditional rendering for large screens */}
          <NavbarItem className="hidden sm:block">
            <Button 
              isIconOnly
              as={Link}
              color="default" 
              variant="light"
              size="md"
              href="/"
            >
              <NextImage
                src={ico}
                width={60}
                height={60}
                alt="Home Icon"
                style={{ opacity: 1 }}
              />
            </Button>
          </NavbarItem>

        {/* Menu items */}
        <NavbarMenu opened={isMenuOpen} className="sm:hidden text-center">
          <NavbarMenuItem>
            <Button 
              as={Link}
              color="default" 
              variant="light"
              size="lg"
              href="/"
            >
              Home
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button 
              as={Link}
              color="default" 
              variant="light"
              size="lg"
              href="https://isabeltovalles.com/exp"
            >
              Experience
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button 
              as={Link}
              color="default" 
              variant="light"
              size="lg"
              href="https://isabeltovalles.com/cs-resources/spill-tea"
            >
              Resources  
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button 
              as={Link}
              color="default" 
              variant="light"
              size="lg"
              href="https://isabeltovalles.com/socials"
            >
              Socials
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button 
              as={Link}
              color="default" 
              variant="light"
              size="lg"
              href="https://isabeltovalles.com/contact-me"
            >
              Contact
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button 
              isIconOnly 
              onClick={handleThemeSwitch} 
              color="default" 
              variant="light"
              size="md"
              className="hover:rotate-180 transform origin-center"
            >
              {theme === 'light' ? '🌕' : '🌑'}
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>

        {/* Menu items for larger screens */}
        <NavbarContent justify="end" className="hidden sm:flex">
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
      </NavbarContent>
    </Navbar>
  );
}
