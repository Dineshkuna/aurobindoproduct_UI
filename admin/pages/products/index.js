import React, { useEffect, useState } from 'react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';

function ProductPage() {
  const initialFormData = {
    productName: '',
    itemCode: '',
    strength: '',
    dosageForm: '',
    market: '',
    gtin: '',
    packInsertUrl: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/pharma/getPharma`);
        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || 'Failed to load products');
        }

        if (isMounted) {
          setProducts(result.data || []);
        }
      } catch (fetchError) {
        if (isMounted) {
          setError(fetchError.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError('');

    try {
      const endpoint = editingId
        ? `${API_BASE_URL}/pharma/editpharma/${editingId}`
        : `${API_BASE_URL}/pharma/createpharma`;
      const method = editingId ? 'PUT' : 'POST';
      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to save product');
      }

      if (editingId) {
        setProducts((previousProducts) =>
          previousProducts.map((product) =>
            product._id === editingId ? result.data : product
          )
        );
      } else {
        setProducts((previousProducts) => [...previousProducts, result.data]);
      }

      setFormData(initialFormData);
      setEditingId(null);
    } catch (saveError) {
      setError(saveError.message);
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (product) => {
    setEditingId(product._id);
    setFormData({
      productName: product.productName || '',
      itemCode: product.itemCode || '',
      strength: product.strength || '',
      dosageForm: product.dosageForm || '',
      market: product.market || '',
      gtin: product.gtin || '',
      packInsertUrl: product.packInsertUrl || '',
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData(initialFormData);
  };

  const handleDelete = async (productId) => {
    const confirmed = window.confirm('Are you sure you want to delete this product?');

    if (!confirmed) {
      return;
    }

    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/pharma/deletepharma/${productId}`, {
        method: 'DELETE',
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to delete product');
      }

      setProducts((previousProducts) =>
        previousProducts.filter((product) => product._id !== productId)
      );

      if (editingId === productId) {
        handleCancelEdit();
      }
    } catch (deleteError) {
      setError(deleteError.message);
    }
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-brand">
            <h2>🔒 Admin Panel</h2>
          </div>
          <div className="navbar-user">
            <span>👤 John Doe</span>
            <button className="btn-logout">Logout</button>
          </div>
        </nav>

        {/* Form Section */}
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <h3>{editingId ? 'Edit Product' : 'Add Product'}</h3>
            {error && <p className="error-message">{error}</p>}
            <input type="text" name="productName" value={formData.productName} onChange={handleChange} placeholder="Product Name" required />
            <input type="text" name="itemCode" value={formData.itemCode} onChange={handleChange} placeholder="Item Code" required />
            <input type="text" name="strength" value={formData.strength} onChange={handleChange} placeholder="Strength" required />
            <input type="text" name="dosageForm" value={formData.dosageForm} onChange={handleChange} placeholder="Dosage Form" required />
            <input type="text" name="market" value={formData.market} onChange={handleChange} placeholder="Market" required />
            <input type="number" name="gtin" value={formData.gtin} onChange={handleChange} placeholder="GTIN" required />
            <input type="text" name="packInsertUrl" value={formData.packInsertUrl} onChange={handleChange} placeholder="Pack Insert URL" />

            <button type="submit" className="btn-submit" disabled={saving}>
              {saving ? 'Saving...' : editingId ? 'Update Product' : 'Add Product'}
            </button>
            {editingId && (
              <button type="button" className="btn-cancel" onClick={handleCancelEdit}>
                Cancel Edit
              </button>
            )}
          </form>
        </div>

        <div className="table-container">
          <h3>Product List</h3>

          {loading ? (
            <p className="empty-message">Loading products...</p>
          ) : products.length > 0 ? (
            <div className="table-wrapper">
              <table className="product-table">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Item Code</th>
                    <th>Strength</th>
                    <th>Dosage Form</th>
                    <th>Market</th>
                    <th>GTIN</th>
                    <th>Pack Insert</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td>{product.productName}</td>
                      <td>{product.itemCode}</td>
                      <td>{product.strength}</td>
                      <td>{product.dosageForm}</td>
                      <td>{product.market}</td>
                      <td>{product.gtin}</td>
                      <td>
                        {product.packInsertUrl ? (
                          <a href={product.packInsertUrl} target="_blank" rel="noreferrer">
                            View/Download
                          </a>
                        ) : (
                          'N/A'
                        )}
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button type="button" className="btn-edit" onClick={() => handleEdit(product)}>
                            Edit
                          </button>
                          <button type="button" className="btn-delete" onClick={() => handleDelete(product._id)}>
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="empty-message">No products added yet.</p>
          )}
        </div>

      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(135deg, #017eb6 0%, #0a5a8c 100%);
          color: white;
          padding: 20px 30px;
        }

        .navbar-user {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .btn-logout {
          background: #ff6b6b;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
        }

        /* FORM STYLES */
        .form-container {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }

        .form {
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          width: 400px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .form h3 {
          color: #333;
          font-size: 20px;
        }

        input {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 14px;
          color: black;
        }

        input::placeholder {
          color: #999;
        }

        .btn-submit {
          background: #017eb6;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .btn-submit:hover {
          background: #0a5a8c;
        }

        .btn-cancel {
          background: #666;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .error-message {
          background: #ffe0e0;
          color: #d23c3c;
          border: 1px solid #ff9999;
          border-radius: 5px;
          padding: 10px;
          font-size: 14px;
        }

        .table-container {
          width: min(1100px, calc(100% - 40px));
          margin: 35px auto 0;
          background: white;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .table-container h3 {
          color: #333;
          margin-bottom: 18px;
          padding-bottom: 10px;
          border-bottom: 2px solid #017eb6;
        }

        .table-wrapper {
          overflow-x: auto;
        }

        .product-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
          color: #333;
        }

        .product-table th {
          background: #f5f5f5;
          color: #333;
          font-weight: 600;
          text-align: left;
          padding: 12px;
          white-space: nowrap;
        }

        .product-table td {
          padding: 12px;
          border-bottom: 1px solid #eee;
          vertical-align: top;
        }

        .product-table a {
          color: #017eb6;
          text-decoration: none;
        }

        .product-table tr:hover {
          background: #f9f9f9;
        }

        .action-buttons {
          display: flex;
          gap: 8px;
        }

        .btn-edit,
        .btn-delete {
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          padding: 7px 12px;
        }

        .btn-edit {
          background: #017eb6;
        }

        .btn-delete {
          background: #d23c3c;
        }

        .empty-message {
          color: #666;
          font-size: 14px;
        }

      `}</style>
    </>
  );
}

export default ProductPage;
