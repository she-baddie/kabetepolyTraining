<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Welcome to Our Restaurant</title>
</head>

<body>
    <header>
        <div class="logo">
            <h1>EXPLICIT</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="hero">
            <h2>Welcome to Our Restaurant</h2>
            <p>Delicious food, great ambiance, and unforgettable experiences.</p>
            <a href="#reservations" class="cta-button">Make a Reservation</a>
        </section>

        <section id="about">
            <h2>About Us</h2>
            <p>Our restaurant offers a unique dining experience with a blend of traditional and modern cuisine.</p>
        </section>

        <section id="menu">
            <h2>Our Menu</h2>
            <ul>
                <li>Appetizer: Garlic Bread</li>
                <li>Main Course: Grilled Salmon</li>
                <li>Dessert: Chocolate Lava Cake</li>
                <li>Beverage: House Wine</li>
            </ul>
        </section>

        <section id="reservations">
            <h2>Make a Reservation</h2>
            <form id="reservation-form">
                <input type="text" id="name" placeholder="Your Name" required>
                <input type="email" id="email" placeholder="Your Email" required>
                <input type="date" id="date" required>
                <input type="time" id="time" required>
                <input type="number" id="guests" placeholder="Number of Guests" required>
                <input type="submit" value="Reserve Now">
            </form>
        </section>

        <section id="contact">
            <h2>Contact Us</h2>
            <p>Email: info@EXPLICIT.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Foodie Lane, Flavor Town</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 EXPLICIT. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>

</html>
