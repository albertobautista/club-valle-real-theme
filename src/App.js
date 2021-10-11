import React, { Component } from "react";
import { Grid, Header, Input, Divider } from "semantic-ui-react";
import TableLayout from "./components/Table";
import ButtonsLayout from "./components/Buttons";
import LoaderLayout from "./components/Loaders";
import HeaderLayout from "./components/Headers";
import IconLayout from "./components/Icons";
import MenuLayout from "./components/Menu";

import "./index.css";
class App extends Component {
  state = { open: false };

  show = () => this.setState({ open: true });
  handleConfirm = () => this.setState({ open: false });
  handleCancel = () => this.setState({ open: false });

  render() {
    return (
      <Grid padded centered textAlign="center">
        <Grid.Row>
          <Grid.Column width={16} textAlign="center">
            <Header size="medium">Menú</Header>
            <MenuLayout />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Divider />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <ButtonsLayout />
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={16}>
            <Divider />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <HeaderLayout />
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={16}>
            <Divider inverted />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <IconLayout />
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={16}>
            <Divider inverted />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <TableLayout />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Divider inverted />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={10} textAlign="center">
            <Header size="medium">Buscador</Header>
            <Input placeholder="Search..." />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Divider inverted />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <LoaderLayout />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Divider inverted />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16} textAlign="center">
            <Header size="medium">Texto</Header>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              itaque tempora! Dolore cumque temporibus natus eius suscipit
              quaerat corrupti ratione? Molestiae voluptatem aut reprehenderit
              omnis. Iure, eligendi! Omnis, laborum recusandae?{" "}
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
