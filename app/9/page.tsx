export default function Page() {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold p-4">반응형 디자인</h2>
        <p className="text-sm">스마트폰에서부터 아이맥까지 다양한 폭의 화면에서 문제 없이 동작하도록 했습니다.</p>
      </div>
      <div className="grid grid-cols-4 h-full pb-4 gap-4">
        <div className="col-start-1 flex flex-col gap-7 items-center w-full h-full">
          <iframe src="https://18-vcd-exhibition.vercel.app/" className="w-full h-full rounded-lg" />
        </div>
        <div className="col-start-2 col-span-3 flex flex-col gap-7 items-center w-full h-full">
          <iframe src="https://18-vcd-exhibition.vercel.app/" className="w-full h-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}