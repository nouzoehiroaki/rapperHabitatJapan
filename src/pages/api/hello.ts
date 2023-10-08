import { ApiResponse } from '@/types/types'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
){
  res.status(200).json({
    total_count: 10,
    results: [
      {
        name: 'TACOSTAND / CLUB BROOKLYN',
        meta:'BIG JOE ビッグジョー',
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
        name: 'JUICY BURGER',
        meta:'MEGA-G メガジー BES ベス',
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
        name: 'NET SIDE STORE',
        meta:'RAWAXXX ロウワックス MAD JAG マッドジャグ SILENT KILLA JOINT サイレントキラジョイント',
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
        name: 'Proceed Music Store',
        meta:'GAGLE ガグル DJ Mu-R ミューラー',
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
        name: 'MODULE',
        meta:'GOCCI ゴッチ',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/module.png?alt=media&token=15e37345-9cc9-46d4-bb35-707b4608e00d',
        categories: ['Select Shop'],
        bio_url: 'https://www.instagram.com/gocci_funkhawk/',
        other_url:'https://www.instagram.com/module_mtc/',
        other_text:'INSTAGRAM',
        bio_summary: '水戸MODULE LUNCH TIME SPEAKSのGOCCI氏が経営される店',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/5AHLpUG4ack?si=l9Ksy8MpT494qH9q',
        location_city: '茨城県水戸市石川１丁目４００２−３４ SIDEBMARKETmodule',
        location_coordinates: {
          lon: 140.4259395,
          lat: 36.3895344
        }
      },{
        name: '六喩',
        meta:'B.D. ビーディー',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/rokuyu.jpg?alt=media&token=e403141d-8216-48f8-822e-efdaa1e0f02f',
        categories: ['Record Shop'],
        bio_url: 'https://www.instagram.com/rokuyu20/',
        other_url:'https://giganteworks.base.shop/',
        other_text:'giganteworks',
        bio_summary: 'B.D.がプロデュースするカルチャーショップ ',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/VU4ltWF4d_M?si=UYpDqHMiiJqmUwqR',
        location_city: '栃木県那須塩原市高砂町6-7 2F',
        location_coordinates: {
          lon: 140.04820735,
          lat: 36.9723211
        }
      },{
        name: '西村整骨院',
        meta:'SHOWGO ショウゴ',
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
        name: 'AGIT',
        meta:'',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/agit.png?alt=media&token=954dc8c4-3393-4474-bdb7-d229cd205374',
        categories: ['Apparel'],
        bio_url: 'http://agitism.com/',
        other_url:'https://www.instagram.com/agit_jpn_official/',
        other_text:'INSTAGRAM',
        bio_summary: 'SENDAI STREET "PRO" SHOP',
        youtube_clipexampleurl: '',
        location_city: '宮城県仙台市青葉区一番町3-8-1 ラベルヴィビル2F',
        location_coordinates: {
          lon: 140.872753,
          lat: 38.261258
        }
      },{
        name: 'Still Diggin',
        meta:'DJ VIBLAM ビブラム',
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
        name: '波の上MUSIC&BARBER',
        meta:'四号棟',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/naminoue.jpeg?alt=media&token=0e2d5d5d-48b9-43ef-bf99-a9c2ef8818da',
        categories: ['MUSIC&CAFE&BARBER'],
        bio_url: 'https://naminouemsc.thebase.in/',
        other_url:'https://www.instagram.com/naminouemusic/',
        other_text:'INSTAGRAM',
        bio_summary: '2015年6月、那覇市辻にOPENしたCD&レコードを中心にセレクト＆取り扱いMUSIC SHOP ヒップホップ＆ダンスミュージックを中心に、大手CDショップにはない非流通作品、MIXCD、特典付きCD等有。 音好きの方、更に音楽を楽しみたい方遊びにいらしてください',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/bdqj7oqX77o?si=qP5tuTuM705biwB2',
        location_city: '沖縄県那覇市辻1-2-14 1F',
        location_coordinates: {
          lon: 127.6716864,
          lat: 26.2164951
        }
      },{
        name: 'JAMES american food',
        meta:'IMUHA BLACK DON QUICK イムハブラック',
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
        name: '味処ひょうたん',
        meta:'6th Generation',
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
        name: '鳥居亭',
        meta:'RINO LATINA II リノラティーナ',
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
        name: 'トカバナナ',
        meta:'十影 トカゲ',
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
        name: 'SOUL FACTORY',
        meta:'GORIKI ゴーリキ',
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
        name: 'THE KILLER KAN',
        meta:'JOE-CHO ジョウチョウ',
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
      }
    ]
  })
}
