import cl from './style.module.scss'
import image from '../assets/grab_up/Frame.png'


export const Grab = () => {
    return(
        <>
            <div className={cl.Grab__up_container}>
                <img className={cl.Grab_up_image} src={image}/>
                <p className={cl.Grab_up_text}>Grab up to <span className={cl.Grab_up_off}>35% off</span><br/>
                on your favorite<br/>
                Destination</p>
                <p className={cl.Grab_up_desc}>Limited time offer, don't miss the opportunity</p>
                <a href="" className={cl.Grab_up_Book}>Book Now</a>
            </div>
        </>
    )
}