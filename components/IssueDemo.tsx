import { StyledButton } from "./StyledButton/StyledButton"

export const IssueDemo = () => (
  <>
    <p>
      Some paragraph followed by a @emotion/styled component styled with the sx
      prop:
    </p>
    <StyledButton
      sx={{ backgroundColor: "black", border: "5px dotted orange" }}
      type="button"
    >
      I do nothing!
    </StyledButton>
    <p>
      Some paragraph followed by a simple div element styled with the sx prop:
    </p>
    <button
      style={{ color: "white" }}
      sx={{ backgroundColor: "black", border: "5px dotted orange" }}
      type="button"
    >
      I do nothing!
    </button>
  </>
)
