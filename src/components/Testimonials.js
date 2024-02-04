
import { Card, HStack, Image, Text, VStack, CardBody, Heading, Flex } from '@chakra-ui/react';
import PaoloImg from "../images/testimonials/paolo.jpeg";
import MarilynImg from "../images/testimonials/marilyn.jpg";
import MorganImg from "../images/testimonials/morgan.jpeg";
import SpongebobImg from "../images/testimonials/spongebob.jpeg";

const ratings = [
    {
        id: 1,
        name: "Morgan",
        image: MorganImg,
        rating: 5,
        review: "The best food in Chicago!"
    },
    {
        id: 2,
        name: "Marilyn",
        image: MarilynImg,
        rating: 4,
        review: "Great food and service!"
    },
    {
        id: 3,
        name: "Paolo",
        image: PaoloImg,
        rating: 5,
        review: "I love the food here!"
    },
    {
        id: 4,
        name: "Spongebob",
        image: SpongebobImg,
        rating: 5,
        review: "When I'm not eating Krabby Patties, I'm eating here!"
    }
]


function TestimonialsCard({ rating }) {
    return (
        <Card
            w="15rem"
            padding="1rem"
            spacing="1rem"
            borderRadius={16}
            backgroundColor={"#505d57"}
            _hover={{
                transform: 'scale(1.05)', // Enlarge card by 5%
                zIndex: 10, // Ensure the card is above others when it's enlarged
                boxShadow: 'lg' // Optional: apply a larger shadow for better focus on hover
            }}
            transition="transform 0.3s ease"
            color="white"
        >
            <CardBody
            >
                <VStack>
                    <Heading size="lg">Rating: {rating.rating}</Heading>
                    <HStack>
                        <Image boxSize="8rem" objectFit={"cover"} src={rating.image} alt={rating.name} />
                        <Text size="md" fontWeight={"bold"}> {rating.name}</Text>

                    </HStack>
                    <Text size="md">{rating.review}</Text>
                </VStack>
            </CardBody>
        </Card>
    )
}



function Testimonials() {
    return (
        <VStack
        padding={"2rem"}
        backgroundColor="#FBDABB"
        >

            <Heading fontSize="x-large">Testimonials</Heading>

            <Flex
                justifyContent="space-evenly"
                gap={"2rem"}
                wrap="wrap"
                spacing={4}>
                {ratings.map((rating) => (
                    <TestimonialsCard key={rating.id} rating={rating} />
                ))}
            </Flex>
        </VStack>
    );
};

export default Testimonials;