
import GreekSaladImg from "../images/greek_salad.jpg";
import BruschettaImg from "../images/bruschetta.jpg";
import LemonDessertImg from "../images/lemon_dessert.jpg";

import CustomButton from "./CustomButton";
import { Card, CardHeader, CardBody, CardFooter, Image } from '@chakra-ui/react'
import { VStack, HStack, Flex, Heading } from "@chakra-ui/react";

const specials = [
    {
        id: 1,
        name: "Greek Salad",
        price: 12.99,
        description: "The famous greek salad of crispy lettuce, peppers, " +
            "olives and our Chicago style feta cheese, garnished with crunchy" +
            " garlic and rosemary croutons.  ",
        img: GreekSaladImg
    },
    {
        id: 2,
        name: "Bruschetta",
        price: 9.99,
        description: "A classic Italian appetizer of toasted bread, " +
            "topped with fresh tomatoes, basil, garlic and olive oil. ",
        img: BruschettaImg
    },
    {
        id: 3,
        name: "Lemon Dessert",
        price: 6.99,
        description: "A delicious lemon dessert with a hint of vanilla and " +
            "a touch of cinnamon. ",
        img: LemonDessertImg
    }
]


function Specials() {


    function SpecialsCard({ special }) {
        return (
            <Card
                w="18rem"
                padding="0.5rem"
                spacing="0.5rem"
                borderRadius={16}
                backgroundColor={"#EDEFEE"}
                _hover={{
                    transform: 'scale(1.05)', // Enlarge card by 5%
                    zIndex: 10, // Ensure the card is above others when it's enlarged
                    boxShadow: 'lg' // Optional: apply a larger shadow for better focus on hover
                }}
                transition="transform 0.3s ease"
            >
                <CardBody
                >
                    <VStack>
                        <Image
                            height="10rem"
                            width={"100%"}
                            objectFit="cover"
                            src={special.img}
                            alt={special.name} />
                        <HStack
                            spacing="0.25rem">
                            <CardHeader fontWeight={"bold"}>{special.name}</CardHeader>
                            <CardHeader color="orange">${special.price}</CardHeader>
                        </HStack>
                        <CardFooter>{special.description}</CardFooter>
                    </VStack>
                </CardBody>
            </Card>
        );
    }

    return (

        <VStack spacing={4}
            alignItems="center"
            padding="0.25rem"
            borderRadius={8}
            boxShadow="md"
            margin="2em">
            <HStack
                spacing={8}
                justifyContent="space-between"
                width="95%"
            >
                <Heading>Specials</Heading>
                <CustomButton>Online Menu</CustomButton>
            </HStack>
            <Flex direction={["column", "row"]} wrap="wrap" align="stretch" gap={"2rem"}>
                {specials.map((special) => (
                    <SpecialsCard key={special.id} special={special} />
                ))}
            </Flex>
        </VStack>

    )
};

export default Specials;
