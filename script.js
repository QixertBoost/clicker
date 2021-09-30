const renderImages = async () => {
  const prinimator = async () => {
    let response = await fetch(
      "https://react-learnwords-example.herokuapp.com/words"
    );
    const data = await response.json();
    return data;
  };
  const images = await prinimator();
  const root = document.querySelector("#card__wraper");
  let rootValue = "";

  images.forEach((element) => {
    rootValue += `<div  class = "card" onclick="renderModal()"><img src="https://react-learnwords-example.herokuapp.com/${element.image}"><p class="word">${element.word}</p></div>`;
    root.innerHTML = rootValue;
  });
};

renderImages();

const renderModal = () => {
  // const razmetka = `<div class="hystmodal"  ><div id="bg_layer"> <img src="1578662816_1.jpg" alt="Изображение в окне" />
  // </div></div></div>`
  const modal = document.createElement("div");
  modal.className = "hystmodal";
  const root = document.querySelector("#root");
  const image = document.createElement("img");

  image.src = "1578662816_1.jpg";
  const bgLayer = document.createElement("div");
  bgLayer.className = "bg_layer";


  modal.append(image);
  modal.append(bgLayer);

  root.append(modal);
  bgLayer.addEventListener("click", removeModal);
  image.addEventListener("mouseover", removeModal);
};

// const removeModal = (event) => {
//   const modal = document.querySelector(".hystmodal");
//   const bgLayer = document.querySelector(".bg_layer")
//   if(event.currentTarget === bgLayer){
//       modal.remove();}
//   console.log(event.target);
// };
const removeModal = (event) => {
    const modal = document.querySelector(".hystmodal");
    const bgLayer = document.querySelector(".bg_layer")
   
        modal.remove();
    console.log(event.target);
  };
