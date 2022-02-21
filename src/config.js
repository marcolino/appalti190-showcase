module.exports = {
  heroVideoUrl: `${process.env.NODE_ENV === "production" ? // the hero video url
    "https://appalti190-showcase.herokuapp.com" :
    "http://localhost:3000"}/videos/appalti190-crop.mp4`
  ,
  checkoutSessionUrl: `${process.env.NODE_ENV === "production" ? // the checkout session url
    "https://appalti190.herokuapp.com" :
    "http://localhost:5000"}/create-checkout-session`
  ,
  checkoutSessionMode: `${process.env.NODE_ENV === "production" ? // the checkout session mode
    "https://appalti190.herokuapp.com" :
    "http://localhost:5000"}/checkout-session-mode`
  ,
};