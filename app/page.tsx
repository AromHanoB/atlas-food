import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      <section>
        <h2>Inputs</h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "16px",
            maxWidth: "400px",
          }}
        >
          <Input label="Nome" placeholder="Digite seu nome" />

          <Input label="Email" placeholder="Digite seu email" />

          <Input label="Senha" placeholder="Digite sua senha" type="password" />

          <Input
            label="Campo com erro"
            placeholder="Digite um valor"
            error="Este campo é obrigatório"
          />

          <Input label="Desabilitado" placeholder="Não pode editar" disabled />
        </div>
      </section>
      <section>
        <h2>Textareas</h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "16px",
            maxWidth: "400px",
          }}
        >
          <Textarea label="Descrição" placeholder="Digite uma descrição..." />

          <Textarea
            label="Observações"
            placeholder="Ex.: sem cebola, ponto da carne..."
          />

          <Textarea
            label="Campo com erro"
            placeholder="Digite um texto..."
            error="Este campo é obrigatório"
          />

          <Textarea
            label="Desabilitado"
            placeholder="Não pode editar"
            disabled
          />
        </div>
      </section>
      <section>
        <h2>Cards</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginTop: "16px",
          }}
        >
          <Card>
            <Card.Header>Pedidos Hoje</Card.Header>

            <Card.Body>
              <h3>124</h3>
              <p>Pedidos realizados hoje.</p>
            </Card.Body>

            <Card.Footer>Atualizado há 5 minutos</Card.Footer>
          </Card>

          <Card>
            <Card.Header>Faturamento</Card.Header>

            <Card.Body>
              <h3>R$ 2.450,00</h3>
              <p>Receita do dia.</p>
            </Card.Body>

            <Card.Footer>Meta: R$ 3.000,00</Card.Footer>
          </Card>
        </div>
      </section>
      <section>
        <h2>Badges</h2>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginTop: "16px",
          }}
        >
          <Badge>Novo</Badge>

          <Badge variant="success">Entregue</Badge>

          <Badge variant="warning">Em preparo</Badge>

          <Badge variant="danger">Cancelado</Badge>

          <Badge variant="neutral">Rascunho</Badge>
        </div>
      </section>
    </main>
  );
}
