// Validation functionality
function validate(e, validateDict) {
    var errors = [];
    var value = e.target.value;
    var fld = e.target.name;
    var validateSchema = validateDict[fld];

    if (validateSchema.type) {
        errors.push(validateFieldType(value, validateSchema.type, fld, validateDict));
    }
    if (validateSchema.maxLen) {
        errors.push(validateFieldLength(value, validateSchema.maxLen));
    }
    if (validateSchema.choice) {
        errors.push(validateFieldChoice(value, validateSchema.choice));
    }
    return errors.filter(String);
}

function validateFieldType(value, type, fld, validateDict) {
    var error = "";
    if (type != undefined && value) {
        var typePatterns = {
            "float": /^(-|\+?)[0-9]+(\.)?[0-9]*$/,
            "int": /^(-|\+)?(0|[1-9]\d*)$/,
            "text": /(\w|\W)+$/,
            "email": /[^@]+@[^@]+\.[^@]+/,
            "password": /^(?=.*?\d)(?=.*?[A-Z])(?=.*?[a-z])[A-Za-z\d@#$%^&+=]{8,}$/,
            "name": /\w+\s\w+$/
        };
        if (!typePatterns[type].test(value)) {
            if (validateDict[fld].error) {
                error = validateDict[fld].error;
            } else {
                error = "Invalid " + type + " value";
            }
        }
    }
    return error;
}

function validateFieldLength(value, length) {
    var error = "";
    if (value && length) {
        if (value.length > length) {
            error = "Value should be maximum " + length + " characters long"
        }
    }
    return error;
}

function validateFieldChoice(value, validChoice) {
    var error = "";
    validChoice = (typeof validChoice == "string") ? validChoice.split(",") : null;
    if (Array.isArray(validChoice) && validChoice.indexOf(value) == -1) {
        error = "Not a valid choice. Value should be one of the following: " + validChoice.join(", ");
    }
    return error;
}

function updateFieldErrors(initialState, fieldName, state, errors, append) {
    if (!append) {
        // Clear existing errors related to the current field as it has been edited
        state.errors = initialState.errors;
        delete state.errors[fieldName];
    }

    // Update errors with new ones, if present
    if (errors.length) {
        state.errors[fieldName] = errors.join(". ");
    }
    return state;
}


export {validate, updateFieldErrors};
