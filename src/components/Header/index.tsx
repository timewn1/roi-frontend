// @ts-ignore
import logo from "../../assets/logo.png";
import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";
import { useHistory } from 'react-router-dom';
import { useAllContext } from '../../contexts';
// import setAuthToken from '../../utils/setAuthToken';

const Header = ({ t }: any) => {
  const [state, { setLogout }] = useAllContext();
  const history = useHistory();
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const handleLogout = () => {
    setLogout();
  }

  const MenuItem = () => {
    // const scrollTo = (id: string) => {
    //   const element = document.getElementById(id) as HTMLDivElement;
    //   element.scrollIntoView({
    //     behavior: "smooth",
    //   });
    //   setVisibility(false);
    // };
    return (
      <>
        {state && state.isAuthenticated ? <>
          <CustomNavLinkSmall onClick={() => history.push("/dashboard")}>
            <Span>{t("Dashboard")}</Span>
          </CustomNavLinkSmall>
          <CustomNavLinkSmall onClick={handleLogout}>
            <Span>{t("Log Out")}</Span>
          </CustomNavLinkSmall>
          <CustomNavLinkSmall
            style={{ width: "180px" }}
          >
            <Span>
              <Button onClick={() => history.push("/buy")}>{t("Buy Now")}</Button>
            </Span>
          </CustomNavLinkSmall>
        </> : <>
          <CustomNavLinkSmall onClick={() => history.push("/register")}>
            <Span>{t("Signup")}</Span>
          </CustomNavLinkSmall>
          <CustomNavLinkSmall onClick={() => history.push("/login")}>
            <Span>{t("Login")}</Span>
          </CustomNavLinkSmall>
          <CustomNavLinkSmall
            style={{ width: "180px" }}
          >
            <Span>
              <Button onClick={() => history.push("/buy")}>{t("Buy Now")}</Button>
            </Span>
          </CustomNavLinkSmall>
        </>
        }
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <img src={logo} alt="logo" width="100px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
