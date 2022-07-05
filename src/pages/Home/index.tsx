import { lazy } from "react";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import ContactContent from "../../content/ContactContent.json";
import { withTranslation } from "react-i18next";
import ServiceContentBlock from "../../components/ContentBlock/ContentBlock/serviceContentBlock";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = ({ t }: any) => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="main"
        title={t("Buy Ticket for future life")}
        content={t("Investing in technology and mental & emotional health can help you build your saving, protect your money from inflation and maximize income from the market.")}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={t("About Us")}
        content={t("ROI Capital Humano SAC is a Human Resource consulting, which specialise in evaluating people where we value psychological results in financial terms. And with our new project CIMA, we believe that the construction of a platform where anyone can self-evaluate and receive a report on themselves could help to take better decision in professional life.")}
        button={t(MiddleBlockContent.button)}
      />
      <ServiceContentBlock
        type="service"
        title={t("Our Service")}
        content={t("The value of your time is precious, we save time to HR areas in evaluation process. We are able to offer personal evaluation in job descriptions and do work environment diagnosis in organisations, saving more than 75% of the budget in HR process our ROI method in Human Capital. We will be happy if you contact us for more information.")}
        icon="waving.svg"
        id="product"
      />
      <ContentBlock
        type="faq"
        title={t("Our Product")}
        content={t("A skills map base in psychological test that bring people to know themselves and have a guide of what to do in their professional life. We are constructing a platform where anyone could self- evaluated and has a report of his / her self. Also, this report will show the combination of the most important skills; the Emotional Coefficient, indicator of emotional stability; and the ROI, the return on investment as a human person. All our automatization tests are designed by ROI Capital Humano SAC. and our method is unique over the word. Now, we are working hard to make the platform.")}
        icon="graphs.svg"
        id="about"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default withTranslation()(Home);
