import React from "react";
import { Loader, Dimmer, Header, Grid } from "semantic-ui-react";

export const LoaderLayout = () => {
  return (
    <div>
      <Grid centered>
        <Header size="medium">Gif Cargando</Header>
        <Grid.Row>
          <Grid.Column width={8}>
            {" "}
            <Dimmer active inverted>
              <Loader active size="large" />
            </Dimmer>
          </Grid.Column>
          <Grid.Column width={8}>
            {" "}
            <Dimmer active inverted>
              <Loader size="medium" active>
                Cargando
              </Loader>
            </Dimmer>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default LoaderLayout;
