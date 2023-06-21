import React from "react";
import { Link } from "react-router-dom";
import icon from "../Resimler/Süperlig_logo.png"

const Sifre = () => {
    return (
        <div>
            <div className="Profil-cercevesi">
                <div className="Profil-cerceve-ici">
                    <Link to={"/Profil"}><p>Geri</p></Link>
                    <h4 style={{ textAlign: "center" }}>Şifreyi Sıfırla</h4>
                    <p style={{ textAlign: "center", fontSize: 14 }}>Kullanıcı Adı veya Müşteri Numarası <Link>Unuttum</Link></p>
                    <div className="orta">
                        <img src={icon} width="70" />
                    </div><br />
                    <p><input style={{ width: 400, height: 50 }} type="password" /></p>
                    <p><button className="button-genisligi btn btn-light">Devam</button></p>
                </div>
            </div>
        </div>
    )
}

export default Sifre;