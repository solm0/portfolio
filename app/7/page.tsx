export default function Page() {
  return (
    <div className="w-full h-full grid grid-cols-4 gap-4 pt-4">
      <div className="flex flex-col gap-14 pt-4">
        <h1 className="text-5xl font-bold break-keep leading-[1.2em]">Through X 아카이브</h1>
        <div>
          <p>2025.10.15—11.8</p>
          <p>개인</p>
          <p>Typescript, Next.js, React, Firebase realtime database</p>
        </div>
        <p className="max-w-[20rem] break-keep">국민대학교 제18회 조형전 시각디자인학과 기획전 Through X의 아카이브 웹사이트를 제작하고, 4층 전시장 입구 공간에 전시하였습니다.</p>
      </div>
      
      <img src={'/player.png'} className="w-full h-[calc(100%-4rem)] object-contain col-start-2 col-span-3 bg-black rounded-lg" />
    </div>
  )
}