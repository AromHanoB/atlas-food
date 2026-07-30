import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main
      style={{
        padding: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <Button>Primário</Button>

        <Button size="lg">
          Grande
        </Button>

        <Button loading>
          Salvando...
        </Button>
      </div>

      <div style={{ width: "320px" }}>
        <Button fullWidth>
          Largura total
        </Button>
      </div>
    </main>
  );
}