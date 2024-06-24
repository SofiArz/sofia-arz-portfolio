import Particles from "./components/particles";
import Home from "./pages/home"
import Experience from "./pages/experience"

export default function Main() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <Home />
      <Experience />
    </main>
  );
}
