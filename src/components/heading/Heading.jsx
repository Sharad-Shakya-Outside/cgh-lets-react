import { Container } from "../container/Container"

export const Heading = ({ children }) => {
  return (
    <>
      <Container>
        <h1 className="max-w-[810px] tracking-[-0.5px] text-4xl mb-[90px] font-normal">
          {children}
        </h1>
      </Container>
    </>
  )
}
