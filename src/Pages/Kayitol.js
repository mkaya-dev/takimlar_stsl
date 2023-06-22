import React, { useState } from "react";
import "./All.css"
import icon from "../Resimler/Superlig_logo.png"
import { Link } from "react-router-dom";
import axios from "axios";

const Kayitol = () => {

    const data = { name: "", email: "", password: "" };
    const [kayit, setKayitol] = useState(data)

    const handleData = (e) => {
        setKayitol({ ...kayit, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://cryptic-gorge-72989.herokuapp.com/users", kayit)
            .then(response => {
                console.log(response)
                alert("kayıt olundu")
            })
            
    }
    return (
        <div>
            <div className="Profil-cercevesi">
                <div className="Profil-cerceve-ici">
                    <Link to={"/Profil"}><p>Geri</p></Link>
                    <div className="orta">
                        <img src={icon} width="70" />
                    </div><br />
                    <div class="form-floating mb-3">
                        <input name="name" value={kayit.name} onChange={handleData} type="text" class="form-control" placeholder="name@example.com" />
                        <label for="floatingInput"><i class="fa-solid fa-user fa-fade"></i> Ad Soyad </label>
                    </div>
                    <div class="form-floating mb-3">
                        <input name="email" value={kayit.email} onChange={handleData} type="email" class="form-control" placeholder="name@example.com" />
                        <label for="floatingInput"><i class="fa-solid fa-envelope fa-fade"></i> E-mail</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input name="password" value={kayit.password} onChange={handleData} type="password" class="form-control" placeholder="name@example.com" />
                        <label for="floatingInput"><i class="fa-solid fa-lock fa-fade"></i> Kullanıcı Şifre</label>
                    </div>

                    <Link to={"/"}><p><button onClick={handleSubmit} className="button-genisligi btn btn-light"><i class="fa-solid fa-user-plus fa-fade"></i> Kayıt Ol</button></p></Link>
                </div>
            </div>
        </div>
    )
}

export default Kayitol;