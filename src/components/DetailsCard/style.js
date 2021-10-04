/*Esta funcion adapta el tamaño de la tarjeta trasera para que sea igual al de la tarjeta de adelante la cual contiene
La imagen por lo que generalmente es mas grande*/
const heightBackside = () => {
  //Hasta que encontremos una mejor solucion este timeout se encarga de que el ancho y alto se sicronice
  setTimeout(() => {
    const cardFront = document.querySelector(".card-body");
    const cardBack = document.querySelector(".cardBack");
    const textCard = document.querySelector(".text-card");

    cardBack.style.width = textCard.style.width = `${cardFront.offsetWidth}px`;
    cardBack.style.height =
      textCard.style.height = `${cardFront.offsetHeight}px`;
  }, 500);
};

export default heightBackside;
