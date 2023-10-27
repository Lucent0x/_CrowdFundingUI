/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useModal } from "utils/ModalContext";
import { MdNotes, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import NavWrapper from "./Header.style";
import Button from "components/button";
import MobileMenu from "../MobileMenu/MobileMenu";
import data from "assets/data/menu/menuData";
import logo from "assets/images/logo.png";

import connectIcon from "assets/images/icons/connect.png"
import walletIcon1 from "assets/images/icons/pancake.png"
import walletIcon2 from "assets/images/icons/uniswap.png"



const Header = () => {
  const { walletModalHandle } = useModal();
  const [isMobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  // *******Comment out this code blew if you want to use sticky menu *******
  // useEffect(() => {
  //   const header = document.getElementById("navbar");
  //   const handleScroll = window.addEventListener("scroll", () => {
  //     if (window.pageYOffset > 50) {
  //       header.classList.add("sticky");
  //     } else {
  //       header.classList.remove("sticky"); 
  //     }
  //   });

  //   return () => {
  //     window.removeEventListener("sticky", handleScroll);
  //   };
  // }, []);

  const handleWalletBtn = (e) => {
    e.preventDefault();
    walletModalHandle()
  }

  return (
    <NavWrapper className="gamfi_header" id="navbar">
      <div className="container">
        {/* Main Menu Start */}
        <div className="gamfi_menu_sect">
          <div className="gamfi_menu_left_sect">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="gamfi nft logo" />
              </a>
            </div>
          </div>
          <div className="gamfi_menu_right_sect gamfi_v1_menu_right_sect">
            <div className="gamfi_menu_list">
              <ul>
                {/* menu  */}
                {data?.map((menu, i) => (
                  <li key={i}>
                    <a href={menu.url}>{menu.title} {menu.subMenus?.length > 0 && <MdOutlineKeyboardArrowDown />}</a>

                    {/* if has subMenu and length is greater than 0 */}
                    {menu.subMenus?.length > 0 && (
                      <ul className="sub_menu_list">
                        {menu.subMenus?.map((subMenu, i) => (
                          <li key={i}>
                            <a href={subMenu.url}>{subMenu.title} {subMenu?.subMenuChilds?.length > 0 && <MdOutlineKeyboardArrowRight />}</a>

                            {/* if subMenu child has menu child */}
                            {subMenu?.subMenuChilds?.length > 0 && (
                              <ul className="sub_menu_child_list">
                                {subMenu?.subMenuChilds?.map((subChild, i) => (
                                  <li key={i}>
                                    <a href={subChild.url}> {subChild.title} </a>
                                  </li>

                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="gamfi_menu_btns">
              <button className="menu_btn" onClick={() => handleMobileMenu()}>
                <MdNotes />
              </button>

              <div className="wallet_btn">
                Buy token <MdOutlineKeyboardArrowDown />

                <div className="wallet_token_list"> 
                    <a href="/eNaira"> <img src={walletIcon1} alt="icon" /> Buy ENSC with eNaira CBDC </a>  
                    <a href="/Dex"> <img src={walletIcon2} alt="icon" />  Swap USDC/USDT &infin; ENSC </a>
                </div>
              </div>
              <Button
                href="# "
                sm
                variant="white"
                className="connect_btn"
                onClick={e => handleWalletBtn(e)}
              >
                <img src={connectIcon} alt="icon" />
                Connect
              </Button>
            </div>
          </div>
        </div>
        {/* <!-- Main Menu END --> */}
        {/* <!-- mobile menu --> */}
        {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
      </div>
    </NavWrapper>
  );
};

export default Header;
