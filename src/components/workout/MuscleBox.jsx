/* eslint-disable react/prop-types */
import {Box,Text,Image, Button} from '@chakra-ui/react'
import { useState } from 'react';
import {data} from '../utils/data'

const MuscleBox = ({name}) => {
  const [d,setdata] = useState(null);
  const [open, setopen] = useState(false); 

  const openmodal = () =>{
    setopen(true);
  
   const newdata = data.filter(funt); 

   function funt(e){
    return e.bodyPart.toString()===name.toString(); 
   }
    console.log(newdata);
    setdata(newdata); 
    // console.log(`this is data of ${name}`+d); 
  }
    return (
      <>
        <Box
          minW="20vw"
          borderRadius={"20px"}
          h="80%"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"none"}
          boxShadow={"0px 5px 20px rgba(0,0,0,0.130)"}
          cursor={"pointer"}
          onClick={openmodal}
        >
          <Text
            fontFamily={"Sirin Stencil"}
            fontSize={"6vmin"}
            fontWeight={900}
          >
            {name}
          </Text>
        </Box>

        <Box
          display={open ? "flex" : "none"}
          position={"absolute"}
          flexDir={'column'}
          gap='15px'
          top={10}
          bottom={10}
          left={10}
          right={10}
          maxH={'80vh'}
          overflowY={'scroll'}
          border={"none"}
          backgroundColor="rgba(0, 0, 0, 0.61)"
          backdropFilter="blur(5px)"
          boxShadow={"10px 5px 20px rgba(0,0,0,0.130)"}
        >
          <Box w='100%' h ='20%' >
          <Text
          textShadow={'dark-lg'}
          textAlign={'center'}
            data-scroll
            data-scroll-speed="-9"
            data-scroll-direction="horizontal"
            color={"white"}
            fontFamily={"Kaushan Script,cursive"}
            letterSpacing={"4px"}
            fontWeight={700}
            fontSize={"15vmin"}
            >
            {name}
          </Text>
            </Box>
            <Box
            w='100%'
            h='80%'
            display={'flex'}
            overflowX={'scroll'}
            >
         {
          d?.map((item,index)=>(
            <>
            <Box minW='25vw' h='auto' p='2rem' boxShadow={'0px 5px 20px rgba(0,0,0,0.130)'}>
             <Image color={'white'} src={item.gifUrl} id={index} alt='loading'/>
            </Box>
            </>
          ))

         }
            </Box>
            <Button m='auto' w='10%' background='transparent' color={'white'} onClick={()=>setopen(false)}>Close</Button>
         
        </Box>
      </>
    );
}

export default MuscleBox
