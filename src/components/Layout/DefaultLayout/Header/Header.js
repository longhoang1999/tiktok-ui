import style from './Header.module.scss';
import classNames from 'classnames/bind';
// import component
import { Wrapper as PopperWapper } from '~/components/Popper';
import SearchAccounts from './SearchAccount/SearchAccount';
import Button from '~/components/Button/Button';
import MenuItem from '~/components/Popper/Menu/Menu';

// img from asset
import images from '~/assets/images';

// import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';

// import thư viện ngoài
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

// hook
import { useState, useEffect } from 'react';

const cx = classNames.bind(style);
function Header() {
    // hook state
    const [searchResule, serSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            serSearchResult([]);
        }, 0);
    });
    // menu item 3 chấm
    const MENU_ITEM = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            to: '',
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and Helps',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
            to: '',
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    interactive={true}
                    visible={searchResule.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <div className={cx('block-result-search')}>
                                    <SearchAccounts />
                                    <SearchAccounts />
                                    <SearchAccounts />
                                    <SearchAccounts />
                                    <SearchAccounts />
                                </div>
                            </PopperWapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Search account and video" spellCheck={false} />
                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button to="/upload" text>
                        Upload
                    </Button>
                    <Button
                        to="login"
                        primary
                        classnames={cx('custom')}
                        icon={<FontAwesomeIcon icon={faSignIn} />}
                        leftIcon
                    >
                        Log in
                    </Button>

                    <MenuItem items={MENU_ITEM}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </MenuItem>
                </div>
            </div>
        </header>
    );
}

export default Header;
