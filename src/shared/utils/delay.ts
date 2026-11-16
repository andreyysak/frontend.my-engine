export const delay = (min = 300, max = 800): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, min + Math.random() * (max - min)))
