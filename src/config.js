const serverBaseUrl = `${process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging" ?
    "https://appalti190.herokuapp.com" :
    "http://localhost:5000"
}`;

const clientBaseUrl = `${process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging" ?
  "https://appalti190-showcase.herokuapp.com" :
  "http://localhost:3000"
}`;

module.exports = {
  serverBaseUrl,
  clientBaseUrl,
  heroVideoUrl: `${clientBaseUrl}/videos/appalti190-crop.mp4`,
  checkoutSessionUrl: `${serverBaseUrl}/create-checkout-session`,
  documentationeANACUrl: "https://www.anticorruzione.it/-/adempimenti-legge-190/2012-art.-1-comma-32-7",
};
