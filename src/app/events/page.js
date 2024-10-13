"use client";
import { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import eventData from './events.json';

const EventList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [events, setEvents] = useState([]);
  const eventsPerPage = 3;

  useEffect(() => {
    setEvents(eventData); // Use the imported data directly
  }, []);
//  For Updating using github json
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch('https://raw.githubusercontent.com/username/repo/branch/events.json');
//         const data = await response.json();
//         setEvents(data);
//       } catch (error) {
//         console.error("Error fetching event data:", error);
//       }
//     };
    
//     fetchEvents();
//   }, []);

  // Sort events by date in descending order
  const sortedEvents = events.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Pagination logic
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = sortedEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Events</h2>
            </div>
            <div className="col-12">
              <a href="/">Home</a>
              <a href="#">Events</a>
            </div>
          </div>
        </div>
      </div>
  
      <div className="event">
        <div className="container">
          <div className="section-header text-center">
            <p>Upcoming Events</p>
            <h2>Be ready for our upcoming Events</h2>
          </div>
          <div className="row justify-content-center">
            <div className="event-list d-flex flex-wrap justify-content-center">
              {currentEvents.length > 0 ? (
                currentEvents.map((event) => (
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

          {/* Pagination Component */}
          <div className="pagination mt-4 text-center">
            <button
              className="btn btn-secondary me-2"
              disabled={currentPage === 1}
              onClick={() => paginate(currentPage - 1)}
            >
              Previous
            </button>
            <span>Page {currentPage}</span>
            <button
              className="btn btn-secondary ms-2"
              disabled={indexOfLastEvent >= events.length}
              onClick={() => paginate(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventList;
