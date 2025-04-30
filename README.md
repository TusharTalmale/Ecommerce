# 🛒 E-Commerce Web Application

An end-to-end **E-commerce Web App** built with modern technologies:
- **Backend**: Spring Boot with Spring Security (JWT-based authentication)
- **Frontend**: React with Redux, Material-UI, and FontAwesome icons

---

## 🚀 Features

### 🔐 Authentication
- JWT-based login & registration (Admin/User)
- Role-based access (Admin Panel, User Dashboard)

### 🛍️ User Functionalities
- Product listing & filtering
- Add to cart / remove from cart
- Order placement & tracking
- User profile & order history

### 🛠️ Admin Functionalities
- Add, edit, delete products
- Manage users and orders
- Dashboard with analytics (optional)

---

## 📦 Tech Stack

| Technology     | Description                         |
|----------------|-------------------------------------|
| **Spring Boot**| RESTful APIs, Security & JWT Auth   |
| **Spring Security** | Role-based protection for routes |
| **React**      | Frontend SPA                        |
| **Redux**      | State Management                    |
| **Material-UI**| UI components and styling           |
| **FontAwesome**| Icons                               |
| **MySQL**      | Relational database                 |
| **Maven**      | Dependency Management               |

---

## 🛠️ Installation Guide

###  Clone the repository
```bash
git clone https://github.com/TusharTalmale/Ecommerce.git
cd Ecommerce
```
####  for backend
```
cd Backend
./mvnw clean install
```
- Configure application.properties with your MySQL credentials
- Run the backend server: ./mvnw spring-boot:run

#### for frontend
```
cd ecommerce
npm install
npm start
```

🧪 API Endpoints if you want to test 
```
https://documenter.getpostman.com/view/42768741/2sB2j3DCcw
```



