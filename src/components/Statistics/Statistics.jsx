import PropTypes from "prop-types"
import css from "./Statistics.module.css"

const Statistics = ({ title, stats }) => {
    return (
        <section className = {css.statistics} >
            {{ title } && <h2 className={css.title}>{title}</h2>}
            <ul className = {css.statList}>
                {stats.map(({ label, percentage, id }) => (
                    <li key={id} className={css.item}>
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}%</span>
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




export default Statistics