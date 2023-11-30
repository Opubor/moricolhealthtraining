import Link from "next/link";
import React from "react";

const HeaderSection = () => {
  return (
    <header className="tf__header d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tf__header_text">
              <Link href="/">
                <img
                  src="images/moricollogo.JPEG"
                  alt="Moricol"
                  className="img-fluid w-100"
                />
              </Link>
              <ul>
                <li>
                  <div className="icon bg-warning">
                    <i className="fa fa-phone-alt"></i>
                  </div>
                  <div className="text">
                    <h4>09124460695</h4>
                    <p>Requesting a Call:</p>
                  </div>
                </li>
              
                <li>
                  <div className="icon bg-warning">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="text">
                    <h4>E-mail</h4>
                    <p>moricolhealth@qualityservice.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
