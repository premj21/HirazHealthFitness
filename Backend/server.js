const express = require('express');
const cors = require('cors');

const {OpenAIApi,Configuration }= require('openai');
const configuration = new Configuration({
  apiKey: process.env.link,
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors())
app.use(express.json())
app.post('/', async (req, res) => {
  try {
const {profession,weight,height} = req.body;
   const response = await openai.createCompletion({
     model: "text-davinci-003",
     prompt: `hii i am a ${profession} person my weight is ${weight}kg and height is ${height}cm  suggest me full day diet plan  in propper table with lines  in html and css `,
     max_tokens: 3000,
     temperature: 0.5,
   });
   res.status(200).send({
      message: response.data.choices[0].text
    });
  } catch (error) {
    
    res.status(500).send(error || 'New Error');
  }
})
const prt = process.env.port || 5000;
app.listen(prt, () => console.log('AI server started '));