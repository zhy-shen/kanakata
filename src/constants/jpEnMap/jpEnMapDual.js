import hiragana from "../hiragana";
import katagana from "../katagana";

const jpEnMapDual = {
  ...hiragana.digraphs,
  ...katagana.digraphs,
}

export default jpEnMapDual;