export default function Page() {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold p-4">게임</h2>
        <p className="text-sm">플레이어가 각 사회의 활동에 참여하고, 그 가치관에 동화되는 과정을 게임으로 비유합니다.</p>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-start-1 flex flex-col gap-7 items-center border-r p-4">
          <div className="w-full h-auto flex flex-col gap-2">
            <h2 className="text-xl font-bold">On Time의 게임</h2>
            <img src='/time-game-1.png' />
            <p className="w-max-[20rem] break-keep">1. 인디언 포커: 주민 이기기</p>
            <img src='/time-game-2.png' />
            <p className="w-max-[20rem] break-keep">2. 슬롯 머신: 시간 따기</p>
            <img src='/time-game-3.png' />
            <p className="w-max-[20rem] break-keep">3. 룰렛: 시간 따기</p>
          </div>
        </div>

        <div className="col-start-2 flex flex-col gap-7 items-center border-r p-4">
          <div className="w-full h-auto flex flex-col gap-2">
            <h2 className="text-xl font-bold">Pizza Shoot의 게임</h2>
            <img src='/sacrifice-game-1.png' />
            <p className="w-max-[20rem] break-keep">1. 스나이퍼 게임: 시간 내 스파이 피자 재료 저격하기</p>
            <img src='/sacrifice-game-2.png' />
            <p className="w-max-[20rem] break-keep">2. 과녁 맞추기: 피자판에 주민 쏘아 넣기</p>
            <img src='/sacrifice-game-3.png' />
            <p className="w-max-[20rem] break-keep">3. 대화형 게임: 피자가 되기 싫어 도망친 주민 찾아 설득하기</p>
          </div>
        </div>

        <div className="col-start-3 flex flex-col gap-7 items-center border-r p-4">
          <div className="w-full h-auto flex flex-col gap-2">
            <h2 className="text-xl font-bold">Entropy의 게임</h2>
            <img src='/entropy-game-1.png' />
            <p className="w-max-[20rem] break-keep">1. 피아노 타일: 올바른 타일을 선택해 길 건너기</p>
            <img src='/entropy-game-2.png' />
            <p className="w-max-[20rem] break-keep">2. 타겟 파괴: 나침반을 보고 타겟의 위치 파악해 파괴하기</p>
            <img src='/entropy-game-3.png' />
            <p className="w-max-[20rem] break-keep">3. 탈출하기: 엔트로피 조각을 피해 탈출하기</p>
          </div>
        </div>
      </div>
    </div>
  )
}