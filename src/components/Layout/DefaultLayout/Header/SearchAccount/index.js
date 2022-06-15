import classNames from 'classnames/bind';
import style from './SearchAccount.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);
function SearchAccounts() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg"
                alt="Ảnh trống"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyễn Văn Thắng</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck}></FontAwesomeIcon>
                </p>
                <span className={cx('username')}>thang.ubuntu.vn</span>
            </div>
        </div>
    );
}

export default SearchAccounts;
