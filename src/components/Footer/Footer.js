import React from 'react'
import "./FooterTestStyle.css"
import { Link } from 'react-router-dom'


export const Footer = () => {
  return (
    <footer className="footer">
        <div className="container bottom_border">
        <h1 style={{ color: "white",
				textAlign: "center"}}>
		Solution Box Uruguay S.A
	</h1>
              <div className="row">
                <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                <h5 className="headin5_amrc col_white_amrc pt2">ENCUÉNTRANOS</h5>
                    <p><i className="fa fa-location-arrow"></i> Galicia 780 <br/>Montevideo. Rep. Oriental del Uruguay. </p>
                    <p><i className="fa fa-phone"></i>  (+598) 2900 0111  </p>
                    <p><i className="fa fa fa-envelope"></i> infouy@solutionbox.com.uy</p>
                </div>


            <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">SEDES</h5>
                <ul className="footer_ul_amrc">
                <li><a href="https://www.solutionboxusa.com/" target='_blank' rel="noreferrer">USA</a></li>
                <li><a href="https://www.solutionbox.com.uy/" target='_blank' rel="noreferrer">Uruguay</a></li>
                <li><a href="https://www.solutionbox.com.do/" target='_blank' rel="noreferrer">Republica Dominicana</a></li>
                <li><a href="https://www.solutionbox.cr/" target='_blank' rel="noreferrer">Costa Rica</a></li>
                <li><a href="https://www.solutionbox.com.hk/" target='_blank' rel="noreferrer">Hong Kong</a></li>
                <li><a href="http://www.solutionbox.com.gt/" target='_blank' rel="noreferrer">Guatemala</a></li>
                <li><a href="http://www.solutionbox.com.hn/" target='_blank' rel="noreferrer">Honduras</a></li>
                <li><a href="http://www.solutionbox.com.sv/" target='_blank' rel="noreferrer">El Salvador</a></li>
                <li><a href="https://www.solutionbox.com.ar/" target='_blank' rel="noreferrer">Argentina</a></li>
                <li><a href="http://www.solutionbox.com.py/" target='_blank' rel="noreferrer">Paraguay</a></li>
                </ul>
            </div>
            


            <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">SOLUTION</h5>

                <ul className="footer_ul_amrc">
                <li><Link to="nuestraempresa">La Empresa</Link></li>
                <li><Link to="trabajaconnosotros">Trabaja con nosotros</Link></li>
                <li><Link to="rma">RMA</Link></li>
                <li><a href="https://www.solutionbox.com.ar/info-impositiva">Legajo Impositivo</a></li>
                </ul>
            </div>


                <div className=" col-sm-4 col-md  col-12 col">
                <h5 className="headin5_amrc col_white_amrc pt2">WEB</h5>

                <ul className="footer_ul_amrc">
                <li><a href="http://www.solutionboxusa.com/downloads/catalogo-SB-Group.pdf">Catalogo Digital</a></li>
                <li><Link to="capacitaciones">Capacitaciones</Link></li>
                <li><Link to="contacto">Alta Usuarios</Link></li>
                </ul>

                </div>
            </div>
            </div>


            <div className="container">
            <p className="text-center">© Galicia 780, Montevideo. Rep. Oriental del Uruguay. </p>


            <section>
  <ul className="icon-list">
    <li className="icon-item">
      <a href="https://www.instagram.com/solutionbox.panama" target='_blank' rel="noreferrer" className="icon-link"><i className="fab fa-instagram"></i></a>
    </li>
    <li className="icon-item">
      <a href="https://es-la.facebook.com/sboxuruguay/" target='_blank' rel="noreferrer" className="icon-link"><i className="fab fa-facebook-f"></i></a>
    </li>
    <li className="icon-item">
      <a href="https://twitter.com/solutionboxusa" target='_blank' rel="noreferrer" className="icon-link"><i className="fab fa-twitter"></i></a>
    </li>
    <li className="icon-item">
      <a href="https://www.youtube.com/channel/UCxWedPaJvnyZXCC7f65cdzg" target='_blank' rel="noreferrer" className="icon-link"><i className="fab fa-youtube"></i></a>
    </li>
    <li className="icon-item">
      <a href="https://uy.linkedin.com/company/solution-box-uruguay" target='_blank' rel="noreferrer" className="icon-link"><i className="fab fa-linkedin-in"></i></a>
    </li>    
  </ul>
</section>

        </div>

    </footer>
  )
}
