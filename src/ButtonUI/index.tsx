import React from 'react';
import { Button, ButtonProps } from 'antd';
import './index.scss';

interface ButtonUIProps extends ButtonProps {
  iconPlacement?: 'start' | 'end';
  children?: React.ReactNode;
}

const ButtonUI: React.FC<ButtonUIProps> = (props) => {
  const { children, iconPlacement = 'end', ...otherProps } = props;
  return (
    <Button iconPlacement={iconPlacement} {...otherProps}>
      {children}
    </Button>
  );
};

export default ButtonUI;
