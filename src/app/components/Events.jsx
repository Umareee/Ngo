"use client";
import { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import eventData from '../events/events.json';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventData); // Use the imported data directly
  }, []);

  // Sort events by date in descending order
  const sortedEvents = events.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Limit to the first 2 events
  const limitedEvents = sortedEvents.slice(0, 2);

  return (
    <div className="event">
      <div className="container">
        <div className="row justify-content-center">
          <div className="event-list d-flex flex-wrap justify-content-center">
            {limitedEvents.length > 0 ? (
              limitedEvents.map((event) => (
                <div key={event.id} className="event-item p-3 m-2 border">
                  <div className="event-content">
                    <div className="event-meta">
                      <p><i className="fas fa-calendar-alt"></i> {new Date(event.date).toLocaleDateString()}</p>
                      <p><i className="fas fa-clock"></i> {event.time}</p>
                      <p><i className="fas fa-list-alt"></i> {event.type}</p>
                    </div>
                    <div className="event-text">
                      <h3>{event.title}</h3>
                      <p>{event.description}</p>
                      <a className="btn btn-custom" href={event.registrationLink} target="_blank" rel="noopener noreferrer">Join Now</a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No upcoming events</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;
