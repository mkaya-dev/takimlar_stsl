import React, { useEffect, useState } from "react";
import "./All.css"
import Navbar from "../Component/Navbar";
import icon from "../Resimler/superligg.jpg"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

const OyuncuOlusturma = () => {
    const data = { name: "", age: "", number: "", position: "", team: "",team_id:"" };
    const [oyuncu, setOyuncu] = useState(data)
    const navigate = useNavigate();
    const [takim, setTakim] = useState([])

    useEffect(() => {
        const api_link = "https://cryptic-gorge-72989.herokuapp.com/teams"
        axios.get(api_link)
            .then(response => {
                setTakim(response.data)

            })
            
    }, [])

    const handleData = (e) => {
        setOyuncu({ ...oyuncu, [e.target.name]: e.target.value })
        console.log(setOyuncu)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://cryptic-gorge-72989.herokuapp.com/players", oyuncu)
            .then((respons) => {
                console.log(respons)
                navigate("/");
                alert("başarılı Oyuncu Kayıt")
            }).catch(hata=>{
                alert("Boş Alanlar Doldurulmadı")
            })
    }
    return (
        <div>
            <Navbar /><br />
            <div className="Takim_cerceve">
                <div className="Takim_cerceve_iç">
                    <div className="orta">
                        <img src={icon} width="50" /><br /><br />
                        <p>Oyuncu Ekle <i class="fa-light fa-plus fa-fade"></i></p>
                    </div>
                    <div className="orta">
                        <div class="form-floating mb-3">
                            <input name="name" value={oyuncu.name} onChange={handleData} type="text" class="form-control" placeholder="name@example.com" />
                            <label for="floatingInput">Futbolcunun İsmi</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input name="age" value={oyuncu.age} onChange={handleData} type="number" class="form-control" placeholder="name@example.com" />
                            <label for="floatingInput">Yaş</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input name="number" value={oyuncu.number} onChange={handleData} type="number" class="form-control" placeholder="name@example.com" />
                            <label for="floatingInput">Forma Numara</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input name="position" value={oyuncu.position} onChange={handleData} type="text" class="form-control" placeholder="name@example.com" />
                            <label for="floatingInput">Oynadıgı Podisyon</label>
                        </div>
                        <div class="form-floating mb-3">
                            <h6 style={{ textAlign: "left", fontSize: 12 }}>Takım Seç </h6>
                            <div class="dropdown"  name="team" value={oyuncu.team}    onChange={handleData}>
                                <select  name="team_id" value={oyuncu.team_id} onChange={handleData}    style={{ width: 440, height: 55 }} class="renk-border" >
                                    
                                    {
                                        takim.map(takim =>
                                            <option><a class="dropdown-item" >
                                                <Link>
                                                    {takim.id}.{takim.name}   
                                                </Link>
                                            </a></option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                       
                        <div class="container px-4 text-center">
                            <div class="row gx-5">
                                <div class="col">
                                    <div class="p-3"><button onClick={handleSubmit} style={{ height: 50, width: 140 }} className="btn btn-primary">Ekle <i class="fa-light fa-plus fa-fade"></i></button></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div><br />
            <div className="cubuk">
                <div className="kutuu">
                    <p><img src={icon} width="50" /><font color="white" className=""> Copyright 2023</font>  <font color="white" className="">I</font> <font color="white" className="" >Tüm Hakları Saklıdır.</font></p>
                    <hr />
                    <div className="yazı_kutu1 float-l">
                        <ul className="hover" style={{ textDecoration: "none" }}>
                            <h6 style={{ color: "white" }}>Kurumsal</h6>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>Doğuş Yayın Grubu</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>Kullanım Koşulları</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>Gizlilik Politikası</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>Çerez Politikası</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>Reklam</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>Künye</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>İletişim</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>İzleyici Temsilcisi</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>Bize Ulaşın</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>İnsan Kaynakları</li></Link>
                        </ul>

                    </div>

                    <div className="yazı_kutu1 float-l">
                        <ul className="hover" style={{ textDecoration: "none" }}>
                            <h6 style={{ color: "white" }}>DYG TELEVİZYONLAR</h6>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>NTV</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>STAR</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>EURO STAR</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>KRAL TV</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>KRAL POP TV</li></Link>

                        </ul>

                    </div>


                    <div className="yazı_kutu1 float-l">
                        <ul className="hover" style={{ textDecoration: "none" }}>
                            <h6 style={{ color: "white" }}>DYG RADYOLAR</h6>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>NTV RADYO</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>KRAL FM</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>KRAL POP</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>EKSEN</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>VOYAGE</li></Link>

                        </ul>

                    </div>

                    <div className="yazı_kutu1 float-l">
                        <ul className="hover" style={{ textDecoration: "none" }}>
                            <h6 style={{ color: "white" }}>DYG DİJİTAL</h6>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>ntv.com.tr</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>ntvspor.net</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>ntvhava.com</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>kralmuzik.com.tr</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>puhutv.com</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>startv.com.tr</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>secim.ntv.com.tr</li></Link>

                        </ul>
                    </div>
                </div>

            </div>
            <div className="kutu3">
                <button style={{ width: 40, height: 40, margin: 5 }} className="f1 a1 btn btn-light"><i class="fa-brands fa-facebook"></i></button>
                <button style={{ width: 40, height: 40, margin: 5 }} className="t3 a3 btn btn-light"><i class="fa-brands fa-twitter"></i></button>
                <button style={{ width: 40, height: 40, margin: 5 }} className="i2 a2 btn btn-light"><i class="fa-brands fa-instagram"></i></button>
                <button style={{ width: 40, height: 40, margin: 5 }} className="y4 a4 btn btn-light"><i class="fa-brands fa-youtube"></i></button>
            </div>
        </div>
    )
}
export default OyuncuOlusturma;