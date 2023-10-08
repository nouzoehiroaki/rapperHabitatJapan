import { ApiResponse } from '@/types/types'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
){
  res.status(200).json({
    total_count: 5,
    results: [
      {
        name: 'Club Brooklyn',
        meta:'BIG JOE タコス',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/brooklyn.jpg?alt=media&token=796e3714-97c7-4ac4-bdfa-7369acde7a31',
        categories: ['Food'],
        bio_url: 'https://info83959.wixsite.com/clubbrooklyn',
        other_url:'https://clubbrooklyn.thebase.in/',
        other_text:'Goods お取り寄せタコス',
        bio_summary: '旭川の中心街（駅から徒歩3分）に、本格的なタコスと、プライベートパーティーや、DJの音楽が楽しめるお店。 営業は弊社のSNSか、スケジュールをご確認下さい。',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/wlRKhhR6cp0?si=GvCwJXoHckFh1D8D',
        location_city: '北海道旭川市２条通７丁目２００４−２ BF 関ビル',
        location_coordinates: {
          lon: 142.2758335,
          lat: 43.7665857
        }
      },
      {
        name: 'JUICY BURGER',
        meta:'MEGA-G BES ハンバーガー',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/juicy.jpg?alt=media&token=79a8b4be-9cca-438c-b928-abefcd1c3d35',
        categories: ['Food'],
        bio_url: 'https://tabelog.com/tokyo/A1315/A131504/13252680/',
        other_url:'https://juicyburger.base.shop/',
        other_text:'Goods',
        bio_summary: '11:00-15:00 17:00-21:00 土日祝も休憩あり☀️テイクアウト&デリバリー 大田区羽田1-4-5 03-5735-4655 京急空港線大鳥居駅から徒歩5分 ケータリングのご注文はメールにてお願いします2020haneda@gmail.com',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/HTJoeTZxCoo?si=QoWrWvbvJIgsYeas',
        location_city: '東京都大田区羽田1-4-5',
        location_coordinates: {
          lon: 139.7426879,
          lat: 35.5516743
        }
      },
      {
        name: 'NET SIDE STORE',
        meta:'RAWAXXX MAD JAG SILENT KILLA JOINT',
        logo:'https://firebasestorage.googleapis.com/v0/b/rapperhabitatjapan.appspot.com/o/netside.jpg?alt=media&token=b1fce036-04e9-42b6-9d5d-d3758772e28f',
        categories: ['Apparel'],
        bio_url: 'https://www.netsidestore.com/',
        other_url:'https://www.instagram.com/net_side_store/',
        other_text:'INSTAGRAM',
        bio_summary: '大阪アメ村ド真ん中に構えるHIPHOP電波塔Planet Radio /Original Goods / Street Wear / Vinyl&CD / Recording Studio.',
        youtube_clipexampleurl: 'https://www.youtube.com/embed/m9pnsOdFBFk?si=u-OYE8Q9DAUGneah',
        location_city: '大阪府大阪市中央区西心斎橋２丁目１０−２９ アメリカ村センタービル 5F',
        location_coordinates: {
          lon: 135.4936934,
          lat: 34.6716003
        }
      },{
        name: 'Proceed Music Store',
        meta:'GAGLE DJ Mu-R',
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
        meta:'GOCCI',
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
        meta:'B.D.',
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
      }
    ]
  })
}
