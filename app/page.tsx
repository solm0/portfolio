import Link from "./components/Link";

export default function Home() {
  return (
    <div className="w-full h-full px-4 py-8">
      <div className="w-full h-full grid grid-cols-5 gap-4">
        <div className="col-start-1 col-span-1 border-r flex flex-col gap-7 h-full">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">정솔미</h1>
            <p>Jeong Solmi</p>
          </div>
          <div className="flex flex-col">
            <p>2003.08.02</p>
            <p>010-2009-3496</p>
            <p>js5185204@gmail.com</p>
          </div>
          <div className="flex flex-col">
            <Link text="solmi.wiki" url="https://www.solmi.wiki/" />
            <Link text="github.com/solm0" url="https://github.com/solm0" />
            <Link text="instagram.com/solmi.wiki" url="https://www.instagram.com/solmi.wiki/" />
          </div>
        </div>

        <div className="col-start-2 col-span-2 border-r flex flex-col gap-21 h-full">
          <div className="flex flex-col gap-7">
            <h2 className="font-bold text-xl">학력</h2>
            <div>
              <p>2022— 국민대학교 시각디자인학과</p>
              <p className="pl-6">2025.11 기준 7/8학기 수료</p>
              <p className="pl-6">소프트웨어융합학부 부전공 중</p>
              <p>2019—2021 인천해송고등학교</p>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <h2 className="font-bold text-xl">활동</h2>
            <div>
              <p>2025 시각디자인학과 제18회 조형전 운영위원회 아카이빙팀</p>
              <p>2023— 웹코딩 소모임 코로로</p>
              <p>2023—2024 시각디자인학과 기자재실 근로</p>
              <p>2023—2024 일러스트레이션 소모임 림림</p>
            </div>
          </div>
        </div>

        <div className="col-start-4 col-span-2 flex flex-col gap-21 h-full">
          <div className="flex flex-col gap-7">
            <h2 className="font-bold text-xl">도구</h2>
            <div>
              <p>웹: Git, Typescript, React, Next.js, p5.js, three.js</p>
              <p>그래픽: Adobe Illustrator/Indesign/Photoshop, Glyphs, Figma</p>
              <p>언어: TOEFL 92 (2024.8.3)</p>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <h2 className="font-bold text-xl">분야</h2>
            <div>
              <p>웹 디자인</p>
              <p>웹 프론트엔드 개발</p>
              <p>모션/서체/그래픽 디자인</p>
            </div>
            <div className="flex flex-col gap-7 max-w-[25rem] break-keep mb-auto">
              <p>빠르고 광범위한 접근성, 한 번 설계한 시스템으로 많은 것을 수용하는 생산성, 인쇄 매체와 달리 컨텐츠를 끊임없이 축적할 수 있는 유동성이 웹만의 강점이라고 생각합니다. 저는 이러한 웹을 매개로 플랫폼을 짓는 디자이너입니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
