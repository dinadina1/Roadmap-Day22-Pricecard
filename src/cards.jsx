import Pricecard from "./pricecard";
function CardPage({cardinfo}){

    return (
        <div className="container">
            <h1 className="text-center mb-4 mt-1 heading">React Price Card</h1>
            <div className="row">
                {cardinfo.map((cardinfo,key)=>{
                    return <Pricecard key={key} data={cardinfo}/>
                })}
            </div>
        </div>
    )
}

export default CardPage;