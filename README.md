myFlix-Angular-client

Welcome to the myFlix-Angular-client project! This is the front-end application for the myFlix movie app, built using Angular. It connects to the myFlix API to allow users to register, log in, view movies, manage their profiles, and more.

🚀 Features

User Registration & Login

View All Movies with detailed information

Search Movies by Genre or Director

Add/Remove Favorite Movies

Edit User Profile

Delete User Account

🛠️ Technologies Used

Angular (Framework)

TypeScript (Programming Language)

HTML & CSS (Frontend Design)

RxJS (Reactive Extensions for JavaScript)

myFlix REST API (Backend Service)

📦 Installation

Clone the Repository:

git clone https://github.com/barendgabriel/myFlix-Angular-client.git
cd myFlix-Angular-client

Install Dependencies:

npm install

Run the App:

ng serve

Open http://localhost:4200 in your browser.

🔗 API Endpoints

This app connects to the myFlix API hosted at:

https://myflixmovieapp.onrender.com

Implemented API Calls:

User Registration: POST /users

User Login: POST /login

Get All Movies: GET /movies

Get Movie by Title: GET /movies/:title

Get Director Info: GET /directors/:name

Get Genre Info: GET /genres/:name

Get User Details: GET /users/:username

Add Favorite Movie: POST /users/:username/movies/:movieId

Remove Favorite Movie: DELETE /users/:username/movies/:movieId

Edit User Info: PUT /users/:username

Delete User: DELETE /users/:username

⚙️ Project Structure

myFlix-Angular-client/
├── src/
│ ├── app/
│ │ ├── fetch-api-data.service.ts
│ │ ├── components/
│ │ └── app.module.ts
│ └── index.html
├── angular.json
├── package.json
└── README.md

✅ Usage

Register for a new account.

Log in to view the movie collection.

Explore movies, filter by genre or director.

Add your favorites and manage your profile.

📋 Contributing

Fork the repository.

Create a new branch: git checkout -b feature-name.

Commit your changes: git commit -m 'Add new feature'.

Push to the branch: git push origin feature-name.

Submit a pull request.

👨‍💻 Author

GitHub: barendgabriel

📄 License

This project is licensed under the MIT License.
