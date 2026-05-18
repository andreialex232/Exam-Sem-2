import { ref } from "vue";
import pih from "@/assets/svg/placeholder.svg" 
import bih from "@/assets/images/business-esbjerg.png"

export default function useNetwork() {
    const networkTypes = ref([
        {
            id: 1,
            name: "Companies & members",
            icon: pih,
            description: "Businesses active in or interested in cross-border cooperation."
        },
        {
            id: 2,
            name: "Advisors",
            icon: pih,
            description: "People and organizations that can guide companies in cross-border topics."
        },
        {
            id: 3,
            name: "Partner organizations",
            icon: pih,
            description: "Regional actors supporting the Business DE-DK network."
        },
        {
            id: 4,
            name: "Institutions",
            icon: pih,
            description: "Public, educational or regional organizations connected to the ecosystem."
        }
    ])
    return { networkTypes };
}

export function useNetworkActors() {
    const networkActors = ref([
        {
            id: "1",
            name: "Recruitment Support Advisor",
            country: "Denmark",
            subtitle: "International recruitment",
            description: "Helps companies understand recruitment and onboarding across the border.",
            language: ["da", "en"],
            role: "advisor",
            logo: ""
        },
        {
            id: "2",
            name: "Regional Business Partner",
            country: "Germany",
            subtitle: "Business support",
            description: "Supports companies and regional cooperation projects.",
            language: ["de", "en"],
            role: "partner organization",
            logo: bih
        },
        {
            id: "3",
            name: "Manufacturing Company",
            country: "Denmark",
            subtitle: "Manufacturing",
            description: "A company interested in cross-border business opportunities.",
            language: ["da", "de"],
            role: "company",
            logo: ""
        },
        {
            id: "4",
            name: "Education & Knowledge Partner",
            country: "Germany",
            subtitle: "Education",
            description: "Connects education, research and business collaboration.",
            language: ["de", "en"],
            role: "institution",
            logo: ""
        },
        {
            id: "5",
            name: "Onboarding & Integration Advisor",
            country: "Denmark",
            subtitle: "International workforce",
            description: "Helps employers with onboarding and integration topics.",
            language: ["da", "de", "en"],
            role: "advisor",
            logo: ""
        },
        {
            id: "6",
            name: "Cross-border Network Partner",
            country: "Denmark",
            subtitle: "Regional cooperation",
            description: "Supports networking, events and knowledge sharing in the border region.",
            language: ["da", "en"],
            role: "partner organization",
            logo: ""
        },
        {
            id: "7",
            name: "Green Tech Company",
            country: "Germany",
            subtitle: "Green transition",
            description: "Works with sustainable business solutions and cross-border cooperation.",
            language: ["de", "en"],
            role: "company",
            logo: ""
        },
        {
            id: "8",
            name: "Business Start Advisor",
            country: "Denmark",
            subtitle: "Business setup",
            description: "Guides companies that want to understand business opportunities in",
            language: ["da", "en"],
            role: "advisor",
            logo: ""
        },
        {
            id: "9",
            name: "Labour Market Partner",
            country: "Denmark",
            subtitle: "Workforce attraction",
            description: "Supports employers with recruitment, labour market knowledge and events.",
            language: ["da", "de", "en"],
            role: "partner organization",
            logo: ""
        },
        {
            id: "10",
            name: "Regional Development Institution",
            country: "Germany",
            subtitle: "Regional development",
            description: "Works with regional visibility, cooperation and strategic development",
            language: ["de", "en"],
            role: "institution",
            logo: ""
        },
        {
            id: "11",
            name: "Logistics Company",
            country: "Germany",
            subtitle: "Logistics",
            description: "Works across the border and participates in regional business initiatives.",
            language: ["da", "de", "en"],
            role: "company",
            logo: ""
        },
        {
            id: "12",
            name: "Language & Integration Advisor",
            country: "Germany",
            subtitle: "Integration support",
            description: "Supports companies with language onboarding and integration questions",
            language: ["de", "en"],
            role: "advisor",
            logo: ""
        },
    ])

    return { networkActors };
}