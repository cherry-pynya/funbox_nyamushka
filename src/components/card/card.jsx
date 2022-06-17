import { useState } from "react";

export default function Card({item}) {
    const [active, setActive] = useState(false);
    const { contain, portion, present, weight, desc, inactive, sadNews } = item;

    const handleActive = (e) => {
        e.preventDefault();
        setActive(!active);
    }

    if ( !inactive )return (
        <div className="card-container">
            <div className={!active ? "card" : "card card-active"} onClick={handleActive}>
                <span className="fairy">Сказочное заморское яство</span>
                <h2 className="name">Нямушка</h2>
                <h3 className="contain">{contain}</h3>
                <span className="info">{portion} порций</span>
                <span className="info">{present}</span>
                <div className={!active ? "weight" : "weight weight-active "}>
                    <span className="weight-number">{weight}</span>
                    <span className="weight-kg">кг</span>
                </div>
            </div>
            {!active ? <span className="desc">Чего сидишь? Порадуй котэ, <a href="#" className="buy" onClick={handleActive}>купи!</a></span> : 
            <span className="desc">{desc}</span>}
        </div>
    );

    if (inactive) return (
        <div className="card-container">
            <div className="card card-inactive ">
                <span className="fairy">Сказочное заморское яство</span>
                <h2 className="name">Нямушка</h2>
                <h3 className="contain">{contain}</h3>
                <span className="info">{portion} порций</span>
                <span className="info">{present}</span>
                <div className="weight weight-inactive">
                    <span className="weight-number">{weight}</span>
                    <span className="weight-kg">кг</span>
                </div>
            </div>
            <span className="desc sad-news">{sadNews}</span>
        </div>
    );
}