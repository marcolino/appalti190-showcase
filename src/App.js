import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Prices from './views/Prices';
import Contacts from './views/Contacts';
import AboutUs from './views/AboutUs';
import Faq from './views/Faq';
import Support from './views/Support';
import FreeSuccess from './views/FreeSuccess';
import PaymentSuccess from './views/PaymentSuccess';
import PaymentCancel from './views/PaymentCancel';

// initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/prices" component={Prices} layout={LayoutDefault} />
          <AppRoute exact path="/contacts" component={Contacts} layout={LayoutDefault} />
          <AppRoute exact path="/aboutus" component={AboutUs} layout={LayoutDefault} />
          <AppRoute exact path="/faq" component={Faq} layout={LayoutDefault} />
          <AppRoute exact path="/support" component={Support} layout={LayoutDefault} />
          <AppRoute exact path="/free-success" component={FreeSuccess} layout={LayoutDefault} />
          <AppRoute exact path="/payment-success" component={PaymentSuccess} layout={LayoutDefault} />
          <AppRoute exact path="/payment-cancel" component={PaymentCancel} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;