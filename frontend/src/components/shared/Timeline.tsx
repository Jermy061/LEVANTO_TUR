interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  image?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#0077B6] to-[#FF6B35]"></div>

      <div className="space-y-12">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`flex items-center animate-fade-in ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="w-1/2 px-8">
              <div
                className={`${
                  index % 2 === 0 ? 'text-right' : 'text-left'
                } space-y-2`}
              >
                <div className="text-3xl font-bold text-[#0077B6]">
                  {event.year}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {event.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>

            <div className="w-12 h-12 flex items-center justify-center">
              <div className="w-6 h-6 bg-[#0077B6] rounded-full border-4 border-white shadow-lg"></div>
            </div>

            <div className="w-1/2 px-8">
              {event.image && (
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
