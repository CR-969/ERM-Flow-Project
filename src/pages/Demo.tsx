import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { DataSimulation } from "@/components/DataSimulation";
import { ArrowRight, Play, BarChart3, Users, TrendingUp } from "lucide-react";

const demoHighlights = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "See how our ERP solution transforms raw data into actionable insights",
  },
  {
    icon: Users,
    title: "Business Impact",
    description:
      "Experience the measurable improvements across different business types",
  },
  {
    icon: TrendingUp,
    title: "Performance Metrics",
    description: "Discover the KPIs that matter most to your business growth",
  },
];

export default function Demo() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Experience ERPFlow <span className="text-primary">Live Demo</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              See the real impact of our ERP solution on businesses like yours.
              Interact with live data simulations and discover how we can
              transform your operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8">
                <Play className="mr-2 h-5 w-5" />
                Start Interactive Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8"
                asChild
              >
                <Link to="/contact">Schedule Live Demo</Link>
              </Button>
            </div>

            {/* Demo Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {demoHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Simulation Section */}
      <DataSimulation />

      {/* Interactive Features */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Explore Interactive Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our demo showcases the core capabilities that make ERPFlow the
              perfect choice for businesses ready to scale and optimize their
              operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">
                What You'll Experience
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold">
                      1
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Business Type Selection
                    </h4>
                    <p className="text-muted-foreground">
                      Choose from Small Business, E-commerce, or B2B Enterprise
                      to see customized results relevant to your industry.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold">
                      2
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Before vs After Analysis
                    </h4>
                    <p className="text-muted-foreground">
                      See real-time comparisons of key metrics before and after
                      ERP implementation, with dynamic charts and
                      visualizations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold">
                      3
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Interactive Data Exploration
                    </h4>
                    <p className="text-muted-foreground">
                      Explore detailed breakdowns, trend analysis, and
                      performance metrics through interactive charts and graphs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6">Demo Features</h3>
              <div className="space-y-4">
                {[
                  "Live data simulation engine",
                  "Multi-business type scenarios",
                  "Interactive chart controls",
                  "Real-time metric calculations",
                  "Performance trend analysis",
                  "ROI impact visualization",
                ].map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-center">
                  <strong>Pro Tip:</strong> Try switching between different
                  business types to see how our solution adapts to various
                  industry needs!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Typical Results Our Clients See
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The demo shows realistic improvements based on actual client data
              and industry benchmarks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-green-50 dark:bg-green-950/20 rounded-lg"
            >
              <div className="text-3xl font-bold text-green-600 mb-2">
                +250%
              </div>
              <div className="font-semibold mb-2">Revenue Growth</div>
              <p className="text-sm text-muted-foreground">
                Average increase in revenue within 12 months of implementation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">-40%</div>
              <div className="font-semibold mb-2">Operational Costs</div>
              <p className="text-sm text-muted-foreground">
                Reduction in operational expenses through automation and
                optimization
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-purple-50 dark:bg-purple-950/20 rounded-lg"
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
              <div className="font-semibold mb-2">Productivity Boost</div>
              <p className="text-sm text-muted-foreground">
                Improvement in team productivity and task completion rates
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to See These Results in Your Business?
            </h2>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              The demo is just the beginning. Let's discuss how ERPFlow can be
              customized for your specific business needs and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8"
              >
                <Link to="/contact">
                  Schedule Personal Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
