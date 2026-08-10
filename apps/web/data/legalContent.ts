export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type LegalSection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export const privacyPolicySections: LegalSection[] = [
  {
    id: "about",
    title: "About the Privacy Policy",
    blocks: [
      {
        type: "paragraph",
        text: "This Privacy Policy explains how eForte collects, uses, and protects your personal information when you visit our website or use our services. We are committed to maintaining the confidentiality of your information and using it only to improve the services we provide.",
      },
      {
        type: "list",
        items: [
          "We treat client and visitor information with strict confidentiality.",
          "We use collected data to improve our services and your experience.",
          "We do not sell your personal information to third parties.",
        ],
      },
    ],
  },
  {
    id: "clients-information",
    title: "Clients' Information",
    blocks: [
      {
        type: "paragraph",
        text: "We may collect personal information that you voluntarily provide when you interact with our website or services. This may include your name, email address, mailing address, phone number, and, where applicable, payment or billing information such as credit card numbers.",
      },
      {
        type: "paragraph",
        text: "This information may be collected when you place an order, subscribe to our mailing list, complete a contact form, request a consultation, or otherwise communicate with us.",
      },
    ],
  },
  {
    id: "newsletter",
    title: "Newsletter",
    blocks: [
      {
        type: "paragraph",
        text: "If you subscribe to our newsletter, we will use your email address to send you updates, insights, and information about our services. You may unsubscribe at any time by following the instructions included in each email or by contacting us directly.",
      },
      {
        type: "paragraph",
        text: "For assistance with newsletter subscriptions, please contact us at 1-408-622-0105.",
      },
    ],
  },
  {
    id: "third-party",
    title: "3rd Party Sharing",
    blocks: [
      {
        type: "paragraph",
        text: "eForte does not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except as described in this policy or when required to deliver services you have requested.",
      },
    ],
  },
  {
    id: "personal-information",
    title: "Personal Information",
    blocks: [
      {
        type: "paragraph",
        text: "We implement appropriate technical and organizational measures to protect your personal information. Sensitive data transmitted through our website is protected using SSL (Secure Sockets Layer) encryption to help ensure that your information remains secure during transmission.",
      },
    ],
  },
  {
    id: "registered-accounts",
    title: "Access of Registered Accounts",
    blocks: [
      {
        type: "paragraph",
        text: "If you have a registered account with eForte, you may access and review the personal information associated with your account through your account management area, where available. We encourage you to keep your information accurate and up to date.",
      },
    ],
  },
  {
    id: "changing-deleting",
    title: "Changing & Deleting / Unsubscribing Accounts",
    blocks: [
      {
        type: "paragraph",
        text: "You may request changes to your personal information, unsubscribe from communications, or request deletion of your account by contacting our customer support team. We will respond to legitimate requests in accordance with applicable law.",
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Their Use",
    blocks: [
      {
        type: "paragraph",
        text: "Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser (if you allow) that enable the site's systems to recognize your browser and capture certain information.",
      },
      {
        type: "paragraph",
        text: "We use cookies to understand and save your preferences for future visits, compile aggregate data about site traffic and interaction, and improve your experience. You can choose to disable cookies through your browser settings, though some features of the site may not function properly as a result.",
      },
      {
        type: "paragraph",
        text: "We may also collect your IP address for server diagnostics, security monitoring, and demographic analysis to better understand how visitors use our website.",
      },
    ],
  },
  {
    id: "notification",
    title: "Notification of Changes in Privacy Policy",
    blocks: [
      {
        type: "paragraph",
        text: "eForte reserves the right to update this Privacy Policy at any time. When we make changes, we will post the updated policy on this page and update the effective date. We encourage you to review this page periodically for the latest information on our privacy practices.",
      },
    ],
  },
  {
    id: "legal-disclaimer",
    title: "Legal Disclaimer",
    blocks: [
      {
        type: "paragraph",
        text: "We reserve the right to disclose your personal information when required to do so by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.",
      },
    ],
  },
  {
    id: "questions",
    title: "Questions",
    blocks: [
      {
        type: "paragraph",
        text: "If you have any questions regarding this Privacy Policy, you may contact us using the information below:",
      },
      {
        type: "list",
        items: [
          "Phone: 1-408-622-0105",
          "Email: inquiry@eforte.io",
          "Address: 1207 Delaware Ave, Suite 2858, Wilmington, DE 19806",
        ],
      },
    ],
  },
];

export const termsAndConditionsSections: LegalSection[] = [
  {
    id: "introduction",
    title: "1. Introduction and Acceptance of Terms",
    blocks: [
      {
        type: "paragraph",
        text: "Welcome to eForte.io. By accessing or using our website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or services.",
      },
    ],
  },
  {
    id: "definitions",
    title: "2. Definitions",
    blocks: [
      {
        type: "paragraph",
        text: "In these Terms and Conditions:",
      },
      {
        type: "list",
        items: [
          "\"User,\" \"you,\" or \"your\" refers to any individual or entity accessing or using our website or services.",
          "\"eForte,\" \"we,\" \"us,\" or \"our\" refers to eForte and its affiliates.",
          "\"Content\" refers to all text, graphics, images, software, and other materials available on our website.",
          "\"Services\" refers to the software development, consulting, and related services offered by eForte.",
        ],
      },
    ],
  },
  {
    id: "changes",
    title: "3. Changes to Terms",
    blocks: [
      {
        type: "paragraph",
        text: "eForte reserves the right to modify or replace these Terms and Conditions at any time. Changes will be effective when posted on this page. Your continued use of the website after any changes constitutes acceptance of the revised terms.",
      },
    ],
  },
  {
    id: "eligibility",
    title: "4. User Eligibility",
    blocks: [
      {
        type: "paragraph",
        text: "Our website and services are intended for users who are at least 18 years of age. By using our website, you represent and warrant that you meet this eligibility requirement.",
      },
    ],
  },
  {
    id: "property-rights",
    title: "5. Property Rights and Use of Content",
    blocks: [
      {
        type: "paragraph",
        text: "All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of eForte or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.",
      },
    ],
  },
  {
    id: "user-conduct",
    title: "6. User Conduct",
    blocks: [
      {
        type: "paragraph",
        text: "You agree not to use our website or services for any unlawful purpose or in any way that could damage, disable, or impair the website. Prohibited activities include, but are not limited to:",
      },
      {
        type: "list",
        items: [
          "Attempting to gain unauthorized access to our systems or networks.",
          "Transmitting viruses, malware, or other harmful code.",
          "Engaging in harassment, fraud, or any illegal activity.",
          "Interfering with other users' access to the website.",
        ],
      },
    ],
  },
  {
    id: "third-party",
    title: "7. Third-Party Links and Services",
    blocks: [
      {
        type: "paragraph",
        text: "Our website may contain links to third-party websites or services that are not owned or controlled by eForte. We are not responsible for the content, privacy policies, or practices of any third-party sites. You access third-party links at your own risk.",
      },
    ],
  },
  {
    id: "disclaimer",
    title: "8. Disclaimer of Warranties",
    blocks: [
      {
        type: "paragraph",
        text: "Our website and services are provided on an \"as is\" and \"as available\" basis without warranties of any kind, either express or implied. eForte does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.",
      },
    ],
  },
  {
    id: "limitation",
    title: "9. Limitation of Liability",
    blocks: [
      {
        type: "paragraph",
        text: "To the fullest extent permitted by applicable law, eForte shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website or services, even if we have been advised of the possibility of such damages.",
      },
    ],
  },
  {
    id: "indemnification",
    title: "10. Indemnification",
    blocks: [
      {
        type: "paragraph",
        text: "You agree to indemnify, defend, and hold harmless eForte and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your access to or use of the website, your violation of these terms, or your violation of any rights of a third party.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "11. Governing Law and Jurisdiction",
    blocks: [
      {
        type: "paragraph",
        text: "These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts located in Delaware for the resolution of any disputes.",
      },
    ],
  },
  {
    id: "general",
    title: "12. General Provisions",
    blocks: [
      {
        type: "paragraph",
        text: "If any provision of these Terms and Conditions is found to be unenforceable, the remaining provisions will remain in full force and effect. These terms constitute the entire agreement between you and eForte regarding your use of the website and supersede any prior agreements.",
      },
    ],
  },
  {
    id: "contact",
    title: "13. Contact Information",
    blocks: [
      {
        type: "paragraph",
        text: "If you have any questions about these Terms and Conditions, please contact us:",
      },
      {
        type: "list",
        items: [
          "Email: inquiry@eforte.io",
          "Phone: 1-408-622-0105",
          "Address: 1207 Delaware Ave, Suite 2858, Wilmington, DE 19806",
        ],
      },
    ],
  },
];
