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
const PaymentSuccess = ({
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
    styles['payment-cancel-body'],
  );

  const sectionHeader = {
    title: 'Ci dispiace!',
    paragraph:  
      'Pagamento annullato.'
    ,
  };

  const sectionBody = {
    title: '',
    paragraph:
      'Potrai provare a ripetere il pagamento in qualsiasi momento...'
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
          {/*
          <div className={tilesClasses}>

            <div className={styles.payment_success}>
              Potrai provare a ripetere il pagamento in qualsiasi momento...
            </div>
          </div>
        */}
        </div>
      </div>

    </section>
  );
}

PaymentSuccess.propTypes = propTypes;
PaymentSuccess.defaultProps = defaultProps;

export default PaymentSuccess;
