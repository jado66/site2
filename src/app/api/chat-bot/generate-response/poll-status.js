async function pollStatus(openai, threadId, run, pollingInterval) {
  const run = await openai.beta.threads.runs.retrieve(threadId, run.id);

  if (run.status === 'completed') {
    // Handle completed status here
    console.log('Run completed');
    return;
  }

  await new Promise((resolve) => setTimeout(resolve, pollingInterval));
  await pollStatus(); // Recursively call the function
}

export default pollStatus;
