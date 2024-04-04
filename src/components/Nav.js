import React from "react";
import {
  Flex,
  Image,
  IconButton,
  Link as ChakraLink,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Box,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "../images/Logo.svg";

function NavLink({ children, href }) {
  return (
    <ChakraLink
      as={Link}
      to={href}
      px={2}
      py={1}
      rounded={"md"}
      fontSize="lg"
      fontWeight="bold"
      color="black"
      textDecoration="none"
      _hover={{ color: "blue" }}
      display="block" // Makes sure links are block-level for vertical stacking in the drawer
    >
      {children}
    </ChakraLink>
  );
}

function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const controlNavbar = () => {
      // Check for the current scroll position to be greater than last scroll position.
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        // If user is scrolling down, hide the navbar
        setIsVisible(false);
      } else {
        // If user is scrolling up, show the navbar
        setIsVisible(true);
      }
      // Setting the lastScrollTop for the next scroll event
      setLastScrollTop(currentScrollTop);
    };
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollTop]);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="white"
      color="black"
      boxShadow="md"
      position="fixed"
      top="0"
      width="100%"
      zIndex="1000"
      transition="top 0.3s"
      style={{ top: isVisible ? "0" : "-100px" }} // Adjust this value according to the navbar height
    >
      <Flex align="center">
        <Image src={Logo} alt="Logo" />
      </Flex>

      {/* Burger Menu Button for smaller screens */}
      <Box display={{ base: "inline-flex", md: "none" }}>
        <IconButton
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant={"outline"}
          aria-label={"Open Menu"}
        />
      </Box>

      {/* Links for larger screens */}
      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <NavLink href="/">Home</NavLink>
        <NavLink href="/">About</NavLink>
        <NavLink href="/">Menu</NavLink>
        <NavLink href="/booking">Reservations</NavLink>
        <NavLink href="/">Order Online</NavLink>
        <NavLink href="/">Login</NavLink>
      </Stack>

      {/* Drawer for Mobile Menu */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack mt="20" spacing={4} align="left">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/">About</NavLink>
              <NavLink href="/">Menu</NavLink>
              <NavLink href="/booking">Reservations</NavLink>
              <NavLink href="/">Order Online</NavLink>
              <NavLink href="/">Login</NavLink>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export { Nav, NavLink };
export default Nav;
