import React from 'react';
import classNames from 'classnames';

import styles from './PaymentSection.module.css';

import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
//import config from '../../config';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FreeSuccess = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left',
    styles['free-success-body'],
  );

  const sectionHeader = {
    title: '🏁 Complimenti!',
    paragraph:
      'Il periodo illimitato di prova è iniziato.'
    ,
  };

  const sectionBody = {
    title: '',
    paragraph:
      'Abbiamo inviato al tuo indirizzo e-mail le credenziali con cui puoi accedere al sito per scaricare il modello Excel, ed in seguito caricare il foglio Excel prodotto.' +
      'Ti ricordiamo che non questa versione gratutita puoi inserire al massimo 10 righe nel foglio Excel, altrimenti verrà rifiutato in fase di verifica.'
    ,
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="left-content" />
          <SectionHeader data={sectionBody} className={tilesClasses} />
          {/* <div className={tilesClasses}>

            <div className="left-content">
              Abbiamo inviato le credenziali con cui puoi accedere al sito per scaricare il modello Excel,
              ed in seguito caricare il foglio Excel prodotto.
            </div>
          </div> */}
        </div>
      </div>

    </section>
  );
}

FreeSuccess.propTypes = propTypes;
FreeSuccess.defaultProps = defaultProps;

export default FreeSuccess;
