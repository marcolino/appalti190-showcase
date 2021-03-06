import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Un modello molto elegante',
    paragraph: `
      Il modello Excel che ti forniamo ti aiuta ad evitare sviste durante l'inserimento dei dati.
      Riga per riga, campo per campo, il modello controlla che i dati che inserisci siano formalmente corretti e aderenti alla normativa.
    `,
  };

  return (
    <section
      id={"workflow"}
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="left-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Un'operazione semplicissima
                  </div>
                <h3 className="mt-0 mb-12">
                  Compila una riga per ogni appalto
                  </h3>
                <p className="m-0">
                  Il tuo strumento di lavoro sar?? il foglio di calcolo a cui sei gi?? abituato: <b><i>MS-Excel</i></b> o <b><i>LibreOffice Calc</i></b>.
                  Nessun bisogno di imparare nuovi software, con regole nuove e vincoli difficili da comprendere.
                  Ti forniamo un semplicissimo modello di foglio di calcolo Excel (oppure se preferisci Open Document Format).
                  La tua amministrazione deve compilarlo, una riga per ogni appalto.
                  Al termine, prima della scadenza (in genere alla fine di Gennaio), ?? sufficiente collegarsi al nostro sito,
                  e caricare il foglio compilato.
                  A questo punto potrai scaricare il documento pronto da pubblicare sul sito.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  // src={require('./../../assets/images/features-split-image-01.png')}
                  src={require('./../../assets/images/appalti190-elenco-gare.png')}
                  alt="Elenco gare"
                  width={860}
                  height={464} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Una conferma immediata
                </div>
                <h3 className="mt-0 mb-12">
                  Fai upload del foglio
                </h3>
                <p className="m-0">
                  Alla fine dell'anno (ma potrai farlo ogni momento che vorrai) ti baster?? caricare il foglio di calcolo sul sito <b><i>appalti190</i></b>.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/appalti190-upload-xls.png')}
                  alt="Upload file"
                  width={1202}
                  height={168} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Una verifica istantanea
                </div>
                <h3 className="mt-0 mb-12">
                  Verifica la correttezza formale dei dati inseriti in un click.                  
                </h3>
                <p className="m-0">
                  In un istante saprai se tutti i dati che hai inserito sono formalmente corretti.
                  Questa verifica ?? la stessa adottata dall' A.N.A.C., per cui non ci sono sorprese.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/appalti190-ok.png')}
                  alt="Ok"
                  width={202}
                  height={68} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;