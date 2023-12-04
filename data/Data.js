const eventData = [
  {
    id: 0,
    imgSrc: "images/event_img_1.png",
    category: "school",
    location: "Dhaka, Bangladesh",
    time: "08.00 am - 10.00 am",
    title: "Outdoor This Games",
    longTitle: "Outdoor This Games - A Fun Day of Outdoor Activities",
    slug: "outdoor-this-games",
    desc: "We can provide you with a reliable handyan in London you need to included the today..",
    longDesc:
      "Join us for a day of exciting outdoor activities and games in the beautiful Dhaka, Bangladesh. Whether you're a student or just looking for some outdoor fun, this event is perfect for you.",
    name: "hasan mahmud",
    price: 50.0,
    color: "blue",
  },
  {
    id: 1,
    imgSrc: "images/event_img_2.png",
    category: "music",
    location: "New York, USA",
    time: "07.30 pm - 11.00 pm",
    title: "Live Music Concert",
    longTitle: "Live Music Concert - An Unforgettable Night of Music",
    slug: "live-music-concert",
    desc: "Join us for an unforgettable night of live music with your favorite artists.",
    longDesc:
      "Experience the magic of live music in the heart of New York City. This concert features some of the most talented musicians performing your favorite songs. Get ready for a night to remember!",
    name: "Sarah Johnson",
    price: 60.0,
    color: "orange",
  },
  {
    id: 2,
    imgSrc: "images/event_img_3.png",
    category: "sports",
    location: "Los Angeles, USA",
    time: "10.00 am - 12.00 pm",
    title: "Basketball Tournament",
    longTitle: "Basketball Tournament - Showcase Your Skills on the Court",
    slug: "basketball-tournament",
    desc: "Compete in our annual basketball tournament and show off your skills on the court.",
    longDesc:
      "Calling all basketball enthusiasts! Join us for our annual basketball tournament in Los Angeles. It's your chance to showcase your skills, compete with others, and have a great time!",
    name: "Michael Smith",
    price: 35.0,
    color: "green",
  },
  {
    id: 3,
    imgSrc: "images/event_img_4.png",
    category: "science",
    location: "Chicago, USA",
    time: "09.30 am - 11.30 am",
    title: "Science Fair",
    longTitle: "Science Fair - Explore the Wonders of Science",
    slug: "science-fair",
    desc: "Explore the wonders of science at our annual science fair. Fun for all ages!",
    longDesc:
      "Curious about the world of science? Join us at the Chicago Science Fair and embark on a journey of discovery. This family-friendly event promises fun and learning for everyone!",
    name: "Linda Anderson",
    price: 15.0,
    color: "red",
  },
  {
    id: 4,
    imgSrc: "images/event_img_5.png",
    category: "food",
    location: "Paris, France",
    time: "06.00 pm - 09.00 pm",
    title: "Gourmet Food Festival",
    longTitle: "Gourmet Food Festival - A Culinary Adventure",
    slug: "gourmet-food-festival",
    desc: "Indulge in a culinary adventure with a variety of gourmet dishes from around the world.",
    longDesc:
      "Calling all food lovers! Join us for a culinary adventure at the Paris Gourmet Food Festival. Sample a diverse range of gourmet dishes from around the world and satisfy your taste buds!",
    name: "Julie Martin",
    price: 45.0,
    color: "blue",
  },
  {
    id: 5,
    imgSrc: "images/event_img_6.png",
    category: "art",
    location: "London, UK",
    time: "02.00 pm - 05.00 pm",
    title: "Art Exhibition",
    longTitle: "Art Exhibition - Explore Contemporary Art",
    slug: "art-exhibition",
    desc: "Experience the beauty of contemporary art at our gallery exhibition featuring local artists.",
    longDesc:
      "Immerse yourself in the world of contemporary art at our gallery exhibition in London. Discover the creativity of local artists and explore the beauty of their unique artworks.",
    name: "David Wilson",
    price: 25.0,
    color: "green",
  },
  {
    id: 6,
    imgSrc: "images/event_img_7.png",
    category: "fitness",
    location: "Sydney, Australia",
    time: "07.00 am - 09.00 am",
    title: "Yoga and Wellness Retreat",
    longTitle: "Yoga and Wellness Retreat - Refresh Your Mind and Body",
    slug: "yoga-wellness-retreat",
    desc: "Join us for a rejuvenating yoga and wellness retreat to refresh your mind and body.",
    longDesc:
      "Take a break from the hustle and bustle of life and join us for a rejuvenating yoga and wellness retreat in the serene surroundings of Sydney, Australia. Recharge your mind and body!",
    name: "Emily Davis",
    price: 55.0,
    color: "orange",
  },
  {
    id: 7,
    imgSrc: "images/event_img_8.png",
    category: "technology",
    location: "San Francisco, USA",
    time: "11.00 am - 01.00 pm",
    title: "Tech Innovators Conference",
    longTitle: "Tech Innovators Conference - Explore the Latest Tech Trends",
    slug: "tech-innovators-conference",
    desc: "Stay updated on the latest tech trends at our Tech Innovators Conference.",
    longDesc:
      "Tech enthusiasts, don't miss the Tech Innovators Conference in San Francisco. Dive into discussions on the latest tech trends, network with industry experts, and gain valuable insights.",
    name: "John Doe",
    price: 75.0,
    color: "blue",
  },
  {
    id: 8,
    imgSrc: "images/event_img_9.png",
    category: "music",
    location: "Nashville, USA",
    time: "08.00 pm - 11.00 pm",
    title: "Country Music Festival",
    longTitle: "Country Music Festival - A Night of Country Hits",
    slug: "country-music-festival",
    desc: "Enjoy a night of country hits and live performances at our music festival.",
    longDesc:
      "Get ready for a boot-stompin' good time at the Country Music Festival in Nashville. Experience live performances of your favorite country hits and enjoy the vibrant atmosphere.",
    name: "Sarah Johnson",
    price: 65.0,
    color: "orange",
  },
  {
    id: 9,
    imgSrc: "images/event_img_10.png",
    category: "sports",
    location: "Miami, USA",
    time: "09.00 am - 12.00 pm",
    title: "Beach Volleyball Tournament",
    longTitle: "Beach Volleyball Tournament - Spike Your Way to Victory",
    slug: "beach-volleyball-tournament",
    desc: "Compete in a thrilling beach volleyball tournament by the sunny shores of Miami.",
    longDesc:
      "Bump, set, and spike your way to victory at the Beach Volleyball Tournament in Miami. Join fellow volleyball enthusiasts for a day of fun and competitive play on the beach.",
    name: "Michael Smith",
    price: 40.0,
    color: "green",
  },
  {
    id: 10,
    imgSrc: "images/event_img_11.png",
    category: "science",
    location: "Boston, USA",
    time: "10.30 am - 12.30 pm",
    title: "Astronomy Workshop",
    longTitle: "Astronomy Workshop - Explore the Cosmos",
    slug: "astronomy-workshop",
    desc: "Embark on a cosmic journey and explore the wonders of the universe.",
    longDesc:
      "Discover the mysteries of the cosmos at the Astronomy Workshop in Boston. Learn about stars, planets, and galaxies, and gaze at the night sky through telescopes.",
    name: "Linda Anderson",
    price: 20.0,
    color: "red",
  },
];

const faqData = [
  {
    id: 0,
    color: "orange",
    question: "Who are the instructors?",
    answer:
      "Our courses are led by experienced health professionals and certified instructors passionate about promoting well-being",
  },
  {
    id: 1,
    color: "green",
    question: "Do you offer certifications?",
    answer:
      "Yes, upon successful completion of a course, you will receive a certification that you can showcase as a testament to your skills and knowledge.",
  },
  {
    id: 2,
    color: "red",
    question: "What sets your courses apart?",
    answer:
      "Our courses are designed with a focus on quality, innovation, and practical application, providing a comprehensive learning experience.",
  },
  {
    id: 3,
    color: "blue",
    question: "How do I enroll in a course?",
    answer:
      "Enrolling in a course is easy! Simply browse our course catalog, select your desired course, and follow the enrollment instructions.",
  },
];

const allFaqData = [
  {
    id: 0,
    color: "orange",
    title: "What is the importance of education?",
    desc: "Education plays a crucial role in personal and societal development by imparting knowledge, skills, and values.",
  },
  {
    id: 1,
    color: "green",
    title: "What are the different levels of education?",
    desc: "Education encompasses various stages, including preschool, primary, secondary, higher education, and lifelong learning.",
  },
  {
    id: 2,
    color: "red",
    title: "How do I choose the right school for my child?",
    desc: "Selecting the right school involves considering factors such as location, curriculum, facilities, and educational philosophy.",
  },
  {
    id: 3,
    color: "blue",
    title: "What is the difference between public and private education?",
    desc: "Public schools are funded by the government, while private schools are independently funded, leading to differences in resources and curriculum.",
  },
  {
    id: 4,
    color: "orange",
    title: "How can I finance my education?",
    desc: "Explore options like scholarships, grants, loans, and financial aid to help fund your education.",
  },
  {
    id: 5,
    color: "green",
    title: "What are the benefits of online education?",
    desc: "Online education offers flexibility and accessibility, but it's important to understand the advantages and challenges.",
  },
  {
    id: 6,
    color: "blue",
    title: "How can I improve my study skills?",
    desc: "Enhance your study techniques with effective strategies for time management, note-taking, and more.",
  },
  {
    id: 7,
    color: "orange",
    title: "What careers are in demand and require specific education?",
    desc: "Learn about careers that demand specialized education and training to excel.",
  },
];

const workData = [
  {
    id: 0,
    imgSrc: "images/work_img_1.jpg",
    task: "Classes Completed On Time",
    color: "orange",
    desc: "We can provide you with a reliable handyan in London. you need to included the today. However we feel like we should do more and have fun.",
  },
  {
    id: 1,
    imgSrc: "images/work_img_2.jpg",
    color: "green",
    task: "Research Papers Submitted Fully",
    desc: "Our students have submitted groundbreaking research papers in various fields of study, contributing to the advancement of knowledge.",
  },
  {
    id: 2,
    imgSrc: "images/work_img_3.jpg",
    task: "STEM Workshops Conducted",
    color: "red",
    desc: "We organize STEM workshops to engage students in hands-on learning experiences in science, technology, engineering, and mathematics.",
  },
  {
    id: 3,
    imgSrc: "images/work_img_4.jpg",
    task: "Language Proficiency Courses",
    color: "blue",
    desc: "Our language proficiency courses help students become fluent in multiple languages, opening up new opportunities for them.",
  },
];

const testimonialData = [
  {
    id: 0,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour",
    imgSrc: "images/client_img_1.png",
    name: "Andrew James",
    designation: "Developer",
  },
  {
    id: 1,
    desc: "I am extremely satisfied with the quality of education provided by this institution. It has helped me grow both academically and personally.",
    imgSrc: "images/client_img_2.png",
    name: "Emily Smith",
    designation: "Student",
  },
  {
    id: 2,
    desc: "The dedicated faculty and staff at this school make learning a joyful experience. I couldn't have asked for a better educational environment.",
    imgSrc: "images/client_img_3.png",
    name: "John Doe",
    designation: "Parent",
  },
  {
    id: 3,
    desc: "This institution has exceeded my expectations in terms of academic excellence and extracurricular activities. I highly recommend it to all students and parents.",
    imgSrc: "images/client_img_2.png",
    name: "Lisa Anderson",
    designation: "Alumnus",
  },
];

const blogData = [
  {
    id: 0,
    imgSrc: "images/blog_1.jpg",
    category: "design",
    color: "light_blue",
    title: "Learn with these award-winning best blog collage courses",
    longTitle:
      "Learn with these Award-Winning Collage Courses for Design Enthusiasts",
    slug: "learn-with-these-award-winning-best-blog-collage-courses",
    desc: "We can provide you with a reliable hand in London you need today.",
    longDesc:
      "Are you passionate about design? Explore the world of design with our award-winning collage courses. Whether you're a novice or a seasoned designer, these courses will help you hone your skills and unleash your creativity.",
    author: "John Doe",
    date: "30 Jan 2023",
  },
  {
    id: 1,
    imgSrc: "images/blog_2.jpg",
    category: "technology",
    color: "orange",
    title: "Mastering JavaScript: Tips and Tricks for Web Developers",
    longTitle: "Mastering JavaScript: Tips and Tricks for Web Developers",
    slug: "mastering-javascript-tips-and-tricks-for-web-developers",
    desc: "Explore advanced JavaScript techniques to enhance your web development skills.",
    longDesc:
      "Take your web development skills to the next level with our comprehensive guide to mastering JavaScript. This blog post is packed with tips and tricks that will help both novice and experienced web developers write cleaner, more efficient code.",
    author: "Jane Smith",
    date: "26 Sep 2023",
  },
  {
    id: 2,
    imgSrc: "images/blog_3.jpg",
    category: "travel",
    color: "green",
    title: "Top 10 Must-Visit Destinations for Adventure Seekers",
    longTitle: "Top 10 Must-Visit Destinations for Adventure Seekers",
    slug: "top-10-must-visit-destinations-for-adventure-seekers",
    desc: "Embark on thrilling adventures by visiting these breathtaking destinations around the world.",
    longDesc:
      "Are you an adventure seeker looking for your next adrenaline rush? Discover the top 10 must-visit destinations that will satisfy your craving for adventure. From mountain treks to exotic wildlife encounters, these destinations have it all.",
    author: "Alice Johnson",
    date: "18 Aug 2023",
  },
  {
    id: 3,
    imgSrc: "images/blog_4.jpg",
    category: "food",
    color: "red",
    title: "Delicious and Nutritious: Healthy Recipes for a Balanced Diet",
    longTitle: "Delicious and Nutritious: Healthy Recipes for a Balanced Diet",
    slug: "delicious-and-nutritious-healthy-recipes-for-a-balanced-diet",
    desc: "Discover tasty recipes that will help you maintain a healthy and balanced diet.",
    longDesc:
      "Maintaining a healthy and balanced diet doesn't mean sacrificing flavor. Dive into our collection of delicious and nutritious recipes that will not only tantalize your taste buds but also support your journey toward a healthier you.",
    author: "Jack Ackerman",
    date: "25 May 2023",
  },
  {
    id: 4,
    imgSrc: "images/blog_5.jpg",
    category: "technology",
    color: "blue",
    title: "The Future of Artificial Intelligence: Trends and Innovations",
    longTitle: "The Future of Artificial Intelligence: Trends and Innovations",
    slug: "the-future-of-artificial-intelligence-trends-and-innovations",
    desc: "Stay updated on the latest AI trends and innovations shaping the future.",
    longDesc:
      "Artificial Intelligence is evolving rapidly. In this blog, we explore the most recent trends and innovations in AI technology, providing insights into how AI is shaping the future across various industries.",
    author: "Emily Davis",
    date: "12 Apr 2023",
  },
  {
    id: 5,
    imgSrc: "images/blog_6.jpg",
    category: "travel",
    color: "purple",
    title: "Exploring Hidden Gems: Off-the-Beaten-Path Travel Destinations",
    longTitle: "Exploring Hidden Gems: Off-the-Beaten-Path Travel Destinations",
    slug: "exploring-hidden-gems-off-the-beaten-path-travel-destinations",
    desc: "Escape the crowds and discover unique travel destinations around the world.",
    longDesc:
      "If you're tired of tourist traps, it's time to explore hidden gems. This blog takes you on a journey to off-the-beaten-path travel destinations that offer authentic experiences and a break from the crowds.",
    author: "Sophia Martinez",
    date: "5 Jul 2023",
  },
  {
    id: 6,
    imgSrc: "images/blog_7.jpg",
    category: "design",
    color: "light_blue",
    title: "Your Guide to Creating Stunning Website Designs",
    longTitle: "Your Guide to Creating Stunning Website Designs",
    slug: "your-guide-to-creating-stunning-website-designs",
    desc: "Learn essential tips and tricks for designing visually appealing websites.",
    longDesc:
      "Designing websites that captivate users requires a blend of creativity and technical know-how. This blog provides valuable insights and techniques for creating stunning website designs.",
    author: "David Wilson",
    date: "19 Nov 2023",
  },
  {
    id: 7,
    imgSrc: "images/blog_8.jpg",
    category: "food",
    color: "red",
    title: "The Art of Baking: Mastering Delicious Pastries",
    longTitle: "The Art of Baking: Mastering Delicious Pastries",
    slug: "the-art-of-baking-mastering-delicious-pastries",
    desc: "Discover the secrets to baking delectable pastries and desserts.",
    longDesc:
      "If you have a sweet tooth and a passion for baking, this blog is for you. Learn the art of baking and master the techniques to create mouthwatering pastries and desserts that will impress everyone.",
    author: "Ella Anderson",
    date: "8 Mar 2023",
  },
  {
    id: 8,
    imgSrc: "images/blog_9.jpg",
    category: "health",
    color: "green",
    title: "Mental Health Matters: Strategies for Well-Being",
    longTitle: "Mental Health Matters: Strategies for Well-Being",
    slug: "mental-health-matters-strategies-for-well-being",
    desc: "Explore effective strategies for maintaining mental health and well-being.",
    longDesc:
      "In today's fast-paced world, mental health is crucial. This blog delves into practical strategies and tips for maintaining mental well-being, reducing stress, and achieving a balanced and healthy life.",
    author: "Olivia Turner",
    date: "14 Feb 2023",
  },
  {
    id: 9,
    imgSrc: "images/blog_10.jpg",
    category: "technology",
    color: "orange",
    title: "Cybersecurity in a Digital World: Protecting Your Online Presence",
    longTitle:
      "Cybersecurity in a Digital World: Protecting Your Online Presence",
    slug: "cybersecurity-in-a-digital-world-protecting-your-online-presence",
    desc: "Learn essential cybersecurity practices to safeguard your online identity.",
    longDesc:
      "With the increasing reliance on the internet, cybersecurity is paramount. This blog discusses the importance of online security and provides tips and tools to protect your digital presence.",
    author: "Michael Carter",
    date: "22 Oct 2023",
  },
  {
    id: 10,
    imgSrc: "images/blog_11.jpg",
    category: "travel",
    color: "blue",
    title: "Culinary Adventures: Exploring World Cuisines",
    longTitle: "Culinary Adventures: Exploring World Cuisines",
    slug: "culinary-adventures-exploring-world-cuisines",
    desc: "Embark on a global culinary journey and savor the flavors of diverse cuisines.",
    longDesc:
      "Food is a universal language, and this blog takes you on a culinary adventure around the world. Discover the unique flavors, ingredients, and traditions of different cuisines that will tantalize your taste buds.",
    author: "Sophie Walker",
    date: "9 Jun 2023",
  },
  {
    id: 11,
    imgSrc: "images/blog_12.jpg",
    category: "science",
    color: "green",
    title: "The Wonders of Space: Exploring the Cosmos",
    longTitle: "The Wonders of Space: Exploring the Cosmos",
    slug: "the-wonders-of-space-exploring-the-cosmos",
    desc: "Journey through the cosmos and unravel the mysteries of space and astronomy.",
    longDesc:
      "Space has always fascinated humanity, and in this blog, we embark on a cosmic journey. Explore the mysteries of the universe, from distant galaxies to the wonders of our own solar system.",
    author: "Daniel White",
    date: "3 Nov 2023",
  },
  {
    id: 12,
    imgSrc: "images/blog_13.jpg",
    category: "food",
    color: "green",
    title: "Gourmet Delights: Culinary Adventures for Foodies",
    longTitle: "Gourmet Delights: Culinary Adventures for Foodies",
    slug: "gourmet-delights-culinary-adventures-for-foodies",
    desc: "Embark on a culinary journey to discover gourmet delicacies and epicurean experiences.",
    longDesc:
      "Calling all food enthusiasts! Join us as we embark on a gastronomic adventure to explore gourmet delights, from truffle tastings in France to wine pairings in Italy. Get ready to tantalize your taste buds.",
    author: "Ella Turner",
    date: "11 Sep 2023",
  },
  {
    id: 13,
    imgSrc: "images/blog_14.jpg",
    category: "health",
    color: "red",
    title: "Holistic Wellness: Nurturing Body, Mind, and Spirit",
    longTitle: "Holistic Wellness: Nurturing Body, Mind, and Spirit",
    slug: "holistic-wellness-nurturing-body-mind-and-spirit",
    desc: "Discover the principles of holistic wellness and achieve a balanced and fulfilling life.",
    longDesc:
      "True wellness encompasses more than just physical health. This blog explores the principles of holistic wellness, guiding you on a journey to nurture your body, mind, and spirit for a fulfilling and balanced life.",
    author: "Sophie Anderson",
    date: "29 Nov 2023",
  },
  {
    id: 14,
    imgSrc: "images/blog_15.jpg",
    category: "design",
    color: "light_blue",
    title: "Creating Digital Art: From Sketch to Masterpiece",
    longTitle: "Creating Digital Art: From Sketch to Masterpiece",
    slug: "creating-digital-art-from-sketch-to-masterpiece",
    desc: "Unlock your creativity and learn the process of creating stunning digital artworks.",
    longDesc:
      "Digital art offers endless possibilities for creative expression. In this blog, we guide you through the journey of creating digital art, from the initial sketch to the final masterpiece, with tips and techniques along the way.",
    author: "Alex Turner",
    date: "7 Jan 2023",
  },
];

const services = [
  {
    id: 0,
    iClassName: "fa fa-book",
    title: "Health Courses",
    desc: "Unveiling Wellness Through Our Comprehensive Health Courses.",
    color: "red",
  },
  {
    id: 1,
    iClassName: "fa fa-palette",
    title: "Expert-Led Training",
    desc: "Health Mastery Begins Here: Expert-Led Courses, Your Pathway to Wellness!",
    color: "gray",
  },
  {
    id: 2,
    iClassName: "fa fa-pencil-ruler",
    title: "Interactive Learning",
    desc: "Engage, Learn, Thrive: Interactive Learning for Health Excellence.",
    color: "green",
  },
  {
    id: 3,
    iClassName: "fa fa-analytics",
    title: "Certification",
    desc: "Certify Your Success: Elevate Your Skills, Transform Your Future!",
    color: "blue",
  },
  {
    id: 4,
    iClassName: "fa fa-pencil-paintbrush",
    title: "Client Success",
    desc: "Success Stories: Where Every Client's Journey Inspires Wellness Triumphs.",
    color: "orange",
  },
];

const courseDataArray = [
  {
    id: 0,
    imgSrc: "images/core.jpg",
    color: "orange",
    slug: "core-and-mandatory",
    title: "Core & Mandatory",
    category: "In-Class",
    price: "Level 2 Courses",
    instructor: "Smith John",
    lessons: "5 lessons",
    description:
      "Health Essentials: Elevate Your Knowledge with Core Courses!.",
    rating: 4,
    students: "17 Hours",
    instructorImg: "images/team_1.jpg",
    review: 43,
    date: "24 Jan 2023",
  },
  {
    id: 1,
    imgSrc: "images/firstaid.jpg",
    color: "green",
    slug: "first-aid-and-fire-safety",
    title: "First Aid & Fire Safety",
    category: "In-Class",
    price: "Level 2 & 3 Courses",
    instructor: "Hasan Mahmud",
    lessons: "1 lesson",
    description:
      "Safety First, Skills Forever: Master First Aid and Fire Safety Now!",
    rating: 4,
    students: "2 Hours",
    instructorImg: "images/team_2.jpg",
    review: 51,
    date: "28 Mar 2023",
  },
  {
    id: 2,
    imgSrc: "images/clinical.jpg",
    color: "red",
    slug: "clinical",
    title: "Clinical",
    category: "In-Class",
    price: "Level 2 & 3 Courses",
    instructor: "Khalid Hasan",
    lessons: "3 lessons",
    description: "Mastering Clinical Excellence: Elevate Your Expertise Today!",
    rating: 4,
    students: "9 Hours",
    instructorImg: "images/team_3.jpg",
    review: 21,
    date: "17 Jun 2023",
  },
  {
    id: 3,
    imgSrc: "images/specialist.jpg",
    color: "blue",
    slug: "specialist",
    title: "Specialist",
    category: "In-Class",
    price: "Level 2 & 3 Courses",
    instructor: "Sazal Ahmed",
    lessons: "8 lessons",
    description:
      "Precision in Practice: Master Your Expertise with Specialist Health Courses!",
    rating: 4,
    students: "29 Hours",
    instructorImg: "images/team_4.jpg",
    review: 35,
    date: "20 Apr 2023",
  },
  {
    id: 4,
    imgSrc: "images/healthsafety.jpg",
    color: "orange",
    slug: "health-and-safety",
    title: "Health and Safety",
    category: "In-Class",
    price: "Level 2 & 3 Courses",
    instructor: "Sarah Johnson",
    lessons: "3 lessons",
    description:
      "Safety Mastery Begins Here: Enroll in our Health and Safety Training Courses!",
    rating: 4,
    students: "12 Hours",
    instructorImg: "images/team_5.jpg",
    review: 37,
    date: "14 Jan 2023",
  },
];

const courseDataContents = [
  {
    id: 0,
    courseDataId: 0,
    content: "Level 2 Award in Basic Life Support",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 1,
    courseDataId: 0,
    content: "Level 2 Award in Duty of Care",
    time: "3 Hours",
    price: "200,000"
  },
  {
    id: 2,
    courseDataId: 0,
    content: "Level 2 Award in Effective Communication ",
    time: "3 Hours",
    price: "200,000"
  },
  {
    id: 3,
    courseDataId: 0,
    content: "Level 2 Award in Equality, Diversity and Inclusion",
    time: "6 Hours",
  },
  {
    id: 4,
    courseDataId: 0,
    content: "Level 2 Award in Food Safety, Nutrition and Hydration",
    time: "3 Hours",
    price: "200,000"
  },
  {
    id: 5,
    courseDataId: 0,
    content: "Level 2 Award in Safe Handling and Medication ",
    time: "3 Hours",
    price: "200,000"
  },
  {
    id: 6,
    courseDataId: 0,
    content: "Level 2 Award in Handling and Recording Information",
    time: "3 Hours",
    price: "200,000"
  },
  {
    id: 7,
    courseDataId: 0,
    content: "Level 2 Award in Health, Safety and Fire",
    time: "3 Hours",
    price: "200,000"
  },
  {
    id: 8,
    courseDataId: 0,
    content: "Level 2 Award in Infection Prevention and Control ",
    time: "3 Hours",
    price: "200,000"
  },
  {
    id: 9,
    courseDataId: 0,
    content: "Level 2 Award in Mental Capacity Act (Inc. DoLS)",
    time: "3 Hours",
    price: "200,000"
  },
  {
    id: 10,
    courseDataId: 0,
    content: "Level 2 Award in Moving and Assisting ",
    time: "3 Hours",
    price: "200,000"
  },
  {
    id: 11,
    courseDataId: 0,
    content: "Level 2 Award in Moving, Assisting and Hoisting ",
    time: "3 Hours",
    price: "200,000"
  },
  {
    id: 12,
    courseDataId: 0,
    content: "Level 2 Award in Oral Health",
    time: "3 Hours",
    price: "200,000"
  },
  {
    id: 13,
    courseDataId: 0,
    content: "Level 2 Award in Person-Centred Care and Support ",
    time: "3 Hours",
    price: "200,000"
  },
  {
    id: 14,
    courseDataId: 0,
    content: "Level 2 Award in Promoting Dignity in Care ",
    time: "3 Hours",
    price: "200,000"
  },
  {
    id: 15,
    courseDataId: 0,
    content: "Level 2 Award in Role of the Care Worker and Personal Development",
    time: "3 Hours",
    price: "200,000"
  },
  {
    id: 16,
    courseDataId: 0,
    content: "Level 2 Award in Safeguarding Adults",
    time: "3 Hours",
    price: "200,000"
  },
  {
    id: 17,
    courseDataId: 0,
    content: "Level 2 Award in Safeguarding Children",
    time: "3 Hours",
    price: "200,000"
  },
  {
    id: 18,
    courseDataId: 1,
    content: "Level 2 Award in Automated External Defibrillation",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 19,
    courseDataId: 1,
    content: "Level 2 Award in Basic Life Support ",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 20,
    courseDataId: 1,
    content: "Level 2 Award in Basic Paediatric First Aid",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 21,
    courseDataId: 1,
    content: "Level 2 Award in Emergency Paediatric First Aid",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 22,
    courseDataId: 1,
    content: "Level 2 Award in Fire Safety Awareness",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 23,
    courseDataId: 1,
    content: "Level 2 Award in First Aid Awareness ",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 24,
    courseDataId: 1,
    content: "Level 3 Award in Emergency First Aid at Work",
    time: "2 Hours",
    price: "300,000"
  },
  {
    id: 25,
    courseDataId: 1,
    content: "Level 3 Award in First Aid at Work",
    time: "2 Hours",
    price: "300,000"
  },
  {
    id: 26,
    courseDataId: 1,
    content: "Level 3 Award in First Aid at Work Requal ",
    time: "2 Hours",
    price: "300,000"
  },
  {
    id: 27,
    courseDataId: 1,
    content: "Level 3 Award in ILS ",
    time: "2 Hours",
    price: "300,000"
  },
  {
    id: 28,
    courseDataId: 1,
    content: "Level 3 Award in Paediatric First Aid",
    time: "2 Hours",
    price: "300,000"
  },
  {
    id: 29,
    courseDataId: 1,
    content: "Level 3 Award in the Role of the Fire Marshal ",
    time: "2 Hours",
    price: "300,000"
  },
  {
    id: 30,
    courseDataId: 2,
    content: "Level 2 Award in Anaphylaxis and Emergency Medication Awareness",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 31,
    courseDataId: 2,
    content: "Level 2 Award in Basic Clinical Observations",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 32,
    courseDataId: 2,
    content: "Level 2 Award in Catheter Care",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 33,
    courseDataId: 2,
    content: "Level 2 Award in Diabetes Awareness ",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 34,
    courseDataId: 2,
    content: "Level 2 Award in Epilepsy and Emergency Medication Awareness",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 35,
    courseDataId: 2,
    content: "Level 2 Award in Epilepsy Awareness",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 36,
    courseDataId: 2,
    content: "Level 2 Award in Inhalers and Nebulizers",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 37,
    courseDataId: 2,
    content: "Level 2 Award in Oxygen Therapy",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 38,
    courseDataId: 2,
    content: "Level 2 Award in PEG Feeding Awareness ",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 39,
    courseDataId: 2,
    content: "Level 2 Award in Stoma Care Awareness",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 40,
    courseDataId: 2,
    content: "Level 3 Award in PEG Feeding",
    time: "2 Hours",
    price: "300,000"
  },
  {
    id: 41,
    courseDataId: 2,
    content: "Level 3 Award in Tracheostomy",
    time: "2 Hours",
    price: "300,000"
  },
  {
    id: 42,
    courseDataId: 3,
    content: "Level 2 Award in Autism Spectrum",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 43,
    courseDataId: 3,
    content: "Level 2 Award in Boundaries and Good Practice ",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 44,
    courseDataId: 3,
    content: "Level 2 Award in Care Planning",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 45,
    courseDataId: 3,
    content: "Level 2 Award in Customer Service & Complaints Management",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 46,
    courseDataId: 3,
    content: "Level 2 Award in Dementia",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 47,
    courseDataId: 3,
    content: "Level 2 Award in Drug & Alcohol Abuse Awareness",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 48,
    courseDataId: 3,
    content: "Level 2 Award in Dysphagia Awareness",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 49,
    courseDataId: 3,
    content: "Level 2 Award in Dysphagia Awareness ",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 50,
    courseDataId: 3,
    content: "Level 2 Award in End of Life Care",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 51,
    courseDataId: 3,
    content: "Level 2 Award in Epilepsy & Buccal Midazolam",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 52,
    courseDataId: 3,
    content: "Level 2 Award in Learning Disability",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 53,
    courseDataId: 3,
    content: "Level 2 Award in Loss and Bereavement",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 54,
    courseDataId: 3,
    content: "Level 2 Award in Mental Health",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 55,
    courseDataId: 3,
    content: "Level 2 Award in People Hoisting",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 56,
    courseDataId: 3,
    content: "Level 2 Award in Personal Care",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 57,
    courseDataId: 3,
    content: "Level 2 Award in Pressure Care Management ",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 58,
    courseDataId: 3,
    content: "Level 2 Award in Prevention of Slips, Trips and Falls",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 59,
    courseDataId: 3,
    content: "Level 2 Award in Professional Relationships and Boundaries",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 60,
    courseDataId: 3,
    content: "Level 2 Award in Stroke Awareness",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 61,
    courseDataId: 3,
    content: "Level 2 Award in the Introduction of Positive Behaviour Support",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 62,
    courseDataId: 3,
    content: "Level 2 Award in Understanding Behaviours That Challenge ",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 63,
    courseDataId: 3,
    content: "Level 2 Award in Understanding Behaviours That Challenge in Dementia",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 64,
    courseDataId: 3,
    content: "Level 2 Award in Understanding Mental Health ",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 65,
    courseDataId: 3,
    content: "Level 3 Award in Dementia",
    time: "2 Hours",
    price: "300,000"
  },
  {
    id: 66,
    courseDataId: 3,
    content: "Level 3 Award in Medication Competency and Management",
    time: "2 Hours",
    price: "300,000"
  },
  {
    id: 67,
    courseDataId: 3,
    content: "Level 3 Award in Positive Behaviour Support",
    time: "2 Hours",
    price: "300,000"
  },
  {
    id: 68,
    courseDataId: 3,
    content: "Level 3 Award in Safeguarding Adults",
    time: "2 Hours",
    price: "300,000"
  },
  {
    id: 69,
    courseDataId: 4,
    content: "Level 2 Award in Food Safety",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 70,
    courseDataId: 4,
    content: "Level 2 Award in Food Safety Principles ",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 71,
    courseDataId: 4,
    content: "Level 2 Award in General Data Protection Regulation – GDPR",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 72,
    courseDataId: 4,
    content: "Level 2 Award in Handling Hazardous Substance (COSHH)",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 73,
    courseDataId: 4,
    content: "Level 2 Award in Lone Working Awareness ",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 74,
    courseDataId: 4,
    content: "Level 2 Award in Managing Personal Stress",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 75,
    courseDataId: 4,
    content: "Level 2 Award in Managing Stress in the Workplace",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 76,
    courseDataId: 4,
    content: "Level 2 Award in Manual Handling",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 77,
    courseDataId: 4,
    content: "Level 2 Award in Risk Assessment in Care",
    time: "2 Hours",
    price: "200,000"
  },
  {
    id: 78,
    courseDataId: 4,
    content: "Level 3 Award in Assessing Competency in Moving and Assisting",
    time: "2 Hours",
    price: "300,000"
  },
  {
    id: 79,
    courseDataId: 4,
    content: "Level 3 Award in Food Safety",
    time: "2 Hours",
    price: "300,000"
  },
  {
    id: 80,
    courseDataId: 4,
    content: "Level 3 Award in Managing and Supervising Safely",
    time: "2 Hours",
    price: "300,000"
  },
  {
    id: 81,
    courseDataId: 4,
    content: "Level 3 Award in Managing Risk Assessment in Care",
    time: "2 Hours",
    price: "300,000"
  },
];

const eLearningCourses = [
  {
    id: 0,
    imgSrc: "images/certificate.jpg",
    color: "orange",
    slug: "care-certificate",
    title: "The Care Certificate",
    category: "E-Learning",
    price: "150,000",
    instructor: "Smith John",
    lessons: "15 Objectives",
    description:
      "Every individual new to health and social care, as well as those changing jobs within it, is required to undertake an induction programme that meets the Care Certificate standards and allows them to provide evidence of completedobjectives.",
    description2:
      "Our Care Certificate e-learning course provides underpinning theory-basedknowledge for the below 15 standards. Courses also include a resources section with access to a downloadable workbook for all 15 standards, holistic assessment sheets and workplace competency record sheets.",
    rating: 4,
    students: "6 Hours",
    instructorImg: "images/team_1.jpg",
    review: 43,
    date: "24 Jan 2023",
  },
  {
    id: 1,
    imgSrc: "images/moving.jpg",
    color: "green",
    slug: "principles-of-moving-and-assisting",
    title: "Principles of Moving & Assisting",
    category: "E-Learning",
    price: "20,000",
    instructor: "Hasan Mahmud",
    lessons: "5 Objectives",
    description:
      "To recognise the principles of safe moving and assisting and the importanceof risk assessment prior to any moving and assisting task",
    rating: 4,
    students: "1 Hour",
    instructorImg: "images/team_2.jpg",
    review: 51,
    date: "28 Mar 2023",
  },
  {
    id: 2,
    imgSrc: "images/safehandling.jpg",
    color: "red",
    slug: "safe-handling-of-medication",
    title: "Safe Handling of Medication",
    category: "E-Learning",
    price: "20,000",
    instructor: "Khalid Hasan",
    lessons: "6 Objectives",
    description:
      "To provide information to ensure the safe handling and administration of medicines",
    rating: 4,
    students: "1 Hour",
    instructorImg: "images/team_3.jpg",
    review: 21,
    date: "17 Jun 2023",
  },
  {
    id: 3,
    imgSrc: "images/dementia.jpg",
    color: "blue",
    slug: "dementia-awareness",
    title: "Dementia Awareness",
    category: "E-Learning",
    price: "20,000",
    instructor: "Sazal Ahmed",
    lessons: "5 Objectives",
    description:
      "To provide an underpinning knowledge to staff in the health and social caresector to support people living with dementia.",
    rating: 4,
    students: "1 Hour",
    instructorImg: "images/team_4.jpg",
    review: 35,
    date: "20 Apr 2023",
  },
  {
    id: 4,
    imgSrc: "images/infectioncontrol.jpg",
    color: "orange",
    slug: "infection-control",
    title: "Infection Control",
    category: "E-Learning",
    price: "20,000",
    instructor: "Sarah Johnson",
    lessons: "5 Objectives",
    description:
      "To provide information in order to practice safely and to protect individuals being supported, colleagues and self from infection",
    rating: 4,
    students: "1 Hour",
    instructorImg: "images/team_5.jpg",
    review: 37,
    date: "14 Jan 2023",
  },
  {
    id: 5,
    imgSrc: "images/foodsafety.jpg",
    color: "orange",
    slug: "Food-Safety-Principles",
    title: "Food Safety Principles",
    category: "E-Learning",
    price: "20,000",
    instructor: "Sarah Johnson",
    lessons: "5 Objectives",
    description: "To be able to prepare and handle food safely",
    rating: 4,
    students: "1 Hour",
    instructorImg: "images/team_5.jpg",
    review: 37,
    date: "14 Jan 2023",
  },
  {
    id: 6,
    imgSrc: "images/safeguarding.jpg",
    color: "orange",
    slug: "safeguarding-adults",
    title: "Safeguarding Adults",
    category: "E-Learning",
    price: "20,000",
    instructor: "Sarah Johnson",
    lessons: "3 Objectives",
    description:
      "To ensure care and support workers can identify abuse and respond appropriately to situations where abuse may occur and work in a person centred way that promotes rights, inclusion",
    rating: 4,
    students: "1 Hour",
    instructorImg: "images/team_5.jpg",
    review: 37,
    date: "14 Jan 2023",
  },
  {
    id: 7,
    imgSrc: "images/dysphagia.jpg",
    color: "orange",
    slug: "dysphagia-awareness",
    title: "Dysphagia Awareness",
    category: "E-Learning",
    price: "20,000",
    instructor: "Sarah Johnson",
    lessons: "7 Objectives",
    description:
      "Understand the importance of multi-disciplinary approach to risk assessmentsand management of dysphagia",
    rating: 4,
    students: "1 Hour",
    instructorImg: "images/team_5.jpg",
    review: 37,
    date: "14 Jan 2023",
  },
  {
    id: 8,
    imgSrc: "images/epilepsy.jpg",
    color: "orange",
    slug: "epilepsy-and-emergency-medication",
    title: "Epilepsy & Emergency Medication",
    category: "E-Learning",
    price: "20,000",
    instructor: "Sarah Johnson",
    lessons: "4 Objectives",
    description:
      "To provide support staff and professionals with a basic knowledge of epilepsyand the management of seizures",
    rating: 4,
    students: "1 Hour",
    instructorImg: "images/team_5.jpg",
    review: 37,
    date: "14 Jan 2023",
  },
  {
    id: 9,
    imgSrc: "images/equality.jpg",
    color: "orange",
    slug: "equality-diversity-and-inclusion",
    title: "Equality, Diversity & Inclusion",
    category: "E-Learning",
    price: "20,000",
    instructor: "Sarah Johnson",
    lessons: "5 Objectives",
    description:
      "To introduce equality, diversity and human rights, so that both equality anddiversity can be promoted and discrimination reduced, thus enabling all to bevalued as individuals.",
    rating: 4,
    students: "1 Hour",
    instructorImg: "images/team_5.jpg",
    review: 37,
    date: "14 Jan 2023",
  },
  {
    id: 10,
    imgSrc: "images/covid.jpg",
    color: "orange",
    slug: "covid19-ipic",
    title: "COVID-19 Infection, Prevention, Identification & Control",
    category: "E-Learning",
    price: "20,000",
    instructor: "Sarah Johnson",
    lessons: "10 Objectives",
    description:
      "The Coronavirus (COVID-19): Infection prevention, identification and control course provides workers with information in order to minimise, prevent andcontrol the spread of infection..",
    rating: 4,
    students: "1 Hour",
    instructorImg: "images/team_5.jpg",
    review: 37,
    date: "14 Jan 2023",
  },
  {
    id: 11,
    imgSrc: "images/dataprotection.jpg",
    color: "orange",
    slug: "GDPR",
    title: "General Data Protection Regulation (GDPR)",
    category: "E-Learning",
    price: "20,000",
    instructor: "Sarah Johnson",
    lessons: "6 Objectives",
    description:
      "The Coronavirus (COVID-19): Infection prevention, identification and control course provides wTo provide learners with a general understanding and awareness of the newGeneral Data Protection Regulation.",
    rating: 4,
    students: "1 Hour",
    instructorImg: "images/team_5.jpg",
    review: 37,
    date: "14 Jan 2023",
  },
  {
    id: 12,
    imgSrc: "images/harzardous.jpg",
    color: "orange",
    slug: "handling-harzadous-substances",
    title: "Handling Hazardous Substances (COSHH)",
    category: "E-Learning",
    price: "20,000",
    instructor: "Sarah Johnson",
    lessons: "5 Objectives",
    description:
      "To provide an understanding of substances hazardous to health and howtheyshould be used safely",
    rating: 4,
    students: "1 Hour",
    instructorImg: "images/team_5.jpg",
    review: 37,
    date: "14 Jan 2023",
  },
  {
    id: 13,
    imgSrc: "images/firstaidbox.jpg",
    color: "orange",
    slug: "first-aid-principles",
    title: "First Aid Principles",
    category: "E-Learning",
    price: "20,000",
    instructor: "Sarah Johnson",
    lessons: "6 Objectives",
    description:
      "To provide learners with the knowledge and expertise in the principles of emergency first aid.",
    rating: 4,
    students: "2 Hours",
    instructorImg: "images/team_5.jpg",
    review: 37,
    date: "14 Jan 2023",
  },
  {
    id: 14,
    imgSrc: "images/firemarshall.jpg",
    color: "orange",
    slug: "Role-of-a-Fire-Marshal",
    title: "Role of a Fire Marshal",
    category: "E-Learning",
    price: "20,000",
    instructor: "Sarah Johnson",
    lessons: "6 Objectives",
    description:
      "To provide knowledge and skills required to be a competent Fire Marshal.",
    rating: 4,
    students: "1 Hour",
    instructorImg: "images/team_5.jpg",
    review: 37,
    date: "14 Jan 2023",
  },
  {
    id: 15,
    imgSrc: "images/health.jpg",
    color: "orange",
    slug: "Health-and-Safety-Essentials",
    title: "Health & Safety Essentials",
    category: "E-Learning",
    price: "20,000",
    instructor: "Sarah Johnson",
    lessons: "6 Objectives",
    description:
      "This course provides learners with an awareness of Health and Safety to helpthem stay safe in the workplace.",
    rating: 4,
    students: "2 Hours",
    instructorImg: "images/team_5.jpg",
    review: 37,
    date: "14 Jan 2023",
  },
];

const eLearningCoursesContents = [
  {
    id: 0,
    eLearningDataId: 0,
    content: "Understand your role",
  },
  {
    id: 1,
    eLearningDataId: 0,
    content: "Your personal development",
  },
  {
    id: 2,
    eLearningDataId: 0,
    content: "Duty of care",
  },
  {
    id: 3,
    eLearningDataId: 0,
    content: "Equality and diversity",
  },
  {
    id: 4,
    eLearningDataId: 0,
    content: "Work in a person centred way",
  },
  {
    id: 5,
    eLearningDataId: 0,
    content: "Communication",
  },
  {
    id: 6,
    eLearningDataId: 0,
    content: "Privacy and dignity",
  },
  {
    id: 7,
    eLearningDataId: 0,
    content: "Fluids and nutrition",
  },
  {
    id: 8,
    eLearningDataId: 0,
    content: "Awareness of mental health, dementia and learning disability",
  },
  {
    id: 9,
    eLearningDataId: 0,
    content: "Safeguarding adults",
  },
  {
    id: 10,
    eLearningDataId: 0,
    content: "Safeguarding children",
  },
  {
    id: 11,
    eLearningDataId: 0,
    content: "Basic life support",
  },
  {
    id: 12,
    eLearningDataId: 0,
    content: "Health and safety",
  },
  {
    id: 13,
    eLearningDataId: 0,
    content: "Handling information",
  },
  {
    id: 14,
    eLearningDataId: 0,
    content: "Infection prevention and control",
  },
  {
    id: 15,
    eLearningDataId: 1,
    content: "To understand the basic anatomy and physiology of the spine",
  },
  {
    id: 16,
    eLearningDataId: 1,
    content: "To know the main legislation relating to moving and assisting",
  },
  {
    id: 17,
    eLearningDataId: 1,
    content: "To know the principles of safe moving and assisting",
  },
  {
    id: 18,
    eLearningDataId: 1,
    content: "Explain common moving and assisting injuries",
  },
  {
    id: 19,
    eLearningDataId: 1,
    content: "To be able to suitably assess moving and assisting operations",
  },
  {
    id: 20,
    eLearningDataId: 2,
    content:
      "Understand the legislation, policy and procedures relevant to the administration and safe handling of medicines",
  },
  {
    id: 21,
    eLearningDataId: 2,
    content: "Describe common medications and their use",
  },
  {
    id: 22,
    eLearningDataId: 2,
    content:
      "Understand the procedures and techniques for the safe administration of medication",
  },
  {
    id: 23,
    eLearningDataId: 2,
    content:
      "Explain the medication classifications and types and routes of administration",
  },
  {
    id: 24,
    eLearningDataId: 2,
    content: "Describe common side effects and adverse reactions",
  },
  {
    id: 25,
    eLearningDataId: 2,
    content: "Understanding receiving storage and disposal",
  },
  {
    id: 26,
    eLearningDataId: 3,
    content: "Understand what dementia is",
  },
  {
    id: 27,
    eLearningDataId: 3,
    content: "Know the most common types of dementia and their cause",
  },
  {
    id: 28,
    eLearningDataId: 3,
    content: "- Identify some common symptoms of the condition",
  },
  {
    id: 29,
    eLearningDataId: 3,
    content: "Understand key features of the theoretical models of dementia",
  },
  {
    id: 30,
    eLearningDataId: 3,
    content:
      "Consider factors relating to an individuals experience of dementia",
  },
  {
    id: 31,
    eLearningDataId: 4,
    content: "Explain the causes of infection and the methods of control",
  },
  {
    id: 32,
    eLearningDataId: 4,
    content:
      "Identify the legislation and guidance associated with infection preventionand contro",
  },
  {
    id: 33,
    eLearningDataId: 4,
    content: "lDescribe employer and employee responsibilities",
  },
  {
    id: 34,
    eLearningDataId: 4,
    content: "Explain safe practice and the use of PPE and personal hygiene",
  },
  {
    id: 35,
    eLearningDataId: 4,
    content:
      "Understand the principles of decontamination and waste management",
  },
  {
    id: 36,
    eLearningDataId: 5,
    content: "Understand the importance of food safety legislation",
  },
  {
    id: 37,
    eLearningDataId: 5,
    content: "List the hazards associated with food hygiene",
  },
  {
    id: 38,
    eLearningDataId: 5,
    content:
      "Explain how control measures and monitoring can prevent food poisoning",
  },
  {
    id: 39,
    eLearningDataId: 5,
    content: "List the type of pests linked to food hygiene",
  },
  {
    id: 40,
    eLearningDataId: 5,
    content: "Explain the stages of Hazard Analysis Critical Control Points",
  },
  {
    id: 41,
    eLearningDataId: 6,
    content: "Identify legislation and guidance relevant to safeguarding",
  },
  {
    id: 42,
    eLearningDataId: 6,
    content:
      "List types of abuseIdentify signs, symptoms and risk factors of abuse",
  },
  {
    id: 43,
    eLearningDataId: 6,
    content: "Explain employer and employee responsibilities",
  },
  {
    id: 44,
    eLearningDataId: 7,
    content: "Know the definition of dysphagia",
  },
  {
    id: 45,
    eLearningDataId: 7,
    content: "Understand the normal and abnormal swallowing reflex",
  },
  {
    id: 46,
    eLearningDataId: 7,
    content: "List the causes of dysphagia",
  },
  {
    id: 47,
    eLearningDataId: 7,
    content: "Recognise the signs, symptoms and complications",
  },
  {
    id: 48,
    eLearningDataId: 7,
    content: "Understand how dysphagia is diagnosed",
  },
  {
    id: 49,
    eLearningDataId: 7,
    content: "Discuss the management of a person with dysphagia",
  },
  {
    id: 50,
    eLearningDataId: 7,
    content:
      "Understand the importance of multi-disciplinary approach to risk assessments and management",
  },
  {
    id: 51,
    eLearningDataId: 8,
    content: "List the causes and types of epilepsy",
  },
  {
    id: 52,
    eLearningDataId: 8,
    content:
      "Describe the general management of seizures and seizure management plans",
  },
  {
    id: 53,
    eLearningDataId: 8,
    content: "Describe the use of Midazolam",
  },
  {
    id: 54,
    eLearningDataId: 8,
    content: "Describe the use of Diazepam",
  },
  {
    id: 55,
    eLearningDataId: 9,
    content: "Define key terms associated within equality and diversity",
  },
  {
    id: 56,
    eLearningDataId: 9,
    content: "Explain how the law protects people from discrimination",
  },
  {
    id: 57,
    eLearningDataId: 9,
    content: "Define prejudice and explain how it can impact on individuals",
  },
  {
    id: 58,
    eLearningDataId: 9,
    content: "Identify where discrimination can be found",
  },
  {
    id: 59,
    eLearningDataId: 9,
    content:
      "Know how to promote diversity and reduce discrimination in the workplace",
  },
  {
    id: 60,
    eLearningDataId: 10,
    content: "Understand what Coronavirus (COVID-19) is",
  },
  {
    id: 61,
    eLearningDataId: 10,
    content: "List the signs and symptoms",
  },
  {
    id: 62,
    eLearningDataId: 10,
    content: "List who is at risk of infection",
  },
  {
    id: 63,
    eLearningDataId: 10,
    content: "General advice for COVID-19 / safe practice",
  },
  {
    id: 64,
    eLearningDataId: 10,
    content: "Understand the chain of infection",
  },
  {
    id: 65,
    eLearningDataId: 10,
    content: "Understand measures for preventing and limiting the spread",
  },
  {
    id: 66,
    eLearningDataId: 10,
    content: "Demonstrate effective hand hygiene",
  },
  {
    id: 67,
    eLearningDataId: 10,
    content: "Demonstrate effective use of disinfectant hand rubs",
  },
  {
    id: 68,
    eLearningDataId: 10,
    content: "Understand appropriate PPE",
  },
  {
    id: 69,
    eLearningDataId: 10,
    content: "Understand appropriate waste segregation",
  },
  {
    id: 70,
    eLearningDataId: 11,
    content: "Understand the General Data Protection Regulation (GDPR)",
  },
  {
    id: 71,
    eLearningDataId: 11,
    content: "Outline the 6 data protection principles",
  },
  {
    id: 72,
    eLearningDataId: 11,
    content: "Understand the special categories of personal data",
  },
  {
    id: 73,
    eLearningDataId: 11,
    content:
      "Understand the main responsibilities of organisations under the GDPR",
  },
  {
    id: 74,
    eLearningDataId: 11,
    content: "Explain what Data Protection Impact assessments are",
  },
  {
    id: 75,
    eLearningDataId: 11,
    content:
      "Understand rules for data breach reporting and transferring personal data outside of the EU",
  },
  {
    id: 76,
    eLearningDataId: 12,
    content: "Define 'substance hazardous to health",
  },
  {
    id: 77,
    eLearningDataId: 12,
    content: "Identify the main legislation relevant to COSHH",
  },
  {
    id: 78,
    eLearningDataId: 12,
    content: "Identify common hazardous substances",
  },
  {
    id: 79,
    eLearningDataId: 12,
    content: "Describe ways that hazardous substances enter the body",
  },
  {
    id: 80,
    eLearningDataId: 12,
    content: "List safe practices for handling hazardous substances",
  },
  {
    id: 81,
    eLearningDataId: 13,
    content: "Describe your actions in an emergency",
  },
  {
    id: 82,
    eLearningDataId: 13,
    content: "Demonstrate adult resuscitation including use of AED",
  },
  {
    id: 83,
    eLearningDataId: 13,
    content: "Explain the management of adult choking",
  },
  {
    id: 84,
    eLearningDataId: 13,
    content: "Demonstrate the management of the unresponsive casualty",
  },
  {
    id: 85,
    eLearningDataId: 13,
    content: "Describe how to recognise and treat bleeding and shock",
  },
  {
    id: 86,
    eLearningDataId: 13,
    content:
      "Explain the treatment of heart attacks, seizures, burns and scalds",
  },
  {
    id: 87,
    eLearningDataId: 14,
    content: "List the reasons for fire safety legislation",
  },
  {
    id: 88,
    eLearningDataId: 14,
    content: "Explain the principles of fire ",
  },
  {
    id: 89,
    eLearningDataId: 14,
    content: "Describe how to conduct a risk assessment",
  },
  {
    id: 90,
    eLearningDataId: 14,
    content: "Describe the different methods of evacuation",
  },
  {
    id: 91,
    eLearningDataId: 14,
    content: "Identify fire safety equipment in the workplace",
  },
  {
    id: 92,
    eLearningDataId: 14,
    content:
      "Describe how fire safety issues should be managed in the workplace",
  },
  {
    id: 93,
    eLearningDataId: 15,
    content: "Identify relevant health and safety legislation",
  },
  {
    id: 94,
    eLearningDataId: 15,
    content: "Understand the controls of substances hazardous to health",
  },
  {
    id: 95,
    eLearningDataId: 15,
    content: "Describe hazards and risks within the workplace",
  },
  {
    id: 96,
    eLearningDataId: 15,
    content: "Identify principles of good fire safety management",
  },
  {
    id: 97,
    eLearningDataId: 15,
    content: "Describe your action in the event of a fire",
  },
  {
    id: 98,
    eLearningDataId: 15,
    content:
      "Understand how to identify and help control the risks from common workplace hazards",
  },
];

const teamData = [
  {
    id: 0,
    imgSrc: "images/dapreye.jpeg",
    name: "Dapreye Danagogo",
    designation: "Healthcare Trainer",
    slug: "benjamin-carter",
    about:
      "I am a dedicated teacher with a passion for inspiring young minds. I believe in creating a positive learning environment to help students reach their full potential.",
    phone: "+234 8033204088",
    email: "dapreye@gmail.com",
  },
  {
    id: 1,
    imgSrc: "images/osibor.jpeg",
    name: "Ogbebor Blessing",
    designation: "Healthcare Trainer",
    slug: "john-smith",
    about:
      "As the principal of this school, I am committed to fostering academic excellence and a supportive community. Together, we shape the future of our students.",
    phone: "+234 7033406997",
    email: "ogbeborblessing9@gmail.com",
  },
  {
    id: 2,
    imgSrc: "images/omisola.jpeg",
    name: "Omisola Olusegun Oyeleke",
    designation: "Healthcare Trainer",
    slug: "emily-davis",
    about:
      "I assist students in their learning journey, ensuring they grasp fundamental concepts. Together, we explore the exciting world of knowledge.",
    phone: "+234 8084742476",
    email: "oooyeleke@gmail.com",
  },
  {
    id: 3,
    imgSrc: "images/osadumi.jpeg",
    name: "Osadumi Seun",
    designation: "Healthcare Trainer",
    slug: "michael-johnson",
    about:
      "I provide guidance and support to students facing personal and academic challenges. My goal is to help them thrive emotionally and academically.",
    phone: "+234 8146202204",
    email: "osadumiseun@gmail.com",
  },
  {
    id: 4,
    imgSrc: "images/asibor.jpeg",
    name: "Asibor Oluwatosin Sade",
    designation: "Healthcare Trainer",
    slug: "david-wilson",
    about:
      "As a librarian, I'm passionate about nurturing a love for reading and research. I'm here to assist students in their quest for knowledge.",
    phone: "+234 8106301497",
    email: "estherasibor93@gmail.com",
  },
  {
    id: 5,
    imgSrc: "images/stephen.jpeg",
    name: "Ezemonye Stephen",
    designation: "Science Teacher",
    slug: "daniel-brown",
    about:
      "Science is my passion, and I aim to make it exciting and accessible for all students. Let's explore the wonders of the natural world together.",
    phone: "+234 703 193 7157",
    email: "stephenalexss.a@gmail.com",
  },
];

const activitiesData = [
  {
    id: 0,
    color: "light_blue",
    iClassName: "fa fa-book",
    title: "Parenting Bill",
  },
  {
    id: 1,
    color: "green",
    iClassName: "fa fa-graduation-cap",
    title: "Engineering",
  },
  {
    id: 2,
    color: "orange",
    iClassName: "fa fa-university",
    title: "Sports Training",
  },
  {
    id: 3,
    color: "blue",
    iClassName: "fa fa-books-medical",
    title: "School Directly",
  },
  {
    id: 4,
    color: "green",
    iClassName: "fa fa-analytics",
    title: "Digital Marketing",
  },
];

const bundles = [
  {
    id: 0,
    imgSrc: "images/bundle1.png",
    color: "orange",
    slug: "bundle-1",
    title: "Bundle 1",
    category: "Bundle 1",
    price: "399,500",
    lessons: "13 packages",
    description:
      "Basic Life Support - Infection Prevention and Control - Safeguarding Children ...",
  },
  {
    id: 1,
    name: "Bundle 2",
    imgSrc: "images/bundle2.png",
    color: "orange",
    slug: "bundle-2",
    title: "Bundle 2",
    category: "Bundle 2",
    price: "399,500",
    lessons: "13 packages",
    description:
      "Autism Spectrum (Level 2) - Diabetes Awareness (Level 2) - Learning Disability(Level 2) ...",
  },
  {
    id: 2,
    name: "Bundle 3",
    imgSrc: "images/bundle3.png",
    color: "orange",
    slug: "bundle-3",
    title: "Bundle 3",
    category: "Bundle 3",
    price: "399,500",
    lessons: "13 packages",
    description:
      "Managing risk accessments in care(Level 3) - Medications competency and management(Level 3) - Stroke Awareness ...",
  },
  {
    id: 3,
    imgSrc: "images/bundle4.png",
    color: "orange",
    slug: "bundle-4",
    title: "Bundle 4 (Stand Alone Course)",
    category: "Bundle 4",
    price: "399,500",
    lessons: "57 packages",
    description:
      "LEVEL 2 Courses + LEVEL 3 Courses, Duty of Care - Medications Competency MGT ...",
  },
  {
    id: 4,
    name: "Bundle 5",
    imgSrc: "images/bundle5.png",
    color: "orange",
    slug: "bundle-5",
    title: "Bundle 5 (Online Course)",
    category: "Bundle 5",
    price: "399,500",
    lessons: "20 packages",
    description:
      "Principles of moving and assisting - GDPR - Safe handling of medication - Dementia Awareness ...",
  },
];

const bundleContents = [

 
  {
    id: 2,
    bundleDataId: 0,
    content: "Basic life support (level 2)",
  },
  {
    id: 3,
    bundleDataId: 0,
    content: "Infection, prevention and Control (level 2)",
  },
  {
    id: 4,
    bundleDataId: 0,
    content: "Safe Guarding Children (level 2)",
  },
  {
    id: 5,
    bundleDataId: 0,
    content: "Safe Guarding Children (level 2)",
  },
  {
    id: 6,
    bundleDataId: 0,
    content: "Food safety (level 3)",
  },
  {
    id: 7,
    bundleDataId: 0,
    content: "First Aid At work (level 3)",
  },
  
  {
    id: 11,
    bundleDataId: 0,
    content: "Health, Safety, Fire (level 2)",
  },
  {
    id: 12,
    bundleDataId: 0,
    content: "Equality, Diversity And Inclusion (level 2)",
  },
  {
    id: 13,
    bundleDataId: 1,
    content: "Autism spectrum (level 2)",
  },
  {
    id: 14,
    bundleDataId: 1,
    content: "Diabetes Awareness (level 2)",
  },
  {
    id: 15,
    bundleDataId: 1,
    content: "Epilepsy and Emergency medication Awareness (level 2)",
  },
  {
    id: 16,
    bundleDataId: 1,
    content: "Learning Disability (level 2)",
  },
  {
    id: 17,
    bundleDataId: 1,
    content: "Basic clinical observation (level 2)",
  },
  {
    id: 18,
    bundleDataId: 1,
    content: "Dementia (level 3)",
  },
  {
    id: 19,
    bundleDataId: 1,
    content: "ILS (level 3)",
  },
  {
    id: 20,
    bundleDataId: 1,
    content: "Stroke Awareness (level 2)",
  },
  {
    id: 26,
    bundleDataId: 2,
    content: "Medications competency and management (level 3)",
  },
  {
    id: 27,
    bundleDataId: 2,
    content: "Managing Risk Assessment in care (level 3)",
  },
  {
    id: 28,
    bundleDataId: 2,
    content: "Understanding mental health (level 2)",
  },
  {
    id: 29,
    bundleDataId: 2,
    content: "Moving, Assisting and Hosting (level 2)",
  },
  {
    id: 30,
    bundleDataId: 2,
    content: "Stroke Awareness (level 2)",
  },
  {
    id: 31,
    bundleDataId: 2,
    content: "Diabetes Awareness (level 2)",
  },
  {
    id: 32,
    bundleDataId: 2,
    content: "Epilepsy and Emergency medication Awareness (level 2)",
  },
  {
    id: 33,
    bundleDataId: 2,
    content: "Autism spectrum (level 2)",
  },
  
  
  {
    id: 39,
    bundleDataId: 2,
    content: "Moricol Quality Service",
  },
  {
    id: 40,
    bundleDataId: 4,
    content: "Principles of moving and assisting",
  },
  {
    id: 41,
    bundleDataId: 4,
    content: "Safe handling of medication.",
  },
  {
    id: 42,
    bundleDataId: 4,
    content: "Dementia Awareness ",
  },
  {
    id: 43,
    bundleDataId: 4,
    content: "Injection control",
  },
  {
    id: 44,
    bundleDataId: 4,
    content: "Food safety principles    ",
  },
  {
    id: 45,
    bundleDataId: 4,
    content: "Safe Guarding Adults    ",
  },
  {
    id: 46,
    bundleDataId: 4,
    content: "Dysphagia Awareness",
  },
  {
    id: 47,
    bundleDataId: 4,
    content: "Epilepsy and Emergency Medication",
  },
  {
    id: 48,
    bundleDataId: 4,
    content: "Equality, Diversity and Inclusion ",
  },
  {
    id: 49,
    bundleDataId: 4,
    content: "Covid-19 injection, prevention, identification and control",
  },
  {
    id: 50,
    bundleDataId: 4,
    content: "General data protection regulation (GDPR)",
  },
  {
    id: 51,
    bundleDataId: 4,
    content: "Handling hazardous substance (COSHH)    ",
  },
  {
    id: 52,
    bundleDataId: 4,
    content: "First aid principles",
  },
  {
    id: 53,
    bundleDataId: 4,
    content: "Role of a fire marshall",
  },
  {
    id: 54,
    bundleDataId: 4,
    content: "Health and safety essentials",
  },
 
 

  
  {
    id: 61,
    bundleDataId: 3,
    content: "Duty of care",
  },
  {
    id: 62,
    bundleDataId: 3,
    content: "Effective Communication",
  },
  {
    id: 63,
    bundleDataId: 3,
    content: "Food, safety, Nutrition and Hydration.",
  },
  {
    id: 64,
    bundleDataId: 3,
    content: "Safe Handling And Medication",
  },
  {
    id: 65,
    bundleDataId: 3,
    content: "Handling And Recording information.",
  },
  {
    id: 66,
    bundleDataId: 3,
    content: "Mental Capacity Act (inc. Dols)",
  },
  {
    id: 67,
    bundleDataId: 3,
    content: "Oral Health",
  },
  {
    id: 68,
    bundleDataId: 3,
    content: "Person centred care And support",
  },
  {
    id: 69,
    bundleDataId: 3,
    content: "Promoting Dignity in care",
  },
  {
    id: 70,
    bundleDataId: 3,
    content: "Role of care worker and personal Development",
  },
  {
    id: 71,
    bundleDataId: 3,
    content: "Automated External Defibrillation",
  },
  {
    id: 72,
    bundleDataId: 3,
    content: "Basic Paediatric first Aid",
  },
  {
    id: 73,
    bundleDataId: 3,
    content: "Emergency Paediatric first Aid",
  },
  {
    id: 74,
    bundleDataId: 3,
    content: "Fire safety Awareness",
  },
  {
    id: 75,
    bundleDataId: 3,
    content: "First aid Awareness ",
  },
  {
    id: 76,
    bundleDataId: 3,
    content: "Anaphylaxis and Emergency Medication Awareness",
  },
  {
    id: 77,
    bundleDataId: 3,
    content: "Catheter care",
  },
  {
    id: 78,
    bundleDataId: 3,
    content: "Inhalers And Nebulizers",
  },
  {
    id: 79,
    bundleDataId: 3,
    content: "Oxygen Therapy",
  },
  {
    id: 80,
    bundleDataId: 3,
    content: "PEG Feeding Awareness(2/3)",
  },
  {
    id: 81,
    bundleDataId: 3,
    content: "Stoma care Awareness ",
  },
  {
    id: 82,
    bundleDataId: 3,
    content: "Boundaries And Good Practice ",
  },
  {
    id: 83,
    bundleDataId: 3,
    content: "Care  Planning ",
  },
  {
    id: 84,
    bundleDataId: 3,
    content: "Customer Service And Complaints",
  },
  {
    id: 85,
    bundleDataId: 3,
    content: "Drug And Alcohol Abuse Awareness",
  },
  {
    id: 86,
    bundleDataId: 3,
    content: "Dysphagia Awareness",
  },
  {
    id: 87,
    bundleDataId: 3,
    content: "End of life care",
  },
  {
    id: 88,
    bundleDataId: 3,
    content: "Epilepsy And Bucal Midazolam",
  },
  {
    id: 89,
    bundleDataId: 3,
    content: "Loss and Bereavement",
  },
  {
    id: 90,
    bundleDataId: 3,
    content: "Mental health",
  },
  {
    id: 91,
    bundleDataId: 3,
    content: "People Hoisting ",
  },
  {
    id: 92,
    bundleDataId: 3,
    content: "Personal care ",
  },
  {
    id: 93,
    bundleDataId: 3,
    content: "Pressure Care management ",
  },
  {
    id: 94,
    bundleDataId: 3,
    content: "Prevention of Trips, slips and falls",
  },
  {
    id: 95,
    bundleDataId: 3,
    content: "Professional Relationships and Boundaries",
  },
  {
    id: 96,
    bundleDataId: 3,
    content: "The introduction of positive behaviour support",
  },
  {
    id: 97,
    bundleDataId: 3,
    content: "Understanding the Behaviour that challenge.",
  },
  {
    id: 98,
    bundleDataId: 3,
    content: "Food safety principles",
  },
  {
    id: 99,
    bundleDataId: 3,
    content: "Lone working Awareness",
  },
  {
    id: 100,
    bundleDataId: 3,
    content: "Managing personal stress",
  },
  {
    id: 101,
    bundleDataId: 3,
    content: "Managing stress in the work place",
  },
  {
    id: 102,
    bundleDataId: 3,
    content: "Manual Handling",
  },
  {
    id: 103,
    bundleDataId: 3,
    content: "Risk Assessment in care",
  },
  
  {
    id: 105,
    bundleDataId: 3,
    content: "Medications, competency MGT.",
  },
  {
    id: 106,
    bundleDataId: 3,
    content: "Positive behaviour support.",
  },
  {
    id: 107,
    bundleDataId: 3,
    content: "Managing and supervising safety.",
  },
  {
    id: 108,
    bundleDataId: 3,
    content: "Managing risk assessment in care management.",
  },
  {
    id: 109,
    bundleDataId: 3,
    content: "Food safety",
  },
  {
    id: 110,
    bundleDataId: 3,
    content: "Assessing competency in moving and assisting.",
  },
  {
    id: 111,
    bundleDataId: 3,
    content: "Tracheostomy",
  },
  {
    id: 112,
    bundleDataId: 3,
    content: "PEG Feeding",
  },
  {
    id: 113,
    bundleDataId: 3,
    content: "Medication competency and management",
  },
  {
    id: 114,
    bundleDataId: 3,
    content: "Role of a fire marshall",
  },
  {
    id: 115,
    bundleDataId: 3,
    content: "Paediatric First Aid",
  },
  {
    id: 116,
    bundleDataId: 3,
    content: "First Aid at work",
  },
  {
    id: 117,
    bundleDataId: 3,
    content: "ILS",
  },
  {
    id: 118,
    bundleDataId: 3,
    content: "Food",
  },
  {
    id: 119,
    bundleDataId: 3,
    content: "Safe Guarding Adults.",
  },
];

const addOns = [
  { id: "0", name: "International Visa route", mail: "infomoricolhealthcare@gmail.com" },
  { id: "1", name: "Brunch/Lunch", price: "5000" },
  { id: "2", name: "Hotel Accomodation", price: "15,000" },
  { id: "3", name: "Induction & Orientation [Intensive 1 day visual course]", price: "100,000" },
  { id: "4", name: "Care-Certificate Course", price: "150,000" },
  { id: "5", name: "Online Training Course", price: "20,000" },
  { id: "6", name: "Computer Appreciation", price: "50,000 for a 3 day training" },
];

export {
  eventData,
  faqData,
  workData,
  testimonialData,
  blogData,
  services,
  courseDataArray,
  courseDataContents,
  teamData,
  activitiesData,
  allFaqData,
  eLearningCourses,
  eLearningCoursesContents,
  bundles,
  bundleContents,
  addOns
};
