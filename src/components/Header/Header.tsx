import cl from './style.module.scss'
import logo from '../assets/logo.svg'   
export const Header = () => {
    return (
        <>
        <div className={cl.container}>
            <header className={cl.header}>
                <img src={logo} />
                <section className={cl.header__contain}>
                    <nav className={cl.header__navigation}>
                        <a href="" className={cl.header__navigation_destinations}>
                            Destinations
                        </a>
                        <a href="" className={cl.header__navigation_activities}>
                            Activities
                        </a>
                        <a href="" className={cl.header__navigation_usd}>
                            USD
                        </a>
                        <a href="./registration/index.html" className={cl.header__navigation_sign}>
                            Sign up
                        </a>
                        <a href="./login/index.html" className={cl.header__navigation_active}>
                            Log in
                        </a>
                    </nav>
                </section>
            </header>
            </div>
        </>
    );
};

