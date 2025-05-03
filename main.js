// Theme Toggle
const htmlElement = document.documentElement;
const darkModeIcon = document.getElementById('darkModeIcon');
const darkModeIconMobile = document.getElementById('darkModeIconMobile');
const darkModeTextMobile = document.getElementById('darkModeTextMobile');

// Check for saved theme preference or prefer-color-scheme
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
    updateDarkModeIcons(true);
} else {
    htmlElement.classList.remove('dark');
    updateDarkModeIcons(false);
}

function toggleDarkMode() {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.theme = 'light';
        updateDarkModeIcons(false);
    } else {
        htmlElement.classList.add('dark');
        localStorage.theme = 'dark';
        updateDarkModeIcons(true);
    }
}

function updateDarkModeIcons(isDark) {
    if (isDark) {
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
        darkModeIconMobile.classList.remove('fa-moon');
        darkModeIconMobile.classList.add('fa-sun');
        darkModeTextMobile.innerText = 'Light Mode';
    } else {
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
        darkModeIconMobile.classList.remove('fa-sun');
        darkModeIconMobile.classList.add('fa-moon');
        darkModeTextMobile.innerText = 'Dark Mode';
    }
}

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuPanel = document.getElementById('mobileMenuPanel');

function toggleMobileMenu() {
    if (mobileMenu.classList.contains('hidden')) {
        // Open menu
        mobileMenu.classList.remove('hidden');
        mobileMenuPanel.classList.remove('-translate-x-full');
        document.body.style.overflow = 'hidden'; // Prevent body scroll
    } else {
        // Close menu
        mobileMenu.classList.add('hidden');
        mobileMenuPanel.classList.add('-translate-x-full');
        document.body.style.overflow = ''; // Re-enable body scroll
    }
}

// Back to Top Button
const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        backToTopBtn.classList.remove('opacity-0', 'invisible');
        backToTopBtn.classList.add('opacity-100', 'visible');
    } else {
        backToTopBtn.classList.add('opacity-0', 'invisible');
        backToTopBtn.classList.remove('opacity-100', 'visible');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Course Data (in a real application, this would come from a database)
const coursesData = [
    {
        id: 1,
        title: "React Masterclass",
        summary: "Learn to build modern web applications using React and its ecosystem.",
        category: "development",
        price: 99,
        rating: 4.8,
        reviews: 2400,
        instructor: "John Smith",
        instructorImage: `https://avatar.iran.liara.run/public/boy?username=john`,
        image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        duration: "8 weeks",
        exercises: "15+ practical projects",
        technologies: "React, Redux, TypeScript",
        level: "All levels welcome",
        tag: "Popular",
        tagColor: "primary",
        icon: "fab fa-react",
        iconBgColor: "bg-blue-500",
        dateAdded: "2023-04-10",
        popularity: 92
    },
    {
        id: 2,
        title: "UI/UX Foundations",
        summary: "Master the principles of user interface and experience design.",
        category: "design",
        price: 79,
        rating: 4.6,
        reviews: 1800,
        instructor: "Sarah Johnson",
        instructorImage: `https://avatar.iran.liara.run/public/girl?username=sarah`,
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        duration: "6 weeks",
        exercises: "10+ design projects",
        technologies: "Figma, Adobe XD",
        level: "Beginner friendly",
        tag: null,
        tagColor: null,
        icon: "fas fa-bezier-curve",
        iconBgColor: "bg-purple-500",
        dateAdded: "2023-03-15",
        popularity: 85
    },
    {
        id: 3,
        title: "Entrepreneurship 101",
        summary: "Learn to start and grow your own business from scratch.",
        category: "business",
        price: 129,
        rating: 5.0,
        reviews: 126,
        instructor: "Mark Wilson",
        instructorImage: `https://avatar.iran.liara.run/public/boy?username=mark`,
        image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        duration: "10 weeks",
        exercises: "Business plan development",
        technologies: "Market analysis tools",
        level: "Intermediate level",
        tag: "New",
        tagColor: "green",
        icon: "fas fa-chart-line",
        iconBgColor: "bg-green-500",
        dateAdded: "2023-04-20",
        popularity: 70
    },
    {
        id: 4,
        title: "Digital Marketing",
        summary: "Master SEO, social media, and content marketing strategies.",
        category: "marketing",
        price: 89,
        rating: 4.2,
        reviews: 950,
        instructor: "Emily Brown",
        instructorImage: `https://avatar.iran.liara.run/public/girl?username=emily`,
        image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        duration: "7 weeks",
        exercises: "12+ marketing campaigns",
        technologies: "Google Analytics, SEMrush",
        level: "All levels",
        tag: null,
        tagColor: null,
        icon: "fas fa-bullhorn",
        iconBgColor: "bg-blue-500",
        dateAdded: "2023-02-10",
        popularity: 78
    },
    {
        id: 5,
        title: "Music Production",
        summary: "Create professional tracks using modern production tools.",
        category: "music",
        price: 109,
        rating: 4.7,
        reviews: 820,
        instructor: "David Lee",
        instructorImage: `https://avatar.iran.liara.run/public/boy?username=david`,
        image: "https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        duration: "8 weeks",
        exercises: "5+ original compositions",
        technologies: "Ableton Live, Logic Pro",
        level: "Intermediate level",
        tag: null,
        tagColor: null,
        icon: "fas fa-music",
        iconBgColor: "bg-pink-500",
        dateAdded: "2023-01-30",
        popularity: 83
    },
    {
        id: 6,
        title: "Python Basics",
        summary: "Learn Python programming for beginners and beyond.",
        category: "development",
        price: 69,
        rating: 4.9,
        reviews: 3200,
        instructor: "Lisa Chen",
        instructorImage: `https://avatar.iran.liara.run/public/girl?username=lisa`,
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        duration: "5 weeks",
        exercises: "20+ coding challenges",
        technologies: "Python, Jupyter",
        level: "Beginner friendly",
        tag: "Bestseller",
        tagColor: "yellow",
        icon: "fab fa-python",
        iconBgColor: "bg-yellow-500",
        dateAdded: "2022-12-15",
        popularity: 95
    },
    {
        id: 7,
        title: "Data Science Fundamentals",
        summary: "Learn how to analyze and visualize data to derive meaningful insights.",
        category: "development",
        price: 119,
        rating: 4.7,
        reviews: 1450,
        instructor: "Alex Thompson",
        instructorImage: `https://avatar.iran.liara.run/public/boy?username=alex`,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        duration: "9 weeks",
        exercises: "10+ data analysis projects",
        technologies: "Python, pandas, matplotlib",
        level: "Intermediate",
        tag: null,
        tagColor: null,
        icon: "fas fa-database",
        iconBgColor: "bg-indigo-500",
        dateAdded: "2023-03-10",
        popularity: 88
    },
    {
        id: 8,
        title: "Advanced Photography",
        summary: "Take your photography skills to the professional level.",
        category: "design",
        price: 149,
        rating: 4.8,
        reviews: 980,
        instructor: "Maria Garcia",
        instructorImage: `https://avatar.iran.liara.run/public/girl?username=maria`,
        image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        duration: "7 weeks",
        exercises: "Weekly photo assignments",
        technologies: "DSLR, Photoshop, Lightroom",
        level: "Intermediate to Advanced",
        tag: "Top Rated",
        tagColor: "teal",
        icon: "fas fa-camera",
        iconBgColor: "bg-teal-500",
        dateAdded: "2023-02-28",
        popularity: 87
    }
];

// Testimonial Data
const testimonialsData = [
    {
        id: 1,
        name: "Alex Mitchell",
        role: "Software Developer",
        avatar: `https://avatar.iran.liara.run/public/boy?username=alex${Math.floor(Math.random() * 1000)}`,
        rating: 5,
        course: "React Masterclass",
        text: "The React Masterclass transformed my coding skills. The practical projects were incredibly helpful in building my portfolio! I landed a new job just two weeks after completing the course."
    },
    {
        id: 2,
        name: "Sophie Reynolds",
        role: "UX Designer",
        avatar: `https://avatar.iran.liara.run/public/girl?username=sophie${Math.floor(Math.random() * 1000)}`,
        rating: 4,
        course: "UI/UX Foundations",
        text: "UI/UX Foundations gave me a solid start in design. The course structure was clear, though I'd love more advanced topics. The instructor was very responsive to questions."
    },
    {
        id: 3,
        name: "James Taylor",
        role: "Marketing Director",
        avatar: `https://avatar.iran.liara.run/public/boy?username=james${Math.floor(Math.random() * 1000)}`,
        rating: 5,
        course: "Digital Marketing",
        text: "Digital Marketing was a game-changer for my business. The hands-on campaigns really made the concepts stick. I was able to increase our conversion rates by 35% applying what I learned."
    },
    {
        id: 4,
        name: "Maria Kim",
        role: "Music Producer",
        avatar: `https://avatar.iran.liara.run/public/girl?username=maria${Math.floor(Math.random() * 1000)}`,
        rating: 5,
        course: "Music Production",
        text: "Music Production exceeded my expectations. Creating my own tracks with professional tools was an amazing experience! The feedback from industry professionals was invaluable."
    },
    {
        id: 5,
        name: "David Patel",
        role: "Data Scientist",
        avatar: `https://avatar.iran.liara.run/public/boy?username=david${Math.floor(Math.random() * 1000)}`,
        rating: 5,
        course: "Python Basics",
        text: "As someone with zero coding experience, Python Basics was the perfect introduction to programming. The step-by-step approach and excellent examples made learning enjoyable."
    },
    {
        id: 6,
        name: "Jennifer Lopez",
        role: "Entrepreneur",
        avatar: `https://avatar.iran.liara.run/public/girl?username=jennifer${Math.floor(Math.random() * 1000)}`,
        rating: 5,
        course: "Entrepreneurship 101",
        text: "This course provided practical strategies I could immediately implement in my startup. The business plan template alone was worth the price of admission!"
    }
];

// Trends Data
const trendsData = [
    {
        id: 1,
        title: "AI Revolution in Education",
        category: "Emerging Technology",
        description: "Artificial Intelligence is transforming education with personalized learning paths, automated grading, and intelligent tutoring systems that adapt to each student's needs.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 2,
        title: "The Rise of No-Code Development",
        category: "Web Development",
        description: "No-code platforms are democratizing web development, allowing non-technical users to build sophisticated applications without writing a single line of code.",
        image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 3,
        title: "Quantum Computing Breakthroughs",
        category: "Advanced Computing",
        description: "Recent scientific discoveries in quantum computing promise to revolutionize data processing, offering unprecedented computational power for complex problems.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 4,
        title: "Sustainable Tech Practices",
        category: "Technology & Environment",
        description: "Companies are increasingly adopting eco-friendly practices in tech development, from green hosting to energy-efficient algorithms and sustainable hardware design.",
        image: "https://images.unsplash.com/photo-1473075109809-7a17d327bdf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
];

// Function to create a course card
function createCourseCard(course) {
    return `
<div class="flip-card h-[28rem]" data-category="${course.category}" data-price="${course.price}" data-rating="${course.rating}" data-date="${course.dateAdded}" data-popularity="${course.popularity}">
    <div class="flip-card-inner h-full w-full relative">
    <!-- Front Side -->
    <div class="flip-card-front neu-element p-0 h-full flex flex-col overflow-hidden absolute w-full">
        <div class="relative h-48 overflow-hidden rounded-t-2xl">
        <img src="${course.image}" alt="${course.title}" class="w-full h-full object-cover">
        ${course.tag ? `<div class="absolute top-4 right-4 bg-${course.tagColor}-600 text-white text-sm py-1 px-3 rounded-full">${course.tag}</div>` : ''}
        </div>
        
        <div class="p-6 flex flex-col flex-grow">
        <div class="mb-4 flex items-center">
            <div class="w-10 h-10 ${course.iconBgColor} rounded-full flex items-center justify-center text-white">
            <i class="${course.icon}"></i>
            </div>
            <div class="ml-3">
            <span class="text-xs text-gray-500 dark:text-gray-400">${course.category.charAt(0).toUpperCase() + course.category.slice(1)}</span>
            <div class="flex items-center text-yellow-500 text-xs">
                ${Array(Math.floor(course.rating)).fill('<i class="fas fa-star"></i>').join('')}
                ${course.rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                ${Array(5 - Math.ceil(course.rating)).fill('<i class="far fa-star"></i>').join('')}
                <span class="text-gray-600 dark:text-gray-300 ml-1">${course.rating} (${course.reviews.toLocaleString()})</span>
            </div>
            </div>
        </div>
        
        <h3 class="text-xl font-bold mb-2">${course.title}</h3>
        <p class="text-gray-600 dark:text-gray-300 text-sm flex-grow">${course.summary}</p>
        
        <div class="mt-4 flex items-center justify-between">
            <div class="flex items-center">
            <img src="${course.instructorImage}" alt="${course.instructor}" class="w-8 h-8 rounded-full">
            <span class="ml-2 text-sm">${course.instructor}</span>
            </div>
            <span class="text-primary-600 dark:text-primary-400 font-bold">$${course.price}</span>
        </div>
        </div>
    </div>
    
    <!-- Back Side -->
    <div class="flip-card-back neu-element h-full flex flex-col p-6 justify-between absolute w-full">
        <div>
        <h3 class="text-xl font-bold mb-4">${course.title}</h3>
        <div class="space-y-4">
            <div class="flex items-center">
            <div class="w-10 flex-shrink-0 flex items-center justify-center">
                <i class="fas fa-clock text-primary-600 dark:text-primary-400"></i>
            </div>
            <span class="ml-3">${course.duration}</span>
            </div>
            <div class="flex items-center">
            <div class="w-10 flex-shrink-0 flex items-center justify-center">
                <i class="fas fa-tasks text-primary-600 dark:text-primary-400"></i>
            </div>
            <span class="ml-3">${course.exercises}</span>
            </div>
            <div class="flex items-center">
            <div class="w-10 flex-shrink-0 flex items-center justify-center">
                <i class="fas fa-code text-primary-600 dark:text-primary-400"></i>
            </div>
            <span class="ml-3">${course.technologies}</span>
            </div>
            <div class="flex items-center">
            <div class="w-10 flex-shrink-0 flex items-center justify-center">
                <i class="fas fa-user-graduate text-primary-600 dark:text-primary-400"></i>
            </div>
            <span class="ml-3">${course.level}</span>
            </div>
        </div>
        </div>
        
        <div class="mt-auto">
        <a href="#" class="block w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white text-center py-3 rounded-xl transition-colors duration-200">
            Enroll Now
        </a>
        <div class="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
            <span>30-day money-back guarantee</span>
        </div>
        </div>
    </div>
    </div>
</div>
`;
}

// Function to create testimonial card
function createTestimonialCard(testimonial) {
    const stars = Array(testimonial.rating).fill('<i class="fas fa-star"></i>').join('');
    const emptyStars = Array(5 - testimonial.rating).fill('<i class="far fa-star"></i>').join('');

    return `
<div class="swiper-slide">
    <div class="neu-element p-6 rounded-2xl h-full">
    <div class="flex items-center mb-4">
        <img src="${testimonial.avatar}" alt="${testimonial.name}" class="w-12 h-12 rounded-full">
        <div class="ml-4">
        <h4 class="font-semibold">${testimonial.name}</h4>
        <p class="text-sm text-gray-500 dark:text-gray-400">${testimonial.role}</p>
        </div>
    </div>
    <div class="flex text-yellow-500 mb-4">
        ${stars}${emptyStars}
    </div>
    <p class="text-gray-600 dark:text-gray-300 mb-4">
        "${testimonial.text}"
    </p>
    <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
        <p class="text-sm text-primary-600 dark:text-primary-400 font-medium">Completed ${testimonial.course}</p>
    </div>
    </div>
</div>
`;
}

// Function to create trend card
function createTrendCard(trend) {
    return `
<div class="swiper-slide">
    <div class="p-6 md:p-8">
    <div class="flex flex-col md:flex-row gap-8 items-center">
        <div class="w-full md:w-1/2">
        <div class="aspect-video rounded-xl overflow-hidden neu-element-sm">
            <img src="${trend.image}" alt="${trend.title}" class="w-full h-full object-cover">
        </div>
        </div>
        <div class="w-full md:w-1/2">
        <span class="text-primary-600 dark:text-primary-400 font-medium">${trend.category}</span>
        <h3 class="text-2xl font-bold mt-2 mb-4">${trend.title}</h3>
        <p class="text-gray-600 dark:text-gray-300">
            ${trend.description}
        </p>
        <a href="#" class="mt-6 inline-flex items-center text-primary-600 dark:text-primary-400 font-medium">
            <span>Learn more</span>
            <i class="fas fa-arrow-right ml-2"></i>
        </a>
        </div>
    </div>
    </div>
</div>
`;
}

// Initialize Courses Display
function initializeCourses() {
    const coursesContainer = document.getElementById('coursesContainer');
    coursesContainer.innerHTML = '';

    let displayedCourses = [...coursesData];

    // Display courses
    displayedCourses.forEach(course => {
        coursesContainer.innerHTML += createCourseCard(course);
    });

    // Initialize filtering and sorting
    initializeFiltering();
}

// Initialize Testimonials
function initializeTestimonials() {
    const testimonialsContainer = document.getElementById('testimonialsContainer');
    testimonialsContainer.innerHTML = '';

    testimonialsData.forEach(testimonial => {
        testimonialsContainer.innerHTML += createTestimonialCard(testimonial);
    });

    // Initialize Swiper
    const testimonialSwiper = new Swiper('.testimonialSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.testimonialSwiper .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonialSwiper .swiper-button-next',
            prevEl: '.testimonialSwiper .swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
}

// Initialize Trends
function initializeTrends() {
    const trendsContainer = document.getElementById('trendsContainer');
    trendsContainer.innerHTML = '';

    trendsData.forEach(trend => {
        trendsContainer.innerHTML += createTrendCard(trend);
    });

    // Initialize Swiper
    const trendsSwiper = new Swiper('.trendsSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.trendsSwiper .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.trendsSwiper .swiper-button-next',
            prevEl: '.trendsSwiper .swiper-button-prev',
        },
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
    });
}

// Initialize Filtering
function initializeFiltering() {
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    const searchInput = document.getElementById('searchInput');

    // Event listeners
    categoryFilter.addEventListener('change', filterCourses);
    sortFilter.addEventListener('change', filterCourses);
    searchInput.addEventListener('input', filterCourses);

    // Initial filtering
    filterCourses();
}

// Filter Courses
function filterCourses() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const sortFilter = document.getElementById('sortFilter').value;
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const courseCards = document.querySelectorAll('#coursesContainer .flip-card');

    // Filter courses based on category and search
    courseCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const title = card.querySelector('h3').textContent.toLowerCase();

        const matchesCategory = categoryFilter === 'all' || category === categoryFilter;
        const matchesSearch = title.includes(searchInput);

        if (matchesCategory && matchesSearch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // Sort courses
    sortCourses(sortFilter);
}

// Sort Courses
function sortCourses(sortOption) {
    const coursesContainer = document.getElementById('coursesContainer');
    const courseCards = Array.from(document.querySelectorAll('#coursesContainer .flip-card'));

    // Sort based on the selected option
    switch (sortOption) {
        case 'price-asc':
            courseCards.sort((a, b) => parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price')));
            break;
        case 'price-desc':
            courseCards.sort((a, b) => parseFloat(b.getAttribute('data-price')) - parseFloat(a.getAttribute('data-price')));
            break;
        case 'rating-desc':
            courseCards.sort((a, b) => parseFloat(b.getAttribute('data-rating')) - parseFloat(a.getAttribute('data-rating')));
            break;
        case 'newest':
            courseCards.sort((a, b) => new Date(b.getAttribute('data-date')) - new Date(a.getAttribute('data-date')));
            break;
        case 'popularity':
            courseCards.sort((a, b) => parseFloat(b.getAttribute('data-popularity')) - parseFloat(a.getAttribute('data-popularity')));
            break;
        default:
            // Default sorting (by ID)
            return;
    }

    // Re-append sorted cards
    courseCards.forEach(card => {
        coursesContainer.appendChild(card);
    });
}

// Load More Courses
document.getElementById('loadMoreBtn').addEventListener('click', function () {
    // In a real application, this would load more courses from a database
    // For this demo, we'll just show a message
    this.innerHTML = '<span>All Courses Loaded</span>';
    this.disabled = true;
    setTimeout(() => {
        this.innerHTML = '<span>Load More Courses</span><i class="fas fa-arrow-down"></i>';
        this.disabled = false;
    }, 2000);
});

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeCourses();
    initializeTestimonials();
    initializeTrends();
});
