import classNames from 'classnames/bind';
import style from './Button.module.scss';

import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function Button({
    children,
    to,
    href,
    onClick,
    primary = false,
    outline = false,
    text = false,
    disabled = false,
    rounded = false,
    size = 'medium',
    classnames,
    icon = false,
    leftIcon = false,
    rightIcon = false,
    ...passProps
}) {
    // tag component: Button, a, Link
    // type component: primary, outline, text, rounded (đi kèm: disabled)
    // size component: medium, medium, large
    // icon component: icon, (đi kèm: leftIcon, rightIcon)
    let Comp = 'Button';
    const _props = {
        onClick,
        ...passProps,
    };
    // tag component
    if (to) {
        _props.to = to;
        Comp = Link;
    } else if (href) {
        _props.href = href;
        Comp = 'a';
    }
    // xóa bỏ các sự kiện khi có thuộc tính disabled
    if (disabled) {
        // delete _props.onClick;
        Object.keys(_props).forEach((key) => {
            if (key.startsWith('on') && typeof _props[key] === 'function') {
                delete _props[key];
            }
        });
    }
    // type and size
    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        disabled,
        rounded,
        [classnames]: classnames,
        [size]: size,
    });

    return (
        <Comp className={classes} {..._props}>
            {icon && leftIcon ? <span className={cx('left-icon')}>{icon}</span> : ''}
            <span>{children}</span>
            {icon && rightIcon ? <span className={cx('right-icon')}>{icon}</span> : ''}
        </Comp>
    );
}

export default Button;
