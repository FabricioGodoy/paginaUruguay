import { ProducManager } from "../Data/EmpleadosProductManager"

/* Funcion con promesa para pedir datos del array de objetos */
export const PedirDatosPM = () => {
  return new Promise ((resolve, reject)=> {
      setTimeout(()=>{
          resolve(ProducManager)
      },0)
  })
}
