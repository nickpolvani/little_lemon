import React from 'react';
import { Grid, Box, Heading, Text, Image, GridItem } from '@chakra-ui/react';
import RestaurantImg from "../images/restaurant.jpg";
import FirstImg from "../images/Mario_and_Adrian.jpg"


function Description() {
    return (
        <Grid
            p={"10%"}
            paddingTop={"10rem"}
            paddingRight="0"
            gap={"3rem"}
            justifyContent="center"
            alignItems="center"
            backgroundColor={"#f5f5f5"}
            templateColumns={
               { md:"1fr",
                lg: "2fr 1fr 1fr"}
            }
            wrap="wrap"
        >
            <GridItem width="80%">
                <Heading size="lg" fontSize={"2rem"}>Little Lemon</Heading>
                <Heading size="md" color="grey">Chicago</Heading>
                <Text>
                    We are a family-owned restaurant that has been serving the Chicago area for over 20 years. We are proud to offer
                    a variety of dishes that are made with the freshest ingredients. Our menu includes a variety of dishes that are
                    sure to satisfy your cravings. We are open for breakfast, lunch, and dinner. We also offer catering services for
                    your special events. We look forward to serving you soon!
                </Text>
            </GridItem>
            <GridItem position="relative" height="20rem">
                <Image
                    src={RestaurantImg}
                    position="absolute"
                    top="0"
                    left="0"
                    width={{md:"80%", lg:"100%"}}
                    height="100%"
                    objectFit="cover"
                    alt="Overlay Image 2"
                />
            </GridItem>
            <GridItem position="relative" height="20rem">
                <Image
                    src={FirstImg}
                    position="absolute"
                    top={{md:"0", lg:"-15%"}}
                    left={{md:"0", lg:"-60%"}}
                    width={{md:"80%", lg:"100%"}}
                    height="100%"
                    objectFit="cover"
                    alt="Overlay Image 1"
                />
            </GridItem>
        </Grid>
    );
}

export default Description;
