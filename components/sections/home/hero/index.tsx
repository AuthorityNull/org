/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Link as A } from "theme-ui";
import { useRef, useEffect, useState } from "react";
import gsap, { Power1 } from "gsap";
import Globe from "./globe";
import VideoSwapper from "./video-swapper";
import GlobeDot from "./globe-dots";
import Divider from "components/primitives/divider";
import { FiArrowUpRight } from "react-icons/fi";

const playbackIds = [
  "82401hx25ekwnbcy",
  "9cc5basqntozo7i8",
  "22c7d81cqw3q6j4s",
  "edc93flxfoyexna9",
];
const videos = playbackIds.map(
  (pid) => `https://lp-playback.com/hls/${pid}/video`
);

const HomeHero = ({ title, subtitle, cta, videoLabel }) => {
  const [globeDotIndex, setGlobeDotIndex] = useState(0);
  const animationTimelineRef = useRef<gsap.core.Timeline>();
  const videoBoxRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  const onVideoChange = () => {
    if (globeDotIndex < 3) {
      setGlobeDotIndex(globeDotIndex + 1);
    } else {
      setGlobeDotIndex(0);
    }
  };

  useEffect(() => {
    if (!dotsRef.current || !videoBoxRef.current) return;

    animationTimelineRef.current = gsap.timeline({
      defaults: {
        delay: 1,
        duration: 0.2,
        ease: Power1.easeOut,
        autoAlpha: 1,
      },
    });

    animationTimelineRef.current.to(headerRef.current, {
      opacity: 1,
    });

    animationTimelineRef.current.to(
      dotsRef.current.getElementsByClassName("highlight-dot"),
      {
        duration: 1,
        opacity: 1,
        stagger: {
          each: 0.2,
          from: "center",
          grid: "auto",
        },
      }
    );

    animationTimelineRef.current.to(videoBoxRef.current, { opacity: 1 }, "-=1");

    animationTimelineRef.current.to(
      dotsRef.current.getElementsByClassName("highlight-dot"),
      {
        duration: 2,
        y: 10,
        repeat: -1,
        yoyo: true,
        ease: "power0.inOut",
        stagger: {
          each: 0.1,
          from: "center",
          grid: "auto",
        },
      }
    );
  }, [animationTimelineRef, dotsRef, videoBoxRef]);

  return (
    <Box sx={{ position: "relative" }}>
      <Container
        variant="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 40px)",
          overflow: "visible",
          pt: ["100px", "150px"],
          pb: 0,
          maxWidth: "100%",
        }}>
        <span
          ref={headerRef}
          sx={{
            opacity: 0,
            textAlign: "center",
          }}>
          <Box
            sx={{
              maxWidth: "5xl",
              mb: "28px",
              zIndex: "general",
              position: "relative",
            }}>
            <Heading sx={{ variant: ["text.heading.2", "text.heading.1"] }}>
              {title ? (
                title
              ) : (
                <>
                  The&nbsp;
                  <Text
                    as="span"
                    sx={{
                      pr: ["2px", "4px"], // Fix text being clipped
                      background: ({ colors }) =>
                        `linear-gradient(90deg, #00A55F 0%, ${colors.gradient.mid} 100%)`,
                      variant: "text.gradientBase",
                    }}>
                    World's
                  </Text>{" "}
                  <Text
                    as="span"
                    sx={{
                      background: ({ colors }) =>
                        `linear-gradient(90deg, ${colors.gradient.mid} 0%, #4CF1AC 100%)`,
                      variant: "text.gradientBase",
                    }}>
                    Open&nbsp;
                  </Text>
                  <br sx={{ display: ["none", null, "block"] }} />
                  Video Infrastructure
                </>
              )}
            </Heading>
            <Divider isTransparent isVertical size={["12px", "16px", "24px"]} />
            <Heading variant="section.subtitle" sx={{ maxWidth: 700 }}>
              {subtitle}
            </Heading>
          </Box>

          <A
            variant="buttons.primary"
            href={`#get-started`}
            sx={{
              zIndex: "general",
              position: "relative",
            }}>
            {cta}
          </A>
          <A
            target="_blank"
            variant="buttons.transparent"
            href="https://discord.gg/livepeer"
            sx={{
              zIndex: "general",
              position: "relative",
            }}>
            Join Discord
            <i sx={{ ml: 2, fontSize: 4 }}>
              <FiArrowUpRight />
            </i>
          </A>
        </span>

        <Box
          sx={{
            position: "relative",
            width: "100vw",
            height: "100%",
            overflow: "hidden",
          }}>
          <Globe />

          <div ref={dotsRef}>
            <GlobeDot
              pulsating={globeDotIndex === 0}
              image="/images/hero/avatar-1.png"
              left={["10%", "35%"]}
              top={["5%", "15%"]}
            />
            <GlobeDot
              pulsating={false}
              image="/images/hero/avatar-eth.png"
              left={["13%", "26%"]}
              top={["35%", "35%"]}
            />
            <GlobeDot
              pulsating={false}
              image="/images/hero/avatar-livepeer.png"
              left={["5%", "28%"]}
              top={["65%", "68%"]}
            />
            <GlobeDot
              pulsating={globeDotIndex === 1}
              image="/images/hero/avatar-2.png"
              left={["35%", "32%"]}
              top={["40%", "50%"]}
            />

            <GlobeDot
              pulsating={globeDotIndex === 2}
              image="/images/hero/avatar-3.png"
              left={["70%", "67%"]}
              top={["35%", "62%"]}
            />
            <GlobeDot
              pulsating={globeDotIndex === 3}
              image="/images/hero/avatar-4.png"
              left={["50%", "55%"]}
              top={["15%", "20%"]}
            />
            <GlobeDot
              pulsating={false}
              image="/images/hero/avatar-livepeer.png"
              left={["75%", "65%"]}
              top={["0", "22%"]}
            />
            <GlobeDot
              pulsating={false}
              image="/images/hero/avatar-eth.png"
              left={["85%", "75%"]}
              top={["75%", "70%"]}
            />
          </div>
          <div
            ref={videoBoxRef}
            sx={{
              position: "absolute",
              left: "50%",
              bottom: "-2%",
              transform: "translateX(-50%)",
              zIndex: "100",
              borderRadius: "6px",
              overflow: "hidden",
              opacity: 0,
            }}>
            <VideoSwapper
              videoLabel={videoLabel}
              sources={videos}
              onChange={onVideoChange}
            />
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeHero;
