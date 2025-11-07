import Animate from "../components/Animate";

export default function Home() {
  return (
    <main className="page-wrap">
      <Animate as="h1" variant="fade-up">VOIXE</Animate>
      <Animate as="p" variant="fade-up" delay={1}>
        <em>“To express who you are without saying a word.”</em>
      </Animate>
      <Animate as="div" variant="fade-up" delay={2}>
        <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
          <a className="btn-supreme-black" href="/shop">shop</a>
          <a className="btn-outline" href="/lookbook">lookbook</a>
        </div>
      </Animate>
    </main>
  );
}
