import { Box } from '@chakra-ui/react';
import vid from './assets/video/main.mp4'
const Vide = () => {
  return (
    <Box
      border={"1px solid black"}
      w="100vw"
      h="80vh"
      maxH={"80vh"}
      overflow={"hidden"}
      mb="5rem"
      p="0 4vw"
      position={"relative"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      data-scroll
      data-scroll-speed="5"
      data-scroll-direction="horizontal"
    >
      <video
        style={{
          width: "100%",
          height: "70%",
          objectFit: "cover",
          boxShadow: "0px 5px 20px rgba(0,0,0,0.130)",
        }}
        src={vid}
        autoPlay
        loop
        muted
        controlsList="nodownload nofullscreen noremoteplayback noaudio"
      ></video>
    </Box>
  );
}

export default Vide
