interface SanityBody {
    _createdAt: string;
    _rev: string;
    _id: string;
    _updatedAt: string;   
}

interface Image {
    _type: string;
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody{
    _type : "pageInfo",
    address : string,
    backgroundInformation : string,
    email : string,
    role : string,
    heroImage : Image,
    name : string,
    phoneNumber : string,
    profilePic : Image,
}

export interface Technologies extends SanityBody{
    _type : "skill",
    projectImage : Image,
    progress : string,
    skillTitle : string,
}

export interface Skills extends SanityBody{
    _type : "skill",
    projectImage : Image,
    progress : string,
    skillTitle : string,
}

export interface Projects extends SanityBody{
    _type : "projects",
    projectTitle : string,
    projectImage : Image,
    linkToBuild : string,
    summary : string[],
    technologies : Technologies[],
}

export interface Experience extends SanityBody{
    _type : "experience",
    company : string,
    companyImage : Image,
    dateStarted : string,
    dateEnded : string,
    isCurrentlyWorking : boolean,
    jobTitle : string,
    points : string[],
    technologies : Technologies[],
}

export interface Social extends SanityBody {
    _type: "social",
    url: string,
    socialTitle: string
}
