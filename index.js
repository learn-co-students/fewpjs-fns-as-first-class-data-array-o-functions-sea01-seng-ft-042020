function wakeDog(dogName, dogBreed) {
    let sentence = `Wake ${dogName} the ${dogBreed}`;
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return sentence 
}

function leashDog(dogName, dogBreed) {
    let sentence = `Leash ${dogName} the ${dogBreed}`;
    console.log(`Leash ${dogName} the ${dogBreed}`)
    return sentence
}
function walkToPark(dogName, dogBreed) {
    let sentence = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`)
    return sentence
}
function throwFrisbee(dogName, dogBreed) {
    let sentence = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
    return sentence
}
function walkHome(dogName, dogBreed) {
    let sentence = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(`Walk home with ${dogName} the ${dogBreed}`)
    return sentence
}
function unleashDog(dogName, dogBreed) {
    let sentence = `Unleash ${dogName} the ${dogBreed}`;
    console.log(`Unleash ${dogName} the ${dogBreed}`)
    return sentence
}
const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]
const dogRoutine = []

function exerciseDog(dogName, dogBreed) {
    for (let i = 0; i < routine.length; i++) {
         dogRoutine.push(routine[i](dogName, dogBreed))
    }
    return dogRoutine
}

exerciseDog("Spot", "Chihuaha")