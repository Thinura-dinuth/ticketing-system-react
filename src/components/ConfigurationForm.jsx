import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateConfig } from '../utils/validation';
import FormField from './FormField';
import PropTypes from 'prop-types';
import { saveConfigToFile } from '../utils/saveConfig';

export default function ConfigurationForm({ config, onChange }) {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

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

    const handleSave = async () => {
        onChange(config);
        await saveConfigToFile(config);
        navigate('/ticket-display');
    };

    return (
        <div className="configuration-form">
            <h1 className="title">
                Ticket Management System
            </h1>
            <div className="header">
                <h2 className="subtitle">System Configuration</h2>
            </div>

            <div className="form-fields">
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
                <div>
                    <p className="error-text">
                        Please correct the errors before proceeding
                    </p>
                </div>
            )}
            <button className="save-button" onClick={handleSave}>
                Save Configuration
            </button>
        </div>
    );
}

ConfigurationForm.propTypes = {
    config: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
};