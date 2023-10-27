import { useState } from "react";
import { ModalContext } from "./ModalContext";
import Web3 from 'web3'

const ContextProvider = ({ children }) => {
  const [walletModalvisibility, setModalvisibility] = useState(false);
  const [shareModalVisibility, setShareModalvisibility] = useState(false);
  const [metamaskModal, setMetamaskModal] = useState(false);
  const [accounts, setAccounts] = useState(null);
  const [web3, setWeb3] = useState(null)

  const handleAccountConnect = (acc, _web3) => {
    setAccounts(acc);
    let web3 = new Web3(_web3)
    setWeb3(web3);
    console.log("handled");
  };

  const walletModalHandle = () => {
    setModalvisibility(!walletModalvisibility);
  };

  const shareModalHandle = (e) => {
    e.preventDefault();
    setShareModalvisibility(!shareModalVisibility);
  };

  const handleMetamaskModal = () => {
    setModalvisibility(!walletModalvisibility);
    setMetamaskModal(!metamaskModal);
  };

  return (
    <ModalContext.Provider
      value={{
        walletModalHandle,
        walletModalvisibility,
        shareModalVisibility,
        shareModalHandle,
        metamaskModal,
        handleMetamaskModal,
        handleAccountConnect,
        accounts,
        web3,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ContextProvider;
