import { Box, Button, Image, Text } from "@chakra-ui/react";
import logo from "./assets/MainLogo.png";
import { useState } from "react";
const Navbar = () => {
  const [open, setopen] = useState(false);

 

  return (
    <>
      <Box
        w="100vw"
        position={"relative"}
        p="-2rem"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        boxShadow={"0px 5px 20px rgba(0,0,0,0.130)"}
      >
        <Image m="-1rem 4rem" src={logo} w="12%" h="120px" alt="no pic" />
        <Box display={"flex"} gap="10px" mr="2rem">
          <Button
            backgroundColor={"transparent"}
            color={"white"}
            _hover={{ color: "black", background: "white" }}
            onClick={() => setopen(true)}
            letterSpacing={"3px"}
            fontWeight={"500"}
          >
            MEMBERSHIP
          </Button>
        </Box>
      </Box>

      <Box
       
        zIndex={5}
        display={open ? "flex" : "none"}
        position={"absolute"}
        flexDir={"column"}
        gap="15px"
        top={5}
        bottom={0}
        left={5}
        right={5}
        maxH={"90vh"}
        overflowY={"scroll"}
        backdropFilter="blur(5px)"
        backgroundColor="#474fbf"
      >
        <Text
          color={"blue.300"}
          fontFamily={"Kaushan Script,cursive"}
          letterSpacing={"4px"}
          fontWeight={600}
          textAlign={"center"}
          fontSize={"10vmin"}
        >
          Membership Plans
        </Text>
        <Box
          w="100%"
          h="100%"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap="5%"
        >
          <Box
            w="25%"
            h="75%"
            _hover={{ boxShadow: "0px 5px 20px rgba(0,0,0,0.130)" }}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            gap="20px"
            p="1.5rem"
          >
            <Box
              w="100%"
              h="fit-content"
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              borderBottom={"1px solid black"}
              pb="20px"
            >
              <Text
                color={"white"}
                letterSpacing={"2px"}
                fontWeight={800}
                textAlign={"center"}
                fontSize={"4vmin"}
              >
                Unlimited Member
              </Text>
              <Text
                letterSpacing={"2px"}
                fontWeight={800}
                textAlign={"center"}
                fontSize={"7vmin"}
                fontFamily={"Sirin Stencil"}
              >
                ₹ 5000
              </Text>

              <Text
                letterSpacing={"2px"}
                fontWeight={800}
                textAlign={"center"}
                fontSize={"2vmin"}
                fontFamily={"Sirin Stencil"}
              >
                Unlimited Plan w/all perks *No Contract
              </Text>
            </Box>

            <Box display={"flex"} flexDir={"column"} gap="10px">
              <Text
                letterSpacing={"2px"}
                fontWeight={800}
                textAlign={"center"}
                fontSize={"2vmin"}
                fontFamily={"Sirin Stencil"}
              >
                Unlimited classes
              </Text>

              <Text
                letterSpacing={"2px"}
                fontWeight={800}
                textAlign={"center"}
                fontSize={"2vmin"}
                fontFamily={"Sirin Stencil"}
              >
                Fitness assessment
              </Text>

              <Text
                letterSpacing={"2px"}
                fontWeight={800}
                textAlign={"center"}
                fontSize={"2vmin"}
                fontFamily={"Sirin Stencil"}
              >
                Personalized Macros Diet Plan w/ Dietitian
              </Text>

              <Text
                letterSpacing={"2px"}
                fontWeight={800}
                textAlign={"center"}
                fontSize={"2vmin"}
                fontFamily={"Sirin Stencil"}
              >
                locker and shower
              </Text>
            </Box>
          </Box>
          
          <Box
            w="25%"
            h="75%"
            _hover={{ boxShadow: "0px 5px 20px rgba(0,0,0,0.130)" }}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            gap="20px"
            p="1.5rem"
          >
            <Box
              w="100%"
              h="fit-content"
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              borderBottom={"1px solid black"}
              pb="20px"
            >
              <Text
                color={"white"}
                letterSpacing={"2px"}
                fontWeight={800}
                textAlign={"center"}
                fontSize={"4vmin"}
              >
                Gold Membership
              </Text>
              <Text
                letterSpacing={"2px"}
                fontWeight={800}
                textAlign={"center"}
                fontSize={"7vmin"}
                fontFamily={"Sirin Stencil"}
              >
                ₹ 3000
              </Text>

              <Text
                letterSpacing={"2px"}
                fontWeight={800}
                textAlign={"center"}
                fontSize={"2vmin"}
                fontFamily={"Sirin Stencil"}
              >
                8 classes a month + Perks *NO CONTRACT
              </Text>
            </Box>

            <Box display={"flex"} flexDir={"column"} gap="10px">
              <Text
                letterSpacing={"2px"}
                fontWeight={800}
                textAlign={"center"}
                fontSize={"2vmin"}
                fontFamily={"Sirin Stencil"}
              >
                8 Classes a Month
              </Text>

              <Text
                letterSpacing={"2px"}
                fontWeight={800}
                textAlign={"center"}
                fontSize={"2vmin"}
                fontFamily={"Sirin Stencil"}
              >
                Fitness assessment
              </Text>

              <Text
                letterSpacing={"2px"}
                fontWeight={800}
                textAlign={"center"}
                fontSize={"2vmin"}
                fontFamily={"Sirin Stencil"}
              >
                locker and shower
              </Text>
            </Box>
          </Box>

          <Box
            w="25%"
            h="75%"
            _hover={{ boxShadow: "0px 5px 20px rgba(0,0,0,0.130)" }}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            gap="20px"
            p="1.5rem"
          >
            <Box
              w="100%"
              h="fit-content"
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              borderBottom={"1px solid black"}
              pb="20px"
            >
              <Text
                color={"white"}
                letterSpacing={"2px"}
                fontWeight={800}
                textAlign={"center"}
                fontSize={"4vmin"}
              >
                Single Class Pass
              </Text>
              <Text
                letterSpacing={"2px"}
                fontWeight={800}
                textAlign={"center"}
                fontSize={"7vmin"}
                fontFamily={"Sirin Stencil"}
              >
                ₹ 2000
              </Text>

              <Text
                letterSpacing={"2px"}
                fontWeight={800}
                textAlign={"center"}
                fontSize={"2vmin"}
                fontFamily={"Sirin Stencil"}
              >
                Drop in for a class and try out something new
              </Text>
            </Box>

            <Box display={"flex"} flexDir={"column"} gap="10px">
              <Text
                letterSpacing={"2px"}
                fontWeight={800}
                textAlign={"center"}
                fontSize={"2vmin"}
                fontFamily={"Sirin Stencil"}
              >
                1 single session class
              </Text>

              <Text
                letterSpacing={"2px"}
                fontWeight={800}
                textAlign={"center"}
                fontSize={"2vmin"}
                fontFamily={"Sirin Stencil"}
              >
                showers and locker
              </Text>
            </Box>
          </Box>
        </Box>

        <Button
          m="auto"
          w="10%"
          background="transparent"
          color={"white"}
          onClick={() => setopen(false)}
        >
          Close
        </Button>
      </Box>
    </>
  );
};

export default Navbar;
