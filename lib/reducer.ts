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
  name: string | null;
  template: string | null;
  userId: string | null;
  profile: Profile | null;
  experiences: Experience[];
  educations: Education[];
};

export const initialState: Resume = {
  id: "",
  userId: "",
  name: "",
  template: "",
  profile: null,
  experiences: [],
  educations: [],
};

export type Action =
  | {
      type: "INITILIAZE_RESUME";
      payload: Resume;
    }
  | {
      type: "UPDATE_RESUME";
      payload: string;
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
      type: "REMOVE_EXPERIENCE";

      id: string;
    }
  | {
      type: "CREATE_EDUCATION";
      payload: Education;
    }
  | {
      type: "UPDATE_EDUCATION";
      name: string;
      id: string;
      payload: string;
    }
  | {
      type: "REMOVE_EDUCATION";
      id: string;
    };

export const reducer = (state: Resume, action: Action): Resume => {
  switch (action.type) {
    case "INITILIAZE_RESUME":
      return { ...action.payload };
    case "UPDATE_RESUME":
      return { ...state, name: action.payload };
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
    case "REMOVE_EXPERIENCE":
      const removedExp = state.experiences.filter(
        (experience) => experience.id !== action.id
      );

      return { ...state, experiences: removedExp };
    case "CREATE_EDUCATION":
      return {
        ...state,
        educations: [...state.educations, action.payload],
      };
    case "UPDATE_EDUCATION":
      const educations = state.educations.map((education) =>
        education.id === action.id
          ? { ...education, [action.name]: action.payload }
          : education
      );
      return { ...state, educations };
    case "REMOVE_EDUCATION":
      const removedEducation = state.educations.filter(
        (experience) => experience.id !== action.id
      );
      return { ...state, educations: removedEducation };
    default:
      return state;
  }
};
