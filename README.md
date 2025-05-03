# EduLearn 📚

A modern, responsive educational platform built with HTML, Tailwind CSS, and JavaScript. This platform provides a complete solution for online learning with course exploration, student testimonials, educational trends, and more.


## ✨ Features

- **Modern Neumorphic UI** - Elegant user interface with soft shadows and clean design
- **Course Catalog** - Browse through a diverse collection of courses with detailed information
- **Advanced Filtering** - Filter courses by category, price, rating, and more
- **Search Functionality** - Find specific courses with real-time search results
- **Dark/Light Mode** - Toggle between dark and light themes with persistent preferences
- **Student Testimonials** - Carousel showcasing student feedback and success stories
- **Educational Trends** - Stay updated with the latest developments in education and technology
- **Responsive Design** - Fully responsive layout that works seamlessly on all devices
- **Interactive Elements** - Flip cards, carousels, and other interactive components

## 🔧 Technical Features

- Tailwind CSS for modern, utility-first styling
- SwiperJS for smooth, responsive carousels
- Local Storage to persist user preferences
- Neumorphic design system with custom CSS variables
- Font Awesome integration for icons
- Custom animations and transitions
- Mobile-friendly navigation with hamburger menu

## 💻 Technologies Used

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript
- SwiperJS
- Font Awesome
- Google Fonts (Outfit)

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository or download the files:
   ```bash
   git clone https://github.com/jarinanan/EduLearn.git
   ```

2. Open the project folder:
   ```bash
   cd EduLearn
   ```

3. Open `index.html` in your browser or set up a local server.

## 📋 File Structure

The project is organized into three main files:

- **index.html** - The main HTML structure and content
- **styles.css** - Additional CSS styling (most styling is included inline with Tailwind)
- **script.js** - JavaScript functionality for course filtering, dark mode, and interactive elements

## 🎨 Customization

### Adding Courses

To add, modify, or remove courses, edit the `coursesData` array in the JavaScript:

```javascript
const coursesData = [
    {
        id: 1,
        title: "Course Title",
        summary: "Course summary description",
        // Add other course details
    },
    // Add more courses
];
```

### Modifying Design

The color scheme can be modified by changing the Tailwind configuration and CSS variables:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#4361ee',
                    // Other color variants
                },
                // Add other color definitions
            }
        }
    }
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Mobile devices (< 640px)
- Tablets (640px - 768px)
- Small desktops (768px - 1024px)
- Large desktops (> 1024px)

## 💡 Features in Detail

### Course Filtering

Courses can be filtered using multiple criteria:
- Category (Development, Design, Business, etc.)
- Price (low to high, high to low)
- Rating (highest rated first)
- Date added (newest first)
- Popularity

### Dark/Light Mode Toggle

The site includes a dark/light mode toggle that:
- Saves user's preference to local storage
- Automatically applies on page load
- Updates UI elements using CSS variables

### Interactive Course Cards

Each course is displayed with a flip card that:
- Shows basic information on the front
- Reveals detailed course information on the back
- Provides enrollment options
- Displays instructor information

## 🖥️ Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Made with ❤️ for education and development