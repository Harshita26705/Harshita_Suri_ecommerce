namespace server.Models
{
    public class Order
    {
        public int Id { get; set; }

        // Foreign key to User
        public int UserId { get; set; }
        public User? User { get; set; }

        public decimal TotalAmount { get; set; }
        public DateTime OrderDate { get; set; } = DateTime.Now;
    }
}
