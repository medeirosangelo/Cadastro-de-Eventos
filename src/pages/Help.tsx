import React from 'react';
import MobileLayout from '../components/MobileLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Help = () => {
  const faqs = [
    {
      question: "How do I create a new item?",
      answer: "To create a new item, go to the Items page and click the 'Add New Item' button at the top of the screen."
    },
    {
      question: "Can I edit my profile?",
      answer: "Yes, you can edit your profile by going to the Profile page and clicking the 'Edit Profile' button."
    },
    {
      question: "How do I change my password?",
      answer: "You can change your password in the Profile section by clicking on the 'Change Password' option."
    },
    {
      question: "What are push notifications?",
      answer: "Push notifications are alerts that you receive on your device. You can enable or disable them in the Settings page."
    }
  ];

  return (
    <MobileLayout showBack title="Help & FAQ">
      <div className="p-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </MobileLayout>
  );
};

export default Help;