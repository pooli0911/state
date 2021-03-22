import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import lighting from "../json/lighting.json"
import HamMenu from "../components/HamMenu"
import NavBar from "../components/NavBar"
import { useState } from "react";

const { Header, Content, Footer } = Layout;

function Lighting() {
  const [isOnTouch, setIsOnTouch] = useState(false);
  return (
    <Layout className="container main-layout">
      <Header className="layout-header ">
        <HamMenu
          onClick={() => setIsOnTouch(!isOnTouch)}
          isOnTouch={isOnTouch}
        />
        <AppHeader title="Lighting" />
        <NavBar isOnTouch={isOnTouch} />
      </Header>
      <Content className="layout-content">
        <ProductList products={lighting} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default Lighting;
