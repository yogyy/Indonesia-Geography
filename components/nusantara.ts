import * as prov from './topojson/kabupaten-kota/All';

interface Prov {
  code: string;
  province: string;
  topojson?: {};
  center?: [number, number];
  scale?: number;
  zoom?: number;
}

export const provinsi: Prov[] = [
  {
    code: '11',
    province: 'Aceh (NAD)',
    topojson: prov.aceh,
    center: [97, 3],
  },
  {
    code: '12',
    province: 'Sumatera Utara',
    topojson: prov.sumut,
    center: [99, 1],
  },
  {
    code: '13',
    province: 'Sumatera Barat',
    topojson: prov.sumbar,
    center: [100.5, -2],
  },
  {
    code: '14',
    province: 'Riau',
    topojson: prov.riau,
    center: [103, 0],
  },
  {
    code: '15',
    province: 'Jambi',
    topojson: prov.jambi,
    center: [103, -2],
  },
  {
    code: '16',
    province: 'Sumatera Selatan',
    topojson: prov.sumsel,
    center: [105, -3],
  },
  {
    code: '17',
    province: 'Bengkulu',
    topojson: prov.bengkulu,
    center: [103, -3.7],
  },
  {
    code: '18',
    province: 'Lampung',
    topojson: prov.lampung,
    center: [106, -5],
  },
  {
    code: '19',
    province: 'Kepulauan Bangka Belitung',
    topojson: prov.kbb,
    center: [107.5, -3],
  },
  {
    code: '21',
    province: 'Kepulauan Riau',
    topojson: prov.kriau,
    center: [106, 1],
  },
  {
    code: '31',
    province: 'DKI Jakarta',
    topojson: prov.jakarta,
    center: [106.88, -6.25],
    scale: 1300,
  },
  {
    code: '32',
    province: 'Jawa Barat',
    topojson: prov.jabar,
    center: [108, -8],
  },
  {
    code: '33',
    province: 'Jawa Tengah',
    topojson: prov.jateng,
    center: [110.5, -8],
  },
  {
    code: '34',
    province: 'DI Yogyakarta',
    topojson: prov.jogja,
    center: [110.5, -8],
    scale: 800,
  },
  {
    code: '35',
    province: 'Jawa Timur',
    topojson: prov.jatim,
    center: [113, -8.1],
  },
  {
    code: '36',
    province: 'Banten',
    topojson: prov.banten,
    center: [106.2, -6.6],
    scale: 600,
  },
  {
    code: '51',
    province: 'Bali',
    topojson: prov.bali,
    center: [115.2, -8.4],
    scale: 800,
  },
  {
    code: '52',
    province: 'Nusa Tenggara Barat (NTB)',
    topojson: prov.ntb,
    center: [117.3, -8.7],
    scale: 500,
  },
  {
    code: '53',
    province: 'Nusa Tenggara Timur (NTT)',
    topojson: prov.ntt,
    center: [122, -9.5],
    scale: 300,
  },
  {
    code: '61',
    province: 'Kalimantan Barat',
    topojson: prov.kalbar,
    center: [112, -1],
  },
  {
    code: '62',
    province: 'Kalimantan Tengah',
    topojson: prov.kalteng,
    center: [114, -2],
  },
  {
    code: '63',
    province: 'Kalimantan Selatan',
    topojson: prov.kalsel,
    center: [115.7, -3],
    scale: 300,
  },
  {
    code: '64',
    province: 'Kalimantan Timur',
    topojson: prov.kaltim,
    center: [117, 0],
  },
  {
    code: '65',
    province: 'Kalimantan Utara',
    topojson: prov.kalut,
    center: [117, 2.4],
  },
  {
    code: '71',
    province: 'Sulawesi Utara',
    topojson: prov.sulut,
    center: [126, 2.5],
    scale: 250,
  },
  {
    code: '72',
    province: 'Sulawesi Tengah',
    topojson: prov.sulmid,
    center: [122, -1.2],
    scale: 222,
  },
  {
    code: '73',
    province: 'Sulawesi Selatan',
    topojson: prov.sulsel,
    center: [121, -4.9],
    scale: 211,
  },
  {
    code: '74',
    province: 'Sulawesi Tenggara',
    topojson: prov.sultng,
    center: [123, -5],
    scale: 250,
  },
  {
    code: '75',
    province: 'Gorontalo',
    topojson: prov.gorontalo,
    center: [122.5, 0.4],
    scale: 400,
  },
  {
    code: '76',
    province: 'Sulawesi Barat',
    topojson: prov.sulsel,
    center: [120, -2.4],
    scale: 350,
  },
  {
    code: '81',
    province: 'Maluku',
    topojson: prov.maluku,
    center: [130, -6],
  },
  {
    code: '82',
    province: 'Maluku Utara',
    topojson: prov.malukuutara,
    center: [128, 0],
    scale: 250,
  },
  {
    code: '91',
    province: 'Papua',
    topojson: prov.papua,
    center: [138, -5],
    scale: 100,
  },
  {
    code: '92',
    province: 'Papua Barat',
    topojson: prov.papuabarat,
    center: [133, -3],
  },
  {
    code: '93',
    province: 'Papua Selatan',
    topojson: prov.papua,
    center: [137, -5],
    scale: 100,
  },
  {
    code: '94',
    province: 'Papua Tengah',
    topojson: prov.papua,
    center: [137, -5],
    scale: 100,
  },
  {
    code: '95',
    province: 'Papua Pegunungan',
    topojson: prov.papua,
    center: [137, -5],
    scale: 100,
  },
];
