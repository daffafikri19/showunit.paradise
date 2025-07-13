import { CardUnit } from "./components/card-unit";
import { HeroSection } from "./components/hero";
import Arstone from "./assets/type-arstone.jpg";
import Graystone from "./assets/type-graystone.jpg";
import Omnia from "./assets/type-omnia.jpg";
import Solavista from "./assets/type-solavista.jpg";

function App() {
  return (
    <main className="relative min-h-screen w-full bg-background">
      <HeroSection />
      <div className="bg-white blur-2xl w-full h-20 absolute" />
      <section
        id="properties"
        className="pt-16 text-center w-full px-6 bg-card/40"
      >
        <h2 className="relative bg-gradient-to-b from-primary to-neutral-500 bg-clip-text font-bold text-transparent text-4xl lg:text-7xl">
          Klaster Modern
        </h2>
        <p className="text-center tracking-wider pt-4">
          VISTA menawarkan hunian dengan konsep 3C yaitu Convenient, Connected
          dan Creative yang memadukan kemewahan hidup modern dengan
          mengedepankan kenyamanan dan kemudahan yang terhubung langsung dari
          pintu rumah Anda menuju Mall Paradise Walk dalam memenuhi semua
          kemewahan gaya hidup kosmopolitan di dalam kota mandiri.
        </p>
      </section>
      <section
        id="properties"
        className="py-10 md:py-16 text-center min-h-[50vh] w-full bg-card/40"
      >
        <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-10 content-center mx-auto">
          <div className="py-10 lg:py-0">
            <CardUnit
              image={Arstone}
              title="Arstone"
              bedsize="2+1 Kamar Tidur"
              bathsize="2+1 Kamar Mandi"
              landsize="5x12 Luas Tanah"
              housesize="Luas Bangunan 57"
            />
          </div>
          <div className="py-10 lg:py-0">
            <CardUnit
              image={Graystone}
              title="Graystone"
              bedsize="2+1 Kamar Tidur"
              bathsize="2+1 Kamar Mandi"
              landsize="5x12 Luas Tanah"
              housesize="Luas Bangunan 57"
            />
          </div>
          <div className="py-10 lg:py-0">
            <CardUnit
              image={Omnia}
              title="Omnia"
              bedsize="2+1 Kamar Tidur"
              bathsize="2+1 Kamar Mandi"
              landsize="5x12 Luas Tanah"
              housesize="Luas Bangunan 57"
            />
          </div>
          <div className="py-10 lg:py-0">
            <CardUnit
              image={Solavista}
              title="Solavista"
              bedsize="2+1 Kamar Tidur"
              bathsize="2+1 Kamar Mandi"
              landsize="5x12 Luas Tanah"
              housesize="Luas Bangunan 57"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
