import React from "react";
import "../css/usercard.css";

type DebitCardProps = {
  bankName: string;
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
};

const Usercard: React.FC<DebitCardProps> = ({
  bankName,
  cardNumber,
  cardHolder,
  expirationDate,
  cvv,
}) => {
  return (
    <>
      <div className="user-card">
        <div className="user-front">
          <div className="row">
            <p className="name-card1">{cardHolder}</p>
            <p className="name-card2">{bankName}</p>

            <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="60px" />
          </div>
          <div className="row-card-no">
            <p>Acc. {cardNumber}</p>
          </div>
          <div className="row-card-holder">
            <p className="name-card">
              UPI Id <br />
              {expirationDate}
            </p>
            <p className="exp">
              IFSC CODE <br />
              {cvv}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Usercard;
