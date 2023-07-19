# React Registration Form

This is a simple React project that implements a registration form. The form collects the user's First Name, Last Name, and Email. It utilizes React, React's `useState` hook, and `useRef` hook to manage form data and check for field completion. After successful registration, a confirmation message is displayed.

## Online Version
[Online Version] (https://shayan-register-form.netlify.app)

## Features

- Registration form with fields for First Name, Last Name, and Email.
- Uses `useState` hook to manage form data and submission status.
- `useRef` hook is employed to check for field completion.
- Displays a success message upon successful registration.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

```
git clone https://github.com/ShayanFaghihi/regiteration-form.git
```

2. Change into the project directory:

```
cd your-react-registration-form
```

3. Install the required dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

The project should now be running on `http://localhost:3000`.

## How to Use

1. When you open the application, you will see a registration form.

2. Enter your First Name, Last Name, and Email in the respective fields.

3. After filling all the fields, click the "Register" button to submit the form.

4. If any field is left empty, the form will not submit, and you will be notified to fill in all the required fields.

5. If all the fields are filled, the form will submit, and a success message will be displayed.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- `useState` hook: Allows us to add state to functional components in React.
- `useRef` hook: Provides a way to access and interact with DOM elements directly.

## Project Structure

The project is organized as follows:

```
your-react-registration-form/
  ├── src/
  │   ├── components/
  │   │   └── Form.js
  │   ├── App.js
  │   └── index.js
  ├── styles/
  │   └── Form.module.css
  └── README.md
```

- The `components` directory contains the main component of the application: `Form`.
- The `App.js` file is the entry point of the application, rendering the `Form` component.
- The `index.js` file sets up the React application and renders the `App` component into the root DOM element.
- The `styles` directory contains modular CSS files for styling the components separately.

## Contributing

If you find any issues with the project or want to add more features, feel free to open an issue or submit a pull request.
