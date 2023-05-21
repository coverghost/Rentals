import React from "react";
import "../css/debitcard.css";

type DebitCardProps = {
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
};

const DebitCard: React.FC<DebitCardProps> = ({
  cardNumber,
  cardHolder,
  expirationDate,
  cvv,
}) => {
  return (
    <>
      
        <div className="card">
          <div className="card-inner">
            <div className="front">
              <img src="https://i.ibb.co/PYss3yv/map.png" className="map-img" />
              <div className="row">
                <img src="https://i.ibb.co/G9pDnYJ/chip.png" width="60px" />
                <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="60px" />
              </div>
              <div className="row-card-no">
                <p>{cardNumber}</p>
                {/* <p>2150</p>
                <p>8252</p>
                <p>6420</p> */}
              </div>
              <div className="row-card-holder">
                <p className="name-card">CARD HOLDER</p>
                <p className="exp">VALID TILL</p>
              </div>
              <div className="row-name">
                <p className="name-card1">{cardHolder}</p>
                <p className="exp-date">{expirationDate}</p>
              </div>
            </div>
            <div className="back">
              <img src="https://i.ibb.co/PYss3yv/map.png" className="map-img" />
              <div className="bar"></div>
              <div className="row card-cvv">
                <div>
                  <img
                    src="https://i.ibb.co/S6JG8px/pattern.png"
                    alt="Pattern"
                  />
                </div>
                <p>{cvv}</p>
              </div>
              <div className="row card-text">
                <p>
                  This is a virtual card design using HTML and CSS. You can also
                  design something like this.
                </p>
              </div>
              <div className="signature">
                <p>CUSTOMER SIGNATURE</p>
                <img
                  src="https://i.ibb.co/WHZ3nRJ/visa.png"
                  width="80px"
                  alt="Visa Logo"
                />
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default DebitCard;
