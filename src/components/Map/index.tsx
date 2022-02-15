import { FaMapMarkedAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import { Radius } from "./styles"

export const Map:React.FC = () => {
    return (
        <div className="d-flex">
        <Radius className="border text-white">
            <Link to="/pontos-turisticos/mapa">
                <FaMapMarkedAlt />
                <span>Mapa</span>
            </Link>      
        </Radius>
    </div>
    )
}