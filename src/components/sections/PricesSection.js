import React from 'react';
import classNames from 'classnames';

//import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
// TODO: use https://codepen.io/htmlcodex/pen/JjYmEeV

import styles from './PricesSection.module.css';

import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
//import Image from '../elements/Image';

const featuredClasses = `${styles.ptable_item} ${styles.featured_item}`;

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Prices = ({
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
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'I prezzi',
    /* eslint-disable no-useless-concat */
    paragraph:
      'irrisori...'
    ,
  };

  const buy = async () => {
    fetch("http://localhost:5000/create-checkout-session", {
      method: "POST",
      // headers: {
      //   "Accept": "application/json",
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify({
      //   firstParam: "yourValue",
      //   secondParam: "yourOtherValue",
      // })
    }).then(response => {
      console.log("response:", response);
      let url = response.url;
      //url = url.replace(/#/g, "%23");
      //alert(url);
      window.location.href = url;
    });
  };

  // const choice = (c) => {
  //   console.log("You choose", c);
  // };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="left-content" />
          <div className={tilesClasses}>

            <div className={styles.pricing_table}>

              <div className={styles.ptable_item}>
                <div className={styles.ptable_single}>
                  <div className={styles.ptable_header}>
                    <div className={styles.ptable_title}>
                      <h2>Gratuito</h2>
                    </div>
                    <div className={styles.ptable_price}>
                      <h2><small>€</small>0<span>/ anno</span></h2>
                    </div>
                  </div>
                  <div className={styles.ptable_body}>
                    <div className={styles.ptable_description}>
                      <ul>
                        <li>fino a <b>10</b> CIG </li>
                        <li>Supporto per email</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.ptable_footer}>
                    <div className={styles.ptable_action}>
                      <a href="#0">Prova gratuitamente</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={featuredClasses}>
                <div className={styles.ptable_single}>
                  <div className={styles.ptable_header}>
                    {/* <div className={styles.ptable_status}>
                      <span>Hot</span>
                    </div> */}
                    <div className={styles.ptable_title}>
                      <h2>Standard</h2>
                    </div>
                    <div className={styles.ptable_price}>
                      <h2><small>€</small>399<span>/ anno</span></h2>
                    </div>
                  </div>
                  <div className={styles.ptable_body}>
                    <div className={styles.ptable_description}>
                      <ul>
                        <li>fino a <b>3000</b> CIG </li>
                        <li>Supporto per email</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.ptable_footer}>
                    <div className={styles.ptable_action}>
                      <a href="#0" onClick={buy}>Acquista</a>
                      <form action="http://localhost:5000/create-checkout-session" method="POST">
                        <input type="submit">ACQUISTA submit</input>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.ptable_item}>
                <div className={styles.ptable_single}>
                  <div className={styles.ptable_header}>
                    <div className={styles.ptable_title}>
                      <h2>Illimitato</h2>
                    </div>
                    <div className={styles.ptable_price}>
                      <h2><small>€</small>799<span>/ anno</span></h2>
                    </div>
                  </div>
                  <div className={styles.ptable_body}>
                    <div className={styles.ptable_description}>
                      <ul>
                        <li>CIG <b>illimitate</b></li>
                        <li>Supporto per email</li>
                        <li>Supporto telefonico</li>
                        <li>&nbsp;</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.ptable_footer}>
                    <div className={styles.ptable_action}>
                      <a href="#0">Acquista</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* <PricingTable highlightColor='#6163FF'>
              <PricingSlot onClick={() => choice('FREE')} buttonText='Prova gratuitamente' title='GRATUITO' priceText='€ 0 / anno'>
                <PricingDetail> fino a <b>10</b> CIG </PricingDetail>
                <PricingDetail> &nbsp; </PricingDetail>
                <PricingDetail> &nbsp; </PricingDetail>
              </PricingSlot>
              <PricingSlot onClick={() => choice('BASIC')} buttonText='Acquista' title='BASE' priceText='€ 199 / anno'>
                <PricingDetail> fino a <b>500</b> CIG </PricingDetail>
                <PricingDetail> <b>Supporto email</b> </PricingDetail>
                <PricingDetail> &nbsp; </PricingDetail>
              </PricingSlot>
              <PricingSlot highlighted onClick={() => choice('STANDARD')} buttonText='Acquista' title='STANDARD' priceText='€ 399 / anno'>
                <PricingDetail> fino a <b>1000</b> CIG </PricingDetail>
                <PricingDetail> <b>Supporto email</b> </PricingDetail>
                <PricingDetail> &nbsp; </PricingDetail>
              </PricingSlot>
              <PricingSlot onClick={() => choice('NOLIMIT')} buttonText='Acquista' title='ILLIMITATO' priceText='€ 799 / anno'>
                <PricingDetail> CIG <b>illimitate</b> </PricingDetail>
                <PricingDetail> <b>Supporto email</b> </PricingDetail>
                <PricingDetail> <b>Supporto telefonico</b> </PricingDetail>
              </PricingSlot>
            </PricingTable> */}

          </div>
        </div>
      </div>
    </section>
  );
}

Prices.propTypes = propTypes;
Prices.defaultProps = defaultProps;

export default Prices;