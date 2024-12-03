import PropTypes from 'prop-types';
import { AlertCircle } from 'lucide-react';

export default function FormField({ name, value, onChange, error, step }) {
    const label = name.replace(/([A-Z])/g, ' $1').trim();

    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 capitalize">
                {label}
            </label>
            <div className="relative">
                <input
                    type="number"
                    value={value}
                    onChange={(e) => onChange(name, e.target.value)}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        error ? 'border-red-500' : 'border-gray-300'
                    }`}
                    min="0"
                    step={step}
                />
                {error && (
                    <div className="absolute right-0 top-0 h-full flex items-center pr-3">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                )}
            </div>
            {error && (
                <p className="text-sm text-red-600 mt-1">{error}</p>
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