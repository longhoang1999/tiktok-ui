import style from './Menu.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWapper } from '~/components/Popper';

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import SingleMenuItem from './SingleMenuItem';

const cx = classNames.bind(style);
function MenuItem({ children, items = [] }) {
    const renderItems = () => {
        return items.map((value, index) => <SingleMenuItem key={index} data={value} />);
    };
    return (
        <Tippy
            delay={[0, 400]}
            interactive={true}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('more-menu-item')} tabIndex="-1" {...attrs}>
                    <PopperWapper>{renderItems()}</PopperWapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default MenuItem;
