import Logo from '../images/Logo.svg'
import { Flex, Link, Image, HStack} from '@chakra-ui/react';



function NavLink({ children, href }) {
    return (
        <Link
            href={href}
            fontSize="lg"
            fontWeight="bold"
            color="black"
            textDecoration="none"
            _hover={{ color: "blue" }}
        >
            {children}
        </Link>
    );
}


function Nav() {
    return (
        <Flex
            as="nav"
            align="center"
            wrap="wrap"
            gap="2rem"
            padding="1rem"
            bg="white"
            color="black"
            boxShadow="md"
        >
            <Image src={Logo} alt="Logo" />
            <NavLink href="/">Home</NavLink>
            <NavLink href="/">About</NavLink>
            <NavLink href="/"> Menu</NavLink>
            <NavLink href="/"> Reservations</NavLink>
            <NavLink href="/"> Order Online</NavLink>
            <NavLink href="/"> Login</NavLink>
        </Flex>
    );
}

export { Nav, NavLink };

export default Nav;