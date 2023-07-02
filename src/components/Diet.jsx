/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';


const Diet = () => {
  const [diet,setdiet] = useState('Get Your Diet Plan here');
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      position={"relative"}
      top={"0"}
      gap="15px"
      w="100vw"
      h="100vh"
    >
      <Text
        data-scroll
        data-scroll-speed="-6"
        data-scroll-direction="horizontal"
        position={"relative"}
        top={"0"}
        color={"white"}
        fontFamily={"Kaushan Script,cursive"}
        letterSpacing={"4px"}
        fontWeight={700}
        fontSize={"15vmin"}
        textAlign={"start"}
      >
        Diet Recommendation
      </Text>

      <Box w="100%" h="100%" display={"flex"}>
        <Box
          w="45%"
          h="100%"
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap="20px"
        >
          <Input
            min={30}
            textAlign={"center"}
            type="number"
            w="50%"
            placeholder="Put your Height(in cm)"
            border={"none"}
            color={"white"}
            outline={0}
            boxShadow={"0px 5px 20px rgba(0,0,0,0.110)"}
          />
          <Input
            min={30}
            type="number"
            textAlign={"center"}
            color={"white"}
            w="50%"
            placeholder="Put your Weight(in KG)"
            border={"none"}
            outline={0}
            boxShadow={"0px 5px 20px rgba(0,0,0,0.110)"}
          />
          <Box display={"flex"} gap="10px">
            <Button>School</Button>
            <Button>Work</Button>
            <Button>Free</Button>
          </Box>
          <Button
            textColor={"white"}
            variant={"outline"}
            w="40%"
            background={"00d0ff92"}
          >
            Get Diet Plan
          </Button>
        </Box>
        <Box
          w="55%"
          h="100%"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          overflowY={"scroll"}
          p="0 2rem"
        >
          <Text fontSize={"2.5vmin"} fontFamily={"Sirin Stencil"}>
            {diet}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Diet
