import React from "react";
import { Flex, FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"
import "./_home.scss";

const Home: React.FC<{}> = () => {
    return (
        <Flex className='home-flex'>
            <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
        </Flex>
    )
}

export default Home;