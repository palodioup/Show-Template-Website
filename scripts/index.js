const resultArea = document.getElementById("footer");
const renderButton = document.getElementById("run");

const HTMLObject = {
  topic: "This is a custom box",
  text: {
    name: "My name is Dipo",
    age: "I am nine years old",
    class: "My class is JSS IB",
    school: "I attend Whitesands School",
    address: "My address is 7 ADETORO IPAYE STREET, GRACELAND ESTATE, AJAH, LAGOS STATE, NIGERIA, AFRICA"
  },
};

renderButton.onclick = () => {
  const boxToBeShown = `
    <main>
      <div class="container">
        <h1 class="container-name">${HTMLObject.topic}</h1>
        <p>${HTMLObject.text.name}</p>
        <p>${HTMLObject.text.age}</p>
        <p>${HTMLObject.text.class}</p>
        <p>${HTMLObject.text.school}</p>
        <p>${HTMLObject.text.address}</p>
      </div>
    </main>
    `;
  try {
    resultArea.innerHTML = boxToBeShown;
  } catch (error) {
    console.error("Error caught:", error)
  }
};
