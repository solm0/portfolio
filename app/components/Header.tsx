'use client'

import { usePathname, useRouter } from "next/navigation"
import PdfButton from "./PdfButton";

export default function Header() {
  const path = usePathname().slice(1);
  const num = Number(path);
  const router = useRouter();

  let projName;
  if (!path) projName = ''
  else if (num <= 6) projName = 'C.PNIA'
  else if (num <= 10) projName = 'Through-X 아카이브'
  else if (num <= 20) projName = 'solmi.wiki'
  else projName = ''

  return (
    <>
      <header className="fixed top-0 left-0 w-screen h-10 border-b px-4 flex items-center">
        <p>Jeong Solmi 2025</p>
        <div className="ml-auto flex gap-2">
          <p>{projName}</p>
          <p>{path ? path : 'Intro'}</p>
        </div>
      </header>
      
      <div className="fixed bottom-0 left-0 w-screen flex items-center p-4">
        <PdfButton />
        <div className="border px-1 py-1 rounded-full ml-auto w-auto h-auto flex gap-1 no-print bg-zinc-50 z-80">
          <button
            className="w-8 h-8 hover:bg-zinc-200 rounded-full transition-colors"
            onClick={() => {
              if (!path) router.push('/30')
              else if (num === 1) router.push('/')
              else router.push(`/${Number(path)-1}`)
            }}
          >
            {`<`}
          </button>
          <button
            className="w-8 h-8 hover:bg-zinc-200 rounded-full transition-colors"
            onClick={() => {
              if (num === 30) router.push('/')
              else router.push(`/${Number(path)+1}`)
            }}
            
          >
            {`>`}
          </button>
        </div>
      </div>

    </>
  )
}