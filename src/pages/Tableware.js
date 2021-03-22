import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import tableware from "../json/tableware.json"
import HamMenu from "../components/HamMenu"
import NavBar from "../components/NavBar"
import { useState } from "react";

const { Header, Content, Footer } = Layout;

function Tableware() {
  const [isOnTouch, setIsOnTouch] = useState(false);
  return (
    <Layout className="container main-layout">
      <Header className="layout-header ">
        <HamMenu
          onClick={() => setIsOnTouch(!isOnTouch)}
          isOnTouch={isOnTouch}
        />
        <AppHeader title="Tableware" />
        <NavBar isOnTouch={isOnTouch} />
      </Header>
      <Content className="layout-content">
        <ProductList products={tableware} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default Tableware;
