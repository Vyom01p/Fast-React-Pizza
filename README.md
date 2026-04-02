# 🍕 Fast React Pizza Co.

A dynamic, interactive front-end web application for ordering pizzas. This project was built as part of the *Ultimate React Course by Jonas Schmedtmann* to demonstrate modern React practices, advanced routing, and global state management.

## Live Demo
(https://fast-react-pizza2722.netlify.app/)

## 🚀 Overview

Fast React Pizza Co. allows users to browse a menu fetched from an external API, add multiple pizzas to a cart, provide their delivery details (including a geolocation feature to automatically fetch their GPS position), and submit an order. It also includes functionality to search for existing orders by their unique ID and prioritize them post-submission.

## ✨ Features

* **Live Menu:** Fetches real-time pizza data (ingredients, prices, availability) from a REST API.
* **Cart Management:** Add, remove, and update quantities of pizzas in the cart.
* **Order Submission:** Users can input their name, phone number, and address to place an order.
* **Geolocation:** Auto-detects and fills in the user's delivery address using the browser's Geolocation API.
* **Order Tracking:** Search for submitted orders using a unique order ID to view status and estimated delivery time.
* **Priority Orders:** Option to mark an order as "priority" for an additional fee, even after the order is initially placed.

## 🛠️ Tech Stack

* **Frontend Framework:** React (Functional Components, Custom Hooks)
* **Routing:** React Router v6 (using modern `createBrowserRouter`, Data Loaders, Actions, and `useFetcher`)
* **State Management:** Redux Toolkit (for global cart state)
* **Styling:** Tailwind CSS
* **API Interaction:** Fetch API 

## 💻 Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

