import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <h1>404 - Página não encontrada</h1>
            <p>A página que você está procurando não existe.</p>
            <Link to={"/"}>Voltar</Link>
        </>
    );
}
 
export default NotFound;