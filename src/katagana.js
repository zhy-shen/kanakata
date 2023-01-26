const monographs = {
  ア: 'a',
  イ: 'i',
  ウ: 'u',
  エ: 'e',
  オ: 'o',

  // K
  カ: 'ka',
  キ: 'ki',
  ク: 'ku',
  ケ: 'ke',
  コ: 'ko',

  // S
  サ: 'sa',
  シ: 'shi',
  ス: 'su',
  セ: 'se',
  ソ: 'so',

  // T
  タ: 'ta',
  チ: 'chi',
  ツ: 'tsu',
  テ: 'te',
  ト: 'to',

  // N
  ナ: 'na',
  ニ: 'ni',
  ヌ: 'nu',
  ネ: 'ne',
  ノ: 'no',

  // H
  ハ: 'ha',
  ヒ: 'hi',
  フ: 'fu',
  ヘ: 'he',
  ホ: 'ho',

  // M
  マ: 'ma',
  ミ: 'mi',
  ム: 'mu',
  メ: 'me',
  モ: 'mo',

  // Y
  ヤ: 'ya',
  ユ: 'yu',
  ヨ: 'yo',

  // R
  ラ: 'ra',
  リ: 'ri',
  ル: 'ru',
  レ: 're',
  ロ: 'ro',

  // W
  ワ: 'wa',
  // ヰ: 'wi',
  // ヱ: 'we',
  ヲ: 'wo',

  // Nasal
  ン: 'n',
};

const diacritics = {
  // G
  ガ: 'ga',
  ギ: 'gi',
  グ: 'gu',
  ゲ: 'ge',
  ゴ: 'go',

  // Z
  ザ: 'za',
  ジ: 'ji',
  ズ: 'zu',
  ゼ: 'ze',
  ゾ: 'zo',

  // D
  ダ: 'da',
  ヂ: 'di',
  ヅ: 'du',
  デ: 'de',
  ド: 'do',

  // B
  バ: 'ba',
  ビ: 'bi',
  ブ: 'bu',
  ベ: 'be',
  ボ: 'bo',

  // P
  パ: 'pa',
  ピ: 'pi',
  プ: 'pu',
  ペ: 'pe',
  ポ: 'po',
};

const digraphs = {
  // K
  キャ: 'kya',
  キュ: 'kyu',
  キョ: 'kyo',

  // S
  シャ: 'sha',
  シュ: 'shu',
  ショ: 'sho',

  // T
  チャ: 'cha',
  チュ: 'chu',
  チョ: 'cho',

  // N
  ニャ: 'nya',
  ニュ: 'nyu',
  ニョ: 'nyo',

  // H
  ヒャ: 'hya',
  ヒュ: 'hyu',
  ヒョ: 'hyo',

  // M
  ミャ: 'mya',
  ミュ: 'myu',
  ミョ: 'myo',

  // R
  リャ: 'rya',
  リュ: 'ryu',
  リョ: 'ryo',

  // G
  ギャ: 'gya',
  ギュ: 'gyu',
  ギョ: 'gyo',

  // J
  ジャ: 'ja',
  ジュ: 'ju',
  ジョ: 'jo',

  // D
  ヂャ: 'dya',
  ヂュ: 'dyu',
  ヂョ: 'dyo',

  // B
  ビャ: 'bya',
  ビュ: 'byu',
  ビョ: 'byo',

  // P
  ピャ: 'pya',
  ピュ: 'pyu',
  ピョ: 'pyo',
};

const katagana = {
  "monographs": monographs,
  "diacritics": diacritics,
  "digraphs": digraphs
}

export default katagana;
