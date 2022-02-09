import React from 'react';
import classNames from 'classnames';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
//import Image from '../elements/Image';

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

  const choice = (c) => {
    console.log("You choose", c);
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="left-content" />
          <div className={tilesClasses}>

            <PricingTable highlightColor='#6163FF'>
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
            </PricingTable>

          </div>
        </div>
      </div>
    </section>
  );
/*
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="left-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom feature-prices-tiles-item" style={{background:"darkgreen"}}>
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-0">
                    Prova solo per un anno
                  </h4>
                  <br />
                  <h1 className="mt-0">
                    € 590,00
                  </h1>
                  <p className="mt-0 mb-0">
                    Compresa assistenza
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    2 anni
                  </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    3 anni
                  </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    5 anni (o più)
                  </h4>
                  <p className="m-0 text-sm">
                    Abbonati per 5 o più anni, ad un prezzo davvero irrisorio.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
  */
}

Prices.propTypes = propTypes;
Prices.defaultProps = defaultProps;

export default Prices;