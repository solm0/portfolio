import Image from "next/image";
import { jersey15, vt323 } from "../fonts";

export default function Page() {
  return (
    <div className="w-full h-full grid grid-cols-3">
      <div className="col-start-1 flex flex-col gap-7 items-center border-r p-4">
        <h2 className="text-xl font-bold">설정</h2>
        <div className="w-full h-auto flex flex-col gap-4">
          <p className="w-max-[20rem] break-keep">C.PNIA에는 인간과 AI의 합작으로 만들어진 3개의 가상 사회와 그 시민(npc)들이 있습니다. 플레이어는 오픈 월드를 탐험하고 AI NPC와 상호작용하면서 각 사회에 대한 정보를 모으게 됩니다. 그리고 퀘스트를 깨 시민권을 획득합니다. 획득한 시민권은 홈화면의 WALLET에서 확인할 수 있습니다.</p>
          <div
            className={`text-zinc-50 w-full h-40 bg-zinc-800 break-keep text-[8rem] flex justify-center items-center gap-2 animate-logoCycle`}
          >
            <span className={`letter font-bold ${jersey15.className}`}>C</span>
            <span className={`letter font-bold ${jersey15.className}`}>P</span>
            <span className={`letter font-bold ${jersey15.className}`}>N</span>
            <span className={`letter ${vt323.className}`}>I</span>
            <span className={`letter ${vt323.className}`}>A</span>
            <span className={`letter font-bold ${jersey15.className}`}>.</span>
          </div>
          <p className="w-max-[20rem] break-keep">게임의 핵심적인 요소인 'AI NPC'가 애너그램이자 게임의 이름인 C.PNIA로 바뀌는 모션을 사용하여 로고타입을 만들었습니다.</p>
        </div>

        <div className="w-full h-auto flex flex-col gap-4">
          <img src='https://res.cloudinary.com/dvsthdqjs/image/upload/v1762332084/a/work_02.jpg' />
          <p className="w-max-[20rem] break-keep">게임의 첫 화면에는 각 국가의 3d 심볼이 보입니다. 각 심볼을 클릭하면 포커스가 맞춰지며 맵에 들어갈 수 있게 됩니다.</p>
        </div>
      </div>
      <div className="col-start-2 flex flex-col gap-7 items-center border-r p-4">
        <h2 className="text-xl font-bold">캐릭터 시스템</h2>
        <div className="w-full h-auto flex flex-col gap-4">
          <img src='/player.png' />
          <p className="w-max-[20rem] break-keep">플레이어의 캐릭터입니다. 모든 NPC들은 기본 뼈대와 애니메이션 4가지(idle, walk, jump, arm)를 플레이어와 공유하며 국가와 개체마다 머리 위에 얹은 아이템이나 컬러가 달라집니다.</p>
          <div className="w-full h-auto flex gap-2 flex-wrap">
            {Array.from({length:15}, (_, i) => 
              <Image key={i} src={`/npc_${i+1}.png`} width={100} height={100} alt="npc" className="w-[calc((100%-1.5rem)*1/4)]" />
            )}
          </div>
        </div>
      </div>
      <div className="col-start-3 flex flex-col gap-7 items-center p-4">
        <h2 className="text-xl font-bold">국가별 세계관</h2>
        <div className="flex gap-4 items-center">
          <div className="flex-1 flex flex-col gap-2">
            <img src='/time-icon.png'/>
            <img src='/time-card.png'/>
          </div>
          <div className="flex-3 break-keep flex flex-col gap-2 h-auto">
            <p className="font-bold">On Time</p>
            <p>On Time의 시민들은 정해진 시간을 가지고 태어나며, 시간을 화폐로 사용합니다. 대부분의 시민은 시간을 들여 일하는 대신 카지노에서 도박으로 시간을 증식합니다.</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex-1 flex flex-col gap-2">
            <img src='/sacrifice-icon.png'/>
            <img src='/sacrifice-card.png'/>
          </div>
          <div className="flex-3 break-keep flex flex-col gap-2 h-auto">
            <p className="font-bold">Pizza Shoot</p>
            <p>Pizza Shoot에는 공동체를 위해 자신을 피자의 재료로 바치는 의식이 있습니다. 시민들은 이를 Pizza Shoot 국민으로서의 자부심이자 인생의 목표로 여깁니다.</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex-1 flex flex-col gap-2">
            <img src='/entropy-icon.png'/>
            <img src='/entropy-card.png'/>
          </div>
          <div className="flex-3 break-keep flex flex-col gap-2 h-auto">
            <p className="font-bold">Entropy</p>
            <p>Entropy는 원래 무질서를 사랑하는 곳이었으나, 정부의 억압으로 모든 엔트로피가 큐브 안에 갇혀 시민들은 단조로운 삶을 살고 있습니다. 시민들은 큐브의 파괴와 해체를 원합니다.</p>
          </div>
        </div>
      </div>
    </div>
  )
}