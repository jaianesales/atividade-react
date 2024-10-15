import { Link } from "react-router-dom";

const Products = () => {
    return (
        <>
            <h1>Produtos</h1>
            <ul>
                <li><Link to={"/produto/1/Alface"}>Alface</Link></li>
                <li><Link to={"/produto/2/Beterraba"}>Beterraba</Link></li>
                <li><Link to={"/produto/3/Cenoura"}>Cenoura</Link></li>
                <li><Link to={"/produto/4/Laranja"}>Laranja</Link></li>
                <li><Link to={"/produto/5/Manga"}>Manga</Link></li>
            </ul>
        </>
    );
}

export default Products;