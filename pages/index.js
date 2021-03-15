// pages/index.js

import dynamic from "next/dynamic";
import styled from "@emotion/styled";

const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
  ssr: false,
});

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 35vh;
`;

export default function Home() {
  return (
    <Container>
      <main>
        <h1>Next.js dark mode toggle</h1>
        <h4>Dark mode is more than just a gimmick, right?!</h4>
        <ThemeToggle />
      </main>
    </Container>
  );
}
