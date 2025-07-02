'use client';

import React, { useState } from 'react';
// Import motion and AnimatePresence for animations
import { motion, AnimatePresence } from 'framer-motion';
// Import all necessary icons from lucide-react
import {
  ClipboardList,
  DollarSign,
  FileText,
  Gavel,
  Globe,
  Banknote,
  CreditCard,
  Shield,
  Mail,
  Server,
  Wifi,
  Clipboard,
  Database,
  AlertTriangle,
  Lock,
  Cpu,
  Megaphone,
  Fingerprint,
  MessageSquareWarning,
  X,
} from 'lucide-react';

// --- DATA DEFINITIONS (These are fine at the top level) ---
const cybercrimeTypes = [
  { icon: <Cpu className="w-8 h-8 text-indigo-500" />, title: 'Cyber-dependent Crimes', shortDesc: 'Crimes that can only be committed using digital systems.', longDesc: 'These are offences that are entirely dependent on computers, computer networks, or other forms of ICT. They represent a new form of crime that did not exist before the digital age. Examples include creating and spreading malware, ransomware attacks, hacking, and Denial-of-Service (DDoS) attacks.' },
  { icon: <Megaphone className="w-8 h-8 text-teal-500" />, title: 'Cyber-enabled Crimes', shortDesc: 'Traditional crimes amplified or made easier by technology.', longDesc: 'These are traditional crimes that have been made easier, faster, or more widespread by the use of the internet and digital technology. The crime itself is not new, but the method is. This includes online financial scams, cyberstalking, illegal online marketplaces (darknet markets), and the large-scale distribution of illicit content.' },
  { icon: <span className="text-3xl">🔓</span>, title: 'Unauthorized Access & Hacking', shortDesc: 'Gaining unauthorized access to computer systems, networks, or data.', longDesc: 'One of the foundational cyber offences, hacking involves gaining unauthorized access to computer systems, networks, or data with the intent to cause damage or theft. This can range from simple password cracking to sophisticated penetration of highly secured systems, violating privacy and security protocols.' },
  { icon: <span className="text-3xl">💾</span>, title: 'Data Breach & Theft', shortDesc: 'Unauthorized access and exfiltration of personal, financial, or corporate data.', longDesc: 'Cybercriminals often target personal or corporate data for theft. A data breach involves the unauthorized access and exfiltration of sensitive, protected, or confidential information, which can then be sold or used for other criminal activities like identity theft, financial fraud, or corporate espionage.' },
  { icon: <CreditCard className="w-8 h-8 text-blue-500" />, title: 'Online Financial Fraud', shortDesc: 'Credit card fraud, banking scams, and unauthorized online transactions.', longDesc: 'This category includes a wide array of scams designed to steal money. Examples are phishing emails that trick users into giving up bank details, credit card skimming where card information is stolen, and fraudulent transaction schemes targeting e-commerce platforms and online banking users.' },
  { icon: <span className="text-3xl">🦠</span>, title: 'Ransomware Attacks', shortDesc: 'Malware that encrypts data and demands payment for its release.', longDesc: 'In a ransomware attack, malicious software encrypts the victim\'s files, making them inaccessible. The attacker then demands a ransom, often in cryptocurrency, in exchange for the decryption key. These attacks can cripple individuals, businesses, and even critical infrastructure.' },
  { icon: <Fingerprint className="w-8 h-8 text-red-500" />, title: 'Identity Theft & Impersonation', shortDesc: "Illegally obtaining and using someone's personal data for fraudulent purposes.", longDesc: "This crime involves stealing personal information such as names, Aadhaar numbers, or financial details to impersonate someone else. Criminals use this data to open fraudulent accounts, make unauthorized purchases, or commit other crimes in the victim's name, causing severe financial and reputational damage." },
  { icon: <MessageSquareWarning className="w-8 h-8 text-orange-500" />, title: 'Cyber Harassment & Stalking', shortDesc: 'Using digital platforms to bully, threaten, or persistently follow an individual.', longDesc: "This involves the repeated use of electronic communications to harass, intimidate, or threaten an individual, causing substantial emotional distress. It includes cyberbullying, online defamation, doxxing (publishing private information), and obsessive monitoring of a person's online activities, often creating a climate of fear." },
];
const digitalEvidenceItems = [
    { icon: <FileText className="w-10 h-10 text-blue-500" />, title: "Screenshots", description: "Visual proof of the incident, messages, or fraudulent pages." },
    { icon: <Mail className="w-10 h-10 text-blue-500" />, title: "Communications", description: "Emails, chat logs, social media messages, and call records." },
    { icon: <Banknote className="w-10 h-10 text-blue-500" />, title: "Transactions", description: "Bank or credit card statements showing unauthorized activity." },
    { icon: <Server className="w-10 h-10 text-blue-500" />, title: "IP Addresses & Logs", description: "Any available network logs or IP addresses of attackers." },
    { icon: <Wifi className="w-10 h-10 text-blue-500" />, title: "Device Info", description: "Details of compromised devices (laptops, phones) and systems." },
    { icon: <Clipboard className="w-10 h-10 text-blue-500" />, title: "Legal Documents", description: "Any filed complaints, affidavits, or legal notices sent/received." },
];
const whyChooseUsItems = [
    { icon: <Shield className="w-12 h-12 text-blue-500" />, title: "Cyber Law Experts", description: "Specialized lawyers with expertise in the IT Act, cyber regulations, and digital crimes." },
    { icon: <Database className="w-12 h-12 text-blue-500" />, title: "Evidence Handling", description: "Professional collection, preservation, and presentation of digital evidence in court." },
    { icon: <Globe className="w-12 h-12 text-blue-500" />, title: "Pan-India Services", description: "We handle cybercrime cases across all states and cyber crime cells in India." },
    { icon: <AlertTriangle className="w-12 h-12 text-blue-500" />, title: "24/7 Emergency Support", description: "Immediate assistance for urgent cybercrime incidents and data breaches." },
    { icon: <ClipboardList className="w-12 h-12 text-blue-500" />, title: "Case Management", description: "End-to-end handling of your case, from FIR filing to final court resolution." },
    { icon: <Lock className="w-12 h-12 text-blue-500" />, title: "Confidential & Secure", description: "We maintain strict confidentiality and secure handling of all your sensitive information." },
    { icon: <DollarSign className="w-12 h-12 text-blue-500" />, title: "Compensation Recovery", description: "We actively pursue financial recovery and damages for cyber crime victims." },
    { icon: <Gavel className="w-12 h-12 text-blue-500" />, title: "Strong Representation", description: "Dedicated and robust legal representation to advocate for your rights and interests." },
];
const stateOptions = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi (National Capital Territory)", "Puducherry", "Ladakh", "Jammu and Kashmir"];

interface CardData { icon: React.ReactNode; title: string; shortDesc: string; longDesc: string; }

const InfoCard: React.FC<{ card: CardData; onExpand: () => void }> = ({ card, onExpand }) => (
  <motion.div onClick={onExpand} className="p-5 bg-white shadow-md rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full" whileHover={{ scale: 1.03 }}>
    <div className="flex items-center mb-3"><div className="mr-4">{card.icon}</div><h4 className="text-lg font-bold text-blue-900">{card.title}</h4></div>
    <p className="text-gray-700 text-sm">{card.shortDesc}</p>
  </motion.div>
);
const ExpandedCardModal: React.FC<{ card: CardData; onClose: () => void }> = ({ card, onClose }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} onClick={(e) => e.stopPropagation()} className="relative bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl">
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"><X size={24} /></button>
      <div className="flex items-center mb-4"><div className="text-4xl mr-5">{card.icon}</div><h3 className="text-2xl font-bold text-gray-900">{card.title}</h3></div>
      <p className="text-gray-700 leading-relaxed">{card.longDesc}</p>
    </motion.div>
  </motion.div>
);

// --- MAIN WEBPAGE COMPONENT ---
const CybercrimeWebpage: React.FC = () => {
    
    const [expandedCard, setExpandedCard] = useState<CardData | null>(null);
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '', state: '' });
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        if (submissionStatus !== 'idle') {
            setSubmissionStatus('idle');
            setStatusMessage(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmissionStatus('submitting');
        setStatusMessage('Submitting your request...');
        if (!formData.name || !formData.email || !formData.mobile || !formData.state) { setStatusMessage('Please fill in all required fields.'); setSubmissionStatus('error'); return; }
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) { setStatusMessage('Please enter a valid email address.'); setSubmissionStatus('error'); return; }
        if (!/^[6-9]\d{9}$/.test(formData.mobile)) { setStatusMessage('Please enter a valid 10-digit Indian mobile number.'); setSubmissionStatus('error'); return; }
        try {
            const payload = {
                name: formData.name, email: formData.email, phone: formData.mobile, state: formData.state,
                formSource: 'Cybercrime Samadhan Page'
            };
            const response = await fetch('/api/request-callback', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            const result = await response.json();
            if (response.ok) {
                setSubmissionStatus('success'); setStatusMessage(result.message || 'Request submitted successfully!'); setFormData({ name: '', email: '', mobile: '', state: '' });
            } else {
                setSubmissionStatus('error'); setStatusMessage(result.error || 'An unexpected error occurred.');
            }
        } catch (error) {
            console.error('Fetch Error:', error); setSubmissionStatus('error'); setStatusMessage('Could not connect to the server. Please check your connection.');
        }
    };

    const isLoading = submissionStatus === 'submitting';

    return (
        <div className="bg-gray-50">
            <AnimatePresence>
                {expandedCard && (<ExpandedCardModal card={expandedCard} onClose={() => setExpandedCard(null)} />)}
            </AnimatePresence>

            <header className="relative min-h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-white px-4" style={{ backgroundImage: "url('/images/cyber-samadhan.png')" }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                        Defending Your Digital World.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md">
                        Expert Legal Action Against Online Fraud, Hacking, and Data Theft.
                    </p>
                </div>
            </header>

            <main>
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Navigating the Digital Frontier</h2>
                        <p className="text-gray-700 mt-4 text-lg leading-relaxed">The advent of a new technological era, where information is both a currency and a commodity, has revolutionised nearly every sector of human society. However, this progress also brings certain challenges, most notably, the rise of cybercrime—a form of criminal activity that exploits digital technologies to cause harm, steal information, or disrupt systems.</p>
                    </div>
                </section>
                
                {/* --- THIS IS THE CORRECTED AND RESTRUCTURED SECTION --- */}
                <section className="bg-gray-100 py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        {/* Text block above the grid */}
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900">What is Cybercrime?</h2>
                            <p className="text-gray-700 mt-4 leading-relaxed">
                                Cybercrime refers to any unlawful act involving a computer, a networked device, or the internet. Unlike traditional crime, it transcends physical borders and can be committed anonymously. If you are a victim, don't hesitate. Fill out the form below to request a confidential legal consultation with our experts.
                            </p>
                        </div>

                        {/* New 2-column grid for Form and Process Card */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
                            {/* Column 1: The Form */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg h-full">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Request a Legal Consultation</h3>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div><input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required /></div>
                                    <div><input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required /></div>
                                    <div><input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required /></div>
                                    <div>
                                        <select name="state" value={formData.state} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required>
                                            <option value="">Select Your State</option>
                                            {stateOptions.map((state) => (<option key={state} value={state}>{state}</option>))}
                                        </select>
                                    </div>
                                    <button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                                        {isLoading ? 'Submitting...' : 'Request Legal Consultation'}
                                    </button>
                                    {statusMessage && (
                                        <div className={`mt-4 p-3 rounded-lg ${submissionStatus === 'success' ? 'bg-green-100 text-green-700' : submissionStatus === 'error' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                                            {statusMessage}
                                        </div>
                                    )}
                                </form>
                            </div>

                            {/* Column 2: The Process Card */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg h-full">
                                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Our Cybercrime Legal Process</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* --- UPDATED STEPS FOR CYBERCRIME --- */}
                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-center"><span className="text-2xl mr-3">📝</span><div><h3 className="font-bold text-lg text-blue-900">Case Assessment</h3><p className="text-gray-700 text-sm">Initial consultation to evaluate the incident.</p></div></div>
                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-center"><span className="text-2xl mr-3">📊</span><div><h3 className="font-bold text-lg text-blue-900">Evidence Collection</h3><p className="text-gray-700 text-sm">Guidance on preserving digital evidence.</p></div></div>
                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-center"><span className="text-2xl mr-3">🚨</span><div><h3 className="font-bold text-lg text-blue-900">FIR with Cyber Cell</h3><p className="text-gray-700 text-sm">Drafting and filing the official complaint.</p></div></div>
                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-center"><span className="text-2xl mr-3">👨‍⚖️</span><div><h3 className="font-bold text-lg text-blue-900">Legal Representation</h3><p className="text-gray-700 text-sm">Assigning an expert cyber law advocate.</p></div></div>
                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-center"><span className="text-2xl mr-3">🔍</span><div><h3 className="font-bold text-lg text-blue-900">Investigation Follow-up</h3><p className="text-gray-700 text-sm">Liaising with authorities for updates.</p></div></div>
                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex items-center"><span className="text-2xl mr-3">✅</span><div><h3 className="font-bold text-lg text-blue-900">Case Resolution</h3><p className="text-gray-700 text-sm">Pursuing compensation and justice in court.</p></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Other sections remain the same */}
                <section className="py-16 bg-white"><div className="max-w-7xl mx-auto px-4"><div className="text-center max-w-3xl mx-auto"><h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Constitutes Cybercrime?</h2><p className="text-gray-700 mt-4 text-lg">According to Interpol, cybercrime is a multifaceted phenomenon broadly divided into two main categories. Understanding these helps in identifying the nature of an offense. Explore these categories and common examples below.</p><p className="mt-4 font-semibold text-blue-600">Click on any card to learn more.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{cybercrimeTypes.map((card) => (<InfoCard key={card.title} card={card} onExpand={() => setExpandedCard(card)} />))}</div></div></section>
                <section className="bg-gray-100 py-16"><div className="max-w-7xl mx-auto px-4"><div className="text-center max-w-3xl mx-auto"><h2 className="text-3xl md:text-4xl font-bold text-gray-900">Digital Evidence Required for Prosecution</h2><p className="text-gray-700 mt-4 text-lg">Preserving digital evidence is crucial for a successful legal outcome. Here are the key pieces of evidence you should gather.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">{digitalEvidenceItems.map(item => (<div key={item.title} className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 text-center"><div className="flex justify-center items-center mb-4">{item.icon}</div><h3 className="text-lg font-semibold text-gray-800">{item.title}</h3><p className="text-gray-600 mt-2 text-sm">{item.description}</p></div>))}</div></div></section>
                <section className="bg-white py-16"><div className="max-w-7xl mx-auto px-4"><div className="text-center max-w-3xl mx-auto"><h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Our Legal Team?</h2><p className="text-gray-700 mt-4 text-lg">Our dedicated team provides unparalleled expertise and support throughout your legal journey, ensuring your case is handled with the utmost professionalism and care.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">{whyChooseUsItems.map(item => (<div key={item.title} className="p-6 bg-gray-50 shadow-md rounded-xl hover:shadow-lg hover:bg-white transition-all duration-300 text-center"><div className="flex justify-center items-center mb-4">{item.icon}</div><h3 className="text-lg font-semibold text-gray-800">{item.title}</h3><p className="text-gray-600 mt-2 text-sm">{item.description}</p></div>))}</div></div></section>
                <section className="bg-blue-600"><div className="max-w-4xl mx-auto text-center py-16 px-4"><h2 className="text-3xl font-bold text-white">Get Expert Cybercrime Legal Help Today!</h2><p className="text-blue-100 mt-4 text-lg">Don't face digital threats alone. Protect yourself with our comprehensive legal assistance. Contact us now for a confidential consultation and take the first step towards justice.</p><button onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })} className="mt-8 bg-white text-blue-600 font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-50 transition-colors">Request Your Free Consultation</button></div></section>
            </main>
        </div>
    );
};

export default CybercrimeWebpage;