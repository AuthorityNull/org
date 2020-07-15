import { StatProps } from "components/primitives/stat"
import SectionLayout from "components/layouts/section"
import StatsGrid from "components/layouts/stats-grid"

const stats: StatProps[] = [
  {
    title: "45",
    label: (
      <>
        Total active <br /> infrastructure operators
      </>
    )
  },
  {
    title: "11.4",
    label: (
      <>
        Total <br /> fees earned
      </>
    ),
    color: "gradient"
  },

  {
    title: "Free",
    label: (
      <>
        Cost to activate <br />
        your node
      </>
    )
  }
]

const LetTheNumbersTalkSection = () => (
  <SectionLayout
    title="The Numbers"
    subtitle="The capacity on Livepeer's network represents access to 70,000+ GPUs, or enough to encode all the realtime video streaming through Twitch, Facebook, and Youtube combined."
    pushSx={{ py: ["80px", null, null, "160px"] }}
  >
    <StatsGrid stats={stats} />
  </SectionLayout>
)

export default LetTheNumbersTalkSection
