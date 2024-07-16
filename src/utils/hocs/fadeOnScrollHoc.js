import React, { useState } from 'react';
import { default as VisibilitySensor } from 'react-visibility-sensor';
import { Fade } from '@mui/material';

const fadeOnScrollHoc = (WrappedComponent) => {
    return (props) => {
      const [isVisible, setIsVisible] = useState(false);
  
      const onChangeVisibility = (visible) => {
        if (visible) {
          setIsVisible(true);
        }
      };
  
      return (
        <VisibilitySensor onChange={onChangeVisibility} partialVisibility>
          <Fade in={isVisible} timeout = {500}>
            <div>
              <WrappedComponent {...props} />
            </div>
          </Fade>
        </VisibilitySensor>
      );
    };
  };

  export default fadeOnScrollHoc;
