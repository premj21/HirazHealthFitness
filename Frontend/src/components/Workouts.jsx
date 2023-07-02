/* eslint-disable react/prop-types */
import { Box ,Text} from "@chakra-ui/react"
import MuscleBox from "./workout/MuscleBox";
// import {data} from './utils/data'
const Workouts = () => { 
  return (
    <>
      <Box
        position={"relative"}
        w="100vw"
        h="100vh"
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        overflow={'Hidden'}
      >
        <Box
          display={"flex"}
          w="100%"
          alignItems={"center"}
          justifyContent={"center"}
          maxH="15%"
          gap='3%'
          // position={'absolute'}
        >
          <Text
            data-scroll
            data-scroll-speed="7"
            data-scroll-direction="horizontal"
            color={"white"}
            fontFamily={"Kaushan Script"}
           
            fontWeight={600}
            fontSize={"15vmin"}
          >
            E
          </Text>

          <Text
            data-scroll
            data-scroll-speed="9"
            data-scroll-direction="horizontal"
            color={"white"}
            fontFamily={"Kaushan Script"}
           
            fontWeight={600}
            fontSize={"15vmin"}
          >
            x
          </Text>
          <Text
            data-scroll
            data-scroll-speed="11"
            data-scroll-direction="horizontal"
            color={"white"}
            fontFamily={"Kaushan Script"}
           
            fontWeight={600}
            fontSize={"15vmin"}
          >
            e
          </Text>
          <Text
            data-scroll
            data-scroll-speed="13"
            data-scroll-direction="horizontal"
            color={"white"}
            fontFamily={"Kaushan Script"}
           
            fontWeight={600}
            fontSize={"15vmin"}
          >
            r
          </Text>

          <Text
            data-scroll
            data-scroll-speed="-13"
            data-scroll-direction="horizontal"
            color={"white"}
            fontFamily={"Kaushan Script"}
           
            fontWeight={600}
            fontSize={"15vmin"}
          >
            c
          </Text>

          <Text
            data-scroll
            data-scroll-speed="-11"
            data-scroll-direction="horizontal"
            color={"white"}
            fontFamily={"Kaushan Script"}
           
            fontWeight={600}
            fontSize={"15vmin"}
          >
            i
          </Text>

          <Text
            data-scroll
            data-scroll-speed="-09"
            data-scroll-direction="horizontal"
            color={"white"}
            fontFamily={"Kaushan Script"}
           
            fontWeight={600}
            fontSize={"15vmin"}
          >
            s
          </Text>
          <Text
            data-scroll
            data-scroll-speed="-7"
            data-scroll-direction="horizontal"
            color={"white"}
            fontFamily={"Kaushan Script"}
           
            fontWeight={600}
            fontSize={"15vmin"}
          >
            e
          </Text>
        </Box>






        <Box
          w="90%"
          h="70%"
          display={"flex"}
          alignItems={"center"}
          gap="20px"
          overflow={"scroll"}
        >
          {[
            "back",
            "cardio",
            "chest",
            "lower arms",
            "lower legs",
            "neck",
            "shoulders",
            "upper arms",
            "upper legs",
            "waist",
          ].map((name) => (
            <>
              <MuscleBox name={name} />
            </>
          ))}
        </Box>
      </Box>
    </>
  );


}




export default Workouts



