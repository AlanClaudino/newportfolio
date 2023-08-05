import {useEffect, useRef, useState} from "react";
import {
  ContactContainer,
  Container,
  FormContainer,
  FormSection,
  FormTextContainer,
  Input,
  SendButton,
  SubTitle,
  Text,
  TextArea,
  TextSection,
  Title,
} from "./styled";
import emailjs from "@emailjs/browser";

import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {usePageContext} from "../../context/context";

const Contact = () => {
  const {language} = usePageContext();

  const [animate, setAnimate] = useState("false");
  const [disable, setDisable] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setAnimate("true");
      } else {
        setAnimate("false");
      }
    });

    const contact = document.querySelector("#contact");
    observer.observe(contact);
  }, []);

  const notifySuccess = () => toast.success("Message Successfully sent.");
  const notifyError = () => toast.error("An error happened. Please try again.");

  const handleForm = async (event) => {
    event.preventDefault();
    const params = {
      from_name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    try {
      setDisable(true);
      const response = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        params,
        import.meta.env.VITE_PUBLIC_KEY
      );

      notifySuccess();

      console.log("E-mail enviado", response.status);

      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
      setDisable(false);
    } catch (error) {
      notifyError();
      console.log(error);
      setDisable(false);
    }
  };

  return (
    <ContactContainer id="contact">
      <Container>
        <Title animation={animate}>{language.contact.title}</Title>
        <FormTextContainer>
          <TextSection animation={animate}>
            <SubTitle>{language.contact.subtitle}</SubTitle>
            <Text>{language.contact.p1}</Text>
          </TextSection>
          <FormContainer animation={animate} onSubmit={(e) => handleForm(e)}>
            <FormSection>
              <Input
                placeholder={language.contact.formName}
                ref={nameRef}
                required
                disabled={disable}
              />
              <Input
                placeholder={language.contact.formEmail}
                ref={emailRef}
                required
                disabled={disable}
              />
            </FormSection>
            <FormSection>
              <TextArea
                placeholder={language.contact.formMessage}
                rows={5}
                ref={messageRef}
                required
                disabled={disable}
              />
            </FormSection>
            <FormSection>
              <SendButton type="submit">
                {language.contact.formButton}
              </SendButton>
            </FormSection>
          </FormContainer>
        </FormTextContainer>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ContactContainer>
  );
};

export default Contact;
