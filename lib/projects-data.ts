export type ProjectStatus = 'live' | 'maintenance' | 'blocked';

export interface Project {
    slug: string;
    title: string;
    description: string;
    fullDescription: string;
    tags: string[];
    featured: boolean;
    status: ProjectStatus;
    liveLink?: string;
    githubLink?: string;
}

export const projects: Project[] = [
    {
        slug: "ids-defense",
        title: "IDS: Intrusion Detection System",
        description: "Real-time network monitoring tool that detects unauthorized access attempts and logs anomalies.",
        fullDescription: "A comprehensive Intrusion Detection System (IDS) designed for real-time network monitoring. It uses signature-based detection to identify unauthorized access attempts, port scans, and other network anomalies. Built with C++ for high performance, it provides detailed logging and alerting mechanisms for security administrators.",
        tags: ["C++", "Networking", "Security", "Linux"],
        featured: true,
        status: "live",
        liveLink: "https://ids-defense.netlify.app/",
        githubLink: "https://github.com/balanishithreddy/ids-defense"
    },
    {
        slug: "secure-chat",
        title: "MailShield / SecureChat",
        description: "End-to-end encrypted messaging platform featuring advanced mail shielding and multi-factor authentication.",
        fullDescription: "SecureChat (rebranded as MailShield) is an end-to-end encrypted messaging platform. It ensures complete privacy for communications using modern cryptographic protocols. Features include self-destructing messages, multi-factor authentication, and advanced server-side shielding to prevent data breaches.",
        tags: ["React", "Node.js", "Socket.io", "Cryptography"],
        featured: true,
        status: "live",
        liveLink: "https://mailsheild.netlify.app/",
        githubLink: "https://github.com/balanishithreddy/secure-chat"
    },
    {
        slug: "vuln-scanner",
        title: "Vulnerability Scanner",
        description: "Automated Python script for scanning common web vulnerabilities (XSS, SQLi) in target URLs.",
        fullDescription: "An automated vulnerability assessment tool that performs deep scans for common web application vulnerabilities such as Cross-Site Scripting (XSS) and SQL Injection (SQLi). It utilizes Selenium for dynamic scanning and Owasp ZAP for comprehensive security analysis, generating automated PDF reports.",
        tags: ["Python", "Selenium", "Owasp ZAP", "Automation"],
        featured: false,
        status: "maintenance",
        githubLink: "https://github.com/balanishithreddy/vuln-scanner"
    },
    {
        slug: "malware-lab",
        title: "Malware Analysis Lab",
        description: "A sandbox environment for safe execution and behavioral analysis of malicious software.",
        fullDescription: "A sophisticated laboratory environment isolated for the purpose of analyzing malware behavior. It captures system calls, network activity, and file system changes in a controlled sandbox. This project focuses on identifying indicators of compromise (IoCs) and understanding the attack vectors of various malware strains.",
        tags: ["Virtualization", "Wireshark", "Reverse Engineering"],
        featured: false,
        status: "maintenance",
        githubLink: "https://github.com/balanishithreddy/malware-lab"
    },
    {
        slug: "blockchain-voting",
        title: "Blockchain Voting System",
        description: "Decentralized voting platform ensuring transparency and tamper-proof records using Solidity.",
        fullDescription: "A decentralized application (DApp) that leverages blockchain technology to ensure fair and transparent voting processes. By using Solidity-based smart contracts on the Ethereum network, it eliminates the possibility of double-voting and ensures that all results are permanently recorded and immutable.",
        tags: ["Solidity", "Web3.js", "Ethereum"],
        featured: false,
        status: "blocked",
        githubLink: "https://github.com/balanishithreddy/blockchain-voting"
    },
    {
        slug: "zero-trust-demo",
        title: "Zero Trust Architecture Demo",
        description: "Implementation of a Zero Trust security model for internal microservices.",
        fullDescription: "A demonstration of Zero Trust security principles applied to a microservices architecture. It implements identity-based access control, mutual TLS (mTLS) for service-to-service communication, and continuous authentication policies, ensuring that trust is never assumed regardless of the network location.",
        tags: ["Go", "gRPC", "mTLS", "IAM"],
        featured: false,
        status: "blocked",
        githubLink: "https://github.com/balanishithreddy/zero-trust-demo"
    }
];
