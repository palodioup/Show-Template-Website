const resultArea = document.getElementById("footer");
const renderButton = document.getElementById("run");

const HTMLObject = {
  topic: "This is a custom box",
  text: {
    name: "My name is Dipo",
    age: "I am nine years old",
  },
};

renderButton.onclick = () => {
  const boxToBeShown = `
    <main>
      <div class="container">
        <h1 class="container-name">${HTMLObject.topic}</h1>
        <p>${HTMLObject.text.name} <br/> ${HTMLObject.text.age}</p>
      </div>
    </main>
    `;
  try {
    resultArea.innerHTML = boxToBeShown;
  } catch (error) {
    console.error("Error caught:", error)
  }
};
