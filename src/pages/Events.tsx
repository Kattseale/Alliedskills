import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Allied Skills Training Centre launch",
      date: "October 1st, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Allied Skills Centre, Fordsburg",
      type: "Launch",
      price: "Free",
      description: "Join us for the official launch of our Skills Centre, featuring live demonstrations of our programs.",
      capacity: "50 attendees",
      featured: true
    },
    {
      id: 2,
      title: "Career day 2025",
      date: "October 20, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Allied Skills Centre, Fordsburg",
      type: "Career Day",
      price: "Free",
      description: "Connect with top employers and explore exciting career opportunities across various industries.",
      capacity: "200 attendees",
      featured: true
    },
    {
      id: 3,
      title: "Market day",
      date: "October 25, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Allied Skills Centre, Fordsburg",
      type: "Workshop",
      price: "R20",
      description: "Join us for a vibrant showcase of local talents and skills featuring stalls, opportunities to connect, learn and support our community.",
      capacity: "75 attendees",
      featured: false
    },
    {
      id: 4,
      title: "Entrepreneurship Bootcamp",
      date: "October 30, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Allied Skills Centre, Fordsburg",
      type: "Bootcamp",
      price: "Free",
      description: "An intensive program covering business planning, funding strategies, and startup essentials.",
      capacity: "30 attendees",
      featured: false
    }
  ];

  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppFloat />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Events & Workshops
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our community events, workshops, and networking opportunities
          </p>
        </div>

        {/* Featured Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8">Featured Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.filter(event => event.featured).map((event) => (
              <Card key={event.id} className="shadow-elegant border-primary/20">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-gradient-to-r from-primary to-primary-glow text-white">
                      {event.type}
                    </Badge>
                    <span className="text-lg font-semibold text-primary">{event.price}</span>
                  </div>
                  <CardTitle className="text-2xl mb-2">{event.title}</CardTitle>
                  <div className="space-y-1 text-muted-foreground">
                    <p>📅 {event.date}</p>
                    <p>🕒 {event.time}</p>
                    <p>📍 {event.location}</p>
                    <p>👥 {event.capacity}</p>
                  </div>
                </CardHeader>
                
                
              </Card>
            ))}
          </div>
        </div>

        {/* All Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8">All Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{event.type}</Badge>
                    <span className="font-semibold text-primary">{event.price}</span>
                  </div>
                  <CardTitle className="text-lg mb-2">{event.title}</CardTitle>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>{event.date}</p>
                    <p>{event.time}</p>
                    <p>{event.location}</p>
                  </div>
                </CardHeader>
                
               
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="bg-gradient-to-r from-primary/5 to-primary-glow/10 rounded-xl p-8">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Past Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="text-center mt-16 bg-gradient-to-r from-primary/10 to-primary-glow/20 rounded-xl p-8">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Never Miss an Event
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about upcoming events, workshops, and exclusive opportunities.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-lg border border-input bg-background"
            />
            <Button className="bg-gradient-to-r from-primary to-primary-glow">
              Subscribe
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;