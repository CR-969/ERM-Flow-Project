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
import { Layout } from "@/components/Layout";
import { KPICounters } from "@/components/KPICounters";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FloatingGraphics } from "@/components/FloatingGraphics";
import {
  ArrowRight,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Smartphone,
  Globe,
  Target,
  CheckCircle,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Deploy and scale your ERP solution in minutes, not months.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade security with end-to-end encryption and compliance.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamlessly connect teams across departments and locations.",
    color: "from-green-400 to-green-600",
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics",
    description:
      "Real-time insights and predictive analytics for smarter decisions.",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description:
      "Access your business data anywhere with our mobile-first design.",
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Multi-currency, multi-language support for global operations.",
    color: "from-indigo-400 to-indigo-600",
  },
];

const services = [
  {
    icon: Target,
    title: "Sales Management",
    description:
      "Streamline your sales process from lead generation to deal closure",
    features: [
      "CRM Integration",
      "Pipeline Management",
      "Sales Analytics",
      "Team Performance",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing solutions to grow your online presence",
    features: [
      "Social Media Marketing",
      "Paid Advertising",
      "SEO Optimization",
      "Content Strategy",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow Inc",
    content:
      "ERPFlow transformed our business operations. We saw 300% growth in just 6 months!",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Operations Manager",
    content:
      "The best investment we've made. Our team productivity increased by 250%.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Marketing Director",
    content:
      "Outstanding platform! Our marketing campaigns now generate 4x more leads.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section with Enhanced Graphics */}
      <section className="relative overflow-hidden py-20 sm:py-32 min-h-screen flex items-center">
        <AnimatedBackground variant="waves" />
        <FloatingGraphics variant="hero" />

        {/* Animated mesh gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Zap className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium">
                Trusted by 1200+ companies worldwide
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ERPFlow
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              Streamline operations, boost sales, and elevate your digital
              marketing with our comprehensive ERP solution designed for modern
              businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="text-lg px-8 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                <Link to="/demo">
                  See Live Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 border-2 hover:bg-primary/10"
                asChild
              >
                <Link to="/contact">Get Started Free</Link>
              </Button>
            </motion.div>

            {/* Animated stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
            >
              {[
                { label: "Active Users", value: "10K+" },
                { label: "Countries", value: "25+" },
                { label: "Uptime", value: "99.9%" },
                { label: "Support Rating", value: "4.9★" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* KPI Counters with Enhanced Background */}
      <div className="relative">
        <AnimatedBackground variant="grid" />
        <KPICounters />
      </div>

      {/* Services Overview with Enhanced Graphics */}
      <section className="relative py-16 overflow-hidden">
        <AnimatedBackground variant="dots" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive ERP solutions that cover every aspect of your
              business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 overflow-hidden relative group-hover:scale-105">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
                  />
                  <CardHeader className="relative">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <div>
                        <CardTitle className="text-xl">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 hover:bg-primary/10"
            >
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Workflow Diagram with Background */}
      <div className="relative">
        <AnimatedBackground variant="particles" />
        <WorkflowDiagram />
      </div>

      {/* Enhanced Features Grid */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30" />
        <FloatingGraphics variant="features" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose ERPFlow?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built for modern businesses, our ERP solution combines power,
              simplicity, and innovation to drive your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="text-center h-full hover:shadow-xl transition-all duration-500 group-hover:scale-105 overflow-hidden relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                  />
                  <CardHeader className="relative">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className="h-10 w-10 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from businesses that have transformed their operations with
              ERPFlow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-yellow-400 fill-current"
                          />
                        ),
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
        <AnimatedBackground variant="dots" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Join thousands of businesses that have revolutionized their
              operations with ERPFlow. Start your free trial today and see the
              difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 bg-white text-primary hover:bg-white/90"
              >
                <Link to="/contact">Start Free Trial</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/demo">Schedule Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
