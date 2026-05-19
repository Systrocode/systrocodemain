export const projects = [
    {
        id: 1,
        slug: "ecommerce-transformation",
        title: "E-Commerce Transformation",
        category: "Web Development",
        image: "/assets/img/Services/ecommerce-transformation.png",
        description: "We partnered with a leading retail brand to completely overhaul their digital presence. By migrating from a legacy system to a modern, headless commerce architecture, we not only modernized the look and feel but also significantly improved performance and scalability. The result is a seamless shopping experience that drives conversions and builds brand loyalty.",
        challenge: "The client was facing a critical stagnation in growth due to an outdated e-commerce platform. High bounce rates were a major concern, primarily driven by slow page load times—averaging over 6 seconds—and a convoluted, multi-step checkout process that frustrated users. Furthermore, the legacy codebase was brittle and difficult to maintain, making it nearly impossible for the marketing team to launch new campaigns or for the technical team to scale infrastructure during peak traffic periods like Black Friday.",
        solution: "We engineered a high-performance, headless commerce solution using Next.js for the frontend to ensure lightning-fast server-side rendering and optimal SEO. For the backend, we integrated Shopify Plus, leveraging its robust inventory and order management capabilities while maintaining frontend flexibility. We redesigned the user journey from the ground up, implementing a streamlined, single-page checkout flow and mobile-first UI components. Additionally, we implemented advanced caching strategies and image optimization to bring load times under 2 seconds.",
        results: [
            "150% increase in online sales revenue within the first quarter post-launch",
            "40% reduction in average page load time, improving Core Web Vitals scores",
            "25% decrease in cart abandonment rate due to the optimized checkout flow",
            "Seamless handling of 5x traffic spikes during holiday sales events"
        ],
        tags: ["Next.js", "Shopify Plus", "Tailwind CSS", "UI/UX Design"]
    },
    {
        id: 2,
        slug: "ai-customer-support-bot",
        title: "AI Customer Support Bot",
        category: "AI Automation",
        image: "/assets/img/Services/ai.png",
        description: "For a major telecom provider, we deployed an advanced AI-driven customer support assistant. This intelligent system goes beyond simple scripted responses, using Natural Language Processing (NLP) to understand context and intent, effectively acting as a first-line support agent that is available 24/7.",
        challenge: "The client's customer support center was overwhelmed by a high volume of repetitive, low-complexity queries (e.g., balance checks, plan upgrades, outage reports). This led to excessive wait times for customers with complex issues, resulting in low Customer Satisfaction (CSAT) scores and high operational costs for the support team. They needed a way to automate routine interactions without sacrificing the quality of service.",
        solution: "We developed a sophisticated chatbot using Python and advanced NLP libraries (spaCy, TensorFlow) capable of understanding natural language nuances. The bot was deeply integrated with the client's existing CRM and billing systems via secure APIs, allowing it to perform real-time actions like checking account status or processing plan changes. We also implemented a 'human hand-off' protocol, ensuring that complex or sensitive issues were seamlessly transferred to live agents with full conversation context.",
        results: [
            "60% reduction in overall support ticket volume handled by human agents",
            "Instant resolution for 80% of routine customer inquiries",
            "30% increase in Customer Satisfaction (CSAT) scores due to reduced wait times",
            "Estimated annual savings of $500k in operational support costs"
        ],
        tags: ["Python", "NLP", "TensorFlow", "React", "API Integration"]
    },
    {
        id: 3,
        slug: "fintech-mobile-app",
        title: "Fintech Mobile App",
        category: "Mobile App Development",
        image: "/assets/img/Services/mobile-dev.png",
        description: "We designed and developed a next-generation mobile banking application focused on security, speed, and user experience. The app empowers users to manage their finances with confidence, featuring biometric login, real-time spending analytics, and instant peer-to-peer transfers.",
        challenge: "In a highly competitive fintech market, the client's existing mobile app was falling behind. It suffered from a clunky user interface, frequent crashes, and a lack of modern security features like biometric authentication. Users were migrating to competitors offering smoother, more secure digital banking experiences. The client needed a complete rebuild to regain market trust and attract a younger, tech-savvy demographic.",
        solution: "Adopting a cross-platform approach with React Native, we built a high-performance app for both iOS and Android from a single codebase. We implemented military-grade encryption for all data in transit and at rest, along with biometric authentication (FaceID/TouchID) for secure, frictionless login. Key features included a real-time dashboard for spending insights, instant fund transfers using WebSocket technology, and a customizable notification system for transaction alerts.",
        results: [
            "100,000+ downloads achieved within the first month of launch",
            "4.8/5 average star rating on both App Store and Google Play Store",
            "Zero security breaches reported after rigorous penetration testing",
            "50% increase in daily active users (DAU) compared to the previous app"
        ],
        tags: ["React Native", "Node.js", "Biometrics", "Fintech Security"]
    },
    {
        id: 4,
        slug: "healthcare-data-analytics",
        title: "Healthcare Data Analytics",
        category: "Data Analysis",
        image: "/assets/img/Services/data.jpg",
        description: "We empowered a large hospital network with a centralized data analytics platform. By aggregating patient data from disparate sources into a unified dashboard, we enabled administrators and medical staff to make data-driven decisions that improve patient outcomes and operational efficiency.",
        challenge: "The hospital network operated with siloed data systems—Electronic Health Records (EHR), billing, and resource management were all separate. This fragmentation made it impossible to gain a holistic view of hospital operations. Administrators struggled to predict patient influx, leading to staffing shortages during peak hours and resource wastage during quiet periods. They needed a 'single source of truth.'",
        solution: "We architected a secure data warehouse solution to aggregate and normalize data from all source systems. Using Python for data processing and Power BI for visualization, we built a suite of interactive dashboards. These dashboards provided real-time insights into bed occupancy rates, average patient wait times, and staff utilization. We also implemented predictive modeling to forecast patient admission trends based on historical data.",
        results: [
            "20% improvement in resource allocation efficiency, reducing overtime costs",
            "15% reduction in average patient wait times in the Emergency Department",
            "Enhanced ability to track and improve patient recovery rates",
            "Real-time visibility into inventory levels for critical medical supplies"
        ],
        tags: ["Big Data", "Python", "Power BI", "Predictive Analytics"]
    },
    {
        id: 5,
        slug: "corporate-rebranding-seo",
        title: "Corporate Rebranding & SEO",
        category: "Digital Marketing",
        image: "/assets/img/Services/seo.jpg",
        description: "We executed a comprehensive digital transformation for a B2B corporation, combining a fresh brand identity with an aggressive SEO strategy. This dual approach revitalized their market perception and established them as a thought leader in their industry.",
        challenge: "Despite being an industry veteran, the client's digital presence was virtually non-existent. Their website was outdated, not mobile-responsive, and invisible on search engines for key industry terms. As a result, they were losing market share to newer, more digitally agile competitors. They needed a complete brand refresh and a strategy to drive organic lead generation.",
        solution: "Our team conducted a deep-dive brand audit and competitor analysis. We redesigned their visual identity and website to reflect a modern, innovative company. Simultaneously, we implemented a robust SEO strategy. This involved technical SEO fixes, on-page optimization for high-value keywords, and a content marketing campaign featuring whitepapers and industry articles to build domain authority and backlinks.",
        results: [
            "200% increase in organic search traffic within 6 months",
            "Achieved first-page rankings for 50+ high-intent industry keywords",
            "Significant improvement in brand awareness and perceived market authority",
            "150% increase in inbound leads generated through the website"
        ],
        tags: ["SEO", "Rebranding", "Content Strategy", "Digital Marketing"]
    },
    {
        id: 6,
        slug: "secure-cloud-migration",
        title: "Secure Cloud Migration",
        category: "Cyber Security",
        image: "/assets/img/Services/cyber.png",
        description: "We successfully migrated a financial services firm's mission-critical infrastructure from legacy on-premise servers to a secure, scalable cloud environment. The project ensured business continuity with zero data loss and enhanced compliance with financial regulations.",
        challenge: "The client's on-premise data center was becoming a liability. It was expensive to maintain, difficult to scale, and vulnerable to physical and cyber threats. Furthermore, aging hardware was leading to frequent performance bottlenecks. They needed to move to the cloud to ensure high availability and disaster recovery, but strict financial compliance regulations made security a paramount concern.",
        solution: "We designed a phased migration strategy to AWS, ensuring minimal disruption to operations. We implemented a 'Lift and Shift' approach for some applications and re-platformed others for cloud-native performance. Security was baked in at every layer, utilizing VPCs, strict IAM policies, and encryption for data at rest and in transit. We also set up automated backups and a multi-region disaster recovery plan.",
        results: [
            "99.99% system uptime achieved post-migration",
            "30% reduction in IT infrastructure and maintenance costs",
            "Full compliance with industry security standards (SOC2, GDPR)",
            "Enhanced scalability to handle future business growth without hardware investment"
        ],
        tags: ["Cloud Migration", "AWS", "Cyber Security", "DevOps"]
    }
];
