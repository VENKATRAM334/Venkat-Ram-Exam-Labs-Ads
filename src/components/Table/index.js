import './index.css'

function Table() {
  return (
    <div className="table-container">
      <h1 className="review-heading">Review Your Order</h1>
      <p className="review-heading follow">
        The following items have been added to your shopping cart
      </p>
      <table
        style={{
          border: '1px solid black',
          borderCollapse: 'collapse',
          width: '60vw',
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: '1px solid black',
                padding: '5px',
                color: '#8a867f',
                backgroundColor: '#d1cdc5',
              }}
            >
              #
            </th>
            <th
              style={{
                border: '1px solid black',
                padding: '5px',
                color: '#8a867f',
                backgroundColor: '#d1cdc5',
              }}
            >
              Product Description
            </th>
            <th
              style={{
                border: '1px solid black',
                padding: '5px',
                color: '#8a867f',
                backgroundColor: '#d1cdc5',
              }}
            >
              Price
            </th>
            <th
              style={{
                border: '1px solid black',
                padding: '5px',
                color: '#8a867f',
                backgroundColor: '#d1cdc5',
              }}
            >
              {' '}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{border: '1px solid black', padding: '5px'}}>1</td>
            <td style={{border: '1px solid black', padding: '5px'}}>
              <p className="product-text-para">
                Microsoft 62-193 Premium Bundle
              </p>
              <p className="premium-text">
                Premium File <br /> Training Course
              </p>
              <label>Get New Question Update for:</label>
              <br />
              <select className="option-selector">
                <option value="1">1 Day (Free)</option>
                <option value="7">7 Days (Free)</option>
                <option value="30">30 Days (Free)</option>
              </select>
            </td>
            <td style={{border: '1px solid black', padding: '5px'}}>
              <p className="premium-text">
                $54.99<span className="premium-text amount">$49.49</span>
              </p>
              <p className="saved-percentage">Saved 10% Off</p>
            </td>
            <td style={{border: '1px solid black', padding: '5px'}}>
              <button type="button" className="remove-button">
                Remove
              </button>
            </td>
          </tr>
          <tr>
            <td
              colSpan="3"
              style={{
                border: '1px solid black',
                padding: '5px',
                backgroundColor: '#d1cdc5',
              }}
            >
              <p className="sub-total-text">
                Subtotal:{' '}
                <span className="sub-total-text sub-amount">$54.49</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
