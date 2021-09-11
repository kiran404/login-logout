import * as React from 'react';
import { TextField, Button } from '@material-ui/core';
import { Formik, Form } from 'formik';

interface Values {
    firstName: string,
    lastName: string,
    email: string
}
interface Props {
    onSubmit: (values: Values) => void;
}

export const MyForm: React.FC<Props> = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '' }}
            onSubmit={(values) => { onSubmit(values) }}
        >
            {({ values, handleChange, handleBlur }) => (
                <Form>
                    <div>
                        <TextField
                            name="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur} placeholder="first name"
                        />
                    </div>
                    <div>
                        <TextField
                            name="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur} placeholder="last name"
                        />
                    </div>
                    <div>
                        <TextField
                            name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="email"
                        />
                    </div>
                    <Button type="submit"> Submit</Button>
                    <div>
                        <pre>
                            {JSON.stringify(values, null, 2)}
                        </pre>
                    </div>
                </Form>
            )}
        </Formik>

    );
}



{/* // import * as React from 'react';
// import { TextField } from '@material-ui/core';
// import { Form, Formik } from 'formik';

// interface Values { */}
//     firstName: string,
//     lastName: string,
//     email: string
{/* // } */ }

{/* // interface Props {
//     onSubmit: (values: Values) => void;     // mathi interface ko property hunu parthyo
// } */}

// export const MyForm: React.FC<Props> = ({ onSubmit }) => {
//     return (
//         <Formik
//             initialValues={{ firstName: '', lastName: '', email: '' }}
//             onSubmit={values => { onSubmit(values) }
//             }>
//             {({ values, handleChange, handleBlur }) => (
//                 <Form>
//                     <TextField
//                         name="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur}
//                     />
//                     <TextField
//                         name="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur}
//                     />

//                     <TextField name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}
//                     />

//                     <pre>{JSON.stringify(values, null, 2)}</pre>
//                 </Form>
//             )}
//         </Formik>
//     )
// }
// export const MyForm: React.FC<Props> = ({ onSubmit }) => {     // onSubmit is there to render
//     return (
//         <Formik
//             initialValues={{ firstName: '', lastName: '', email: '' }}
//             onSubmit={values => { onSubmit(values); }
//             }>

//             {({ values, handleChange, handleBlur }) => (
//                 <Form>
//                     <TextField
//                         name="firstName"
//                         value={values.firstName}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                     />
//                     <pre>{JSON.stringify(values, null, 2)}</pre>
//                 </Form>
//             )}
//         </Formik>
//     );
// };

