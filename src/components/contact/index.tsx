'use client';

import Form from '@/components/form/Form';
import Input from '@/components/form/Input';
import Submit from '@/components/form/Submit';
import Textarea from '@/components/form/Textarea';
import { Section, SectionHeader } from '@/components/section';
import { useHashSync } from '@/hooks/hash-sync.hook';
import { contactSchema } from '@/schemas/contact.schema';
import { Divider } from '@nextui-org/divider';
import { motion } from 'framer-motion';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const ref = useHashSync('#contact');

  return (
    <Section ref={ref} id="contact">
      <SectionHeader title="Contact_" description="Get in Touch" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 py-12 space-y-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl shadow-lg flex flex-col items-center border border-transparent dark:border-divider"
          >
            <div className="bg-primary-100 p-3 rounded-full mb-3">
              <PhoneIcon className="w-8 h-8 text-primary-500" />
            </div>
            <p className="text-default-700 font-semibold">
              <span>+88 017 66637772</span>
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl shadow-lg flex flex-col items-center border border-transparent dark:border-divider"
          >
            <div className="bg-primary-100 p-3 rounded-full mb-3">
              <MailIcon className="w-8 h-8 text-primary-500" />
            </div>
            <p className="text-default-700 font-semibold">
              <span>mdsaifullah130@gmail.com</span>
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl shadow-lg flex flex-col items-center border border-transparent dark:border-divider"
          >
            <div className="bg-primary-100 p-3 rounded-full mb-3">
              <MapPinIcon className="w-8 h-8 text-primary-500" />
            </div>
            <p className="text-default-700 font-semibold">
              <span>Chattogram, Bangladesh</span>
            </p>
          </motion.div>
        </div>

        <Divider className="w-full max-w-4xl mx-auto" />

        <motion.div
          variants={itemVariants}
          className="dark:border dark:border-divider p-6 rounded-xl shadow-lg max-w-lg mx-auto"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="text-default-600 mt-2">
              Fill out the form below and I&apos;ll get back to you as soon as
              possible.
            </p>
          </div>
          <Form
            onSubmit={() => {}}
            formSchema={contactSchema}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <Input
                name="name"
                label="Name"
                placeholder="Enter your full name"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Input
                name="email"
                type="email"
                label="Email"
                placeholder="Enter your email address"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Textarea
                name="message"
                label="Message"
                placeholder="Describe your inquiry or support request"
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Submit color="primary">Send Message</Submit>
            </motion.div>
          </Form>
        </motion.div>
      </motion.div>
    </Section>
  );
}
