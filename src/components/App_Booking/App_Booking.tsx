import cl from './styles.module.scss'
import background from '../assets/app_booking/background.png'
import phone from '../assets/app_booking/phone.png'

export const App_Booking = () => {
    return (
        <>
            <div className={cl.App_Booking_container}>
                <img className={cl.App_Booking_img} src={background} />
                <img className={cl.App_Booking_Phone} src={phone} />
                <p className={cl.App_Booking_specialoffer}>Get 5% off your 1st<br />
                    app booking</p>
                <p className={cl.App_Booking_info}>Booking's better on the app. Use promo code<br />
                    "TourBooking" to save!</p>
                <p className={cl.App_Booking_magic_link}>Get a magic link sent to your email</p>
                <input className={cl.App_Booking_input} placeholder='Email'/>
                <button className={cl.App_Booking_Send}>Send</button>
            </div>
        </>
    )
}