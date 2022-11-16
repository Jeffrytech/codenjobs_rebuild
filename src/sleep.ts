function sleep(timeInMiliseconds: number) {
  return new Promise(resolve => setTimeout(resolve, timeInMiliseconds));
}

export default sleep;