export default function Page() {
  return (
    <div className="w-full h-full">
      <h2 className="text-2xl font-bold p-4">UI와 컨트롤</h2>
      <div className="grid grid-cols-3">
        <div className="col-start-1 flex flex-col gap-7 items-center border-r p-4">
          <h2 className="text-xl font-bold">맵 고정 UI</h2>
          <div className="w-full h-auto flex flex-col gap-4">
            <img src='/ui-1.png' className="w-1/3" />
            <p className="w-max-[20rem] break-keep">좌상단에는 국가의 로고와 설정된 NPC 성격이 나타납니다.</p>
            <img src='/ui-3.png' className="w-1/3" />
            <p className="w-max-[20rem] break-keep">우상단에는 첫 화면으로 돌아가는 버튼과 일시정지 버튼이 있습니다.</p>
            <img src='/ui-2.png' />
            <p className="w-max-[20rem] break-keep">하단에는 각 국가별 게임 3개의 진행도가 막대 그래프로 나타납니다. 진행도가 올라가면 국가의 3d심볼이 까만 실루엣에서 모습을 드러내며 완성됩니다. 3가지 게임을 모두 완성했을 경우 우측의 시민권 카드가 드러납니다.</p>
          </div>

          <p className="w-max-[20rem] break-keep">2d ui는 마우스 사용 시 클릭, Xbox 컨트롤러 사용 시 십자 버튼을 이용해 포커스를 원하는 요소로 이동시킨 후 A버튼을 눌러 최종 선택할 수 있습니다.</p>
        </div>

        <div className="col-start-2 flex flex-col gap-7 items-center border-r p-4">
          <h2 className="text-xl font-bold">맵 여닫이 UI</h2>
          <div className="flex flex-col gap-2">
            <div className="flex-1 flex gap-2">
              <img src={`/time-ui.png`} className="w-[calc((100%-1rem)*1/3)] object-contain" />
              <div className="rounded-lg flex-1 px-3 py-3 flex items-center justify-center bg-zinc-900">
                <button
                  type="button"
                  className={`
                    px-4 py-1 text-white flex items-center border-1 border-[#ffffff70] pointer-events-auto hover:opacity-50 transition-opacity cursor-pointer
                  `}
                >
                  마우스를 올려놓아 보세요
                </button>
              </div>
            </div>

            <div className="flex-1 flex gap-2">
              <img src={`/sacrifice-ui.png`} className="w-[calc((100%-1rem)*1/3)] object-contain" />
              <div className="rounded-lg flex-1 px-3 py-3 flex items-center justify-center bg-amber-700">
                <button
                  className={`
                    "w-auto px-4 py-2 rounded-full text-lg font-bold bg-yellow-300 hover:opacity-50 transition-opacity text-gray-700 break-keep pointer-events-auto shrink-0"
                  `}
                >
                  마우스를 올려놓아 보세요
                </button>
              </div>
            </div>

            <div className="flex-1 flex gap-2">
              <img src={`/entropy-ui.png`} className="w-[calc((100%-1rem)*1/3)] object-contain" />
              <div className="rounded-lg flex-1 px-3 py-3 flex items-center justify-center bg-lime-500">
                <button
                  className={`
                    "font-bold w-auto px-3 py-1 bg-gray-400 hover:opacity-50 text-gray-900 border-2 border-blue-600 break-keep transition-opacity w-auto pointer-events-auto"
                  `}
                >
                  마우스를 올려놓아 보세요
                </button>
              </div>
            </div>
          </div>
          <p className="self-start w-max-[20rem] break-keep">각 맵의 컨셉과 색에 어울리도록 디자인하였습니다.</p>
        </div>

        <div className="col-start-3 flex flex-col gap-7 items-center p-4">
          <h2 className="text-xl font-bold">게임 포탈 오브젝트</h2>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 w-full h-45">
              {[1,2,3].map(img => 
                <img key={img} src={`/time-gameportal-${img}.png`} className="w-[calc((100%-1rem)*1/3)] object-cover" />
              )}
            </div>
            <div className="flex gap-2 w-full h-45">
              {[1,2,3].map(img => 
                <img key={img} src={`/sacrifice-gameportal-${img}.png`} className="w-[calc((100%-1rem)*1/3)] object-cover" />
              )}
            </div>
            <div className="flex gap-2 w-full h-45">
              {[1,2,3].map(img => 
                <img key={img} src={`/entropy-gameportal-${img}.png`} className="w-[calc((100%-1rem)*1/3)] object-cover" />
              )}
            </div>
          </div>
          <p className="break-keep">각 국가의 게임으로 연결해주는 3d 오브젝트인 게임포탈은 맵 곳곳에 배치되어 있습니다.</p>
          <p className="break-keep">마우스 사용 시 클릭, Xbox 컨트롤러 사용 시 스틱으로 오브젝트 근처에 이동하여 오브젝트가 약간 흰색이 되었을 때 A버튼을 눌러 최종 선택할 수 있습니다.</p>
        </div> 
      </div>
    </div>
  )
}