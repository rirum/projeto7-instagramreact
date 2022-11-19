import React from "react";
export default function Post(props){
    const [salvar, setSalvar] = React.useState("bookmark-outline");
    function salvarPost() {
        if (salvar === "bookmark-outline") {setSalvar("bookmark");
    } else {
        setSalvar("bookmark-outline");
    }}
    return (
        <div class="posts">
            <div class="post" data-test="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.imagem} alt={props.nome}/>
                {props.nome}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={props.imagemPost} alt={props.nome} data-test="post-image"/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline" data-test="like-post"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name={salvar} onClick={salvarPost} data-test="save-post"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.imagemCurtida} alt={props.nome} />
                <div class="texto" data-test="likes-number">
                  Curtido por <strong>{props.usernameCurtida}</strong> e <strong>outras {props.numero} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}