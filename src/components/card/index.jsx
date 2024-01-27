import './styles.css';


const Card = () => {
    return(
        <div className="cardClass">
            <div className='imgClass'>
                <img src="https://i.ibb.co/Yy8wC4q/4280485f-b3a7-4558-a198-d8d577dcd472.png" alt="" />
            </div>
            
            <div className='cardItems'>
            <h3>Titulo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ex, provident, quidem aut deleniti debitis quasi perferendis,
            voluptas voluptatem qui similique maxime! Consectetur recusandae 
            laboriosam quasi sit architecto nulla, mollitia a.</p>
            <div className='svgClass'>
                <div>
                   <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M54.375 0H5.625C2.4375 0 0 2.4375 0 5.625V24.375C0 27.5625 2.4375 30 5.625 30H54.375C57.5625 30 60 27.5625 60 24.375V5.625C60 2.4375 57.5625 0 54.375 0ZM35.25 17.625C36
                    18.375 36 19.5 35.25 20.25C34.875 20.625 34.3125 20.8125 33.9375 20.8125C33.5625 20.8125 33 20.625 32.625 20.25L30 17.625L27.375 20.25C27 20.625 26.4375 20.8125 26.0625 20.8125C25.6875 
                    20.8125 25.125 20.625 24.75 20.25C24 19.5 24 18.375 24.75 17.625L27.375 15L24.75 12.375C24 11.625 24 10.5 24.75 9.75C25.5 9 26.625 9 27.375 9.75L30 12.375L32.625 9.75C33.375 9 34.5 9 
                    35.25 9.75C36 10.5 36 11.625 35.25 12.375L32.625 15L35.25 17.625Z" fill="black"/>
                   </svg>
                </div>
                <div>
                    <svg width="60" height="31" viewBox="0 0 60 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.998 0H35.998V6.33333H45.998V0Z" fill="black"/>
                    <path d="M49.999 6.33333H59.999V3.8C59.999 1.64667 57.399 0 53.999 0H49.999V6.33333Z" fill="black"/>
                    <path d="M31.999 0H21.999V6.33333H31.999V0Z" fill="black"/>
                    <path d="M20 8.86667C18.8 8.86667 18 8.36 18 7.6V0H6C2.6 0 0 1.64667 0 3.8V26.6C0 28.7533 2.6 30.4 6 30.4H54C57.4 
                    30.4 60 28.7533 60 26.6V8.86667H20ZM12 6.33333H6C4.8 6.33333 4 5.82667 4 5.06667C4 4.30667 4.8 3.8 6 3.8H12C13.2 3.8 
                    14 4.30667 14 5.06667C14 5.82667 13.2 6.33333 12 6.33333Z" fill="black"/>
                    </svg>
                </div>
                <div>
                    <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M53.5714 0H6.42857C2.78571 0 0 1.625 0 3.75V26.25C0 28.375 2.78571 30 6.42857 30H53.5714C57.2143 
                    30 60 28.375 60 26.25V3.75C60 1.625 57.2143 0 53.5714 0ZM23.5714 20V15H38.5714V20H23.5714ZM38.5714 
                    22.5V27.5H23.5714V22.5H38.5714ZM38.5714 7.5V12.5H23.5714V7.5H38.5714ZM55.7143 7.5V12.5H42.8571V7.5H55.7143ZM19.2857 
                    12.5H4.28571V7.5H19.2857V12.5ZM4.28571 15H19.2857V20H4.28571V15ZM42.8571 15H55.7143V20H42.8571V15ZM4.28571 26.25V22.5H19.2857V27.5H6.42857C5.14286 
                    27.5 4.28571 27 4.28571 26.25ZM53.5714 27.5H42.8571V22.5H55.7143V26.25C55.7143 27 54.8571 27.5 53.5714 27.5Z" fill="black"/>
                    </svg>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Card;