import styles from './Button.module.css';

/**
 * Shared button used across the app.
 * variant: 'primary' | 'secondary' | 'ghost'
 * size: 'md' | 'sm'
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  iconPosition = 'right',
  as = 'button',
  className = '',
  ...rest
}) => {
  const Component = as;
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} {...rest}>
      {icon && iconPosition === 'left' && (
        <span className={styles.icon}>{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className={styles.icon}>{icon}</span>
      )}
    </Component>
  );
};

export default Button;
