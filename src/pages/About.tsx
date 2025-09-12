import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Allied Skills Training Centre
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering professionals with cutting-edge skills for tomorrow's workforce
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                 “To carry out demand driven, quality training for customer satisfaction & technological advancements”.
<br />
In support of this, we are committed to:
<br />
•  Providing sponsored training for the development and upliftment of the unemployed, disabled and disadvantaged people in our communities.
<br />
•  Stimulating and supporting skills development for productivity and employment growth.
<br />
•  Promoting honesty, integrity, professionalism and cultural tolerance amongst ourselves and within the communities that we serve.
<br />
•  Providing an environment for achieving personal excellence and growth for all our employees.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  "To be a premier institution recognized for delivering high-quality, industry-relevant skills training that fosters innovation, professionalism, and sustainable socio-economic development."
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary-glow/20 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Qualified Instructors</h3>
                <p className="text-muted-foreground">Industry professionals with years of real-world experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Practical Training</h3>
                <p className="text-muted-foreground">Hands-on learning with real industry projects and scenarios</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Career Support</h3>
                <p className="text-muted-foreground">Job placement assistance and ongoing career guidance</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-semibold text-foreground mb-6">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-1xl font-bold text-primary mb-2">Personalised Learning</div>
                <div className="text-muted-foreground">Get personalized attention through direct, in-person sessions tailored to your pace, goals, and learning style.</div>
              </div>
              <div className="text-center">
                <div className="text-1xl font-bold text-primary mb-2">Weekly Courses</div>
                <div className="text-muted-foreground">Stay consistent with flexible weekly lessons designed to build skills step by step, keeping you motivated and on track.</div>
              </div>
              <div className="text-center">
                <div className="text-1xl font-bold text-primary mb-2">Monthy Courses</div>
                <div className="text-muted-foreground">Deep-dive into structured monthly programs that help you master practical skills and achieve measurable progress.</div>
              </div>
              <div className="text-center">
                <div className="text-1xl font-bold text-primary mb-2">Hands-on Training</div>
                <div className="text-muted-foreground">Learn by doing with practical, real-world exercises that help you apply skills immediately and gain confidence through experience.</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;