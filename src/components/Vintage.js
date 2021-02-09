import React from 'react';
import Item1 from '../images/Vintage1.jpg'
import Item2 from '../images/Vintage2.jpg'
import Item3 from '../images/Vintage3.jpg'
import '../stylesheets/Vintage.css';

const items = [
    {   
        id: 1,
        title: 'LONG COAT x LONG TOTE',
        desc: 'In the IENAberlin collection the long tote bag is part of the outfit. the bag floats in the folds of the oversized coat.',
        img: Item1
},
{   
    id: 2,
    title: 'UPCYCLED x CLOTHING',
    desc: 'Accessories are an important tool to continue the story of an old garment. The apron used to be an old skirt and is now used as a jewelry for your outfit.',
    img: Item2
},
{   
    id: 3,
    title: 'KIDS x PROJECTS',
    desc: 'Handmade presents - give the mom-to-be a sustainable gift. Besides crocheted items, I also make useful gadgets that make your day easier.',
    img: Item3
}
]

const Vintage = () => {
    const renderedList = items.map((item) => {
        return (
            <div className="card">
                <div className="card-image">
                    <img src={item.img} alt={item.title}></img>
                    <h1 className="header centered">{item.title}</h1>
                </div>
                <div className="card-description">
                    <p>{item.desc}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="cardContainer ">{renderedList}</div>
    );
}

export default Vintage;
