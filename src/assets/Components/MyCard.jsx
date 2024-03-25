function MyCard(props) {
    return (
    
    <div className="MyCard">
        <h1>Juanito</h1>
        <img src={props.img} />
        <button className="btn btn-primary">Adóptame</button>
    </div>

    
    
    )
}

export default MyCard