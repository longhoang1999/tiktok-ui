import style from './Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
const cx = classNames.bind(style);

function SingleMenuItem({ data = {} }) {
    return (
        <Button id={cx('btn-more-account')} to={data.to} icon={data.icon} leftIcon>
            <span>{data.title}</span>
        </Button>
    );
}

export default SingleMenuItem;
