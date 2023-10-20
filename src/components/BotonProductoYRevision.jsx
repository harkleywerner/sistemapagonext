import { useContext, } from "react";
import { Col } from "react-bootstrap";
import { productoReducerContext } from "../context/Contextos";



export const BotonProductoYRevision = ({ alternarMostrar, mostrar }) => {

    const textoButton = mostrar ? "Revisión" : "Productos"
    const TotalLongitudProductos = () => {

        const { listaProducto } = useContext(productoReducerContext)

        return listaProducto.length
            
       
    }

    return (
        <Col onClick={alternarMostrar}
            style={{ background: "#6EC89B", fontSize: "18px", cursor: "pointer",minWidth : "50%"}}
            className=' w-100 p-3  text-center h-100 text-white fw-bolder '>

            <p className="m-0">
                {textoButton}
            </p>

            <p style={{ fontSize: "15px" }} className="m-0 ">
                Articulos  <TotalLongitudProductos />
            </p>
        </Col>
    );
};