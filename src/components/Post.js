export default function Post(props){
    return (
        <div class="posts">
            <div class="post" data-test="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.imagem} />
                {props.nome}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={props.imagemPost} data-test="post-image"/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline" data-test="like-post"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline" data-test="save-post"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.imagemCurtida} />
                <div class="texto" data-test="likes-number">
                  Curtido por <strong>{props.usernameCurtida}</strong> e <strong>outras {props.numero} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}