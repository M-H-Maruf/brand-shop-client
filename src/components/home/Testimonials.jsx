/* eslint-disable react/no-unescaped-entities */
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Testimonials = () => {
  return (
    <div className="w-screen flex justify-center items-center">
      <div className="h-full w-full bg-black bg-opacity-80 flex justify-center items-center  pb-28">
        {" "}
        <div
          id="Testimonials"
          className="max-w-xl h-fit flex justify-between items-center flex-col py-20 px-14"
        >
          <div className="text-white">
            <h1
              data-aos="fade-right"
              className="aos-init aos-animate font-teko font-bold text-brand-primary text-5xl aos-init aos-animate"
            >
              TESTIMONIALS
            </h1>{" "}
            <h2
              data-aos="fade-left"
              className="font-teko text-white tracking-normal text-xl font-semibold pt-4 mb-8"
            >
              Don't Just Take Our Words For It. See What Our Past Customers Had
              To Say About It.
            </h2>
          </div>{" "}
          <Tabs>
            <TabList>
              <Tab>
                <h2 className="font-bold tracking-tighter text-brand-primary font-orbitron">
                  John
                </h2>
              </Tab>
              <Tab>
                <h2 className="font-bold tracking-tighter text-brand-primary font-orbitron">
                  Jane
                </h2>
              </Tab>
              <Tab>
                <h2 className="font-bold tracking-tighter text-brand-primary font-orbitron">
                  Sarah
                </h2>
              </Tab>
              <Tab>
                <h2 className="font-bold tracking-tighter text-brand-primary font-orbitron">
                  David
                </h2>
              </Tab>
            </TabList>

            <TabPanel>
              <h2 className="text-justify text-white h-48" data-aos="flip-up">
                "Nexus has been an invaluable partner for our business. Their
                seamless integration of products from industry giants like
                Google, Microsoft, Apple, Intel, Samsung, and Sony has given us
                a competitive edge. Their dedication to excellence and prompt
                delivery has exceeded our expectations. We look forward to a
                long and prosperous collaboration!" ---John Doe, CEO, Tech
                Innovators Inc.
              </h2>
            </TabPanel>
            <TabPanel>
              <h2 className="text-justify text-white h-48" data-aos="flip-up">
                "Our experience with Nexus has been nothing short of
                exceptional. The top-tier offerings from Google, Microsoft,
                Apple, Intel, Samsung, and Sony have revolutionized our
                operations. Their attention to detail and commitment to client
                satisfaction have been instrumental in our success. We eagerly
                anticipate further milestones together!" ---Jane Smith,
                Marketing Director, Bright Ideas Co.
              </h2>
            </TabPanel>
            <TabPanel>
              <h2 className="text-justify text-white h-48" data-aos="flip-up">
                "Nexus stands out for its remarkable expertise and unwavering
                dedication. Their curation of products from Google, Microsoft,
                Apple, Intel, Samsung, and Sony has propelled our creative
                endeavors. Their commitment to excellence is commendable, and
                we're delighted with the results. We can't wait to see what the
                future holds!" ---Sarah Johnson, Creative Director, Visionary
                Designs Studio
              </h2>
            </TabPanel>
            <TabPanel>
              <h2 className="text-justify text-white h-48" data-aos="flip-up">
                "Selecting Nexus was a game-changer for our project. Their
                thoughtful integration of offerings from Google, Microsoft,
                Apple, Intel, Samsung, and Sony has been pivotal. Their
                attention to detail and proactive communication have set them
                apart. The final outcome surpassed our expectations, and we're
                eager for future collaborations!" ---David Lee, COO, Quantum
                Technologies
              </h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
