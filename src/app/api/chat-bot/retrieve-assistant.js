export const retrieveAssistant = async (openAiInstance, assistantId) => {
  const assistant = await openAiInstance.beta.assistants.retrieve(assistantId);
  return assistant;
};
