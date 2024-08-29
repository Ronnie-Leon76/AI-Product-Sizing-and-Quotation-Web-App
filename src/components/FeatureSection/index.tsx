import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "AI-Powered Sizing",
    description: "Accurate product sizing based on customer requirements.",
  },
  {
    title: "AI-Powered Quotations",
    description: "Generate power solution options for customers in seconds.",
  },
  {
    title: "Accurate Client Energy Demand Calculation",
    description: "Leveraging AI with the power of search engines, we can calculate an accurate energy demand of your clients' devices.",
  },
  {
    title: "Product Recommendations",
    description: "Suggest the best Dayliff products for customer needs.",
  }
];

export function FeatureSection() {
  return (
    <section id="features" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}