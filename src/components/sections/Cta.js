import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Button from '../elements/Button';
import Modal from '../elements/Modal';
import styles from './Cta.module.css';
import config from '../../config';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const [contactMePleaseModalActive, setContactMePleaseModalActive] = useState(false);
  const [contactMePleaseText, setContactMePleaseText] = useState("Grazie per l'interesse! Ti contatteremo al più presto a questa email.");

  const openModal = (e) => {
    e.preventDefault();
    setContactMePleaseModalActive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setContactMePleaseModalActive(false);
  }

  const contactMePlease = async (e) => {
    const email = document.getElementById("newsletter").value;
    console.log("EMAIL:", email);
    openModal(e);
    await fetch(`${config.serverBaseUrl}/showcaseEmailApplication/${email}`)
      .then(response => response.json())
      //.then(data => console.log('response:', data))
      .catch(error => {
        setContactMePleaseText(`
          Spiacenti, si è verificato un problema nell'acquisizione del suo indirizzo email
          (${error.message}).
          Si prega di riprovare più tardi...
        `);
        console.error('showcaseEmailApplication error:', error.message)
      })
    ;
    return false; // to enforce html5 email validation
  };
  
  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner', 'section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              Vuoi essere ricontattato?
            </h3>
          </div>
          <div className="cta-action">

            <form onSubmit={contactMePlease}>
              <div className={styles.email_table}>
                <div className={styles.email_table_cell}>
                  <Input id="newsletter" type="email" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" required autoComplete="email" label="Contattami" labelHidden hasIcon="left" placeholder={"inserisci la tua email"} style={{fontSize: "1.1em", paddingLeft: 20}}></Input>
                </div>
                <Button type="submit" tag="button" color="primary" wideMobile style={{fontSize: "1.1em", color: "white"}}>➡</Button>
              </div>
            </form>

            {/* 
            <form onSubmit={contactMePlease}>
              <input type="email" placeholder="Enter your email" />
              <input type="submit" value="Submit" />
            </form>
            */}

          </div>
        </div>
      </div>

      <Modal
        id="contact-me-please-modal"
        show={contactMePleaseModalActive}
        handleClose={closeModal}
        closeHidden={true}
      >
        <>
          <p style={{color:"white"}}>{contactMePleaseText}</p>
          <button name="ok" variant="primary" onClick={closeModal}> Ok </button>
        </>
      </Modal>

    </section>

  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;