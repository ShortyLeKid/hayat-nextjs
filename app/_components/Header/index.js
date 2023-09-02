"use client"
import './header.scss';
import logo from '../../../public/header_logo.png';
import Image from 'next/image'
import Link from 'next/link';


const Header = () => {

    return (
        <div className="header">
            <Link href="/" >
                <Image
                    priority
                    // width={50}
                    // height={50}
                    alt='logo'
                    className='header__logo'
                    src={logo}
                />
            </Link>
        </div>
    );
};

export default Header;