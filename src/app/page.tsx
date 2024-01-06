import EmojiPicker, { EmojiStyle, SkinTones } from "emoji-picker-react";

interface emojiInterface {
  activeSkinTone: SkinTones;
  unified: string;
  unifiedWithoutSkinTone: string;
  emoji: string; // the emoji character, for example: '😀'. Emoji ID in custom emojis
  isCustom: boolean; // whether the emoji is a custom emoji or not
  names: string[];
  imageUrl: string; // the url of the emoji image with the current emoji style applied
  getImageUrl: (emojiStyle: EmojiStyle) => string; // a function that receives an emoji style and returns the url of the emoji image with the provided style applied
}

export default function Home() {
  return (
    <h1 className="w-screen h-screen bg-yellow-400 flex items-center justify-center text-center text-[3.3rem] md:text-[4rem] leading-[1.2] font-semibold">
      Dive into Anime Paradise!
      <br />
      Share, Discover, Connect
    </h1>
  );
}
