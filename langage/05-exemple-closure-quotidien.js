function createButton(contenu) {
  const btnElt = document.createElement('button');
  btnElt.innerText = contenu;
  btnElt.addEventListener('click', (event) => {
    console.log(contenu);
    event.target.innerText += '.';
  });
  document.body.appendChild(btnElt);
}

createButton('Clic moi 1');
createButton('Clic moi 2');
createButton('Clic moi 3');
createButton('Clic moi 4');
