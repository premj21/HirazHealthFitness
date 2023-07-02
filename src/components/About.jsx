/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import {Box,Text,Image} from '@chakra-ui/react'

import a from './assets/aboutpics/first.png'
import b from "./assets/aboutpics/second.png";
import c  from "./assets/aboutpics/third.png";
import d from "./assets/aboutpics/fourth.png";
import e from "./assets/aboutpics/five.png";
import f from "./assets/aboutpics/six.png";
const About = () => {
  return (
    <>
      <Box w="100vw" minH="110vh" position={"relative"} m="0 auto" id="fixed">
        <Text
          data-scroll
          data-scroll-speed="-3"
          data-scroll-direction="horizontal"
          color={"white"}
          fontFamily={"Kaushan Script,cursive"}
          letterSpacing={"4px"}
          fontWeight={700}
          fontSize={"15vmin"}
          position={"relative"}
        >
          About
        </Text>
        <Box w="100%" h="100%" display={"flex"} position={'relative'}>
          <Box
            w="50%"
            h="auto"
            p="2rem"
            letterSpacing="2px"
            border={"none"}
            position={'relative'}
            boxShadow={"0 5px 20px rgba(0,0,0,0.100)"}
          >
            <Text fontSize={"4vmin"} fontFamily={"Sirin Stencil"}>
              Hiraz Health Fitness is a powerful and user-friendly fitness app
              that caters to individuals of all fitness levels. With a diverse
              selection of workout routines and training programs, users can
              find the perfect exercise regimen to meet their specific goals,
              whether it's weight loss, strength building, flexibility, or
              overall fitness improvement. The app's intuitive interface makes
              it easy to track progress and monitor key fitness metrics such as
              steps taken, calories burned, and distance covered.
            </Text>
            <br></br>
            <Text fontSize={"4vmin"} fontFamily={"Sirin Stencil"}>
              In addition to workouts, Hiraz Health Fitness offers valuable
              nutrition resources. Users can access guidance to make informed
              dietary choices and maintain a well-balanced and healthy eating
              plan.
            </Text>
          </Box>
          <Box w="50%" h="80%" position={'relative'}>
            <Box display={"flex"}>
              <Box ml="2rem" w="20%" h="20%" position={'relative'}>
                <Image
                  data-scroll
                  data-scroll-delay="0.30"
                  data-scroll-speed="6"
                  src={a}
                  alt="no pic"
                />
              </Box>
              <Box ml="2rem" w="20%" h="10%">
                <Image
                  w="100%"
                  h="auto"
                  src={b}
                  data-scroll
                  data-scroll-delay="0.25"
                  data-scroll-speed="6"
                  alt="no pic"
                />
              </Box>

              <Box ml="2rem" w="20%" h="10%">
                <Image
                  data-scroll
                  data-scroll-delay="0.20"
                  data-scroll-speed="6"
                  w="100%"
                  h="auto"
                  src={d}
                  alt="no pic"
                />
              </Box>
            </Box>
            <Box display={"flex"} mt="20px">
              <Box ml="2rem" mt="-7rem" w="40%" h="30%">
                <Image
                  data-scroll
                  data-scroll-delay="0.15"
                  data-scroll-speed="6"
                  w="100%"
                  h="auto"
                  src={c}
                  alt="no pic"
                />
              </Box>

              <Box ml="2rem" w="40%" mt="-10rem" h="30%">
                <Image
                  w="100%"
                  data-scroll
                  data-scroll-delay="0.10"
                  data-scroll-speed="6"
                  h="auto"
                  src={e}
                  alt="no pic"
                />
              </Box>
            </Box>
            <Box ml="2rem" w="40%" h="30%" mt="-10rem" p="10px">
              <Image
                w="100%"
                data-scroll
                data-scroll-delay="0.05"
                data-scroll-speed="6"
                h="100%"
                src={f}
                alt="no pic"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default About
