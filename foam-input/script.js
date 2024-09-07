"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateWorkExperience = exports.validateSkills = exports.validateEducation = exports.validatePersonalInfo = void 0;
// Utility function to validate email
function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// Utility function to validate date
function validateDate(date) {
    return !isNaN(Date.parse(date));
}
// Validate Personal Info
function validatePersonalInfo(info) {
    var errors = [];
    if (!info.fullName || info.fullName.trim().length < 3) {
        errors.push('Full Name must be at least 3 characters long.');
    }
    if (!validateEmail(info.email)) {
        errors.push('Invalid email address.');
    }
    if (!info.phone || info.phone.trim().length < 10) {
        errors.push('Phone number must be at least 10 digits long.');
    }
    if (!info.address) {
        errors.push('Address is required.');
    }
    if (!info.profileSummary || info.profileSummary.trim().length < 20) {
        errors.push('Profile Summary must be at least 20 characters long.');
    }
    return errors;
}
exports.validatePersonalInfo = validatePersonalInfo;
// Validate Education
function validateEducation(education) {
    var errors = [];
    if (!education.institution || education.institution.trim().length < 3) {
        errors.push('Institution name must be at least 3 characters long.');
    }
    if (!education.degree) {
        errors.push('Degree is required.');
    }
    if (!validateDate(education.startDate) || !validateDate(education.endDate)) {
        errors.push('Invalid date format for education period.');
    }
    return errors;
}
exports.validateEducation = validateEducation;
// Validate Skills
function validateSkills(skills) {
    var errors = [];
    if (skills.length === 0) {
        errors.push('At least one skill is required.');
    }
    skills.forEach(function (skill) {
        if (!skill.skillName || skill.skillName.trim().length < 2) {
            errors.push('Each skill must be at least 2 characters long.');
        }
    });
    return errors;
}
exports.validateSkills = validateSkills;
// Validate Work Experience
function validateWorkExperience(workExperiences) {
    var errors = [];
    workExperiences.forEach(function (exp) {
        if (!exp.company || exp.company.trim().length < 3) {
            errors.push('Company name must be at least 3 characters long.');
        }
        if (!exp.jobTitle) {
            errors.push('Job Title is required.');
        }
        if (!validateDate(exp.startDate) || !validateDate(exp.endDate)) {
            errors.push('Invalid date format for work experience period.');
        }
        if (!exp.jobDescription || exp.jobDescription.trim().length < 20) {
            errors.push('Job Description must be at least 20 characters long.');
        }
    });
    return errors;
}
exports.validateWorkExperience = validateWorkExperience;
