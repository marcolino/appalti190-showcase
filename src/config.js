module.exports = {
  heroVideoUrl: `${process.env.NODE_ENV === "production" ? // the hero video url
    "https://appalti190-showcase.herokuapp.com" :
    "http://localhost:3000"}/videos/appalti190-crop.mp4`
};
 