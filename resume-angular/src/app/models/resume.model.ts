export interface IResume {
    contactInfo: IContactItem[];
    summary: string;
    workHistory: IWorkHistoryItem[];
    skills: ISkillsCategory[];
    education: IEducationItem[];
}

export interface IContactItem {
    icon?: string;
    link?: string;
    display: string;
}

export interface IWorkHistoryItem {
    companyName: string;
    jobTitle: string;
    companyLocation: string;
    employmentStart: string;
    employmentEnd: string;
    highlights: string[];
}

export interface ISkillsCategory {
    categoryName: string;
    items: string[];
}

export interface IEducationItem {
    schoolName: string;
    schoolLocation: string;
    graduationYear: string;
    degree: string;
    major: string;
    minor: string;
    concentration: string;    
}