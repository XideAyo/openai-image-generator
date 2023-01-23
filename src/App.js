import { Configuration, OpenAIApi } from 'openai';

function App() {
  const configuration = new Configuration({
    apiKey: '',
  });
  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: 'Say this is a test',
      n: 1,
      size: '1024x1024',
    });

    console.log(res.data.data[0].url);
  };

  return (
    <div>
      <button onClick={generateImage}>Generate an Image</button>
    </div>
  );
}

export default App;
