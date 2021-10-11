import React, { useState } from "react";
import { Button, Grid, Header, Confirm } from "semantic-ui-react";
const GREYS = [
  "fullBlack",
  "black",
  "lightBlack",
  "grey",
  "lightGrey",
  "midWhite",
  "white",
];

const COLORS = ["red", "green", "yellow", "blue"];

export const ButtonsLayout = () => {
  const [open, setOpen] = useState(false);

  const show = () => setOpen(true);
  const handleConfirm = () => setOpen(false);
  const handleCancel = () => setOpen(false);

  return (
    <div>
      <Grid centered>
        <Header size="medium">Botones</Header>
        <Grid.Row>
          {COLORS.map((element) => (
            <Button color={element}>{element}</Button>
          ))}
        </Grid.Row>
        <Grid.Row>
          {GREYS.map((element) => (
            <Button color={element}>{element}</Button>
          ))}
        </Grid.Row>
        <Grid.Row>
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
          <Button>Default</Button>
          <Button loading primary>
            Loading
          </Button>
        </Grid.Row>
        <Grid.Row>
          <Button onClick={show}>Abrir Modal</Button>
          <Confirm
            open={open}
            header="Encabezado de la confirmación"
            content="Mensaje personalizado..."
            cancelButton="Regresar"
            confirmButton="Continuar"
            onCancel={handleCancel}
            onConfirm={handleConfirm}
          />
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ButtonsLayout;
