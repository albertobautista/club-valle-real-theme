import React from "react";
import { Header, Grid } from "semantic-ui-react";

export const MenuLayout = () => {
  return (
    <div>
      <Grid.Row textAlign="left" className="menu-bar-commerce">
        <Grid.Column
          mobile={16}
          tablet={16}
          computer={16}
          largeScreen={16}
          widescreen={16}
        >
          <Grid padded textAlign="left" verticalAlign="middle" centered>
            <Grid.Row className="no-padding-y" centered>
              <Grid.Column
                className="no-padding-x"
                textAlign="center"
                mobile={5}
                tablet={5}
                computer={3}
                largeScreen={2}
                widescreen={2}
              >
                <Header color="white" size="small" as="a" content={"Inicio"} />
              </Grid.Column>

              <Grid.Column
                className="no-padding-x"
                textAlign={"center"}
                mobile={6}
                tablet={5}
                computer={4}
                largeScreen={2}
                widescreen={2}
              >
                <Header color="white" size="small" as="a" content={"Pedidos"} />
              </Grid.Column>

              {
                <Grid.Column
                  className="no-padding-x"
                  textAlign="center"
                  mobile={5}
                  tablet={5}
                  computer={3}
                  largeScreen={2}
                  widescreen={2}
                >
                  <Header
                    color="white"
                    size="small"
                    as="a"
                    content={"Facturas"}
                  />
                </Grid.Column>
              }
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </div>
  );
};
export default MenuLayout;
