import { Button as ChakraButton } from '@chakra-ui/button';
import {Link} from "react-router-dom";


function CustomButton({ to, children, ...props }) {
    return (
        <ChakraButton
            as={Link}
            to={to}
            fontWeight="bold"
            size="md"
            padding="0.75rem"
            backgroundColor="#F4CE14"
            transition={"transform 0.2s ease, background-color 0.2s ease"}
            _hover={{ backgroundColor: "#ffd700", transform: "scale(1.05)" }}
            {...props}
        >
            {children}
        </ChakraButton>
    );
}

export default CustomButton;