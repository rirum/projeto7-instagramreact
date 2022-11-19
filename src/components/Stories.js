
import Story from './Story';
export default function Stories(){

const iStories = [ {img:"assets/img/9gag.svg", nome:"9gag"}, 
{img:"assets/img/meowed.svg", nome:"meowed"},
{img:"assets/img/barked.svg", nome:"barked"},
{img:"assets/img/nathanwpylestrangeplanet.svg", nome:"nathanwpylestrangeplanet"},
{img:"assets/img/wawawicomics.svg", nome:"wawawicomics"},
{img:"assets/img/respondeai.svg", nome:"respondeai"},
{img:"assets/img/filomoderna.svg", nome:"filomoderna"},
{img:"assets/img/memeriagourmet.svg", nome:"memeriagourmet"}
]

return (
<div class="esquerda">
    <div class="stories">
        {iStories.map((item) => (
        <Story key={item.nome} nome={item.nome} img={item.img} alt={item.nome}/>
        ))}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
    </div>
</div>
)
}