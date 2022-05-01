
/*
if (!cooldowns.has(interactionUser)) cooldowns.set(interactionUser, new Collection());

const now = Date.now();
const stamps = cooldowns.get(interactionUser);
const cAmount = 10 * 1000;

if (stamps.has(interactionUser)) {
  const exTime = stamps.get(interactionUser) + cAmount;

  if (now < exTime) {
    const Timeout = (exTime - now) / 1000;
    return console.log(Timeout.toFixed(1), 'Segundos');
  }
}

stamps.set(interactionUser, now);

setTimeout(() => stamps.delete(interactionUser), cAmount);
*/