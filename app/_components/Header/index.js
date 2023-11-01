"use client"
import './header.scss';
import logo from '../../../public/header_logo.png';
import Image from 'next/image'
import Link from 'next/link';
import { SignOutButton, SignInButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";


const Header = () => {

	console.log(useUser())
    const isSignedIn = useUser().isSignedIn
    console.log(isSignedIn)

    return (
        <div className="header">
            <Link href="/" >
                <Image
                    priority
                    alt='logo'
                    className='header__logo'
                    src={logo}
                    width='810'
                    height='684'
                />
            </Link>
        </div>
    );
};

export default Header;