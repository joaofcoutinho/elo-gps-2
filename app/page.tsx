import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ParaQuemE } from "@/components/sections/ParaQuemE";
import { PorQueAgora } from "@/components/sections/PorQueAgora";
import { QuemEArthur } from "@/components/sections/QuemEArthur";
import { GradeDosDias } from "@/components/sections/GradeDosDias";
import { Investimento } from "@/components/sections/Investimento";
import { CTAFinal } from "@/components/sections/CTAFinal";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div aria-hidden="true" className="relative">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-soft/45 to-transparent" />
          <div className="pointer-events-none absolute inset-x-1/4 -top-2 h-4 bg-gradient-to-r from-transparent via-gold/15 to-transparent blur-md" />
        </div>
        <ParaQuemE />
        <PorQueAgora />
        <QuemEArthur />
        <GradeDosDias />
        <Investimento />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
