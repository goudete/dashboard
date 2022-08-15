import React, { useContext, useEffect, useState } from "react";
import { useParams, Link, Outlet, useNavigate } from "react-router-dom";
import { DaoContext, DaoCtx } from "../../contexts/DaoContext";
import { mockBankAccounts, mockCards, mockTransactions } from "../../mockData";
import { BankAccount, Card, Transaction } from "../../types/types";
import card1 from "../../assets/card-1.svg";
import card2 from "../../assets/card-2.svg";
import dayjs from "dayjs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./daoHome.scss";

import { MainButton } from "../../components";
import { Navigation, Pagination } from "swiper";

function DaoHome() {
  const { currentDao } = useContext(DaoContext) as DaoCtx;
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([]);
  const [cards, setCards] = useState<Card[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const nav = useNavigate();

  useEffect(() => {
    setBankAccounts(mockBankAccounts);
    setCards(mockCards);
    setTransactions(mockTransactions);
  }, []);

  return (
    <div className="daoHome-container">
      <div className="daoHome-container__top">
        <div className="daoHome-container__top-bankAccounts animate__animated animate__fadeInDown">
          <h4>Accounts</h4>
          <div className="list-holder">
            {bankAccounts.map((el, i) => (
              <div className="list-item" key={el.accountNumber}>
                <div className={"part"}>
                  {i === 0 && <div className="list-label">Account #</div>}
                  <div className="list-value">{el.accountNumber}</div>
                </div>
                <div className={"part"}>
                  {i === 0 && <div className="list-label">Balance</div>}
                  <div className="list-value">
                    <span>{el.currency} </span>
                    {el.amount?.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="actions">
            <MainButton title={"New account"} onClick={() => null} small />
          </div>
        </div>

        <div className="daoHome-container__top-cards animate__animated animate__fadeInDown">
          <h4>Cards</h4>
          <div className="list-holder">
            <Swiper
              pagination
              navigation
              modules={[Navigation, Pagination]}
              centeredSlides
              slidesPerView={1}
            >
              <SwiperSlide>
                <img src={card1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={card2} />
              </SwiperSlide>
            </Swiper>
            {/* {cards.map((el, i) => (
              <div className="list-item" key={el.cardNumber}>
                <div className={"part"}>
                  {i === 0 && <div className="list-label">&nbsp;</div>}
                  <div className="list-value">{el.cardNumber}</div>
                </div>
              </div>
            ))} */}
          </div>

          <div className="actions">
            <MainButton title={"Issue card"} onClick={() => null} small />
          </div>
        </div>
      </div>
      <div className="daoHome-container__bottom animate__animated animate__fadeInUp">
        <div className="daoHome-container__bottom-transactions">
          <h4>Transactions</h4>
          <div className="list-holder tr-list">
            {transactions.map((el, i) => (
              <div className="list-item" key={i}>
                <div className="part fullPart">
                  {i === 0 && (
                    <div className="list-label tr-label">
                      <span className="date">Date</span>
                      <span className="title">Title</span>
                      <span className="amount">Amount</span>
                    </div>
                  )}
                  <div className="list-value tr-val">
                    <span className="date">
                      {dayjs(el.date).format("MMM DD, YYYY")}
                    </span>
                    <span className="val">{el.name}</span>
                    <span className="sum">${el.amount.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="actions">
            <MainButton
              title={"See all"}
              onClick={() => nav(`transactions`)}
              small
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaoHome;
