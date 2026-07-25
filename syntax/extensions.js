/*
    When a new extension is added:
    1) Add it to extensions object
    2) Add its blocks to commands.js
    3) Add icon width/height to scratch3/blocks.js IconView
    4) Add icon to scratch3/style.js
*/

// Moved extension aliases: key is current, value is legacy.
export const movedExtensions = {
  pen: "pen",
  video: "sensing",
  music: "sound",
}

export const extensions = {
  ...movedExtensions,
  tts: "tts",
  translate: "translate",
  microbit: "microbit",
  wedo: "wedo",
  makeymakey: "makeymakey",
  ev3: "ev3",
  boost: "boost",
  gdxfor: "gdxfor",
}

// Extension aliases accepted in addition to movedExtensions.
// Key is alias, value is real extension name
export const aliasExtensions = {
  wedo2: "wedo",
  text2speech: "tts",
}
