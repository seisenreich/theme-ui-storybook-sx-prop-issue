import { Story, Meta } from "@storybook/react"
import { StyledButton } from "./StyledButton"
import { IssueDemo } from "../IssueDemo"

export default {
  title: "Issue",
  component: StyledButton,
} as Meta

const Template: Story = () => (
  <>
    <h1>See the issue: sx prop styles are not applied</h1>
    <IssueDemo />
  </>
)
export const TheIssue = Template.bind({})
