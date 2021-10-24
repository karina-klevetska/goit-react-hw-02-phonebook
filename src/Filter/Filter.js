import PropTypes from 'prop-types';
import './Filter.css'

const Filter = ({ filterId, handleChangeFilter }) => {
    return (
        <div className="filter-container">
            <label className="label" htmlFor={filterId}>Find contacts by name</label>
            <input className="input" id={filterId} type="text" name="filter" onChange={handleChangeFilter} />
        </div>
    )
}

Filter.propTypes = {
    filterId: PropTypes.string,
    handleChangeFilter: PropTypes.func
}

export default Filter