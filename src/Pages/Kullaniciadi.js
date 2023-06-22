import React from "react";
import icon from "../Resimler/Superlig_logo.png"
import { Link } from "react-router-dom";



const Kullaniciadi = () => {
    return (
        <div>
            <div className="Profil-cercevesi">
                <div className="Profil-cerceve-ici">
                    <Link to={"/Profil"}><p>Geri</p></Link>
                    <div className="orta">
                        <img src={icon} width="70" />
                    </div><br />
                    <h5 style={{ textAlign: "center" }}>KullanıcıAdı</h5><br />
                    <p><input style={{ width: 400, height: 50 }} type="text" placeholder="E-posta" /></p>
                    <p><button className="button-genisligi btn btn-light">Devam</button></p>
                </div>
            </div>
        </div>
    )
}

export default Kullaniciadi;