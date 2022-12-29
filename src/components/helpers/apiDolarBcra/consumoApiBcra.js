import Axios from "axios";
import { useState, useEffect } from "react";
import "./apiDolar.css";

export const ConsumoApiBcra = () => {
  const URLdolarBlue = "https://api.estadisticasbcra.com/usd";
  const URLdolarOficial = "https://api.estadisticasbcra.com/usd_of";
  const [dolarBlue, setDolarBlue] = useState([]);
  const [dolarOficial, setDolarOficial] = useState([]);

  useEffect(() => {
    Axios.get(URLdolarBlue, {
      headers: {
        Authorization:
          "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDM1OTQ4MDQsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJmYWJyaWNpb2dvZG95OTVAaG90bWFpbC5jb20ifQ.YNtl-7bha0o78jWHHm9A2998c0puVyhUHGLcdcEnYeWr3lT3-U1zstEoVWjgejkFnxuIx9xkgXt3Z2U6LK9cgw"
      }
    })
      /*  .then( (data) => data.text()) */
      .then((res) => {
        console.log(res);
        console.log(res.data[res.data.length - 1].v);
        setDolarBlue(
          /*   " al dia " +
            res.data[res.data.length - 1].d[8] +
            res.data[res.data.length - 1].d[9] +
            " del mes " +
            res.data[res.data.length - 1].d[5] +
            res.data[res.data.length - 1].d[6] + */
          " U$D " + res.data[res.data.length - 1].v
        );
      });

    Axios.get(URLdolarOficial, {
      headers: {
        Authorization:
          "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDM1OTQ4MDQsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJmYWJyaWNpb2dvZG95OTVAaG90bWFpbC5jb20ifQ.YNtl-7bha0o78jWHHm9A2998c0puVyhUHGLcdcEnYeWr3lT3-U1zstEoVWjgejkFnxuIx9xkgXt3Z2U6LK9cgw"
      }
    })
      /*  .then( (data) => data.text()) */
      .then((res) => {
        /*       console.log(res);
      console.log(res.data[res.data.length - 1].v); */
        setDolarOficial(
          /*   " al dia " +
          res.data[res.data.length - 1].d[8] +
          res.data[res.data.length - 1].d[9] +
          " del mes " +
          res.data[res.data.length - 1].d[5] +
          res.data[res.data.length - 1].d[6] + */
          " U$D " + res.data[res.data.length - 1].v
        );
      });
  }, [dolarOficial, dolarBlue]);
  return (
    <>
      <div className="dolarContainer">
        <div className="dolar">
          {/* primer llamado a render */}
          <div className="dolarBlue">
            Dolar Blue:
            {dolarBlue}
          </div>
          <div className="dolarOficial">
            Dolar Oficial:
            {dolarOficial}
          </div>
          {/* fin primer llamado a render */}

          {/* llamados par ano cortar el slider */}
          <div className="dolarBlue">
            Dolar Blue:
            {dolarBlue}
          </div>
          <div className="dolarOficial">
            Dolar Oficial:
            {dolarOficial}
          </div>

          <div className="dolarBlue">
            Dolar Blue:
            {dolarBlue}
          </div>
          <div className="dolarOficial">
            Dolar Oficial:
            {dolarOficial}
          </div>

          <div className="dolarBlue">
            Dolar Blue:
            {dolarBlue}
          </div>
          <div className="dolarOficial">
            Dolar Oficial:
            {dolarOficial}
          </div>

          <div className="dolarBlue">
            Dolar Blue:
            {dolarBlue}
          </div>
          <div className="dolarOficial">
            Dolar Oficial:
            {dolarOficial}
          </div>

          <div className="dolarBlue">
            Dolar Blue:
            {dolarBlue}
          </div>
          <div className="dolarOficial">
            Dolar Oficial:
            {dolarOficial}
          </div>
          
          <div className="dolarBlue">
            Dolar Blue:
            {dolarBlue}
          </div>
          <div className="dolarOficial">
            Dolar Oficial:
            {dolarOficial}
          </div>
          
          <div className="dolarBlue">
            Dolar Blue:
            {dolarBlue}
          </div>
          <div className="dolarOficial">
            Dolar Oficial:
            {dolarOficial}
          </div>
          
          <div className="dolarBlue">
            Dolar Blue:
            {dolarBlue}
          </div>
          <div className="dolarOficial">
            Dolar Oficial:
            {dolarOficial}
          </div>
          
          <div className="dolarBlue">
            Dolar Blue:
            {dolarBlue}
          </div>
          <div className="dolarOficial">
            Dolar Oficial:
            {dolarOficial}
          </div>
          
          <div className="dolarBlue">
            Dolar Blue:
            {dolarBlue}
          </div>
          <div className="dolarOficial">
            Dolar Oficial:
            {dolarOficial}
          </div>
          {/* fin llamados par ano cortar el slider */}
        </div>
      </div>
    </>
  );
};
