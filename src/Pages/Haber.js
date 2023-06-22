import React from "react";
import resim1 from "../Resimler/1.jpg"
import resim2 from "../Resimler/2.jpg"
import resim3 from "../Resimler/3.jpg"
import resim4 from "../Resimler/4.jpg"
import resim5 from "../Resimler/5.jpg"
import resim6 from "../Resimler/6.jpg"
import resim7 from "../Resimler/7.jpg"
import resim8 from "../Resimler/8.jpg"
import resim9 from "../Resimler/9.jpg"
import resim10 from "../Resimler/10.jpg"
import resim11 from "../Resimler/11.jpg"
import resim12 from "../Resimler/12.jpg"
import resim13 from "../Resimler/18.jpg"
import resim14 from "../Resimler/19.jpg"
import resim15 from "../Resimler/20.jpg"
import resim16 from "../Resimler/21.jpg"
import resim17 from "../Resimler/22.jpg"
import resim18 from "../Resimler/23.jpg"
import resim19 from "../Resimler/24.jpg"
import resim20 from "../Resimler/25.jpg"
import Navbar from "../Component/Navbar";
import Slider from "../Component/Slider";
import "./All.css"
import { Link } from "react-router-dom";
import icon from "../Resimler/superligg.jpg"
import Canli from "../Component/Canli";




const Haber = () => {
    return (
        <div>
            <Navbar /><br/>
            <Canli />
            <Slider /><br /><br />
            <div className="ortaa">


                <div class="card-group">
                    <div class="card">
                        <img src={resim1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Cristiano Ronaldo artık dayanamıyor; kararını verdi</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src={resim2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Bülent Korkmaz'dan Çaykur Rizespor için sözleşme açıklaması</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src={resim3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Mauro Icardi "Aşkın Olayım" söyledi</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src={resim4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Yıldızlarla yarışıyor: Aboubakar hedefini belirledi</h5>
                        </div>
                    </div>

                </div>

                <div class="card-group">
                    <div class="card">
                        <img src={resim5} height="195" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Arif Boşluk: Trabzonspor’u en iyi yerlerde temsil etmek istiyorum</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src={resim6} height="195" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Newcastle United 21 yıl sonra Şampiyonlar Ligi biletini kaptı</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src={resim7} style={{ height: 195 }} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Fenerbahçe'den TFF'ye Samet Akaydin tepkisi</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src={resim8} style={{ height: 195 }} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Milli takımların kaleci fabrikası Beşiktaş</h5>
                        </div>
                    </div>

                </div>

                <div class="card-group">
                    <div class="card">
                        <img src={resim9} style={{ height: 195 }} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Kupada Fenerbahçe - Sivasspor maçının hakemi belli oldu</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src={resim10} height="195" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Hangi takımlar Şampiyonlar Ligi'ni garantiledi?</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src={resim11} style={{ height: 195 }} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Marc Bartra: "Bugün potansiyelimizi gösterdik"</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src={resim12} height="195" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Andrea Pirlo'dan 4-1'lik yenilgi sonrası futbolcularına fırça</h5>
                        </div>
                    </div>

                </div>

                <div class="card-group">
                    <div class="card">
                        <img src={resim13} style={{ height: 195 }} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Süper Lig | Şenol Güneş: Hak ettiğimiz bir galibiyet en önemlisi o</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src={resim14} height="195" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Beşiktaş'tan Yerry Mina kararı</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src={resim15} style={{ height: 195 }} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Yine yeniden Wout Weghorst</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src={resim16} style={{ height: 195 }} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Bjelica neden farklı sistemler denediğini açıkladı</h5>
                        </div>
                    </div>

                </div>

                <div class="card-group">
                    <div class="card">
                        <img src={resim17} style={{ height: 195 }} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Neymar temasları resmiyete döküldü; Avrupa'yı sallayacak transfer</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src={resim18} style={{ height: 195 }} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Galatasaray'da Rashica olmazsa B planı hazır: Hedef Premier Lig yıldızı</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src={resim19} style={{ height: 195 }} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Arif Boşluk: Trabzonspor’u en iyi yerlerde temsil etmek istiyorum</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src={resim20} height="195" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Ryan Kent'le birlikte Rangers'ta 5 ayrılık</h5>
                        </div>
                    </div>

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
                <button style={{width:40,height:40,margin:5}} className="f1 a1 btn btn-light"><i class="fa-brands fa-facebook"></i></button>
                <button style={{width:40,height:40,margin:5}} className="t3 a3 btn btn-light"><i class="fa-brands fa-twitter"></i></button>
                <button style={{width:40,height:40,margin:5}} className="i2 a2 btn btn-light"><i class="fa-brands fa-instagram"></i></button>
                <button style={{width:40,height:40,margin:5}} className="y4 a4 btn btn-light"><i class="fa-brands fa-youtube"></i></button>
            </div>
        </div>
    )
}

export default Haber;