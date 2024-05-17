import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <div className="w-full h-full bg-cover flex flex-col items-center justify-center" style={{backgroundImage: 'url(/background.jpg)'}}>
        <div className="bg-slate-200 bg-opacity-20 w-full p-5 flex flex-col gap-2 items-center justify-center">
          <Image alt="logo" src='/logo_wc2.png' width={400} height={400} />
          <button className="btn btn-primary">Go to App</button>
          <h1 className="text-black font-bold text-5xl raleway-bold">Whisper Cash</h1>
        </div>
      </div>
    </main>
  );
}
