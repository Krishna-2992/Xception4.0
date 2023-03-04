import "./sponsor.css"
function Card(props){
    const {data} = props
    const d = [data]
    console.log(data)
    return (
        <>
            {d.map(e=>{
                return (
                    <div className="card-body card-m -x-10">
                        <h6 class="card-title">{e.name}</h6>
                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                )
            })}
        </>
    )
}
export default Card;