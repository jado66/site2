import React from 'react';
import PropTypes from 'prop-types';

const EnvSpecificComponent = ({ env, children }) => {
  const currentEnv = process.env.NEXT_PUBLIC_ENV;

  if (currentEnv === env) {
    return <>{children}</>;
  }

  return null;
};

EnvSpecificComponent.propTypes = {
  env: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function includeInEnv(env, item){
    if (process.env.NEXT_PUBLIC_ENV === env){
        return item
    }
    return null
}



export {EnvSpecificComponent, includeInEnv};


