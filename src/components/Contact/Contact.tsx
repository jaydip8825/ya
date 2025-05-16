import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact FOR ME</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:jaydipdhapa18@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:jaydipdhapa18@gmail.com">
            jaydipdhapa18@gmail.com
          </a>
        </div>
        <div>
          <a href="tel:+919574153411">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+919574153411">(+91) 9574153411</a>
        </div>
      </div>
    </Container>
  );
}
