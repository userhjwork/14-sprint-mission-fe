import Product from "./Product";

function BestProductList({ items }) {

    return (
        <div className="productList flex">
            {items.map((item) => (
                <Product key={item.id} item={item}></Product>
            ))}
        </div>
    )
}

export default BestProductList;