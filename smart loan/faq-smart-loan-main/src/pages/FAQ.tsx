
import { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import AnimatedSection from '../components/AnimatedSection';
import CopilotHelp from '../components/CopilotHelp';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [copilotOpen, setCopilotOpen] = useState(false);
  
  const faqData: FAQItem[] = [
    {
      question: 'What types of loans does EasyLoan offer?',
      answer: 'EasyLoan offers a variety of loan products including Personal Loans, Home Loans, Vehicle Loans, Education Loans, and Business Loans. Each loan type is designed to meet specific financial needs and comes with customized terms and documentation requirements.',
      category: 'General'
    },
    {
      question: 'What is the minimum credit score required for loan approval?',
      answer: 'The minimum credit score requirement varies by loan type. Generally, a score of 650 or higher is recommended for favorable interest rates. However, we consider multiple factors during the approval process, not just your credit score.',
      category: 'Eligibility'
    },
    {
      question: 'How long does the loan approval process take?',
      answer: 'Once all required documents are submitted and verified, most loan applications are processed within 24-48 hours. Disbursement typically follows within 1-3 business days after approval, depending on the loan type and amount.',
      category: 'Process'
    },
    {
      question: 'What documents are required for a loan application?',
      answer: 'Basic documents include identity proof (Aadhar, PAN), address proof, income proof (salary slips, IT returns), and bank statements. Additional documents vary by loan type - for example, property documents for home loans or vehicle details for auto loans.',
      category: 'Documents'
    },
    {
      question: 'Can I prepay my loan before the end of the term?',
      answer: 'Yes, EasyLoan allows prepayment of loans. However, some loan types may have a minimum lock-in period or prepayment charges. Personal loans typically have a 6-month lock-in period with a 2-3% prepayment charge on the outstanding principal.',
      category: 'Repayment'
    },
    {
      question: 'What are the current interest rates for different loan types?',
      answer: 'Current interest rates range from 8% to 16% depending on the loan type, amount, and term. Personal loans typically start at 10.5%, home loans at 8%, vehicle loans at 9%, education loans at 9.5%, and business loans at 12%. Rates are subject to individual eligibility assessment.',
      category: 'Interest Rates'
    },
    {
      question: 'How can I check my loan application status?',
      answer: 'You can check your loan application status by logging into your EasyLoan account and navigating to "Track Loan" section. You\'ll see real-time updates on your application, including document verification status and approval progress.',
      category: 'Process'
    },
    {
      question: 'What is the maximum loan amount I can apply for?',
      answer: 'Maximum loan amounts vary by loan type: Personal loans up to ₹10 lakhs, Home loans up to ₹1 crore, Vehicle loans up to ₹50 lakhs, Education loans up to ₹20 lakhs, and Business loans up to ₹50 lakhs. The actual approved amount depends on your income, credit history, and repayment capacity.',
      category: 'Eligibility'
    },
    {
      question: 'Are there any processing fees for loans?',
      answer: 'Yes, EasyLoan charges a processing fee ranging from 0.5% to 2% of the loan amount, depending on the loan type. The fee is deducted from the disbursed amount. We occasionally run promotions with reduced or waived processing fees.',
      category: 'Fees'
    },
    {
      question: 'What happens if I miss a loan repayment?',
      answer: 'Missing a repayment results in a late payment fee (typically 2% of the EMI amount) and may impact your credit score. If you anticipate difficulty making a payment, contact us before the due date to discuss possible solutions like payment rescheduling.',
      category: 'Repayment'
    },
  ];
  
  const categories = Array.from(new Set(faqData.map(item => item.category)));
  
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  // Filter FAQs based on search and category
  const filteredFaqs = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory ? item.category === activeCategory : true;
    return matchesSearch && matchesCategory;
  });

  // Open chat copilot
  const openChatCopilot = () => {
    document.querySelector('.fixed.bottom-6.right-6')?.dispatchEvent(
      new MouseEvent('click', { bubbles: true })
    );
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <div className="pt-28 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our loan products and application process.
            </p>
            <button
              onClick={openChatCopilot}
              className="mt-6 flex items-center mx-auto px-6 py-3 bg-loan-primary hover:bg-loan-button-hover text-white rounded-lg transition-colors"
            >
              <MessageCircle className="mr-2" size={20} />
              Start Live Chat
            </button>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.1}>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-loan-primary"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === null
                    ? 'bg-loan-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-loan-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <AnimatedSection key={index} delay={0.1 * (index % 5)}>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <button
                    className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="font-medium text-gray-900">{faq.question}</h3>
                    {activeIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-loan-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  
                  <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? 'pb-6 max-h-96' : 'max-h-0'
                  }`}>
                    <div className="text-gray-700">
                      {faq.answer}
                    </div>
                    <div className="mt-3 text-xs text-gray-500">
                      Category: {faq.category}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">No FAQs found matching your search criteria. Try a different search term.</p>
            </div>
          )}
        </div>
        
        <AnimatedSection delay={0.3}>
          <div className="mt-12 glass-panel p-6 rounded-xl text-center">
            <h2 className="text-xl font-semibold mb-3">Still have questions?</h2>
            <p className="text-gray-600 mb-4">
              Our support team is ready to help you with any questions you may have about our loan products.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-loan-primary hover:bg-loan-button-hover text-white rounded-lg transition-colors">
                Contact Support
              </button>
              <button 
                onClick={openChatCopilot}
                className="px-6 py-3 flex items-center justify-center bg-white border border-loan-primary text-loan-primary hover:bg-loan-accent rounded-lg transition-colors"
              >
                <MessageCircle className="mr-2" size={18} />
                Live Chat
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      <CopilotHelp context="general" />
    </div>
  );
};

export default FAQ;
