import * as Yup from 'yup';

export const YupValidation = 

Yup.object(
    {
        name: Yup.string()
            .required('Name is required')
            .min(3, 'Name must be at least 3 characters')
            .max(50, 'Name must not exceed 50 characters')
            .matches(/^[a-zA-Z\s]+$/, "First name must only contain letters"),
        
        email: Yup.string()
            .email('Enter a valid email address')
            .required('Email is required'),
        
        message: Yup.string()
            .required('Message is required')
            .min(10, 'Message must be at least 10 characters')
            .max(1000, 'Message must not exceed 1000 characters'),
    }
)