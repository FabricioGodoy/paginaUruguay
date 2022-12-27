/* eslint-disable react-hooks/exhaustive-deps */
/* import Axios from "axios"; */
import { useState, useEffect } from "react";
import "./apiDolar.css";

export const ConsumoApiBcra = () => {
  const URL = "https://api.estadisticasbcra.com/usd";
  const [dolarBlueVenta, setDolarBlueVenta] = useState([]);

  useEffect(() => {
    fetch(URL, {
      headers: {
        Authorization:
          "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDM1OTQ4MDQsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJmYWJyaWNpb2dvZG95OTVAaG90bWFpbC5jb20ifQ.YNtl-7bha0o78jWHHm9A2998c0puVyhUHGLcdcEnYeWr3lT3-U1zstEoVWjgejkFnxuIx9xkgXt3Z2U6LK9cgw"
      }
    })
      .then((response) => response.text())
      .then((data) => {
        setDolarBlueVenta(() => {
          return (
            "al dia de " + data[data.length - 1].v + " su valor es de " + data.v
          );
        });

        console.log(data);
        console.log(dolarBlueVenta);
        console.log(data[data.length - 1].v);
      });
  }, [dolarBlueVenta]);

  return (
    <>
      <div className="dolarContainer">
        <div /* className="dolar" */>
      
          <div className="dolarVenta">
            {dolarBlueVenta}
          </div>
         
          <div className="dolarCompra">
            {dolarBlueVenta}
          </div>

        </div>
      </div>
    </>
  );
};

// /* eslint-disable react-hooks/exhaustive-deps */
// import Axios from "axios";
// import { useState, useEffect } from "react";
// import "./apiDolar.css";

// export const ConsumoApiBcra = () => {
//   const URL = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
//   const [dolarBlueVenta, setDolarBlueVenta] = useState([]);
//   const [dolarBlueCompra, setDolarBlueCompra] = useState([]);
//   const [dolarOficialCompra, setDolarOficialCompra] = useState([]);
//   const [dolarOficialVenta, setDolarOficialVenta] = useState([]);

//   useEffect(() => {
//     /* llamado dolar blue venta */
//     Axios.get(URL).then((res) => {
//       setDolarBlueVenta(
//         /* res.data[1].casa.nombre + */
//         " venta $" + res.data[1].casa.venta
//       );
//     });

//     /* llamado dolar blue compra */
//     Axios.get(URL).then((res) => {
//       setDolarBlueCompra(
//         /*     res.data[1].casa.nombre + */
//         " compra $" + res.data[1].casa.compra
//       );
//     });

//     /* llamado dolar oficial compra*/
//     Axios.get(URL).then((res) => {
//       setDolarOficialCompra(
//         /*  res.data[0].casa.nombre + */
//         " compra $" + res.data[0].casa.compra
//       );
//     });
//     /* llamado dolar oficial venta*/
//     Axios.get(URL).then((res) => {
//       setDolarOficialVenta(
//         /*  res.data[0].casa.nombre + */
//         " venta $" + res.data[0].casa.venta
//       );
//     });
//   }, [dolarBlueVenta, dolarOficialCompra, dolarBlueCompra, dolarOficialVenta]);

//   console.log(
//     dolarBlueVenta,
//     dolarOficialCompra,
//     dolarBlueCompra,
//     dolarOficialVenta
//   );
//   return (
//     <>
//       <div className="dolarContainer">
//         <br />
//         {/* codigo original comienza aca */}
//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Blue: </h5>
//           <span className="dolarVenta">{dolarBlueVenta}</span>
//           <span className="dolarCompra">{dolarBlueCompra}</span>
//           <hr />
//           <hr />
//         </div>

//         <br />

//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Oficial: </h5>
//           <span className="dolarVenta">{dolarOficialVenta}</span>
//           <span className="dolarCompra">{dolarOficialCompra}</span>
//           <hr />
//           <hr />
//         </div>

//         {/* codigo original finaliza aca */}

//         {/* abajo se repite el codido original varias veces para no cortar el slider */}
//       <br />

//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Blue: </h5>
//           <span className="dolarVenta">{dolarBlueVenta}</span>
//           <span className="dolarCompra">{dolarBlueCompra}</span>
//           <hr />
//           <hr />
//         </div>

//         <br />

//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Oficial: </h5>
//           <span className="dolarVenta">{dolarOficialVenta}</span>
//           <span className="dolarCompra">{dolarOficialCompra}</span>
//           <hr />
//           <hr />
//         </div>
//         <br />

//            <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Blue: </h5>
//           <span className="dolarVenta">{dolarBlueVenta}</span>
//           <span className="dolarCompra">{dolarBlueCompra}</span>
//           <hr />
//           <hr />
//         </div>

//         <br />

//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Oficial: </h5>
//           <span className="dolarVenta">{dolarOficialVenta}</span>
//           <span className="dolarCompra">{dolarOficialCompra}</span>
//           <hr />
//           <hr />
//         </div>

//         <br />

//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Blue: </h5>
//           <span className="dolarVenta">{dolarBlueVenta}</span>
//           <span className="dolarCompra">{dolarBlueCompra}</span>
//           <hr />
//           <hr />
//         </div>

//         <br />

//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Oficial: </h5>
//           <span className="dolarVenta">{dolarOficialVenta}</span>
//           <span className="dolarCompra">{dolarOficialCompra}</span>
//           <hr />
//           <hr />
//         </div>

//         <br />

//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Blue: </h5>
//           <span className="dolarVenta">{dolarBlueVenta}</span>
//           <span className="dolarCompra">{dolarBlueCompra}</span>
//           <hr />
//           <hr />
//         </div>

//         <br />

//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Oficial: </h5>
//           <span className="dolarVenta">{dolarOficialVenta}</span>
//           <span className="dolarCompra">{dolarOficialCompra}</span>
//           <hr />
//           <hr />
//         </div>

//         <br />

//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Blue: </h5>
//           <span className="dolarVenta">{dolarBlueVenta}</span>
//           <span className="dolarCompra">{dolarBlueCompra}</span>
//           <hr />
//           <hr />
//         </div>

//         <br />

//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Oficial: </h5>
//           <span className="dolarVenta">{dolarOficialVenta}</span>
//           <span className="dolarCompra">{dolarOficialCompra}</span>
//           <hr />
//           <hr />
//         </div>

//         <br />

//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Blue: </h5>
//           <span className="dolarVenta">{dolarBlueVenta}</span>
//           <span className="dolarCompra">{dolarBlueCompra}</span>
//           <hr />
//           <hr />
//         </div>

//         <br />

//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Oficial: </h5>
//           <span className="dolarVenta">{dolarOficialVenta}</span>
//           <span className="dolarCompra">{dolarOficialCompra}</span>
//           <hr />
//           <hr />
//         </div>

//         <br />

//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Blue: </h5>
//           <span className="dolarVenta">{dolarBlueVenta}</span>
//           <span className="dolarCompra">{dolarBlueCompra}</span>
//           <hr />
//           <hr />
//         </div>

//         <br />

//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Oficial: </h5>
//           <span className="dolarVenta">{dolarOficialVenta}</span>
//           <span className="dolarCompra">{dolarOficialCompra}</span>
//           <hr />
//           <hr />
//         </div>

//         <br />

//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Blue: </h5>
//           <span className="dolarVenta">{dolarBlueVenta}</span>
//           <span className="dolarCompra">{dolarBlueCompra}</span>
//           <hr />
//           <hr />
//         </div>

//         <br />

//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Oficial: </h5>
//           <span className="dolarVenta">{dolarOficialVenta}</span>
//           <span className="dolarCompra">{dolarOficialCompra}</span>
//           <hr />
//           <hr />
//         </div>

//         <br />

//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Blue: </h5>
//           <span className="dolarVenta">{dolarBlueVenta}</span>
//           <span className="dolarCompra">{dolarBlueCompra}</span>
//           <hr />
//           <hr />
//         </div>

//         <br />

//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Oficial: </h5>
//           <span className="dolarVenta">{dolarOficialVenta}</span>
//           <span className="dolarCompra">{dolarOficialCompra}</span>
//           <hr />
//           <hr />
//         </div>

//         <br />

//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Blue: </h5>
//           <span className="dolarVenta">{dolarBlueVenta}</span>
//           <span className="dolarCompra">{dolarBlueCompra}</span>
//           <hr />
//           <hr />
//         </div>

//         <br />

//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Oficial: </h5>
//           <span className="dolarVenta">{dolarOficialVenta}</span>
//           <span className="dolarCompra">{dolarOficialCompra}</span>
//           <hr />
//           <hr />
//         </div>

//         <br />

//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Blue: </h5>
//           <span className="dolarVenta">{dolarBlueVenta}</span>
//           <span className="dolarCompra">{dolarBlueCompra}</span>
//           <hr />
//           <hr />
//         </div>

//         <br />

//         <div className="dolar">
//           <hr />
//           <h5 className="dolarTitulo">Dolar Oficial: </h5>
//           <span className="dolarVenta">{dolarOficialVenta}</span>
//           <span className="dolarCompra">{dolarOficialCompra}</span>
//           <hr />
//           <hr />
//         </div>
//       </div>
//     </>
//   );
// };
