import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  closeHidden: PropTypes.bool,
  message: PropTypes.string,
  video: PropTypes.string,
  videoTag: PropTypes.oneOf(['iframe', 'video']),
  videoWidth: PropTypes.number,
  videoHeight: PropTypes.number,
  videoAutoPlay: PropTypes.bool,
  videoType: PropTypes.string,
  videoControls: PropTypes.bool,
}

const defaultProps = {
  children: null,
  show: false,
  closeHidden: false,
  message: null,
  video: '',
  videoTag: 'iframe',
  videoWidth: 1920,
  videoHeight: 1080,
  videoAutoPlay: true,
  videoType: "video/mp4",
  videoControls: true,
}

const Modal = ({
  className,
  children,
  handleClose,
  show,
  closeHidden,
  message,
  video,
  videoTag,
  videoWidth,
  videoHeight,
  videoAutoPlay,
  videoType,
  videoControls,
  ...props
}) => {

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', stopProgagation);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', stopProgagation);
    };    
  });

  useEffect(() => {
    handleBodyClass();
  }, [props.show]); 
  
  const handleBodyClass = () => {
    if (document.querySelectorAll('.modal.is-active').length) {
      document.body.classList.add('modal-is-active');
    } else {
      document.body.classList.remove('modal-is-active');
    }
  }

  const keyPress = (e) => {
    e.keyCode === 27 && handleClose(e);
  }

  const stopProgagation = (e) => {
    e.stopPropagation();
  }

  const classes = classNames(
    'modal',
    show && 'is-active',
    video && 'modal-video',
    className
  );

  return (
    <>
      {show &&
        <div
          {...props}
          className={classes}
          onClick={handleClose}
        >
          <div className="modal-inner" onClick={stopProgagation}>
            {message &&
              <>
                <p>{message}</p>
                <button name="ok" variant="primary">Ok</button>
              </>
            }
            {video ?
              <div className="responsive-video">
                {videoTag === 'iframe' ?
                  <iframe
                    title="video"
                    src={video}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe> :
                  // <video
                  //   v-else
                  //   controls
                  //   src={video}
                  // ></video>
                  <video width={videoWidth} height={videoHeight} controls={videoControls} autoPlay={videoAutoPlay}>
                    <source src={video} type={videoType} />
                    Your browser does not support the video tag.
                  </video>
                }
              </div> :
              <>
                {!closeHidden &&
                  <button
                    className="modal-close"
                    aria-label="close"
                    onClick={handleClose}
                  ></button>
                }
                <div className="modal-content">
                  {children}
                </div>
              </>
            }
          </div>
        </div>
      }
    </>
  )
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;