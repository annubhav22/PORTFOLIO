import React from "react";
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss'

const Contact = () => {
 
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_9k8d81g","template_t6sc8fh",
      formRef.current,
      '_SrkMuUU1AAHrdXlE'
    ).then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.log(error.text);
        alert('Something went wrong!');
      }
    );
  };
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />

        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translate(-200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
          </Animate>
              <form ref={formRef} onSubmit={handleSubmit} className="contact__content__form">
        

        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translate(-200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <div className="contact__content__form__controlswrapper">
            <div>
              <input required name="name" className="inputName" type="text" />
              <label htmlFor="name" className="nameLabel">Name</label>
            </div>
            <div>
              <input required name="email" className="inputEmail" type="email" />
              <label htmlFor="email" className="emailLabel">Email</label>
            </div>
            <div>
              <textarea required name="description" rows="5" className="inputDescription" />
              <label htmlFor="description" className="descriptionLabel">Description</label>
            </div>
            <button type="submit">Submit</button>
          </div>
        </Animate>
      </form>
    </section>
  );
};

export default Contact;