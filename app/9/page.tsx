export default function Page() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold p-4">반응형 디자인</h2>
        <p className="text-sm">스마트폰에서부터 아이맥까지 다양한 폭의 화면에서 문제 없이 동작하도록 했습니다.</p>
      </div>
      <div className="grid grid-cols-4 h-[calc(100%-4rem)] overflow-hidden pb-4 gap-4">
        <div className="col-start-1 flex flex-col gap-7 items-center w-full h-full">
          <p className="absolute z-0">iframe 로딩 중...</p>
          <iframe src="https://18-vcd-exhibition.vercel.app/" className="w-full rounded-lg h-[calc(100%-4rem)] z-10" />
        </div>
        <div className="col-start-2 col-span-3 flex flex-col gap-7 items-center w-full h-full">
          <p className="absolute z-0">iframe 로딩 중...</p>
          <iframe src="https://18-vcd-exhibition.vercel.app/" className="w-full rounded-lg h-[calc(100%-4rem)] z-10" />
        </div>
      </div>
    </div>
  )
}