import { createThread } from '../create-thread/create-thread';
import { retrieveAssistant } from '../retrieve-assistant';
import pollStatus from './poll-status';

export const generateResponse = async (openai, assistantId, threadId, userMessage) => {
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
    content: userMessage,
  });

  const run = await openai.beta.threads.runs.create(threadId, {
    assistant_id: assistant.id,
  });

  console.log('Run: ', run.id);

  pollStatus(openai, threadId, run, 500);

  // Get the last assistant message from the messages array
  const messages = await openai.beta.threads.messages.list(threadId);

  // Find the last message for the current run
  const lastMessageForRun = messages.data
    .filter((message) => message.run_id === run.id && message.role === 'assistant')
    .pop();
  // If an assistant message is found, console.log() it

  if (lastMessageForRun) {
    const lastMessage = lastMessageForRun.content[0].text.value;

    return {
      message: lastMessage,
      threadId,
    };
  } else {
    return null;
  }
};
