/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';


const Diet = () => {
  const divElement = document.querySelector("#diet");
 
  const [wegt,setwegt] = useState(null); 
  const [hegt,sethegt] = useState(null); 
  const [prof,setprof] = useState('');


  const [clr, setclr] = useState({
    school: "white",
    working: "white",
    free: "white",
  }); 

  const handleclick = async(e)=>{
    e.preventDefault(); 
    try {
       divElement.innerHTML = "PROCESSING YOUR DIET PLZ WAIT ....";
       const response = await fetch("https://hirazfitnesshub.onrender.com", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           profession: prof,
           weight: wegt,
           height: hegt,
         }),
       });
    const data = await response.json();
      divElement.innerHTML =data.message;
    } catch (error) {
       divElement.innerHTML = "PROCESSING YOUR DIET PLZ WAIT ....";
      console.log(error);
    }
  }
  const func = (e)=>{
  setprof(e); 
  if('school' === e){
    setclr({ school: "transparent" ,working:'white',free:'white'});
    setprof('school');
  }
 else if ('free' === e) {
    setclr({ free: "transparent", working: "white", school: "white" });
    setprof("working");
  }
  else{
    setclr({ working: "transparent", free: "white", school: "white" });
    setprof("free");
  }
  }
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
            value={wegt}
            onChange={(e) => setwegt(e.target.value)}
            w="50%"
            placeholder="Put your Height(in cm)"
            border={"none"}
            color={"white"}
            outline={0}
            boxShadow={"0px 5px 20px rgba(0,0,0,0.110)"}
          />
          <Input
            min={30}
            value={hegt}
            onChange={(e) => sethegt(e.target.value)}
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
            <Button
              backgroundColor={clr.school}
              _hover={{ backgroundColor: clr.school }}
              onClick={() => func("school")}
            >
              School
            </Button>
            <Button
              backgroundColor={clr.working}
              _hover={{ backgroundColor: clr.working }}
              onClick={() => func("working")}
            >
              Work
            </Button>
            <Button
              backgroundColor={clr.free}
              _hover={{ backgroundColor: clr.free }}
              onClick={() => func("free")}
            >
              Free
            </Button>
          </Box>
          <Button
            textColor={"white"}
            variant={"outline"}
            w="40%"
            background={"00d0ff92"}
            onClick={handleclick}
          >
            Get Diet Plan
          </Button>
        </Box>
        <Box
          w="55%"
          h="100%"
          overflow={"scroll"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          overflowY={"scroll"}
          fontSize={"2.5vmin"}
          fontFamily={"Sirin Stencil"}
          fontWeight={400}
          id="diet"
        >
          Get Your Diet Plan Here
        </Box>
      </Box>
    </Box>
  );
}

export default Diet
