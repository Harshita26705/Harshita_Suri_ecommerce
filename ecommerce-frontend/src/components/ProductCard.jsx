function ProductCard({ product }) {
  return (
    <div style={{
      width: '25%',
      maxWidth: '100%',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      margin: '1rem',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'left',
      fontFamily: 'Montserrat, sans-serif',
      backgroundColor: '#fff',
      transition: 'transform 0.2s ease',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <img
        src={product.imageUrl}
        alt={product.name || 'Service Image'}
        style={{
          width: '100%',
          height: '180px',
          objectFit: 'cover',
          borderRadius: '4px',
          marginBottom: '0.75rem',
        }}
      />
      <h3 style={{
        marginBottom: '0.5rem',
        fontSize: '1.2rem',
        fontWeight: '600',
        color: '#333',
      }}>
        {product.name || 'Unnamed Service'}
      </h3>
      <p style={{
        marginBottom: '0.5rem',
        color: '#555',
        fontSize: '0.95rem',
        lineHeight: '1.5',
      }}>
        {product.description}
      </p>
      <p style={{
        marginBottom: '0.75rem',
        fontWeight: 'bold',
        color: '#007b5e',
        fontSize: '1rem',
      }}>
        Starting at ₹{product.price}
      </p>
      <a
        href="#quotation"
        style={{
          display: 'inline-block',
          padding: '0.5rem 1rem',
          backgroundColor: '#007b5e',
          color: '#fff',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: '500',
          textAlign: 'center',
        }}
      >
        Get a Quotation
      </a>
    </div>
  );
}

export default ProductCard;

