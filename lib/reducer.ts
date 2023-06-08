import { uuid } from "@/lib/uuid";

export type Experience = {
  id: string;
  role: string | null;
  company: string | null;
  description: string | null;
  start_date: Date | null;
  end_date: Date | null;
  current: boolean;
};

export type Education = {
  id: string;
  degree: string | null;
  start_date: Date | null;
  end_date: Date | null;
  institution: string | null;
  current: boolean;
};

export type Resume = {
  id: string | null;
  name: string | null;
  role: string | null;
  mail: string | null;
  linkedin: string | null;
  github: string | null;
  about: string | null;
  experiences: Experience[];
  educations: Education[];
};

export const initialState: Resume = {
  id: "",
  name: "",
  role: "",
  mail: "",
  linkedin: "",
  github: "",
  about: "",
  experiences: [],
  educations: [],
};

export type Action =
  | {
      type: "change_profile";
      name: string;
      value: string;
    }
  | {
      type: "change_experience";
      name: string;
      payload: string | Partial<Experience>;
      id: string;
    }
  | {
      type: "add_experience";
    }
  | {
      type: "remove_experience";
      id: string;
    }
  | {
      type: "change_education";
      name: string;
      payload: string | Partial<Education>;
      id: string;
    }
  | {
      type: "add_education";
    }
  | {
      type: "remove_education";
      id: string;
    };

export const reducer = (state: State, action: Action): State => {
  const id = uuid();

  switch (action.type) {
    case "change_profile":
      return {
        ...state,
        profile: { ...state.profile, [action.name]: action.value },
      };
    case "change_experience":
      return {
        ...state,
        experiences: state.experiences.map((experience) =>
          experience.id === action.id
            ? { ...experience, [action.name]: action.payload }
            : experience
        ),
      };
    case "add_experience":
      return {
        ...state,
        experiences: [
          ...state.experiences,
          {
            id,
            role: "",
            company: "",
            startDate: {
              year: null,
              month: null,
            },
            endDate: {
              year: null,
              month: null,
              current: false,
            },
            description: "",
          },
        ],
      };

    case "remove_experience":
      return {
        ...state,
        experiences: state.experiences.filter(
          (experience) => experience.id !== action.id
        ),
      };

    case "change_education":
      return {
        ...state,
        educations: state.educations.map((education) =>
          education.id === action.id
            ? { ...education, [action.name]: action.payload }
            : education
        ),
      };
    case "add_education":
      return {
        ...state,
        educations: [
          ...state.educations,
          {
            id,
            degree: "",
            institution: "",
            startDate: {
              year: null,
              month: null,
            },
            endDate: {
              year: null,
              month: null,
              current: false,
            },
          },
        ],
      };

    case "remove_education":
      return {
        ...state,
        educations: state.educations.filter(
          (education) => education.id !== action.id
        ),
      };

    default:
      return state;
  }
};
