import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./All.css"
import icon from "../Resimler/Superlig_logo.png"
import { Link } from "react-router-dom";
import axios from "axios";


const Profil = () => {

    const data = { email: "", password: "" };
    const navigate = useNavigate();
    const [profil, setProfil] = useState(data)

    const handleData = (e) => {
        setProfil({ ...profil, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://cryptic-gorge-72989.herokuapp.com/login", profil)
            .then(response => {
                      navigate("/");              
            }).catch(hata=>{
                alert("Hatalı veya Boş Bıraktınız")
            })
           
           
           
            
    }
    return  (
        <div>
            <div className="Profil-cercevesi">
                <div className="Profil-cerceve-ici">
                    <div className="orta">
                        <img src={icon} width="70" />
                    </div><br />
                    <p style={{ fontSize: 13 }}>İlk Defa Süperlig Analiz  ? <Link to={"/Profil/Hesap_olusturma"}>Hesapı Oluşturucam</Link> </p>
                    <p>İlk Kaydını <Link to={"/Kayitol"}>Oluştur</Link></p>
                    <div class="form-floating mb-3">
                        <input type="email" name="email" value={profil.email} onChange={handleData} class="form-control" id="floatingInput" placeholder="E-Mail" />
                        <label for="floatingInput">
                            <i class="fa-solid fa-user fa-bounce"></i> E-Mail
                        </label>
                    </div>
                    <div class="form-floating">
                        <input type="password" name="password" value={profil.password} onChange={handleData} class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">
                            <i class="fa-solid fa-lock fa-bounce"></i> Şifre
                        </label>
                    </div><br />
                    <p style={{ fontSize: 14 }}><input type="checkbox" placeholder="Şifre" /> Beni Her Zaman Hatırla</p>
                    <Link to={"/"} ><button   onClick={handleSubmit} className="button-genisligi btn btn-light"><i class="fa-solid fa-arrow-right-to-bracket"></i></button></Link>
                    <p style={{ textAlign: "center" }}>veya şununla giriş yapın:</p>
                    <div className="orta">
                        <button className="f1 a1 btn btn-light"><i class="fa-brands fa-facebook"></i></button>
                        <button className="ı2 a2 btn btn-light"><i class="fa-brands fa-instagram"></i></button>
                        <button className="t3 a3 btn btn-light"><i class="fa-brands fa-twitter"></i></button>
                    </div><br />
                    <p style={{ textAlign: "center", fontSize: 13 }}><Link to={"/Profil/Hesap_olusturma/kullaniciadi"}>Kullanıcı adınızı</Link> ya da <Link to={"/Profil/Hesap_olusturma/Kullaniciadi/Sifre"}>şifrenizi</Link> erişimi mi gerekiyor?</p>
                </div>
            </div><br />
            <p style={{ textAlign: "center", fontSize: 12 ,color:"white"}}>Telif Hakkı © 1959 - 2023 Süper Lig Operating Company, LLC. Tüm Hakları Saklıdır. Gizlilik Politikası</p>
        </div>
    )
}
export default Profil;



