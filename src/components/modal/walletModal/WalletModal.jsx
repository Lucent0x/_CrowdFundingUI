/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useModal } from "utils/ModalContext";
import { FiX, FiChevronRight } from "react-icons/fi";
import WalletModalStyleWrapper from "./WalletModal.style";
import { isMetaMaskInstalled, connectWallet } from "lib/metamaskhandler";
import metamaskIcon from "assets/images/icons/meta-mask.png";
import coinBase from "assets/images/icons/coinbase.png";
import trustWalletIcon from "assets/images/icons/trust.png";
import walletConnect from "assets/images/icons/wallet.png";

const WalletModal = () => {
  const { walletModalHandle, handleMetamaskModal,handleAccountConnect } = useModal();

  const handleMetamask = async (e) => {
    e.preventDefault()
    if (!isMetaMaskInstalled()) {
      handleMetamaskModal();
    } else {
      const data = await connectWallet();
      console.log( data[0])
             handleAccountConnect(data[0], data[1])
    }
  }

  return (
    <>
      <WalletModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>CONNECT WALLET</h2>
              <p>
                Please select a wallet to connect to this launchpad
              </p>
              <button onClick={() => walletModalHandle()}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <div className="wallet_list">
                <a href="#" onClick={(e) => handleMetamask(e)}>
                  <img src={metamaskIcon} alt="Meta-mask-Image" />
                  MetaMask
                  <span>
                    <FiChevronRight />
                  </span>
                </a>
                <a href="# ">
                  <img src={coinBase} alt="Coinbase-Image" />
                  Coinbase
                  <span>
                    <FiChevronRight />
                  </span>
                </a>
                <a href="# ">
                  <img src={trustWalletIcon} alt="Trust-Image" />
                  Trust Wallet
                  <span>
                    <FiChevronRight />
                  </span>
                </a>
                <a href="# ">
                  <img src={walletConnect} alt="Wallet-Image" />
                  WalletConnect
                  <span>
                    <FiChevronRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </WalletModalStyleWrapper>
    </>
  );
};

export default WalletModal;
