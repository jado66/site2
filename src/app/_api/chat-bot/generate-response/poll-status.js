async function pollStatus(openai, threadId, runId, pollingInterval) {
  const run = await openai.beta.threads.runs.retrieve(threadId, runId);

  console.log('polling');

  if (run.status === 'completed') {
    // Handle completed status here
    console.log('Run completed');
    return;
  }

  await new Promise((resolve) => setTimeout(resolve, pollingInterval));
  await pollStatus(openai, threadId, runId, pollingInterval); // Recursively call the function
}

export default pollStatus;
