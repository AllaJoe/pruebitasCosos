
import './style.css'

const Banner = ({tituloBanner, textBanner}) => {
    return(
        <div className="bannerContainer">
           <h3 className='h3Banner'>{tituloBanner}</h3>
           <p className='pBanner'>{textBanner}</p>
        </div>
    )
}

export default Banner;