import React, { useContext, useEffect, useState } from "react";
import { useParams, Link, Outlet, useNavigate } from "react-router-dom";
import { DaoContext, DaoCtx } from "../../contexts/DaoContext";
import { mockBankAccounts, mockCards, mockTransactions } from "../../mockData";
import { BankAccount, Card, Transaction } from "../../types/types";
import card1 from "../../assets/card-1.svg";
import card2 from "../../assets/card-2.svg";
import solIcon from '../../assets/solana.svg';
import trIcon from '../../assets/tr.svg';
import dayjs from "dayjs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./daoHome.scss";

import { MainButton } from "../../components";
import { Navigation, Pagination } from "swiper";
import classNames from "classnames";

export type ModalType = "account" | "card" | 'transaction';

function DaoHome() {
  const sortedTransactions = mockTransactions.sort((a, b) =>
    a.date < b.date ? 1 : -1
  );

  const { currentDao } = useContext(DaoContext) as DaoCtx;
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<ModalType>("account");
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([]);
  const [cards, setCards] = useState<Card[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const nav = useNavigate();

  useEffect(() => {
    setBankAccounts(mockBankAccounts);
    setCards(mockCards);
    setTransactions(mockTransactions);
  }, []);

  const openModal = (modalType: ModalType) => {
    setModalType(modalType);
    setShowModal(true);
  };

  return (
    <div className="daoHome-container">
      <div className="daoHome-container__top">
        <div className="daoHome-container__top-bankAccounts animate__animated animate__fadeInDown">
          <h4>Bank Accounts</h4>
          <div className="list-holder">
            {bankAccounts.map((el, i) => (
              <div className="list-item" key={el.accountNumber}>
                <div className={"part"}>
                  {i === 0 && (
                    <>
                      <div className="list-label ac-label">
                        <span className="title">Name</span>
                        <span className="num">Account Number</span>
                        <span className="bal">Balance</span>
                        <span className="edit">New</span>
                      </div>
                    </>
                  )}

                  <div className="list-value ac-val">
                    <span className="title">{el.title}</span>
                    <span className="num">
                      <span>
                        {"---- ---- ---- " + el.accountNumber?.substring(18)}
                      </span>
                    </span>
                    <span className="bal">
                      <span>{el.currency}</span>
                      {el.amount?.toFixed(2)}
                    </span>
                    <span className="edit" onClick={() => openModal('transaction')}>
                      <img src={trIcon} title={'Propose new transaction'}/>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="actions">
            <MainButton
              title={"Propose Account"}
              onClick={() => openModal("account")}
              small
            />
          </div>
        </div>
        <div className="daoHome-container__top-cards animate__animated animate__fadeInDown">
          <h4>Cards</h4>
          <div className="list-holder">
            <Swiper
              // width={330}
              // style={{ width: "330px" }}
              pagination
              navigation
              modules={[Navigation, Pagination]}
              centeredSlides
              spaceBetween={10}
              slidesPerView={1.5}
            >
              <SwiperSlide>
                <img src={card1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={card2} />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="actions">
            <MainButton
              title={"Propose Card"}
              onClick={() => openModal("card")}
              small
            />
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
                      <span className="hash-val">Title / Hash</span>
                      <span className="type">Type</span>
                      <span className="sum">Amount</span>
                    </div>
                  )}
                  <div className="list-value tr-val">
                    <span className="date">
                      {dayjs(el.date).format("MMM DD, YYYY")}
                    </span>
                    <span className="hash-val">
                      {el.name ? (
                        el.name
                      ) : (
                        <span className="hash">
                          {el.hash?.substring(0, 6) +
                            "..." +
                            el.hash?.substring(52)}
                        </span>
                      )}
                    </span>
                    <span className={"type " + el.type}>{el.type}</span>
                    <span className="sum">
                      {
                        el.type !== 'on chain' ? 
                          '$' + el.amount.toFixed(2) :
                          <span title={el.amount.toString()}><img src={solIcon} className={'solIcon'}/> {el.amount.toString().substring(0, 6) + '...'}</span>
                      }
                    </span>
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
      <RequestModal
        show={showModal}
        closeModal={() => setShowModal(false)}
        modalType={modalType}
      />
    </div>
  );
}

export default DaoHome;

const initialFormData = {
  name: "",
  multiSig: false,
  baseSig: "",
  multiSigData: [],
  initialFund: "",
  description: "",
};

export const RequestModal = ({ show, closeModal, modalType }: any) => {
  const [formData, setFormData] = useState(initialFormData);
  const [multisigOpt, setMultisigOpt] = useState("");

  const handleChange = (e: any) => {
    const { value, name, checked } = e.target;
    setFormData({ ...formData, [name]: name === "multiSig" ? checked : value });
  };

  const addNewSigOption = () => {
    if (!multisigOpt) return;
    setFormData({
      ...formData,
      //@ts-ignore
      multiSigData: [...formData.multiSigData, multisigOpt],
    });
    setMultisigOpt("");
  };

  const handleFormSubmit = () => {
    alert("Super, your request was sent");
    setFormData(initialFormData);
    closeModal();
  };

  const handleClose = (e: any) => {
    const { id } = e.target;
    if (id === "close") {
      closeModal();
    }
  };

  const backdropClasses = classNames([
    "modal-backdrop",
    show ? "animated" : "",
  ]);
  const holderClasses = classNames([
    "modal-holder animate__animated",
    show ? "animate__fadeInUp" : "animate__fadeOutDown",
  ]);

  return (
    <div className={backdropClasses} onClick={handleClose} id={"close"}>
      <div className={holderClasses}>
        <h4>
          {modalType === "account" ? "Propose new bank account" : modalType === 'transaction' ? 'Propose new transaction' : "Issue new card"}
        </h4>

        <div className="form-holder">
          <div className="form-field">
            <div className="label">Proposal name *</div>
            <input type={"text"} name={"name"} onChange={handleChange} />
          </div>
          <div className="form-field">
            <div className="label">Owner address *</div>
            <input type={"text"} name={"baseSig"} onChange={handleChange} />
          </div>
          <div className="form-field row">
            <div
              className="label"
              onClick={() =>
                handleChange({
                  target: { name: "multiSig", checked: !formData.multiSig },
                })
              }
            >
              Multisig
            </div>
            <input
              type={"checkbox"}
              name={"multiSig"}
              onChange={handleChange}
              checked={formData.multiSig}
            />
          </div>
          {formData.multiSig && (
            <div className="form-field">
              {formData.multiSigData && (
                <>
                  <span className="label-span">
                    Theese signatures will be required to approve transactions
                  </span>
                  <div className="signatures">
                    {formData.multiSigData.map((el, i) => (
                      <span key={i}>{el}</span>
                    ))}
                  </div>
                </>
              )}
              <div className="form-field row">
                <input
                  type={"text"}
                  value={multisigOpt}
                  onChange={(e) => setMultisigOpt(e.target.value)}
                />
                <div className="field-btn" onClick={() => addNewSigOption()}>
                  add sig
                </div>
              </div>
            </div>
          )}
          {modalType === "account" && (
            <div className="form-field">
              <div className="label">Initial funding *</div>
              <input
                type={"text"}
                name={"initialFund"}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="form-field">
            <div className="label">Description</div>
            {/* <input type={"text"} name={"description"} onChange={handleChange} /> */}
            <textarea rows={5} />
          </div>

          <div className="form-field">
            <MainButton
              className="centered-btn"
              small
              title={"submit proposal"}
              onClick={handleFormSubmit}
              inverse
            />
          </div>
        </div>
      </div>
    </div>
  );
};
