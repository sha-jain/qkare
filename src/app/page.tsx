import Image from "next/image";
import HIWho from "@/components/H1Who";
import H2What from "@/components/H2What";
import H3Why from "@/components/H3Why";
import Navbar from "@/components/H0NavBar";
import Footer from "@/components/H4Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen  pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar/>
      <HIWho/>
      <H2What/>
      <H3Why/>
      <Footer/>
    </div>
  );
}
