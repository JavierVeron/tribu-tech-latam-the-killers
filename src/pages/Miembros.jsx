import Title from "../elements/Title";

const Miembros = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <Title text={"Miembros Actuales"} />
                <div className="col-md-8">
                    <ul>
                        <li>Brandon Flowers: vocalista, piano, teclado, sintetizador (2001-presente), bajo eléctrico (2002-presente)</li>
                        <li>Dave Keuning: guitarra líder, piano, corista (2001-2017, 2020-presente, en hiatus de las giras entre 2017 y 2020 y desde 2022, en hiatus de las grabaciones entre 2017 y 2020)</li>
                        <li>Mark Stoermer: bajo eléctrico, guitarra rítmica, corista (2002-2020, 2022-presente, en hiatus de las giras desde 2016, en hiatus de las grabaciones entre entre 2020 y 2022)</li>
                        <li>Ronnie Vannucci Jr.: batería, percusión, sintetizador, corista (2002-presente)</li>
                    </ul>                    
                </div>
                <div className="col-md-4">
                    <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/P2R2XSJIMNAOFBN56ME6LCOOW4.png" alt="The Killers Banda" className="img-fluid" />
                </div>
            </div>
        </div>
    )
}

export default Miembros;