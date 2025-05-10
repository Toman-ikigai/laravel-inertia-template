# Laravel Inertia Template 🚀

Welcome to the **Laravel Inertia Template**! This repository serves as a starter project for building Laravel applications using Inertia.js and Vue.js. If you're looking to create a modern web application with a smooth user experience, you're in the right place.

[![Download Releases](https://img.shields.io/badge/Download%20Releases-%20blue)](https://github.com/Toman-ikigai/laravel-inertia-template/releases)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Easy Setup**: Get started quickly with a ready-to-use template.
- **Inertia.js Integration**: Enjoy a modern single-page application experience without the complexity of a full SPA.
- **Vue.js Support**: Utilize the power of Vue 3 and the Composition API for building interactive user interfaces.
- **Laravel 11 Compatibility**: Built with the latest version of Laravel to ensure you have access to the latest features and improvements.
- **Clean Code Structure**: Follow best practices with a well-organized folder structure.

## Technologies Used

This project utilizes a variety of technologies to provide a robust development experience:

- **Laravel**: A powerful PHP framework for web applications.
- **Inertia.js**: A framework that allows you to create single-page apps using classic server-side routing and controllers.
- **Vue.js**: A progressive JavaScript framework for building user interfaces.
- **Vue Composition API**: A new way to organize and reuse logic in Vue components.

## Installation

To get started with this template, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Toman-ikigai/laravel-inertia-template.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd laravel-inertia-template
   ```

3. **Install Dependencies**:
   ```bash
   composer install
   npm install
   ```

4. **Set Up Environment Variables**:
   Copy the `.env.example` file to `.env` and update the necessary configuration.
   ```bash
   cp .env.example .env
   ```

5. **Generate Application Key**:
   ```bash
   php artisan key:generate
   ```

6. **Run Migrations**:
   If your project includes a database, run the migrations.
   ```bash
   php artisan migrate
   ```

7. **Start the Development Server**:
   ```bash
   php artisan serve
   ```

Now, your application should be up and running at `http://localhost:8000`.

## Usage

After setting up the project, you can start developing your application. Here are some basic commands to help you:

- **Run Development Server**:
  ```bash
  php artisan serve
  ```

- **Compile Assets**:
  ```bash
  npm run dev
  ```

- **Build for Production**:
  ```bash
  npm run build
  ```

For more detailed instructions, check the [Releases](https://github.com/Toman-ikigai/laravel-inertia-template/releases) section.

## Folder Structure

Understanding the folder structure is crucial for navigating and modifying the project effectively. Here’s a breakdown of the main directories:

```
laravel-inertia-template/
├── app/                # Contains the core application code
│   ├── Http/           # Controllers, Middleware, Requests
│   ├── Models/         # Eloquent models
│   └── ...
├── resources/          # Views and assets
│   ├── js/             # JavaScript files
│   ├── css/            # CSS files
│   └── views/          # Blade templates
├── routes/             # Web routes
├── database/           # Database migrations and seeds
└── ...
```

## Contributing

We welcome contributions to improve this template. If you would like to contribute, please follow these steps:

1. **Fork the Repository**: Click the "Fork" button at the top right of the page.
2. **Create a New Branch**: 
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Make Your Changes**: Implement your feature or fix.
4. **Commit Your Changes**: 
   ```bash
   git commit -m "Add your message"
   ```
5. **Push to Your Branch**: 
   ```bash
   git push origin feature/YourFeature
   ```
6. **Create a Pull Request**: Go to the original repository and click on "New Pull Request".

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Conclusion

Thank you for checking out the Laravel Inertia Template! We hope this starter project helps you kickstart your next Laravel application. For updates and releases, visit the [Releases](https://github.com/Toman-ikigai/laravel-inertia-template/releases) section.

Happy coding! 🎉