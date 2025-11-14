import Book from "../components/Book";
import ImageModal from "../components/ImageModal";

export default function Page() {
  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-2 py-4">
      <div className="col-start-1 col-span-1 row-start-1 row-span-1 p-4 flex flex-col gap-7 border-r">
        <h2 className="text-2xl font-bold">컴포넌트</h2>
        <p className="max-w-[25rem] break-keep">전시장 입구에서 간단히 작품들을 미리 둘러보기 편하도록, 그리고 전시 이후에 작품들을 보기 편하도록 다음과 같은 컴포넌트들을 만들었습니다.</p>
      </div>
      <div className="relative col-start-2 col-span-1 row-start-1 row-span-1">
        <h2 className="absolute top-4 left-4 text-2xl font-bold">인터랙티브 지도</h2>
        <iframe src="https://18-vcd-exhibition.vercel.app/map" className="w-full h-full" />
      </div>
      <div className="relative col-start-1 col-span-1 row-start-2 row-span-1 flex items-center justify-center border-t border-r">
        <h2 className="absolute top-4 left-4 text-2xl font-bold">책</h2>
        <div className="w-3/4 h-auto pt-10">
          <Book pages={Array.from({ length: 15 }, (_, i) => `/npc_${i + 1}.png`)} />
        </div>
      </div>
      <div className="relative col-start-2 col-span-1 row-start-2 row-span-1 border-t">
        <h2 className="absolute top-4 left-4 text-2xl font-bold">이미지 확대축소화면</h2>
        <ImageModal asset='/player.png' />
      </div>
    </div>
  )
}