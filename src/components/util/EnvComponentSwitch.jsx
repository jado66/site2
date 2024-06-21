import React from 'react';
import PropTypes from 'prop-types';

export const EnvComponentSwitch = ({ cases }) => {
    const currentEnv = process.env.NEXT_PUBLIC_ENV;
  
    if (cases[currentEnv]){
        return cases[currentEnv]
    }
    else return null
  };
  
  
export function envSwitch(cases) {
    const currentEnv = process.env.NEXT_PUBLIC_ENV;
  
    return cases[currentEnv] || null
  }

  EnvComponentSwitch.propTypes = {
  env: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
