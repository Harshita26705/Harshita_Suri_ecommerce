namespace server.Models
{
    public class Product
{
    public int Id { get; set; }
    public string? Name { get; set; } // e.g., "Salesforce Migration"
    public string? Description { get; set; } // e.g., "End-to-end Salesforce implementation"
    public string? ImageUrl { get; set; } // e.g., "/images/salesforce.png"
    public decimal Price { get; set; } // e.g., estimated cost or "starting at"
}

}
