import React, { useEffect, useState } from "react";
import icon from "../Resimler/Superlig_logo.png"
import "../Pages/All.css"
import axios from "axios";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [takım, SetTakımlar] = useState([])


    useEffect(() => {
        const api_link = "https://cryptic-gorge-72989.herokuapp.com/teams"
        axios.get(api_link)
            .then(response => {
                SetTakımlar(response.data)
            })
    }, [])

    return (
        <div>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">
                        <img src={icon} width="40" style={{marginTop:-10}} />
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="b nav-link dropdown-toggle" style={{ color: "white" }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Takımlar <i class="fa-solid fa-border-all fa-fade"></i>
                    </a>
                    <ul class="dropdown-menu">
                        {
                            takım.map(takım =>
                                <div>
                                    <li><a class="dropdown-item" href="#">
                                        <Link style={{ color: "black", textDecoration: "none" }} to={`/${takım.id}/Detay`}>
                                            {takım.name}
                                        </Link>
                                    </a></li>
                                </div>
                            )
                        }
                    </ul>
                </li>

                <li class="nav-item">
                    <a class="b1 nav-link" style={{ color: "white" }} href="/PuanDurumu">Puan Durumu <i class="fa-solid fa-list fa-fade"></i></a>
                </li>
                <li class="nav-item">
                    <a class="b2 nav-link" style={{ color: "white" }} href="/Haber">Haberler <i class="fa-regular fa-newspaper fa-fade"></i></a>
                </li>
                <li class="nav-item">
                    <a class="b4 nav-link" style={{ color: "white" }} href="/TakimEkle">
                        Takım Ekle <i class="fa-light fa-plus fa-fade"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="b6 nav-link" style={{ color: "white" }} href="/OyuncuOlusturma">
                        Oyuncu Ekle <i class="fa-light fa-plus fa-fade"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="b5 nav-link" style={{ color: "white" }} href="/TakimDetay">
                        Futbolcular <i class="fa-solid fa-user-tie fa-fade"></i>
                    </a>
                </li>
                <div class="nav-iteem dropdown">
                    <a class="b3 nav-link  dropdown-toggle" href="#" style={{ color: "white" }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-regular fa-user fa-bounce" style={{ color: "#4bff0a" }}></i>
                    </a>

                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/Profil">Giriş Yap</a></li>
                        <li><a class="dropdown-item" href="/Kayitol">Kayıt Ol</a></li>
                    </ul>
                </div>


            </ul>
        </div>
    )
}
export default Navbar;