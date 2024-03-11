import Image from "next/image";
import Particles from "./components/particles";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
    
    </main>
  );
}
