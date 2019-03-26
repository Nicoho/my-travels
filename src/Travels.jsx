import React from "react";
import Travel from './travel';

const travels = [
    {
        image : "http://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2017/01/03/node_337738/39238586/public/2017/01/03/B9710699337Z.1_20170103154129_000%2BGIJ88SABV.2-0.jpg?itok=NdDnZQU0",
        city:'Dunkerque',
        country:'France',
        distance: "le grand Nord" ,
    }, {
        image : "https://images.sudouest.fr/2014/03/27/57ebb97f66a4bd67269f1835/widescreen/1000x500/la-voiture-devrait-etre-sortie-de-sa-facheuse-posture-dans-la-matinee.jpg",
        city:'St Medard en Jalles',
        country:'Medoc',
        distance: 'pas assez loin' ,
    }, {
        image : "https://www.maison-ecg.com/sites/ecg/files/styles/560x316/public/bridge-images/58459-1.jpg?itok=ZJjbniLa",
        city:'Richemont',
        country:'Charente',
        distance: 'Olé pas loin',
    }, {
        image : "https://images.sudouest.fr/2017/09/14/59b9ddb566a4bd79413a3b03/widescreen/1000x500/cote-cours-de-la-marne-les-automobilistes-se-cassent-le-nez-sur-le-chantier-du-cours-de-lyser.jpg",
        city:'Cours de la misère',
        country:'A coté du Portugal',
        distance: 'on est chez nous',
    }, {
        image : "https://images.sudouest.fr/2014/09/22/57ebc43a66a4bd6726a56016/widescreen/1000x500/sur-le-cours-victor-hugo-des-bandes-de-jeunes-errants-avec-leurs-chiens-generent-un-sentiment-dinsecurite.jpg",
        city:'cours Victor hugo',
        country:'après c est l etranger',
        distance: 'pas si loin finalement' ,
    },

]
const Travels = () => (
    <div>
        {travels.map(x => <Travel {...x}
        />)}

    </div>
)

export default Travels