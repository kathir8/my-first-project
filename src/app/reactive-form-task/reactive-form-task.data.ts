import { Select2Data } from "ng-select2-component";

export const country: Select2Data = [
    { value: 'australia', label: 'Australia' },
    { value: 'america', label: 'America' },
    { value: 'india', label: 'India' },
];

export const allState: { [key: string]: Select2Data } = {
    'australia': [
        { value: 'westernAustralia', label: 'Western Australia' },
        { value: 'southAustralia', label: 'South Australia' },
        { value: 'newSouthWales', label: 'New South Wales' },
        { value: 'queensland', label: 'Queensland' },
        { value: 'tasmania', label: 'Tasmania' },
        { value: 'victoria', label: 'Victoria' },
    ],
    'india': [
        { value: 'maharashtra', label: 'Maharashtra' },
        { value: 'tamilnadu', label: 'Tamil Nadu' },
        { value: 'karnataka', label: 'Karnataka' },
        { value: 'kerala', label: 'Kerala' },
        { value: 'punjab', label: 'Punjab' },
        { value: 'delhi', label: 'Delhi' },
    ],
    'america': [
        { value: 'AK', label: 'Alaska' },
        { value: 'HI', label: 'Hawaii', disabled: true },
        { value: 'CA', label: 'California' },
        { value: 'NV', label: 'Nevada' },
        { value: 'OR', label: 'Oregon' },
        { value: 'WA', label: 'Washington' },
        { value: 'AZ', label: 'Arizona' },
        { value: 'CO', label: 'Colorado' },
        { value: 'ID', label: 'Idaho' },
        { value: 'MT', label: 'Montana' },
        { value: 'NE', label: 'Nebraska' },
        { value: 'NM', label: 'New Mexico' },
        { value: 'ND', label: 'North Dakota' },
        { value: 'UT', label: 'Utah' },
        { value: 'WY', label: 'Wyoming' },
        { value: 'AL', label: 'Alabama' },
        { value: 'AR', label: 'Arkansas' },
        { value: 'IL', label: 'Illinois' },
        { value: 'IA', label: 'Iowa' },
        { value: 'KS', label: 'Kansas' },
        { value: 'KY', label: 'Kentucky' },
        { value: 'LA', label: 'Louisiana' },
        { value: 'MN', label: 'Minnesota' },
        { value: 'MS', label: 'Mississippi' },
        { value: 'MO', label: 'Missouri' },
        { value: 'OK', label: 'Oklahoma' },
        { value: 'SD', label: 'South Dakota' },
        { value: 'TX', label: 'Texas' },
        { value: 'TN', label: 'Tennessee' },
        { value: 'WI', label: 'Wisconsin' },
        { value: 'CT', label: 'Connecticut' },
        { value: 'DE', label: 'Delaware' },
        { value: 'FL', label: 'Florida' },
        { value: 'GA', label: 'Georgia' },
        { value: 'IN', label: 'Indiana' },
        { value: 'ME', label: 'Maine' },
        { value: 'MD', label: 'Maryland' },
        { value: 'MA', label: 'Massachusetts' },
        { value: 'MI', label: 'Michigan' },
        { value: 'NH', label: 'New Hampshire' },
        { value: 'NJ', label: 'New Jersey' },
        { value: 'NY', label: 'New York' },
        { value: 'NC', label: 'North Carolina' },
        { value: 'OH', label: 'Ohio' },
        { value: 'PA', label: 'Pennsylvania' },
        { value: 'RI', label: 'Rhode Island' },
        { value: 'SC', label: 'South Carolina' },
        { value: 'VT', label: 'Vermont' },
        { value: 'VA', label: 'Virginia', disabled: true },
        { value: 'WV', label: 'West Virginia' },
    ],
}

export interface personalDetails {
    "name": string;
    "mobile"?: string;
    "email": string;
    "addressDetails": {
        "presentAddress": address;
        "permanentAddress": address;
    }
    "gender": string;
    "dob": Date;
    "hobbies": Array<string>;
    "nationality": string;
    "description": string;
}
export interface address {
    "country": string;
    "state": string;
    "addressLine1": string;
    "addressLine2"?: string;
    "street": string;
    "area": Date;
    "city": string;
    "zipcode": string;
}
