import React from "react";
import { Container } from "@material-ui/core";

import { Welcome } from "../components";

export const HomePage: React.FC = () => {
  return (
    <main>
      <Container>
        <Welcome/>
      </Container>
    </main>
  );
};
