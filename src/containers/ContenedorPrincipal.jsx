"use client"

import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/ContenedorPrincipal.module.css"
import { PlantillaCobro } from "./PlantillaCobro/PlantillaCobro";
import { PlantillaPagos } from "./PlantillaPagos/PlantillaPagos";
import { PlantillaProductos } from "./PlantillaProductos/PlantillaProductos";
import { useEventoMostrar } from "../hooks/useEventoMostrar";
import { useAltenarModoResponsive } from "../hooks/useAltenarModoResponsive";
import HocTouchEvents from "../components/HocTouchEvents";
import React, { useEffect } from "react";
import { BotonPagos } from "../components/BotonPagos";
import { BotonProductoYRevision } from "../components/BotonProductoYRevision";

const ContenedorPrincipalBody = React.memo(({ mostrar, alternarMostrar, alternarMostrarContenedor }) => {

    const onHide = !mostrar ? "d-flex" : "d-none"

    return (
        <Row className={` w-100 h-100 overflow-hidden flex-grow-1 m-0 p-0`}>

            <Col style={{ maxWidth: "560px" }} className={`${onHide} w-100 ${styles.columnaInteractiva}  overflow-hidden h-100 p-0  d-flex flex-column`}>

                <PlantillaCobro />
                <PlantillaPagos
                    alternarMostrar={alternarMostrar}
                    alternarMostrarContenedor={alternarMostrarContenedor} />
            </Col>

            <PlantillaProductos
                alternarMostrarContenedor={alternarMostrarContenedor}
                alternarMostrar={alternarMostrar} />
        </Row>
    )

})

const ContenedorPrincipalFooter = React.memo(({ alternarMostrar, alternarMostrarContenedor, mostrar }) => {

    return (
        <Row className="d-md-none border w-100 m-0 border-ligth ">
            <BotonPagos
                alternarMostrarContenedor={alternarMostrarContenedor} />
            <BotonProductoYRevision
                alternarMostrar={alternarMostrar}
                mostrar={mostrar} />
        </Row>

    )
})

const ContenedorPrincipalWrapper = ({ alternarMostrarContenedor, touchAplicado }) => {

    const { alternarMostrar, mostrar } = useEventoMostrar()


    useAltenarModoResponsive({ mostrar, alternarMostrar })

    useEffect(() => {

        touchAplicado == "end" && alternarMostrar()

    }, [touchAplicado])


    return (
        <Container
            fluid
            className='h-100 d-flex w-100 flex-column overflow-hidden p-0' >

            <ContenedorPrincipalBody
                mostrar={mostrar}
                alternarMostrar={alternarMostrar}
                alternarMostrarContenedor={alternarMostrarContenedor} />

            <ContenedorPrincipalFooter
                mostrar={mostrar}
                alternarMostrarContenedor={alternarMostrarContenedor}
                alternarMostrar={alternarMostrar} />
        </Container>
    )

}

export default HocTouchEvents(ContenedorPrincipalWrapper)

