import { Education } from "@/lib/reducer";
import { FiPlus, FiTrash } from "react-icons/fi";
import { CheckBox } from "./CheckBox";
import { Select } from "./Select";
import { Input } from "./input";
import { AddAndCollpaseButton } from "./AddAndCollapseButton";
import { useState, useEffect } from "react";
import { API } from "@/lib/api";
import { debounce } from "@/lib/debounce";
import { months, years } from "@/lib/date";

type Props = {
  educations: Education[];
  disptach: any;
  resumeId: string;
};

export const EducationForm = ({ educations, disptach, resumeId }: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const [id, setId] = useState<string | null>(null);

  const create = () => {
    API.post(`/resume/${resumeId}/educations`).then((req) => {
      if (!req.data) return;
      disptach({ type: "CREATE_EDUCATION", payload: req.data });
    });
  };

  const update = (e: any, education: Education) => {
    const value = e.target.value;
    const id = education.id;
    const name = e.target.name;

    disptach({ type: "UPDATE_EDUCATION", id, name, payload: value });
    API.delete(`/resume/${resumeId}/educations/${id}`);
    setId(id);
  };

  const remove = (e: any, education: Education) => {
    const id = education.id;
    disptach({ type: "REMOVE_EDUCATION", id });
  };

  const setCurrent = (e: any, education: Education) => {
    const name = e.target.name;
    const checked = e.target.checked;
    const id = education.id;

    disptach({
      type: "UPDATE_EDUCATION",
      id,
      name,
      payload: checked,
    });

    setId(id);
  };

  useEffect(() => {
    const education = educations.filter((exp) => exp.id === id);
    const request = debounce(API.put, 1000);
    request(`/resume/${resumeId}/educations/${id}`, education);
  }, [educations]);

  return (
    <div className="pt-4">
      <div className="flex justify-between items-center ">
        <h2>Educações</h2>
        <AddAndCollpaseButton
          data={educations.length}
          active={active}
          onDataRequest={create}
          onActive={(e: any) => setActive((active) => !active)}
        />
      </div>
      <div>
        {educations.length
          ? educations.map(
              (education, index) =>
                active && (
                  <form key={education?.id}>
                    <p className="w-full text-sm text-gray-500 pt-4 flex justify-between">
                      Experiencia {index + 1}
                      <button
                        className="bg-red-200 p-1 rounded"
                        onClick={(e) => remove(e, education)}
                      >
                        <FiTrash size={14} className="text-red-600" />
                      </button>
                    </p>
                    <div className="flex gap-4">
                      <Input
                        label="Formação"
                        name="degree"
                        id="degree"
                        placeholder="Ex: Ciência da computação"
                        value={education?.degree as string}
                        onChange={(e) => update(e, education)}
                      />
                      <Input
                        label="Instituição"
                        name="instituion"
                        id="instituion"
                        placeholder="Ex: Cefet"
                        value={education?.institution as string}
                        onChange={(e) => update(e, education)}
                      />
                    </div>
                    <div className="grid grid-row-2 grid-cols-4  relative">
                      <label className="text-sm text-gray-400 font-medium col-span-2 row-span-1">
                        Data Inicio
                      </label>
                      <label className="text-sm text-gray-400 font-medium col-span-2 row-span-1 ml-2">
                        Data Final
                      </label>
                      <div className="w-full flex col-span-4 gap-4">
                        <Select
                          value={education.start_year as string}
                          options={years}
                          onChange={(e) => update(e, education)}
                          name="start_year"
                          placeholder="Ex: 2020"
                          disabled={false}
                        />
                        <Select
                          value={education.start_month as string}
                          options={months}
                          onChange={(e) => update(e, education)}
                          name="start_month"
                          disabled={false}
                          placeholder="Ex: Janeiro"
                        />
                        <div className="absolute top-0 right-0 flex items-center gap-4">
                          <label className="text-sm text-gray-400 font-medium">
                            Atual
                          </label>
                          <CheckBox
                            name="current"
                            onChange={(e) => setCurrent(e, education)}
                            checked={education.current}
                          />
                        </div>
                        <Select
                          value={education.end_year as string}
                          options={years}
                          onChange={(e) => update(e, education)}
                          name="end_year"
                          placeholder="Ex: 2023"
                          disabled={education.current}
                        />
                        <Select
                          value={education.end_month as string}
                          options={months}
                          onChange={(e) => update(e, education)}
                          name="end_month"
                          placeholder="Ex: Dezembro"
                          disabled={education.current}
                        />
                      </div>
                    </div>
                  </form>
                )
            )
          : null}
        {educations.length > 0 && active && (
          <div className="flex justify-end mt-4">
            <button
              className="bg-green-field  text-white px-1 py-1  font-medium text-sm rounded flex items-center gap-2 group "
              onClick={create}
            >
              <FiPlus size={20} className="group-hover:rotate-90 transition" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
