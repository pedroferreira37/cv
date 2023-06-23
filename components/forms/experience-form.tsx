"use client";
import { useState, useEffect } from "react";
import { FormHandlerButton } from "../ui/add-form-button";
import { Input } from "../ui/input";
import { TextArea } from "../ui/text-area";
import { API } from "@/lib/api";
import { Experience } from "@/lib/reducer";
import { FiPlus, FiTrash } from "react-icons/fi";
import { Select } from "../ui/select";
import { months, years } from "@/lib/date";
import { debounce } from "@/lib/debounce";
import { CheckBox } from "../ui/check-box";

type Props = {
  experiences: Experience[];
  disptach: any;
  resumeId: string;
};

export const ExperienceForm = ({ experiences, disptach, resumeId }: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const [id, setId] = useState<string | null>(null);

  const create = () => {
    API.post(`/resume/${resumeId}/experiences`).then((req) => {
      if (!req.data) return;
      disptach({ type: "CREATE_EXPERIENCE", payload: req.data });
    });
  };

  const update = (e: any, experience: Experience) => {
    const value = e.target.value;
    const id = experience.id;
    const name = e.target.name;

    disptach({ type: "UPDATE_EXPERIENCE", id, name, payload: value });
    setId(id);
  };

  const remove = (e: any, experience: Experience) => {
    e.preventDefault();
    const id = experience.id;
    disptach({ type: "REMOVE_EXPERIENCE", id });
    API.delete(`/resume/${resumeId}/experiences/${id}`);

    setId(id);
  };

  const setCurrent = (e: any, experience: Experience) => {
    const name = e.target.name;
    const checked = e.target.checked;
    const id = experience.id;

    disptach({
      type: "UPDATE_EXPERIENCE",
      id,
      name,
      payload: checked,
    });

    setId(id);
  };

  useEffect(() => {
    const experience = experiences.filter((exp) => exp.id === id);
    const request = debounce(API.put, 1000);
    request(`/resume/${resumeId}/experiences/${id}`, experience);
  }, [experiences]);

  return (
    <div className="pt-4">
      <div className="flex justify-between items-center ">
        <h2>Experiências</h2>
        <FormHandlerButton
          data={experiences.length}
          collapse={active}
          onClick={create}
          onCollapse={(e: any) => setActive((active) => !active)}
        />
      </div>
      <div>
        {experiences.length
          ? experiences.map(
              (experience, index) =>
                active && (
                  <form key={experience?.id}>
                    <p className="w-full text-sm text-gray-500 pt-4 flex justify-between">
                      Experiencia {index + 1}
                      <button
                        className="bg-red-200 p-1 rounded"
                        onClick={(e) => remove(e, experience)}
                      >
                        <FiTrash size={14} className="text-red-600 " />
                      </button>
                    </p>
                    <div className="flex gap-4">
                      <Input
                        label="Profissao"
                        name="role"
                        id="role"
                        placeholder="Ex: Programador"
                        value={experience?.role as string}
                        onChange={(e) => update(e, experience)}
                      />
                      <Input
                        label="Empresa"
                        name="company"
                        id="company"
                        placeholder="Ex: Makrosystem"
                        value={experience?.company as string}
                        onChange={(e) => update(e, experience)}
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
                          value={experience.start_year as string}
                          options={years}
                          onChange={(e) => update(e, experience)}
                          name="start_year"
                          placeholder="Ex: 2020"
                          disabled={false}
                        />
                        <Select
                          value={experience.start_month as string}
                          options={months}
                          onChange={(e) => update(e, experience)}
                          name="start_month"
                          disabled={false}
                          placeholder="Ex: Janeiro"
                        />
                        <div className="absolute top-0 right-0 flex items-center gap-4">
                          <label className="text-[12px] text-gray-400 font-medium">
                            Atual
                          </label>
                          <CheckBox
                            name="current"
                            onChange={(e) => setCurrent(e, experience)}
                            checked={experience.current}
                          />
                        </div>
                        <Select
                          value={experience.end_year as string}
                          options={years}
                          onChange={(e) => update(e, experience)}
                          name="end_year"
                          placeholder="Ex: 2023"
                          disabled={experience.current}
                        />
                        <Select
                          value={experience.end_month as string}
                          options={months}
                          onChange={(e) => update(e, experience)}
                          name="end_month"
                          placeholder="Ex: Dezembro"
                          disabled={experience.current}
                        />
                      </div>
                    </div>
                    <TextArea
                      label="Descricao"
                      name="description"
                      id="description"
                      placeholder="Ex: I working with frontend develop"
                      value={experience?.description as string}
                      onChange={(e) => update(e, experience)}
                    />
                  </form>
                )
            )
          : null}
        {experiences.length > 0 && active && (
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
