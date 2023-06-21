import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import { Link, useParams } from "react-router-dom";
import icon from "../Resimler/Süperlig_logo.png"
import axios from "axios";
import { useNavigate } from "react-router-dom"


const Düzenle = () => {
    const navigate = useNavigate();
    const data = { name: "", city: "", stadium: "", coach: "", established: "", colors: "", rank: "" };
    const [düzenle, setDüzenle] = useState(data)
    const [takim,setTakim]=useState(null);
    let { id } = useParams();

   

    const düzenlechange = (e) => {
        setDüzenle({ ...düzenle, [e.target.name]: e.target.value })
        console.log(setDüzenle)
    }

     useEffect(() => {
        const api_link = `https://cryptic-gorge-72989.herokuapp.com/teams/${id}`
        axios.get(api_link)
            .then(response => {
                setTakim(response.data)
            })

    }, [id])

    if (takim === null) {
        return (
            <div className="aci">
                <p>loao</p>
            </div>
        )
    }

    const DüzenleClick = (e) => {
        e.preventDefault();
        axios.put(`https://cryptic-gorge-72989.herokuapp.com/teams/${id}`, düzenle)
            .then(response => {
                console.log(response)
                console.log(response.data)
                alert("Takım Düzenlemesi Başarılı")
                navigate("/");
            }, [id]).catch(hata=>{
                alert("Düzenleme İçin Alanlar Doldurulmadı")
            })
    }
    return (
        <div>
            <Navbar />
            <div className="Profil-cercevesi">
                <div className="Profil-cerceve-ici">
                    <div className="orta">
                        <img src={icon} width="70" />
                    </div><br />
                    <div class="form-floating mb-3">
                        <input name="coach" value={düzenle.coach} onChange={düzenlechange} type="text" class="form-control" placeholder="name@example.com" />
                        <label for="floatingInput">	Takımın Başındaki Teknik Trektör:  {takim.coach} </label>
                    </div>
                    <div class="form-floating mb-3">
                        <input name="name" value={düzenle.name} type="text" onChange={düzenlechange} class="form-control" placeholder="name@example.com" />
                        <label for="floatingInput"> Takım:  {takim.name}</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input name="city" value={düzenle.city} type="text" onChange={düzenlechange} class="form-control" placeholder="name@example.com" />
                        <label for="floatingInput">Şehri: {takim.city}</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input name="stadium" value={düzenle.stadium} type="text" onChange={düzenlechange} class="form-control" placeholder="name@example.com" />
                        <label for="floatingInput">Stadyum: {takim.stadium}</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input name="established" value={düzenle.established} onChange={düzenlechange} type="number" class="form-control" placeholder="name@example.com" />
                        <label for="floatingInput">Kuruluş Tarihi: {takim.established}</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input name="colors" value={düzenle.colors}  type="text" onChange={düzenlechange} class="form-control" placeholder="name@example.com" />
                        <label for="floatingInput">Kendine Ait Renkleri: {takim.colors}</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input name="rank" value={düzenle.rank} type="number" onChange={düzenlechange} class="form-control" placeholder="name@example.com" />
                        <label for="floatingInput">Şu Anki Lig'Deki Durumu: {takim.rank}</label>
                    </div>
                    <Link>
                        <button style={{ marginLeft: 70 }} onClick={DüzenleClick} className="btn btn-outline-primary"><i class="fa-solid fa-rotate-left fa-fade"></i> Düzenlemi işlemini Tamamla</button>
                    </Link>
                    
                </div>
            </div>
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
                <button style={{ width: 40, height: 40, margin: 5 }} className="ı2 a2 btn btn-light"><i class="fa-brands fa-instagram"></i></button>
                <button style={{ width: 40, height: 40, margin: 5 }} className="y4 a4 btn btn-light"><i class="fa-brands fa-youtube"></i></button>
            </div>
        </div>
    )
}

export default Düzenle;