import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col">
                    <Link to="/"><img src="https://i.pinimg.com/originals/0c/51/f2/0c51f2ddc1a40c4d204c1dcf5af32e77.png" alt="The Killers" width={180} /></Link>
                </div>
                <div className="col">
                    <ul class="nav d-flex justify-content-end align-items-center">
                        <li class="nav-item">
                            <Link class="nav-link text-light" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-light" to="/miembros">Miembros</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-light" to="/discografia">Discografía</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;