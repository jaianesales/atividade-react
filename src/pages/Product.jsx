import { useParams } from "react-router-dom";

const Product = () => {

    const { nome } = useParams();

    return (
        <>
            <h1>Produto {nome}</h1>
        </>
    );
}

export default Product;