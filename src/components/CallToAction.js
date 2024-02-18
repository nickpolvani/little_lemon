
import RestaurantImg from "../images/restauranfood.jpg"
import CustomButton from './CustomButton'
import { Flex, Box, Image, Text, VStack, HStack, CardBody, Heading } from '@chakra-ui/react';

function CallToAction() {
    // Use color mode value to switch between light and dark colors if needed
    const bgColor = "#505d57"

    return (
        <Flex>
            <HStack
                spacing={0}
                w="full"
                bg={bgColor}
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                align={"center"}
            >
                <VStack
                    paddingLeft={"2rem"}
                    paddingRight={"2rem"}
                    paddingTop={"1rem"}
                    paddingBottom={"1rem"}
                    spacing={1}
                    align="start"
                    w="100%" // Adjust the width as necessary
                >
                    {/* <CardBody> */}
                    <Heading fontWeight="bold" color="#ffd700" fontSize="xx-large">
                        Little Lemon
                    </Heading>
                    <Heading color="white" fontSize="x-large">
                        Chicago
                    </Heading>
                    <Text paddingTop="2rem" color="white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                    {/* </CardBody> */}
                    <CustomButton href="/booking"> Reserve a Table</CustomButton>
                </VStack>
                <Box w="80%" position="relative"> {/* Adjust the width as necessary */}
                    <Image
                        src={RestaurantImg}// Replace with your image URL
                        alt="Little Lemon"
                        objectFit="cover"
                        width="auto"
                        height="20rem"
                    />
                </Box>
            </HStack>
        </Flex>
    );
}

export default CallToAction;