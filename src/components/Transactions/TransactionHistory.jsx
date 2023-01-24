import PropTypes from "prop-types"
import styles from "./Transactions.module.css"

export const TransactionHistory = ({ items }) => {
    return (
        <table className= {styles.transactionHistory}>
  <thead>
    <tr className= {styles.title}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

        <tbody>
        {items.map(({ id, type, amount, currency }) => (
            <tr key = {id} className= {styles.table}>
                <td className= {styles.type}>{type}</td>
                <td className= {styles.type}>{amount}</td>
                <td className= {styles.type}>{currency}</td>
            </tr> 
            ))}        
        </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
        })
    ),
};


export default TransactionHistory 