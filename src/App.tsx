import iPhoneFrame from './assets/iphone.png';
import { useEffect, useState } from "react";

const iphoneImages = [
  '/works/cheduoduo/1.png', "/works/cheduoduo/2.png",
  '/works/cheduoduo/1.png', "/works/cheduoduo/2.png",
  '/works/cheduoduo/1.png', "/works/cheduoduo/2.png",
  '/works/cheduoduo/1.png', "/works/cheduoduo/2.png",
  '/works/cheduoduo/1.png', "/works/cheduoduo/2.png",
  '/works/cheduoduo/1.png', "/works/cheduoduo/2.png",
  '/works/cheduoduo/1.png', "/works/cheduoduo/2.png",
  '/works/cheduoduo/1.png', "/works/cheduoduo/2.png",
  '/works/cheduoduo/1.png', "/works/cheduoduo/2.png",
  '/works/cheduoduo/1.png', "/works/cheduoduo/2.png",
  '/works/cheduoduo/1.png', "/works/cheduoduo/2.png",
  '/works/cheduoduo/1.png', "/works/cheduoduo/2.png",
]

function App() {

  useEffect(() => {
    const ele = document.getElementById("ipl-progress-indicator");
    if (ele) {
      setTimeout(() => {
        ele.classList.add("available");
        setTimeout(() => {
          ele.outerHTML = "";
        }, 2000);
      }, 500);
    }
  }, [])

  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true);
  }, [])

  const animation = (row: number) => row % 2 === 0 ? 'translate-x-[1920px]' : 'translate-x-[-1920px]'

  return (
    <div className="w-screen h-screen relative">

      <div className="absolute top-12 left-16 z-50 cursor-pointer">
        <h1 className="font-extrabold text-2xl mb-0 leading-5">
          Yunalin Lin
        </h1>
        <p className="mt-0 opacity-70 font-bold">Portfolio</p>
      </div>

      <div
        className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden absolute top-0 right-0 z-20 noselect">
        <div
          className="flex flex-col items-center justify-center -rotate-[30deg]">
          {[1, 2, 3, 4, 5].map(row =>
            <div key={row}
                 className={"z-10 flex flex-row items-center justify-center duration-[120s] " + (isLoaded ? animation(row) : '')}>
              {iphoneImages.map((url, i) =>
                <div key={i}
                     className="relative w-48 h-96 flex flex-row items-center justify-center m-8 z-10">
                  <img
                    src={iPhoneFrame} alt=""
                    draggable={false}
                    className="w-full absolute top-0 right-0 z-10" />
                  <img
                    src={url} alt=""
                    draggable={false}
                    style={{
                      width: 170,
                      height: 370,
                      objectFit: 'cover'
                    }} />
                </div>)}
            </div>
          )}
        </div>
      </div>
      <div
        className="w-1/3 h-screen bg-primary bg-opacity-90 z-30 absolute top-0 left-0 p-16 pt-32 shadow-lg">
        <div className="flex flex-row">
          <p className="bg-accent px-2 py-1 text-xs rounded text-white">
            外包案件
          </p>
        </div>
        <h1 className="font-extrabold text-6xl mt-4">車多多</h1>
        <p className="mt-6 opacity-70">
          車多多是一款類似 Lalamove 的物流媒合平台，
          貨主可以在平台發布訂單，車主可以在平台接取適合的貨運案件。
        </p>
        <p className="mt-4 text-sm text-accent">
          #React #Expo #ReactNative #Golang #MySQL #GCP #TailwindCSS
        </p>
        <div className="mt-8">
          <h2 className="text-xl font-bold opacity-90">我負責什麼？</h2>
          <p className="mt-2 opacity-60">專案管理、技術架構搭建、產品設計、App 開發</p>
        </div>
      </div>
    </div>
  )
}

export default App
