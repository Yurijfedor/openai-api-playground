export function logTokens(usage) {
  if (!usage) return;

  console.log("🧮 Token usage:");
  console.log("Prompt:", usage.prompt_tokens);
  console.log("Completion:", usage.completion_tokens);
  console.log("Total:", usage.total_tokens);
}
