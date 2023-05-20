import React, { useEffect, useState } from "react";
import "./css/home.css";

const News = () => {
  const brake = "||";
  return (
    <>
      <div className="runing-news">
        <p className="news">
          CCI clears merger of Credit Suisse Group with UBS Group.
          <span className="space" />
          {brake}
          <span className="space" />
          Changes in FEMA rules: Debit, credit cards to have parity; business visits of employees exempted from LRS.
          <span className="space" />
          {brake}
          <span className="space" />
          What happens if 2000 note not deposited by Sept 30 ?
          <span className="space" />
          {brake}
          <span className="space" />
          ICICI Bank revises bulk FD rates effective from today, promising up to 7.25% on these tenures. 
          <span className="space" />
          {brake}
          <span className="space" />
          Changes in FEMA rules: Debit, credit cards to have parity; business visits of employees exempted from LRS.
          <span className="space" />
          {brake}
          <span className="space" />
          What happens if 2000 note not deposited by Sept 30 ?
          <span className="space" />
          {brake}
          <span className="space" />
          ICICI Bank revises bulk FD rates effective from today, promising up to 7.25% on these tenures. 
        </p>
      </div>
    </>
  );
};

export default News;
