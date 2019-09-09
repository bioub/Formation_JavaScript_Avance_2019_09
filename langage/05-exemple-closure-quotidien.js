function createButton(contenu) {
  const btnElt = document.createElement('button');
  btnElt.innerText = contenu;
  btnElt.addEventListener('click', () => {
    console.log(contenu);
    btnElt.innerText += '.';
  });
  document.body.appendChild(btnElt);
}

createButton('Clic moi 1');
createButton('Clic moi 2');
createButton('Clic moi 3');
createButton('Clic moi 4');
