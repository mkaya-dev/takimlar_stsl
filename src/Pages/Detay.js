import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import "./All.css"
import Navbar from "../Component/Navbar";
import icon from "../Resimler/superligg.jpg"
import { useNavigate } from "react-router-dom"

const Detay = () => {
    let { id } = useParams();
    const [takim, SetTakımlar] = useState(null)
    const navigate = useNavigate();


    useEffect(() => {
        const api_link = `https://cryptic-gorge-72989.herokuapp.com/teams/${id}`
        axios.get(api_link)
            .then(response => {
                SetTakımlar(response.data)
            })

    }, [id])


    if (takim === null) {
        return (
            <div className="aci">
                <h1><HashLoader color="red" /></h1>
            </div>
        )
    }

    const handleClick = (e) => {
        e.preventDefault();
        axios.delete(`https://cryptic-gorge-72989.herokuapp.com/teams/${id}`)
            .then(response => {
                console.log(response)
                console.log(response.data)
                navigate("/");
                alert("Başarılı Takım Silme")
            }, [id])
    }


    return (
        <div>
            <Navbar /><br />
            <h3 style={{ textAlign: "center", color: "white" }}>{takim.name} Takımı'nın Özelikleri</h3>
            <table style={{ color: "white" }} class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td style={{ color: "white" }}>Takımın Başındaki Teknik Trektör</td>
                        <td style={{ color: "white" }}>{takim.coach}</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td style={{ color: "white" }}>Takım</td>
                        <td style={{ color: "white" }}>{takim.name}</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td style={{ color: "white" }}>Şehri</td>
                        <td style={{ color: "white" }}>{takim.city}</td>
                    </tr>
                    <tr>
                        <th scope="row">    </th>
                        <td style={{ color: "white" }}>Stadyum</td>
                        <td style={{ color: "white" }}>{takim.stadium}</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td style={{ color: "white" }}>Kuruluş Tarihi</td>
                        <td style={{ color: "white" }}>{takim.established}</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td style={{ color: "white" }}>Kendine Ait Renkleri</td>
                        <td style={{ color: "white" }}>{takim.colors}</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td style={{ color: "white" }}>Şu Anki Lig'Deki Durumu</td>
                        <td style={{ color: "white" }}>{takim.rank}</td>
                    </tr>

                </tbody>
            </table><br />
            <Link to={"/"}><button style={{ marginLeft: 700 }} className="btn btn-outline-light"><i class="fa-solid fa-arrow-left fa-beat-fade fa-2xs"></i></button></Link>
            <Link to={`/${takim.id}/Oyuncular`}>
                <button style={{ margin: 5 }} className="btn btn-outline-light"> <i class="fa-solid fa-user-tie fa-fade"></i> Oyuncu Bölümüne Gitmek İstiyorsanız</button>
            </Link>

            <button style={{ margin: 5 }} onClick={handleClick} className="btn btn-outline-danger"><i class="fa-solid fa-shirt fa-beat-fade"></i> Sil <i class="fa-solid fa-minus fa-fade"></i></button>
           <Link to={`/${takim.id}/Düzenle`}>
           <button style={{ margin: 5 }} className="btn btn-outline-primary"><i class="fa-solid fa-rotate-left fa-fade"></i> Düzenleme </button>
           </Link> 

        
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

export default Detay