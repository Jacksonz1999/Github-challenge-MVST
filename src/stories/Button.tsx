import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional image to display alongside the label
   */
  image?: string;
}

/**
 * Primary Button for pagination in the MainContent component.
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  image,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor, color: "black" ,display:"flex",alignItems:"center",background:"none",border:"none" }}
      {...props}
    >
      {image && <img style ={{width:"20px",marginRight: "8px"}}src={image} alt={label} />}
      {label}
    </button>
  );
};
