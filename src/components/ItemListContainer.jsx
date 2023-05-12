const ItemListContainer = ({ titulo, subtitulo}) => {
    return (
        <div className="text-center fs-1 p-1">
            <p><span className="fst-italic fw-medium">{titulo}</span>{subtitulo} </p>
        </div>
    )
}
export default ItemListContainer;