import PropTypes from "prop-types";


const TaskFilter = ({ setFilterObj }) => {
    const handleFilter = (key, value) => {
        setFilterObj((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <div>
            <label>Priority</label>
            <select 
                name="priority"
                onChange={(e) => handleFilter("priority", e.target.value)}
            >
                <option value="">-- Select --</option>
                <option value="normal">Normal</option>
                <option value="low">Low</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
            </select>
        </div>
    );
};

TaskFilter.propTypes = {
    setFilterObj: PropTypes.func.isRequired,
};

export default TaskFilter;
