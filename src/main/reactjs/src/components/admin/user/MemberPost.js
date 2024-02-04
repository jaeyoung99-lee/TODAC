import React from 'react';
import { Link } from 'react-router-dom';

const MemberPost = () => {
    return (
        <div className='mx_30'>
            <div className='mt-1 fs_14'>
                <Link to="/admin" className='col_blue2'>관리자 홈 {'>'} </Link>
                <Link to="/admin/MemberManage" className='col_blue2'>회원 관리 {'>'} </Link>
                <Link to="/admin/MemberManage/MemberProfile" className='col_blue2'>회원 정보 {'>'}</Link>
                <Link to="/admin/MemberManage/MemberProfile/MemberPost" className='col_blue2'>회원 게시글</Link>
            </div>
            <div className='fs_25 fw_700'>회원 게시글</div>

        </div>
    );
};

export default MemberPost;