const resultArea = document.getElementById("footer");
const renderButton = document.getElementById("run");

renderButton.onclick = () => {
  const HTMLObject = {
    topic: "This is a custom box",
    text: {
      name: "Hello, I am Dipo",
      age: "I am nine years old",
    },
  };
  const boxToBeShown = `
    <main>
      <div class="container">
        <h1 class="container-name">${HTMLObject.topic}</h1>
        <p>${HTMLObject.text.name} <br/> ${HTMLObject.text.age}</p>
      </div>
    </main>
`;
  resultArea.innerHTML = boxToBeShown;
};
