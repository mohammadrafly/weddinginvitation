import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/kananatas.png"
          layout="fill"
          objectFit="cover"
          alt="Background"
          className="opacity-20"
        />
      </div>
      <div className="flex-grow flex items-center justify-center p-10">
        <div className="text-center text-black">
          <p className="text-base font-semibold">
            Dan diantara tanda-tanda kekuasaan-Nya ialah Dia menciptakan <br/>
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung <br/>
            merasa tenteram kepadanya, dan Dia menjadikan di antaramu <br/>
            rasa kasih dan sayang. Sungguh, pada yang demikian itu <br/>
            benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berfikir <br/>
          </p>
          <p className="text-base font-semibold mt-5">
            Qs. Ar-Ruum : 21
          </p>
          <div className="flex justify-center my-3">
            <div className="w-[200px] h-[2px] bg-[#837f638e]"></div>
          </div>
          <p className="mt-10 text-2xl font-bold my-3" style={{ fontFamily: 'custom' }}>BRIPTU Rama Wijaya, S.H</p>
          <p className="">Putra Bapak AIPTU Andi Wijaya & Ibu Sri Utriyah</p>
          <p className="my-10 font-bold">dengan</p>
          <p className="mt-10 text-2xl font-bold my-3" style={{ fontFamily: 'custom' }}>Dewi A&apos;syah, S.Pd</p>
          <p className="">Putra Bapak Mukhibbin Akhmad & Ibu Takhta Khaulillah</p>
          <div className="flex justify-center mb-5 mt-10">
            <div className="w-[200px] h-[2px] bg-[#837f638e]"></div>
          </div>
          <p className="font-semibold">
            Tanpa mengurangi rasa hormat, perkenankan kami mengundang <br/>
            Bapak/Ibu/Saudara/i, teman sekaligus sahabat, <br/>
            untuk menghadiri acara Ramah Tamah Pernikahan kami:

          </p>
          <div className="flex justify-center mt-5 font-bold text-[#837f63]">
            <p className="text-xl">SELASA</p>
          </div>
          <div className="flex justify-center mt-2 font-bold text-[#837f63]">
            <div className="">
              <div className="flex justify-center">
                <div className="w-[75px] h-[2px] bg-[#837f638e]"></div>
              </div>
              <p className="text-xl">MAR •</p>
              <div className="flex justify-center">
                <div className="w-[75px] h-[2px] bg-[#837f638e]"></div>
              </div>
            </div>
            <div className="mx-2 text-3xl">
              05
            </div>
            <div className="">
              <div className="flex justify-center">
                <div className="w-[75px] h-[2px] bg-[#837f638e]"></div>
              </div>
              <p className="text-xl">• 2024</p>
              <div className="flex justify-center">
                <div className="w-[75px] h-[2px] bg-[#837f638e]"></div>
              </div>
            </div>
          </div>
          <div className="mt-10 font-semibold">
            <p>Pukul: 19.00 - Selesai</p>
            <p>
              Bertempat: Jl. Sunankalijaga <br/>
              Perum Wirosari II, Kel, Sambong <br/>
              Kec. Batang, Kab. Batang
            </p>
            <p>Acara : Ramah tamah</p>
          </div>
        </div>
      </div>
      <div className="bg-[#837f63] text-white flex items-center justify-center text-center h-[200px] p-5">
        <div className="w-[500px]">
          <p className="text-base mb-5">
            Merupakan suatu kehormatan bagi kami, apabila bapak/ibu/saudara berkenan hadir untuk memberikan restu.
          </p>
          <p className="text-base">
            Hormat kami,<br/>
            BRIPTU Rama Wijaya, S.H & Dewi A&apos;isyah, S.Pd
          </p>
        </div>
      </div>
    </div>
  );
}
