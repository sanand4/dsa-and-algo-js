function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false; // Different lengths, not isomorphic
  }

  const sToTMap = new Map();
  const tToSMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const ch_s = s[i];
    const ch_t = t[i];

    if (
      (sToTMap.has(ch_s) && sToTMap.get(ch_s) !== ch_t) ||
      (tToSMap.has(ch_t) && tToSMap.get(ch_t) !== ch_s)
    ) {
      return false; // Inconsistent mapping, not isomorphic
    }

    if (!sToTMap.has(ch_s) && !tToSMap.has(ch_t)) {
      sToTMap.set(ch_s, ch_t);
      tToSMap.set(ch_t, ch_s);
    }
  }

  return true;
}
//test
const s = "egg";
const t = "add";
const isomorphic = isIsomorphic(s, t);
console.log(isomorphic);
