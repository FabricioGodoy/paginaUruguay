import { Gerentes } from '../Data/EmpleadosGerentes'

/* Funcion con promesa para pedir datos del array de objetos */
export const PedirDatos = () => {
  return new Promise ((resolve, reject)=> {
      setTimeout(()=>{
          resolve(Gerentes)
      },0)
  })
}
