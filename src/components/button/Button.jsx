import styles from './button.module.css';

function Button({ children, alt, disabled, ...props }) {
    return (
        <button
            className={alt ? styles.alt_btn : styles.btn}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
