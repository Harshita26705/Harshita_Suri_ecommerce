using server.Models;
using server.Data;

namespace server.Data
{
    public static class DbInitializer
    {
        public static void Seed(EcommerceDbContext context)
        {
            if (context.Products.Any()) return; // Skip if already seeded

            context.Products.AddRange(
                new Product
                {
                    Name = "Salesforce Migration",
                    Description = "End-to-end Salesforce implementation",
                    Price = 5000,
                    ImageUrl = "/images/salesforce.png"
                },
                new Product
                {
                    Name = "AI/ML Consulting",
                    Description = "Custom AI solutions for your business",
                    Price = 8000,
                    ImageUrl = "/images/ai.png"
                },
                new Product
                {
                    Name = "Cloud Modernization",
                    Description = "Migrate and optimize your cloud infrastructure",
                    Price = 7000,
                    ImageUrl = "/images/cloud.png"
                },
                new Product
                {
                    Name = "Data Quality Audit",
                    Description = "Assess and improve your data pipelines",
                    Price = 4000,
                    ImageUrl = "/images/data.png"
                },
                new Product
                {
                    Name = "Cloud Cost Optimization",
                    Description = "Maximize your cloud ROI with expert cost analysis and automated savings recommendations.",
                    Price = 25000,
                    ImageUrl = "/images/cost.png"
                },
                new Product
                {
                    Name = "AI-Powered Customer Insights",
                    Description = "Uncover customer behavior patterns and personalize engagement using machine learning.",
                    Price = 40000,
                    ImageUrl = "/images/insights.png"
                }
            );

            context.SaveChanges();
        }
    }
}
