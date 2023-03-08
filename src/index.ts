const world = 'world';

export function hello(who: string = world): string {
  console.log("xxxxx");
  return `Hello ${who}! `;
}

hello();