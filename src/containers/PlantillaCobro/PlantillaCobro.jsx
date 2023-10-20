"use client"
import { Container } from "react-bootstrap"
import styles from "@/styles/PlantillaCobro.module.css"
import React, { useContext, useEffect, useRef } from "react"
import { productoReducerContext } from "@/context//Contextos"
import { CarritoDeProductoVacio } from "@/components//CarritoDeProductoVacio"
import { ListaDeProductosACobrar } from "./ListaDeProductosACobrar"
import { TotalPrecioProductos } from "@/components//TotalPrecioProductos"



export const PlantillaCobro = React.memo(() => {

    const { listaProducto, seleccionarProducto, ultimoSeleccionado } = useContext(productoReducerContext)

    const referido = useRef(null)
    useEffect(() => {

        if (!referido.current) return

        referido.current.scrollTop = referido.current.scrollHeight;

    }, [listaProducto.length])



    return (

        <Container
            fluid
            ref={referido}
            className={` scrollBarPersonalizada  px-1 p-0 flex-grow-1 h-100 ${styles.contenedorCobroPrincipal}`} >

            {listaProducto.length == 0 ? <CarritoDeProductoVacio /> :

                <>
                    <ListaDeProductosACobrar
                        seleccionarProducto={seleccionarProducto}
                        listaProducto={listaProducto}
                        ultimoSeleccionado={ultimoSeleccionado}
                    />

                    <TotalPrecioProductos />

                </>
            }

        </Container>

    )
})
