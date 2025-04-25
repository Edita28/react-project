import cl from './styles.module.scss'
import background from '../assets/footer/print.png'

export const Footer = () => {
    return (
        <>
            <div className={cl.Footer_container}>
                <img className={cl.Footer_background} src={background} />
                <div className={cl.Footer_info_container}>
                    <div className={cl.Footer_info_phone_number}>
                        <p className={cl.Footer_info_phone_text}>Speak to our expert at<span className={cl.Footer_info_phone_number_text}>1-800-453-6744</span></p>
                    </div>
                    <div className={cl.Footer_info_ft}>
                    <div className={cl.Footer_info_contact}>
                        <label className={cl.Footer_info_contact_text}>Contact</label>
                        <p className={cl.Footer_info_address}>328 Queensberry Street, North Melbourne VIC3051,<br/>
                        Australia.</p>
                        <p className={cl.Footer_info_email}>hi@viatours.com</p>
                    </div>
                    <div className={cl.Footer_info_Company}>
                        <label className={cl.Footer_info_company_text}>Company</label>
                        <a className={cl.Footer_info_company_About_us} href="">About us</a>
                        <a className={cl.Footer_info_company_Tourz_Reviews} href="">Tourz Reviews</a>
                        <a className={cl.Footer_info_company_Contact_Us} href="">Contact Us</a>
                        <a className={cl.Footer_info_company_Travel_Guides} href="">Travel Guides</a>
                        <a className={cl.Footer_info_company_Data_Policy}href="">Data Policy</a>
                        <a className={cl.Footer_info_company_Cookie_Policy}href="">Cookie Policy</a>
                        <a className={cl.Footer_info_company_Legal}href="">Legal</a>
                        <a className={cl.Footer_info_company_Sitemap}href="">Sitemap</a>
                    </div>
                    <div className={cl.Footer_info_Support}>
                        <label className={cl.Footer_info_Support_text}>Support</label>
                        <a className={cl.Footer_info_company_Get_in_Touch} href="">Get in Touch</a>
                        <a className={cl.Footer_info_company_Help_center} href="">Help Center</a>
                        <a className={cl.Footer_info_company_Live_chat} href="">Live chat</a>
                        <a className={cl.Footer_info_company_How_it_works} href="">How it works</a>
                    </div>
                    <div className={cl.Footer_info_Newsletter}>
                        <label className={cl.Footer_info_Newsletter_text}>Newsletter</label>
                        <p className={cl.Footer_info_subscribe}>Subscribe to the free newsletter and stay<br/>
                        up to date</p>
                        <div className={cl.Footer_info_subscribe_input_container}>
                        <input className={cl.Footer_info_subscribe_input} placeholder='Your email address'/>
                        <button className={cl.Footer_info_subscribe_send}>Send</button>
                        </div>
                        <label className={cl.Footer_info_mobile_apps}>Mobile Apps</label>
                        <a className={cl.Footer_info_ios_app}href=''>IOS App</a>
                        <a className={cl.Footer_info_android_app}href=''>Android App</a>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}