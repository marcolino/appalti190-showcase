import React from 'react';
import classNames from 'classnames';

import styles from './PricesSection.module.css';

import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
//import Image from '../elements/Image';
import config from '../../config';

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

  // const buy = async () => {
  //   fetch("http://localhost:5000/create-checkout-session", {
  //     method: "POST",
  //     //redirect: "follow",
  //     // headers: {
  //     //   "Accept": "application/json",
  //     //   "Content-Type": "application/json",
  //     // },
  //     // body: JSON.stringify({
  //     //   firstParam: "yourValue",
  //     //   secondParam: "yourOtherValue",
  //     // })
  //   }).then(response => {
  //     console.log("response:", JSON.stringify(response));
  //     //alert();
  //     let url = response.url;
  //     //url = url.replace(/#/g, "%23");
  //     alert(JSON.stringify(response));
  //     window.location.href = url;
  //   }).catch(function(err) {
  //     console.info("fetch error:", err);
  //   });
  // };

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
                      {/* <a href="#0">Prova gratuitamente</a> */}
                      <form action={"/free-success"} method="GET">
                        <a href="#0"><input type="submit" value={"Usa gratuitamente"} /></a>
                      </form>

                    </div>
                  </div>
                </div>
              </div>

              <div className={featuredClasses}>
                <div className={styles.ptable_single}>
                  <div className={styles.ptable_header}>
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
                      <form action={config.checkoutSessionUrl} method="POST">
                        <input type="hidden" name="product" value="standard" />
                        {config.checkoutSessionUrl}
                        {/*<a href="#0">*/}<input type="submit" value={"Acquista"} />{/*</a>*/}
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
                      <form action={config.checkoutSessionUrl} method="POST">
                        <input type="hidden" name="product" value="unlimited" />
                        <a href="#0"><input type="submit" value={"Acquista"} /></a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

Prices.propTypes = propTypes;
Prices.defaultProps = defaultProps;

export default Prices;
