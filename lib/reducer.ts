export type Experience = {
  id: string;
  role: string | null;
  company: string | null;
  description: string | null;
  start_year: string | null;
  start_month: string | null;
  end_year: string | null;
  end_month: string | null;
  current: boolean;
};

export type Education = {
  id: string;
  degree: string | null;
  start_year: string | null;
  start_month: string | null;
  end_year: string | null;
  end_month: string | null;
  institution: string | null;
  current: boolean;
};

export type Profile = {
  id: string | null;
  resumeId: string;
  name: string | null;
  role: string | null;
  mail: string | null;
  linkedin: string | null;
  github: string | null;
  about: string | null;
};

export type Resume = {
  [key: string]: any;
  id: string | null;
  template: string | null;
  userId: string | null;
  profile: Profile;
  experiences: Experience[];
  educations: Education[];
};

export const initialState: Resume = {
  id: "",
  userId: "",
  template: "",
  profile: {
    id: "",
    resumeId: "",
    name: "",
    role: "",
    mail: "",
    linkedin: "",
    github: "",
    about: "",
  },
  experiences: [],
  educations: [],
};

export type Action =
  | {
      type: "INITILIAZE_RESUME";
      payload: Resume;
    }
  | {
      type: "CREATE_PROFILE";
      payload: Profile;
    }
  | {
      type: "UPDATE_PROFILE";
      name: string;
      payload: string;
    }
  | {
      type: "CREATE_EXPERIENCE";
      payload: Experience;
    }
  | {
      type: "UPDATE_EXPERIENCE";
      name: string;
      id: string;
      payload: string;
    }
  | {
      type: "removed";
      name: string;
      id: string;
    }
  | {
      type: "changed_date_year";
      name: string;
      key: string;
      id: string;
      payload: string;
    }
  | {
      type: "changed_date_month";
      name: string;
      key: string;
      id: string;
      payload: string;
    }
  | {
      type: "added_experience";
    }
  | {
      type: "added_education";
    };

export const reducer = (state: Resume, action: Action): Resume => {
  switch (action.type) {
    case "INITILIAZE_RESUME":
      return { ...action.payload };
    case "CREATE_PROFILE":
      return { ...state, profile: action.payload };
    case "UPDATE_PROFILE":
      const profile = {
        ...state.profile,
        [action.name]: action.payload,
      } as Profile;

      return { ...state, profile };

    case "CREATE_EXPERIENCE":
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
      };
    case "UPDATE_EXPERIENCE":
      const experiences = state.experiences.map((experience) =>
        experience.id === action.id
          ? { ...experience, [action.name]: action.payload }
          : experience
      );

      return { ...state, experiences };

    default:
      return state;
  }
};
