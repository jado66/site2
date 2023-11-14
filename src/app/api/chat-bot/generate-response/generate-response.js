import { createThread } from '../create-thread/create-thread';
import { retrieveAssistant } from '../retrieve-assistant';

export const generateResponse = async (openai, assistantId, threadId, message) => {
  if (!threadId) {
    const thread = await createThread(openai);
    threadId = thread.id;
    console.log('Thread: ', JSON.stringify(thread));
  }

  const assistant = await retrieveAssistant(openai, assistantId);

  console.log('Assistant: ', assistant.id);

  // Pass in the user question into the existing thread
  await openai.beta.threads.messages.create(threadId, {
    role: 'user',
    content: message,
  });

  const run = await openai.beta.threads.runs.create(threadId, {
    assistant_id: assistant.id,
  });

  console.log('Run: ', run.id);

  let runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);

  // Polling mechanism to see if runStatus is completed
  // This should be made more robust.
  const pollingInterval = 500;

  while (runStatus.status !== 'completed') {
    await new Promise((resolve) => setTimeout(resolve, pollingInterval));
    runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
  }

  // Get the last assistant message from the messages array
  const messages = await openai.beta.threads.messages.list(threadId);

  // Find the last message for the current run
  const lastMessageForRun = messages.data
    .filter((message) => message.run_id === run.id && message.role === 'assistant')
    .pop();
  // If an assistant message is found, console.log() it

  if (lastMessageForRun) {
    const message = lastMessageForRun.content[0].text.value;

    return {
      message,
      threadId,
    };
  } else {
    return null;
  }
};

// export async function POST(request) {
//   const { threadId, assistantId } = await request.json();

//   try {
//     const assistant = await retrieveAssistant(openai, assistantId);

//     if (!threadId) {
//       const thread = await fetch('/api/chat-bot/create-thread').then((response) => response.json());
//       threadId = thread.id;
//     }

//     const run = await openai.beta.threads.runs.create(threadId, {
//       assistant_id: assistant.id,
//       : 'Address the user as JD',
//     });

//     let runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);

//     // Polling mechanism to see if runStatus is completed
//     // This should be made more robust.
//     const pollingInterval = 500;

//     while (runStatus.status !== 'completed') {
//       await new Promise((resolve) => setTimeout(resolve, pollingInterval));
//       runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
//     }

//     // Get the last assistant message from the messages array
//     const messages = await openai.beta.threads.messages.list(threadId);

//     // Find the last message for the current run
//     const lastMessageForRun = messages.data
//       .filter((message) => message.run_id === run.id && message.role === 'assistant')
//       .pop();

//     // If an assistant message is found, console.log() it
//     if (lastMessageForRun) {
//       const response = lastMessageForRun.content[0].text.value;

//       return new Response(JSON.stringify(response), {
//         status: 200,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//     } else {
//       return new Response(JSON.stringify('No response'), {
//         status: 200,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//     }
//   } catch (error) {
//     console.error(error); // this will print any error that occurs
//     return new Response(JSON.stringify(error), {
//       status: 400,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   }
// }
