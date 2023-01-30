import hiragana from "../hiragana";
import katagana from "../katagana";

const jpEnMapMono = {
  ...hiragana.monographs,
  ...hiragana.diacritics,
  ...katagana.monographs,
  ...katagana.diacritics,
}

export default jpEnMapMono;