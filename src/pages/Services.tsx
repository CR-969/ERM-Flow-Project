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
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FloatingGraphics } from "@/components/FloatingGraphics";
import {
  BarChart3,
  Users,
  Target,
  TrendingUp,
  Globe,
  Search,
  Megaphone,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Settings,
} from "lucide-react";

const salesFeatures = [
  {
    icon: Users,
    title: "CRM Integration",
    description:
      "Centralized customer relationship management with 360° customer view",
  },
  {
    icon: Target,
    title: "Lead Management",
    description:
      "Automated lead scoring, qualification, and nurturing workflows",
  },
  {
    icon: BarChart3,
    title: "Sales Analytics",
    description: "Real-time sales performance tracking and forecasting",
  },
  {
    icon: TrendingUp,
    title: "Pipeline Management",
    description: "Visual pipeline tracking with customizable sales stages",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Automated follow-ups, reminders, and task management",
  },
  {
    icon: Shield,
    title: "Territory Management",
    description: "Optimize sales territories and team assignments",
  },
];

const marketingFeatures = [
  {
    icon: MessageSquare,
    title: "Social Media Marketing",
    description: "Multi-platform social media management and scheduling",
    details: [
      "Content calendar management",
      "Cross-platform posting",
      "Engagement tracking",
      "Audience analytics",
    ],
  },
  {
    icon: Megaphone,
    title: "Paid Advertising",
    description: "Strategic ad campaign management across all major platforms",
    details: [
      "Google Ads optimization",
      "Facebook & Instagram ads",
      "LinkedIn campaigns",
      "ROI tracking",
    ],
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Comprehensive SEO strategies to boost your online visibility",
    details: [
      "Keyword research",
      "On-page optimization",
      "Technical SEO",
      "Link building",
    ],
  },
  {
    icon: Globe,
    title: "Content Marketing",
    description: "Strategic content creation and distribution",
    details: [
      "Blog management",
      "Video content",
      "Email campaigns",
      "Content optimization",
    ],
  },
  {
    icon: BarChart3,
    title: "Marketing Analytics",
    description: "Data-driven insights to optimize your marketing performance",
    details: [
      "Campaign tracking",
      "Conversion analysis",
      "Customer journey mapping",
      "Performance reports",
    ],
  },
  {
    icon: Settings,
    title: "Marketing Automation",
    description: "Streamlined workflows and automated marketing processes",
    details: [
      "Email automation",
      "Lead nurturing",
      "Customer segmentation",
      "Behavioral triggers",
    ],
  },
];

const benefits = [
  "Increased revenue by up to 250%",
  "Reduced operational costs by 40%",
  "Improved team productivity by 60%",
  "Faster customer response times",
  "Better customer satisfaction scores",
  "Streamlined business processes",
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <AnimatedBackground variant="neural" />
        <FloatingGraphics variant="services" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive ERP <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Empower your business with our integrated Sales Management and
              Digital Marketing solutions. Everything you need to scale and
              succeed in one powerful platform.
            </p>
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Sales Management Section */}
      <section className="relative py-16 overflow-hidden">
        <AnimatedBackground variant="flowing" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-4">
              Sales Management
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Supercharge Your Sales Performance
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transform your sales process with intelligent automation,
              comprehensive analytics, and powerful CRM capabilities that drive
              results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {salesFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-500 group-hover:scale-105">
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
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
            className="bg-muted/50 rounded-lg p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Sales Results That Matter
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our sales management solution delivers measurable results that
                  transform your business performance and drive sustainable
                  growth.
                </p>
                <ul className="space-y-2">
                  {benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <div className="inline-block bg-background rounded-lg p-6 shadow-md">
                  <div className="text-3xl font-bold text-primary mb-2">
                    250%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Average Revenue Increase
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Digital Marketing Section */}
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
            <Badge variant="secondary" className="mb-4">
              Digital Marketing
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Amplify Your Digital Presence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Reach your target audience with precision through our
              comprehensive digital marketing services that drive engagement,
              conversions, and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-500 group-hover:scale-105 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-green-600/5 group-hover:from-green-400/10 group-hover:to-green-600/10 transition-all" />
                  <CardHeader className="relative">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <ul className="space-y-2">
                      {feature.details.map((detail) => (
                        <li key={detail} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <div className="relative">
        <AnimatedBackground variant="waves" />
        <WorkflowDiagram />
      </div>

      {/* Integration Benefits */}
      <section className="relative py-16 overflow-hidden">
        <AnimatedBackground variant="grid" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              The Power of Integration
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              When sales and marketing work together seamlessly, magic happens.
              Our integrated approach ensures maximum efficiency and results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Unified Data & Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    All your sales and marketing data in one place, providing
                    complete visibility into your customer journey and business
                    performance.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">360° customer view</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Cross-channel analytics</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Real-time reporting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Seamless Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Automated workflows that connect marketing qualified leads
                    directly to your sales team, ensuring no opportunity is
                    missed.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Lead scoring & routing</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Automated follow-ups</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Campaign optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/demo">
                See Integration in Action
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary opacity-90" />
        <AnimatedBackground variant="flowing" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/95 mb-8 text-lg drop-shadow-md">
              Join thousands of businesses that have revolutionized their sales
              and marketing with ERPFlow. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 bg-white text-primary hover:bg-white/90 shadow-lg"
              >
                <Link to="/contact">Start Free Trial</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 border-white text-white hover:bg-white/20 hover:text-white shadow-lg"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
