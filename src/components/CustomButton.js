import { Button as ChakraButton } from '@chakra-ui/button';



function CustomButton(props) {
    return (
        <ChakraButton
            fontWeight="bold"
            size="md"
            padding="0.75rem"
            backgroundColor="#F4CE14"
            transition={"transform 0.2s ease, background-color 0.2s ease"}
            _hover={{ backgroundColor: "#ffd700", transform: "scale(1.05)"}}
            {...props}
        >
            {props.children}
        </ChakraButton>
    );
}

export default CustomButton;