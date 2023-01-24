import PropTypes from "prop-types"
import styles from "./Statistics.module.css"

export default function Statistics({ title, stats }) {
    return (
        <section className = {styles.statistics} >
            {{ title } && <h2 className={styles.title}>{title}</h2>}
            <ul className = {styles.statList}>
                {stats.map(({ label, percentage, id }) => (
                    <li key={id} className={styles.item}>
                        <span className={styles.label}>{label}</span>
                        <span className={styles.percentage}>{percentage}%</span>
                    </li>))
                    }
            </ul>
        </section>
    )
}


Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
        })
    ),
    title: PropTypes.string
};




// export default Statistics