import PropTypes from 'prop-types';
import { AlertCircle } from 'lucide-react';

export default function FormField({ name, value, onChange, error, step }) {
    const label = name.replace(/([A-Z])/g, ' $1').trim();

    return (
        <div className="label-box">
            <label className="label-name">
                {label}
            </label>
            <div className="relative">
                <input
                    type="number"
                    value={value}
                    onChange={(e) => onChange(name, e.target.value)}
                    min="0"
                    step={step}
                />
            </div>
            {error && (
                <a className="error"><AlertCircle className="error-icon"/>{error}</a>
            )}
        </div>
    );
}

FormField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};