import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/Layout";
import { KPICounters } from "@/components/KPICounters";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FloatingGraphics } from "@/components/FloatingGraphics";
import {
  Users,
  Target,
  Award,
  Globe,
  Clock,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Heart,
  Zap,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly evolve our technology to stay ahead of market demands and deliver cutting-edge solutions.",
  },
  {
    icon: Heart,
    title: "Customer-Centric",
    description:
      "Every decision we make is guided by our commitment to customer success and satisfaction.",
  },
  {
    icon: CheckCircle,
    title: "Quality",
    description:
      "We maintain the highest standards in everything we do, from code quality to customer service.",
  },
  {
    icon: Zap,
    title: "Efficiency",
    description:
      "We help businesses optimize their operations while streamlining our own processes for maximum value.",
  },
];

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    description:
      "Former McKinsey consultant with 15+ years in enterprise software",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612c9c3?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    description:
      "Ex-Google engineer specializing in scalable cloud architectures",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Emily Rodriguez",
    role: "VP of Sales",
    description:
      "Sales leader with proven track record at Salesforce and HubSpot",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "David Kim",
    role: "Head of Marketing",
    description: "Digital marketing expert who scaled multiple SaaS companies",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
];

const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    description: "Started with a vision to simplify ERP for modern businesses",
  },
  {
    year: "2020",
    title: "First Product Launch",
    description: "Released our MVP serving 50+ small businesses",
  },
  {
    year: "2021",
    title: "Series A Funding",
    description: "Raised $10M to expand our platform and team",
  },
  {
    year: "2022",
    title: "Enterprise Features",
    description: "Launched advanced analytics and automation capabilities",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Expanded to serve customers across 25+ countries",
  },
  {
    year: "2024",
    title: "AI Integration",
    description: "Integrated AI-powered insights and automation",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <AnimatedBackground variant="geometric" />

        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-primary">ERPFlow</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We're on a mission to democratize enterprise-grade business
              solutions, making powerful ERP capabilities accessible to
              businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact">
                  Join Our Mission
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8"
                asChild
              >
                <Link to="/demo">See Our Impact</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-16 overflow-hidden">
        <AnimatedBackground variant="dots" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="mb-4">
                Our Mission
              </Badge>
              <h2 className="text-3xl font-bold mb-6">
                Empowering Businesses Through Innovation
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                At ERPFlow, we believe that every business deserves access to
                world-class tools that can transform their operations,
                regardless of their size or industry.
              </p>
              <p className="text-muted-foreground mb-6">
                Our comprehensive ERP solution combines sales management and
                digital marketing capabilities in one powerful platform,
                designed to grow with your business and adapt to your unique
                needs.
              </p>
              <ul className="space-y-3">
                {[
                  "Democratize enterprise-grade software",
                  "Simplify complex business processes",
                  "Drive measurable business growth",
                  "Foster innovation and efficiency",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold">1200+</div>
                    <div className="text-sm text-muted-foreground">
                      Happy Clients
                    </div>
                  </div>
                  <div className="text-center">
                    <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold">25+</div>
                    <div className="text-sm text-muted-foreground">
                      Countries
                    </div>
                  </div>
                  <div className="text-center">
                    <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold">5000+</div>
                    <div className="text-sm text-muted-foreground">
                      Projects
                    </div>
                  </div>
                  <div className="text-center">
                    <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold">99%</div>
                    <div className="text-sm text-muted-foreground">
                      Satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30" />
        <AnimatedBackground variant="grid" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape the way we build
              products, serve customers, and grow as a company.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="text-center h-full hover:shadow-xl transition-all duration-500 group-hover:scale-105">
                  <CardHeader>
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <value.icon className="h-10 w-10 text-primary" />
                    </motion.div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-16 overflow-hidden">
        <AnimatedBackground variant="waves" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a small startup to a global leader in ERP solutions, here's
              how we've grown and evolved over the years.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">{milestone.year}</Badge>
                          <Clock className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <CardTitle className="text-lg">
                          {milestone.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30" />
        <AnimatedBackground variant="particles" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced team combines deep industry expertise with a
              passion for innovation and customer success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="font-medium text-primary">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <div className="relative">
        <AnimatedBackground variant="grid" />
        <KPICounters />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 border-t border-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-700"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to Join Our Success Story?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Become part of the ERPFlow community and transform your business
              with our proven solutions and dedicated support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 bg-blue-600 hover:bg-blue-700 text-white shadow-lg font-semibold"
              >
                <Link to="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 border-blue-300 text-blue-100 hover:bg-blue-700 hover:text-white font-semibold"
                asChild
              >
                <Link to="/services">Explore Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
