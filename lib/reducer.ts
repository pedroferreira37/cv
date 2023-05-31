export type Profile = {
  name: string;
  profession: string;
  email: string;
  linkedin: string;
  github: string;
  about: string;
};

export type Experience = {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Education = {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
};

type Skills = { text: string };

type GenericState<T> = {
  [K in keyof T]: T[K];
};

export type State = GenericState<{
  profile: Profile;
  experience: Experience[] | [];
  education: Education[] | [];
  skills: Skills[] | [];
}>;

export const initialState: State = {
  profile: {
    name: "",
    profession: "",
    email: "",
    linkedin: "",
    github: "",
    about: "",
  },
  experience: [],
  education: [],
  skills: [],
};

type Keys = keyof State;

type Action =
  | {
      type: "UPDATE_USER";
      name: Keys;
      value: string;
    }
  | { type: "UPDATE_EXPERIENCE"; name: keyof State; value: string }
  | {
      type: "UPDATE_EDUCATION";
      name: Keys;
      value: string;
    }
  | {
      type: "UPDATE_SKILLS";
      name: Keys;
      value: string;
    }
  | {
      type: "ADD_EXPERIENCE";
    }
  | {
      type: "REMOVE_EXPERIENCE";
      name: Keys;
      id: number;
    }
  | {
      type: "ADD_EDUCATION";
    }
  | {
      type: "REMOVE_EDUCATION";
      name: Keys;
      id: number;
    };

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, profile: { [action.name]: action.value } };
    case "UPDATE_EXPERIENCE":
    case "UPDATE_EDUCATION":
    case "UPDATE_SKILLS":
      return {
        ...state,
        [action.name]: state[action.name].map((item, index) =>
          index === +action.name ? action.value : item
        ),
      };

    case "ADD_EXPERIENCE":
      return {
        ...state,
        experience: [
          ...state.experience,
          {
            role: "",
            company: "",
            startDate: "",
            endDate: "",
            description: "",
          },
        ],
      };
    case "REMOVE_EXPERIENCE":
      return {
        ...state,
        experience: state.experience.filter(
          (item, index) => index !== action.id
        ),
      };
    case "ADD_EDUCATION":
      return {
        ...state,
        education: [
          ...state.education,
          {
            degree: "",
            institution: "",
            startDate: "",
            endDate: "",
          },
        ],
      };
    case "REMOVE_EDUCATION":
      return {
        ...state,
        education: state.education.filter((item, index) => index !== action.id),
      };

    default:
      return state;
  }
}
