import Post from "./Post";
export default function Posts(){
  

const iPost = [
 {imagemUsuario:"assets/img/meowed.svg", username:"meowed", imagemPost:"assets/img/gato-telefone.svg", imagemCurtida:"assets/img/respondeai.svg", usernameCurtida:"respondeai", numPessoas:"101523"},
 {imagemUsuario:"assets/img/barked.svg", username:"barked", imagemPost:"assets/img/dog.svg", imagemCurtida:"assets/img/adorable_animals.svg", usernameCurtida:"adorable_animals", numPessoas:"99159"},
]



    return (
<div class="posts">
{iPost.map((item) => <Post imagem={item.imagemUsuario} alt={item.username} nome={item.username} imagemPost={item.imagemPost} imagemCurtida={item.imagemCurtida} usernameCurtida={item.usernameCurtida} numero={item.numPessoas} /> )}
     </div>
    )
}