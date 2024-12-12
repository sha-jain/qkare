import Image from "next/image";
import HIWho from "@/components/H1Who";
import H2What from "@/components/H2What";
import H3Why from "@/components/H3Why";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <HIWho/>
      <H2What/>
      <H3Why/>
    </div>
  );
}
