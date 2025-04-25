import cl from './style.module.scss'
import ticket from '../assets/icons/ticket.svg'
import medal from '../assets/icons/medal.svg'
import diamond from '../assets/icons/diamond.svg'
import ballon from '../assets/icons/hot-air-balloon.svg'



export const About = () => {
    return (
        <>
            <div className={cl.About__Container}>
                <p className={cl.About__Tourz}>Why choose Tourz</p>
                <div className={cl.About__Icons_container}>

                    <div className={cl.About__ticket}>
                        <img className={cl.About__ticket__icons} src={ticket} />
                        <p className={cl.About__ticket_text}>Ultimate flexibility</p>
                        <p className={cl.About__ticket_desc}>You're in control, with free<br />
                            cancellation and payment options to
                            satisfy any plan or budget.</p>
                    </div>

                    <div className={cl.About__ballon}>
                        <img className={cl.About__ballon__icons} src={ballon} />
                        <p className={cl.About__ballon_text}>Memorable experiences</p>
                        <p className={cl.About__ballon_desc}>Browse and book tours and activities<br/>
                            so incredible, you'll want to tell your
                            friends.</p>
                    </div>

                    <div className={cl.About__diamond}>
                        <img className={cl.About__diamond__icons} src={diamond} />
                        <p className={cl.About__diamond_text}>Quality at our core</p>
                        <p className={cl.About__diamond_desc}>High-quality standards. Millions of<br/>
                        reviews. A tourz company.</p>
                    </div>

                    <div className={cl.About__medal}>
                        <img className={cl.About__medal__icons} src={medal} />
                        <p className={cl.About__medal_text}>Award-winning support</p>
                        <p className={cl.About__medal_desc}>New price? New plan? No problem.<br/>
                        We're here to help, 24/7.</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}