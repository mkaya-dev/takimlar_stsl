import React from "react";
import resim1 from "../Resimler/13.jpg"
import resim2 from "../Resimler/14.jpg"
import resim3 from "../Resimler/15.jpg"
import resim4 from "../Resimler/16.jpg"
import resim5 from "../Resimler/17.jpg"

const Slider = () => {
    return (
        <div>
            <div className="ortaa">
                <div id="carouselExampleFade" class="carousel slide carousel-fade">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={resim1} style={{width:1400,height:460}} class="orta d-block" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5 style={{fontSize:25}}>Fenerbahçe'de Ferdi Kadıoğlu ve Arda Güler'e<br/> 40 milyonluk karar</h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={resim2} width="1400" height="460" class="orta d-block" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5 style={{fontSize:35}}>Galatasaray'ın Icardi planı: Bonservis ve maaş detayı</h5>
                                
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={resim3} width="1400" height="460" class="orta d-block" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5 style={{fontSize:35}}>Yıldızlarla yarışıyor: Aboubakar hedefini belirledi</h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={resim4} width="1400" height="460" class="orta d-block" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5 style={{fontSize:35}}>Fenerbahçe'den TFF'ye Samet Akaydin tepkisi</h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={resim5} width="1400" height="460" class="orta d-block" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5 style={{fontSize:35}}>Trezeguet'den Samet Akaydin ile ilgili ilk açıklama: "O an görmediğim için şanslıyım" </h5>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>



        </div>
    )
}

export default Slider;