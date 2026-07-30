import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "48px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "48px",
      }}
    >
      <header>
        <h1>Atlas Food UI Library</h1>
        <p>Área de testes dos componentes.</p>
      </header>

      <section>
        <h2>Buttons</h2>

        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            marginTop: "16px",
          }}
        >
          <Button>Primary</Button>

          <Button size="lg">Large</Button>

          <Button loading>Loading</Button>
        </div>

        <div
          style={{
            marginTop: "24px",
            maxWidth: "320px",
          }}
        >
          <Button fullWidth>Full Width</Button>
        </div>
      </section>

      <section>
        <h2>Spinners</h2>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginTop: "16px",
          }}
        >
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
      </section>
    </main>
  );
}