import React from "react";
import { Container } from "@material-ui/core";

import { RegistrationForm } from "../components";

export const RegistrationPage: React.FC = () => {
  return (
    <main>
      <Container>
        <RegistrationForm/>
      </Container>
    </main>
  );
}
