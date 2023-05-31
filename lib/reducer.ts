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
  startDate: {
    year: string;
    month: string;
  };
  endDate: {
    year: string;
    month: string;
  };
  description: string;
};

export type Degrees = {
  role: string;
  institution: string;
  startDate: {
    year: string;
    month: string;
  };
  endDate: {
    year: string;
    month: string;
  };
};

type Skills = { text: string };

type GenericState<T> = {
  [K in keyof T]: T[K];
};

export type State = GenericState<{
  profile: Profile;
  experience: Experience[] | [];
  education: Degrees[] | [];
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
    };

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "UPDATE_USER":
    case "UPDATE_EXPERIENCE":
    case "UPDATE_EDUCATION":
    case "UPDATE_SKILLS":
      return {
        ...state,
        [key]: state[key].map((item, index) =>
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
    default:
      return state;
  }
}
