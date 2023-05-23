import React, { useContext } from "react";
import "../css/usercard.css";
import { MyContext } from "../../context/Context";

type DebitCardProps = {
  bankName: string;
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
};

const UserCard: React.FC<DebitCardProps> = ({
  bankName,
  cardNumber,
  cardHolder,
  expirationDate,
  cvv,
}) => {
  const { setUniupi } = useContext(MyContext);

  const handleValue = (value: any) => {
    setUniupi(value);
    console.log("Clicked - UPI ID - Line 20: ", value);
  };

  return (
    <>
      <div className="user-card" onClick={() => handleValue(expirationDate)}>
        <div className="user-front">
          <div className="row">
            <p className="name-card1">{cardHolder}</p>
            <p className="name-card2">{bankName}</p>
            Pay by Click
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

export default UserCard;
