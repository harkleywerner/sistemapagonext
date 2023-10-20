"use client"

import { useContext } from "react"
import { TarifaContex } from "../context/Contextos"
import { separarNumerosConDecimales } from "@/helper/separarNumerosConDecimales"



export const useCalculadoraPorcenje = (numero) => {

    const { tarifaActual } = useContext(TarifaContex)

    return (tarifaActual.porcentaje / 100) * numero

}

export const CalcularPorcentajeMemoizado = ({ n1 = 0, n2 = 0 }) => {

    const porcentaje = useCalculadoraPorcenje(n1)
    const a = porcentaje + n2
    return separarNumerosConDecimales((porcentaje + n2).toFixed(2))

}