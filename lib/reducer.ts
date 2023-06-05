import { uuid } from "@/lib/uuid";

export type Profile = {
  name: string;
  profession: string;
  email: string;
  linkedin: string;
  github: string;
  about: string;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  description: string;
  startDate: {
    year: number | null;
    month: number | null;
  };
  endDate: {
    year: number | null;
    month: number | null;
  };
};

export type Education = {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
};

type State = {
  profile: Profile;
  experiences: Experience[] | [];
  educations: Education[] | [];
};

export const initialState: State = {
  profile: {
    name: "",
    profession: "",
    email: "",
    linkedin: "",
    github: "",
    about: "",
  },
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
            startDate: "",
            endDate: "",
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
