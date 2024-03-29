import {Box} from "@chakra-ui/react";

function Page({children}) {
    return (
        <Box pt={"6rem"}>
            {children}
        </Box>
    );
}

export default Page;