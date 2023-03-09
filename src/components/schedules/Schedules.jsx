import scheduleData from "./data";
import "./schedule.css";
import PuruNavbar from "../PuruNavbar.jsx";

const Schedules = ({ active }) => {
  return (
    <div id="schedules">
      <PuruNavbar active={active} />
      <h1 className="fest-Schedule">Fest Scehdules</h1>
      {scheduleData.map((event) => {
        return (
          <div className="schedule">
            <div className="schedule_header">
              <h3>
                {event.title}
                <span className="date">{event.date}</span>
              </h3>

              <p className="tag_line">{event.tagLine}</p>
            </div>
            <div className="schedule_body">
              {event.imgUrl && (
                <div className="img">
                  <img src={event.imgUrl} />
                </div>
              )}

              <div className="info">
                <div>
                  <div>Venue</div>
                  <div>{event.venue}</div>
                </div>
                <div>
                  <div>Time</div>
                  <div>{event.time}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Schedules;
