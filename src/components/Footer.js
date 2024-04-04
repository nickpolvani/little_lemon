import React from "react";
import {
  Flex,
  Image,
  VStack,
  Text,
  Heading,
} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {PhoneIcon, AtSignIcon } from "@chakra-ui/icons";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Logo from "../images/little_lemon_logo.png";

function FooterNavLink({ children, href }) {
  return (
    <Link
      to={href}
      color="white"
      _hover={{ fontWeight: "bold", textDecoration: "underline" }}
    >
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <Flex
      as="footer"
      align="start"
      wrap="wrap"
      justify="space-around"
      padding="2rem"
      bg="#505d57"
      color="white"
      gap="2rem"
    >
      <VStack align="start" gap="1rem">
        <Image src={Logo} alt="Little Lemon Logo" boxSize="100px" />
        <Text fontStyle="italic">Bringing a slice of Italy to Chicago.</Text>
      </VStack>

      <VStack align="start" gap="1rem">
        <Heading size="md">Navigation</Heading>
        <FooterNavLink href="/">Home</FooterNavLink>
        <FooterNavLink href="/">About Us</FooterNavLink>
        <FooterNavLink href="/">Menu</FooterNavLink>
        <FooterNavLink href="/booking">Reservations</FooterNavLink>
        <FooterNavLink href="/">Order Online</FooterNavLink>
        <FooterNavLink href="/">Login</FooterNavLink>
      </VStack>

      <VStack align="start" gap="1rem">
        <Heading size="md">Contact Us</Heading>
        <Text>
          <AtSignIcon /> littlelemon@restaurant.com
        </Text>
        <Text>
          <PhoneIcon /> +1 312-555-0198
        </Text>
        <Text>1234 Pasta Lane, Chicago, IL</Text>
      </VStack>

      <VStack align="start" gap="1rem">
        <Heading size="md">Follow Us</Heading>
        <Link href="https://instagram.com/littlelemon" isExternal>
          Instagram <ExternalLinkIcon mx="2px" />
        </Link>
        <Link href="https://facebook.com/littlelemon" isExternal>
          Facebook <ExternalLinkIcon mx="2px" />
        </Link>
        <Link href="https://twitter.com/littlelemon" isExternal>
          Twitter <ExternalLinkIcon mx="2px" />
        </Link>
      </VStack>
    </Flex>
  );
}

export default Footer;
