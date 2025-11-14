export default function Page() {
  return (
    <div className="w-full h-full">
      <h2 className="text-2xl font-bold p-4">디자인 컨셉</h2>
      <div className="grid grid-cols-3">
        <div className="col-start-1 flex flex-col gap-7 items-center border-r p-4">
          <p className="w-max-[20rem] break-keep">데이터는 관점에 따라서 가치가 있을 수도, 없을 수도 있습니다. 아카이빙하는 것은 단순히 과거의 흔적을 축적하는 것이 아닙니다. 데이터를 특정한 관점으로 바라보아, 즉 데이터에 '축'을 부여하여 그에 따라 맵핑하는 작업입니다. 이번 시각디자인학과 기획전에서 아카이브 웹사이트를 제작한다고 하여 지원했습니다.</p>
          <img src='/poster.png' className="w-2/3"/>
          <p className="w-max-[20rem] break-keep">이번 기획전의 주제는 '현실과 허구의 교차'였습니다. 기울기가 서로 두 선이 만드는 x 모양으로 그 교차를 표현한 비주얼 아이덴티티를 비주얼팀으로부터 받았습니다.</p>
        </div>

        <div className="col-start-2 flex flex-col gap-7 items-start border-r p-4">
          <p className="w-max-[20rem] break-keep">서로 축의 기울기를 달리한 두 판면을 교차함으로써 웹 내에 비주얼 아이덴티티를 적용했습니다.</p>
          <div className="flex flex-col gap-1">
            <img src='/layer-1.png' />
            <p className="w-max-[20rem] break-keep">첫 번째 판면: 랜딩 페이지. 메뉴 버튼들, 기획전 출품 팀 리스트, 방명록</p>
          </div>
          <div className="flex flex-col gap-1">
            <img src='/layer-2.png' />
            <p className="w-max-[20rem] break-keep">두 번째 판면: 상세 정보</p>
          </div>
        </div>

        <div className="col-start-3 flex flex-col gap-7 items-start border-r p-4">
          <h3 className="text-xl font-bold">타이포그래피</h3>
          <p className="w-max-[20rem] break-keep">제목용으로는 비주얼팀에서 제작한 서체를 사용하였습니다.</p>
          <p className="w-max-[20rem] break-keep">본문용 서체는 비주얼팀에서 사용한 누타입의 유료 폰트 'NU 시야'의 대용으로 휴머니스트 산세리프 한글서체 '고운 돋움'의 장평을 가독성을 해치지 않을 만큼만 줄여 사용했습니다.</p>
          <h3 className="text-xl font-bold mt-14">컬러</h3>
          <div className="w-full h-40 flex gap-2">
            <div className="w-full flex-3 bg-neutral-500 rounded-lg flex items-center justify-center">#737373</div>
            <div className="w-full flex-1 bg-neutral-200 rounded-lg flex items-center justify-center border border-[#73737350]">#e5e5e5</div>
            <div className="w-full flex-1 bg-neutral-50 rounded-lg flex items-center justify-center border border-[#73737350]">#fafafa</div>
          </div>
          <p className="w-max-[20rem] break-keep">기획전 포스터는 은지에 흰색 단색으로 인쇄되었습니다. 포스터와의 통일감을 주면서 가독성을 해치지 않는 명도 대비를 유지하였습니다.</p>
        </div> 
      </div>
    </div>
  )
}