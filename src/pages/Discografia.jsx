import Title from "../elements/Title";

const Discografia = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <Title text={"Discografía"} />
                <div className="col-md-8">
                    <ul>
                        <li>2004: Hot Fuss</li>
                        <li>2006: Sam's Town</li>
                        <li>2008: Day & Age</li>
                        <li>2012: Battle Born</li>
                        <li>2017: Wonderful Wonderful</li>
                        <li>2020: Imploding the Mirage</li>
                        <li>2021: Pressure Machine</li>
                    </ul>                    
                </div>
                <div className="col-md-4">
                    <img src="https://www.tonica.la/__export/1617999662066/sites/debate/img/2021/04/09/the-killers-brandon-flowers-nuevo-xlbum_1.jpg_463833556.jpg" alt="The Killers Banda" className="img-fluid" />
                </div>
            </div>
        </div>
    )
}

export default Discografia;