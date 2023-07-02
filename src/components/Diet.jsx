/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Input, Text } from '@chakra-ui/react';


const Diet = () => {
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
            Breakfast: A bowl of oatmeal topped with fresh fruits (such as
            berries or sliced banana) A glass of skim milk or a dairy-free
            alternative A small handful of nuts (such as almonds or walnuts)
            Mid-Morning Snack: A piece of whole fruit (such as an apple or an
            orange) A small serving of Greek yogurt or a handful of baby carrots
            Lunch: A mixed green salad with vegetables (such as lettuce,
            cucumbers, tomatoes, and bell peppers) Grilled chicken breast or
            tofu as a protein source A serving of whole grains (such as brown
            rice or quinoa) A side of steamed vegetables or a vegetable soup
            Afternoon Snack: A handful of mixed nuts or a small serving of nut
            butter with whole-grain crackers or celery sticks A cup of herbal
            tea or a sugar-free beverage Dinner: Baked or grilled fish (such as
            salmon or tilapia) Roasted vegetables (such as broccoli,
            cauliflower, and carrots) A serving of whole grains or sweet
            potatoes A side of leafy greens (such as spinach or kale) Evening
            Snack (optional): A small bowl of low-fat yogurt or a protein-rich
            smoothie with fruits and vegetables Remember to stay hydrated
            throughout the day by drinking plenty of water. It's also essential
            to listen to your body's hunger and fullness cues and adjust portion
            sizes accordingly. Additionally, incorporating regular physical
            activity into your routine will contribute to your overall health
            and well-being.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Diet
