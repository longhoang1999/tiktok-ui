import style from './Header.module.scss';
import classNames from 'classnames/bind';
// import component
import { Wrapper as PopperWapper } from '~/components/Popper';
import SearchAccounts from './SearchAccount';

// img from asset
import images from '~/assets/images';

// import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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
                <div className={cx('action')}>Action</div>
            </div>
        </header>
    );
}

export default Header;
