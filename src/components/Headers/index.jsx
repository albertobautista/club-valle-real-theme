import React from "react";
import { Header, Grid } from "semantic-ui-react";

const GREYS = [
  "fullBlack",
  "black",
  "lightBlack",
  "grey",
  "lightGrey",
  "midWhite",
  "white",
];

const COLORS = ["fullBlack", "red", "green", "yellow", "blue"];

export const HeaderLayout = () => {
  return (
    <div>
      <Grid centered padded>
        <Header size="medium">Títulos</Header>
        <Grid.Row columns={7}>
          {GREYS.map((element) => (
            <Grid.Column textAlign="center">
              <Header color={element}>{element}</Header>
            </Grid.Column>
          ))}
        </Grid.Row>
        <Grid.Row columns={5}>
          {COLORS.map((element) => (
            <Grid.Column textAlign="center">
              <Header color={element}>{element}</Header>
            </Grid.Column>
          ))}
        </Grid.Row>
        <Grid.Row columns={5}>
          {COLORS.map((element) => (
            <Grid.Column textAlign="center">
              <Header as="h1" color={element}>
                H1 {element}
              </Header>
            </Grid.Column>
          ))}
        </Grid.Row>
        <Grid.Row columns={5}>
          {COLORS.map((element) => (
            <Grid.Column textAlign="center">
              <Header as="h2" color={element}>
                H2 {element}
              </Header>
            </Grid.Column>
          ))}
        </Grid.Row>
        <Grid.Row columns={5}>
          {COLORS.map((element) => (
            <Grid.Column textAlign="center">
              <Header as="h3" color={element}>
                H3 {element}
              </Header>
            </Grid.Column>
          ))}
        </Grid.Row>
        <Grid.Row columns={5}>
          {COLORS.map((element) => (
            <Grid.Column textAlign="center">
              <Header as="h4" color={element}>
                H4 {element}
              </Header>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default HeaderLayout;
