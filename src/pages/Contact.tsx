import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/Layout";
import { FileUpload } from "@/components/FileUpload";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FloatingGraphics } from "@/components/FloatingGraphics";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Users,
  Zap,
} from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  businessType: z.string().min(1, "Please select your business type"),
});

type ContactForm = z.infer<typeof contactSchema>;

const businessTypes = [
  "Small Business (1-50 employees)",
  "Medium Business (51-200 employees)",
  "Enterprise (200+ employees)",
  "E-commerce",
  "B2B Services",
  "Manufacturing",
  "Retail",
  "Healthcare",
  "Other",
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Location",
    details: [
      "123 Business District",
      "San Francisco, CA 94105",
      "United States",
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "Mon-Fri 9AM-6PM PST"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@erpflow.com", "support@erpflow.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9AM - 6PM", "Weekend: Emergency only"],
  },
];

const reasons = [
  {
    icon: MessageSquare,
    title: "Get a Demo",
    description: "See ERPFlow in action with a personalized demo",
  },
  {
    icon: Users,
    title: "Schedule Consultation",
    description: "Discuss your specific business needs with our experts",
  },
  {
    icon: Zap,
    title: "Start Free Trial",
    description: "Try ERPFlow risk-free for 30 days",
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
  setIsSubmitting(true);

  try {
    const API_BASE_URL = "https://erm-flow-project-production.up.railway.app";


    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("company", data.company);
    formData.append("phone", data.phone || "");
    formData.append("subject", data.subject);
    formData.append("message", data.message);
    formData.append("businessType", data.businessType);

    attachedFiles.forEach((file, index) => {
      formData.append("files", file);
    });

    const response = await fetch(`${API_BASE_URL}/send`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    console.log("Form submitted:", { ...data, files: attachedFiles });

    setIsSubmitted(true);
    reset();
    setAttachedFiles([]);
    setTimeout(() => setIsSubmitted(false), 5000);
  } catch (error) {
    console.error("Submission error:", error);
    alert("Something went wrong. Please try again later.");
  }

  setIsSubmitting(false);
};

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-20 min-h-[60vh] flex items-center relative overflow-hidden">
          <AnimatedBackground variant="waves" />
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
              <p className="text-muted-foreground mb-6">
                Your message has been sent successfully. Our team will review
                your inquiry and get back to you within 24 hours.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <AnimatedBackground variant="dots" />

        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business? We're here to help you get
              started with ERPFlow and answer any questions you might have.
            </p>
          </motion.div>

          {/* Contact Reasons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <reason.icon className="h-10 w-10 text-primary" />
                </motion.div>
                <h3 className="font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="relative py-16 overflow-hidden">
        <AnimatedBackground variant="grid" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Send us a Message
                    </CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon
                      as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      {/* Name Fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            {...register("firstName")}
                            className={errors.firstName ? "border-red-500" : ""}
                          />
                          {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.firstName.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            {...register("lastName")}
                            className={errors.lastName ? "border-red-500" : ""}
                          />
                          {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.lastName.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Email and Company */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            {...register("email")}
                            className={errors.email ? "border-red-500" : ""}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="company">Company Name *</Label>
                          <Input
                            id="company"
                            {...register("company")}
                            className={errors.company ? "border-red-500" : ""}
                          />
                          {errors.company && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.company.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Phone and Business Type */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number (optional)</Label>
                          <Input id="phone" type="tel" {...register("phone")} />
                        </div>
                        <div>
                          <Label htmlFor="businessType">Business Type *</Label>
                          <select
                            id="businessType"
                            {...register("businessType")}
                            className={`w-full px-3 py-2 border rounded-md bg-background ${
                              errors.businessType
                                ? "border-red-500"
                                : "border-input"
                            }`}
                          >
                            <option value="">Select your business type</option>
                            {businessTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                          {errors.businessType && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.businessType.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          {...register("subject")}
                          className={errors.subject ? "border-red-500" : ""}
                          placeholder="e.g., Demo Request, Pricing Inquiry, Technical Support"
                        />
                        {errors.subject && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.subject.message}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          {...register("message")}
                          className={errors.message ? "border-red-500" : ""}
                          placeholder="Tell us about your business needs, current challenges, or specific questions..."
                          rows={4}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      {/* File Upload */}
                      <div>
                        <Label>Attachments (optional)</Label>
                        <p className="text-sm text-muted-foreground mb-3">
                          Share any relevant documents, requirements, or
                          materials that might help us understand your needs
                          better.
                        </p>
                        <FileUpload
                          onFileSelect={setAttachedFiles}
                          maxFiles={3}
                          maxSize={5}
                          acceptedTypes={[
                            ".pdf",
                            ".doc",
                            ".docx",
                            ".txt",
                            ".png",
                            ".jpg",
                            ".jpeg",
                          ]}
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>
                      Get in touch with us through any of these channels.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div
                        key={info.title}
                        className="flex items-start space-x-4"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p
                              key={idx}
                              className="text-sm text-muted-foreground"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Quick Response Guarantee</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-sm">
                          Response within 24 hours
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-sm">
                          Demo scheduled within 48 hours
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-sm">
                          Dedicated account manager
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30" />
        <AnimatedBackground variant="particles" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions about ERPFlow and our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How quickly can we get started?",
                answer:
                  "Most clients are up and running within 2-4 weeks, depending on complexity and customization needs.",
              },
              {
                question: "Do you offer training and support?",
                answer:
                  "Yes, we provide comprehensive training, documentation, and ongoing support to ensure your success.",
              },
              {
                question: "Can ERPFlow integrate with our existing tools?",
                answer:
                  "Absolutely! We offer integrations with 100+ popular business tools and custom API connections.",
              },
              {
                question: "What's included in the free trial?",
                answer:
                  "Full access to all features for 30 days, including setup assistance and dedicated support.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
