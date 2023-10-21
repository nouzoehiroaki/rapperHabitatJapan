import { ApiResponse } from '@/types/types'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
){
  res.status(200).json({
    total_count: 33,
    results: [
      {
        id:1,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-BROOKLYN.jpg?alt=media&token=d8f4581b-dc11-4d14-b8ed-02249712ff04',
        name: 'TACOSTAND / CLUB BROOKLYN',
        gmap_url:'https://maps.app.goo.gl/2R14A5bD4yUwzRTq6',
        meta:'BIG JOE ビッグジョー CLUB BROOKLYN タコスタンド クラブブルックリン',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/tacostand-clubbrooklyn.jpg?alt=media&token=0b5a0aa0-e6d1-4da0-ab1c-2806fb7926e1',
        categories: ['タコス料理店 ナイトクラブ'],
        bio_url: 'https://info83959.wixsite.com/clubbrooklyn',
        other_url:'https://clubbrooklyn.thebase.in/',
        other_text:'Goods お取り寄せタコス',
        bio_summary: '本格的なタコス が食べれて、週末の夜はホットなDJ達がプレイするミュージックバー meetsタコス屋台です プライベートな集まりや、様々なイベントに対応いたします！',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/wlRKhhR6cp0?si=GvCwJXoHckFh1D8D',
        location_city: '北海道旭川市２条通７丁目２００４−２ BF 関ビル',
        location_coordinates: {
          lon: 142.3582342,
          lat: 43.7666153
        }
      },
      {
        id:2,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-JUICYBURGER.jpg?alt=media&token=be6d8d55-d4ce-451a-a5cf-490f8254d5f4',
        name: 'JUICY BURGER',
        gmap_url:'https://maps.app.goo.gl/RrA6wWVf6a49qb7e7',
        meta:'MEGA-G メガジー BES ベス JUICY BURGER ジューシーバーガー',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/juicy.jpg?alt=media&token=79a8b4be-9cca-438c-b928-abefcd1c3d35',
        categories: ['ハンバーガー店'],
        bio_url: 'https://tabelog.com/tokyo/A1315/A131504/13252680/',
        other_url:'https://juicyburger.base.shop/',
        other_text:'Goods',
        bio_summary: '11:00-15:00 17:00-21:00 土日祝も休憩あり☀️テイクアウト&デリバリー 大田区羽田1-4-5 03-5735-4655 京急空港線大鳥居駅から徒歩5分 ケータリングのご注文はメールにてお願いします2020haneda@gmail.com',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/HTJoeTZxCoo?si=QoWrWvbvJIgsYeas',
        location_city: '東京都大田区羽田1-4-5',
        location_coordinates: {
          lon: 139.7452628,
          lat: 35.55167
        }
      },
      {
        id:3,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-NETSIDESTORE.jpg?alt=media&token=1839576e-df30-4a9c-bcec-f8b025ec6d61',
        name: 'NET SIDE STORE',
        gmap_url:'https://maps.app.goo.gl/bSEpiCoTyJKjG6rb7',
        meta:'RAWAXXX ロウワックス MAD JAG マッドジャグ SILENT KILLA JOINT サイレントキラジョイント NET SIDE STORE ネットサイドストア',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/netside.jpg?alt=media&token=b1fce036-04e9-42b6-9d5d-d3758772e28f',
        categories: ['Apparel'],
        bio_url: 'https://www.netsidestore.com/',
        other_url:'https://www.instagram.com/net_side_store/',
        other_text:'INSTAGRAM',
        bio_summary: '大阪アメ村ド真ん中に構えるHIPHOP電波塔Planet Radio /Original Goods / Street Wear / Vinyl&CD / Recording Studio.',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/m9pnsOdFBFk?si=u-OYE8Q9DAUGneah',
        location_city: '大阪府大阪市中央区西心斎橋２丁目１０−２９ アメリカ村センタービル 5F',
        location_coordinates: {
          lon: 135.4985643,
          lat: 34.671596
        }
      },{
        id:4,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-ProceedMusicStore.jpg?alt=media&token=9b7d8319-a1fe-4a88-bb96-acb167c4d661',
        name: 'Proceed Music Store',
        gmap_url:'https://maps.app.goo.gl/sDQf24ywuGMP24nh8',
        meta:'GAGLE ガグル DJ Mu-R ミューラー Proceed Music Store プロシードミュージックストア',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/proseed.jpg?alt=media&token=927b6634-b01f-4513-8dd4-85347ad2edfb',
        categories: ['Record Shop'],
        bio_url: 'https://proceedmusicstore.com/',
        other_url:'https://www.instagram.com/proceed_sendai/?hl=ja',
        other_text:'INSTAGRAM',
        bio_summary: '仙台を拠点に活動するヒップホップグループ・GAGLEのDJ Mu-Rが店主を務めるミュージックストアです。 クラブミュージックを軸に、ヒップホップ、ハウス、ジャズ、ソウルなどのレコードを中心に取り扱っています。',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/Di2a4kvR3uk?si=kZcdnAnaUpQ43oby',
        location_city: '宮城県仙台市宮城野区原町３丁目１−１９',
        location_coordinates: {
          lon: 140.9049252,
          lat: 38.2664271
        }
      },{
        id:5,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-MODULE.png?alt=media&token=461da234-64e2-448b-bc42-d4a162ba1ef6',
        name: 'MODULE',
        gmap_url:'https://maps.app.goo.gl/d6mTVdTnjbNUryTj6',
        meta:'GOCCI ゴッチ MODULE モジュール',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/module.png?alt=media&token=15e37345-9cc9-46d4-bb35-707b4608e00d',
        categories: ['Select Shop'],
        bio_url: 'https://www.instagram.com/gocci_funkhawk/',
        other_url:'https://www.instagram.com/module_mtc/',
        other_text:'INSTAGRAM',
        bio_summary: '水戸MODULE LUNCH TIME SPEAKSのGOCCI氏が経営するセレクトショップ',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/5AHLpUG4ack?si=l9Ksy8MpT494qH9q',
        location_city: '茨城県水戸市南町1丁目2-32 M WORK bldg 3F',
        location_coordinates: {
          lon: 140.4637539,
          lat: 36.3734035
        }
      },{
        id:6,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-ROKUYU.jpg?alt=media&token=c8b493d2-3d03-4fd1-a98d-ccecfdb395a6',
        name: '六喩',
        gmap_url:'https://maps.app.goo.gl/4d2o8Z8eJYUoL6x38',
        meta:'B.D. ビーディー 六喩 ろくゆ ロクユ',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/rokuyu.jpg?alt=media&token=e403141d-8216-48f8-822e-efdaa1e0f02f',
        categories: ['Record Shop'],
        bio_url: 'https://www.instagram.com/rokuyu20/',
        other_url:'https://giganteworks.base.shop/',
        other_text:'giganteworks',
        bio_summary: 'B.D.がプロデュースするカルチャーショップ ',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/VU4ltWF4d_M?si=UYpDqHMiiJqmUwqR',
        location_city: '栃木県那須塩原市高砂町6-7 2F',
        location_coordinates: {
          lon: 140.0506759,
          lat: 36.9721314
        }
      },{
        id:7,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-NISIMURA.jpg?alt=media&token=d643aaf9-813a-4cb4-8761-9473a9ad9f65',
        name: '西村整骨院',
        gmap_url:'https://maps.app.goo.gl/P3xARKcKEqfX4Vws9',
        meta:'SHOWGO ショウゴ 西村整骨院 にしむらせっこついん',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/nosomura.ico?alt=media&token=f5dcd2f7-d87d-4965-8e04-171478033da6',
        categories: ['整骨院'],
        bio_url: 'https://www.nishimuraseikotsuin.com/',
        other_url:'https://www.instagram.com/showgonishimura/',
        other_text:'INSTAGRAM',
        bio_summary: '西村整骨院 院長SHOWGOによる疲れがぶっ飛ぶイケてる接骨医院',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/jSmMNhxnFvg?si=qjBMVlvLgNgRs6Qg',
        location_city: '宮城県仙台市青葉区柏木１丁目８−４０',
        location_coordinates: {
          lon: 140.8611653,
          lat: 38.2754672
        }
      },{
        id:8,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-AGIT.jpg?alt=media&token=9fe17f49-6a62-4e89-a988-bc5f069e9e2a',
        name: 'AGIT',
        gmap_url:'https://maps.app.goo.gl/sZWfDzMF743FZcMN6',
        meta:'AGIT アジト',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/agit.png?alt=media&token=954dc8c4-3393-4474-bdb7-d229cd205374',
        categories: ['Apparel'],
        bio_url: 'http://agitism.com/',
        other_url:'https://www.instagram.com/agit_jpn_official/',
        other_text:'INSTAGRAM',
        bio_summary: 'SENDAI STREET "PRO" SHOP',
        youtube_clipexampleurl: '',
        location_city: '宮城県仙台市青葉区一番町3-8-1 ラベルヴィビル2F',
        location_coordinates: {
          lon: 140.87275,
          lat: 38.261258
        }
      },{
        id:9,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-STILLDIGGIN.jpg?alt=media&token=b21899c4-12c4-43d6-ba53-f82fd40e230c',
        name: 'Still Diggin',
        gmap_url:'https://maps.app.goo.gl/sgHfHM56xtNJLNGC7',
        meta:'DJ VIBLAM ビブラム Still Diggin スティルディギン',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/stilldiggin.jpg?alt=media&token=5c89989e-4f74-4b49-92c1-f15375384011',
        categories: ['Apparel'],
        bio_url: 'http://stilldiggin.shop-pro.jp/',
        other_url:'https://www.instagram.com/stilldiggin_tyo/',
        other_text:'INSTAGRAM',
        bio_summary: '1994年に渋谷区宇田川町にオープン。長きにわたりヒップホップカルチャーの本質を発信し続けているB-BOYショップの草分け。オリジナルウェアをはじめ、インポートウェアやキックス・アート用品・厳選された音楽メディアなどを取り扱う。',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/hzrdLzOJdoA?si=4T09JGgNeuTeI08x',
        location_city: '東京都渋谷区神宮前4丁目26-27 Ysビル3F',
        location_coordinates: {
          lon: 139.7075233,
          lat: 35.6690049
        }
      },{
        id:10,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-NAMINOUE.jpg?alt=media&token=e3f2f151-b037-4242-b996-efdcbeec887f',
        name: '波の上MUSIC&BARBER',
        gmap_url:'https://maps.app.goo.gl/GKcRMtXLgsQTEjDF7',
        meta:'四号棟 波の上MUSIC&BARBER なみのうえ',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/naminoue.jpeg?alt=media&token=0e2d5d5d-48b9-43ef-bf99-a9c2ef8818da',
        categories: ['MUSIC&CAFE&BARBER'],
        bio_url: 'https://naminouemsc.thebase.in/',
        other_url:'https://www.instagram.com/naminouemusic/',
        other_text:'INSTAGRAM',
        bio_summary: '2015年6月、那覇市辻にOPENしたCD&レコードを中心にセレクト&取り扱いMUSIC SHOP ヒップホップ&ダンスミュージックを中心に、大手CDショップにはない非流通作品、MIXCD、特典付きCD等有。 音好きの方、更に音楽を楽しみたい方遊びにいらしてください',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/bdqj7oqX77o?si=qP5tuTuM705biwB2',
        location_city: '沖縄県那覇市辻1-2-14 1F',
        location_coordinates: {
          lon: 127.6716864,
          lat: 26.2164951
        }
      },{
        id:11,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-JAMES.jpg?alt=media&token=cfdfb10d-8d94-47af-a7c7-a22543b9022e',
        name: 'JAMES american food',
        gmap_url:'https://maps.app.goo.gl/KUr7K8ihBJwqZ9EB6',
        meta:'IMUHA BLACK DON QUICK イムハブラック JAMES american food ジェームス',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/james.jpg?alt=media&token=5a8aa674-4670-4fc9-98c2-a15776a67e0f',
        categories: ['サンドイッチ店'],
        bio_url: 'https://tabelog.com/saitama/A1103/A110301/11044630/',
        other_url:'https://www.instagram.com/j_a_m_e_s_1513/',
        other_text:'INSTAGRAM',
        bio_summary: 'アメリカが朝霞に！ アメリカンフード・カルチャーを楽しめるお店 お店に一歩足を踏み入れると、そこは本場アメリカ。 ソーセージやベーコンなどは、すべて自家製です ',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/REvTmKLplRE?si=1Xo65OuAyhvppBdG',
        location_city: '埼玉県朝霞市西弁財１丁目５−１３',
        location_coordinates: {
          lon: 139.58266,
          lat: 35.8147977
        }
      },{
        id:12,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-HYOUTAN.jpg?alt=media&token=0ef9c13c-5bca-4a7c-8baa-639671183f3e',
        name: '味処ひょうたん',
        gmap_url:'https://maps.app.goo.gl/QZdYfiKLZh8KoC858',
        meta:'6th Generation 味処ひょうたん',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/hyoutan.jpg?alt=media&token=5d21793e-5be3-44fd-8041-9869e14beccf',
        categories: ['居酒屋'],
        bio_url: 'https://www.miyalabo.jp/shop/shop.shtml?s=6723',
        other_url:'https://www.instagram.com/ajidokoro_hyoutan/',
        other_text:'INSTAGRAM',
        bio_summary: '1976年創業。昼は食堂 夜は居酒屋 昭和がたっぷり残った田舎の飲食店です！',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/hS_n4INTpTo?si=L54CXt4qY4xOp5i1',
        location_city: '宮城県柴田郡川崎町前川本町７５',
        location_coordinates: {
          lon: 140.643455,
          lat: 38.1753399
        }
      },{
        id:13,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-TORIITEI.jpg?alt=media&token=a1993827-c89f-4e1b-8338-fa54556a977e',
        name: '鳥居亭',
        gmap_url:'https://maps.app.goo.gl/dQygBTV9UaAyYxHAA',
        meta:'RINO LATINA II リノラティーナ 鳥居亭 とりいてい',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/toriitei.jpg?alt=media&token=2f96e3c0-6386-4732-9a3d-2f8b5dccd215',
        categories: ['鶏料理店'],
        bio_url: 'https://tabelog.com/tokyo/A1316/A131602/13023777/',
        other_url:'https://www.instagram.com/toriitei.2016/',
        other_text:'INSTAGRAM',
        bio_summary: '炭火やきとり鳥居亭！^_^RINO LATINA II が経営する白金高輪の焼き鳥屋です^_^!!',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/IhcgX4XWfh4?si=Qlks1mqpJcVHD-q9',
        location_city: '東京都港区白金１丁目２５−１５ 平野ビル',
        location_coordinates: {
          lon: 139.7327879,
          lat: 35.6439008
        }
      },{
        id:14,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore.TOKABANANA.jpg?alt=media&token=35772ab3-058c-4210-ae07-2111ff768cb9',
        name: 'トカバナナ',
        gmap_url:'https://maps.app.goo.gl/6a59mP7ug3VQu8ce8',
        meta:'十影 トカゲ トカバナナ',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/tokabanana.jpg?alt=media&token=9b3aa8b5-48ab-426d-9279-0575eb92e9b6',
        categories: ['バナナジュース屋'],
        bio_url: 'https://tabelog.com/tokyo/A1312/A131202/13285835/',
        other_url:'https://www.instagram.com/tokabanana/',
        other_text:'INSTAGRAM',
        bio_summary: 'ラッパー【十影】が運営する、超濃厚バナナジュース【TOKABANANA】エクアドル産完熟バナナ×ミルク',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/8NwNH5yO0qE?si=AAO6wu7e6d8N5cQl',
        location_city: '毎週土曜日、原宿SURKU CAFE',
        location_coordinates: {
          lon: 139.7076324,
          lat: 35.6694534
        }
      },{
        id:15,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-SOULFACTORY.jpg?alt=media&token=accf17be-4941-4085-90d7-5a43aa528895',
        name: 'SOUL FACTORY',
        gmap_url:'https://maps.app.goo.gl/6A7r6dre2Hpq9NZKA',
        meta:'GORIKI ゴーリキ SOUL FACTORY ソウルファクトリー',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/soulfactry.jpg?alt=media&token=aa2ed608-949d-475a-b650-2aa1c6cd9171',
        categories: ['Tシャツ印刷&デザイン工房'],
        bio_url: 'http://soulfactory907.com/',
        other_url:'https://twitter.com/GORIKI_',
        other_text:'Twitter',
        bio_summary: 'ソウルファクトリーは沖縄県石垣市にあるTシャツ印刷&デザイン工房です。島の内外の多くのお客様にご愛顧いただき創業11年目を迎えることができました。',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/QZUAkoyRBLw?si=9JiE24AjajQnjfBk',
        location_city: '沖縄県石垣市新川２９７−２ 1F東 Casa Tyla',
        location_coordinates: {
          lon: 124.1561283,
          lat: 24.3452495
        }
      },{
        id:16,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-THEKILLERKAN.jpg?alt=media&token=be522521-d5d0-4cba-8594-2b684d5cd0e6',
        name: 'THE KILLER KAN',
        gmap_url:'https://maps.app.goo.gl/2yj51rdbAG7EDdjS6',
        meta:'JOE-CHO ジョウチョウ THE KILLER KAN ザキラーカン',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/killerkan.jpeg?alt=media&token=f5b17ad7-6a74-4791-8a88-96cd2ef0d5c8',
        categories: ['柏の立ち飲み屋'],
        bio_url: 'https://tabelog.com/chiba/A1203/A120301/12032662/',
        other_url:'https://www.instagram.com/explore/locations/277434922/the-killer-kan/',
        other_text:'INSTAGRAM',
        bio_summary: 'チルロブJAY太郎氏による、地元柏の立ち飲み屋',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/dqQ2OBYZdHg?si=K6U97NbV7qluqP3c',
        location_city: '千葉県柏市中央町２−２８',
        location_coordinates: {
          lon: 139.9718829,
          lat: 35.859387
        }
      },{
        id:17,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-9sariCafe%26Bar.jpg?alt=media&token=a1e2d287-935e-4a5c-b4af-64db75fb1152',
        name: '9sari Cafe&Bar',
        gmap_url:'https://maps.app.goo.gl/5MLvu3SDfV8Rb5sY6',
        meta:'漢 GAMI D.O 9sari Cafe&Bar くさりカフェ',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/9sari.jpg?alt=media&token=9de79032-1624-49e6-8817-5644c26329a9',
        categories: ['コーヒーショップ・喫茶店'],
        bio_url: 'http://9sari-group.net/cafe',
        other_url:'https://twitter.com/9saricafeandbar',
        other_text:'Twitter',
        bio_summary: 'ヒップホップのインディーズレーベル“9sari group”（鎖グループ）のオフィス兼スタジオであり、平日昼間はカフェやショップとしてオープンしている',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/F7tfAY-59q8?si=vRjQCSCe6EeLKmK2',
        location_city: '東京都新宿区大久保３丁目１３−１０７',
        location_coordinates: {
          lon: 139.7076741,
          lat: 35.7083515
        }
      },{
        id:18,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-PHARCYDE.jpg?alt=media&token=db5f0d27-4abf-4e92-8c44-b0c7cd1f2407',
        name: 'PHARCYDE',
        gmap_url:'https://maps.app.goo.gl/2o8N8UhxyMXYFrTw7',
        meta:'WATUKEY TOSHI ON THE BEATS PHARCYDE ファーサイド ワツキー',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/PHARCYDE.jpg?alt=media&token=916a92a2-4e17-47ac-8674-ec4a19a18344',
        categories: ['Apparel'],
        bio_url: 'https://ryomadori.com/shop-list/pharcyde/',
        other_url:'https://www.instagram.com/PHARCYDE_KYOTO/',
        other_text:'INSTAGRAM',
        bio_summary: 'CALIFORNIAを意識し、カルチャーそのものを提案する洋服屋として、古着、新品を取り扱わせてもらっています。',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/nvfCQfmpw_A?si=89qFPmU2jEzO9Quj',
        location_city: '京都府京都市伏見区下油掛町１４４',
        location_coordinates: {
          lon: 135.759807,
          lat: 34.931141
        }
      },{
        id:19,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-JUICEBARROCKET.jpg?alt=media&token=3520462b-6413-43c7-bef9-45faeb5113ee',
        name: 'JUICE BAR ROCKET',
        gmap_url:'https://maps.app.goo.gl/iKJt6zzUzcHEd6pF8',
        meta:'VIKN バイケン JUICE BAR ROCKET ジュースバーロケット',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/JUICEBARROCKET.jpg?alt=media&token=a48a2d6e-1ca7-491e-a173-ac7858b9bc58',
        categories: ['ジュースバー'],
        bio_url: 'https://juicebarrocket.wixsite.com/juicelife',
        other_url:'https://www.instagram.com/juicebarrocket/',
        other_text:'INSTAGRAM',
        bio_summary: '北千住駅でカフェやランチ、スムージー・コールドプレスジュース、ジュースクレンズをお探しならJUICE BAR ROCKETへ。',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/GyHYHd6J2v8?si=kuNgrx9CCyPW-Zhc',
        location_city: '東京都足立区千住１丁目１−１０',
        location_coordinates: {
          lon: 139.7990817,
          lat: 35.7475739
        }
      },{
        id:20,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-HIHUMIYA.jpg?alt=media&token=dac2b0f7-0685-4eba-8619-8fbf8ce2ba4d',
        name: '一二三屋',
        gmap_url:'https://maps.app.goo.gl/bo5hrAmQAU8DnWEm7',
        meta:'韻踏合組合 HIDADDY CIMA ひふみや 一二三屋 ヒダディー',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/hihumiya.jpg?alt=media&token=3c306ecf-d8f4-4432-985e-d8ea30b8d0f9',
        categories: ['Apparel'],
        bio_url: 'https://www.hifumiya.com/',
        other_url:'https://www.instagram.com/hifumiya/',
        other_text:'INSTAGRAM',
        bio_summary: '韻踏合組合・HIDADDYのお店、ラッパーのラッパーによるラッパーのためのお店一二三屋',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/7K4qqSDLXJM?si=K6L9GwHaUR-N7M26',
        location_city: '大阪府大阪市中央区西心斎橋１丁目８−１６ 中西ビル 4階',
        location_coordinates: {
          lon: 135.498047,
          lat: 34.673087
        }
      },{
        id:21,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-DontFind.jpg?alt=media&token=3c91ee57-a56a-4eba-9f65-774d61ee4a09',
        name: 'Dont Find',
        gmap_url:'https://maps.app.goo.gl/5sd18pinJT1QH1N18',
        meta:'Dont Find OLIVEOIL OILWORKS Popy Oil オリーブオイル オイルワークス ポピーオイル',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/dontfind.jpg?alt=media&token=0add8be8-6f81-4d2f-821f-d4f6afcc0c66',
        categories: ['CD | VINYL | APPAREL | ART '],
        bio_url: 'http://oilworks.jp/about/donotfind/',
        other_url:'https://www.instagram.com/donotfind_shopfk/',
        other_text:'INSTAGRAM',
        bio_summary: 'OILWORKSによるOffice/Atelier Dont Find',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/NJ1MCEh9b3M?si=rLhgba_1yfReoq7u',
        location_city: '福岡県福岡市中央区大名１丁目８−４２',
        location_coordinates: {
          lon: 130.3928078,
          lat: 33.5866883
        }
      },{
        id:22,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-CASTLE-RECORDS.jpg?alt=media&token=1cd28c09-819a-499a-8657-7a0cd20228ad',
        name: 'CASTLE-RECORDS',
        gmap_url:'https://maps.app.goo.gl/RWKMHcUfrx33dQeUA',
        meta:'CASTLE-RECORDS キャッスルレコーズ G.O 椿',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/castle_records.jpg?alt=media&token=7ed4e370-b159-4088-abcf-341dd7034077',
        categories: ['J-HIPHOP・CLUB MUSIC'],
        bio_url: 'https://www.castle-records.net/',
        other_url:'https://www.instagram.com/castle_records__the_batou/',
        other_text:'INSTAGRAM',
        bio_summary: '2009年5月、上野アメ横にてオープンしたJ-HIPHOP・CLUB MUSICが中心のCD SHOPです! 2021年4月より湯島のドンキ横に移転、同時にBARも併設して新しく【CD SHOP & BAR】としてオープンしました!',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/XkA-G9mIEVQ?si=BI-ZF9gAsQLZ2SE0',
        location_city: '東京都文京区湯島３丁目３８−１０ ハニービル 4F',
        location_coordinates: {
          lon: 139.7710554,
          lat: 35.7080321
        }
      },{
        id:23,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-MIYARA.jpg?alt=media&token=8b46d0a2-b4a7-47fb-8679-9a2ceaaa1b58',
        name: 'てんぷら みやら',
        gmap_url:'https://maps.app.goo.gl/xaXEXsFUE9V1DLQf9',
        meta:'てんぷら みやら CHOUJI チョウジ',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/tenpuramiyara.jpg?alt=media&token=0d53983c-5144-4b06-9d03-03a52d677707',
        categories: ['天ぷら店'],
        bio_url: 'https://tabelog.com/okinawa/A4701/A470101/47029490/',
        other_url:'https://www.instagram.com/tenpura_miyara_oki_098/',
        other_text:'INSTAGRAM',
        bio_summary: 'お店の前でBBQしているうちなーてんぷらやーです てんぷら以外にフィリピン料理 お弁当ご用意しております ご注文を受けてから、揚げたてをお渡しします。',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/bclMCNaH3Uc?si=163AYCgvT9nXdaF7',
        location_city: '沖縄県那覇市若狭３丁目１−８ アパート２５',
        location_coordinates: {
          lon: 127.6781752,
          lat: 26.2215394
        }
      },{
        id:24,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-THEATER1.jpeg?alt=media&token=6632e939-1ef2-41ba-8b96-fe68b427d9fd',
        name: 'THEATER 1',
        gmap_url:'https://maps.app.goo.gl/hv1KrYdLnM5muWso7',
        meta:'THEATER 1 シアターワン 318',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/theater1.jpg?alt=media&token=57f411c6-723a-42e9-bc12-e8aebc336c45',
        categories: ['ホテル リゾート'],
        bio_url: 'https://theater1.tokyo/',
        other_url:'https://www.instagram.com/theateronetokyo/',
        other_text:'INSTAGRAM',
        bio_summary: '車を停めたら、階段を降りるだけ。 東京都唯一の“村”である檜原村の山地標高600m、5000坪の敷地にポツンと1棟だけ建っているシアタールーム。',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/6owRvGSa6Wo?si=PM6H25DlMeq25SqY',
        location_city: '東京都西多摩郡檜原村８６３７−１',
        location_coordinates: {
          lon: 139.1065779,
          lat: 35.7392447
        }
      },{
        id:25,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-Highflyer.jpg?alt=media&token=fdcdbfe9-b13c-4b43-96ba-a90c4df45514',
        name: 'Highflyer',
        gmap_url:'https://maps.app.goo.gl/TNrntFnsZLKM24ig6',
        meta:'Highflyer ハイフライヤー AKITO',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/highflyer.jpg?alt=media&token=d40bc0be-6d88-454e-b7bd-0d61168a59a7',
        categories: ['Apparel'],
        bio_url: 'https://highflyer.shopselect.net/',
        other_url:'https://www.instagram.com/highflyer.kashiwa/',
        other_text:'INSTAGRAM',
        bio_summary: '千葉県柏市に店舗があるハイフライヤー 旬なアイテムをベースにオリジナルスタイルを提供 幅広いブランドを取り扱っております。',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/BNKKES0OrRw?si=wMuKHCXfO93lPkpg',
        location_city: '千葉県柏市柏3-2-23 長沢ビル1F-B',
        location_coordinates: {
          lon: 139.9738865,
          lat: 35.8597198
        }
      },{
        id:26,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-SARASA.jpg?alt=media&token=ba8476c0-39e5-4615-980f-2b264034391c',
        name: '渋谷メキシカン カサデサラサ',
        gmap_url:'https://maps.app.goo.gl/3jYxFKKM3JzXPYWV6',
        meta:'カサデサラサ SARASA',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/casadesarasa.jpg?alt=media&token=db0724ca-7b6c-40b4-b73b-396ed03a44f9',
        categories: ['メキシコ料理店'],
        bio_url: 'https://casadesarasa.thebase.in/',
        other_url:'https://www.instagram.com/casadesarasa/',
        other_text:'INSTAGRAM',
        bio_summary: '本場メキシコの味が楽しめる渋谷のメキシカンバル。',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/UTfXc0FiRmY?si=aRGloz9d6CtgeH54',
        location_city: '東京都渋谷区道玄坂2-25-5 島田ビル2階',
        location_coordinates: {
          lon: 139.696557,
          lat: 35.660224
        }
      },{
        id:27,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-MENYAKUZU.jpg?alt=media&token=a22c79fb-a774-4878-bbb4-dd3990127be1',
        name: '麺屋クズ 荻窪本店',
        gmap_url:'https://maps.app.goo.gl/C48dJtdsEy9Y3o8n6',
        meta:'麺屋クズ t-Ace ティーエース',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/menyakuzu.jpg?alt=media&token=32b26fb1-8801-4d37-8075-c379248ebfa7',
        categories: ['ラーメン屋'],
        bio_url: 'https://tabelog.com/tokyo/A1319/A131906/13243312/',
        other_url:'https://www.instagram.com/menya_kuzu/',
        other_text:'INSTAGRAM',
        bio_summary: 't-Aceが手がけるラーメン屋『麺屋クズ』が荻窪に誕生!その味は店名とは違い……？',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/dtml2wLIpsI?si=oM0aNtpKthnMflLz',
        location_city: '東京都杉並区荻窪５丁目２３−１２',
        location_coordinates: {
          lon: 139.6207159,
          lat: 35.7032506
        }
      },{
        id:28,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-LB.jpg?alt=media&token=7bd9678e-36b8-4a47-84bc-39e173e18c0c',
        name: 'LB',
        gmap_url:'https://maps.app.goo.gl/79yJ3XbsjjYTg9XbA',
        meta:'LB MARS MANIE マーズマニー',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/lb.jpg?alt=media&token=d874f319-a512-4613-a753-37a1e0c5d88d',
        categories: ['Apparel'],
        bio_url: 'https://shop.lb-2.com/',
        other_url:'https://www.instagram.com/marsmanie/',
        other_text:'INSTAGRAM',
        bio_summary: '土浦の中心市街地に拠点を構える、44BLOXのラッパー MARS MANIEのお店LB',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/nvte0Sy4D8k?si=c_MnkXUQsOsBytyN',
        location_city: '茨城県土浦市大手町２−５',
        location_coordinates: {
          lon: 140.1972981,
          lat: 36.0803291
        }
      },{
        id:29,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-MONICHIKIHOUSE.jpg?alt=media&token=8ef0f090-c424-4c7b-9ba6-cd933a7d8957',
        name: 'MONICHIKI HOUSE',
        gmap_url:'https://maps.app.goo.gl/SDq3DGnuakaGSokCA',
        meta:'MonyHorse モニーホース MONICHIKI HOUSE モニチキハウス',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/MONICHIKI.jpg?alt=media&token=10e5e826-85c0-4761-8870-3d46341f5361',
        categories: ['ハンバーガー店'],
        bio_url: 'https://tabelog.com/tokyo/A1317/A131706/13267458/',
        other_url:'https://www.instagram.com/monichikihouse/',
        other_text:'INSTAGRAM',
        bio_summary: '東京の三軒茶屋にある「MONICHIKI HOUSE」、通称「モニチキ」。 2022年2月にオープン。 日本を代表するヒップホップクルー・YENTOWN(イエンタウン)のメンバーであるMonyHorse(モニーホース)がプロデュースを手掛ける話題のチキンバーガー専門店。',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/F_I3FDDiO1o?si=xIWgcE0Fx-Q07Dsr',
        location_city: '東京都世田谷区太子堂1-4-35 ﾆｼﾑﾗｱｰﾄﾋﾞﾙ3F',
        location_coordinates: {
          lon: 139.6776051,
          lat: 35.6467062
        }
      },{
        id:30,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-CLUBOCTBASS.jpg?alt=media&token=692477af-3cec-482e-b54f-71b84a68bed8',
        name: 'CLUB OCTBASS',
        gmap_url:'https://maps.app.goo.gl/ifKna2JbpGqmxj92A',
        meta:'CLUB OCTBASS オクトベース SPRA エスプラ',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/octbass.jpg?alt=media&token=60c37661-38bd-46ea-ae59-5c8150b5b07d',
        categories: ['ナイトクラブ'],
        bio_url: 'https://www.octbass.info/',
        other_url:'https://www.instagram.com/club_octbass/',
        other_text:'INSTAGRAM',
        bio_summary: '茨城県つくば市の天久保一丁目繁華街にあるClubです。毎週末各ジャンルのイベントを開催。週末はローカルアーティストからメジャーアーティストまでがパーティーを開催、出演をしています。本格レシピのこだわりのお酒、アメリカンパブを思わせるスタイリッシュなラウンジスペースと、プロ用音響、照明システムを備えたダンスフロアーにセパレートされた、懐かしさや温かさが漂いつつ新感覚のクラブスタイルは地元のみならぬ県外、都内からも高い評価を得ています。',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/KqcH4LAT0wM?si=PhJAlkrNotYchgmY',
        location_city: '茨城県つくば市天久保１丁目５−４',
        location_coordinates: {
          lon: 140.1102366,
          lat: 36.0908406
        }
      },{
        id:31,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-TAIHEI.jpg?alt=media&token=34d52cf7-0c2b-4353-8018-74116dbbafd6',
        name: '大平 BIGFLAT',
        gmap_url:'https://maps.app.goo.gl/Paf8AT5mHoKBZ3BS9',
        meta:'大平 BIGFLAT Big Ben ビッグベン stillichimiya スティルイチミヤ',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/BIGFLAT.jpg?alt=media&token=9a889cb1-c47c-47e8-8350-b4320151c38f',
        categories: ['Record Shop'],
        bio_url: 'https://togenkyorecord.cart.fc2.com/',
        other_url:'https://www.instagram.com/bigflat_stillichimiya/',
        other_text:'INSTAGRAM',
        bio_summary: 'stillichimiya直営店取扱:レコード、CD、服など',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/L5JYeP4hbEo?si=LaihkRZW14-aSN7I',
        location_city: '山梨県山梨市上神内川１２５９−２',
        location_coordinates: {
          lon: 138.6837713,
          lat: 35.686792
        }
      },{
        id:32,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2F%20store-BLOODYANGLE.jpeg?alt=media&token=ad72d6be-a7ae-4ace-8e75-1ab7029479c5',
        name: 'BLOODY ANGLE DOUGEN TONG',
        gmap_url:'https://maps.app.goo.gl/bs5soFXPDBSkiFwG7',
        meta:'RYUZO R-RATED リュウゾウ BLOODY ANGLE DOUGEN TONG ブラッディ アングル',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/logo-BLOODYANGLE.jpeg?alt=media&token=b77bfd27-dd11-462e-9afd-e49f29b5e17f',
        categories: ['ネオ喫茶 レコード・バー'],
        bio_url: 'https://bloodyangle.tokyo/',
        other_url:'https://www.instagram.com/bloodyangledougentong/',
        other_text:'INSTAGRAM',
        bio_summary: 'R-ratedの創設者であるラッパーのRYUZOが手掛けるレコード・バー「BLOODY ANGLE」の2号店。昼は喫茶店、夜はレコード・バーの2部構成となっている。店では、専門のバイヤーが選ぶレコードが購入できる。',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/Q6NLFkGdIww?si=9JUCr3n7cd9G4PmP',
        location_city: '東京都渋谷区道玄坂２丁目１５−１ ビル 地下1階 ノア道玄坂',
        location_coordinates: {
          lon: 139.6961946,
          lat: 35.6582188
        }
      },{
        id:33,
        bg:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/store%2Fstore-TACOSBARADO.jpg?alt=media&token=27bc9413-493a-47d5-b08a-6761baf32dbc',
        name: 'TACOS BAR ADO',
        gmap_url:'https://maps.app.goo.gl/zrNCwoJDbFERXfWTA',
        meta:'TACOS BAR ADO MC GEBO タコスバーアド',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/logo-TACOSBARADO.jpg?alt=media&token=aaac903b-5d01-4e34-a7a8-32575e8add7f',
        categories: ['タコス バー'],
        bio_url: 'https://adorecords.com/bar-ado',
        other_url:'https://www.instagram.com/adochan1016/',
        other_text:'INSTAGRAM',
        bio_summary: '日々、猫と酒と笑いとGOOD MUSICの癒しの空間 BAR｢ADO｣。',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/HAiogY0jlNU?si=lR9m9eTjQliJlBt-',
        location_city: '大阪府寝屋川市錦町１８−１６',
        location_coordinates: {
          lon: 135.6159455,
          lat: 34.7619099
        }
      }
    ]
  })
}
