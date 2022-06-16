import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

import UploadLayout from '~/components/Layout/UploadLayout/UploadLayout';

const publicRouter = [
    // router không cần đăng nhập vẫn vào được
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: null },
    { path: '/upload-header', component: Upload, layout: UploadLayout },
];
const privateRouter = [
    // router phải đăng nhập mới vào được
];

export { publicRouter, privateRouter };
