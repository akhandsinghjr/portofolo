import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/username",
    color: "#9ece6a"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/username",
    color: "#7aa2f7"
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/username",
    color: "#f7768e"
  }
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@example.com",
    color: "#7aa2f7"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    color: "#9ece6a"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Patna, Bihar, India",
    color: "#f7768e"
  }
];

const Contact = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h2 className="section-heading text-[#a9b1d6] mb-8">
        <span className="text-[#7aa2f7] font-mono">05.</span> Contact
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#1a1b26] rounded-lg shadow-2xl overflow-hidden"
      >
        {/* Window Header */}
        <div className="h-10 flex items-center px-4 bg-[#24283b] border-b border-[#414868]">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#f7768e]"></div>
            <div className="h-3 w-3 rounded-full bg-[#e0af68]"></div>
            <div className="h-3 w-3 rounded-full bg-[#9ece6a]"></div>
          </div>
          <div className="text-xs text-center flex-1 text-gray-400 font-mono">
            contact@iitpatna: ~/connect
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Information */}
            <Card className="p-6 bg-[#24283b] border-[#414868]">
              <h3 className="text-[#7aa2f7] font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <info.icon className="w-5 h-5" style={{ color: info.color }} />
                    <div>
                      <p className="text-sm text-[#a9b1d6]">{info.label}</p>
                      <p className="text-[#7aa2f7]">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6 bg-[#24283b] border-[#414868]">
              <h3 className="text-[#7aa2f7] font-semibold mb-6">Connect with Me</h3>
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#1a1b26] rounded-lg border border-[#414868] hover:border-[#7aa2f7] transition-colors"
                  >
                    <link.icon className="w-5 h-5" style={{ color: link.color }} />
                    <span className="text-[#a9b1d6]">{link.name}</span>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
