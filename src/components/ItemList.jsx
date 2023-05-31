import Item from "./Item";

const ItemList = ({ items }) => {
    
    return (
        <>
            {items.map(item => <Item key={item.idx}  item={item} />)}
        </>
    )
}
export default ItemList;