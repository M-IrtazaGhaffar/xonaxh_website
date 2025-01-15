import React, { useState } from "react";

function About() {
  const [Verses, setVerses] = useState([
    {
      arabic:
        "وَأَوْفُوا الْكَيْلَ إِذَا كِلْتُمْ وَزِنُوا بِالْقِسْطَاسِ الْمُسْتَقِيمِ ذَٰلِكَ خَيْرٌ وَأَحْسَنُ تَأْوِيلًا",
      english:
        "Give full measure when you measure and weigh with an even balance. That is the best [way] and best in result.",
      urdu: "جب ناپو تو پورا ناپو اور جب تولنے لگو تو سیدھی ترازو سے تولو، یہی بہتر ہے اور انجام کے لحاظ سے بھی اچھا ہے۔",
      ref: "Surah Al-Isra 17:35",
    },
    {
      arabic:
        "وَيْلٌ لِلْمُطَفِّفِينَ \\ الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ \\ وَإِذَا كَالُوهُمْ أَوْ وَّزَنُوهُمْ يُخْسِرُونَ",
      english:
        "Woe to those who give less [than due], who when they take a measure from people, take it in full. But if they give by measure or by weight to them, they cause loss.",
      urdu: "تباہی ہے ناپ تول میں کمی کرنے والوں کے لیے، جو لوگوں سے ناپ لیتے ہیں تو پورا لیتے ہیں اور جب انہیں ناپ کر یا تول کر دیتے ہیں تو کم دیتے ہیں۔",
      ref: "Surah Al-Mutaffifin 83:1-3",
    },
    {
      arabic:
        "الَّذِينَ يَأْكُلُونَ الرِّبَا لَا يَقُومُونَ إِلَّا كَمَا يَقُومُ الَّذِي يَتَخَبَّطُهُ الشَّيْطَانُ مِنَ الْمَسِّ ذَٰلِكَ بِأَنَّهُمْ قَالُوا إِنَّمَا الْبَيْعُ مِثْلُ الرِّبَا وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا",
      english:
        "Those who consume interest cannot stand [on the Day of Resurrection] except as one stands who is being beaten by Satan into insanity. That is because they say, 'Trade is [just] like interest.' But Allah has permitted trade and has forbidden interest.",
      urdu: "جو لوگ سود کھاتے ہیں وہ قیامت کے دن ایسے اٹھیں گے جیسے وہ شخص جسے شیطان نے چھو کر پاگل بنا دیا ہو۔ یہ اس لیے کہ وہ کہتے تھے: تجارت بھی تو سود کی مانند ہے، حالانکہ اللہ نے تجارت کو حلال کیا ہے اور سود کو حرام۔",
      ref: "Surah Al-Baqarah 2:275",
    },
  ]);
  return (
    <div
      className="p-10 text-center flex flex-col gap-10 items-center justify-center"
      style={{ minHeight: "75vh" }}
    >
      <h3 className="text-5xl pb-5 text-center">About Us</h3>
      {Verses.map((ele) => {
        return (
          <div>
            <p className="font-arabic">{ele.arabic}</p>
            <p>{ele.english}</p>
            <p className="font-urdu">{ele.urdu}</p>
            <p className="font-urdu text-xs p-3">({ele.ref})</p>
          </div>
        );
      })}
      <p>
        Xonaxh Pakistan was started back in 2023 under the leadership of its
        founder <span className="font-bold">Mr. Muhammad Irtaza Ghaffar</span>,
        a Software Engineer. Stretching a span of high Quality years, Xonaxh
        Pakistan continues its bequest to cater the modern textile solutions
        globally. Xonaxh Pakistan emerged as a fashion retail brand in 2023 with
        the inauguration of its very first outlet (Online), starting the journey
        with its enticing unstitched/stitched category. Over the years, Xonaxh
        Pakistan has stood along with the fashion dynamics and trends and
        further expanded by tapping into various other categories such as
        Ready-to-Wear line for Women, Fabrics and Ready-to-Wear for Men, Kids
        range, Accessories and Footwear. With a chain of best managers all over
        Pakistan, Xonaxh Pakistan has infiltrated its presence in the fashion
        apparel sector as one of the leading brands in Pakistan. We weave
        fashionable lifestyle for contemporary individuals through excellent
        customer experience built around quality, eclecticism and innovation.
        <div className="flex pt-20 pb-5">For More Information:</div>
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
          </svg>
          Email:care@xonaxh.com.pk
        </div>
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
          Whatsapp: +92-325 1152092
        </div>
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-instagram"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
          </svg>
          Instagram:
        </div>
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
          Facebook:
        </div>
        <br />
        <div>
          <h4 className="text-xl">Our Availability</h4>
          <p>Monday - Saturday, 9:00 am to 6:00 pm PST</p>
        </div>
      </p>
    </div>
  );
}

export default About;
