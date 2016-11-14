import { Component, OnInit } from '@angular/core';
import { PlayerResponse, ResponseService } from '../shared/index';
import {PlayerService} from "../shared/response/player.service";
import {Player} from "../shared/response/player.model";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'melody-main',
  templateUrl: 'melody.component.html',
  styleUrls: ['melody.component.css'],
})

export class MelodyComponent implements OnInit {
  
  ngOnInit():void {
    this.getPlayers();
    this.startRefreshing();
  }

  responses:PlayerResponse[] = [];
  players:Player[] = [];
  selectedCategory:any;
  isPlaying:boolean = false;
  overlayHeight:String = "0%";
  categories:any[];
  currentSong:any;

  startRefreshing() {
    setInterval(function () {
      this.responseService.get().subscribe(function (responses:PlayerResponse[]) {
        if(responses.length > 0 && this.isPlaying){
          this.pause();
        }
        if(this.responses.length == 0 || this.responses.length != responses.length){
          this.responses = responses;
          if(this.players.length) {
            this.responses.forEach(function (response:PlayerResponse) {
              this.players.forEach(function (player:Player){
                if(player._id == response.playerId) {
                  response.name = player.name;
                }
              }.bind(this));
            }.bind(this));
          }
        }
      }.bind(this));
    }.bind(this), 200);
  }
  
  getPlayers() {
    this.playerService.get()
      .subscribe(
        players => this.players = players
      );
  }

  play(category:any) {
    this.selectedCategory = category;
    if(this.currentSong == null) {
      this.currentSong = new Audio(this.selectedCategory.songs.shift());
    }

    this.currentSong.play();
    this.isPlaying = true;

    this.openPlayingOverlay();
  }

  openPlayingOverlay () {
     this.overlayHeight = "100%";
  }

  closePlayingOverlay () {
    this.overlayHeight = "0%";
  }

  stopPlaying () {
    this.closePlayingOverlay();
    this.stop();
  }

  responseWon (response:PlayerResponse) {
    this.playerService.playerWon(response.playerId);
    this.closePlayingOverlay();
    this.stop();
  }

  stop() {
    this.responseService.deleteAll().subscribe();
    this.currentSong.pause();
    this.currentSong = null;
    this.isPlaying = false;
    this.selectedCategory = null;
  }

  pause() {
    this.currentSong.pause();
    this.isPlaying = false;
  }

  selectCategory(category:any) {
    this.selectedCategory = category;
  }

  constructor(public responseService:ResponseService, public playerService:PlayerService) {
    this.categories = [
      {
        name: "Dance-Dance",
        titleClass: "lightblue",
        cols: 3,
        rows: 1,
        songs: [
          'assets/audio/dance/sia_-_chandelier_instrumental_version_(zaycev.net).mp3',
          'assets/audio/dance/1.Carly Rae Jepsen - Call Me Maybe (minus).mp3',
          'assets/audio/dance/11.iowa_-_marshrutka minusovki.info.mp3',
          'assets/audio/dance/12.DNCE - Cake By The Ocean (minus 2).mp3',
          'assets/audio/dance/niusha_-_cunami minusovki.info.mp3',
          'assets/audio/dance/13.rihanna_-_love_the_way_you_lie Minusovki.MpTri.Net.mp3',
          'assets/audio/dance/14.dj_bobo_-_chihuahua Minusovki.MpTri.Net.mp3',
          'assets/audio/dance/15.beyonce_-_crazy_in_love Minusovki.MpTri.Net.mp3',
          'assets/audio/dance/16.Justin Timberlake - Cry Me A River (minus).mp3',
          'assets/audio/dance/granica.mp3',
          'assets/audio/dance/19.lady_gaga_-_alejandro_(bez_bek_vokala,_chistaya_minusovka) Minusovki.MpTri.Net.mp3',
          'assets/audio/dance/2.Coldplay - Adventure Of A Lifetime (minus).mp3',
          'assets/audio/dance/Britney Spears - Toxic (minus 2).mp3',
          'assets/audio/dance/leningrad_-_eksponat_(na_labutenah) minusovki.info.mp3',
          'assets/audio/dance/Michael Jackson - Black Or White (minus).mp3',
          'assets/audio/dance/OneRepublic - Counting Stars (minus 5).mp3',
          'assets/audio/dance/psy_-_gangnam_style minusovki.info.mp3',
          'assets/audio/dance/via_gra_-_peremirie minusovki.info.mp3',
          'assets/audio/dance/Алёна Апина - Комбинация - American boy (minus).mp3',
          'assets/audio/dance/0.ABBA - The winner takes it all (minus 3).mp3'
        ]
      },
      {
        name: "Медляки",
        titleClass: "lightgreen",
        cols: 1,
        rows: 2,
        songs: [
          'assets/audio/medlyaki/vidpusti.mp3',
          'assets/audio/medlyaki/9.Minusovki.MpTri.Net spice_girls_-_viva_forever_2.mp3',
          'assets/audio/medlyaki/krasiva.mp3',
          'assets/audio/medlyaki/ABBA - Happy New Year (minus).mp3',
          'assets/audio/medlyaki/Adele - Set fire to the rain (minus 4).mp3',
          'assets/audio/medlyaki/bi-2_-_ee_glaza_(gde-to_angeli_krichat) minusovki.info.mp3',
          'assets/audio/medlyaki/vsegda.mp3',
          'assets/audio/medlyaki/Britney Spears - Criminal (minus).mp3',
          'assets/audio/medlyaki/bezbou.mp3',
          'assets/audio/medlyaki/Coldplay - Hymn For The Weekend (minus 2).mp3',
          'assets/audio/medlyaki/slivki_-_kuda_uhodit_detstvo minusovki.info.mp3',
          'assets/audio/medlyaki/vodopadom.mp3',
          'assets/audio/medlyaki/Metallica - Nothing Else Matters (minus 7).mp3',
          'assets/audio/medlyaki/Pink - Just Give Me A Reason (minus).mp3',
          'assets/audio/medlyaki/davai.mp3',
          'assets/audio/medlyaki/Adele - Skyfall (minus 2).mp3',
          'assets/audio/medlyaki/Red Hot Chili Peppers - Californication (minus 4).mp3',
          'assets/audio/medlyaki/taxi.mp3'
        ]
      },
      {
        name: "Рок",
        titleClass: "lightpink",
        cols: 1,
        rows: 1,
        songs: [
          'assets/audio/rock/AC-DC - Back In Black (minus 2).mp3',
          'assets/audio/rock/Michael Jackson - Beat it (minus 7).mp3',
          'assets/audio/rock/medlenno.mp3',
          'assets/audio/rock/Deep Purple - Smoke On The Water (minus).mp3',
          'assets/audio/rock/ddt_-_chto_takoe_osen minusovki.info.mp3',
          'assets/audio/rock/OneRepublic - All The Right Moves (minus).mp3',
          'assets/audio/rock/Pink - Try (Original Instrumental) (minus).mp3',
          'assets/audio/rock/Queen - The Show Must Go On (minus).mp3',
          'assets/audio/rock/viktor_coy_-_kukushka minusovki.info.mp3',
          'assets/audio/rock/vechnaya.mp3',
          'assets/audio/rock/1.green_day_-_boulevard_of_broken_dreams Minusovki.MpTri.Net.mp3',
          'assets/audio/rock/12.muse - supermassive black hole.mp3',
          'assets/audio/rock/14.smells like teen spirit.mp3',
          'assets/audio/rock/4.blur - song 2.mp3',
          'assets/audio/rock/5.bring me to life.mp3',
          'assets/audio/rock/7.eye of the tiger.mp3',
          'assets/audio/rock/8.linkinpark-whatIvedone.mp3',
          'assets/audio/rock/9.marilyn manson - sweed dreams.mp3',
          'assets/audio/rock/16.system of a down - toxicity.mp3',
          'assets/audio/rock/15.sonne.mp3'
        ]
      },
      {
        name: "На Ваших экранах",
        titleClass: "#DDBDF1",
        cols: 2,
        rows: 1,
        songs: [
          'assets/audio/ekran/13.smash_mouth_-_hey_man_(zaycev.net).mp3',
          'assets/audio/ekran/15.detskie_pesni_-_rasskazhi_snegurochka_(zaycev.net).mp3',
          'assets/audio/ekran/15.myzuka.ru_01_ghostbusters.mp3',
          'assets/audio/ekran/16.myzuka.ru_01_twin_peaks_theme_instrumental.mp3',
          'assets/audio/ekran/16.ot_ulybki(kroshka enot).mp3',
          'assets/audio/ekran/18.lozhkoy_sneg_meshaya...(Umka).mp3',
          'assets/audio/ekran/2.disney_-_akuna_matata_(zaycev.net).mp3',
          'assets/audio/ekran/20.duck_tales.mp3',
          'assets/audio/ekran/20.ost_garri_potter_-_harry_potter_theme_(zaycev.net).mp3',
          'assets/audio/ekran/21.ost_indiana_jones_-_main_theme_(zaycev.net).mp3',
          'assets/audio/ekran/22.aladdin_aladdin_-_arabian_nights_rus_(zaycev.net).mp3',
          'assets/audio/ekran/22.piraty_karibskogo_morya_-_glavnaya_tema_(zaycev.net).mp3',
          'assets/audio/ekran/23.poirot.mp3',
          'assets/audio/ekran/24.anastasiya.mp3',
          'assets/audio/ekran/24.tvist_-_kriminalnoe_chtivo_(zaycev.net).mp3',
          'assets/audio/ekran/27.x-files_theme_-_x-files_(zaycev.net).mp3',
          'assets/audio/ekran/28.черепашки ниндзя.mp3',
          'assets/audio/ekran/29.zvezdnye_voyny_-_imperskiy_marsh_(zaycev.net).mp3',
          'assets/audio/ekran/36.Padal proshlogodnii sneg.mp3',
          'assets/audio/ekran/5.detskie_-_buratino_(zaycev.net).mp3',
          'assets/audio/ekran/50.zima_v_prostokvashino_-_romans_matroskina_(zaycev.net).mp3',
          'assets/audio/ekran/Детские песенки - Фиксики - А кто такие фиксики!-.mp3'
        ]
      // },
      // {
      //   name: "РОК",
      //   titleClass: "magenta",
      //   songs: []
      }
    ];
  }
}
