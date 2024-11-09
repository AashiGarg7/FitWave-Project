// 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
import Groq from "groq-sdk";

const groq = new Groq({ apiKey:"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"});

export async function main(req,res) {
  const {height,weight,gender,goal}=req.body;
  const chatCompletion = await getGroqChatCompletion(height,weight,gender,goal); 
  // Print the completion returned by the LLM.
  res.send(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion({height,weight,gender,goal}) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `I am looking to create a personalized workout plan. I am ${height} cm tall and weigh ${weight} kg. Please provide me with a structured workout plan that suits my body type, focusing on ${goal}. and my gender is ${gender} Include details on the type of exercises, their duration, frequency, and any additional tips on diet or lifestyle that would complement the workout routine just give me direct workout plan no extra greeting or anything give me plan for about 1 week give me respond in one structured way dont change it in another promt directly respond with workout plan nothing additonal give me data in this type of way first monday: then tuesday: then wednesday: then thursday: then Friday: then Saturday: then Addtional tips: and weekdays should be same as i mentioned your response should start from monday nothing else no greeting or anything at all`,
      },
    ],
    model: "llama3-8b-8192",
  });
}