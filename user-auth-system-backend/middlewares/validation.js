const validateInput = (fields) => {
    return (req, res, next) => {
        const errors = [];
        for (const field of fields) {
            if (!req.body[field] || req.body[field].trim() === '') {
                errors.push(`${field} is required`);
            }
        }
        if (errors.length > 0) {
            return res.status(400).json({ message: 'Validation failed', errors });
        }
        next();
    };
};

module.exports = validateInput;
