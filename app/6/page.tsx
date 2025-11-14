export default function Page() {
  return (
    <div className="w-full h-full grid grid-cols-3 overflow-auto">
      <div className="col-start-1 flex flex-col gap-7 items-center border-r p-4">
        <div className="w-full h-auto flex flex-col gap-2">
          <h2 className="text-xl font-bold mb-7">작업 과정</h2>
          <p className="w-max-[20rem] break-keep">1. 기획팀에서 게임 구성요소와 세계관 설정</p>
          <p className="w-max-[20rem] break-keep">2. placeholder 모델과 placeholder 게임을 넣어 모든 페이지와 3d 씬의 틀 짜 두기</p>
          <p className="w-max-[20rem] break-keep">3. 팀원들이 3d모델을 만들면 씬에 넣어 배치하고, 조명과 효과를 입히고, 피드백을 받으며 맵을 만들기.</p>
          <p className="w-max-[20rem] break-keep">4. 한 사회의 맵을 담당한 팀원들로부터 각각 3개의 게임 아이디어를 받고, 구체화시켜서 구현하고, 피드백 받기.</p>
          <img src='/time-game-1.png' />
        </div>
      </div>

      <div className="col-start-2 flex flex-col gap-7 items-center border-r p-4">
        <div className="w-full h-auto flex flex-col gap-2">
          <h2 className="text-xl font-bold mb-7">아쉬운 점</h2>
          <p className="w-max-[20rem] break-keep">— open ai api를 활용한 실시간 텍스트 생성이 다소 오래 걸리는 점이 아쉬웠습니다.</p>
          <p className="w-max-[20rem] break-keep">— 후반부에 작업이 몰려 계획했던 테스트 기간을 갖지 못했습니다.</p>
          <p className="w-max-[20rem] break-keep">— 관람객의 예측 불가능한 행동, 개발 시와 다른 환경 등으로 인한 크고 작은 오류들이 있어 전시 경험을 방해하기도 했습니다.</p>
          <p className="w-max-[20rem] break-keep">— 마우스/Xbox 컨트롤러를 이용한 컨트롤 방법이 게임 전체에서 확실하게 통일되어 있지 않거나 직관적이지 않아 관람객들이 혼란을 겪기도 했습니다.</p>
          <p className="w-max-[20rem] break-keep">— 게임이 동작하게 하는 것에 집중하여 빠르게 만들다 보니 three.js에 대한 이해가 부족했습니다.</p>
        </div>
      </div>

      <div className="col-start-3 flex flex-col gap-7 items-center p-4">
        <div className="w-full h-auto flex flex-col gap-2">
          <h2 className="text-xl font-bold mb-7">알게 된 점</h2>
          <p className="w-max-[20rem] break-keep">— 게임과 같이 외부 변수가 많은 작업을 선보일 경우 테스트 기간을 넉넉히 잡아 오류를 줄여야겠다고 생각했습니다.</p>
          <p className="w-max-[20rem] break-keep">— 특히 전시를 할 경우 변수를 최대한 통제해 안정성을 확보하는 것이 먼저임을 깨달았습니다.</p>
          <p className="w-max-[20rem] break-keep">— 전시에서 엑스박스 컨트롤러를 사용했는데, 컨트롤러를 전혀 사용해보지 않은 사람에서부터 매우 익숙한 사람까지 조작법을 받아들이는 난이도가 천차만별임을 알게 되었습니다.</p>
          <p className="w-max-[20rem] break-keep">— 사람들은 조작법 안내 설명문을 절대 읽지 않는다는 것을 알게 되었습니다.</p>
          <p className="w-max-[20rem] break-keep">— 초반-중반까지의 틀을 짜 놓는 과정이 간단하고 논리적이었다고 해서 그 부산물을 마무리하는 후반부 작업의 비중을 간과하면 안된다는 것을 알게 되었습니다.</p>
          <p className="w-max-[20rem] break-keep">— 팀 내 원활한 소통의 중요성을 알게 되었습니다.</p>
        </div>
      </div>
    </div>
  )
}