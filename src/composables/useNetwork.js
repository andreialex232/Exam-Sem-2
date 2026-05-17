import { ref } from "vue";
import pih from "@/assets/svg/placeholder.svg" 

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