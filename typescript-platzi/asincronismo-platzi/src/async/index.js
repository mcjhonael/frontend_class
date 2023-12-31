const doSomeThingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Do Something Async");
        }, 3000)
      : reject(new Error("test Error"));
  });
};

const doSomething = async () => {
  const something = await doSomeThingAsync();
  console.log(something);
};

const anotherFunction = async () => {
  try {
    const something = await doSomeThingAsync();
    console.log(something)
  } catch (error) {
    console.log(error)
  }  
}
console.log("before");
anotherFunction();
console.log("after");


