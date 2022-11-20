import React from "react";
const username = "catanacomics";

export default function Usuario(props){
    let promptName;
    let promptImagem;
    
    const [name, setName] = React.useState('Catana') 
    const [imagem, setImagem] = React.useState('assets/img/catanacomics.svg')

function mudarNome(){
    promptName = prompt("Digite seu nome");
    setName(!promptName ? name : promptName);
}

function mudarFoto(){
    promptImagem = prompt("Insira um link de imagem");
    setImagem(!promptImagem ? imagem : promptImagem);
}

    return (
        <div class="usuario" data-test="user">
          <img src={imagem} onClick={mudarFoto} alt="" data-test="profile-image"/>
          <div class="texto">
            <strong>{username}</strong>
            <span data-test="name">
              {name}
              <ion-icon name="pencil" onClick={mudarNome} data-test="edit-name"></ion-icon>
            </span>
          </div>
        </div>

    )
}