import IllustratedBackgroundBox from "components/layouts/illustrated-background-box"
import CodeStoryAnimation from "components/primitives/code-story-animation"
import { AnimatedLineProps } from "components/primitives/code-story-animation/line"
import CroppedIllustrationHero from "components/layouts/cropped-illustration-hero"
import CodeEditorBox from "components/layouts/code-editor-box"

const lines: AnimatedLineProps[] = [
  {
    frames: [{ text: "livepeer -broadcaster -network mainnet", isBold: true }]
  },
  {
    frames: [
      {
        text: "Livepeer is running on the mainnet network"
      }
    ],
    delay: 200,
    prefix: null,
    withoutTextAnimation: true,
    withoutCaret: true
  },
  {
    frames: [
      {
        text: "Creating data dir:~/.lpData/mainnet"
      }
    ],
    delay: 400,
    prefix: null,
    withoutTextAnimation: true,
    withoutCaret: true
  },
  {
    frames: [
      {
        text: "No Ethereum account found."
      }
    ],
    delay: 200,
    prefix: null,
    withoutTextAnimation: true,
    withoutCaret: true
  },
  {
    frames: [
      {
        text: "Creating new account."
      }
    ],
    prefix: null,
    withoutTextAnimation: true,
    withoutCaret: true
  },
  {
    frames: null,
    delay: 800
  }
]

const InfrastructureHero = () => (
  <CroppedIllustrationHero
    title="Infrastructure Operators"
    subtitle="Earn more by transcoding video on GPUs while mining"
    illustration={
      <IllustratedBackgroundBox
        pushSx={{ height: ["520px", "500px"], width: "100%" }}
        pushContentSx={{
          p: 0,
          height: ["488px", "468px"],
          boxShadow: "magical"
        }}
      >
        <CodeEditorBox
          sx={{ height: "100%" }}
          tabs={[
            { label: "livepeer.md", isSelected: true },
            { label: "another.md" }
          ]}
          withLineNumbers
        >
          <CodeStoryAnimation lines={lines} />
        </CodeEditorBox>
      </IllustratedBackgroundBox>
    }
  />
)

export default InfrastructureHero
