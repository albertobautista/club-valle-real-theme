import React from "react";
import { Icon, Header, Grid } from "semantic-ui-react";
const COLORS = ["fullBlack", "red", "green", "yellow", "blue"];
export const IconLayout = () => {
  return (
    <div>
      <Grid centered>
        <Header size="medium">Íconos</Header>
        <Grid.Row columns={5}>
          {COLORS.map((element) => (
            <Grid.Column textAlign="center">
              <Icon color={element} name="users" />
            </Grid.Column>
          ))}
        </Grid.Row>
        <Grid.Row columns={5}>
          {COLORS.map((element) => (
            <Grid.Column textAlign="center">
              <Icon color={element} name="shopping cart" />
            </Grid.Column>
          ))}
        </Grid.Row>
        <Grid.Row columns={5}>
          {COLORS.map((element) => (
            <Grid.Column textAlign="center">
              <Icon color={element} name="plus" />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default IconLayout;
