import Navbar from "../Component/Navbar";
import React, { useEffect, useState } from "react";
import Slayt from "../Component/Slayt";
import Canlı from "../Component/Canlı";
import icon from "../Resimler/superligg.jpg"
import tff from "../Resimler/super.jpg";
import ziraat from "../Resimler/tffe.jpg";
import { Link } from "react-router-dom";
import "./All.css";
import ReactPlayer from 'react-player/youtube';

const Home = () => {
    return (
        <div>
            <Navbar />
            <hr />
            <h3 style={{ textAlign: "center", fontSize: 18 }}>Canlı Puan Durumu</h3>
            <Canlı />
            <h5 style={{textAlign:"center",color:"white",fontFamily:"-moz-initial",fontSize:20}}>Süperlig Takımları 22/23</h5><br/>
            <Slayt /><br />
            <div className="video_yerlestirme">
                <ReactPlayer url='https://www.youtube.com/watch?v=RXJ1x2ZKDH4'/>
            </div><br/><br/>
            <div style={{ textAlign: "center" }} className="">
                <img src={icon} width="189" />
                <img src={tff} width="200" />
                <img src={ziraat} width="190" />
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
                <button style={{ width: 40, height: 40, margin: 5 }} className="ı2 a2 btn btn-light"><i class="fa-brands fa-instagram"></i></button>
                <button style={{ width: 40, height: 40, margin: 5 }} className="y4 a4 btn btn-light"><i class="fa-brands fa-youtube"></i></button>
            </div>
        </div>



    )
}

export default Home;