import React from 'react';
// import '../style/Footer.css'; // Make sure to create a corresponding CSS file for styling
import Logo from '../images/Logo.svg'
import { Flex, Link, Image, VStack, Hstack, HStack, Text, Heading} from '@chakra-ui/react';
import { NavLink } from './Nav';

function Footer() {
  return (

    <HStack
      as="nav"
      align="start"
      wrap="wrap"
      gap="4rem"
      padding="1rem"
      bg="white"
      color="black"
      boxShadow="md"
    >

      <Image src={Logo} alt="Logo" />
      <VStack
        align={"start"}
        gap={"1rem"}>
          <Heading >Navigation</Heading>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/">About</NavLink>
        <NavLink href="/"> Menu</NavLink>
        <NavLink href="/"> Reservations</NavLink>
        <NavLink href="/"> Order Online</NavLink>
        <NavLink href="/"> Login</NavLink>
      </VStack>
      <VStack
      align="start"
      gap={"1rem"}
      >
        <Heading>Contact</Heading>
        <Text>Address</Text>
        <Text>Texthone number</Text>
        <Text>Email</Text>
      </VStack>
      <VStack
            align="start"
            gaText={"1rem"}>
        <Heading>Social Media Links</Heading>
        <Text>Address</Text>
        <Text>Texthone number</Text>
        <Text>Email</Text>
        <Text>Instagram</Text>
      </VStack>


    </HStack>

    //   <img src={Logo} alt="Logo" />



    //   <li><a href="/">Home</a></li>
    //   <li><a href="/about">About</a></li>
    //   <li><a href="/menu">Menu</a></li>
    //   <li><a href="/reservations">Reservations</a></li>
    //   <li><a href="/order-online">Order Online</a></li>
    //   <li><a href="/login">Login</a></li>

    // <h3>Contact</h3>
    // <p>Address</p>
    // <p>Phone number</p>
    // <p>Email</p>

    // <h3>Social Media Links</h3>
    // <p>Address</p>
    // <p>Phone number</p>
    // <p>Email</p>

  );
}

export default Footer;
