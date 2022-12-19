/* eslint-disable react-hooks/exhaustive-deps */
import Axios from "axios";
import { useState, useEffect } from "react";
import "./apiDolar.css";

export const ConsumoApiBcra = () => {
  const URL = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
  const [dolarBlueVenta, setDolarBlueVenta] = useState([]);
  const [dolarBlueCompra, setDolarBlueCompra] = useState([]);
  const [dolarOficialCompra, setDolarOficialCompra] = useState([]);
  const [dolarOficialVenta, setDolarOficialVenta] = useState([]);

  useEffect(() => {
    /* llamado dolar blue venta */
    Axios.get(URL).then((res) => {
      setDolarBlueVenta(
        /* res.data[1].casa.nombre + */
        " venta $" + res.data[1].casa.venta
      );
    });

    /* llamado dolar blue compra */
    Axios.get(URL).then((res) => {
      setDolarBlueCompra(
        /*     res.data[1].casa.nombre + */
        " compra $" + res.data[1].casa.compra
      );
    });

    /* llamado dolar oficial compra*/
    Axios.get(URL).then((res) => {
      setDolarOficialCompra(
        /*  res.data[0].casa.nombre + */
        " compra $" + res.data[0].casa.compra
      );
    });
    /* llamado dolar oficial venta*/
    Axios.get(URL).then((res) => {
      setDolarOficialVenta(
        /*  res.data[0].casa.nombre + */
        " venta $" + res.data[0].casa.venta
      );
    });
  }, [dolarBlueVenta, dolarOficialCompra, dolarBlueCompra, dolarOficialVenta]);

  console.log(
    dolarBlueVenta,
    dolarOficialCompra,
    dolarBlueCompra,
    dolarOficialVenta
  );
  return (
    /* se repite mismo llamado al dolar para que el slider no se termine */
    <>
      <div className="dolarContainer">
        <br />
        {/* codigo original comienza aca */}
        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Blue </h5>
          <span className="dolarVenta">{dolarBlueVenta}</span>
          <span className="dolarCompra">{dolarBlueCompra}</span>
          <hr />
          <hr />
        </div>

        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Oficial </h5>
          <span className="dolarVenta">{dolarOficialVenta}</span>
          <span className="dolarCompra">{dolarOficialCompra}</span>
          <hr />
          <hr />
        </div>

        {/* codigo original finaliza aca */}

        {/* abajo se repite el codido original varias veces para no cortar el slider */}
        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Blue </h5>
          <span className="dolarVenta">{dolarBlueVenta}</span>
          <span className="dolarCompra">{dolarBlueCompra}</span>
          <hr />
          <hr />
        </div>

        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Oficial </h5>
          <span className="dolarVenta">{dolarOficialVenta}</span>
          <span className="dolarCompra">{dolarOficialCompra}</span>
          <hr />
          <hr />
        </div>
        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Blue </h5>
          <span className="dolarVenta">{dolarBlueVenta}</span>
          <span className="dolarCompra">{dolarBlueCompra}</span>
          <hr />
          <hr />
        </div>

        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Oficial </h5>
          <span className="dolarVenta">{dolarOficialVenta}</span>
          <span className="dolarCompra">{dolarOficialCompra}</span>
          <hr />
          <hr />
        </div>

        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Blue </h5>
          <span className="dolarVenta">{dolarBlueVenta}</span>
          <span className="dolarCompra">{dolarBlueCompra}</span>
          <hr />
          <hr />
        </div>

        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Oficial </h5>
          <span className="dolarVenta">{dolarOficialVenta}</span>
          <span className="dolarCompra">{dolarOficialCompra}</span>
          <hr />
          <hr />
        </div>

        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Blue </h5>
          <span className="dolarVenta">{dolarBlueVenta}</span>
          <span className="dolarCompra">{dolarBlueCompra}</span>
          <hr />
          <hr />
        </div>

        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Oficial </h5>
          <span className="dolarVenta">{dolarOficialVenta}</span>
          <span className="dolarCompra">{dolarOficialCompra}</span>
          <hr />
          <hr />
        </div>

        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Blue </h5>
          <span className="dolarVenta">{dolarBlueVenta}</span>
          <span className="dolarCompra">{dolarBlueCompra}</span>
          <hr />
          <hr />
        </div>

        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Oficial </h5>
          <span className="dolarVenta">{dolarOficialVenta}</span>
          <span className="dolarCompra">{dolarOficialCompra}</span>
          <hr />
          <hr />
        </div>

        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Blue </h5>
          <span className="dolarVenta">{dolarBlueVenta}</span>
          <span className="dolarCompra">{dolarBlueCompra}</span>
          <hr />
          <hr />
        </div>

        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Oficial </h5>
          <span className="dolarVenta">{dolarOficialVenta}</span>
          <span className="dolarCompra">{dolarOficialCompra}</span>
          <hr />
          <hr />
        </div>

        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Blue </h5>
          <span className="dolarVenta">{dolarBlueVenta}</span>
          <span className="dolarCompra">{dolarBlueCompra}</span>
          <hr />
          <hr />
        </div>

        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Oficial </h5>
          <span className="dolarVenta">{dolarOficialVenta}</span>
          <span className="dolarCompra">{dolarOficialCompra}</span>
          <hr />
          <hr />
        </div>

        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Blue </h5>
          <span className="dolarVenta">{dolarBlueVenta}</span>
          <span className="dolarCompra">{dolarBlueCompra}</span>
          <hr />
          <hr />
        </div>

        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Oficial </h5>
          <span className="dolarVenta">{dolarOficialVenta}</span>
          <span className="dolarCompra">{dolarOficialCompra}</span>
          <hr />
          <hr />
        </div>

        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Blue </h5>
          <span className="dolarVenta">{dolarBlueVenta}</span>
          <span className="dolarCompra">{dolarBlueCompra}</span>
          <hr />
          <hr />
        </div>

        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Oficial </h5>
          <span className="dolarVenta">{dolarOficialVenta}</span>
          <span className="dolarCompra">{dolarOficialCompra}</span>
          <hr />
          <hr />
        </div>

        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Blue </h5>
          <span className="dolarVenta">{dolarBlueVenta}</span>
          <span className="dolarCompra">{dolarBlueCompra}</span>
          <hr />
          <hr />
        </div>

        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Oficial </h5>
          <span className="dolarVenta">{dolarOficialVenta}</span>
          <span className="dolarCompra">{dolarOficialCompra}</span>
          <hr />
          <hr />
        </div>

        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Blue </h5>
          <span className="dolarVenta">{dolarBlueVenta}</span>
          <span className="dolarCompra">{dolarBlueCompra}</span>
          <hr />
          <hr />
        </div>

        <br />

        <div className="dolar">
          <hr />
          <h5 className="dolarTitulo">Dolar Oficial </h5>
          <span className="dolarVenta">{dolarOficialVenta}</span>
          <span className="dolarCompra">{dolarOficialCompra}</span>
          <hr />
          <hr />
        </div>
      </div>
    </>
  );
};
