import Navigation from "@/components/Navigation";
import PartnersSection from "@/components/PartnersSection";
const About = () => {
  return <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="hide-on-mobile-landscape pt-8 md:pt-12">
        <Navigation className="mb-4 md:mb-6" />
      </header>

      {/* Services Overview */}
      <section className="px-4 pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/20 mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-6 text-center">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed text-center mb-8 max-w-2xl mx-auto">
              We specialize in transforming complex data processes into streamlined digital solutions that drive efficiency and enhance customer experiences.
            </p>
          </div>

          {/* Service Details */}
          <div className="space-y-6">
            {/* Digital Transformation */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/20">
              <h2 className="font-display text-2xl font-medium tracking-tight text-foreground mb-4 text-center">
                Digital Transformation
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4 text-center">
                We guide organizations through comprehensive digital transformation initiatives, modernizing legacy systems and processes to meet today's digital demands. Our approach ensures seamless transitions while maintaining operational continuity.
              </p>
              <ul className="text-muted-foreground font-body leading-relaxed space-y-3 max-w-xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>Legacy system modernization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>Digital workflow optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>Change management and training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>Technology strategy consulting</span>
                </li>
              </ul>
            </div>

            {/* Technical Program Manager Consultants */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/20">
              <h2 className="font-display text-2xl font-medium tracking-tight text-foreground mb-4 text-center">
                Technical Program Manager Consultants
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4 text-center">
                Our experienced Technical Program Managers provide strategic oversight for complex technology initiatives, ensuring projects are delivered on time, within budget, and aligned with business objectives.
              </p>
              <ul className="text-muted-foreground font-body leading-relaxed space-y-3 max-w-xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>Program planning and execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>Cross-functional team leadership</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>Risk assessment and mitigation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>Stakeholder communication and reporting</span>
                </li>
              </ul>
            </div>

            {/* System Integration */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/20">
              <h2 className="font-display text-2xl font-medium tracking-tight text-foreground mb-4 text-center">
                System Integration
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4 text-center">
                Connect your existing systems with new digital processes for optimal efficiency. We ensure seamless data flow between platforms while maintaining security and performance standards.
              </p>
              <ul className="text-muted-foreground font-body leading-relaxed space-y-3 max-w-xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>API development and integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>Database synchronization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>Middleware solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>System architecture planning</span>
                </li>
              </ul>
            </div>

            {/* Data Collection */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/20">
              <h2 className="font-display text-2xl font-medium tracking-tight text-foreground mb-4 text-center">
                Data Collection
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4 text-center">
                Implement robust web-based data collection systems that ensure accuracy, compliance, and accessibility. Our solutions handle everything from simple surveys to complex multi-step data gathering processes.
              </p>
              <ul className="text-muted-foreground font-body leading-relaxed space-y-3 max-w-xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>Web-based data capture platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>Real-time data validation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>Secure data storage and processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>Compliance and regulatory adherence</span>
                </li>
              </ul>
            </div>

            {/* Forms Management */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/20">
              <h2 className="font-display text-2xl font-medium tracking-tight text-foreground mb-4 text-center">
                Forms Management
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4 text-center">
                Transform complex paper-based forms into intuitive digital experiences. We design and implement form solutions that reduce processing time, eliminate errors, and improve user satisfaction.
              </p>
              <ul className="text-muted-foreground font-body leading-relaxed space-y-3 max-w-xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>Digital form design and development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>Automated validation and processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>Multi-channel form deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>Form analytics and optimization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/20 mt-8">
            <h2 className="font-display text-2xl font-medium tracking-tight text-foreground mb-4 text-center">
              Trusted by Leading Organizations
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed text-center">For over a decade, we’ve partnered with leading institutions such as The Swedish Social Insurance Agency, The Swedish Tax Agency, The Swedish Police, Handelsbanken, and SPP supporting their digital transformation journeys.
Our team helps organizations modernize legacy systems, streamline workflows, and implement secure, webbased data collection platforms. With deep expertise in system integration and program management, we ensure every project is delivered seamlessly, on time, and aligned with strategic goals.</p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="px-4 pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="hide-on-mobile-landscape">
            <PartnersSection />
          </div>
        </div>
      </section>

    </div>;
};
export default About;