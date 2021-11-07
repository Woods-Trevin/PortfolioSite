
import './splash.css';

export default function Splash() {
    return (
        <div>
            <img className="splash_backgroundOne" src={process.env.PUBLIC_URL + '/images/Online.png'} alt='alt' />
            {/* <img src="https://cdn.wallpapersafari.com/37/76/fPb3cK.jpg" alt='alt' /> */}
            <p className='splash_label' >The <span className='splash_word'>start</span> of something <span className='splash_word'>great!</span></p>
            <img src={process.env.PUBLIC_URL + '/images/vin.jpeg'} alt="" className='splash_owner_img' />
            <p className='splash_aboutme_label'>{'<'} Trevin Woods {'|'} Software Engineer {'>'}</p>
            <p className='splash_resume_label'>{'<'} Resume {'>'}</p>
        </div>
    );
};