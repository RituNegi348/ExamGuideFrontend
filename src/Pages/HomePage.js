import { userContext } from "../Context/userContext";
import { useContext, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

export default function HomePage() {
    const { user, setUser } = useContext(userContext);
    
    const scrollToAbout = (e) => {
        e.preventDefault();
        const aboutSection = document.getElementById('about-section');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = (e) => {
        e.preventDefault();
        const aboutSection = document.getElementById('contact-section');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const fetchUser = async () => {
            try{
            const response = await fetch("https://examguidebackend.onrender.com/checkLoggedIn", {
                method: "GET",
                credentials: "include"
            })
            if(response.status === 200){
                const data = await response.json();
                setUser(data);
            }
        }catch(err){
            console.log(err)
        }
        }
        fetchUser();
    }, [setUser])

    if(user){
        return <Navigate to="/mainPage"/>
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Fixed Header */}
            <header className="fixed top-0 w-full bg-white shadow-md z-50">
                <nav className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="text-2xl font-bold text-blue-600">HNBGU Exam Guide</div>
                        </div>
                        <ul className="hidden md:flex space-x-8">
                            <li><Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link></li>
                            <li><Link to="#about-section" onClick={scrollToAbout} className="text-gray-700 hover:text-blue-600 transition-colors">About</Link></li>
                            <li><Link to="/login" className="text-gray-700 hover:text-blue-600 transition-colors">Study Material</Link></li>
                            <li><Link to="#contact-section" onClick={scrollToContact} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="pt-20">
                {/* Hero Section */}
                <div className="relative h-[500px] w-full">
                    <img 
                        src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f"
                        alt="IHMS College Campus"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white px-4">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to HNBGU Exam Guide</h1>
                            <p className="text-xl md:text-2xl mb-8">Your one-stop destination for all study materials</p>
                            <Link to="/login" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block">
                                Access Study Materials
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <section className="container mx-auto px-6 py-16">
                    <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="text-4xl mb-4">📚</div>
                            <h3 className="text-xl font-semibold mb-2">Course Materials</h3>
                            <p className="text-gray-600">Access comprehensive study materials for all subjects</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="text-4xl mb-4">📝</div>
                            <h3 className="text-xl font-semibold mb-2">Previous Papers</h3>
                            <p className="text-gray-600">Practice with previous year question papers</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="text-4xl mb-4">📖</div>
                            <h3 className="text-xl font-semibold mb-2">Semester-wise Content</h3>
                            <p className="text-gray-600">Organized content for each semester</p>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about-section" className="container mx-auto px-6 py-16 bg-gray-100">
                    <h2 className="text-3xl font-bold text-center mb-8">About HNBGU Exam Guide</h2>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-gray-600 text-lg leading-relaxed">
                            HNBGU Exam Guide is a dedicated platform for HNBGU students to access their study materials easily. 
                            Our platform provides comprehensive course materials, previous year papers, and important resources 
                            organized semester-wise to help students prepare effectively for their examinations.
                        </p>
                        <div className="mt-8 text-center">
                            <Link to="/login" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer id="contact-section" className="bg-gray-800 text-white mt-auto">
                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* College Info */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">HNBGU College</h3>
                            <p className="text-gray-300">
                                Providing quality education and resources for our students.
                                HNBGU is both a residential and affiliating university.
                                The university was established in November 1973. 
                                It was renamed Hemvati Nandan Bahuguna Garhwal University in 1989 in commemoration of the memory of a leading statesman Hemvati Nandan Bahuguna
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                                <li><Link to="/login" className="text-gray-300 hover:text-white transition-colors">Study Material</Link></li>
                                <li><a href="https://www.hnbgu.ac.in" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">College Website</a></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>HNBGU College Campus</li>
                                <li>Srinagar,Garhwal(uttarakhand)</li>
                                <li>Phone: 7983586801</li>
                                <li>Email: web.portal@hnbgu.ac.in</li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
                        <p>&copy; {new Date().getFullYear()} Hemvati Nandan Bahuguna University. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}