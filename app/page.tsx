'use server';

import { Body, Footer, Header, Container } from './components';

export default async function Home() {
  return (
    <Container>
      <Header />
      <Body />
      <Footer />
    </Container>
  );
}
