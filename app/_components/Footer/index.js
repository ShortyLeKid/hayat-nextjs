import './footer.scss';


const Footer = () => {


    return (
        <div className="footer">
            <div className='footer__socials'>
                <a target='blank' href="https://www.instagram.com/armlesskid/?hl=fr">
                    <i className="fa-brands fa-square-instagram"></i>
                </a>
                <a target='blank' href="https://open.spotify.com/intl-fr/artist/0MKCwZqyfnbu8i83V8ntiW?si=tLH5YEE3QceVE3edflPJWg">
                    <i className="fa-brands fa-spotify"></i>
                </a>
                <a target='blank' href="https://www.facebook.com/ArmlessKid">
                    <i className="fa-brands fa-square-facebook"></i>
                </a>
            </div>
            <span className='footer__copyright'>
                All rights reserved ©
            </span>
        </div>
    );
};

export default Footer;