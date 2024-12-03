import { useState } from 'react';
import { validateConfig } from '../utils/validation';
import FormField from './FormField';
import PropTypes from 'prop-types';

export default function ConfigurationForm({ config, onChange }) {
    const [errors, setErrors] = useState([]);

    const handleChange = (field, value) => {
        const newConfig = {
            ...config,
            [field]: Number(value),
        };

        const validationErrors = validateConfig(newConfig);
        setErrors(validationErrors);
        onChange(newConfig);
    };

    const getError = (field) => {
        return errors.find(error => error.field === field)?.message;
    };

    return (
        <div className="">
            <h1 className="">
                Ticket Management System
            </h1>
            <div className="">
                <h2 className="">System Configuration</h2>
            </div>

            <div className="">
                {Object.entries(config).map(([key, value]) => (
                    <FormField
                        key={key}
                        name={key}
                        value={value}
                        onChange={handleChange}
                        error={getError(key)}
                        step={key.includes('Rate') ? '0.1' : '1'}
                    />
                ))}
            </div>

            {errors.length > 0 && (
                <div className="">
                    <p className="">
                        Please correct the errors before proceeding
                    </p>
                </div>
            )}
            <button className="save-button" onClick={() => onChange(config)}>
                Save Configuration
            </button>
        </div>
    );
}

ConfigurationForm.propTypes = {
    config: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
};