export const Card = ({
                         children,
                         className,
                         ariaLabel = '',
                         ...props
                     }) => (
    <div
        className={ `card ${className ? className : ''}` }
        aria-label={ ariaLabel }
        {...props}
    >
        {children}
    </div>
);
