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

export type Profile = {
  id: string | null;
  resumeId: string | null;
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
      type: "UPDATE_PROFILE";
      name: string;
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
  const { type, name, key, id, payload } = action;

  switch (type) {
    case "INITILIAZE_RESUME":
      return { ...action.payload };
    case "UPDATE_PROFILE":
      return { ...state, profile: { ...state.profile, [name]: payload } };
    case "UPDATE_EXPERIENCE": {
      return { ...state, experiences: {} };
    }
    case "changed":
      if (Array.isArray(state[name])) {
        return {
          ...state,
          [name]: state[name].map((item: any) =>
            id === item.id ? { ...item, [key]: payload } : item
          ),
        };
      }

      return {
        ...state,
        [name]: payload,
      };

    case "changed_date_year":
      return {
        ...state,
        [name]: state[name].map((item: any) =>
          id === item.id
            ? {
                ...item,
                [key]: new Date(item[key].setFullYear(payload)),
              }
            : item
        ),
      };
    case "changed_date_month":
      return {
        ...state,
        [name]: state[name].map((item: any) =>
          id === item.id
            ? { ...item, [key]: new Date(item[key].setMonth(payload)) }
            : item
        ),
      };

    case "added_experience":
      return {
        ...state,
        experiences: [
          ...state.experiences,
          {
            id: uuid(),
            role: null,
            company: null,
            start_date: new Date(),
            end_date: new Date(),
            description: null,
            current: false,
          },
        ],
      };

    case "removed":
      return {
        ...state,
        [name]: state[name].filter((item: any) => item.id !== id),
      };

    case "added_education":
      return {
        ...state,
        educations: [
          ...state.educations,
          {
            id: uuid(),
            degree: "",
            institution: "",
            start_date: new Date(),
            end_date: new Date(),
            current: false,
          },
        ],
      };

    default:
      return state;
  }
};
