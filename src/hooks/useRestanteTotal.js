"use client"
import { useContext, useMemo } from "react";
import { usePrecioFinalDeLosProductos } from "./usePrecioFinalDeLosProductos";
import { restoDelPagoContext } from "@/context/Contextos";
import { separarNumerosConDecimales } from "../helper/separarNumerosConDecimales";

export const useRestanteTotal = () => {

    const { calculoConTarifa } = usePrecioFinalDeLosProductos()

    const { pagoActual } = useContext(restoDelPagoContext)

    const dependeciaString = JSON.stringify(pagoActual.metodosDePago)

    const restoTotal = useMemo(() => {

        const sumaDeRestos = pagoActual.metodosDePago.reduce((acc, current) => acc - current.resto, calculoConTarifa)

        const esNegativo = Math.sign(calculoConTarifa) == -1

        if (!esNegativo) {
            return Math.sign(sumaDeRestos) == -1 ? 0 : sumaDeRestos
        } else {
            return sumaDeRestos
        }



    }, [calculoConTarifa, dependeciaString])

    return {
        restoTotal
    }

}


export const RestanteTotalMemoizando = () => {
    const { restoTotal } = useRestanteTotal()
    return separarNumerosConDecimales(restoTotal)
}
