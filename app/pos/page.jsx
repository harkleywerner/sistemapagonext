import { PuntoDeVenta } from "@/containers/PuntoDeVenta";
import { ListaUsuariosProvider } from "@/context/provider/ListaUsuariosProvider";
import { TarifaProvider } from "@/context/provider/TarifaProvider";

export default function PosPage() {

    return (
        <ListaUsuariosProvider>

            <TarifaProvider>

                <PuntoDeVenta />

            </TarifaProvider>

        </ListaUsuariosProvider>
    )

}