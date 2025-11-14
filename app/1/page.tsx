export default function Page() {
  return (
    <div className="w-full h-full grid grid-cols-4 gap-4 pt-4">
      <div className="flex flex-col gap-14 pt-4">
        <h1 className="text-5xl font-bold">C.pnia</h1>
        <div>
          <p>2025.9.1-11.6</p>
          <p>팀 작업(7인)</p>
          <p>Typescript, React, Three.js, Rapier, Openai api</p>
        </div>
        <p className="max-w-[20rem] break-keep">국민대학교 제18회 조형전 기획전에서 전시할 게임을 만들었습니다. 기획과 ui 디자인에 참여했고, 개발을 맡아 했습니다.</p>
      </div>
      <video controls className="w-full h-full col-start-2 col-span-3 bg-black rounded-lg">
        <source src="https://res.cloudinary.com/dvsthdqjs/video/upload/v1762332137/work_10.mp4"/>
      </video>
    </div>
  )
}