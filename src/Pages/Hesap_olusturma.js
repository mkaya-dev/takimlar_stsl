import React from "react";
import { Link } from "react-router-dom";
import icon from "../Resimler/Superlig_logo.png"
import "./All.css"


const Hesap_olusturma = () => {
    return (
        <div>
            <div className="Profil-cercevesi">
                <div className="Profil-cerceve-ici">
                    <div className="orta">
                        <img src={icon} width="70" />
                    </div><br />
                    <p style={{ textAlign: "center", fontSize: 14 }}>Zaten bir hasabınız var mı? <Link to={"/Profil"}>Giriş Yap</Link></p>
                    <div className="orta">
                        <p><button className="button-genisligi b1 btn btn-light"><i class="fa-brands fa-facebook"></i> Facebook İle Devam Ediniz</button></p>
                        <p><button className="button-genisligi b2 btn btn-light"><i class="fa-brands fa-google"></i> Google İle Devam Ediniz</button></p>
                        <p><button className="button-genisligi b3 btn btn-light"><i class="fa-solid fa-envelope"></i> E-posta İle Devam Ediniz</button></p>
                        <p><button className="button-genisligi b4 btn btn-light"><i class="fa-solid fa-phone"></i> Telefon Numarası İle Devam Ediniz</button></p>
                        <p><button className="button-genisligi btn btn-light">Devam</button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hesap_olusturma;