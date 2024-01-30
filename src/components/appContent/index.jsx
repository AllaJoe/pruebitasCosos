import Banner from "../banner"
import Card from "../card"
import './style.css'

const AppContent = () => {
    return(
        <div className="appContent_Container">

          <div className="titleContainer">
            <Banner 
            tituloBanner= "Esto es un titulo"
            textBanner= "Google LLC es una empresa de tecnología multinacional estadounidense que se centra en inteligencia artificial, publicidad en línea, tecnología de motores de búsqueda"
            />
          </div>

          <div className="cardsContainer">
            <Card 
            img= "https://i.ibb.co/Yy8wC4q/4280485f-b3a7-4558-a198-d8d577dcd472.png"
            h2Text= "Gafas de Sol"
            pText= "Contamos con más de 30 años vendiendo anteojos de marcas nacionales e importadas"
            />
            <Card 
            img= "https://i.ibb.co/6nyK489/banana.jpg"
            h2Text= "Bananas"
            pText= "Favorece el buen funcionamiento de la memoria. Combate la anemia"
            />
            <Card 
            img= "https://i.ibb.co/P9nj8B1/image-9.png"
            h2Text= "Muffins"
            pText= "Es un producto de repostería elaborado con pan dulce y otros ingredientes"
            />
          </div>
          
        </div>
    )
}

export default AppContent