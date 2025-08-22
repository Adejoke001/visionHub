import React from 'react';

const Booking = () => {
    return (
        <div className="container mx-auto px-4 py-8" id='booking'>
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-teal-700 mb-6 text-center">Book a Counseling Session</h2>
                
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone (Optional)
                        </label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                            Service Needed
                        </label>
                        <select 
                            id="service" 
                            name="service"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="" disabled defaultValue>Select a service</option>
                            <option value="couples">Couples Therapy</option>
                            <option value="individual">Individual Counseling</option>
                            <option value="family">Family Therapy</option>
                            <option value="crisis">Crisis Support</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                            Preferred Date
                        </label>
                        <input 
                            type="date" 
                            id="date" 
                            name="date"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Brief Message (Optional)
                        </label>
                        <textarea 
                            id="message" 
                            name="message"
                            rows="3"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        ></textarea>
                    </div>

                    <div>
                        <button 
                            type="submit"
                            className="w-full bg-teal-700 text-white py-2 px-4 rounded-md hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                        >
                            Book Session
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Booking;