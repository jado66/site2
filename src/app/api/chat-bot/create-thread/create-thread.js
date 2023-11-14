export const createThread = async (openaiInstance) => {
  return await openaiInstance.beta.threads.create();
};
