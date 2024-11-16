export const HTMLObject = {
  topic: "This is a custom box",
  text: {
    name: "Hello, I am Dipo",
    age: "I am nine years old",
  },
};

export const boxToBeShown = `
  <main>
    <div class="container">
      <h1 class="container-name">${HTMLObject.topic}</h1>
      <p>${HTMLObject.text.name} <br/> ${HTMLObject.text.age}</p>
    </div>
  </main>
`;
