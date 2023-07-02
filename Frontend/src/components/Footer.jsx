/* eslint-disable react/no-unescaped-entities */
import { Box, Image, Text } from "@chakra-ui/react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from './assets/MainLogo.png'
const Footer = () => {
  return (
    <>
    <Box
    position={'relative'}
    display={'flex'}
    flexDir={'column'}
    w='100vw'
    overflow={'hidden'}
    >
      <Box
      position={"relative"}
        w="100vw"
        p="2rem"
        h="auto"
        display={"flex"}
        gap="3vw"
        >
        <Box
          
          w="30vw"
          display={"flex"}
        
          h="30vh"
          alignItems="center"
          justifyContent="center"
          >
          <Image w="90%" h="100%" src={logo} alt="logo" />
        </Box>

        <Box
          w="30vw"
          display={"flex"}
          flexDir={"column"}
          alignItems={"flex-start"}
          justifyContent={{ base: "flex-start", md: "flex-start" }}
          flexWrap={"flex"}
          gap={{ base: "10px", md: "20px" }}
          pt={{ base: "2rem", md: "3rem" }}
          >
          <Text
            fontSize={{ base: "1.7vmin", md: "1.3vmin", lg: "1.7vmin" }}
            letterSpacing={"2px"}
            fontWeight={"600"}
            display={"flex"}
            >
            <LocationOnIcon style={{ fontSize: "15px", marginRight: "5px" }} />
            Jawaharnagar, Ichalkaranji, Maharashtra 416115
          </Text>
          <Text
            fontSize={{ base: "1.7vmin", md: "1.3vmin", lg: "1.7vmin" }}
            letterSpacing={"2px"}
            fontWeight={"600"}
            >
            <LocationOnIcon style={{ fontSize: "15px", marginRight: "5px" }} />
            Chatrapati Shahu putla, opposite ideal classes, jawaharnagar
            Ichalkaranji, 416115
          </Text>
          <Text
            fontSize={{ base: "1.7vmin", md: "1.3vmin", lg: "1.7vmin" }}
            letterSpacing={"2px"}
            fontWeight={"600"}
            >
            <CallIcon style={{ fontSize: "15px", marginRight: "5px" }} />
            +91 93597 08804
          </Text>
          <Text
            fontSize={{ base: "1.7vmin", md: "1.3vmin", lg: "1.7vmin" }}
            letterSpacing={"2px"}
            fontWeight={"600"}
            >
            <EmailIcon style={{ fontSize: "15px", marginRight: "5px" }} />
            hirazHealth12@gmail.com
          </Text>
        </Box>
        <Box
         
          w="30vw"
          display={"flex"}
          flexDir={"column"}
          alignItems={{ base: "flex-start", md: "center" }}
          flexWrap={"wrap"}
          justifyContent={{ base: "flex-start", md: "flex-start" }}
          pt={{ base: "2rem", md: "2.5rem" }}
          gap={{ base: "10px", md: "20px" }}
          >
          <Text
            fontSize={{ base: "2vmin", md: "2vmin" }}
            fontWeight={"600"}
            letterSpacing={"10px"}
          >
            About Company
          </Text>
          <Text
            fontSize={{ base: "1.3vmin", md: "1.4vmin" }}
            letterSpacing={"3px"}
            >
            Hiraz Health Fitness is a powerful and user-friendly fitness app
            that caters to individuals of all fitness levels. With a diverse
            selection of workout routines and training programs, users can find
            the perfect exercise regimen to meet their specific goals, whether
            it's weight loss, strength building, flexibility, or overall fitness
            improvement. The app's intuitive interface makes it easy to track
            progress and monitor key fitness metrics such as steps taken,
            calories burned, and distance covered.
          </Text>
          <Text
            fontSize={{ base: "1.3vmin", md: "1.4vmin" }}
            letterSpacing={"3px"}
          >
            Copyright ©2023 , All rights reserved.
          </Text>
        </Box>
      </Box>


            </Box>
    </>
  );
};

export default Footer;
