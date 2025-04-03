
import { useNavigate } from 'react-router-dom';
import { FileText, Plus, Activity } from 'lucide-react';
import Navbar from '../components/Navbar';
import LoanOption from '../components/LoanOption';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <div className="pt-28 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
        <AnimatedSection>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Smart Loans for Smart People
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Apply for loans easily, track your applications, and manage your existing loans all in one place.
            </p>
          </motion.div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <AnimatedSection delay={0.1}>
            <LoanOption 
              icon={<FileText size={24} />}
              title="Existing Loans"
              description="View and manage your current loans, payments, and statements"
              onClick={() => navigate('/existing-loans')}
            />
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <LoanOption
              icon={<Plus size={24} />} 
              title="New Loan"
              description="Apply for a new loan with our simplified application process"
              onClick={() => navigate('/new-loan')}
            />
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <LoanOption
              icon={<Activity size={24} />}
              title="Track Loan"
              description="Check the status of your loan applications"
              onClick={() => navigate('/track-loan')}
            />
          </AnimatedSection>
        </div>
        
        <AnimatedSection delay={0.4}>
          <div className="mt-16 glass-panel p-6 md:p-8 rounded-xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold mb-2">Why Choose EasyLoan?</h2>
              <p className="text-gray-600">Experience a smooth, transparent loan process</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-loan-accent w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-loan-primary">1</span>
                </div>
                <h3 className="font-medium mb-2">Quick Approvals</h3>
                <p className="text-sm text-gray-600">Get your loan approved in as little as 24 hours</p>
              </div>
              
              <div className="text-center">
                <div className="bg-loan-accent w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-loan-primary">2</span>
                </div>
                <h3 className="font-medium mb-2">Minimal Documentation</h3>
                <p className="text-sm text-gray-600">Upload documents digitally with AI verification</p>
              </div>
              
              <div className="text-center">
                <div className="bg-loan-accent w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-loan-primary">3</span>
                </div>
                <h3 className="font-medium mb-2">Competitive Rates</h3>
                <p className="text-sm text-gray-600">Get the best interest rates tailored to your profile</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Index;
