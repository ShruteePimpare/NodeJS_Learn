function getRandomNumber(): void {
    const randomInt = Math.floor(Math.random() * 1000) + 1;
    console.log("Random Number is",randomInt);
}

export default getRandomNumber;
getRandomNumber(); // Random Number is 1-1000