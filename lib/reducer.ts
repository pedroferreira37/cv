type User = {
  name: string;
  profession: string;
  email: string;
  linkedin: string;
  github: string;
  about: string;
};

type Experience = {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

type Education = {
  role: string;
  institution: string;
  startDate: string;
  endDate: string;
};

type Skills = { text: string };

export type State = {
  user: User;
  experience: Experience[] | [];
  education: Education[] | [];
  skills: Skills[] | [];
};

export const initialState: State = {
  user: {
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

type Action =
  | {
      type: "UPDATE_USER";
      name: string;
      value: string;
    }
  | { type: "UPDATE_EXPERIENCE"; name: string; value: string }
  | {
      type: "UPDATE_EDUCATION";
      name: string;
      value: string;
    }
  | {
      type: "UPDATE_SKILLS";
      name: string;
      value: string;
    };

function getState(state: State, action: Action): State {
  const { name: key, value } = action;
  return {
    ...state,
    [key]: state[key].map((item, index) => (index === +key ? value : item)),
  };
}

export function reducer(state: State, action: Action) {
  const { type, name, value } = action;
  switch (type) {
    case "UPDATE_USER":
      return { ...state, user: { ...state.user, [name]: value } };
    case "UPDATE_EXPERIENCE":
      return getState(state, action);
    case "UPDATE_EDUCATION":
      return getState(state, action);
    case "UPDATE_SKILLS":
      return getState(state, action);
    default:
      return state;
  }
}
