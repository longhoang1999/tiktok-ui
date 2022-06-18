import style from './Menu.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import SingleMenuItem from './SingleMenuItem';

const cx = classNames.bind(style);

function MoreLanguage({ children }) {
    return (
        <Tippy
            delay={[0, 400]}
            interactive={true}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('more-menu-item')} tabIndex="-1" {...attrs}>
                    <PopperWapper>
                        <h1>abc</h1>
                    </PopperWapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default MoreLanguage;
