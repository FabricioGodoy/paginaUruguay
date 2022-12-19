import { Vendedores } from "../Data/EmpleadosVentas"

/* Funcion con promesa para pedir datos del array de objetos */
export const PedirDatosVendedores = () => {
  return new Promise ((resolve, reject)=> {
      setTimeout(()=>{
          resolve(Vendedores)
      },0)
  })
}
