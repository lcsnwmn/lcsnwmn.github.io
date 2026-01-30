export interface IResume {
    contactInfo: IContactSection;
    summary: ISummarySection;
    workHistory: IWorkHistorySection;
    skills: ISkillsSection;
    education: IEducationSection;
}

export type IResumeSection = IContactSection | ISummarySection | IWorkHistorySection | ISkillsSection | IEducationSection;
export type ISectionItem = IContactItem | IWorkHistoryItem | ISkillsCategory | IEducationItem;

export interface IContactSection {
    firstName: string;
    lastName: string;
    items: IContactItem[];
}

export interface IContactItem {
    icon?: string;
    link?: string;
    display: string;
}

export interface ISummarySection {
    header: ISectionHeader;
    body: string;
}

export interface IWorkHistorySection {
    header: ISectionHeader;
    items: IWorkHistoryItem[];
}

export interface IWorkHistoryItem {
    companyName: string;
    jobTitle: string;
    companyLocation: string;
    employmentStart: string;
    employmentEnd: string;
    highlights: string[];
}

export interface ISkillsSection {
    header: ISectionHeader;
    items: ISkillsCategory[];
}

export interface ISkillsCategory {
    categoryName: string;
    items: string[];
}

export interface IEducationSection {
    header: ISectionHeader;
    items: IEducationItem[];
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

export interface ISectionHeader {
    class: string;
    content: string;
}
