import { Fragment } from "react";
import { useModal } from "utils/ModalContext";
import GlobalStyles from "assets/styles/GlobalStyles"
import Layout from "components/layout";
import WalletModal from "components/modal/walletModal/WalletModal";
import MetamaskModal from "components/modal/metamaskModal/MetamaskModal";
import Header from "sections/Header/v2";
import PageHeader from "sections/ProjectPages/ProjectsList/PageHeader";
import ProjectsGrid from "sections/ProjectPages/ProjectsGrid";
import Footer from "sections/Footer/v1";

export default function ProjectGridPage() {
  const { walletModalvisibility, metamaskModal } = useModal();
  return (
    <Fragment>
      <GlobalStyles />
      <Layout>
        {walletModalvisibility && <WalletModal />}
        {metamaskModal && <MetamaskModal />}
        <Header />
        <PageHeader currentPage="PROJECTS" pageTitle="EXPLORE IGOS" />
        <ProjectsGrid />
        <Footer />
      </Layout>
    </Fragment>
  );
}
 