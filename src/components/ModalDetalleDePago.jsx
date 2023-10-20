import React, { } from "react"
import { Button, Modal, Table } from "react-bootstrap"
import { calcularPorcentaje } from "@/helper/calcularPorcentaje"
import { separarNumerosConDecimales } from "@/helper/separarNumerosConDecimales"
import { useCalcularTotalAValidar } from "@/hooks/useCalcularTotalAValidar"
import styles from "@/styles/ModalDetalleDePago.module.css"

const Metodo = ({ nombre, porcentaje, restoParaValidar, indice }) => {

    const total = restoParaValidar + calcularPorcentaje({ numero: restoParaValidar, porcentaje })

    return (

        <tr>
            <td >
                {indice}
            </td>
            <td>
                {nombre}
            </td>
            <td>
                {separarNumerosConDecimales(restoParaValidar)}
            </td>
            <td className="overflow-hidden">
                {porcentaje}%
            </td>
            <td>
                {separarNumerosConDecimales(total)}
            </td>
        </tr>

    )
}

const Total = () => {

    const { totalAValidar } = useCalcularTotalAValidar()

    return (

        <div className={`${styles.total} text-end me-2 overflow-hidden text-nowrap mw-100  fs-4`}>
            ${separarNumerosConDecimales(totalAValidar)}
        </div>

    )
}

const TablaDetalleDePago = ({ metodosDePago }) => {

    return (
        <Table
            striped
            responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Metodo</th>
                    <th>Resto</th>
                    <th>Porcentaje</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody >
                {
                    metodosDePago.map(({ nombre, porcentaje, restoParaValidar, id }, indice) => {

                        return (
                            <Metodo
                                key={id}
                                indice={indice + 1}
                                nombre={nombre}
                                porcentaje={porcentaje}
                                restoParaValidar={restoParaValidar}
                            />
                        )
                    }

                    )
                }
            </tbody>

        </Table>
    )
}

export const ModalDeDetellaDePago = ({ mostrar, alternarMostrar, metodosDePago, restablecerTodo }) => {

    return (
        <Modal
            show={mostrar}
            onHide={alternarMostrar}>
            <Modal.Header closeButton>

                <Modal.Title >
                    <span className={`fs-3 fw-bolder ${styles.titulo}`}>
                        Validar pago
                    </span>
                </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <div
                    className={`scrollBarPersonalizada ${styles.contenedorTabla}`}>
                    <TablaDetalleDePago metodosDePago={metodosDePago} />
                </div>

                <Total />

            </Modal.Body>

            <Modal.Footer>

                <Button variant="outline-dark" className="w-100 fw-bolder fs-5" onClick={restablecerTodo}>
                    Validar
                </Button>

            </Modal.Footer>
        </Modal>
    )
}

