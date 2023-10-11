import React from "react";
import { Container } from "react-bootstrap";


const Timeline = () => {
  return (
    <section className="timeline timeline-container-wrap" id="timeline">
      <Container>
      <div className="header">
        <h1>Timeline</h1>
        <p>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <div className="timeSection">
        <div className="time">
          <div className="text">
            <h3>Hackathon Announcement</h3>
            <p>
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </div>
          <h3 className="date">November 18, 2023</h3>
        </div>
        <div className="time2">
          <div className="text2">
            <h3>Teams Registration begins</h3>
            <p>
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
          </div>
          <h3 className="date">November 18, 2023</h3>
        </div>
        <div className="time">
          <div className="text">
            <h3>Teams Registration ends</h3>
            <p>Interested Participants are no longer Allowed to register</p>
          </div>
          <h3 className="date">November 18, 2023</h3>
        </div>
        <div className="time2">
          <div className="text2">
            <h3>Announcement of the accepted teams and ideas</h3>
            <p>
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
          </div>
          <h3 className="date">November 18, 2023</h3>
        </div>
        <div className="time">
          <div className="text">
            <h3>Getlinked Hackathon 1.0 Offically Begins</h3>
            <p>
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
          </div>
          <h3 className="date">November 18, 2023</h3>
        </div>
        <div className="time2">
          <div className="text2">
            <h3>Demo Day</h3>
            <p>
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
          </div>
          <h3 className="date">November 18, 2023</h3>
        </div>
        <div className="center">
          <div className="numberSec">
            <div className="line1"></div>
            <h2 className="number">1</h2>
            <div className="line2"></div>
            <h2 className="number">2</h2>
            <div className="line2"></div>
            <h2 className="number">3</h2>
            <div className="line2"></div>
            <h2 className="number">4</h2>
            <div className="line2"></div>
            <h2 className="number">5</h2>
            <div className="line2"></div>
            <h2 className="number">6</h2>
          </div>
        </div>
        <div className="left">
          <div className="sect">
            <div className="line1"></div>
            <h2 className="number">1</h2>
          </div>
          <div className="sect">
            <div className="line1"></div>
            <h2 className="number">2</h2>
          </div>
          <div className="sect">
            <div className="line1"></div>
            <h2 className="number">3</h2>
          </div>
          <div className="sect">
            <div className="line1"></div>
            <h2 className="number">4</h2>
          </div>
          <div className="sect">
            <div className="line1"></div>
            <h2 className="number">5</h2>
          </div>
          <div className="sect">
            <div className="line1"></div>
            <h2 className="number">6</h2>
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
};

export default Timeline;
