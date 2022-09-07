

export default function Card({item : {id , title, body}}){
    return(
<div className="card__services">
                <div className="card__top__services">
                </div>
                <div className="card__bottom__services">
                    <h2>{title}</h2>
                    <p>{body}</p>
                </div>
            </div>
            )
    }