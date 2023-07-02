import { Box, Image, Text } from "@chakra-ui/react";
import pic from "./assets/Front.png";
const Home = () => {
  return (
    <Box
      w={"100vw"}
      display={"flex"}
      position={"relative"}
      minH={"100vh"}
      h="100vh"
      overflow={"hidden"}
    >
      <Box
        position={"relative"}
        w="55%"
        h="86%"
        display={"flex"}
        flexDir={"column"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        color={"white"}
        p="0 5%"
        gap="20px"
      >
        <Box display={"flex"} gap="14px">
          <Text
            data-scroll
            data-scroll-delay="0.30"
            data-scroll-speed="4"
            lineHeight={"50px"}
            fontSize={"110px"}
            letterSpacing={"13px"}
            fontWeight={900}
            color=" transparent"
            textShadow="0 0 6px #ffffff"
            _hover={{ textShadow: "0 0 1px white"}}
            cursor={"pointer"}
          >
            Unlock
          </Text>
          <Text
            data-scroll
            data-scroll-delay="0.25"
            data-scroll-speed="4"
            lineHeight={"50px"}
            fontSize={"90px"}
            letterSpacing={"13px"}
            fontWeight={700}
            color=" transparent"
            textShadow="0 0 6px #ffffff"
           _hover={{ textShadow: "0 0 1px white"}}
            cursor={"pointer"}
          >
            your
          </Text>
        </Box>

        <Box display={"flex"} gap="14px">
          <Text
            data-scroll
            data-scroll-delay="0.20"
            data-scroll-speed="4"
            lineHeight={"50px"}
            fontSize={"90px"}
            letterSpacing={"13px"}
            fontWeight={700}
            color=" transparent"
            textShadow="0 0 6px #ffffff"
           _hover={{ textShadow: "0 0 1px white"}}
            cursor={"pointer"}
          >
            full
          </Text>

          <Text
            data-scroll
            data-scroll-delay="0.15"
            data-scroll-speed="4"
            lineHeight={"50px"}
            fontSize={"90px"}
            letterSpacing={"13px"}
            fontWeight={700}
            color=" transparent"
            textShadow="0 0 6px #ffffff"
           _hover={{ textShadow: "0 0 1px white"}}
            cursor={"pointer"}
          >
            potential
          </Text>
        </Box>

        <Box display={"flex"} gap="14px">
          <Text
            data-scroll
            data-scroll-delay="0.10"
            data-scroll-speed="4"
            lineHeight={"50px"}
            fontSize={"90px"}
            letterSpacing={"13px"}
            fontWeight={700}
            color=" transparent"
            textShadow="0 0 6px #ffffff"
           _hover={{ textShadow: "0 0 1px white"}}
            cursor={"pointer"}
          >
            one
          </Text>

          <Text
            data-scroll
            data-scroll-delay="0.05"
            data-scroll-speed="4"
            lineHeight={"50px"}
            fontSize={"90px"}
            letterSpacing={"13px"}
            fontWeight={700}
            color=" transparent"
            textShadow="0 0 6px #ffffff"
           _hover={{ textShadow: "0 0 1px white"}}
            cursor={"pointer"}
          >
            rep
          </Text>

          <Text
            data-scroll
            data-scroll-delay="0.05"
            data-scroll-speed="4"
            lineHeight={"50px"}
            fontSize={"90px"}
            letterSpacing={"13px"}
            fontWeight={700}
            color=" transparent"
            textShadow="0 0 6px #ffffff"
           _hover={{ textShadow: "0 0 1px white"}}
            cursor={"pointer"}
          >
            at
          </Text>
        </Box>

        <Box display={"flex"} gap="14px">
          <Text
            data-scroll
            data-scroll-delay="0.05"
            data-scroll-speed="4"
            lineHeight={"50px"}
            fontSize={"90px"}
            letterSpacing={"13px"}
            fontWeight={700}
            color=" transparent"
            textShadow="0 0 6px #ffffff"
           _hover={{ textShadow: "0 0 1px white"}}
            cursor={"pointer"}
          >
            time
          </Text>
        </Box>
      </Box>
      <Box
        w="30%"
        h="100%"
        display={"flex"}
        position={"relative"}
        // alignItems={'center'}
        mt="7rem"
        justifyContent={"flex-start"}
      >
        <Image
          data-scroll
          data-scroll-delay="0.50"
          data-scroll-speed="4"
          w="100%"
          h="50%"
          src={pic}
          alt="loading"
        />
      </Box>
    </Box>
  );
};

export default Home;
