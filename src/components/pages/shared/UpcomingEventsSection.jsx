import React from 'react';

const UpcomingEventsSection = ({ events = [] }) => {
  const defaultEvents = [
    {
      id: 1,
      title: "Personal Finance well-being",
      date: "15 Dec 12-01 PM",
      location: "Virtual Class room",
      attendees: [
        { id: 1, image: "https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/ellipse-6.png" },
        { id: 2, image: "https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/ellipse-7.png" },
        { count: 25 }
      ],
      background: "https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/96897-1.png",
      overlay: "https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/frame-59.png"
    },
    {
      id: 2,
      title: "Budgeting Basics",
      date: "16 Dec 2 PM",
      location: "Virtual Class room",
      attendees: [
        { id: 1, image: "https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/ellipse-8.png" },
        { id: 2, image: "https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/ellipse-9.png" },
        { count: 10 }
      ],
      background: "https://dashboard.codeparrot.ai/api/image/Z9V3nCppvFKitUKB/frame-59-2.png"
    }
  ];

  const eventList = events.length ? events : defaultEvents;

  return (
    <div className="w-full px-4 py-4 pb-32"> {/* Changed pb-16 to pb-32 */}
      <h2 className="text-2xl font-bold text-[#211e1e] mb-4">
        UPCOMING EVENTS
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl auto-rows-min">
        {eventList.map((event) => (
          <div 
            key={event.id}
            className="bg-white rounded-2xl overflow-hidden w-full"
          >
            <div className="relative h-40 bg-[#ff6b6b]">
              <img 
                src={event.background}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              {event.overlay && (
                <img
                  src={event.overlay}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              )}
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#211e1e]">
                {event.title}
              </h3>
              
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                <span>{event.date}</span>
                <span>•</span>
                <span>{event.location}</span>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex -space-x-2">
                  {event.attendees.map((attendee, index) => (
                    attendee.image ? (
                      <img
                        key={attendee.id}
                        src={attendee.image}
                        alt="attendee"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ) : (
                      <div 
                        key={`count-${index}`}
                        className="w-8 h-8 rounded-full bg-[#c71010] border-2 border-white flex items-center justify-center"
                      >
                        <span className="text-xs font-medium text-white">+{attendee.count}</span>
                      </div>
                    )
                  ))}
                </div>

                <button className="bg-[#c71010] text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-[#a00d0d] transition-colors">
                  START EVENT
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEventsSection;
