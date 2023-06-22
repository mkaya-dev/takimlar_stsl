import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Component/Navbar";
import HashLoader from "react-spinners/HashLoader";
import icon from "../Resimler/Superlig_logo.png"
import iconn from "../Resimler/superligg.jpg"
import { useNavigate } from "react-router-dom"

const OyuncuDetay = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const [oyuncu, setOyuncu] = useState(null)

    useEffect(() => {
        const api_link = `https://cryptic-gorge-72989.herokuapp.com/players/${id}`
        axios.get(api_link)
            .then(response => {
                setOyuncu(response.data)
            })
    }, [id])


    const oyuncuSilmeButton = (e) => {
        e.preventDefault();
        axios.delete(`https://cryptic-gorge-72989.herokuapp.com/players/${id}`)
            .then(response => {
                console.log(response)
                console.log(response.data)
                navigate("/");
            }, [id])
    }

    if (oyuncu === null) {
        return (
            <div className="aci">
                <h1><HashLoader color="red" /></h1>
            </div>
        )
    }
    return (
        <div>
            <Navbar />
            <div>
                <div className="Profil-cercevesi">
                    <div className="Profil-cerceve-ici">
                        <div className="orta">
                            <img src={icon} width={50} />
                        </div><br />
                        <h4 style={{ textAlign: "center", fontFamily: "-moz-initial" }}>Oyuncu Bilgisi</h4><br />
                        <hr />
                        <h5 style={{ textAlign: "center", fontFamily: "-moz-initial" }}>İsmi: {oyuncu.name}<br /></h5>
                        <hr />
                        <h5 style={{ textAlign: "center", fontFamily: "-moz-initial" }}>Oynadıgı Mevki: {oyuncu.position}<br /></h5>
                        <hr />
                        <h5 style={{ textAlign: "center", fontFamily: "-moz-initial" }}>Yaşı: {oyuncu.age}<br /></h5>
                        <hr />
                        <h5 style={{ textAlign: "center", fontFamily: "-moz-initial" }}>Forma Numarası: {oyuncu.number}<br /></h5>
                        <hr />
                        <h5 style={{ textAlign: "center", fontFamily: "-moz-initial" }}>Oynadıgı Takım: {oyuncu.team.name}</h5>
                        <hr />
                    </div>
                    <Link to={`/${oyuncu.team.id}/Oyuncular`}>
                        <button style={{ margin: 5 }} className="btn btn-outline-dark"><i class="fa-solid fa-arrow-left fa-beat-fade fa-2xs"></i></button>
                    </Link>
                    <button style={{ margin: 5 }} onClick={oyuncuSilmeButton} className="btn btn-outline-danger"> <i class="fa-solid fa-user-tie fa-fade"></i> Sil <i class="fa-solid fa-minus fa-fade"></i></button>
                   <Link to={`/${oyuncu.id}/OyuncuDuzenle`}>
                   <button style={{ margin: 5 }}  className="btn btn-outline-primary"><i class="fa-solid fa-rotate-left fa-fade"></i> Düzenleme </button>
                   </Link>

                   


                </div>

                
                <div className="cubuk">
                    <div className="kutuu">
                        <p><img src={iconn} width="50" /><font color="white" className=""> Copyright 2023</font>  <font color="white" className="">I</font> <font color="white" className="" >Tüm Hakları Saklıdır.</font></p>
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
        </div>
    )
}

export default OyuncuDetay;