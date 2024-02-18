const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey:"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",
});

const openai = new OpenAIApi(configuration);

async function sendMsg() {
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'Say this is a test',
    max_tokens: 7,
    temperature: 0,
  });

  console.log(completion.data.choices[0].text);
}

sendMsg();




// import { Configuration, OpenAIApi } from 'openai'

// const configuration = new Configuration({
//     apiKey: your_api_key,
//   });

// const openai = new OpenAIApi(configuration);