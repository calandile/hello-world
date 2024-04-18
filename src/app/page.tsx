import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <header><Navbar /></header>
          <section className="hello">
            <div className="container">
              <h1>
                <span>Hi! I&apos;m Wiktoria.</span><br /><span>A</span> full stack developer<br /><span>passionate</span> about creating<br /><span>truly beautiful</span> and efficient<br /><span>digital products.</span>
              </h1>
            </div>
          </section>
        <footer><Footer /></footer>
      </div>
  </main>
  );
}
