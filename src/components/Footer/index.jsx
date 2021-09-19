import React from "react";

const Footer = () => {
  return (
    <div className="text-dark bg-white shadow">
      <footer className="container pt-3 pb-3">
        {
          //GB: Cuando este disponible el EndPoint de datos publicos cambiar los datos por los recibidos del mismo.
        }

        <div className="row">
          <div className="p-0 col-xs-12 col-sm-6 col-lg-5">
            <img style={{ width: "150px" }} src="./assets/logo-sm.png" />
            <p className="m-0">Ciudad, Provincia, Pais</p>
            <p className="m-0">+54 1160112988</p>
            <p className="m-0">somosfundacionmas@gmail.com</p>
          </div>

          {
            //GB: Cambiar etiqueta <a> por componente <Link> de React Router cuando este disponible.
          }

          <div className="pt-4 ps-0 pt-sm-0 ps-sm-3 col-xs-12 col-sm-3 col-md-4 col-lg-5">
            <div className="col-12">
              <a href="#" className="link-dark text-decoration-none">
                Noticias
              </a>
            </div>

            <div className="col-12">
              <a href="#" className="link-dark text-decoration-none">
                Actividades
              </a>
            </div>

            <div className="col-12">
              <a href="#" className="link-dark text-decoration-none">
                Novedades
              </a>
            </div>

            <div className="col-12">
              <a href="#" className="link-dark text-decoration-none">
                Testiomonios
              </a>
            </div>

            <div className="col-12">
              <a href="#" className="link-dark text-decoration-none">
                Nosotros
              </a>
            </div>

            <div className="col-12">
              <a href="#" className="link-dark text-decoration-none">
                Contacto
              </a>
            </div>
          </div>

          {
            //GB: Cuando este disponible el EndPoint de datos publicos implementar links de las redes sociales.
          }

          <div className="pt-4 ps-0 p-sm-0 col-xs-12 col-sm-3 col-md-2">
            <div className="col">
              <a
                href="http://facebook.com"
                className="p-0 ps-sm-2 link-dark text-decoration-none"
                target="_blank"
              >
                Facebook
              </a>
            </div>

            <div className="col">
              <a
                href="http://instagram.com"
                className="p-0 ps-sm-2 link-dark text-decoration-none"
                target="_blank"
              >
                Instagram
              </a>
            </div>

            <div className="col">
              <a
                href="http://twitter.com"
                className="p-0 ps-sm-2 link-dark text-decoration-none"
                target="_blank"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
