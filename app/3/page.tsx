import Link from "../components/Link";

export default function Page() {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold p-4">AI 활용</h2>
        <p className="text-sm">
          <Link text="노션 페이지" url="https://www.notion.so/missing-greenelephant/ai-284fe61aac5b804abea1fa7f72a0fe1b" />
          에서 자세한 프롬프트와 기록을 확인하실 수 있습니다.
        </p>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-start-1 flex flex-col gap-7 items-center border-r p-4">
          <h2 className="text-xl font-bold">성격 도출</h2>
          <div className="w-full h-auto flex flex-col gap-4">
            <img src='/interview.png' />
            <p className="w-max-[20rem] break-keep">각 국가에 입장 전, 입국심사라는 이름으로 플레이어에게 문장 2개를 입력받습니다. 그리고 open ai api를 이용해 그 문장을 분석, formality, verbosity, warmth 파라미터 각각의 레벨을 도출하여 브라우저에 저장합니다. 따라서 3x3x3 총 27가지의 npc 성격이 존재합니다.</p>
            <img src='/config-ui.png' className="w-2/3" />
            <div>
              <p className="w-max-[20rem] break-keep">formality: 하십시오체 / 해요체 / 해체</p>
              <p className="w-max-[20rem] break-keep">verbosity: 단답 / 평범 / 투머치토커</p>
              <p className="w-max-[20rem] break-keep">warmth: 친근한 / 중립적인 / 적대적인</p>
            </div>
          </div>
        </div>

        <div className="col-start-2 flex flex-col gap-7 items-center border-r p-4">
          <h2 className="text-xl font-bold">일반 NPC 대사: 미리 생성</h2>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 w-full h-45">
              {[1,2,3].map(img => 
                <img key={img} src={`/time-npc-${img}.png`} className="w-[calc((100%-1rem)*1/3)] object-cover" />
              )}
            </div>
            <div className="flex gap-2 w-full h-45">
              {[1,2,3].map(img => 
                <img key={img} src={`/sacrifice-npc-${img}.png`} className="w-[calc((100%-1rem)*1/3)] object-cover" />
              )}
            </div>
            <div className="flex gap-2 w-full h-45">
              {[1,2,3].map(img => 
                <img key={img} src={`/entropy-npc-${img}.png`} className="w-[calc((100%-1rem)*1/3)] object-cover" />
              )}
            </div>
          </div>
          <p className="break-keep">일반 npc는 chat gpt 앱을 사용해 미리 생성해둔 대사 27가지 중 하나를 내보냅니다. 맵의 곳곳에 배치되어 각각 국가에서 일어나는 대표적 사회 현상들을 보여줍니다. 예: Pizza Shoot에서 피자 위에 누워 피자가 되기를 기다리는 시민, On Time에서 도박에 빠져 있는 시민</p>
        </div>

        <div className="col-start-3 flex flex-col gap-7 items-center p-4">
          <h2 className="text-xl font-bold">챗 NPC 대사: 실시간 생성</h2>
          <p className="break-keep">짧은 프로젝트 기간으로 각 국가의 세계관을 디테일하게 발전시킬 시간이 없어, ai 챗봇을 이용해 그 공백을 메우기로 했습니다. 팀원들마저 답할 수 없는 세계관에 대한 질문에 대신 생각하고 답해주는 역할입니다.</p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 w-full">
              <img src={`/time-chatnpc.png`} className="w-[calc((100%-1rem)*1/3)] object-cover" />
              <img src={`/sacrifice-chatnpc.png`} className="w-[calc((100%-1rem)*1/3)] object-cover" />
              <img src={`/entropy-chatnpc.png`} className="w-[calc((100%-1rem)*1/3)] object-cover" />
            </div>
           
          </div>
          <p className="break-keep">챗 npc는 플레이어가 입력한 질문과 브라우저에 저장되어 있는 성격을 open ai api로 전송하고, 생성된 답변을 내보냅니다. 챗npc는 일정한 간격을 유지하며 플레이어를 따라 다니며, 클릭 시 대화 창 ui가 나타납니다.</p>
          <p>챗 npc들은 전시 기간 중 소불고기 레시피를 묻는 관람객의 질문을 맥락에 적절히 맞추어 대답하는 등 거주민으로서 플레이어를 응대하는 역할을 잘 해 주었습니다.</p>
        </div>
      </div>

      
    </div>
  )
}