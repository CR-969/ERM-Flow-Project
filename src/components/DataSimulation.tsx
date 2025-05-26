import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  ShoppingCart,
} from "lucide-react";

type BusinessType = "small-business" | "ecommerce" | "b2b";

interface MetricData {
  name: string;
  before: number;
  after: number;
}

const businessData = {
  "small-business": {
    title: "Small Business",
    metrics: [
      { name: "Monthly Revenue", before: 25000, after: 45000 },
      { name: "Customer Satisfaction", before: 72, after: 94 },
      { name: "Operational Efficiency", before: 60, after: 89 },
      { name: "Cost Reduction", before: 0, after: 35 },
    ],
    monthlyData: [
      { month: "Jan", before: 25000, after: 30000 },
      { month: "Feb", before: 26000, after: 34000 },
      { month: "Mar", before: 24000, after: 38000 },
      { month: "Apr", before: 27000, after: 42000 },
      { month: "May", before: 25500, after: 45000 },
      { month: "Jun", before: 28000, after: 48000 },
    ],
  },
  ecommerce: {
    title: "E-commerce",
    metrics: [
      { name: "Monthly Sales", before: 150000, after: 280000 },
      { name: "Conversion Rate", before: 2.3, after: 4.8 },
      { name: "Cart Abandonment", before: 70, after: 35 },
      { name: "Customer Lifetime Value", before: 180, after: 320 },
    ],
    monthlyData: [
      { month: "Jan", before: 150000, after: 180000 },
      { month: "Feb", before: 155000, after: 210000 },
      { month: "Mar", before: 148000, after: 235000 },
      { month: "Apr", before: 162000, after: 260000 },
      { month: "May", before: 158000, after: 275000 },
      { month: "Jun", before: 165000, after: 280000 },
    ],
  },
  b2b: {
    title: "B2B Enterprise",
    metrics: [
      { name: "Lead Generation", before: 120, after: 340 },
      { name: "Sales Cycle (days)", before: 180, after: 95 },
      { name: "Deal Close Rate", before: 15, after: 32 },
      { name: "Customer Retention", before: 78, after: 94 },
    ],
    monthlyData: [
      { month: "Jan", before: 450000, after: 520000 },
      { month: "Feb", before: 465000, after: 580000 },
      { month: "Mar", before: 440000, after: 640000 },
      { month: "Apr", before: 480000, after: 720000 },
      { month: "May", before: 470000, after: 780000 },
      { month: "Jun", before: 485000, after: 850000 },
    ],
  },
};

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300"];

export function DataSimulation() {
  const [selectedBusiness, setSelectedBusiness] =
    useState<BusinessType>("small-business");
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [selectedBusiness]);

  const currentData = businessData[selectedBusiness];

  const pieData = currentData.metrics.map((metric, index) => ({
    name: metric.name,
    value: metric.after - metric.before,
    color: COLORS[index % COLORS.length],
  }));

  return (
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
            Real-Time Impact Simulation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how our ERP solution transforms different business types. Toggle
            between business models to see customized results.
          </p>
        </motion.div>

        {/* Business Type Selector */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-muted p-2 rounded-lg">
            {Object.entries(businessData).map(([key, data]) => (
              <Button
                key={key}
                variant={selectedBusiness === key ? "default" : "ghost"}
                onClick={() => setSelectedBusiness(key as BusinessType)}
                className="transition-all"
              >
                {data.title}
              </Button>
            ))}
          </div>
        </div>

        <motion.div
          key={animationKey}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentData.metrics.map((metric, index) => {
                  const improvement = metric.after - metric.before;
                  const improvementPercent =
                    metric.before > 0
                      ? ((improvement / metric.before) * 100).toFixed(1)
                      : improvement.toFixed(1);

                  return (
                    <Card key={metric.name}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                          {metric.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                              Before:
                            </span>
                            <span className="font-medium">
                              {metric.before.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                              After:
                            </span>
                            <span className="font-bold text-primary">
                              {metric.after.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex items-center justify-between pt-2 border-t">
                            <span className="text-sm font-medium">
                              Improvement:
                            </span>
                            <div className="flex items-center space-x-1 text-green-600">
                              <TrendingUp className="h-4 w-4" />
                              <span className="font-bold">
                                +{improvementPercent}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="trends" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    Performance Trends: Before vs After ERP Implementation
                  </CardTitle>
                  <CardDescription>
                    Monthly performance comparison for {currentData.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={currentData.monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip
                          formatter={(value) => [value.toLocaleString(), ""]}
                        />
                        <Line
                          type="monotone"
                          dataKey="before"
                          stroke="#ef4444"
                          strokeWidth={2}
                          name="Before ERP"
                        />
                        <Line
                          type="monotone"
                          dataKey="after"
                          stroke="#22c55e"
                          strokeWidth={2}
                          name="After ERP"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="breakdown" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Improvement Comparison</CardTitle>
                    <CardDescription>Before vs After metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={currentData.metrics}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="before" fill="#ef4444" name="Before" />
                          <Bar dataKey="after" fill="#22c55e" name="After" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Improvement Distribution</CardTitle>
                    <CardDescription>
                      Impact across different metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) =>
                              `${name}: ${(percent * 100).toFixed(0)}%`
                            }
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {pieData.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                              />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
